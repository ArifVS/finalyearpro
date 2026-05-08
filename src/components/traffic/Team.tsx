import { Github, Linkedin } from "lucide-react";
import { SectionHeader } from "./Dashboard";

const team = [
  { name: "Dr. Aria Chen", role: "ML Research Lead", init: "AC", c: "var(--neon-cyan)" },
  { name: "Kenji Okafor", role: "Edge Systems Engineer", init: "KO", c: "var(--neon-purple)" },
  { name: "Maya Volkov", role: "Smart City Architect", init: "MV", c: "var(--neon-pink)" },
  { name: "Leo Hernandez", role: "Full-Stack Engineer", init: "LH", c: "var(--neon-blue)" },
];

export function Team() {
  return (
    <section id="team" className="relative z-10 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionHeader eyebrow="The Builders" title="Meet the Team" />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((m, i) => (
            <div key={i} className="glass group relative overflow-hidden rounded-2xl p-6 text-center transition-all hover:-translate-y-1">
              <div className="absolute inset-x-0 -top-20 mx-auto h-40 w-40 rounded-full opacity-30 blur-3xl transition-opacity group-hover:opacity-60" style={{ background: m.c }} />
              <div className="relative mx-auto grid h-20 w-20 place-items-center rounded-full glass-strong text-2xl font-semibold neon-text">{m.init}</div>
              <div className="relative mt-4 text-base font-semibold">{m.name}</div>
              <div className="relative mt-1 text-xs text-muted-foreground">{m.role}</div>
              <div className="relative mt-4 flex justify-center gap-2">
                <a className="grid h-8 w-8 place-items-center rounded-lg glass-strong transition-colors hover:text-[var(--neon-cyan)]" href="#"><Github className="h-3.5 w-3.5" /></a>
                <a className="grid h-8 w-8 place-items-center rounded-lg glass-strong transition-colors hover:text-[var(--neon-cyan)]" href="#"><Linkedin className="h-3.5 w-3.5" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
