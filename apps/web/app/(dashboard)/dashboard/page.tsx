import { MetricCard } from "@/components/dashboard/MetricCard";
import { VelocityChart } from "@/components/dashboard/VelocityChart";
import { RepoHealthTable } from "@/components/dashboard/RepoHealthTable";
import { ActivityFeed } from "@/components/dashboard/ActivityFeed";

export default function DashboardPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-text-primary">Engineering Health</h1>
        <p className="text-text-secondary text-sm mt-1">Overview of your organization&apos;s delivery and team health</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard title="Delivery Confidence" value="78%" trend="+4%" positive />
        <MetricCard title="Sprint Velocity" value="42 pts" trend="-2%" positive={false} />
        <MetricCard title="Open PRs" value="12" trend="+3" positive={false} />
        <MetricCard title="Risk Signals" value="2" trend="-1" positive />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <VelocityChart />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>

      <RepoHealthTable />
    </div>
  );
}
