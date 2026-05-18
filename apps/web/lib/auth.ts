import { auth } from "@clerk/nextjs/server";
import { prisma } from "@lucyn/db";

export async function getOrgId(): Promise<string | null> {
  const { userId } = await auth();
  if (!userId) return null;

  const membership = await prisma.orgMember.findFirst({ where: { userId } });
  return membership?.orgId ?? null;
}
