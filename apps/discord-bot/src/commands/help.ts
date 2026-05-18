import { SlashCommandBuilder, ChatInputCommandInteraction, EmbedBuilder } from "discord.js";
import type { BotCommand } from "../index";

export const help: BotCommand = {
  data: new SlashCommandBuilder()
    .setName("lucyn-help")
    .setDescription("Learn what Lucyn does") as SlashCommandBuilder,

  async execute(interaction: ChatInputCommandInteraction): Promise<void> {
    const embed = new EmbedBuilder()
      .setTitle("Lucyn — AI Product Engineer")
      .setColor(0x9065b0)
      .setDescription(
        "Lucyn is your organization's AI Product Engineer. It watches your engineering workflows and provides private, contextual guidance to help you do your best work."
      )
      .addFields(
        {
          name: "What Lucyn does",
          value:
            "• Reviews PRs and sends private commit feedback via DM\n• Answers engineering questions when @mentioned\n• Summarizes meetings and extracts action items\n• Gives leadership visibility into delivery health",
        },
        {
          name: "Commands",
          value:
            "`/lucyn link-github <username>` — Connect your GitHub\n`/lucyn-status` — View your current workload (private)\n`/lucyn-help` — This message",
        },
        {
          name: "Privacy",
          value:
            "All developer feedback is sent as private DMs. Lucyn never compares developers publicly. You can reply `skip` to any feedback thread to opt out of that PR's feedback.",
        }
      )
      .setFooter({ text: "Lucyn · AI Product Engineer" });

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};
