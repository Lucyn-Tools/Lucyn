import { PrismaClient } from '@lucyn/db'

declare global {
  // eslint-disable-next-line no-var
  var prismaBot: PrismaClient | undefined
}

export const prisma = global.prismaBot ?? new PrismaClient()

if (process.env.NODE_ENV !== 'production') {
  global.prismaBot = prisma
}