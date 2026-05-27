# Project Memory — Lucyn

Quick reference for anyone starting with Claude on this project.

## Architecture

- **`apps/web/`** — Next.js 15 App Router, Clerk auth, Tailwind CSS. Deployed on Vercel.
- **`apps/discord-bot/`** — discord.js v14 bot. Deployed on Railway.
- **`packages/db/`** — Prisma singleton (`prisma` export). PostgreSQL on Railway.
- **`packages/ai/`** — Claude AI reasoning, RAG retrieval, chunking, model routing.
- **`packages/github/`** — Octokit wrapper, webhook validation, commit/PR analysis.
- **`packages/compression/`** — Token compression (compress, estimateTokens, truncateToTokenBudget).

## Strict Rules

- **Every DB query must be scoped to `orgId`** — look up via `prisma.orgMember.findFirst({ where: { userId } })` in API routes after `auth()`.
- **Developer feedback is private DMs only** — Never send feedback to public Discord channels.
- **No raw source code stored permanently** — Embeddings + metadata only.
- **`pnpm typecheck` must pass before pushing** — All 5 packages: compression, github, ai, discord-bot, web.
- **Prisma client must be regenerated after schema changes** — `cd packages/db && pnpm db:generate`.
- **`DATABASE_URL` is required** for Prisma client generation in CI (use a dummy URL for typecheck-only runs).

## Common Commands

```bash
pnpm install                              # Install all deps
pnpm --filter "@lucyn/db" run db:generate # Regenerate Prisma client
pnpm --filter "@lucyn-tools/web" dev                   # Next.js dev server (localhost:3000)
pnpm --filter @lucyn-tools/discord-bot dev             # Discord bot with tsx watch
pnpm --filter "@lucyn/compression" run typecheck
pnpm --filter "@lucyn/github" run typecheck
pnpm --filter "@lucyn/ai" run typecheck
pnpm --filter "@lucyn-tools/discord-bot" run typecheck
pnpm --filter "@lucyn-tools/web" run typecheck
```

## Fixes & Gotchas

- **`@types/node` must be in devDependencies** of any package that uses `process`, `Buffer`, or Node built-ins — not just `apps/web/`. Affected: `packages/db`, `packages/ai`, `packages/github`.
- **Prisma `where` type** — Build the where object inline (`{ orgId, ...(repoId ? { repoId } : {}) }`) rather than casting a `Record<string, unknown>`. The TypeScript types are strict.
- **`findLast` requires ES2023 lib** — Use `[...arr].reverse().find(...)` instead, or add `"ES2023"` to the `lib` array in tsconfig.
- **discord.js `sendTyping()` not on all channel types** — Guard with `if ("sendTyping" in message.channel)`.
- **pnpm workspace `typecheck` script** — Run via `pnpm --filter <name> run typecheck`, not `pnpm tsc` (the binary isn't in PATH at root level).
- **Prisma `generate` output** — Points to `packages/db/generated/client/`. The `generated/` dir is gitignored; CI must run `db:generate` before typecheck.
- **`ai` package (Vercel AI SDK) requires zod v3** — Pin `"zod": "^3.23.8"` in `apps/web/package.json` to avoid peer dep conflict with zod v4.
- **`next` version** — Must be `^15.3.0` for `@clerk/nextjs` peer dep compatibility.

## Workflow

- PRs target `main`
- CI runs: typecheck (all 5 packages) → build web app
- Deployment: push to `main` → Vercel deploys web → Railway deploys Discord bot (via `deploy-web.yml`, `deploy-bot.yml`)
- Manual migrations only: use `migrate.yml` workflow with `workflow_dispatch`
