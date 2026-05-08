import { Lock, Server, Network } from "lucide-react";
import { SectionHeader } from "./Dashboard";

export function About() {
  return (
    <section id="about" className="relative z-10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="About Federated Learning" title="A New Paradigm for City AI" />
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          <div className="glass rounded-2xl p-6 lg:col-span-2">
            <h3 className="text-2xl font-semibold">What is federated learning?</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Federated learning is a decentralized machine learning paradigm where models are trained across many distributed edge devices using local data — without that data ever being sent to a central server. Each device computes a local update; only the updates are aggregated.
            </p>
            <h3 className="mt-8 text-2xl font-semibold">Why privacy matters</h3>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
              Traffic feeds capture pedestrians, license plates, and movement patterns of an entire population. Centralizing them creates a target for attackers and erodes public trust. Federated learning means the city benefits from the intelligence of its data without ever exposing it.
            </p>
          </div>
          <div className="glass relative overflow-hidden rounded-2xl p-6">
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--neon-purple)]/30 blur-3xl" />
            <div className="relative">
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Centralized vs Federated</div>
              <div className="mt-4 space-y-3">
                <Row icon={Server} title="Centralized AI" body="Raw data uploaded to one server. Single point of failure." dim />
                <Row icon={Network} title="Federated AI" body="Models travel — not data. Privacy by design." />
                <Row icon={Lock} title="Encrypted Updates" body="Differential privacy + secure aggregation." />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({ icon: Icon, title, body, dim = false }: { icon: any; title: string; body: string; dim?: boolean }) {
  return (
    <div className={`flex gap-3 rounded-xl glass-strong p-3 ${dim ? "opacity-60" : ""}`}>
      <div className="grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-[var(--gradient-neon)]/20">
        <Icon className="h-4 w-4 text-[var(--neon-cyan)]" />
      </div>
      <div>
        <div className="text-sm font-semibold">{title}</div>
        <div className="text-xs text-muted-foreground">{body}</div>
      </div>
    </div>
  );
}
