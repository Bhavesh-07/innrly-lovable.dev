import { FileSpreadsheet, AlertCircle, StickyNote, Building2, CreditCard } from "lucide-react";

/**
 * ReconciliationChaos — Without Innrly: unmatched OTA settlements, PMS variance,
 * sticky-note guesswork. Staggered ba-chaos-in entrance.
 */
export function ReconciliationChaos() {
  return (
    <div className="relative space-y-2">
      {/* OTA settlements — unmatched */}
      <div
        className="ba-chaos-in rounded-lg border border-destructive/60 bg-destructive/10 p-2 opacity-0 shadow-elevated"
        style={{
          ["--x0" as never]: "-38px",
          ["--y0" as never]: "16px",
          ["--r0" as never]: "-8deg",
          ["--rot" as never]: "-1.5deg",
        }}
      >
        <div className="flex items-center gap-1.5 border-b border-border/40 pb-1">
          <FileSpreadsheet className="h-3 w-3 text-success" />
          <span className="text-[10px] font-semibold text-foreground">OTA_Statements_Oct.xlsx</span>
          <span className="ml-auto text-[9px] text-muted-foreground">17 rows · 6 unmatched</span>
        </div>
        <div className="mt-1 space-y-0.5 text-[9px]">
          <div className="grid grid-cols-[1fr_70px_70px] gap-1 text-muted-foreground">
            <span>Source</span>
            <span>Statement</span>
            <span>PMS</span>
          </div>
          <div className="grid grid-cols-[1fr_70px_70px] gap-1 text-foreground">
            <span className="truncate">Expedia · 10/12</span>
            <span>$4,218.40</span>
            <span className="rounded bg-destructive/15 px-1 text-center text-destructive">
              $4,061.10
            </span>
          </div>
          <div className="grid grid-cols-[1fr_70px_70px] gap-1 text-foreground">
            <span className="truncate">Booking.com · 10/14</span>
            <span>$2,847.55</span>
            <span className="rounded bg-destructive/15 px-1 text-center text-destructive">???</span>
          </div>
          <div className="grid grid-cols-[1fr_70px_70px] gap-1 text-foreground">
            <span className="truncate">Airbnb · 10/15</span>
            <span>$1,109.20</span>
            <span className="rounded bg-destructive/15 px-1 text-center text-destructive">
              $1,074.20
            </span>
          </div>
        </div>
      </div>

      {/* Mid row: PMS variance card + Amex batch + sticky */}
      <div className="flex items-start gap-2">
        <div
          className="ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-destructive/10 p-2 opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "-22px",
            ["--y0" as never]: "-16px",
            ["--r0" as never]: "6deg",
            ["--rot" as never]: "1.5deg",
            ["--delay" as never]: "0.22s",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Building2 className="h-3 w-3 text-primary" />
            <span className="truncate text-[10px] font-semibold text-foreground">
              PMS Night Audit · DAL-12
            </span>
          </div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-[9px] text-muted-foreground">Variance</span>
            <span className="rounded-full border border-destructive/50 px-1.5 text-[10px] font-bold text-destructive">
              −$1,247.83
            </span>
          </div>
        </div>

        <div
          className="ba-chaos-in flex w-32 shrink-0 items-center gap-1.5 rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "26px",
            ["--y0" as never]: "20px",
            ["--r0" as never]: "-10deg",
            ["--rot" as never]: "-2deg",
            ["--delay" as never]: "0.4s",
          }}
        >
          <CreditCard className="h-3.5 w-3.5 shrink-0 text-primary" />
          <div className="min-w-0">
            <div className="truncate text-[10px] font-semibold text-foreground">
              CC Batch · 10/14
            </div>
            <div className="text-[9px] text-muted-foreground">off by $43.10</div>
          </div>
        </div>

        <div
          className="ba-chaos-in w-24 shrink-0 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "32px",
            ["--y0" as never]: "-12px",
            ["--r0" as never]: "14deg",
            ["--rot" as never]: "6deg",
            ["--delay" as never]: "0.58s",
          }}
        >
          <div className="flex items-center gap-1">
            <StickyNote className="h-3 w-3" />
            <span>Where?</span>
          </div>
          <div className="mt-0.5 text-[9px] font-normal">Exp 10/12 deposit</div>
        </div>
      </div>

      {/* Error */}
      <div
        className="ba-slide-in mt-2 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0"
        style={{ animationDelay: "0.86s" }}
      >
        <AlertCircle className="h-3 w-3 shrink-0 text-destructive" />
        <span className="text-[10px] font-semibold text-destructive">
          11 days unreconciled · close at risk
        </span>
      </div>
    </div>
  );
}
