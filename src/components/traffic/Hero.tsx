import { Play, BarChart3, Radio } from "lucide-react";

export function Hero() {
  return (
    <section className="relative z-10 px-4 pt-32 pb-20 sm:pt-40">
      <div className="mx-auto max-w-6xl text-center">
        <div className="animate-fade-up inline-flex items-center gap-2 glass rounded-full px-3 py-1 text-xs">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping-soft rounded-full bg-[var(--neon-cyan)]" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[var(--neon-cyan)]" />
          </span>
          <span className="text-muted-foreground">Edge AI · Federated Learning · v2.4</span>
        </div>

        <h1 className="animate-fade-up mt-6 text-5xl font-semibold leading-[1.05] sm:text-7xl md:text-8xl" style={{ animationDelay: "0.1s" }}>
          <span className="neon-text">AI-Powered</span>
          <br />
          <span className="text-foreground">Smart Traffic</span>
          <br />
          <span className="neon-text">Prediction</span>
        </h1>

        <p className="animate-fade-up mx-auto mt-8 max-w-2xl text-base text-muted-foreground sm:text-lg" style={{ animationDelay: "0.2s" }}>
          A privacy-first, edge-deployed federated learning platform that predicts urban traffic in real-time across thousands of distributed nodes — without ever centralizing your city's data.
        </p>

        <div className="animate-fade-up mt-10 flex flex-wrap items-center justify-center gap-3" style={{ animationDelay: "0.3s" }}>
          <button className="group inline-flex items-center gap-2 rounded-full bg-[var(--gradient-neon)] px-6 py-3 text-sm font-semibold text-black neon-glow transition-transform hover:scale-105">
            <Play className="h-4 w-4 fill-black" /> Live Demo
          </button>
          <button className="inline-flex items-center gap-2 glass-strong rounded-full px-6 py-3 text-sm font-semibold transition-colors hover:bg-white/10">
            <BarChart3 className="h-4 w-4 text-[var(--neon-cyan)]" /> View Analytics
          </button>
          <button className="inline-flex items-center gap-2 rounded-full border border-[var(--neon-purple)]/40 px-6 py-3 text-sm font-semibold text-[var(--neon-purple)] transition-colors hover:bg-[var(--neon-purple)]/10">
            <Radio className="h-4 w-4" /> Start Monitoring
          </button>
        </div>

        <div className="mt-16 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { v: "12.4M", l: "Predictions / day" },
            { v: "1,284", l: "Edge nodes online" },
            { v: "97.3%", l: "AI accuracy" },
            { v: "<48ms", l: "Inference latency" },
          ].map((s, i) => (
            <div key={i} className="glass animate-fade-up rounded-2xl p-4 text-left" style={{ animationDelay: `${0.4 + i * 0.08}s` }}>
              <div className="text-2xl font-semibold neon-text sm:text-3xl">{s.v}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
