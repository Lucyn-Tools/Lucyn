export default function InsightsPage() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-semibold text-text-primary mb-2">Insights</h1>
      <p className="text-text-secondary text-sm mb-6">AI-generated analysis of your engineering organization</p>
      <div className="rounded-lg border border-border p-8 text-center text-text-secondary">
        <p className="text-4xl mb-3">✦</p>
        <p className="font-medium text-text-primary">Insights are being generated</p>
        <p className="text-sm mt-1">Connect GitHub and run your first sync to see AI-powered insights</p>
      </div>
    </div>
  );
}
