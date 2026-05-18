import { Client } from "discord.js";
import { prisma } from "@lucyn/db";
import { chat } from "@lucyn/ai";
import { analyzeCommitMessage } from "@lucyn/github";

interface PRFeedbackInput {
  orgId: string;
  githubLogin: string;
  prNumber: number;
  prTitle: string;
  prBody: string | null;
  commitMessages: string[];
  additions: number;
  deletions: number;
}

export async function sendPRFeedback(
  client: Client,
  input: PRFeedbackInput
): Promise<void> {
  const { orgId, githubLogin, prNumber, prTitle, prBody, commitMessages, additions, deletions } = input;

  const developer = await prisma.developer.findFirst({
    where: { orgId, githubLogin },
  });

  if (!developer?.discordUserId) return; // not linked to Discord

  const commitAnalyses = commitMessages.map((msg) => analyzeCommitMessage(msg));
  const commitIssues = commitAnalyses.flatMap((a) => a.issues);
  const commitSuggestions = commitAnalyses.flatMap((a) => a.suggestions);

  const contextPrompt = `
You are giving private, friendly PR feedback to a developer. This is a one-on-one DM — never punitive, never comparative.

PR #${prNumber}: "${prTitle}"
Changes: +${additions} / -${deletions} lines
${prBody ? `Description: ${prBody.slice(0, 500)}` : "No description provided."}

Commit quality analysis:
${commitIssues.length > 0 ? `Issues found: ${commitIssues.join(", ")}` : "Commit messages look good."}
${commitSuggestions.length > 0 ? `Suggestions: ${commitSuggestions.join(", ")}` : ""}

Write 2-3 sentences of specific, actionable feedback. Be encouraging. Explain the WHY behind any suggestion.
End with: "Reply \`skip\` to opt out of feedback for this PR."
`.trim();

  const feedback = await chat(
    [{ role: "user", content: contextPrompt }],
    orgId
  );

  try {
    const discordUser = await client.users.fetch(developer.discordUserId);
    const dm = await discordUser.createDM();

    await dm.send(`**Lucyn — PR Feedback for #${prNumber}**\n\n${feedback}`);

    await prisma.pRFeedback.create({
      data: {
        prId: prNumber.toString(),
        feedbackType: "commit_hygiene",
        content: feedback,
        sentViaDiscord: true,
      },
    });
  } catch (err) {
    console.error(`[lucyn-bot] Failed to send DM to ${githubLogin}:`, err);
  }
}
