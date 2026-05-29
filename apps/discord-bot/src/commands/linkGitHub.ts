import { SlashCommandBuilder, ChatInputCommandInteraction } from "discord.js";
import { prisma } from "../lib/db";
import type { BotCommand } from "../index";

export const linkGitHub: BotCommand = {
  data: new SlashCommandBuilder()
    .setName("lucyn")
    .setDescription("Lucyn commands")
    .addSubcommand((sub) =>
      sub
        .setName("link-github")
        .setDescription("Link your Discord account to your GitHub profile")
        .addStringOption((opt) =>
          opt
            .setName("username")
            .setDescription("Your GitHub username")
            .setRequired(true)
        )
    ) as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    if (interaction.options.getSubcommand() !== "link-github") return;

    const githubLogin = interaction.options.getString("username", true);
    const discordUserId = interaction.user.id;
    const guildId = interaction.guildId;

    if (!guildId) {
      await interaction.reply({
        content: "This command must be used in a server.",
        ephemeral: true,
      });
      return;
    }

    await interaction.deferReply({ ephemeral: true });

    const org = await prisma.organization.findFirst({
      where: { discordGuildId: guildId },
    });

    if (!org) {
      await interaction.editReply(
        "This server isn't connected to Lucyn yet. Ask your admin to set up the integration."
      );
      return;
    }

    const developer = await prisma.developer.findFirst({
      where: { orgId: org.id, githubLogin },
    });

    if (!developer) {
      await interaction.editReply(
        `GitHub user \`${githubLogin}\` wasn't found in your organization's data. Make sure the GitHub integration is set up and you've pushed some commits.`
      );
      return;
    }

    await prisma.developer.update({
      where: { id: developer.id },
      data: { discordUserId },
    });

    await interaction.editReply(
      `Linked! Your Discord account is now connected to GitHub user \`${githubLogin}\`. You'll receive private PR feedback from Lucyn going forward.`
    );
  },
};
