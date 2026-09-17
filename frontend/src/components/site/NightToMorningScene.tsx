import { Moon, Sun, Coffee, CheckCircle2, AlertTriangle, FileText } from "lucide-react";

/**
 * Hero scene: "Night → Morning"
 * Split panel that animates from a dark, busy night-audit scene (left)
 * to a bright morning briefing (right) — sky gradient, stars fade, sun rises,
 * exceptions resolve into a clean inbox. The "wipe" cycles every 8s.
 */
export function NightToMorningScene() {
  return (
    <div className="relative">
      <style>{`
        @keyframes ntm-wipe {
          0%, 15% { clip-path: inset(0 100% 0 0); }
          45%, 70% { clip-path: inset(0 0 0 0); }
          95%, 100% { clip-path: inset(0 100% 0 0); }
        }
        @keyframes ntm-sun-rise {
          0%, 20% { transform: translateY(80px); opacity: 0; }
          50%, 75% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(80px); opacity: 0; }
        }
        @keyframes ntm-star-twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes ntm-row-resolve {
          0%, 20% { transform: translateX(0); opacity: 1; background-color: oklch(0.65 0.22 25 / 0.1); border-color: oklch(0.65 0.22 25 / 0.4); }
          45% { background-color: oklch(0.74 0.17 155 / 0.1); border-color: oklch(0.74 0.17 155 / 0.4); }
          75% { transform: translateX(0); opacity: 1; }
          90%, 100% { transform: translateX(8px); opacity: 0.7; }
        }
        @keyframes ntm-tick-pop {
          0%, 35% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); opacity: 1; }
          60%, 100% { transform: scale(1); opacity: 1; }
        }
        @keyframes ntm-coffee-steam {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-12px) scale(1.4); opacity: 0; }
        }
        @keyframes ntm-clock-tick {
          0% { content: "02:41 AM"; }
          25% { content: "04:12 AM"; }
          50% { content: "06:30 AM"; }
          75% { content: "07:15 AM"; }
          100% { content: "07:45 AM"; }
        }
        @keyframes ntm-cloud-drift {
          0% { transform: translateX(-40px); }
          100% { transform: translateX(560px); }
        }
        @keyframes ntm-bird-fly {
          0% { transform: translate(-30px, 10px) scale(0.8); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(560px, -30px) scale(0.6); opacity: 0; }
        }
        @keyframes ntm-sun-rays {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.7; }
        }
        @keyframes ntm-sparkle {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
        }
        @keyframes ntm-moon-glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.85; }
        }
        @keyframes ntm-sun-bloom {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.18); opacity: 1; }
        }
        .ntm-wrap:hover .ntm-wipe-layer { animation-duration: 6s !important; }
        .ntm-wrap:hover .ntm-moon-aura { animation-duration: 1.6s !important; }
        .ntm-wrap:hover .ntm-sun-aura { animation-duration: 1.6s !important; }
      `}</style>

      <div className="absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-25 blur-3xl" aria-hidden />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <div className="ml-3 text-xs font-medium text-muted-foreground">
            Innrly · One overnight cycle ·{" "}
            <span className="ntm-clock font-mono text-accent" style={{}} />
            <style>{`
              .ntm-clock::after {
                content: "02:41 AM";
                animation: ntm-clock-tick 8s steps(1) infinite;
              }
            `}</style>
          </div>
        </div>

        <div className="ntm-wrap relative h-[440px] overflow-hidden">
          {/* NIGHT layer (base) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.15 0.04 260) 0%, oklch(0.22 0.05 250) 100%)",
            }}
          >
            {/* Stars */}
            {stars.map((s, i) => (
              <span
                key={i}
                className="absolute rounded-full bg-white"
                style={{
                  left: `${s.x}%`,
                  top: `${s.y}%`,
                  width: s.r,
                  height: s.r,
                  animation: `ntm-star-twinkle ${2 + (i % 3)}s ease-in-out ${i * 0.2}s infinite`,
                }}
              />
            ))}
            {/* Moon + cyan/indigo aura */}
            <div className="absolute right-8 top-8 h-12 w-12">
              <span
                className="ntm-moon-aura pointer-events-none absolute left-1/2 top-1/2"
                style={{
                  width: 140,
                  height: 140,
                  transform: "translate(-50%, -50%)",
                  background:
                    "radial-gradient(circle, oklch(0.82 0.16 195 / 0.55) 0%, oklch(0.62 0.22 260 / 0.35) 40%, transparent 70%)",
                  filter: "blur(14px)",
                  animation: "ntm-moon-glow 4s ease-in-out infinite",
                  transition: "animation-duration 0.4s ease",
                }}
                aria-hidden
              />
              <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur">
                <Moon className="h-6 w-6 text-white/80" />
              </div>
            </div>

            {/* Night content: exception inbox flooded */}
            <div className="absolute left-6 top-16 w-72">
              <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/60">
                <AlertTriangle className="h-3 w-3 text-destructive" /> Overnight queue · 14 items
              </div>
              <div className="space-y-1.5">
                {nightRows.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-2.5 py-1.5 backdrop-blur"
                  >
                    <FileText className="h-3 w-3 shrink-0 text-destructive" />
                    <span className="truncate text-[10px] font-medium text-white/90">
                      {r.label}
                    </span>
                    <span className="ml-auto text-[10px] font-bold text-white">{r.amt}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Night content: live monitoring panel (right) */}
            <div className="absolute right-6 top-16 hidden w-60 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur sm:block">
              <div className="mb-2 flex items-center justify-between">
                <div className="text-[9px] font-bold uppercase tracking-wider text-white/70">
                  Systems · live
                </div>
                <span className="flex items-center gap-1 text-[9px] font-bold text-emerald-300">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" />
                  </span>
                  SYNCING
                </span>
              </div>
              <div className="space-y-1.5">
                {[
                  { name: "Opera PMS", pct: 92 },
                  { name: "Booking.com", pct: 78 },
                  { name: "Expedia", pct: 64 },
                  { name: "QuickBooks GL", pct: 41 },
                  { name: "Amex feed", pct: 88 },
                ].map((s) => (
                  <div key={s.name}>
                    <div className="flex items-center justify-between text-[9px] font-medium text-white/80">
                      <span>{s.name}</span>
                      <span className="font-mono text-white/60">{s.pct}%</span>
                    </div>
                    <div className="mt-0.5 h-1 overflow-hidden rounded-full bg-white/10">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300"
                        style={{ width: `${s.pct}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2 border-t border-white/10 pt-2 text-[9px] text-white/50">
                428 transactions processed
              </div>
            </div>

            <div className="absolute bottom-4 left-6 text-[10px] font-medium text-white/50">
              Night audit running… 14 exceptions detected
            </div>
          </div>

          {/* MORNING layer (wipes in) */}
          <div
            className="ntm-wipe-layer absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, oklch(0.92 0.05 75) 0%, oklch(0.85 0.12 50) 60%, oklch(0.78 0.14 30) 100%)",
              animation: "ntm-wipe 8s ease-in-out infinite",
            }}
          >
            {/* Drifting clouds */}
            {[
              { y: 24, delay: 0, dur: 22, w: 60, op: 0.7 },
              { y: 70, delay: 8, dur: 28, w: 90, op: 0.5 },
              { y: 130, delay: 14, dur: 32, w: 70, op: 0.6 },
            ].map((c, i) => (
              <div
                key={`cloud-${i}`}
                className="absolute rounded-full bg-white"
                style={{
                  top: c.y,
                  left: 0,
                  width: c.w,
                  height: c.w * 0.4,
                  opacity: c.op,
                  filter: "blur(6px)",
                  animation: `ntm-cloud-drift ${c.dur}s linear ${c.delay}s infinite`,
                }}
              />
            ))}

            {/* Birds */}
            {[
              { y: 60, delay: 2, dur: 9 },
              { y: 90, delay: 5, dur: 11 },
            ].map((b, i) => (
              <svg
                key={`bird-${i}`}
                className="absolute"
                style={{
                  top: b.y,
                  left: 0,
                  animation: `ntm-bird-fly ${b.dur}s ease-in-out ${b.delay}s infinite`,
                }}
                width="18"
                height="10"
                viewBox="0 0 18 10"
              >
                <path
                  d="M 1 5 Q 4 1, 7 5 Q 10 1, 13 5"
                  fill="none"
                  stroke="oklch(0.35 0.05 30)"
                  strokeWidth="1.2"
                  strokeLinecap="round"
                />
              </svg>
            ))}

            {/* Sun + rotating rays */}
            <div
              className="absolute right-10 top-10"
              style={{ animation: "ntm-sun-rise 8s ease-in-out infinite" }}
            >
              <div className="relative">
                {/* Big warm amber bloom behind sun */}
                <span
                  className="ntm-sun-aura pointer-events-none absolute left-1/2 top-1/2"
                  style={{
                    width: 220,
                    height: 220,
                    transform: "translate(-50%, -50%)",
                    background:
                      "radial-gradient(circle, oklch(0.95 0.16 85 / 0.85) 0%, oklch(0.82 0.18 55 / 0.55) 35%, oklch(0.72 0.20 35 / 0.25) 60%, transparent 80%)",
                    filter: "blur(20px)",
                    animation: "ntm-sun-bloom 3.6s ease-in-out infinite",
                  }}
                  aria-hidden
                />
                {/* Rotating rays behind sun */}
                <svg
                  className="absolute -inset-6"
                  width="112"
                  height="112"
                  viewBox="0 0 112 112"
                  style={{
                    animation: "ntm-sun-rays 12s linear infinite",
                    transformOrigin: "56px 56px",
                  }}
                >
                  {Array.from({ length: 12 }).map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x1 = 56 + Math.cos(angle) * 36;
                    const y1 = 56 + Math.sin(angle) * 36;
                    const x2 = 56 + Math.cos(angle) * 52;
                    const y2 = 56 + Math.sin(angle) * 52;
                    return (
                      <line
                        key={i}
                        x1={x1}
                        y1={y1}
                        x2={x2}
                        y2={y2}
                        stroke="oklch(0.92 0.15 75)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        opacity="0.85"
                      />
                    );
                  })}
                </svg>
                <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 to-orange-400 shadow-[0_0_80px_rgba(255,180,80,0.9)]">
                  <Sun className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>

            {/* Sparkles around the briefing card */}
            {[
              { x: 340, y: 60, d: 0 },
              { x: 100, y: 50, d: 0.6 },
              { x: 360, y: 200, d: 1.2 },
              { x: 80, y: 240, d: 1.8 },
            ].map((s, i) => (
              <svg
                key={`sp-${i}`}
                className="absolute"
                style={{
                  left: s.x,
                  top: s.y,
                  animation: `ntm-sparkle 2.4s ease-in-out ${s.d}s infinite`,
                }}
                width="12"
                height="12"
                viewBox="0 0 12 12"
              >
                <path d="M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z" fill="oklch(0.95 0.12 90)" />
              </svg>
            ))}

            {/* Morning content: briefing card */}
            <div className="absolute left-6 top-16 w-80 rounded-xl border border-white/40 bg-white/85 p-4 shadow-2xl backdrop-blur">
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <div className="text-[9px] font-bold uppercase tracking-wider text-orange-700">
                    Morning briefing
                  </div>
                  <div className="text-sm font-bold text-slate-900">Wednesday · 7:45 AM</div>
                </div>
                <div className="relative">
                  <Coffee className="h-6 w-6 text-orange-800" />
                  <span
                    className="absolute -top-2 left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-white/70"
                    style={{ animation: "ntm-coffee-steam 1.4s ease-out infinite" }}
                  />
                  <span
                    className="absolute -top-2 left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-white/70"
                    style={{ animation: "ntm-coffee-steam 1.4s ease-out 0.7s infinite" }}
                  />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-2">
                <Stat label="Cleared" value="12" accent="text-emerald-700" />
                <Stat label="To review" value="2" accent="text-orange-700" />
                <Stat label="Saved" value="$412" accent="text-emerald-700" />
              </div>

              <div className="mt-3 space-y-1.5">
                {morningRows.map((r, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-md border border-emerald-300 bg-emerald-50 px-2.5 py-1.5"
                  >
                    <span
                      className="inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500"
                      style={{ animation: `ntm-tick-pop 8s ease-out ${i * 0.15}s infinite` }}
                    >
                      <CheckCircle2 className="h-3 w-3 text-white" />
                    </span>
                    <span className="truncate text-[10px] font-medium text-slate-800">{r}</span>
                  </div>
                ))}
                <div className="flex items-center gap-2 rounded-md border border-orange-300 bg-orange-50 px-2.5 py-1.5">
                  <AlertTriangle className="h-3 w-3 shrink-0 text-orange-600" />
                  <span className="truncate text-[10px] font-medium text-slate-800">
                    Tax variance · folio #4421 · <span className="font-bold">$92</span>
                  </span>
                  <button className="ml-auto rounded bg-slate-900 px-1.5 py-0.5 text-[9px] font-bold text-white">
                    Review
                  </button>
                </div>
              </div>
            </div>

            {/* Morning content: today's outlook card (right) */}
            <div className="absolute right-6 top-16 hidden w-60 rounded-xl border border-white/50 bg-white/90 p-3 shadow-2xl backdrop-blur sm:block">
              <div className="mb-2 flex items-center justify-between">
                <div className="text-[9px] font-bold uppercase tracking-wider text-orange-700">
                  Today's outlook
                </div>
                <span className="rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-700">
                  On pace
                </span>
              </div>

              <div className="space-y-2">
                <div className="rounded-md border border-slate-200 bg-white p-2">
                  <div className="flex items-center justify-between text-[9px] font-medium text-slate-500">
                    <span>Occupancy</span>
                    <span className="font-bold text-emerald-600">+4.2%</span>
                  </div>
                  <div className="mt-0.5 flex items-end justify-between">
                    <div className="text-base font-bold text-slate-900">87%</div>
                    <svg width="60" height="20" viewBox="0 0 60 20">
                      <polyline
                        points="0,15 10,12 20,14 30,8 40,10 50,5 60,3"
                        fill="none"
                        stroke="oklch(0.65 0.18 155)"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>

                <div className="rounded-md border border-slate-200 bg-white p-2">
                  <div className="flex items-center justify-between text-[9px] font-medium text-slate-500">
                    <span>ADR</span>
                    <span className="font-bold text-emerald-600">+$8</span>
                  </div>
                  <div className="mt-0.5 flex items-end justify-between">
                    <div className="text-base font-bold text-slate-900">$182</div>
                    <svg width="60" height="20" viewBox="0 0 60 20">
                      <polyline
                        points="0,14 10,11 20,13 30,9 40,7 50,8 60,4"
                        fill="none"
                        stroke="oklch(0.65 0.18 155)"
                        strokeWidth="1.5"
                      />
                    </svg>
                  </div>
                </div>

                <div className="rounded-md border border-orange-200 bg-orange-50 p-2">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-orange-700">
                    Action for you
                  </div>
                  <div className="mt-0.5 text-[10px] font-medium text-slate-800">
                    Approve 2 flagged items before 10 AM
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute bottom-4 left-6 text-[10px] font-bold text-orange-900">
              ☕ You walked in. It's already done.
            </div>
          </div>

          {/* Phase labels */}
          <div className="absolute top-3 left-3 z-10 rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white/80 backdrop-blur">
            Night → Morning
          </div>
        </div>
      </div>

      <div className="absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block">
        <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          You sleep. Innrly works.
        </div>
        <div className="text-lg font-bold text-foreground">14 → 2 · in one cycle</div>
      </div>
    </div>
  );
}

const stars = [
  { x: 8, y: 12, r: 2 },
  { x: 22, y: 8, r: 1 },
  { x: 35, y: 18, r: 1.5 },
  { x: 48, y: 6, r: 1 },
  { x: 60, y: 14, r: 2 },
  { x: 72, y: 22, r: 1 },
  { x: 88, y: 28, r: 1.5 },
  { x: 15, y: 32, r: 1 },
  { x: 42, y: 38, r: 1 },
  { x: 78, y: 42, r: 2 },
  { x: 5, y: 48, r: 1 },
  { x: 92, y: 52, r: 1.5 },
];

const nightRows = [
  { label: "Unposted room charge", amt: "$148" },
  { label: "Tax mismatch · #4421", amt: "$92" },
  { label: "Duplicate OTA fee", amt: "$74" },
  { label: "Comp room · no approval", amt: "$98" },
  { label: "Vendor inv. unmatched", amt: "$1,284" },
];

const morningRows = [
  "Room charges posted · 247",
  "OTA commissions reconciled",
  "Vendor invoices matched · 18",
  "GL entries pushed to QuickBooks",
];

function Stat({ label, value, accent }: { label: string; value: string; accent: string }) {
  return (
    <div className="rounded-md border border-slate-200 bg-white/60 p-2">
      <div className="text-[8px] font-bold uppercase tracking-wider text-slate-500">{label}</div>
      <div className={`text-lg font-bold ${accent}`}>{value}</div>
    </div>
  );
}
