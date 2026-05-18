import { createHmac, timingSafeEqual } from "crypto";

export function validateWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const expected = `sha256=${createHmac("sha256", secret).update(payload).digest("hex")}`;
  try {
    return timingSafeEqual(Buffer.from(signature), Buffer.from(expected));
  } catch {
    return false;
  }
}

export type GitHubWebhookEventType =
  | "push"
  | "pull_request"
  | "pull_request_review"
  | "pull_request_review_comment";

export interface PushEvent {
  ref: string;
  repository: { id: number; full_name: string };
  commits: Array<{
    id: string;
    message: string;
    author: { name: string; email: string; username?: string };
    added: string[];
    modified: string[];
    removed: string[];
  }>;
  pusher: { name: string; email: string };
}

export interface PullRequestEvent {
  action: "opened" | "closed" | "reopened" | "synchronize" | "review_requested";
  number: number;
  pull_request: {
    id: number;
    number: number;
    title: string;
    body: string | null;
    state: "open" | "closed";
    merged: boolean;
    merged_at: string | null;
    additions: number;
    deletions: number;
    user: { login: string; id: number };
  };
  repository: { id: number; full_name: string };
}
