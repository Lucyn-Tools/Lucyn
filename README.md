# Lucyn — AI Product Engineer

Lucyn is an AI Product Engineer embedded inside software companies. It gives engineering leadership real-time visibility into delivery health, developer capacity, and technical risk — while providing private, contextual guidance to individual developers.

## What Lucyn Does

**For leadership** — A web dashboard showing engineering health metrics, sprint velocity, PR throughput, and risk signals. An AI chatbot that answers any question about the engineering org using your actual data (commits, PRs, meetings).

**For developers** — A private Discord bot that reviews PRs, gives commit feedback, and answers engineering questions. All feedback is sent as DMs, never public, never comparative.

**For meetings** — A Google Meet agent (coming soon) that joins SCRUM and planning sessions, extracts goals and blockers, and posts structured summaries back to the dashboard.

---

## Architecture

```
lucyn/
├── apps/
│   ├── web/              # Next.js 15 App Router — Vercel
│   └── discord-bot/      # discord.js bot — Railway
├── packages/
│   ├── db/               # Prisma schema + PostgreSQL client
│   ├── ai/               # Claude AI reasoning, RAG, embeddings
│   ├── github/           # GitHub data ingestion + analysis
│   └── compression/      # Token compression utilities
```

- **Web app**: Next.js 15 + Clerk auth + Tailwind CSS, deployed on Vercel
- **Discord bot**: discord.js, deployed on Railway
- **Database**: PostgreSQL on Railway, accessed via Prisma
- **AI**: Anthropic Claude (Sonnet for analysis, Haiku for summaries, Opus for complex reasoning)
- **Auth**: Clerk (multi-tenant, org-aware)

---

## Local Development

### Prerequisites

- Node.js 20+
- pnpm 10+
- PostgreSQL database (local or Railway)

### Setup

```bash
# Install dependencies
pnpm install

# Copy environment variables
cp .env.example apps/web/.env.local
# Fill in the required values (see Environment Variables below)

# Generate Prisma client
cd packages/db && pnpm db:generate

# Push schema to your database
pnpm db:push

# Start the web app
pnpm --filter web dev

# Start the Discord bot (separate terminal)
pnpm --filter discord-bot dev
```

The web app runs at `http://localhost:3000`.

---

## Environment Variables

Copy `.env.example` and fill in:

| Variable | Description |
|---|---|
| `DATABASE_URL` | PostgreSQL connection string (Railway or local) |
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key |
| `CLERK_SECRET_KEY` | Clerk secret key |
| `ANTHROPIC_API_KEY` | Anthropic API key for Claude |
| `GITHUB_APP_ID` | GitHub App ID for webhook integration |
| `GITHUB_APP_PRIVATE_KEY` | GitHub App private key (PEM) |
| `GITHUB_WEBHOOK_SECRET` | Secret for validating GitHub webhook payloads |
| `DISCORD_BOT_TOKEN` | Discord bot token |
| `DISCORD_CLIENT_ID` | Discord application client ID |
| `DISCORD_GUILD_ID` | Your Discord server ID (for dev) |
| `NEXT_PUBLIC_APP_URL` | Public URL of the web app |

---

## Deployment

### Web App (Vercel)

1. Connect this repository to Vercel
2. Set the build command: `pnpm --filter web build`
3. Set the output directory: `apps/web/.next`
4. Add all environment variables in the Vercel dashboard
5. Deploy

### Discord Bot (Railway)

1. Create a new Railway service from this repository
2. Railway will use `railway.toml` to build and start the bot
3. Add `DISCORD_BOT_TOKEN`, `DISCORD_CLIENT_ID`, `DATABASE_URL`, and `ANTHROPIC_API_KEY`
4. Deploy

### Database (Railway PostgreSQL)

1. Add a PostgreSQL plugin in Railway
2. Copy the `DATABASE_URL` to both the web app and Discord bot services
3. Run migrations: `pnpm --filter @lucyn/db db:migrate`

---

## Integrations

### GitHub

1. Create a GitHub App in your organization settings
2. Set the webhook URL to `https://your-app.vercel.app/api/github/webhook`
3. Subscribe to: `push`, `pull_request`, `pull_request_review` events
4. Add the App ID and private key to your environment variables

### Discord

1. Create a Discord application at discord.com/developers
2. Add a Bot to the application
3. Enable `Message Content Intent` in the Bot settings
4. Invite the bot to your server with `bot` + `applications.commands` scopes
5. Set `DISCORD_BOT_TOKEN` and `DISCORD_CLIENT_ID` in Railway

Developers link their Discord to GitHub with `/lucyn link-github <username>` in your server.

---

## Design System

Lucyn uses a Notion-inspired design language:

- **Colors**: Off-white surface, subtle borders, near-black text — no gradients
- **Typography**: Inter (system fallback), JetBrains Mono for code
- **Spacing**: Generous whitespace, 6px border radius throughout
- **AI indicators**: Purple `✦ Lucyn` label on all AI-generated content

---

## Privacy

Lucyn is built with developer privacy as a first principle:

- Individual developer feedback is **always sent as private DMs**, never in public channels
- Lucyn **never compares developers** to each other in any output
- Developer capability profiles are for guidance only — not performance management
- Raw source code is never stored permanently — only embeddings and metadata
