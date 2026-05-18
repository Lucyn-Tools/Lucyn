# @lucyn-tools/discord-bot

discord.js guidance agent for Lucyn. Runs on Railway.

## What it does

- Sends private PR feedback to developers via DM
- Answers engineering questions when @mentioned
- Links Discord users to their GitHub profiles

## Commands

- `/lucyn link-github [username]` — Link your GitHub account
- `/lucyn status` — View your current workload (private)
- `/lucyn help` — How Lucyn works

## Running locally

```bash
# From monorepo root
pnpm --filter @lucyn-tools/discord-bot dev
```

Requires `.env` with `DISCORD_TOKEN`, `DISCORD_CLIENT_ID`, and database credentials. See `.env.example`.

## Deploying

Deploys automatically to Railway on push to `main` via `.github/workflows/ci.yml`.
