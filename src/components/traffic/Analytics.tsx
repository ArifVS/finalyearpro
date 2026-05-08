import { useEffect, useState } from "react";
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { SectionHeader } from "./Dashboard";

const trend = Array.from({ length: 24 }).map((_, i) => ({
  h: `${i}:00`,
  predicted: 200 + Math.sin(i / 3) * 80 + Math.random() * 30 + (i > 7 && i < 20 ? 120 : 20),
  actual: 200 + Math.sin(i / 3) * 75 + Math.random() * 40 + (i > 7 && i < 20 ? 110 : 25),
}));
const signal = Array.from({ length: 12 }).map((_, i) => ({ z: `Z${i + 1}`, before: 30 + Math.random() * 25, after: 18 + Math.random() * 14 }));

const tipStyle = { background: "oklch(0.1 0.04 270 / 0.9)", border: "1px solid oklch(1 0 0 / 0.1)", borderRadius: 12, fontSize: 12 };

export function Analytics() {
  const [heat, setHeat] = useState<number[]>(() => Array.from({ length: 96 }, () => Math.random()));
  useEffect(() => {
    const id = setInterval(() => setHeat(p => p.map(v => Math.max(0, Math.min(1, v + (Math.random() - 0.5) * 0.3)))), 1500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="analytics" className="relative z-10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Realtime Analytics" title="City Intelligence, Visualized" subtitle="Predictive models, congestion heatmaps, and signal optimization rendered live from federated inference results." />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground">Traffic Prediction · 24h</div>
                <div className="mt-1 text-lg font-semibold">Predicted vs Actual Flow</div>
              </div>
              <div className="flex gap-3 text-[10px]">
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[var(--neon-cyan)]" /> Predicted</span>
                <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[var(--neon-purple)]" /> Actual</span>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={260}>
              <AreaChart data={trend}>
                <defs>
                  <linearGradient id="g1" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.88 0.18 200)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.88 0.18 200)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="g2" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="oklch(0.65 0.25 300)" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="oklch(0.65 0.25 300)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="oklch(1 0 0 / 0.05)" />
                <XAxis dataKey="h" stroke="oklch(0.6 0.04 250)" fontSize={10} />
                <YAxis stroke="oklch(0.6 0.04 250)" fontSize={10} />
                <Tooltip contentStyle={tipStyle} />
                <Area type="monotone" dataKey="predicted" stroke="oklch(0.88 0.18 200)" fill="url(#g1)" strokeWidth={2} />
                <Area type="monotone" dataKey="actual" stroke="oklch(0.65 0.25 300)" fill="url(#g2)" strokeWidth={2} />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Vehicle Trend</div>
            <div className="mt-1 text-lg font-semibold">Last 12 hours</div>
            <ResponsiveContainer width="100%" height={260}>
              <LineChart data={trend.slice(0, 12)}>
                <CartesianGrid stroke="oklch(1 0 0 / 0.05)" />
                <XAxis dataKey="h" stroke="oklch(0.6 0.04 250)" fontSize={10} />
                <YAxis stroke="oklch(0.6 0.04 250)" fontSize={10} />
                <Tooltip contentStyle={tipStyle} />
                <Line type="monotone" dataKey="actual" stroke="oklch(0.72 0.25 340)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="glass rounded-2xl p-6">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Congestion Heatmap</div>
            <div className="mt-1 text-lg font-semibold">Live grid · 12×8</div>
            <div className="mt-4 grid grid-cols-12 gap-1">
              {heat.map((v, i) => (
                <div key={i} className="aspect-square rounded transition-all duration-1000"
                  style={{
                    background: `oklch(${0.4 + v * 0.5} ${0.2 + v * 0.1} ${260 - v * 60})`,
                    boxShadow: v > 0.7 ? `0 0 10px oklch(${0.7 + v * 0.2} 0.25 ${260 - v * 60})` : "none",
                    opacity: 0.4 + v * 0.6,
                  }} />
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] text-muted-foreground">
              <span>Low</span>
              <div className="h-1.5 flex-1 mx-2 rounded-full" style={{ background: "linear-gradient(90deg, oklch(0.4 0.2 260), oklch(0.7 0.25 200), oklch(0.75 0.25 340))" }} />
              <span>Critical</span>
            </div>
          </div>

          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Signal Timing Optimization</div>
            <div className="mt-1 text-lg font-semibold">Avg wait per zone (seconds) · before vs after AI</div>
            <ResponsiveContainer width="100%" height={260}>
              <BarChart data={signal}>
                <CartesianGrid stroke="oklch(1 0 0 / 0.05)" />
                <XAxis dataKey="z" stroke="oklch(0.6 0.04 250)" fontSize={10} />
                <YAxis stroke="oklch(0.6 0.04 250)" fontSize={10} />
                <Tooltip contentStyle={tipStyle} />
                <Bar dataKey="before" fill="oklch(0.4 0.05 270)" radius={[4, 4, 0, 0]} />
                <Bar dataKey="after" fill="oklch(0.7 0.22 245)" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
