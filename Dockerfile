# Lucyn Discord Bot — Docker image
# Used by Railway for the discord-bot service.
#
# Build: docker build -t lucyn-discord-bot -f Dockerfile .
# Run:   docker run --env-file .env lucyn-discord-bot

FROM node:20-alpine AS base

# Install pnpm
RUN corepack enable && corepack prepare pnpm@10.10.0 --activate

WORKDIR /app

# Copy workspace manifests for dependency resolution
COPY package.json pnpm-workspace.yaml pnpm-lock.yaml ./
COPY packages/db/package.json ./packages/db/
COPY packages/ai/package.json ./packages/ai/
COPY packages/github/package.json ./packages/github/
COPY packages/compression/package.json ./packages/compression/
COPY apps/discord-bot/package.json ./apps/discord-bot/

# Install dependencies
RUN pnpm install --frozen-lockfile

# Copy source code
COPY packages/ ./packages/
COPY apps/discord-bot/ ./apps/discord-bot/

# Generate Prisma client
RUN pnpm --filter "@lucyn/db" run db:generate

# Build the Discord bot
RUN pnpm --filter "@lucyn-tools/discord-bot" run build

# Production image
FROM node:20-alpine AS runtime

RUN corepack enable && corepack prepare pnpm@10.10.0 --activate

WORKDIR /app

# Copy built artifacts
COPY --from=base /app/node_modules ./node_modules
COPY --from=base /app/packages ./packages
COPY --from=base /app/apps/discord-bot ./apps/discord-bot
COPY --from=base /app/package.json ./
COPY --from=base /app/pnpm-workspace.yaml ./

ENV NODE_ENV=production

CMD ["node", "apps/discord-bot/dist/index.js"]
