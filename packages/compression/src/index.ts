// Token compression utilities for LLM context optimization.
// Reduces token count while preserving semantic meaning for prompt engineering.

const AVG_CHARS_PER_TOKEN = 4;

// Common whitespace and redundancy patterns to compress
const WHITESPACE_RULES: Array<[RegExp, string]> = [
  [/\r\n/g, "\n"],                    // normalize line endings
  [/\t/g, "  "],                      // tabs to 2 spaces
  [/[ ]+\n/g, "\n"],                  // trailing spaces
  [/\n{3,}/g, "\n\n"],               // collapse 3+ blank lines to 2
  [/[ ]{3,}/g, "  "],                // collapse 3+ spaces to 2
];

// HTML-specific compression rules
const HTML_RULES: Array<[RegExp, string]> = [
  [/<!--[\s\S]*?-->/g, ""],           // strip HTML comments
  [/\s+class="[^"]*"/g, ""],         // strip class attributes (often noisy)
  [/\s+style="[^"]*"/g, ""],         // strip inline styles
  [/\s+data-[a-z-]+="[^"]*"/g, ""], // strip data attributes
  [/<script[\s\S]*?<\/script>/gi, ""], // strip script tags
  [/<style[\s\S]*?<\/style>/gi, ""],  // strip style tags
  [/\s+/g, " "],                      // collapse whitespace
  [/> </g, "><"],                     // remove spaces between tags
];

// Boilerplate patterns common in code and docs
const BOILERPLATE_PATTERNS: RegExp[] = [
  /^\/\/ (Generated|Auto-generated|This file is auto-generated).*$/gm,
  /^\/\*[\s\S]*?Copyright[\s\S]*?\*\//gm,
  /^\/\/ eslint-disable.*$/gm,
  /^\/\/ @ts-.*$/gm,
  /^import type \{[\s\S]*?\} from ['"][^'"]+['"];$/gm, // type-only imports (low value)
];

/**
 * Compress plain text by removing redundant whitespace and boilerplate.
 */
export function compress(input: string): string {
  let result = input;

  for (const [pattern, replacement] of WHITESPACE_RULES) {
    result = result.replace(pattern, replacement);
  }

  for (const pattern of BOILERPLATE_PATTERNS) {
    result = result.replace(pattern, "");
  }

  return result.trim();
}

/**
 * Compress HTML content by stripping noise while keeping semantic structure.
 */
export function compressHtml(html: string): string {
  let result = html;

  for (const [pattern, replacement] of HTML_RULES) {
    result = result.replace(pattern, replacement);
  }

  // Final whitespace pass
  result = compress(result);

  return result;
}

/**
 * Estimate token count for a string using the ~4 chars/token heuristic.
 * More accurate than naive word-count; less accurate than a real tokenizer.
 */
export function estimateTokens(text: string): number {
  return Math.ceil(text.length / AVG_CHARS_PER_TOKEN);
}

/**
 * Truncate text to fit within a token budget, preserving complete sentences.
 * Prefers cutting at paragraph boundaries, then sentence boundaries.
 */
export function truncateToTokenBudget(text: string, maxTokens: number): string {
  const maxChars = maxTokens * AVG_CHARS_PER_TOKEN;
  if (text.length <= maxChars) return text;

  const truncated = text.slice(0, maxChars);

  // Try to cut at paragraph boundary
  const lastParagraph = truncated.lastIndexOf("\n\n");
  if (lastParagraph > maxChars * 0.7) {
    return truncated.slice(0, lastParagraph).trim();
  }

  // Fall back to sentence boundary
  const lastSentence = Math.max(
    truncated.lastIndexOf(". "),
    truncated.lastIndexOf("! "),
    truncated.lastIndexOf("? ")
  );
  if (lastSentence > maxChars * 0.7) {
    return truncated.slice(0, lastSentence + 1).trim();
  }

  // Last resort: cut at word boundary
  const lastSpace = truncated.lastIndexOf(" ");
  return truncated.slice(0, lastSpace).trim() + "…";
}

/**
 * Compress a list of code chunks to fit within a token budget.
 * Prioritizes chunks by relevance score; drops lowest-scored chunks first.
 */
export function compressChunks(
  chunks: Array<{ content: string; score: number }>,
  maxTokens: number
): Array<{ content: string; score: number }> {
  const sorted = [...chunks].sort((a, b) => b.score - a.score);
  const result: Array<{ content: string; score: number }> = [];
  let usedTokens = 0;

  for (const chunk of sorted) {
    const compressed = compress(chunk.content);
    const tokens = estimateTokens(compressed);
    if (usedTokens + tokens <= maxTokens) {
      result.push({ content: compressed, score: chunk.score });
      usedTokens += tokens;
    }
  }

  return result.sort((a, b) => b.score - a.score);
}
