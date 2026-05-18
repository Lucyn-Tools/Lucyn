import { cn } from "@/lib/utils";
import { TrendingUp, TrendingDown } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  trend: string;
  positive: boolean;
}

export function MetricCard({ title, value, trend, positive }: MetricCardProps) {
  return (
    <div className="bg-background border border-border rounded-lg p-4">
      <p className="text-xs text-text-secondary uppercase tracking-wide">{title}</p>
      <p className="text-2xl font-semibold text-text-primary mt-1">{value}</p>
      <div className={cn("flex items-center gap-1 mt-1 text-xs", positive ? "text-accent-green" : "text-accent-red")}>
        {positive ? <TrendingUp size={12} /> : <TrendingDown size={12} />}
        <span>{trend} vs last sprint</span>
      </div>
    </div>
  );
}
