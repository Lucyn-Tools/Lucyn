# @lucyn-tools/github

GitHub data ingestion and webhook processing for Lucyn.

## What's in here

- `client.ts` — Octokit REST + GraphQL wrapper
- `ingest.ts` — Full sync: commits, PRs, repo metadata → database
- `webhooks.ts` — Real-time webhook event processing (push, pull_request, review)
- `analysis.ts` — Commit hygiene, PR health, developer load, burnout signals

## Webhook events handled

- `push` → ingests new commits
- `pull_request` (opened/updated) → ingests PR, triggers Discord feedback
- `pull_request_review` → ingests review data
