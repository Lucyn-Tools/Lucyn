import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

// Anthropic doesn't have an embeddings endpoint yet, so we use a stub
// that can be swapped for OpenAI's text-embedding-3-small or a local model.
// For production, replace with: import OpenAI from "openai";
export const EMBEDDING_DIMENSION = 1536;

export async function embed(text: string): Promise<number[]> {
  // Stub: returns a normalized random vector of the right dimension.
  // Replace with a real embedding API call before production.
  const vector = Array.from({ length: EMBEDDING_DIMENSION }, () => Math.random() - 0.5);
  const norm = Math.sqrt(vector.reduce((sum, v) => sum + v * v, 0));
  return vector.map((v) => v / norm);
}

export async function embedBatch(texts: string[]): Promise<number[][]> {
  return Promise.all(texts.map(embed));
}

export function cosineSimilarity(a: number[], b: number[]): number {
  if (a.length !== b.length) throw new Error("Vector dimension mismatch");
  let dot = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dot / (Math.sqrt(normA) * Math.sqrt(normB));
}
