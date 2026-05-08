import { useEffect, useState } from "react";
import { SectionHeader } from "./Dashboard";

const LABELS = [
  { l: "car", c: "var(--neon-cyan)" },
  { l: "truck", c: "var(--neon-purple)" },
  { l: "bus", c: "var(--neon-pink)" },
  { l: "bike", c: "var(--neon-blue)" },
];
type Box = { x: number; y: number; w: number; h: number; label: string; conf: number; color: string };

function makeBoxes(): Box[] {
  return Array.from({ length: 6 }).map(() => {
    const lab = LABELS[Math.floor(Math.random() * LABELS.length)];
    return {
      x: Math.random() * 70 + 5,
      y: Math.random() * 60 + 15,
      w: 8 + Math.random() * 18,
      h: 8 + Math.random() * 14,
      label: lab.l, color: lab.c,
      conf: 0.7 + Math.random() * 0.29,
    };
  });
}

export function Detection() {
  const [boxes, setBoxes] = useState<Box[]>(makeBoxes());
  useEffect(() => {
    const id = setInterval(() => setBoxes(makeBoxes()), 1800);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative z-10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="Live Detection" title="Bounding Box Inference" subtitle="A simulated preview of YOLO-class detection running on the edge node." />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <div className="glass relative overflow-hidden rounded-2xl p-3 lg:col-span-2">
            <div className="relative aspect-video overflow-hidden rounded-xl">
              {/* Synthetic city scene */}
              <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, oklch(0.15 0.05 270), oklch(0.08 0.04 270))" }} />
              <div className="absolute inset-0 grid-bg opacity-40" />
              <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{ background: "linear-gradient(180deg, transparent, oklch(0.12 0.04 250 / 0.8))" }} />
              {/* moving scan line */}
              <div className="absolute inset-x-0 h-px bg-[var(--neon-cyan)]/70" style={{ animation: "scan 4s linear infinite", boxShadow: "0 0 12px var(--neon-cyan)" }} />
              {/* fake vehicles silhouettes */}
              {boxes.map((b, i) => (
                <div key={i} className="absolute rounded transition-all duration-700"
                  style={{ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%`, background: `${b.color}`, opacity: 0.2, filter: "blur(2px)" }} />
              ))}
              {/* bounding boxes */}
              {boxes.map((b, i) => (
                <div key={`bb-${i}`} className="absolute transition-all duration-700"
                  style={{ left: `${b.x}%`, top: `${b.y}%`, width: `${b.w}%`, height: `${b.h}%`, border: `1.5px solid ${b.color}`, boxShadow: `0 0 12px ${b.color}` }}>
                  <div className="absolute -top-5 left-0 whitespace-nowrap rounded px-1.5 py-0.5 text-[9px] font-semibold text-black" style={{ background: b.color }}>
                    {b.label} · {Math.round(b.conf * 100)}%
                  </div>
                </div>
              ))}
              {/* corner HUD */}
              <div className="absolute left-3 top-3 flex items-center gap-2 rounded-md glass px-2 py-1 text-[10px]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--neon-cyan)] animate-pulse" /> REC · 30 FPS
              </div>
              <div className="absolute right-3 top-3 rounded-md glass px-2 py-1 text-[10px]">EDGE NODE-042</div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Traffic Score</div>
              <div className="mt-2 flex items-end gap-2">
                <div className="text-5xl font-semibold neon-text">{(6.8 + (boxes.length / 10)).toFixed(1)}</div>
                <div className="pb-2 text-xs text-muted-foreground">/ 10</div>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-[var(--gradient-neon)]" style={{ width: `${65 + boxes.length * 3}%` }} />
              </div>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Detected Objects</div>
              <ul className="mt-3 space-y-2 text-xs">
                {boxes.slice(0, 5).map((b, i) => (
                  <li key={i} className="flex items-center justify-between">
                    <span className="flex items-center gap-2"><span className="h-2 w-2 rounded-full" style={{ background: b.color }} /> {b.label}</span>
                    <span className="text-muted-foreground">{Math.round(b.conf * 100)}%</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="glass rounded-2xl p-5">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">AI Prediction</div>
              <div className="mt-2 text-sm font-semibold">Moderate flow expected · next 15 min</div>
              <div className="mt-1 text-xs text-muted-foreground">Recommended green-time: <span className="text-[var(--neon-cyan)] font-semibold">42s</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
