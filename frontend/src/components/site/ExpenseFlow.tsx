import { Receipt, ArrowRight, Check, CreditCard, BookOpen } from "lucide-react";

/**
 * ExpenseFlow — visible charge movement: card charge flies into entry, fields
 * auto-fill, then the coded row travels into the ledger and posts to QB.
 */
export function ExpenseFlow({ playKey }: { playKey: number }) {
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
            Expense Entries · DAL-12
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            QB SYNCED
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

          <div
            className="ba-fly-expense pointer-events-none absolute left-8 top-20 z-20 hidden items-center gap-2 rounded-xl border border-accent/60 bg-background/95 px-3 py-2 shadow-elevated md:flex"
            style={{
              ["--sx" as never]: "-260px",
              ["--sy" as never]: "-34px",
              animationDelay: "0.12s",
            }}
          >
            <CreditCard className="h-4 w-4 text-accent" />
            <div>
              <div className="text-[10px] font-bold text-foreground">Home Depot</div>
              <div className="text-[9px] text-muted-foreground">$418.92 · Amex</div>
            </div>
          </div>

          {/* Quick entry */}
          <div className="relative col-span-2 rounded-xl border border-accent/40 bg-surface/60 p-3">
            <div className="flex items-center gap-2 border-b border-border/40 pb-2">
              <Receipt className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Quick entry
              </span>
            </div>
            <div className="mt-2 space-y-2 text-[11px]">
              <AnimField label="Vendor" value="Home Depot" delay="1.65s" memory />
              <AnimField label="Amount" value="$418.92" delay="2.05s" />
              <AnimField label="Date" value="Oct 18" delay="2.25s" />
              <AnimField label="GL Code" value="5410 · R&M" delay="2.55s" memory />
              <AnimField label="Card / Paid by" value="Amex •••• 2014" delay="2.85s" />
            </div>
            <div
              className="ba-pop-in mt-3 flex items-center justify-between rounded-lg bg-accent/10 p-2 opacity-0"
              style={{ animationDelay: "2.65s" }}
            >
              <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                Vendor memory
              </span>
              <span className="text-[10px] font-semibold text-foreground">2 fields prefilled</span>
            </div>
          </div>

          {/* Ledger */}
          <div className="ba-landing-glow col-span-3 space-y-3">
            <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                <BookOpen className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Today's expenses
                </span>
                <span className="ml-auto text-[9px] font-semibold text-foreground">$2,184.27</span>
              </div>
              <div className="mt-2 space-y-1">
                <ExpRow
                  vendor="Reliant Energy"
                  gl="6210 · Utilities"
                  amount="$842.10"
                  status="paid"
                />
                <ExpRow vendor="Comcast" gl="6230 · Internet" amount="$219.99" status="paid" />
                <ExpRow vendor="Coffee · F&B run" gl="5120 · F&B" amount="$87.40" status="paid" />
                <ExpRow
                  vendor="Amazon · supplies"
                  gl="5440 · Supplies"
                  amount="$615.86"
                  status="paid"
                />
                {/* New row slides in */}
                <div className="ba-slide-from-left opacity-0" style={{ animationDelay: "3.35s" }}>
                  <ExpRow
                    vendor="Home Depot"
                    gl="5410 · R&M"
                    amount="$418.92"
                    status="syncing"
                    flipDelay="5.25s"
                    highlight
                  />
                </div>
              </div>
            </div>

            {/* Sync flow */}
            <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
              <div className="flex items-center justify-between gap-2">
                <FlowStep label="Innrly" sub="Entered" delay="4.15s" />
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                <FlowStep label="GL coded" sub="Vendor memory" delay="4.55s" />
                <ArrowRight className="h-3 w-3 text-muted-foreground" />
                <FlowStep label="QuickBooks" sub="Expense posted" delay="4.95s" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnimField({
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
            auto
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

function ExpRow({
  vendor,
  gl,
  amount,
  status,
  flipDelay,
  highlight,
}: {
  vendor: string;
  gl: string;
  amount: string;
  status: "paid" | "syncing";
  flipDelay?: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded px-1.5 py-1 ${highlight ? "bg-accent/5" : ""}`}
    >
      <div className="min-w-0">
        <div className="truncate text-[11px] font-semibold text-foreground">{vendor}</div>
        <div className="text-[9px] text-muted-foreground">{gl}</div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold text-foreground">{amount}</span>
        {status === "syncing" && flipDelay ? (
          <span className="relative inline-flex">
            <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-accent">
              Syncing
            </span>
            <span
              className="ba-pop-in absolute inset-0 rounded-full bg-success/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-success opacity-0"
              style={{ animationDelay: flipDelay }}
            >
              QB
            </span>
          </span>
        ) : (
          <span className="rounded-full bg-success/15 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-success">
            QB
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
