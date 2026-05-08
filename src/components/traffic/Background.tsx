export function CyberBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-40" style={{ animation: "grid-flow 20s linear infinite" }} />
      <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-[oklch(0.65_0.25_300/0.25)] animate-pulse-glow" />
      <div className="absolute top-1/3 -right-40 h-[600px] w-[600px] rounded-full bg-[oklch(0.7_0.22_245/0.22)] animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      <div className="absolute bottom-0 left-1/3 h-[500px] w-[500px] rounded-full bg-[oklch(0.88_0.18_200/0.18)] animate-pulse-glow" style={{ animationDelay: "3s" }} />
      <svg className="absolute inset-0 h-full w-full opacity-30" preserveAspectRatio="none">
        <defs>
          <linearGradient id="line-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.88 0.18 200)" />
            <stop offset="100%" stopColor="oklch(0.65 0.25 300)" />
          </linearGradient>
        </defs>
        {Array.from({ length: 8 }).map((_, i) => (
          <line key={i}
            x1={`${(i * 13) % 100}%`} y1="0%"
            x2={`${(i * 23 + 30) % 100}%`} y2="100%"
            stroke="url(#line-grad)" strokeWidth="0.5" strokeDasharray="4 8">
            <animate attributeName="stroke-dashoffset" from="0" to="24" dur={`${3 + i * 0.4}s`} repeatCount="indefinite" />
          </line>
        ))}
      </svg>
    </div>
  );
}
