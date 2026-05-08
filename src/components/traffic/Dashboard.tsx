import { Car, Gauge, Timer, Network, Brain, Cpu, TrendingUp, TrendingDown } from "lucide-react";
import { useEffect, useState } from "react";

const cards = [
  { icon: Car, label: "Live Vehicle Count", base: 4823, unit: "", trend: "up", delta: "+8.2%", color: "var(--neon-cyan)" },
  { icon: Gauge, label: "Traffic Congestion", base: 62, unit: "%", trend: "down", delta: "-3.1%", color: "var(--neon-pink)" },
  { icon: Timer, label: "Predicted Green Signal", base: 38, unit: "s", trend: "up", delta: "+2s", color: "var(--neon-blue)" },
  { icon: Network, label: "Federated Nodes Active", base: 1284, unit: "", trend: "up", delta: "+24", color: "var(--neon-purple)" },
  { icon: Brain, label: "AI Accuracy", base: 97.3, unit: "%", trend: "up", delta: "+0.4%", color: "var(--neon-cyan)" },
  { icon: Cpu, label: "Edge Devices Connected", base: 8642, unit: "", trend: "up", delta: "+312", color: "var(--neon-blue)" },
];

function useLive(base: number, jitter = 0.04) {
  const [v, setV] = useState(base);
  useEffect(() => {
    const id = setInterval(() => setV(base + (Math.random() - 0.5) * base * jitter), 1500);
    return () => clearInterval(id);
  }, [base, jitter]);
  return v;
}

function MetricCard({ c, i }: { c: (typeof cards)[number]; i: number }) {
  const v = useLive(c.base);
  const display = c.base < 100 ? v.toFixed(1) : Math.round(v).toLocaleString();
  const Trend = c.trend === "up" ? TrendingUp : TrendingDown;
  return (
    <div className="glass animate-fade-up group relative overflow-hidden rounded-2xl p-5 transition-transform hover:-translate-y-1" style={{ animationDelay: `${i * 0.05}s` }}>
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-20 blur-3xl transition-opacity group-hover:opacity-40" style={{ background: c.color }} />
      <div className="relative flex items-start justify-between">
        <div className="grid h-10 w-10 place-items-center rounded-xl glass-strong" style={{ color: c.color }}>
          <c.icon className="h-5 w-5" />
        </div>
        <div className={`flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold ${c.trend === "up" ? "bg-[oklch(0.7_0.2_160/0.15)] text-[oklch(0.85_0.2_160)]" : "bg-[oklch(0.65_0.25_25/0.15)] text-[oklch(0.8_0.22_25)]"}`}>
          <Trend className="h-3 w-3" /> {c.delta}
        </div>
      </div>
      <div className="relative mt-6">
        <div className="text-3xl font-semibold tracking-tight">
          {display}<span className="text-base text-muted-foreground">{c.unit}</span>
        </div>
        <div className="mt-1 text-xs text-muted-foreground">{c.label}</div>
      </div>
      <div className="relative mt-4 h-1 overflow-hidden rounded-full bg-white/5">
        <div className="h-full rounded-full" style={{ background: `linear-gradient(90deg, transparent, ${c.color})`, width: `${50 + (v % 50)}%` }} />
      </div>
    </div>
  );
}

export function Dashboard() {
  return (
    <section id="dashboard" className="relative z-10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Realtime Telemetry" title="Live City Dashboard" subtitle="Streaming directly from edge nodes deployed across intersections, highways, and intelligent signal controllers." />
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c, i) => <MetricCard key={c.label} c={c} i={i} />)}
        </div>
      </div>
    </section>
  );
}

export function SectionHeader({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle?: string }) {
  return (
    <div className="text-center">
      <div className="inline-flex items-center gap-2 rounded-full glass px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
        <span className="h-1 w-1 rounded-full bg-[var(--neon-cyan)]" /> {eyebrow}
      </div>
      <h2 className="mt-4 text-4xl font-semibold sm:text-5xl"><span className="neon-text">{title}</span></h2>
      {subtitle && <p className="mx-auto mt-4 max-w-2xl text-sm text-muted-foreground sm:text-base">{subtitle}</p>}
    </div>
  );
}
