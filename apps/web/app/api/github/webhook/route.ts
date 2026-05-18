import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@lucyn/db";
import { validateWebhookSignature, upsertDeveloper, ingestCommit } from "@lucyn/github";
import type { PushEvent } from "@lucyn/github";

export async function POST(req: NextRequest) {
  const signature = req.headers.get("x-hub-signature-256") ?? "";
  const secret = process.env.GITHUB_WEBHOOK_SECRET ?? "";
  const body = await req.text();

  if (!validateWebhookSignature(body, signature, secret)) {
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  const event = req.headers.get("x-github-event");
  const payload = JSON.parse(body);

  if (event === "push") {
    const push = payload as PushEvent;
    const repo = await prisma.repository.findFirst({
      where: { githubId: push.repository.id },
    });
    if (!repo) return NextResponse.json({ ok: true });

    for (const commit of push.commits) {
      const login = commit.author.username ?? commit.author.name;
      const devId = await upsertDeveloper(repo.orgId, login, 0, commit.author.name, null);
      await ingestCommit(
        repo.orgId,
        repo.id,
        devId,
        commit.id,
        commit.message,
        commit.added.length,
        commit.removed.length,
        commit.added.length + commit.modified.length + commit.removed.length,
        new Date()
      );
    }
  }

  return NextResponse.json({ ok: true });
}
