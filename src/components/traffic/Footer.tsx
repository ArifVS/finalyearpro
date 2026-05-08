import { Activity, Github, Linkedin, BookOpen, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative z-10 px-4 pb-10 pt-20">
      <div className="mx-auto max-w-6xl">
        <div className="glass rounded-3xl p-8 sm:p-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div className="md:col-span-2">
              <div className="flex items-center gap-2">
                <div className="grid h-9 w-9 place-items-center rounded-lg bg-[var(--gradient-neon)] neon-glow">
                  <Activity className="h-4 w-4 text-black" strokeWidth={3} />
                </div>
                <span className="font-semibold">NeuroTraffic</span>
              </div>
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Edge-Based Federated Learning for Real-Time Traffic Prediction in Smart Cities. Built for the cities of tomorrow — privately, intelligently, sustainably.
              </p>
              <div className="mt-6 flex gap-2">
                {[Github, Linkedin, BookOpen, Mail].map((I, i) => (
                  <a key={i} href="#" className="grid h-9 w-9 place-items-center rounded-xl glass-strong transition-all hover:neon-glow hover:text-[var(--neon-cyan)]">
                    <I className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Project</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a className="hover:text-[var(--neon-cyan)]" href="#">GitHub</a></li>
                <li><a className="hover:text-[var(--neon-cyan)]" href="#">Documentation</a></li>
                <li><a className="hover:text-[var(--neon-cyan)]" href="#">Research Paper</a></li>
                <li><a className="hover:text-[var(--neon-cyan)]" href="#">API Reference</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">Smart City</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a className="hover:text-[var(--neon-cyan)]" href="#">Case Studies</a></li>
                <li><a className="hover:text-[var(--neon-cyan)]" href="#">Deployments</a></li>
                <li><a className="hover:text-[var(--neon-cyan)]" href="#">Partners</a></li>
                <li><a className="hover:text-[var(--neon-cyan)]" href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-white/5 pt-6 text-xs text-muted-foreground sm:flex-row">
            <span>© 2026 NeuroTraffic Labs · Smart City Initiative</span>
            <span>Status: <span className="text-[var(--neon-cyan)]">All edge nodes operational</span></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
