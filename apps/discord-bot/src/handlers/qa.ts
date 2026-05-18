import { Client, Message } from "discord.js";
import { prisma } from "@lucyn/db";
import { chat } from "@lucyn/ai";

export async function handleQA(client: Client, message: Message): Promise<void> {
  if (!message.mentions.has(client.user!)) return;
  if (!message.guildId) return;

  const org = await prisma.organization.findFirst({
    where: { discordGuildId: message.guildId },
  });

  if (!org) return;

  const content = message.content
    .replace(/<@!?\d+>/g, "")
    .trim();

  if (!content) {
    await message.reply("Ask me anything about your engineering org!");
    return;
  }

  if ("sendTyping" in message.channel) await message.channel.sendTyping();

  try {
    const response = await chat(
      [{ role: "user", content }],
      org.id
    );

    // Discord has a 2000 char limit
    const chunks = response.match(/.{1,1900}/gs) ?? [response];
    for (const chunk of chunks) {
      await message.reply(chunk);
    }
  } catch (err) {
    console.error("[lucyn-bot] QA handler error:", err);
    await message.reply("Sorry, I ran into an issue. Please try again.");
  }
}
