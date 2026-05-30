import { NextRequest, NextResponse } from "next/server";
import { createOctokitClient, syncRepoCommits } from "@lucyn/github";
import { prisma } from "@lucyn/db";

// Vercel sets Authorization: Bearer <CRON_SECRET> when invoking cron routes.
export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error("[cron/sync-commits] GITHUB_TOKEN not configured");
    return NextResponse.json({ error: "GITHUB_TOKEN not configured" }, { status: 500 });
  }

  const octokit = createOctokitClient(token);
  // 25-hour window so consecutive daily runs always overlap slightly.
  const since = new Date(Date.now() - 25 * 60 * 60 * 1000);

  const repos = await prisma.repository.findMany({
    select: { id: true, orgId: true, fullName: true },
  });

  const results: Array<{ repo: string; count: number; error?: string }> = [];

  for (const repo of repos) {
    const [owner, name] = repo.fullName.split("/");
    try {
      const count = await syncRepoCommits(octokit, repo.orgId, repo.id, owner, name, since);
      results.push({ repo: repo.fullName, count });
      console.log(`[cron/sync-commits] ${repo.fullName}: ${count} commit(s) synced`);
    } catch (err) {
      const error = err instanceof Error ? err.message : String(err);
      results.push({ repo: repo.fullName, count: 0, error });
      console.error(`[cron/sync-commits] ${repo.fullName} failed:`, err);
    }
  }

  const total = results.reduce((sum, r) => sum + r.count, 0);
  console.log(`[cron/sync-commits] Done — ${total} commit(s) across ${repos.length} repo(s)`);

  return NextResponse.json({ synced: results, total });
}
