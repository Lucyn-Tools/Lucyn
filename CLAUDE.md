# Lucyn

**AI Product Engineer for software companies — Next.js web app + Discord bot + PostgreSQL.**

---

## Repository layout

| Path | Role |
| --- | --- |
| **`apps/web/`** | Next.js 15 App Router (Vercel) — dashboard, AI chat, settings |
| **`apps/discord-bot/`** | discord.js bot (Railway) — PR feedback, Q&A, developer guidance |
| **`packages/db/`** | Prisma schema + PostgreSQL client (`@lucyn/db`) |
| **`packages/ai/`** | Claude AI reasoning, RAG, embeddings (`@lucyn/ai`) |
| **`packages/github/`** | GitHub data ingestion + webhook analysis (`@lucyn/github`) |
| **`packages/compression/`** | Token compression utilities (`@lucyn/compression`) |

---

## Commands (from repo root)

```bash
pnpm install              # Install all workspace dependencies
pnpm dev                  # Start all apps in dev mode (turbo)
pnpm build                # Build all apps
pnpm typecheck            # TypeScript check all packages
pnpm lint                 # ESLint all packages
pnpm format               # Prettier write

# Web app only
pnpm --filter web dev     # Start Next.js dev server at localhost:3000

# Discord bot only
pnpm --filter @lucyn-tools/discord-bot dev   # Start bot with tsx watch

# Database
cd packages/db
pnpm db:generate          # Generate Prisma client (run after schema changes)
pnpm db:push              # Push schema to database (dev only)
pnpm db:migrate           # Run migrations (production)
pnpm db:studio            # Open Prisma Studio
```

---

## Environment variables

Copy `.env.example` to `apps/web/.env.local`. Required variables:

- `DATABASE_URL` — PostgreSQL connection string
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` / `CLERK_SECRET_KEY` — Clerk auth
- `ANTHROPIC_API_KEY` — Claude AI
- `GITHUB_APP_ID` / `GITHUB_APP_PRIVATE_KEY` / `GITHUB_WEBHOOK_SECRET` — GitHub integration
- `DISCORD_BOT_TOKEN` / `DISCORD_CLIENT_ID` — Discord bot
- `NEXT_PUBLIC_APP_URL` — Public app URL

---

## Architecture

### Web app (`apps/web/`)

Next.js 15 App Router with Clerk for multi-tenant auth.

**Route groups:**
- `(auth)/` — Login, signup pages (Clerk components)
- `(dashboard)/` — Protected routes: dashboard, chat, developers, meetings, tasks, repos, settings

**API routes (`app/api/`):**
- `POST /api/chat` — Authenticated streaming AI chat via `@lucyn/ai`
- `POST /api/github/webhook` — HMAC-validated GitHub webhook ingestion
- `POST /api/discord/events` — Discord OAuth callback stub

**Key components:**
- `components/layout/Sidebar.tsx` — Navigation sidebar
- `components/layout/Topbar.tsx` — Header with search and user button
- `components/dashboard/` — MetricCard, VelocityChart, ActivityFeed, RepoHealthTable

**Auth pattern:** All protected API routes call `auth()` from `@clerk/nextjs/server`, then look up `orgId` via `prisma.orgMember.findFirst({ where: { userId } })`. Every DB query is scoped to `orgId`.

### Discord bot (`apps/discord-bot/`)

discord.js v14 with intents: Guilds, GuildMessages, DirectMessages, MessageContent.

**Commands:**
- `/lucyn link-github <username>` — Links Discord user to GitHub profile
- `/lucyn-status` — Shows private workload summary (ephemeral)
- `/lucyn-help` — Explains what Lucyn does

**Handlers:**
- `handlers/prFeedback.ts` — Sends private DM feedback when PRs are opened
- `handlers/qa.ts` — Answers questions when @mentioned in guild channels

### Packages

**`@lucyn/db`** — Prisma singleton client. Import `prisma` from `@lucyn/db`.

**`@lucyn/ai`** — AI reasoning. Key exports:
- `streamChat(messages, orgId)` — Streaming chat with RAG context
- `retrieve(query, orgId, options)` — Vector similarity retrieval
- `chunkContent(text, type)` — Semantic chunking for embeddings
- `routeRequest(query)` — Model tier routing (haiku/sonnet/opus)

**`@lucyn/github`** — GitHub utilities:
- `validateWebhookSignature(payload, signature, secret)` — HMAC validation
- `analyzeCommitMessage(message)` — Commit hygiene scoring
- `analyzePRHealth(...)` — PR health metrics
- `ingestRepository(octokit, orgId, owner, repo)` — DB upsert

**`@lucyn/compression`** — Token utilities:
- `compress(text)` — Whitespace/boilerplate compression
- `compressHtml(html)` — HTML noise removal
- `estimateTokens(text)` — Token count estimate (4 chars/token)
- `truncateToTokenBudget(text, maxTokens)` — Budget-aware truncation

---

## Database schema

Multi-tenant PostgreSQL (Prisma). Every model has an `orgId` field.

Key models: `Organization`, `OrgMember`, `Repository`, `Developer`, `Commit`, `PullRequest`, `PRFeedback`, `Meeting`, `Task`, `Sprint`, `Embedding`, `ChatSession`, `ChatMessage`.

---

## Design system

Notion-inspired: off-white (`#f7f7f5`), subtle borders (`#e9e9e7`), near-black text (`#37352f`), accent blue (`#2383e2`), accent purple (`#9065b0`) for AI labels. No gradients. No heavy shadows. Inter font.

All AI-generated content has a `✦ Lucyn` purple label.

---

## Privacy rules (non-negotiable)

- Developer feedback → private Discord DMs only, never public channels
- Never compare developers to each other in any output
- Developer capability profiles are for guidance, not performance management
- No raw source code stored permanently — only embeddings + metadata
- Every DB query must be scoped to `orgId`

---

## Git workflow

- PRs target `main`
- Never push directly to `main`
- Run `pnpm typecheck` before pushing
- All API routes must validate `orgId` before any DB query

---

## Deployment

- **Web app:** Vercel. Build command: `pnpm --filter web build`
- **Discord bot:** Railway. Start command: `pnpm --filter @lucyn-tools/discord-bot start`
- **Database:** Railway PostgreSQL
- **Auth:** Clerk (multi-tenant)
