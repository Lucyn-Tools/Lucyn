import { auth } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@lucyn/db";
import { streamChat } from "@lucyn/ai";

export async function POST(req: NextRequest) {
  const { userId } = await auth();
  if (!userId) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { messages } = await req.json();
  if (!Array.isArray(messages)) {
    return NextResponse.json({ error: "Invalid messages" }, { status: 400 });
  }

  const membership = await prisma.orgMember.findFirst({ where: { userId } });
  if (!membership) {
    return NextResponse.json({ error: "Not a member of any organization" }, { status: 403 });
  }

  const stream = new ReadableStream({
    async start(controller) {
      try {
        for await (const chunk of streamChat(messages, membership.orgId)) {
          controller.enqueue(new TextEncoder().encode(chunk));
        }
      } catch (err) {
        console.error("[chat/route] Stream error:", err);
      } finally {
        controller.close();
      }
    },
  });

  return new Response(stream, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
