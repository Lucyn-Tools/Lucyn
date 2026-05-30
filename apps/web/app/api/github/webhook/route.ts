import { NextRequest, NextResponse } from "next/server";
import {
  validateWebhookSignature,
  createOctokitClient,
  ingestCommitDetail,
  ingestPullRequest,
  incrementPRReviewCycles,
  upsertDeveloper,
} from "@lucyn/github";
import type { PushEvent, PullRequestEvent, PullRequestReviewEvent } from "@lucyn/github";
import { prisma } from "@lucyn/db";

export async function POST(request: NextRequest) {
  const payload = await request.text();

  const signature = request.headers.get("x-hub-signature-256");
  const event = request.headers.get("x-github-event");
  const deliveryId = request.headers.get("x-github-delivery");

  const secret = process.env.GITHUB_WEBHOOK_SECRET;
  if (!secret) {
    console.error(`[webhook] GITHUB_WEBHOOK_SECRET is not configured | delivery: ${deliveryId}`);
    return NextResponse.json({ error: "Webhook secret not configured" }, { status: 500 });
  }

  if (!signature || !validateWebhookSignature(payload, signature, secret)) {
    console.warn(`[webhook] Invalid signature for delivery ${deliveryId}`);
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let body: Record<string, unknown>;
  try {
    body = JSON.parse(payload);
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload" }, { status: 400 });
  }

  console.log(`[webhook] Received event: ${event} | delivery: ${deliveryId}`);

  switch (event) {
    case "push":
      try {
        await handlePush(body as unknown as PushEvent);
      } catch (err) {
        console.error(`[webhook] Push ingestion failed | delivery: ${deliveryId}`, err);
      }
      break;

    case "pull_request":
      try {
        await handlePullRequest(body as unknown as PullRequestEvent);
      } catch (err) {
        console.error(`[webhook] PR ingestion failed | delivery: ${deliveryId}`, err);
      }
      break;

    case "pull_request_review":
      try {
        await handlePullRequestReview(body as unknown as PullRequestReviewEvent);
      } catch (err) {
        console.error(`[webhook] PR review ingestion failed | delivery: ${deliveryId}`, err);
      }
      break;

    case "ping":
      console.log("[webhook] Ping received — webhook is connected");
      break;

    default:
      console.log(`[webhook] Unhandled event type: ${event}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

async function handlePush(body: PushEvent): Promise<void> {
  const { ref, repository, commits } = body;

  if (commits.length === 0) return;

  const token = process.env.GITHUB_TOKEN;
  if (!token) {
    console.error("[webhook/push] GITHUB_TOKEN not configured");
    return;
  }

  const dbRepo = await prisma.repository.findUnique({
    where: { githubId: repository.id },
    select: { id: true, orgId: true },
  });

  if (!dbRepo) {
    console.warn(`[webhook/push] ${repository.full_name} not found in DB — skipping`);
    return;
  }

  const [owner, repo] = repository.full_name.split("/");
  const octokit = createOctokitClient(token);

  const results = await Promise.allSettled(
    commits.map((commit) =>
      ingestCommitDetail(octokit, dbRepo.orgId, dbRepo.id, owner, repo, commit.id)
    )
  );

  let ingested = 0;
  for (const [i, result] of results.entries()) {
    if (result.status === "fulfilled") {
      ingested++;
    } else {
      console.error(
        `[webhook/push] Commit ${commits[i].id} failed in ${repository.full_name}:`,
        result.reason
      );
    }
  }

  console.log(`[webhook/push] Ingested ${ingested}/${commits.length} commit(s) from ${ref} in ${repository.full_name}`);
}

async function handlePullRequest(body: PullRequestEvent): Promise<void> {
  const { action, pull_request: pr, repository } = body;

  const dbRepo = await prisma.repository.findUnique({
    where: { githubId: repository.id },
    select: { id: true, orgId: true },
  });

  if (!dbRepo) {
    console.warn(`[webhook/pull_request] ${repository.full_name} not found in DB — skipping`);
    return;
  }

  const authorId = await upsertDeveloper(dbRepo.orgId, pr.user.login, pr.user.id, null, null);
  const state: "OPEN" | "CLOSED" | "MERGED" = pr.merged
    ? "MERGED"
    : pr.state === "closed"
      ? "CLOSED"
      : "OPEN";

  await ingestPullRequest(
    dbRepo.id,
    authorId,
    pr.id,
    pr.number,
    pr.title,
    pr.body,
    state,
    pr.additions,
    pr.deletions,
    pr.merged_at ? new Date(pr.merged_at) : null
  );

  if (action === "review_requested") {
    await incrementPRReviewCycles(pr.id);
  }

  console.log(`[webhook/pull_request] PR #${pr.number} ${action} → ${state} in ${repository.full_name}`);
}

async function handlePullRequestReview(body: PullRequestReviewEvent): Promise<void> {
  const { action, review, pull_request: pr, repository } = body;
  console.log(
    `[webhook/pull_request_review] ${review.state} review ${action} on PR #${pr.number} in ${repository.full_name}`
  );
}
