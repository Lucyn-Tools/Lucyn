import path from "path";
import { config as loadEnv } from "dotenv";

// Load from root .env for local development.
// Railway injects env vars directly in production.
loadEnv({ path: path.resolve(__dirname, "../../../.env") });

import {
  Client,
  GatewayIntentBits,
  REST,
  Routes,
  Collection,
} from "discord.js";
import type { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";

export interface BotCommand {
  data: SlashCommandBuilder;
  execute: (interaction: ChatInputCommandInteraction) => Promise<void>;
}

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.MessageContent,
  ],
});

const commands = new Collection<string, BotCommand>();

async function loadCommands(): Promise<void> {
  const { linkGitHub } = await import("./commands/linkGitHub");
  const { status } = await import("./commands/status");
  const { help } = await import("./commands/help");

  for (const cmd of [linkGitHub, status, help]) {
    commands.set(cmd.data.name, cmd);
  }
}

async function registerSlashCommands(): Promise<void> {
  const token = process.env.DISCORD_BOT_TOKEN;
  const clientId = process.env.DISCORD_CLIENT_ID;
  if (!token || !clientId) throw new Error("Missing DISCORD_BOT_TOKEN or DISCORD_CLIENT_ID");

  const rest = new REST().setToken(token);
  const commandData = [...commands.values()].map((c) => c.data.toJSON());
  await rest.put(Routes.applicationCommands(clientId), { body: commandData });
  console.log("[lucyn-bot] Slash commands registered");
}

client.once("ready", (c) => {
  console.log(`[lucyn-bot] Logged in as ${c.user.tag}`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isChatInputCommand()) return;
  const command = commands.get(interaction.commandName);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    console.error(`[lucyn-bot] Error in command ${interaction.commandName}:`, err);
    const reply = { content: "Something went wrong. Please try again.", ephemeral: true };
    if (interaction.replied || interaction.deferred) {
      await interaction.followUp(reply);
    } else {
      await interaction.reply(reply);
    }
  }
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  const { handleQA } = await import("./handlers/qa");
  await handleQA(client, message);
});

async function main(): Promise<void> {
  const token = process.env.DISCORD_BOT_TOKEN;
  if (!token) throw new Error("DISCORD_BOT_TOKEN is required");

  await loadCommands();
  await registerSlashCommands();
  await client.login(token);
}

main().catch((err) => {
  console.error("[lucyn-bot] Fatal startup error:", err);
  process.exit(1);
});
