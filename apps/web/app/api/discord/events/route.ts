import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  // Discord bot events are handled by the discord-bot app directly.
  // This route exists for any webhook-style callbacks from Discord OAuth.
  return NextResponse.json({ ok: true });
}
