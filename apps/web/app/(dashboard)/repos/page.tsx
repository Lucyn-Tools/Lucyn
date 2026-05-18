export default function ReposPage() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-primary">Repositories</h1>
        <p className="text-text-secondary text-sm mt-1">Health and activity across your connected repositories</p>
      </div>
      <div className="rounded-lg border border-border p-8 text-center text-text-secondary">
        <p className="text-4xl mb-3">📁</p>
        <p className="font-medium text-text-primary">No repositories connected</p>
        <p className="text-sm mt-1">Connect your GitHub organization in Settings to get started</p>
      </div>
    </div>
  );
}
