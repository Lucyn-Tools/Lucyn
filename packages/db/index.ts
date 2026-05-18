export { PrismaClient } from "./generated/client";
export type {
  Organization,
  OrgMember,
  OrgRole,
  Repository,
  Developer,
  Commit,
  PullRequest,
  PRState,
  PRFeedback,
  Meeting,
  MeetingType,
  Task,
  TaskStatus,
  Sprint,
  Embedding,
  EmbeddingSource,
  ChatSession,
  ChatMessage,
} from "./generated/client";

import { PrismaClient } from "./generated/client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const prisma =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
