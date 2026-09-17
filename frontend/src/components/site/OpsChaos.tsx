import { Moon, Mail, AlertCircle, StickyNote, FileText } from "lucide-react";

/**
 * OpsChaos — 11 PM night auditor scramble. Sticky-note checklist, late corporate
 * emails, fax / OTA folders, missing audit pack.
 */
export function OpsChaos() {
  return (
    <div className="relative space-y-2">
      <div
        className="ba-chaos-in rounded-lg border border-destructive/60 bg-destructive/10 p-2 opacity-0 shadow-elevated"
        style={{
          ["--x0" as never]: "-32px",
          ["--y0" as never]: "14px",
          ["--r0" as never]: "-6deg",
          ["--rot" as never]: "-1deg",
        }}
      >
        <div className="flex items-center gap-1.5 border-b border-border/40 pb-1">
          <Moon className="h-3 w-3 text-chart-4" />
          <span className="text-[10px] font-semibold text-foreground">
            Night Audit Checklist · 11:42 PM
          </span>
          <span className="ml-auto text-[9px] text-muted-foreground">4 of 11 done</span>
        </div>
        <div className="mt-1 space-y-0.5 text-[9px]">
          {[
            { t: "PMS EOD run", d: true },
            { t: "Print pack + email corporate", d: false },
            { t: "Re-key OTA settlements to XLS", d: false },
            { t: "Match bank deposits", d: false },
            { t: "Pull vendor invoices · 3 portals", d: false },
          ].map((row) => (
            <div key={row.t} className="grid grid-cols-[14px_1fr_60px] gap-1 text-foreground">
              <span className={row.d ? "text-success" : "text-destructive"}>
                {row.d ? "✓" : "○"}
              </span>
              <span className="truncate">{row.t}</span>
              <span
                className={`rounded px-1 text-center ${row.d ? "bg-success/15 text-success" : "bg-destructive/20 text-destructive"}`}
              >
                {row.d ? "done" : "todo"}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start gap-2">
        <div
          className="ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-destructive/10 p-2 opacity-0"
          style={{
            ["--x0" as never]: "-20px",
            ["--y0" as never]: "-14px",
            ["--r0" as never]: "5deg",
            ["--rot" as never]: "1.5deg",
            ["--delay" as never]: "0.22s",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Mail className="h-3 w-3 text-primary" />
            <span className="truncate text-[10px] font-semibold text-foreground">
              Corp · 11:08 PM
            </span>
          </div>
          <div className="mt-1 text-[10px] text-foreground">
            "<span className="font-semibold text-accent">resend</span> last night's pack — DAL-12
            missing"
          </div>
        </div>

        <div
          className="ba-chaos-in w-32 shrink-0 rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "24px",
            ["--y0" as never]: "18px",
            ["--r0" as never]: "-9deg",
            ["--rot" as never]: "-2.5deg",
            ["--delay" as never]: "0.4s",
          }}
        >
          <div className="flex items-center gap-1 border-b border-border/40 pb-1">
            <FileText className="h-3 w-3 text-success" />
            <span className="truncate text-[9px] font-semibold text-foreground">
              Booking_Sept.csv
            </span>
          </div>
          <div className="mt-1 text-[9px] text-muted-foreground">re-key 142 rows</div>
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
            <StickyNote className="h-3 w-3" />
            <span>AGM</span>
          </div>
          <div className="mt-0.5 text-[9px] font-normal">redo by 6 AM</div>
        </div>
      </div>

      <div
        className="ba-slide-in mt-2 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0"
        style={{ animationDelay: "0.86s" }}
      >
        <AlertCircle className="h-3 w-3 shrink-0 text-destructive" />
        <span className="text-[10px] font-semibold text-destructive">
          Sunrise in 6 hours · 7 items still open
        </span>
      </div>
    </div>
  );
}
