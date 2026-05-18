"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { sprint: "S1", velocity: 38 },
  { sprint: "S2", velocity: 42 },
  { sprint: "S3", velocity: 39 },
  { sprint: "S4", velocity: 45 },
  { sprint: "S5", velocity: 43 },
  { sprint: "S6", velocity: 42 },
];

export function VelocityChart() {
  return (
    <div className="bg-background border border-border rounded-lg p-5">
      <h2 className="text-sm font-medium text-text-primary mb-4">Sprint Velocity</h2>
      <ResponsiveContainer width="100%" height={180}>
        <LineChart data={data} margin={{ top: 4, right: 4, left: -20, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e9e9e7" />
          <XAxis dataKey="sprint" tick={{ fontSize: 12, fill: "#787774" }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fontSize: 12, fill: "#787774" }} axisLine={false} tickLine={false} />
          <Tooltip
            contentStyle={{ border: "1px solid #e9e9e7", borderRadius: 6, fontSize: 12, boxShadow: "none" }}
          />
          <Line
            type="monotone"
            dataKey="velocity"
            stroke="#2383e2"
            strokeWidth={2}
            dot={{ r: 3, fill: "#2383e2" }}
            activeDot={{ r: 4 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
