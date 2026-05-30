import { prisma } from "@lucyn/db";
import type { Octokit } from "./client";

export async function ingestRepository(
  octokit: Octokit,
  orgId: string,
  owner: string,
  repo: string
): Promise<string> {
  const { data: repoData } = await octokit.repos.get({ owner, repo });

  const dbRepo = await prisma.repository.upsert({
    where: { githubId: repoData.id },
    create: {
      orgId,
      githubId: repoData.id,
      name: repoData.name,
      fullName: repoData.full_name,
      description: repoData.description ?? null,
      language: repoData.language ?? null,
      isPrivate: repoData.private,
    },
    update: {
      name: repoData.name,
      description: repoData.description ?? null,
      language: repoData.language ?? null,
      isPrivate: repoData.private,
    },
  });

  return dbRepo.id;
}

export async function ingestCommit(
  orgId: string,
  repoId: string,
  developerId: string,
  sha: string,
  message: string,
  additions: number,
  deletions: number,
  filesChanged: number,
  committedAt: Date
): Promise<void> {
  await prisma.commit.upsert({
    where: { sha },
    create: { repoId, developerId, sha, message, additions, deletions, filesChanged, committedAt },
    update: {},
  });
}

export async function ingestPullRequest(
  repoId: string,
  authorId: string,
  githubId: number,
  number: number,
  title: string,
  body: string | null,
  state: "OPEN" | "CLOSED" | "MERGED",
  additions: number,
  deletions: number,
  mergedAt: Date | null
): Promise<void> {
  await prisma.pullRequest.upsert({
    where: { githubId },
    create: { repoId, authorId, githubId, number, title, body, state, additions, deletions, mergedAt },
    update: { title, body, state, additions, deletions, mergedAt },
  });
}

export async function incrementPRReviewCycles(githubPRId: number): Promise<void> {
  await prisma.pullRequest.updateMany({
    where: { githubId: githubPRId },
    data: { reviewCycles: { increment: 1 } },
  });
}

export async function upsertDeveloper(
  orgId: string,
  githubLogin: string,
  githubId: number,
  name: string | null,
  avatarUrl: string | null
): Promise<string> {
  const dev = await prisma.developer.upsert({
    where: { orgId_githubLogin: { orgId, githubLogin } },
    create: { orgId, githubLogin, githubId, name, avatarUrl },
    update: { name, avatarUrl },
  });
  return dev.id;
}
