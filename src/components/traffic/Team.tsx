import { Github, Linkedin } from "lucide-react";
import { SectionHeader } from "./Dashboard";
import arifImg from "@/assets/team-arif.png";
import abeedImg from "@/assets/team-abeed.png";
import ujjwalImg from "@/assets/team-ujjwal.png";
import krishnaImg from "@/assets/team-krishna.png";

const team = [
  { name: "Arif", role: "ML Research Lead", img: arifImg, linkedin: "https://www.linkedin.com/in/arif-vs/", c: "var(--neon-cyan)" },
  { name: "Abeed Ali", role: "Edge Systems Engineer", img: abeedImg, linkedin: "https://www.linkedin.com/in/abeed-ali-46b279301/", c: "var(--neon-purple)" },
  { name: "Ujjwal Kumar", role: "Smart City Architect", img: ujjwalImg, linkedin: "https://www.linkedin.com/in/ujjwal-kumar-8a6926300/", c: "var(--neon-pink)" },
  { name: "Krishna", role: "Full-Stack Engineer", img: krishnaImg, linkedin: "https://www.linkedin.com/in/hustlerkrishna1/", c: "var(--neon-blue)" },
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
              <div className="relative mx-auto h-20 w-20 overflow-hidden rounded-full glass-strong neon-glow ring-2 ring-white/10">
                <img src={m.img} alt={m.name} className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="relative mt-4 text-base font-semibold">{m.name}</div>
              <div className="relative mt-1 text-xs text-muted-foreground">{m.role}</div>
              <div className="relative mt-4 flex justify-center gap-2">
                <a className="grid h-8 w-8 place-items-center rounded-lg glass-strong transition-colors hover:text-[var(--neon-cyan)]" href={m.linkedin} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}><Linkedin className="h-3.5 w-3.5" /></a>
                <a className="grid h-8 w-8 place-items-center rounded-lg glass-strong transition-colors hover:text-[var(--neon-cyan)]" href="#" aria-label={`${m.name} on GitHub`}><Github className="h-3.5 w-3.5" /></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
