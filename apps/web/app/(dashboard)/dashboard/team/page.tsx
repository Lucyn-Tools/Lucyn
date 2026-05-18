export default function TeamPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-2xl font-semibold text-text-primary mb-2">Team</h1>
      <p className="text-text-secondary text-sm mb-6">Manage organization members and their access levels</p>
      <div className="rounded-lg border border-border p-8 text-center text-text-secondary">
        <p className="text-4xl mb-3">👥</p>
        <p className="font-medium text-text-primary">No team members yet</p>
        <p className="text-sm mt-1">Invite your team from the Settings page</p>
      </div>
    </div>
  );
}
