import { Receipt, Mail, FileSpreadsheet, AlertCircle, HelpCircle } from "lucide-react";

/**
 * ExpenseChaos — compact chaos: spreadsheet with ??? GL cells, Amex statement, sticky.
 */
export function ExpenseChaos() {
  return (
    <div className="relative space-y-2">
      {/* Spreadsheet — full width */}
      <div
        className="ba-chaos-in rounded-lg border border-destructive/60 bg-destructive/10 p-2 opacity-0 shadow-elevated"
        style={{
          ["--x0" as never]: "-42px",
          ["--y0" as never]: "18px",
          ["--r0" as never]: "-9deg",
          ["--rot" as never]: "-1.5deg",
        }}
      >
        <div className="flex items-center gap-1.5 border-b border-border/40 pb-1">
          <FileSpreadsheet className="h-3 w-3 text-success" />
          <span className="text-[10px] font-semibold text-foreground">Expenses_Oct_v4.xlsx</span>
          <span className="ml-auto text-[9px] text-muted-foreground">14 rows · 8 uncoded</span>
        </div>
        <div className="mt-1 space-y-0.5 text-[9px]">
          <div className="grid grid-cols-[1fr_60px_60px] gap-1 text-muted-foreground">
            <span>Vendor</span>
            <span>Amount</span>
            <span>GL</span>
          </div>
          <div className="grid grid-cols-[1fr_60px_60px] gap-1 text-foreground">
            <span className="truncate">Home Depot</span>
            <span>$418.92</span>
            <span className="rounded bg-destructive/15 px-1 text-center text-destructive">???</span>
          </div>
          <div className="grid grid-cols-[1fr_60px_60px] gap-1 text-foreground">
            <span className="truncate">Reliant Energy</span>
            <span>$842.10</span>
            <span className="rounded bg-destructive/15 px-1 text-center text-destructive">???</span>
          </div>
          <div className="grid grid-cols-[1fr_60px_60px] gap-1 text-foreground">
            <span className="truncate">Coffee · F&B</span>
            <span>$87.40</span>
            <span className="rounded bg-destructive/15 px-1 text-center text-destructive">???</span>
          </div>
        </div>
      </div>

      {/* Mid row: Amex + email + sticky */}
      <div className="flex items-start gap-2">
        <div
          className="ba-chaos-in flex w-36 shrink-0 items-center gap-1.5 rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "-26px",
            ["--y0" as never]: "-18px",
            ["--r0" as never]: "8deg",
            ["--rot" as never]: "2deg",
            ["--delay" as never]: "0.22s",
          }}
        >
          <Receipt className="h-3.5 w-3.5 shrink-0 text-primary" />
          <div className="min-w-0">
            <div className="truncate text-[10px] font-semibold text-foreground">Amex •••• 2014</div>
            <div className="text-[9px] text-muted-foreground">14 charges · not in QB</div>
          </div>
        </div>

        <div
          className="ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-destructive/10 p-2 opacity-0"
          style={{
            ["--x0" as never]: "12px",
            ["--y0" as never]: "22px",
            ["--r0" as never]: "5deg",
            ["--rot" as never]: "-1deg",
            ["--delay" as never]: "0.4s",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Mail className="h-3 w-3 text-muted-foreground" />
            <span className="truncate text-[10px] font-semibold text-foreground">
              Auto-pay receipt
            </span>
          </div>
          <div className="mt-1 line-clamp-1 text-[9px] text-muted-foreground">
            "Forwarded for your records…"
          </div>
        </div>

        <div
          className="ba-chaos-in w-20 shrink-0 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "30px",
            ["--y0" as never]: "-12px",
            ["--r0" as never]: "14deg",
            ["--rot" as never]: "6deg",
            ["--delay" as never]: "0.58s",
          }}
        >
          <div className="flex items-center gap-1">
            <HelpCircle className="h-3 w-3" />
            <span>GL?</span>
          </div>
          <div className="mt-0.5 text-[9px] font-normal">$87 run</div>
        </div>
      </div>

      {/* Error */}
      <div
        className="ba-slide-in mt-2 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0"
        style={{ animationDelay: "0.86s" }}
      >
        <AlertCircle className="h-3 w-3 shrink-0 text-destructive" />
        <span className="text-[10px] font-semibold text-destructive">
          QuickBooks out of sync · 11 days behind
        </span>
      </div>
    </div>
  );
}
