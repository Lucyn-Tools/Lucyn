import { NextRequest, NextResponse } from "next/server";
import { validateWebhookSignature } from "@lucyn/github";
import type { PushEvent, PullRequestEvent } from "@lucyn/github";

export async function POST(request: NextRequest) {
  const payload = await request.text();

  const signature = request.headers.get("x-hub-signature-256");
  const event = request.headers.get("x-github-event");
  const deliveryId = request.headers.get("x-github-delivery");

  if (!signature || !validateWebhookSignature(payload, signature, process.env.GITHUB_WEBHOOK_SECRET ?? "")) {
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
      handlePush(body as unknown as PushEvent);
      break;

    case "pull_request":
      handlePullRequest(body as unknown as PullRequestEvent);
      break;

    case "pull_request_review":
      handlePullRequestReview(body);
      break;

    case "ping":
      console.log("[webhook] Ping received — webhook is connected");
      break;

    default:
      console.log(`[webhook] Unhandled event type: ${event}`);
  }

  return NextResponse.json({ received: true }, { status: 200 });
}

// Stubs — full ingestion logic comes in issues #11 and #12.

function handlePush(body: PushEvent) {
  const { ref, repository, commits } = body;
  console.log(`[webhook] Push to ${ref} in ${repository.full_name} — ${commits.length} commit(s)`);
  // TODO (issue #11): trigger commit ingestion pipeline
}

function handlePullRequest(body: PullRequestEvent) {
  const { action, number, pull_request, repository } = body;
  console.log(`[webhook] PR #${number} ${action} in ${repository.full_name}: "${pull_request.title}"`);
  // TODO (issue #12): trigger PR ingestion pipeline
}

function handlePullRequestReview(body: Record<string, unknown>) {
  const action = body.action as string;
  const pr = body.pull_request as Record<string, unknown>;
  const repo = (body.repository as Record<string, unknown>)?.full_name;
  console.log(`[webhook] PR review ${action} on PR #${pr?.number} in ${repo}`);
  // TODO (issue #12): update PR review cycle count
}
