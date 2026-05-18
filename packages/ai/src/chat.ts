import Anthropic from "@anthropic-ai/sdk";
import { retrieve } from "./rag";
import { truncateToTokenBudget } from "@lucyn/compression";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

const SYSTEM_PROMPT = `You are Lucyn, a senior AI Product Engineer embedded inside a software company. You have deep access to the organization's engineering data: commits, pull requests, developer profiles, meeting summaries, sprint history, and repository health.

Your role:
- Answer questions from leadership and engineers about their engineering org
- Provide data-driven insights about delivery velocity, team health, and technical risk
- Never hallucinate metrics or data — only reference what is in the provided context
- Cite your sources inline using [Source: type/id] format
- Be concise and business-focused for leadership questions
- Be technical and specific for developer questions
- Never compare individual developers' performance publicly
- Protect developer privacy — individual productivity data is for guidance only

If you don't have data to answer a question, say so clearly and suggest what data would help.`;

export async function* streamChat(
  messages: ChatMessage[],
  orgId: string
): AsyncGenerator<string> {
  const lastUserMessage = [...messages].reverse().find((m) => m.role === "user")?.content ?? "";

  // Retrieve relevant context via RAG
  const chunks = await retrieve(lastUserMessage, orgId, { limit: 8 });
  const contextBlock = chunks.length
    ? `\n\nRelevant context from your organization's data:\n\n${chunks
        .map((c) => `[Source: ${c.sourceType}/${c.sourceId}]\n${c.content}`)
        .join("\n\n---\n\n")}`
    : "";

  const systemWithContext = truncateToTokenBudget(SYSTEM_PROMPT + contextBlock, 4000);

  const stream = client.messages.stream({
    model: "claude-sonnet-4-5",
    max_tokens: 1024,
    system: systemWithContext,
    messages: messages.map((m) => ({ role: m.role, content: m.content })),
  });

  for await (const event of stream) {
    if (
      event.type === "content_block_delta" &&
      event.delta.type === "text_delta"
    ) {
      yield event.delta.text;
    }
  }
}

export async function chat(messages: ChatMessage[], orgId: string): Promise<string> {
  let result = "";
  for await (const chunk of streamChat(messages, orgId)) {
    result += chunk;
  }
  return result;
}
