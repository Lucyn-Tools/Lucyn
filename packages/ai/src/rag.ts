import { prisma } from "@lucyn/db";
import type { EmbeddingSource } from "@lucyn/db";
import { embed, cosineSimilarity } from "./embeddings";

export interface RetrievedChunk {
  id: string;
  content: string;
  sourceType: EmbeddingSource;
  sourceId: string;
  similarity: number;
  metadata: Record<string, unknown>;
}

export interface RetrieveOptions {
  sourceTypes?: EmbeddingSource[];
  repoId?: string;
  limit?: number;
  minSimilarity?: number;
}

export async function retrieve(
  query: string,
  orgId: string,
  options: RetrieveOptions = {}
): Promise<RetrievedChunk[]> {
  const { sourceTypes, repoId, limit = 10, minSimilarity = 0.3 } = options;

  const queryVector = await embed(query);

  const embeddings = await prisma.embedding.findMany({
    where: {
      orgId,
      ...(sourceTypes?.length ? { sourceType: { in: sourceTypes } } : {}),
      ...(repoId ? { repoId } : {}),
    },
    select: { id: true, content: true, sourceType: true, sourceId: true, metadata: true },
    take: 200, // fetch candidate pool, then re-rank by cosine similarity
  });

  // In-memory cosine ranking until pgvector is wired up
  const ranked = embeddings
    .map((e) => {
      const meta = e.metadata as Record<string, unknown> & { vector?: number[] };
      const vector: number[] = Array.isArray(meta?.vector) ? (meta.vector as number[]) : [];
      const similarity = vector.length ? cosineSimilarity(queryVector, vector) : 0;
      return {
        id: e.id,
        content: e.content,
        sourceType: e.sourceType,
        sourceId: e.sourceId,
        similarity,
        metadata: meta,
      };
    })
    .filter((e) => e.similarity >= minSimilarity)
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, limit);

  return ranked;
}
