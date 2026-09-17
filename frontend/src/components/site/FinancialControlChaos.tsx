import { FileSpreadsheet, Calendar, AlertCircle, StickyNote } from "lucide-react";

/**
 * FinancialControlChaos — month-end scramble. Scattered trial balances, late P&L
 * sticky, a close calendar full of red overdue boxes.
 */
export function FinancialControlChaos() {
  return (
    <div className="relative flex h-full flex-col space-y-2">
      {/* Close calendar — overdue items in red */}
      <div
        className="ba-chaos-in rounded-lg border border-destructive/60 bg-destructive/10 p-2 opacity-0 shadow-elevated"
        style={{
          ["--x0" as never]: "-36px",
          ["--y0" as never]: "16px",
          ["--r0" as never]: "-7deg",
          ["--rot" as never]: "-1.5deg",
        }}
      >
        <div className="flex items-center gap-1.5 border-b border-border/40 pb-1">
          <Calendar className="h-3 w-3 text-chart-4" />
          <span className="text-[10px] font-semibold text-foreground">Close Calendar · Day 11</span>
          <span className="ml-auto text-[9px] text-destructive">5 overdue</span>
        </div>
        <div className="mt-1 grid grid-cols-7 gap-0.5">
          {Array.from({ length: 14 }).map((_, i) => (
            <div
              key={i}
              className={`h-3 rounded-sm text-[7px] leading-3 text-center ${
                i < 4
                  ? "bg-success/30 text-success"
                  : i < 9
                    ? "bg-destructive/40 text-destructive"
                    : "bg-muted/30 text-muted-foreground"
              }`}
            >
              {i + 1}
            </div>
          ))}
        </div>
      </div>

      {/* Mid row: Trial Balance fragment + late P&L sticky */}
      <div className="flex items-start gap-2">
        <div
          className="ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "-20px",
            ["--y0" as never]: "-14px",
            ["--r0" as never]: "5deg",
            ["--rot" as never]: "1.5deg",
            ["--delay" as never]: "0.22s",
          }}
        >
          <div className="flex items-center gap-1 border-b border-border/40 pb-1">
            <FileSpreadsheet className="h-3 w-3 text-success" />
            <span className="truncate text-[9px] font-semibold text-foreground">
              TB_DAL12_v7_FINAL.xlsx
            </span>
          </div>
          <div className="mt-1 grid grid-cols-2 gap-0.5 text-[9px]">
            <span className="text-muted-foreground">Cash</span>
            <span className="text-foreground">$184,210</span>
            <span className="text-muted-foreground">A/R</span>
            <span className="text-foreground">$ 47,883</span>
            <span className="text-muted-foreground">Variance</span>
            <span className="rounded bg-destructive/20 px-1 font-bold text-destructive">
              ($3,140)
            </span>
          </div>
        </div>

        <div
          className="ba-chaos-in w-28 shrink-0 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "30px",
            ["--y0" as never]: "-12px",
            ["--r0" as never]: "13deg",
            ["--rot" as never]: "6deg",
            ["--delay" as never]: "0.4s",
          }}
        >
          <div className="flex items-center gap-1">
            <StickyNote className="h-3 w-3" />
            <span>P&amp;L late</span>
          </div>
          <div className="mt-0.5 text-[9px] font-normal">AUS-03 still pending</div>
        </div>
      </div>

      {/* Spreadsheet stack — fills remaining vertical space */}
      <div
        className="ba-chaos-in mt-auto flex-1 rounded-lg border border-destructive/30 bg-background/40 p-2 opacity-0 shadow-elevated"
        style={{
          ["--x0" as never]: "0px",
          ["--y0" as never]: "18px",
          ["--r0" as never]: "0deg",
          ["--rot" as never]: "0deg",
          ["--delay" as never]: "0.55s",
        }}
      >
        <div className="flex items-center gap-1 border-b border-border/40 pb-1">
          <FileSpreadsheet className="h-3 w-3 text-muted-foreground" />
          <span className="text-[9px] font-semibold text-muted-foreground">
            Open tabs · 7 spreadsheets
          </span>
        </div>
        <div className="mt-1.5 space-y-1">
          {[
            { name: "Bank_Recon_DAL12.xlsx", note: "3 unmatched" },
            { name: "OTA_Settle_Jun.xlsx", note: "Expedia variance" },
            { name: "GL_Codes_master_v22.xlsx", note: "stale" },
            { name: "AR_Aging_pull.xlsx", note: "needs refresh" },
          ].map((row) => (
            <div
              key={row.name}
              className="flex items-center justify-between rounded bg-muted/20 px-1.5 py-0.5 text-[9px]"
            >
              <span className="truncate text-foreground/80">{row.name}</span>
              <span className="ml-2 shrink-0 text-destructive/80">{row.note}</span>
            </div>
          ))}
        </div>
      </div>

      <div
        className="ba-slide-in flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0"
        style={{ animationDelay: "0.86s" }}
      >
        <AlertCircle className="h-3 w-3 shrink-0 text-destructive" />
        <span className="text-[10px] font-semibold text-destructive">
          Close slipping · CFO asking on day 11
        </span>
      </div>
    </div>
  );
}
