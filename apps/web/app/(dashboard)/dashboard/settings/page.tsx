export default function SettingsPage() {
  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">Settings</h1>
        <p className="text-text-secondary text-sm mt-1">Manage your organization integrations and preferences</p>
      </div>

      <section className="rounded-lg border border-border divide-y divide-border">
        <div className="p-5">
          <h2 className="font-medium text-text-primary">GitHub Integration</h2>
          <p className="text-sm text-text-secondary mt-1">Connect your GitHub organization to sync commits and PRs</p>
          <button className="mt-3 px-4 py-2 bg-accent-blue text-white text-sm rounded hover:bg-blue-700 transition-colors">
            Connect GitHub
          </button>
        </div>
        <div className="p-5">
          <h2 className="font-medium text-text-primary">Discord Bot</h2>
          <p className="text-sm text-text-secondary mt-1">Add Lucyn to your Discord server for developer guidance</p>
          <button className="mt-3 px-4 py-2 border border-border text-sm rounded hover:bg-surface transition-colors">
            Invite Bot
          </button>
        </div>
        <div className="p-5 opacity-60">
          <h2 className="font-medium text-text-primary">Google Meet Agent</h2>
          <p className="text-sm text-text-secondary mt-1">Join meetings to extract goals and blockers automatically</p>
          <span className="inline-block mt-3 px-3 py-1 bg-surface text-text-secondary text-xs rounded-full">Coming soon</span>
        </div>
      </section>
    </div>
  );
}
