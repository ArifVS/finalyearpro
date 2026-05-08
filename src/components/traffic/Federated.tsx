import { Cpu, Globe, Lock } from "lucide-react";
import { SectionHeader } from "./Dashboard";

export function Federated() {
  const nodes = [
    { x: 20, y: 30 }, { x: 80, y: 25 }, { x: 15, y: 75 }, { x: 85, y: 70 },
    { x: 50, y: 15 }, { x: 50, y: 85 }, { x: 30, y: 50 }, { x: 70, y: 50 },
  ];
  return (
    <section id="federated" className="relative z-10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Federated Learning" title="Trained Everywhere. Shared Privately." subtitle="Each edge node trains locally on its own intersection data, then exchanges encrypted gradients with the global aggregator." />

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <div className="glass relative overflow-hidden rounded-2xl p-6 lg:col-span-2 min-h-[480px]">
            <div className="absolute inset-0 grid-bg opacity-20" />
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
              <defs>
                <linearGradient id="conn" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="oklch(0.88 0.18 200)" />
                  <stop offset="100%" stopColor="oklch(0.65 0.25 300)" />
                </linearGradient>
              </defs>
              {nodes.map((n, i) => (
                <line key={i} x1="50" y1="50" x2={n.x} y2={n.y} stroke="url(#conn)" strokeWidth="0.25" strokeDasharray="1 1.5">
                  <animate attributeName="stroke-dashoffset" from="0" to="10" dur={`${2 + i * 0.3}s`} repeatCount="indefinite" />
                </line>
              ))}
            </svg>

            {/* Central aggregator */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="absolute -inset-6 rounded-full bg-[var(--gradient-neon)] opacity-40 blur-2xl animate-pulse-glow" />
                <div className="relative grid h-24 w-24 place-items-center rounded-2xl glass-strong neon-glow">
                  <Globe className="h-8 w-8 text-[var(--neon-cyan)]" />
                </div>
                <div className="mt-2 text-center text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">Global Model</div>
              </div>
            </div>

            {/* Edge nodes */}
            {nodes.map((n, i) => (
              <div key={i} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${n.x}%`, top: `${n.y}%` }}>
                <div className="relative">
                  <span className="absolute inset-0 animate-ping-soft rounded-xl bg-[var(--neon-purple)]/40" style={{ animationDelay: `${i * 0.3}s` }} />
                  <div className="relative grid h-12 w-12 place-items-center rounded-xl glass-strong">
                    <Cpu className="h-5 w-5 text-[var(--neon-purple)]" />
                  </div>
                </div>
                <div className="mt-1 text-center text-[9px] text-muted-foreground">Node-{i + 1}</div>
              </div>
            ))}

            {/* Bottom legend */}
            <div className="absolute bottom-4 left-4 right-4 flex flex-wrap items-center justify-between gap-3 text-[10px] text-muted-foreground">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[var(--neon-purple)]" /> Local training</span>
              <span className="flex items-center gap-1.5"><Lock className="h-3 w-3 text-[var(--neon-cyan)]" /> Encrypted gradients</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-[var(--neon-cyan)]" /> Global aggregation</span>
            </div>
          </div>

          <div className="space-y-4">
            {[
              { step: "01", title: "Local Training", body: "Each edge device trains a lightweight CNN on local CCTV feeds. Raw video never leaves the node." },
              { step: "02", title: "Secure Sharing", body: "Only encrypted gradient updates are transmitted using differential privacy." },
              { step: "03", title: "Global Aggregation", body: "The central server averages updates with FedAvg to produce a stronger global model." },
              { step: "04", title: "Continuous Loop", body: "The improved model is broadcast back to every node for the next epoch." },
            ].map((s, i) => (
              <div key={i} className="glass rounded-2xl p-5 transition-transform hover:-translate-y-0.5">
                <div className="flex items-start gap-3">
                  <div className="text-2xl font-semibold neon-text">{s.step}</div>
                  <div>
                    <div className="text-sm font-semibold">{s.title}</div>
                    <p className="mt-1 text-xs text-muted-foreground">{s.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
