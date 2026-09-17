import { useState } from "react";
import { ArrowRight, RotateCw } from "lucide-react";

interface Props {
  chaos: React.ReactNode;
  after: (playKey: number) => React.ReactNode;
  chaosLabel?: string;
  afterLabel?: string;
  motion?: "documents" | "expenses" | "guardrails" | "pulse";
}

export function BeforeAfterFlow({
  chaos,
  after,
  chaosLabel = "Without Innrly",
  afterLabel = "With Innrly",
  motion,
}: Props) {
  const [playKey, setPlayKey] = useState(0);

  return (
    <div
      key={playKey}
      className="relative grid items-stretch gap-4 md:grid-cols-[minmax(220px,0.68fr)_44px_minmax(0,1.45fr)]"
    >
      {motion && <CrossPanelMotion kind={motion} />}

      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-destructive/80">
            {chaosLabel}
          </span>
          <span className="text-[10px] text-muted-foreground">Email · Drives · GM's laptop</span>
        </div>
        <div className="rounded-2xl border border-destructive/30 bg-surface/40 p-4">{chaos}</div>
      </div>

      <div className="flex items-center justify-center py-1 md:pt-8">
        <div className="hidden h-full min-h-72 w-full items-center justify-center md:flex">
          <div className="relative h-full w-px bg-border/50">
            <div className="ba-beam-y absolute left-1/2 top-0 h-16 w-1 -translate-x-1/2 rounded-full bg-gradient-to-b from-transparent via-accent to-transparent" />
            <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/40 bg-background text-accent shadow-elevated">
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
        <div className="relative h-1 w-28 overflow-hidden rounded-full bg-border/40 md:hidden">
          <div className="absolute inset-y-0 left-0 w-1/2 rounded-full bg-gradient-to-r from-transparent via-accent to-transparent ba-beam" />
        </div>
      </div>

      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-bold uppercase tracking-widest text-accent">
            {afterLabel}
          </span>
          <button
            type="button"
            onClick={() => setPlayKey((k) => k + 1)}
            className="inline-flex items-center gap-1 rounded-full border border-border/60 bg-surface/60 px-2.5 py-1 text-[10px] font-semibold text-muted-foreground transition hover:border-accent/60 hover:text-accent"
            aria-label="Replay animation"
          >
            <RotateCw className="h-3 w-3" /> Replay
          </button>
        </div>
        {after(playKey)}
      </div>
    </div>
  );
}

