import {
  CheckCircle2,
  AlertTriangle,
  FileText,
  Receipt,
  CreditCard,
  Building2,
} from "lucide-react";
import { Wordmark } from "./Wordmark";

/**
 * Hero scene: "Live Night Audit"
 * Rows fly in from the left → pulled into a glowing central orb →
 * split into two output lanes (✅ Auto-cleared / ⚠️ Flagged for human).
 * A live counter at the bottom climbs $0 → $412 and 0 → 11 hrs.
 * Pure SVG + CSS animations. No deps.
 */
export function HeroNightAudit() {
  return (
    <div className="relative mx-auto h-full w-full">
      <style>{`
        @keyframes na-fly-in {
          0% { transform: translateX(-35%); opacity: 0; }
          15% { transform: translateX(0); opacity: 1; }
          55% { transform: translateX(0); opacity: 1; }
          70% { transform: translateX(40%) scale(0.6); opacity: 0; }
          100% { transform: translateX(40%) scale(0.6); opacity: 0; }
        }
        @keyframes na-fly-out-ok {
          0%, 55% { transform: translateX(-40%) scale(0.4); opacity: 0; }
          70% { transform: translateX(0) scale(1); opacity: 1; }
          95% { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(20%); opacity: 0; }
        }
        @keyframes na-fly-out-flag {
          0%, 60% { transform: translateX(-40%) scale(0.4); opacity: 0; }
          75% { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes na-orb-pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.06); filter: brightness(1.3); }
        }
        @keyframes na-ring-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes na-aurora-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes na-bloom-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
          50% { transform: translate(-50%, -50%) scale(1.18); opacity: 0.85; }
        }
        @keyframes na-count-money {
          0% { content: "$0"; }
          25% { content: "$118"; }
          50% { content: "$246"; }
          75% { content: "$340"; }
          100% { content: "$412"; }
        }
        @keyframes na-pulse-ring {
          0% { transform: scale(0.3); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes na-scan {
          0% { transform: translateY(-20px); opacity: 0; }
          10%, 90% { opacity: 0.5; }
          100% { transform: translateY(440px); opacity: 0; }
        }
        @keyframes na-chip-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .na-orb-wrap:hover .na-aurora { animation-duration: 4s !important; }
        .na-orb-wrap:hover .na-bloom { animation-duration: 1.8s !important; }
      `}</style>

      <div
        className="absolute -inset-10 -z-10 bg-cta opacity-20 blur-3xl lg:-inset-16"
        aria-hidden
      />

      <div className="relative h-full overflow-hidden bg-transparent">
        <div className="na-orb-wrap group relative h-full min-h-[640px] lg:min-h-[760px]">
          {/* Outer aurora bloom — soft on-brand glow behind the orb */}
          <div
            className="na-bloom pointer-events-none absolute left-[48%] top-1/2"
            style={{
              width: "clamp(200px, 18vw, 320px)",
              height: "clamp(200px, 18vw, 320px)",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, oklch(0.78 0.14 195 / 0.55) 0%, oklch(0.62 0.22 260 / 0.35) 30%, oklch(0.55 0.20 300 / 0.18) 55%, transparent 75%)",
              filter: "blur(30px)",
              animation: "na-bloom-pulse 4s ease-in-out infinite",
              transition: "filter 0.6s ease",
            }}
            aria-hidden
          />
          {/* Conic aurora ring — slowly rotating multi-hue band */}
          <div
            className="na-aurora pointer-events-none absolute left-[48%] top-1/2"
            style={{
              width: "clamp(150px, 13vw, 220px)",
              height: "clamp(150px, 13vw, 220px)",
              transform: "translate(-50%, -50%)",
              borderRadius: "9999px",
              background:
                "conic-gradient(from 0deg, oklch(0.82 0.16 195), oklch(0.62 0.22 260), oklch(0.65 0.22 310), oklch(0.85 0.16 85), oklch(0.74 0.17 155), oklch(0.82 0.16 195))",
              WebkitMaskImage:
                "radial-gradient(circle, transparent 56%, black 60%, black 78%, transparent 84%)",
              maskImage:
                "radial-gradient(circle, transparent 56%, black 60%, black 78%, transparent 84%)",
              animation: "na-aurora-spin 14s linear infinite",
              filter: "blur(2px) saturate(1.1)",
              opacity: 0.9,
              transition: "filter 0.6s ease",
            }}
            aria-hidden
          />

          {/* Ambient grid */}
          <svg className="absolute inset-0 h-full w-full opacity-[0.08]" aria-hidden>
            <defs>
              <pattern id="na-grid" width="28" height="28" patternUnits="userSpaceOnUse">
                <path d="M 28 0 L 0 0 0 28" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#na-grid)" />
          </svg>

          {/* Beams — lines only in stretched SVG so endpoints map to card positions */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="na-beam" x1="0" x2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.14 195)" stopOpacity="0" />
                <stop offset="50%" stopColor="oklch(0.78 0.14 195)" stopOpacity="0.7" />
                <stop offset="100%" stopColor="oklch(0.78 0.14 195)" stopOpacity="0" />
              </linearGradient>
            </defs>

            {/* Input beams — 7 evenly spaced, matching the left card column */}
            {[11, 22, 33, 44, 55, 66, 77].map((y, i) => (
              <line
                key={`in-${i}`}
                x1="20"
                y1={y}
                x2="48"
                y2="50"
                stroke="url(#na-beam)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            ))}

            {/* Output beams — 2 to Auto-cleared (top right) + 2 to Flagged (bottom right) */}
            {[19, 30, 70, 78].map((y, i) => (
              <line
                key={`out-${i}`}
                x1="48"
                y1="50"
                x2="80"
                y2={y}
                stroke="url(#na-beam)"
                strokeWidth="1.5"
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {/* Particles traveling the beams (HTML dots stay round) */}
          <BeamParticles />

          {/* Pulse rings — HTML divs so they stay true circles regardless of container aspect */}
          {[0, 1.2, 2.4].map((d, i) => (
            <div
              key={`pulse-${i}`}
              className="pointer-events-none absolute left-[48%] top-1/2 rounded-full border"
              style={{
                width: "clamp(120px, 11vw, 180px)",
                height: "clamp(120px, 11vw, 180px)",
                marginLeft: "calc(-1 * clamp(120px, 11vw, 180px) / 2)",
                marginTop: "calc(-1 * clamp(120px, 11vw, 180px) / 2)",
                borderColor: "oklch(0.78 0.14 195 / 0.6)",
                animation: `na-pulse-ring 3.6s ease-out ${d}s infinite`,
              }}
              aria-hidden
            />
          ))}

          {/* Dark calm center — true circle (HTML, not stretched SVG) so Innrly / Reconciling stays crisp */}
          <div
            className="pointer-events-none absolute left-[48%] top-1/2 rounded-full"
            style={{
              width: "clamp(130px, 11.5vw, 190px)",
              height: "clamp(130px, 11.5vw, 190px)",
              transform: "translate(-50%, -50%)",
              background: "oklch(0.16 0.04 250)",
              boxShadow:
                "0 0 0 1px oklch(0.82 0.16 195 / 0.5), inset 0 0 0 6px oklch(0.18 0.04 250), inset 0 0 0 7px oklch(0.62 0.22 260 / 0.35)",
            }}
            aria-hidden
          />

          {/* Aurora scanline sweep */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-12"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, oklch(0.78 0.14 195 / 0.18) 50%, transparent 100%)",
              animation: "na-scan 5s linear infinite",
            }}
          />

          {/* Center label */}
          <div className="pointer-events-none absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-foreground">
            <Wordmark size="sm" className="mx-auto" />
            <div className="mt-1 text-[10px] text-muted-foreground lg:text-sm">Automating</div>
          </div>

          {/* LEFT — Incoming rows (stacked top→bottom across full height) */}
          <div className="absolute bottom-[22%] left-4 top-[8%] flex w-[clamp(11rem,18vw,18rem)] flex-col justify-between lg:left-8">
            {inputs.map((r, i) => (
              <div
                key={i}
                className="flex items-center gap-2 rounded-lg border border-border/60 bg-surface/90 px-2.5 py-1.5 backdrop-blur lg:gap-3 lg:rounded-xl lg:px-4 lg:py-3"
                style={{ animation: `na-fly-in 6s ${i * 0.85}s ease-out infinite both` }}
              >
                <r.icon className="h-3.5 w-3.5 shrink-0 text-accent lg:h-5 lg:w-5" />
                <div className="min-w-0 leading-tight">
                  <div className="truncate text-[10px] font-semibold text-foreground lg:text-base">
                    {r.label}
                  </div>
                  <div className="truncate text-[9px] text-muted-foreground lg:text-sm">
                    {r.sub}
                  </div>
                </div>
                <div className="ml-auto text-[10px] font-bold text-foreground lg:text-base">
                  {r.amt}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT TOP — Auto cleared */}
          <div className="absolute right-4 top-[14%] w-[clamp(11rem,18vw,18rem)] lg:right-8">
            <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-success lg:mb-4 lg:text-base">
              <CheckCircle2 className="h-3 w-3 lg:h-5 lg:w-5" /> Auto-cleared
            </div>
            <div className="space-y-2 lg:space-y-4">
              {cleared.map((r, i) => (
                <div
                  key={i}
                  className="flex items-center gap-2 rounded-lg border border-success/30 bg-success/5 px-2.5 py-2 lg:gap-3 lg:rounded-xl lg:px-4 lg:py-4"
                  style={{ animation: `na-fly-out-ok 6s ${i * 1.5 + 0.4}s ease-out infinite both` }}
                >
                  <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-success lg:h-5 lg:w-5" />
                  <div className="min-w-0 leading-tight">
                    <div className="truncate text-[10px] font-semibold text-foreground lg:text-base">
                      {r.label}
                    </div>
                    <div className="truncate text-[9px] text-success lg:text-sm">Cleared</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT BOTTOM — Flagged */}
          <div className="absolute bottom-[17%] right-4 w-[clamp(11rem,18vw,18rem)] lg:right-8">
            <div className="mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-destructive lg:mb-4 lg:text-base">
              <AlertTriangle className="h-3 w-3 lg:h-5 lg:w-5" /> Flagged for human
            </div>
            <div className="space-y-2 lg:space-y-4">
              {flagged.map((r, i) => (
                <div
                  key={i}
                  className="rounded-lg border border-destructive/40 bg-destructive/10 px-2.5 py-2 lg:rounded-xl lg:px-4 lg:py-4"
                  style={{
                    animation: `na-fly-out-flag 6s ${i * 1.5 + 0.8}s ease-out infinite both`,
                  }}
                >
                  <div className="flex items-center gap-2 lg:gap-3">
                    <AlertTriangle className="h-3.5 w-3.5 shrink-0 text-destructive lg:h-5 lg:w-5" />
                    <div className="min-w-0 leading-tight">
                      <div className="truncate text-[10px] font-semibold text-foreground lg:text-base">
                        {r.label}
                      </div>
                      <div className="truncate text-[9px] text-muted-foreground lg:text-sm">
                        {r.sub}
                      </div>
                    </div>
                    <div className="ml-auto text-[10px] font-bold text-accent lg:text-base">
                      {r.amt}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* BOTTOM — Live counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-accent/30 bg-surface/95 px-4 py-2 shadow-lg backdrop-blur lg:bottom-10 lg:px-8 lg:py-4">
            <div className="flex items-center gap-4 text-[11px] font-medium lg:gap-8 lg:text-xl">
              <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">Loss prevented</span>
                <CountUp end={412} prefix="$" />
              </div>
              <span className="text-border">|</span>
              <div className="flex items-center gap-1.5">
                <span className="text-muted-foreground">Hours saved</span>
                <CountUp end={11} suffix=" hrs" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const inputs = [
  { icon: Building2, label: "Opera PMS feed", sub: "Folio sync", amt: "148" },
  { icon: Receipt, label: "OTA commission", sub: "Booking.com", amt: "74" },
  { icon: CreditCard, label: "Vendor invoice", sub: "Sysco #1284", amt: "1,284" },
  { icon: FileText, label: "Folio #4421", sub: "Tax variance", amt: "92" },
  { icon: Building2, label: "Marriott PMS", sub: "Night close", amt: "326" },
  { icon: Receipt, label: "Expedia recon", sub: "Comm sweep", amt: "212" },
  { icon: CreditCard, label: "Amex feed", sub: "Card recon", amt: "894" },
];
const cleared = [{ label: "PMS → GL posted" }, { label: "Vendor inv. matched" }];
const flagged = [
  { label: "Tax mismatch · #4421", sub: "Folio variance", amt: "$92" },
  { label: "Duplicate OTA fee", sub: "Booking.com", amt: "$74" },
];

function CountUp({
  end,
  prefix = "",
  suffix = "",
}: {
  end: number;
  prefix?: string;
  suffix?: string;
}) {
  // Pure-CSS step counter using keyframe content swaps — keep it simple & deterministic.
  const steps = 5;
  const id = `cu-${prefix}${end}${suffix}`.replace(/\W/g, "");
  const values = Array.from({ length: steps + 1 }, (_, i) => Math.round((end * i) / steps));
  return (
    <>
      <style>{`
        @keyframes ${id} {
          ${values
            .map(
              (v, i) =>
                `${((i / steps) * 100).toFixed(2)}% { content: "${prefix}${v.toLocaleString()}${suffix}"; }`,
            )
            .join("\n")}
        }
        .${id}::after {
          content: "${prefix}0${suffix}";
          animation: ${id} 6s steps(1) infinite;
        }
      `}</style>
      <span className={`${id} font-bold text-accent`} />
    </>
  );
}

function BeamParticles() {
  const inputs = [11, 22, 33, 44, 55, 66, 77];
  const outputs = [19, 30, 70, 78];
  const beams = [
    ...inputs.map((y, i) => ({
      key: `i${i}`,
      x1: 20,
      y1: y,
      x2: 48,
      y2: 50,
      delay: i * 0.75,
      color: "oklch(0.82 0.16 195)",
    })),
    ...outputs.map((y, i) => ({
      key: `o${i}`,
      x1: 48,
      y1: 50,
      x2: 80,
      y2: y,
      delay: i * 1 + 0.5,
      color: i < 2 ? "oklch(0.78 0.18 150)" : "oklch(0.72 0.20 30)",
    })),
  ];
  return (
    <>
      <style>
        {beams
          .map(
            (b) => `
        @keyframes na-particle-${b.key} {
          0% { left: ${b.x1}%; top: ${b.y1}%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: ${b.x2}%; top: ${b.y2}%; opacity: 0; }
        }
      `,
          )
          .join("\n")}
      </style>
      {beams.map((b) => (
        <div
          key={b.key}
          className="pointer-events-none absolute rounded-full"
          style={{
            width: 8,
            height: 8,
            marginLeft: -4,
            marginTop: -4,
            background: b.color,
            boxShadow: `0 0 12px ${b.color}, 0 0 4px ${b.color}`,
            animation: `na-particle-${b.key} 4s ${b.delay}s ease-in-out infinite`,
          }}
          aria-hidden
        />
      ))}
    </>
  );
}
