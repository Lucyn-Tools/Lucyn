export interface CommitHygieneScore {
  score: number; // 0-100
  issues: string[];
  suggestions: string[];
}

export interface PRHealthScore {
  score: number; // 0-100
  reviewCycles: number;
  timeToMergeHours: number | null;
  issues: string[];
}

export interface DeveloperLoadScore {
  score: number; // 0-100
  openPRs: number;
  commitsThisWeek: number;
  burnoutSignal: number; // 0-1
}

export function analyzeCommitMessage(message: string): CommitHygieneScore {
  const issues: string[] = [];
  const suggestions: string[] = [];
  let score = 100;

  const firstLine = message.split("\n")[0].trim();

  if (firstLine.length < 10) {
    issues.push("Commit message too short");
    suggestions.push("Add a descriptive summary (10-72 chars)");
    score -= 30;
  }

  if (firstLine.length > 72) {
    issues.push("First line exceeds 72 characters");
    suggestions.push("Keep the subject line under 72 characters");
    score -= 15;
  }

  const vaguePatterns = /^(fix|update|change|misc|wip|temp|test)\s*$/i;
  if (vaguePatterns.test(firstLine)) {
    issues.push("Vague commit message");
    suggestions.push("Describe what was fixed or changed and why");
    score -= 25;
  }

  const hasConventionalPrefix = /^(feat|fix|docs|style|refactor|test|chore|perf|ci|build)(\(.+\))?:/.test(firstLine);
  if (!hasConventionalPrefix) {
    suggestions.push("Consider using conventional commits format (feat:, fix:, etc.)");
    score -= 10;
  }

  return { score: Math.max(0, score), issues, suggestions };
}

export function analyzePRHealth(
  reviewCycles: number,
  createdAt: Date,
  mergedAt: Date | null,
  additions: number,
  deletions: number
): PRHealthScore {
  const issues: string[] = [];
  let score = 100;

  const timeToMergeMs = mergedAt ? mergedAt.getTime() - createdAt.getTime() : null;
  const timeToMergeHours = timeToMergeMs ? timeToMergeMs / (1000 * 60 * 60) : null;

  if (reviewCycles > 3) {
    issues.push(`High review cycle count (${reviewCycles})`);
    score -= Math.min(30, (reviewCycles - 3) * 10);
  }

  const totalLines = additions + deletions;
  if (totalLines > 500) {
    issues.push(`Large PR (${totalLines} lines changed)`);
    score -= Math.min(20, Math.floor(totalLines / 100) * 2);
  }

  if (timeToMergeHours && timeToMergeHours > 72) {
    issues.push(`Long time to merge (${Math.round(timeToMergeHours)}h)`);
    score -= 15;
  }

  return {
    score: Math.max(0, score),
    reviewCycles,
    timeToMergeHours,
    issues,
  };
}

export function analyzeBurnoutSignal(
  commitsLast7Days: number[],   // daily commit counts
  avgCommitsLast30Days: number,
  lateNightCommits: number,     // commits between 22:00-05:00
  totalCommits: number
): number {
  let signal = 0;

  // Sudden drop in activity
  const recentAvg = commitsLast7Days.reduce((a, b) => a + b, 0) / 7;
  if (avgCommitsLast30Days > 2 && recentAvg < avgCommitsLast30Days * 0.3) {
    signal += 0.4;
  }

  // High late-night commit ratio
  if (totalCommits > 0 && lateNightCommits / totalCommits > 0.3) {
    signal += 0.3;
  }

  // Erratic commit pattern (high variance)
  const mean = commitsLast7Days.reduce((a, b) => a + b, 0) / commitsLast7Days.length;
  const variance =
    commitsLast7Days.reduce((sum, v) => sum + Math.pow(v - mean, 2), 0) /
    commitsLast7Days.length;
  if (variance > mean * 2) {
    signal += 0.2;
  }

  return Math.min(1, signal);
}