function CrossPanelMotion({ kind }: { kind: "documents" | "expenses" | "guardrails" | "pulse" }) {
  if (kind === "guardrails") {
    return (
      <div
        className="pointer-events-none absolute inset-0 z-30 hidden overflow-visible md:block"
        aria-hidden
      >
        <div className="ba-cross-guard absolute left-[8%] top-[26%] rounded-xl border border-destructive/70 bg-background/95 px-4 py-3 shadow-elevated">
          <div className="text-xs font-bold text-foreground">OTA variance · ($3,140)</div>
          <div className="text-[10px] text-muted-foreground">Expedia settle short</div>
          <div className="ba-cross-stamp absolute -right-2 -top-2 rounded-full border border-success/60 bg-background px-2 py-0.5 text-[9px] font-bold text-success">
            ✓ Approved
          </div>
        </div>
        <div
          className="ba-cross-guard absolute left-[10%] top-[52%] rounded-xl border border-destructive/70 bg-background/95 px-4 py-3 shadow-elevated"
          style={{ animationDelay: "1.4s" }}
        >
          <div className="text-xs font-bold text-foreground">Comp override · $812</div>
          <div className="text-[10px] text-muted-foreground">unapproved discount</div>
          <div
            className="ba-cross-stamp absolute -right-2 -top-2 rounded-full border border-destructive/60 bg-background px-2 py-0.5 text-[9px] font-bold text-destructive"
            style={{ animationDelay: "1.4s" }}
          >
            ✗ Blocked
          </div>
        </div>
        <div className="ba-cross-trace absolute left-[14%] top-[42%] h-1 w-[44%] rounded-full bg-gradient-to-r from-destructive/0 via-accent to-accent/0" />
      </div>
    );
  }

  if (kind === "pulse") {
    return (
      <div
        className="pointer-events-none absolute inset-0 z-30 hidden overflow-visible md:block"
        aria-hidden
      >
        <div className="ba-cross-tick absolute left-[10%] top-[28%] rounded-lg border border-accent/60 bg-background/95 px-3 py-2 shadow-elevated">
          <div className="text-xs font-bold text-foreground">Night audit · DAL12</div>
          <div className="text-[10px] text-muted-foreground">12:04 AM · OK</div>
        </div>
        <div
          className="ba-cross-tick absolute left-[10%] top-[44%] rounded-lg border border-accent/60 bg-background/95 px-3 py-2 shadow-elevated"
          style={{ animationDelay: "0.9s" }}
        >
          <div className="text-xs font-bold text-foreground">Rate push · all PMS</div>
          <div className="text-[10px] text-muted-foreground">2:00 AM · synced</div>
        </div>
        <div
          className="ba-cross-tick absolute left-[10%] top-[60%] rounded-lg border border-accent/60 bg-background/95 px-3 py-2 shadow-elevated"
          style={{ animationDelay: "1.8s" }}
        >
          <div className="text-xs font-bold text-foreground">GL post · QuickBooks</div>
          <div className="text-[10px] text-muted-foreground">3:30 AM · 142 entries</div>
        </div>
        <div className="ba-cross-trace absolute left-[14%] top-[46%] h-1 w-[44%] rounded-full bg-gradient-to-r from-accent/0 via-accent to-accent/0" />
      </div>
    );
  }

  if (kind === "expenses") {
    return (
      <div
        className="pointer-events-none absolute inset-0 z-30 hidden overflow-visible md:block"
        aria-hidden
      >
        <div className="ba-cross-charge absolute left-[8%] top-[29%] rounded-xl border border-accent/70 bg-background/95 px-4 py-3 shadow-elevated">
          <div className="text-xs font-bold text-foreground">Home Depot</div>
          <div className="text-[10px] text-muted-foreground">$418.92 · uncoded Amex charge</div>
        </div>
        <div
          className="ba-cross-charge absolute left-[10%] top-[48%] rounded-xl border border-destructive/60 bg-background/95 px-4 py-3 shadow-elevated"
          style={{ animationDelay: "1.35s" }}
        >
          <div className="text-xs font-bold text-foreground">Auto-pay receipt</div>
          <div className="text-[10px] text-muted-foreground">waiting for GL code</div>
        </div>
        <div className="ba-cross-trace absolute left-[14%] top-[40%] h-1 w-[44%] rounded-full bg-gradient-to-r from-destructive/0 via-accent to-accent/0" />
      </div>
    );
  }

  return (
    <div
      className="pointer-events-none absolute inset-0 z-30 hidden overflow-visible md:block"
      aria-hidden
    >
      <div className="ba-cross-doc absolute left-[9%] top-[23%] rounded-lg border border-destructive/60 bg-background/95 px-3 py-2 shadow-elevated">
        <div className="text-xs font-bold text-foreground">NA_FINAL_v3.pdf</div>
        <div className="text-[10px] text-muted-foreground">from email thread</div>
      </div>
      <div
        className="ba-cross-doc absolute left-[12%] top-[39%] rounded-lg border border-destructive/60 bg-background/95 px-3 py-2 shadow-elevated"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="text-xs font-bold text-foreground">Trial Balance.pdf</div>
        <div className="text-[10px] text-muted-foreground">from shared drive</div>
      </div>
      <div
        className="ba-cross-doc absolute left-[7%] top-[55%] rounded-lg border border-destructive/60 bg-background/95 px-3 py-2 shadow-elevated"
        style={{ animationDelay: "1.6s" }}
      >
        <div className="text-xs font-bold text-foreground">Daily Flash.xlsx</div>
        <div className="text-[10px] text-muted-foreground">from GM laptop</div>
      </div>
      <div className="ba-cross-trace absolute left-[14%] top-[43%] h-1 w-[45%] rounded-full bg-gradient-to-r from-destructive/0 via-accent to-accent/0" />
    </div>
  );
}
