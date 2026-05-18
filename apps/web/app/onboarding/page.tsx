import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export default async function OnboardingPage() {
  const { userId } = await auth();
  if (!userId) redirect("/sign-in");

  return (
    <div className="min-h-screen bg-surface flex items-center justify-center p-6">
      <div className="max-w-lg w-full bg-background border border-border rounded-xl p-8">
        <div className="text-center mb-8">
          <span className="text-accent-purple text-2xl">✦</span>
          <h1 className="text-xl font-semibold text-text-primary mt-2">Welcome to Lucyn</h1>
          <p className="text-text-secondary text-sm mt-1">Let&apos;s set up your organization</p>
        </div>

        <div className="space-y-4">
          <div className="p-4 border border-border rounded-lg">
            <h3 className="font-medium text-text-primary text-sm">1. Connect GitHub</h3>
            <p className="text-text-secondary text-xs mt-1">Sync your repositories, commits, and pull requests</p>
            <button className="mt-3 px-3 py-1.5 bg-accent-blue text-white text-xs rounded hover:bg-blue-700 transition-colors">
              Connect GitHub Organization
            </button>
          </div>

          <div className="p-4 border border-border rounded-lg opacity-60">
            <h3 className="font-medium text-text-primary text-sm">2. Add Discord Bot</h3>
            <p className="text-text-secondary text-xs mt-1">Enable private developer guidance via Discord DMs</p>
          </div>

          <div className="p-4 border border-border rounded-lg opacity-60">
            <h3 className="font-medium text-text-primary text-sm">3. Invite Your Team</h3>
            <p className="text-text-secondary text-xs mt-1">Add team members who can access the dashboard</p>
          </div>
        </div>

        <a href="/dashboard" className="block mt-6 text-center text-sm text-text-secondary hover:text-text-primary transition-colors">
          Skip for now →
        </a>
      </div>
    </div>
  );
}
