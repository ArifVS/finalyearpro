import { Activity } from "lucide-react";

export function Nav() {
  const links = [
    { href: "#dashboard", label: "Dashboard" },
    { href: "#analytics", label: "Analytics" },
    { href: "#federated", label: "Federated AI" },
    { href: "#features", label: "Features" },
    { href: "#about", label: "About" },
    { href: "#team", label: "Team" },
  ];
  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 pt-4">
      <nav className="glass mx-auto flex max-w-6xl items-center justify-between rounded-full px-5 py-2.5">
        <a href="#" className="flex items-center gap-2">
          <div className="relative grid h-8 w-8 place-items-center rounded-lg bg-[var(--gradient-neon)] neon-glow">
            <Activity className="h-4 w-4 text-black" strokeWidth={3} />
          </div>
          <span className="text-sm font-semibold tracking-tight">NeuroTraffic</span>
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map(l => (
            <a key={l.href} href={l.href} className="rounded-full px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">{l.label}</a>
          ))}
        </div>
        <a href="#dashboard" className="rounded-full bg-[var(--gradient-neon)] px-4 py-1.5 text-xs font-semibold text-black neon-glow transition-transform hover:scale-105">Launch</a>
      </nav>
    </header>
  );
}
