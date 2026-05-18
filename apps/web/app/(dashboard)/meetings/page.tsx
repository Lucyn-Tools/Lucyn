export default function MeetingsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-primary">Meetings</h1>
        <p className="text-text-secondary text-sm mt-1">AI summaries from your SCRUM and planning sessions</p>
      </div>
      <div className="rounded-lg border border-border p-8 text-center text-text-secondary">
        <p className="text-4xl mb-3">🎥</p>
        <p className="font-medium text-text-primary">No meetings recorded yet</p>
        <p className="text-sm mt-1">The Google Meet integration will appear here when available</p>
      </div>
    </div>
  );
}
