import { ArrowRight, Check, Scale, BookOpen } from "lucide-react";

/**
 * ReconciliationFlow — With Innrly: unmatched OTA rows snap to matched, variance
 * resolves to $0.00, 3-way match clears across PMS/Bank/OTA.
 */
export function ReconciliationFlow({ playKey }: { playKey: number }) {
  return (
    <div key={playKey} className="relative">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl" aria-hidden />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        <div className="flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <div className="ml-3 text-xs font-medium text-muted-foreground">
            Reconciliation · DAL-12
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            RECONCILED
          </div>
        </div>

        <div className="relative grid grid-cols-1 gap-3 p-4 md:grid-cols-5">
          <svg
            className="pointer-events-none absolute inset-0 z-10 hidden h-full w-full text-accent/70 md:block"
            viewBox="0 0 760 360"
            preserveAspectRatio="none"
            aria-hidden
          >
            <path
              className="ba-route-dash"
              style={{ animationDelay: "2.55s" }}
              d="M170 92 C260 64 332 86 404 132 C470 174 544 174 642 160"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>

          {/* Variance summary card */}
          <div className="relative col-span-2 rounded-xl border border-accent/40 bg-surface/60 p-3">
            <div className="flex items-center gap-2 border-b border-border/40 pb-2">
              <Scale className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                3-way match
              </span>
            </div>
            <div className="mt-2 space-y-2 text-[11px]">
              <MatchField label="PMS Revenue" value="$8,175.15" delay="1.65s" />
              <MatchField label="Bank Deposit" value="$8,175.15" delay="2.05s" memory />
              <MatchField label="OTA Settle" value="$8,175.15" delay="2.45s" memory />
            </div>
            <div
              className="ba-pop-in mt-3 flex items-center justify-between rounded-lg bg-success/10 p-2 opacity-0"
              style={{ animationDelay: "2.85s" }}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-success">
                Variance
              </span>
              <span className="text-[11px] font-bold text-success">$0.00 · cleared</span>
            </div>
          </div>

          {/* Matched ledger */}
          <div className="ba-landing-glow col-span-3 space-y-3">
            <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                <BookOpen className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Today's matches
                </span>
                <span className="ml-auto text-[9px] font-semibold text-foreground">17 of 17</span>
              </div>
              <div className="mt-2 space-y-1">
                <MatchRow
                  source="Bank · 10/13 deposit"
                  detail="PMS night audit"
                  amount="$5,418.20"
                  status="matched"
                />
                <MatchRow
                  source="Booking.com · 10/14"
                  detail="PMS reservations"
                  amount="$2,847.55"
                  status="matched"
                />
                <MatchRow
                  source="Airbnb · 10/15"
                  detail="commission audit"
                  amount="$1,109.20"
                  status="matched"
                />
                <MatchRow
                  source="CC Batch · 10/14"
                  detail="folio match"
                  amount="$3,612.40"
                  status="matched"
                />
                {/* Previously unmatched row snaps in */}
                <div className="ba-slide-from-left opacity-0" style={{ animationDelay: "3.35s" }}>
                  <MatchRow
                    source="Expedia · 10/12"
                    detail="commission + tax adj"
                    amount="$4,218.40"
                    status="syncing"
                    flipDelay="5.25s"
                    highlight
                  />
                </div>
              </div>
            </div>

            {/* Match flow */}
            <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
              <div className="flex items-center justify-between gap-2">
                <FlowStep label="PMS" sub="Night audit" delay="4.15s" />
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                <FlowStep label="Bank" sub="Deposit" delay="4.55s" />
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                <FlowStep label="OTA" sub="Settlement" delay="4.95s" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MatchField({
  label,
  value,
  delay,
  memory,
}: {
  label: string;
  value: string;
  delay: string;
  memory?: boolean;
}) {
  return (
    <div
      className={`relative overflow-hidden rounded-lg border p-2 ${memory ? "border-accent/40 bg-accent/5" : "border-border/40 bg-background/40"}`}
    >
      {memory && (
        <div
          className="ba-scan absolute inset-y-0 left-0 w-1/3 bg-accent/15 opacity-0"
          style={{ animationDelay: delay }}
        />
      )}
      <div className="flex items-center justify-between">
        <span className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">
          {label}
        </span>
        {memory && (
          <span
            className="ba-pop-in text-[8px] font-bold uppercase tracking-wider text-accent opacity-0"
            style={{ animationDelay: delay }}
          >
            matched
          </span>
        )}
      </div>
      <div
        className="mt-0.5 ba-pop-in text-[11px] font-semibold text-foreground opacity-0"
        style={{ animationDelay: delay }}
      >
        {value}
      </div>
    </div>
  );
}

function MatchRow({
  source,
  detail,
  amount,
  status,
  flipDelay,
  highlight,
}: {
  source: string;
  detail: string;
  amount: string;
  status: "matched" | "syncing";
  flipDelay?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded px-1.5 py-1 ${highlight ? "bg-accent/5" : ""}`}
    >
      <div className="min-w-0">
        <div className="truncate text-[11px] font-semibold text-foreground">{source}</div>
        <div className="text-[9px] text-muted-foreground">{detail}</div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold text-foreground">{amount}</span>
        {status === "syncing" && flipDelay ? (
          <span className="relative inline-flex">
            <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-accent">
              Matching
            </span>
            <span
              className="ba-pop-in absolute inset-0 rounded-full bg-success/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-success opacity-0"
              style={{ animationDelay: flipDelay }}
            >
              ✓ Matched
            </span>
          </span>
        ) : (
          <span className="rounded-full bg-success/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-success">
            ✓
          </span>
        )}
      </div>
    </div>
  );
}

function FlowStep({ label, sub, delay }: { label: string; sub: string; delay: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div
        className="ba-pop-in flex h-6 w-6 items-center justify-center rounded-full bg-success/15 text-success opacity-0"
        style={{ animationDelay: delay }}
      >
        <Check className="h-3 w-3" />
      </div>
      <div className="mt-1 text-[10px] font-bold text-foreground">{label}</div>
      <div className="text-[8px] text-muted-foreground">{sub}</div>
    </div>
  );
}
