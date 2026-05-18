# @lucyn-tools/db

Prisma client + schema for Lucyn's Railway PostgreSQL database.

## Schema overview

- `Organization` — multi-tenant root
- `Developer` — GitHub-linked developer profiles (private, non-punitive)
- `Repository` + `Commit` + `PullRequest` — GitHub data
- `Meeting` — meeting transcripts and summaries
- `Task` — AI-suggested task assignments
- `Embedding` — pgvector embeddings for RAG
- `ChatSession` + `ChatMessage` — chatbot history

## Commands

```bash
# Regenerate Prisma client
pnpm --filter @lucyn-tools/db exec prisma generate

# Create a migration
pnpm --filter @lucyn-tools/db exec prisma migrate dev

# Open Prisma Studio GUI
pnpm --filter @lucyn-tools/db exec prisma studio
```
