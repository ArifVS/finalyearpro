import { useEffect, useMemo, useState } from "react";
import { Activity, Car, Timer, Cpu, Signal, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./Dashboard";

const LABELS = [
  { l: "car", c: "var(--neon-cyan)" },
  { l: "truck", c: "var(--neon-purple)" },
  { l: "bus", c: "var(--neon-pink)" },
  { l: "bike", c: "var(--neon-blue)" },
];
type Box = { x: number; y: number; w: number; h: number; label: string; conf: number; color: string };

function makeBoxes(n: number): Box[] {
  return Array.from({ length: n }).map(() => {
    const lab = LABELS[Math.floor(Math.random() * LABELS.length)];
    return {
      x: Math.random() * 72 + 4,
      y: Math.random() * 60 + 18,
      w: 7 + Math.random() * 16,
      h: 7 + Math.random() * 12,
      label: lab.l, color: lab.c,
      conf: 0.7 + Math.random() * 0.29,
    };
  });
}

const NODES = [
  { id: "NODE-042", location: "Main St × 5th Ave", density: 9 },
  { id: "NODE-118", location: "Riverside Expressway", density: 6 },
];

function statusFor(count: number) {
  if (count >= 9) return { label: "Heavy", color: "var(--neon-pink)", green: 58 };
  if (count >= 6) return { label: "Moderate", color: "var(--neon-purple)", green: 42 };
  return { label: "Smooth", color: "var(--neon-cyan)", green: 28 };
}

function EdgeNodeCard({ node }: { node: (typeof NODES)[number] }) {
  const [boxes, setBoxes] = useState<Box[]>(() => makeBoxes(node.density));
  useEffect(() => {
    const id = setInterval(() => setBoxes(makeBoxes(node.density + Math.floor(Math.random() * 3 - 1))), 1800);
    return () => clearInterval(id);
  }, [node.density]);

  const total = boxes.length;
  const status = useMemo(() => statusFor(total), [total]);

  const stats = [
    { icon: Car, label: "Total Vehicles", value: total.toString(), accent: "var(--neon-cyan)" },
    { icon: Activity, label: "Predicted Status", value: status.label, accent: status.color },
    { icon: Timer, label: "Green Signal", value: `${status.green}s`, accent: "var(--neon-blue)" },
  ];

  return (
    <div className="glass animate-fade-up group relative overflow-hidden rounded-3xl p-5 transition-all duration-500 hover:-translate-y-1 hover:neon-glow sm:p-6">
      <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full opacity-20 blur-3xl transition-opacity duration-500 group-hover:opacity-40" style={{ background: status.color }} />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-xl glass-strong text-[var(--neon-cyan)]">
            <Cpu className="h-5 w-5" />
          </div>
          <div>
            <div className="text-sm font-semibold tracking-tight">{node.id}</div>
            <div className="text-[11px] text-muted-foreground">{node.location}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5 rounded-full glass px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[var(--neon-cyan)]/70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)]" />
            </span>
            Live
          </span>
          <span className="hidden sm:flex items-center gap-1 rounded-full glass px-2.5 py-1 text-[10px] text-muted-foreground">
            <Signal className="h-3 w-3 text-[var(--neon-cyan)]" /> 30 FPS
          </span>
        </div>
      </div>

      {/* Stats grid */}
      <div className="relative mt-5 grid grid-cols-3 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="glass-strong group/stat relative overflow-hidden rounded-2xl p-3 transition-transform duration-300 hover:-translate-y-0.5 sm:p-4">
            <div className="absolute inset-x-0 -top-px h-px" style={{ background: `linear-gradient(90deg, transparent, ${s.accent}, transparent)` }} />
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-medium uppercase tracking-widest text-muted-foreground">{s.label}</div>
              <s.icon className="h-3.5 w-3.5" style={{ color: s.accent }} />
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight sm:text-3xl" style={{ color: s.accent, textShadow: `0 0 18px ${s.accent}` }}>
              {s.value}
            </div>
          </div>
        ))}
      </div>

      {/* Processed traffic image preview */}
      <div className="relative mt-5 overflow-hidden rounded-2xl border border-white/10">
        <div className="relative aspect-[16/9] w-full">
          {/* Synthetic city scene */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.18 0.06 270), oklch(0.08 0.04 270))" }} />
          <div className="absolute inset-0 grid-bg opacity-40" />
          {/* horizon glow */}
          <div className="absolute inset-x-0 top-1/3 h-24 blur-2xl" style={{ background: "radial-gradient(ellipse at center, var(--neon-purple), transparent 60%)", opacity: 0.35 }} />
          {/* road */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{ background: "linear-gradient(180deg, transparent, oklch(0.12 0.04 250 / 0.85))" }} />
          {/* moving scan line */}
          <div className="absolute inset-x-0 h-px bg-[var(--neon-cyan)]/70" style={{ animation: "scan 4s linear infinite", boxShadow: "0 0 14px var(--neon-cyan)" }} />
          {/* vehicle silhouettes */}
          {boxes.map((b, i) => (
            <div key={i} className="absolute rounded transition-all duration-700"
              style={{ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%`, background: b.color, opacity: 0.22, filter: "blur(2px)" }} />
          ))}
          {/* bounding boxes */}
          {boxes.map((b, i) => (
            <div key={`bb-${i}`} className="absolute transition-all duration-700"
              style={{ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%`, border: `1.5px solid ${b.color}`, boxShadow: `0 0 14px ${b.color}` }}>
              <div className="absolute -top-5 left-0 whitespace-nowrap rounded px-1.5 py-0.5 text-[9px] font-bold text-black" style={{ background: b.color }}>
                {b.label} · {Math.round(b.conf * 100)}%
              </div>
            </div>
          ))}
          {/* HUD */}
          <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md glass px-2 py-1 text-[10px]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" /> PROCESSED · YOLO-v8
          </div>
          <div className="absolute right-3 top-3 rounded-md glass px-2 py-1 text-[10px] uppercase tracking-widest">{node.id}</div>
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 rounded-md glass px-2 py-1 text-[10px] text-muted-foreground">
            <ShieldCheck className="h-3 w-3 text-[var(--neon-cyan)]" /> Federated · Encrypted
          </div>
        </div>
      </div>
    </div>
  );
}

export function Detection() {
  return (
    <section className="relative z-10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Edge Node Detection" title="AI Inference, Per Node" subtitle="Each edge node runs on-device YOLO inference and reports live counts, predicted traffic status, and signal recommendations." />
        <div className="mt-12 grid gap-5 lg:grid-cols-2">
          {NODES.map((n) => <EdgeNodeCard key={n.id} node={n} />)}
        </div>
      </div>
    </section>
  );
}
