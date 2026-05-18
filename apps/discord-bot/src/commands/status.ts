import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import { prisma } from "@lucyn/db";
import type { BotCommand } from "../index";

export const status: BotCommand = {
  data: new SlashCommandBuilder()
    .setName("lucyn-status")
    .setDescription("View your current workload and recent activity (private)") as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    await interaction.deferReply({ ephemeral: true });

    const guildId = interaction.guildId;
    if (!guildId) {
      await interaction.editReply("This command must be used in a server.");
      return;
    }

    const org = await prisma.organization.findFirst({ where: { discordGuildId: guildId } });
    if (!org) {
      await interaction.editReply("Server isn't connected to Lucyn yet.");
      return;
    }

    const developer = await prisma.developer.findFirst({
      where: { orgId: org.id, discordUserId: interaction.user.id },
      include: {
        pullRequests: { where: { state: "OPEN" }, take: 5, orderBy: { createdAt: "desc" } },
        commits: { take: 5, orderBy: { committedAt: "desc" } },
      },
    });

    if (!developer) {
      await interaction.editReply(
        "You haven't linked your GitHub account yet. Use `/lucyn link-github <username>` to get started."
      );
      return;
    }

    const loadLabel = developer.currentLoad < 40 ? "Light" : developer.currentLoad < 70 ? "Moderate" : "Heavy";
    const recentCommits = developer.commits
      .slice(0, 3)
      .map((c) => `• ${c.message.split("\n")[0].slice(0, 60)}`)
      .join("\n");

    const embed = new EmbedBuilder()
      .setTitle(`Your Status — ${developer.name ?? developer.githubLogin}`)
      .setColor(0x2383e2)
      .addFields(
        { name: "Current Load", value: `${loadLabel} (${developer.currentLoad}/100)`, inline: true },
        { name: "Open PRs", value: String(developer.pullRequests.length), inline: true },
        { name: "Strengths", value: developer.strengths.join(", ") || "Not profiled yet", inline: false },
        { name: "Recent Commits", value: recentCommits || "No recent commits", inline: false }
      )
      .setFooter({ text: "This is private — only you can see this." });

    await interaction.editReply({ embeds: [embed] });
  },
};
