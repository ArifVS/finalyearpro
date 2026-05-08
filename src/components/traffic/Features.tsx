import { Shield, Zap, Cpu, Eye, TrafficCone, Leaf } from "lucide-react";
import { SectionHeader } from "./Dashboard";

const items = [
  { icon: Shield, t: "Privacy-Preserving AI", b: "Differential privacy and secure aggregation ensure raw data never leaves the source." },
  { icon: Zap, t: "Low Latency Prediction", b: "Sub-50ms inference at the edge — no round-trip to the cloud." },
  { icon: Cpu, t: "Edge Computing", b: "Lightweight neural nets optimized for Jetson, Coral, and ARM boards." },
  { icon: Eye, t: "Real-Time Monitoring", b: "Continuous CCTV ingestion with vehicle detection, classification, and tracking." },
  { icon: TrafficCone, t: "Intelligent Signal Optimization", b: "Adaptive green-time allocation reduces avg wait by 42% city-wide." },
  { icon: Leaf, t: "Sustainable Mobility", b: "Lower idling = lower emissions. Built for net-zero urban targets." },
];

export function Features() {
  return (
    <section id="features" className="relative z-10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Smart City Stack" title="Built for the Modern City" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <div key={i} className="glass group relative overflow-hidden rounded-2xl p-6 transition-all hover:-translate-y-1 hover:neon-glow">
              <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[var(--gradient-neon)] opacity-0 blur-3xl transition-opacity group-hover:opacity-30" />
              <div className="relative grid h-12 w-12 place-items-center rounded-xl glass-strong">
                <it.icon className="h-5 w-5 text-[var(--neon-cyan)]" />
              </div>
              <div className="relative mt-5 text-lg font-semibold">{it.t}</div>
              <p className="relative mt-2 text-sm text-muted-foreground">{it.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
