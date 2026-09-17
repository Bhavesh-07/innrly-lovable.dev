/**
 * ProofBand — high-density proof row that sits directly under the hero.
 * Three hard metrics + a logo strip in one editorial band, designed to
 * read as "this is real" before the reader ever scrolls.
 *
 * Distinct from Otelier's airy hero → trust pill pattern. We front-load
 * numbers and brand coverage in a single tight rhythm.
 */
import { LogosStrip } from "./LogosStrip";

const METRICS = [
  { value: "20–40", unit: "hrs", label: "saved per property each month" },
  { value: "200+", unit: "hotels", label: "running on Innrly today" },
  { value: "Recovered", unit: "revenue", label: "from OTA, vendor, labor & audit exceptions — varies by portfolio" },
];

export function ProofBand() {
  return (
    <section
      data-glow="dark"
      className="relative border-y border-border/60 bg-surface/40"
      aria-label="Proof of impact"
    >
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
        <div className="grid items-center gap-8 lg:grid-cols-3">
          {METRICS.map((m) => (
            <div
              key={m.label}
              className="flex items-baseline gap-3 border-l border-border/60 pl-5 first:border-l-0 first:pl-0 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
            >
              <div className="text-3xl font-bold leading-none text-gradient sm:text-4xl">
                {m.value}
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent">
                  {m.unit}
                </span>
                <span className="text-sm text-muted-foreground">{m.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t border-border/40">
        <LogosStrip compact />
      </div>
    </section>
  );
}
