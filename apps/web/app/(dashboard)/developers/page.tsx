export default function DevelopersPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-primary">Developers</h1>
        <p className="text-text-secondary text-sm mt-1">Developer profiles and capability insights</p>
      </div>
      <div className="rounded-lg border border-border p-8 text-center text-text-secondary">
        <p className="text-4xl mb-3">👤</p>
        <p className="font-medium text-text-primary">No developer profiles yet</p>
        <p className="text-sm mt-1">Connect GitHub to sync your team&apos;s profiles and activity</p>
      </div>
    </div>
  );
}
