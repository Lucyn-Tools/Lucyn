export default function TasksPage() {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-primary">Tasks</h1>
        <p className="text-text-secondary text-sm mt-1">AI-suggested tasks from meetings, pending your approval</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {["Suggested", "Approved", "In Progress", "Done"].map((col) => (
          <div key={col} className="bg-surface rounded-lg p-4">
            <h3 className="text-sm font-medium text-text-secondary mb-3">{col}</h3>
            <div className="space-y-2">
              <div className="bg-background rounded border border-border p-3 text-sm text-text-secondary italic">
                No tasks yet
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
