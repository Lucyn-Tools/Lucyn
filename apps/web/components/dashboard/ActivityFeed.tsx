import { GitCommit, GitPullRequest, Video } from "lucide-react";

const activities = [
  { icon: GitPullRequest, text: "PR #47 merged by @alex", time: "2h ago", color: "text-accent-green" },
  { icon: GitCommit, text: "14 commits pushed to main", time: "3h ago", color: "text-accent-blue" },
  { icon: Video, text: "Sprint planning summarized", time: "Yesterday", color: "text-accent-purple" },
  { icon: GitPullRequest, text: "PR #46 needs review", time: "Yesterday", color: "text-accent-yellow" },
];

export function ActivityFeed() {
  return (
    <div className="bg-background border border-border rounded-lg p-5">
      <h2 className="text-sm font-medium text-text-primary mb-4">Recent Activity</h2>
      <div className="space-y-3">
        {activities.map((item, i) => (
          <div key={i} className="flex items-start gap-3">
            <item.icon size={14} className={`mt-0.5 flex-shrink-0 ${item.color}`} />
            <div className="min-w-0">
              <p className="text-sm text-text-primary leading-tight">{item.text}</p>
              <p className="text-xs text-text-tertiary mt-0.5">{item.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
