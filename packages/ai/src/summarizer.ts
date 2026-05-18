import Anthropic from "@anthropic-ai/sdk";
import { prisma } from "@lucyn/db";

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

async function summarize(prompt: string): Promise<string> {
  const response = await client.messages.create({
    model: "claude-haiku-4-5",
    max_tokens: 512,
    messages: [{ role: "user", content: prompt }],
  });
  return response.content[0].type === "text" ? response.content[0].text : "";
}

export async function summarizeSprint(sprintId: string): Promise<string> {
  const sprint = await prisma.sprint.findUnique({ where: { id: sprintId }, include: { org: true } });
  if (!sprint) throw new Error(`Sprint ${sprintId} not found`);

  const summary = await summarize(
    `Summarize this sprint for engineering leadership in 3-4 sentences:\nSprint: ${sprint.name}\nOrg: ${sprint.org.name}\nDates: ${sprint.startDate.toISOString().slice(0, 10)} to ${sprint.endDate.toISOString().slice(0, 10)}`
  );

  await prisma.sprint.update({ where: { id: sprintId }, data: { summary } });
  return summary;
}

export async function summarizeMeeting(meetingId: string): Promise<string> {
  const meeting = await prisma.meeting.findUnique({ where: { id: meetingId } });
  if (!meeting) throw new Error(`Meeting ${meetingId} not found`);

  const transcript = meeting.transcript
    ? `Transcript excerpt:\n${meeting.transcript.slice(0, 2000)}`
    : "No transcript available.";

  const summary = await summarize(
    `You are Lucyn. Extract key information from this ${meeting.meetingType} meeting.\n\n${transcript}\n\nProvide a 2-3 sentence summary focused on decisions made and next steps.`
  );

  await prisma.meeting.update({ where: { id: meetingId }, data: { summary } });
  return summary;
}
