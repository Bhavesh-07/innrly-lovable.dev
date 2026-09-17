/**
 * "Works with" panel — the three core systems a hotel will never change
 * (PMS, Accounting, TimeClock), grouped by brand where relevant, plus a
 * secondary row of additive tools Innrly also connects to.
 *
 * This is a key sales surface: it proves Innrly slots into the operator's
 * existing stack without forcing a system swap.
 */
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";

type Brand = { brand?: string; items: string[] };

const PMS: Brand[] = [
  { brand: "Hilton", items: ["OnQ", "PEP"] },
  { brand: "Marriott", items: ["FOSSE", "StayNTouch"] },
  { brand: "IHG", items: ["HotelKey"] },
  { brand: "Choice", items: ["Choice Advantage"] },
  { brand: "Independent", items: ["Opera", "Visual Matrix", "Maestro"] },
];

const ACCOUNTING: string[] = ["M3", "QuickBooks", "Sage Intacct"];

const TIMECLOCK: Array<{ name: string; native?: boolean }> = [
  { name: "Innrly TimeClock", native: true },
  { name: "ADP" },
  { name: "Paychex" },
];

const ADDITIVE: string[] = [
  "Plaid",
  "Repay",
  "Medallia",
  "Revinate",
  "Hotel Effectiveness",
  "Kipsu",
];

type PanelProps = {
  label: string;
  accent: string; // oklch color
  children: React.ReactNode;
};

function Panel({ label, accent, children }: PanelProps) {
  return (
    <div
      style={{ ["--panel-accent" as keyof React.CSSProperties]: accent } as React.CSSProperties}
      className="relative overflow-hidden rounded-2xl border-2 border-[color:var(--panel-accent)]/65 bg-card/70 p-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--panel-accent)_22%,transparent),0_18px_55px_-28px_var(--panel-accent)] transition-colors hover:border-[color:var(--panel-accent)]/95"
    >
      <div
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-60 blur-2xl"
        style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }}
        aria-hidden
      />
      <div className="relative flex items-center gap-2">
        <span
          className="h-2 w-2 rounded-full"
          style={{ background: accent, boxShadow: `0 0 10px ${accent}` }}
          aria-hidden
        />
        <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--panel-accent)]">
          {label}
        </span>
      </div>
      <div className="relative mt-4">{children}</div>
    </div>
  );
}

export function LogosStrip({ compact = false }: { compact?: boolean } = {}) {
  const pad = compact ? "py-6" : "py-12";

  return (
    <section
      aria-labelledby="logos-heading"
      className={compact ? "bg-transparent" : "border-b border-border/60 bg-background"}
    >
      <div className={`mx-auto max-w-7xl px-4 ${pad} sm:px-6 lg:px-8`}>
        {/* Headline — the actual sale */}
        <div className="text-center">
          <h2
            id="logos-heading"
            className={`${compact ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"} font-bold tracking-tight text-foreground`}
          >
            Keep your PMS. Keep your accounting. Keep your time clock.
          </h2>
          <p className={`${compact ? "mt-2 text-xs" : "mt-3 text-sm"} text-muted-foreground`}>
            Innrly works around the three systems your hotel will never change — across every major
            brand.
          </p>
        </div>

        {/* Three core panels */}
        <div className={`${compact ? "mt-5" : "mt-8"} grid gap-4 md:grid-cols-3`}>
          {/* PMS */}
          <Panel label="PMS" accent="oklch(0.72 0.16 235)">
            <ul className="space-y-2.5">
              {PMS.map((b) => (
                <li
                  key={b.brand ?? b.items.join("-")}
                  className="flex flex-wrap items-baseline gap-x-2"
                >
                  {b.brand && (
                    <span className="min-w-[78px] text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80">
                      {b.brand}
                    </span>
                  )}
                  <span className="text-sm font-semibold text-foreground/90">
                    {b.items.join(" · ")}
                  </span>
                </li>
              ))}
            </ul>
          </Panel>

          {/* Accounting */}
          <Panel label="Accounting" accent="oklch(0.78 0.18 155)">
            <ul className="space-y-2.5">
              {ACCOUNTING.map((a) => (
                <li key={a} className="text-sm font-semibold text-foreground/90">
                  {a}
                </li>
              ))}
            </ul>
          </Panel>

          {/* TimeClock */}
          <Panel label="TimeClock" accent="oklch(0.78 0.18 35)">
            <ul className="space-y-2.5">
              {TIMECLOCK.map((t) => (
                <li
                  key={t.name}
                  className="flex items-center gap-2 text-sm font-semibold text-foreground/90"
                >
                  {t.name}
                  {t.native && (
                    <span className="rounded-full border border-[color:var(--panel-accent)]/50 bg-[color:var(--panel-accent)]/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[color:var(--panel-accent)]">
                      Innrly's own
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </Panel>
        </div>

        {/* Trust pill */}
        <div className="mt-5 flex justify-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
            <Check className="h-3 w-3" aria-hidden />
            No system change required
          </span>
        </div>

        {/* Additive row — full "Plus" callout */}
        <div
          className={`${compact ? "mt-6" : "mt-10"} relative overflow-hidden rounded-2xl border-2 border-accent/40 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 px-5 py-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent,oklch(0.78_0.16_200))_18%,transparent),0_18px_50px_-30px_color-mix(in_oklab,var(--accent,oklch(0.78_0.16_200))_60%,transparent)]`}
        >
          <div
            className="pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl"
            aria-hidden
          />
          <div className="relative flex flex-wrap items-center justify-center gap-x-2 gap-y-3">
            <span className="mr-2 inline-flex items-center gap-1.5 rounded-full border border-accent/50 bg-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              Plus
            </span>
            {ADDITIVE.map((t, i) => (
              <span key={t} className="flex items-center gap-2">
                <span className="rounded-lg border border-border/60 bg-background/60 px-3 py-1.5 text-sm font-semibold text-foreground/90 transition-colors hover:border-accent/60 hover:text-foreground">
                  {t}
                </span>
                {i < ADDITIVE.length - 1 && (
                  <span className="text-accent/40" aria-hidden>
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>

        {!compact && (
          <p className="mt-6 text-center text-xs text-muted-foreground">
            50+ integrations across PMS, accounting, payroll, banking, guest survey, and A/P.{" "}
            <Link to="/integrations" className="font-semibold text-accent hover:underline">
              See all integrations →
            </Link>
          </p>
        )}
      </div>
    </section>
  );
}
