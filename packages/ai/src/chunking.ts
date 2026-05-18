import { estimateTokens } from "@lucyn/compression";

export interface Chunk {
  content: string;
  index: number;
  tokens: number;
  metadata?: Record<string, unknown>;
}

const MAX_CHUNK_TOKENS = 800;
const OVERLAP_TOKENS = 100;

// Chunks code by function/class boundaries using simple heuristics.
function chunkCode(code: string): string[] {
  const lines = code.split("\n");
  const chunks: string[] = [];
  let current: string[] = [];
  let currentTokens = 0;

  for (const line of lines) {
    const lineTokens = estimateTokens(line);
    const isTopLevelBoundary =
      /^(export\s+)?(function|class|const\s+\w+\s*=\s*(async\s+)?\(|async\s+function|interface\s+|type\s+\w+\s*=)/.test(
        line.trim()
      );

    if (isTopLevelBoundary && current.length > 0 && currentTokens > MAX_CHUNK_TOKENS * 0.3) {
      chunks.push(current.join("\n"));
      // Keep last OVERLAP_TOKENS worth of lines for context overlap
      let overlapTokens = 0;
      const overlapLines: string[] = [];
      for (let i = current.length - 1; i >= 0; i--) {
        overlapTokens += estimateTokens(current[i]);
        overlapLines.unshift(current[i]);
        if (overlapTokens >= OVERLAP_TOKENS) break;
      }
      current = overlapLines;
      currentTokens = overlapTokens;
    }

    if (currentTokens + lineTokens > MAX_CHUNK_TOKENS && current.length > 0) {
      chunks.push(current.join("\n"));
      current = [];
      currentTokens = 0;
    }

    current.push(line);
    currentTokens += lineTokens;
  }

  if (current.length > 0) chunks.push(current.join("\n"));
  return chunks;
}

// Chunks prose text by paragraph/topic boundaries.
function chunkText(text: string): string[] {
  const paragraphs = text.split(/\n\n+/);
  const chunks: string[] = [];
  let current: string[] = [];
  let currentTokens = 0;

  for (const para of paragraphs) {
    const paraTokens = estimateTokens(para);

    if (currentTokens + paraTokens > MAX_CHUNK_TOKENS && current.length > 0) {
      chunks.push(current.join("\n\n"));
      current = [];
      currentTokens = 0;
    }

    current.push(para);
    currentTokens += paraTokens;
  }

  if (current.length > 0) chunks.push(current.join("\n\n"));
  return chunks;
}

export function chunkContent(content: string, contentType: "code" | "text" = "text"): Chunk[] {
  const rawChunks = contentType === "code" ? chunkCode(content) : chunkText(content);

  return rawChunks.map((chunk, index) => ({
    content: chunk.trim(),
    index,
    tokens: estimateTokens(chunk),
  }));
}
