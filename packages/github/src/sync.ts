import type { Octokit } from "./client";
import { ingestCommit, upsertDeveloper } from "./ingest";

const CONCURRENT = 5;
const PAGE_SIZE = 100;

export async function ingestCommitDetail(
  octokit: Octokit,
  orgId: string,
  repoId: string,
  owner: string,
  repo: string,
  sha: string
): Promise<void> {
  const { data } = await octokit.repos.getCommit({ owner, repo, ref: sha });

  const githubLogin = data.author?.login ?? data.commit.author?.email ?? "unknown";
  const githubId = data.author?.id ?? 0;
  const name = data.commit.author?.name ?? null;
  const avatarUrl = data.author?.avatar_url ?? null;
  const committedAt = new Date(data.commit.author?.date ?? Date.now());

  const developerId = await upsertDeveloper(orgId, githubLogin, githubId, name, avatarUrl);

  await ingestCommit(
    orgId,
    repoId,
    developerId,
    sha,
    data.commit.message,
    data.stats?.additions ?? 0,
    data.stats?.deletions ?? 0,
    data.files?.length ?? 0,
    committedAt
  );
}

export async function syncRepoCommits(
  octokit: Octokit,
  orgId: string,
  repoId: string,
  owner: string,
  repo: string,
  since?: Date
): Promise<number> {
  let page = 1;
  let processed = 0;

  for (;;) {
    const { data: commits } = await octokit.repos.listCommits({
      owner,
      repo,
      per_page: PAGE_SIZE,
      page,
      ...(since ? { since: since.toISOString() } : {}),
    });

    if (commits.length === 0) break;

    for (let i = 0; i < commits.length; i += CONCURRENT) {
      const batch = commits.slice(i, i + CONCURRENT);
      await Promise.all(
        batch.map((c) => ingestCommitDetail(octokit, orgId, repoId, owner, repo, c.sha))
      );
      processed += batch.length;
    }

    if (commits.length < PAGE_SIZE) break;
    page++;
  }

  return processed;
}
