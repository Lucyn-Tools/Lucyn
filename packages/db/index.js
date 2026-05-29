// CommonJS runtime entry point — used by Railway bot deployment.
// TypeScript consumers use index.ts (listed as "types" in package.json).
// We write this by hand because tsc outputs to dist/ but the generated
// Prisma client lives at ./generated/client, making relative paths wrong
// inside dist/index.js.

const { Pool } = require('pg');
const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('./generated/client');

const globalForPrisma = globalThis;

function createClient() {
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  return new PrismaClient({
    adapter,
    log: process.env.NODE_ENV === 'development' ? ['query', 'error', 'warn'] : ['error'],
  });
}

const prisma = globalForPrisma.prisma ?? createClient();
if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;

module.exports = { prisma, PrismaClient };
