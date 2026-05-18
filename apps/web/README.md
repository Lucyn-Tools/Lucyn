# @lucyn-tools/web

Next.js 14 App Router web application for Lucyn.

## What's in here

- `app/(auth)/` — Clerk authentication flows
- `app/(dashboard)/` — Main app: chat, dashboard, developers, repos, meetings, tasks
- `app/api/` — API routes for GitHub webhooks, chat inference, data ingestion
- `components/` — Reusable UI components (shadcn/ui + custom)

## Running locally

```bash
# From monorepo root
pnpm --filter @lucyn-tools/web dev
```

Requires `.env.local` with Clerk, Anthropic, and database credentials. See `.env.example`.

## Deploying

Deploys automatically to Vercel on push to `main` via `.github/workflows/ci.yml`.
