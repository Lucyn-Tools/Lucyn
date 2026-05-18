export default function DiscordPage() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-semibold text-text-primary mb-2">Discord Integration</h1>
      <p className="text-text-secondary text-sm mb-6">Configure the Lucyn bot for your Discord server</p>
      <div className="rounded-lg border border-border p-8 text-center text-text-secondary">
        <p className="text-4xl mb-3">🤖</p>
        <p className="font-medium text-text-primary">Add Lucyn to Discord</p>
        <p className="text-sm mt-1 mb-4">The Lucyn bot sends private PR feedback and answers engineering questions</p>
        <button className="px-4 py-2 bg-[#5865f2] text-white text-sm rounded hover:bg-[#4752c4] transition-colors">
          Invite to Discord Server
        </button>
      </div>
    </div>
  );
}
