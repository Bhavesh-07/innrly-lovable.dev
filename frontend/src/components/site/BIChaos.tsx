import { FileText, MessageSquare, StickyNote, AlertCircle, Coffee } from "lucide-react";

/**
 * BIChaos — Without Innrly: the 4:47 AM scramble. Mismatched morning report PDFs
 * from each property, a Slack ping chasing pacing, sticky note for STR, and a
 * tilted hand-typed rate-shop fragment with a #REF! error. Staggered ba-chaos-in.
 */
export function BIChaos() {
  return (
    <div className="relative space-y-2">
      {/* Stack of mismatched morning report PDFs */}
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
          <Coffee className="h-3 w-3 text-chart-4" />
          <span className="text-[10px] font-semibold text-foreground">Inbox · 4:47 AM</span>
          <span className="ml-auto text-[9px] text-muted-foreground">3 of 8 received</span>
        </div>
        <div className="mt-1 space-y-0.5 text-[9px]">
          <div className="grid grid-cols-[1fr_56px_70px] gap-1 text-muted-foreground">
            <span>Property</span>
            <span>Format</span>
            <span>Status</span>
          </div>
          <div className="grid grid-cols-[1fr_56px_70px] gap-1 text-foreground">
            <span className="truncate">DAL-12 Night Audit</span>
            <span>PDF</span>
            <span className="rounded bg-success/15 px-1 text-center text-success">8:42 AM</span>
          </div>
          <div className="grid grid-cols-[1fr_56px_70px] gap-1 text-foreground">
            <span className="truncate">AUS-03 Daily Flash</span>
            <span>XLSX</span>
            <span className="rounded bg-chart-4/20 px-1 text-center text-chart-4">9:15 AM</span>
          </div>
          <div className="grid grid-cols-[1fr_56px_70px] gap-1 text-foreground">
            <span className="truncate">HOU-07 Pacing</span>
            <span>—</span>
            <span className="rounded bg-destructive/20 px-1 text-center text-destructive">
              missing
            </span>
          </div>
        </div>
      </div>

      {/* Mid row: Slack ping + comp-set fragment + sticky */}
      <div className="flex items-start gap-2">
        <div
          className="ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-destructive/10 p-2 opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "-20px",
            ["--y0" as never]: "-14px",
            ["--r0" as never]: "5deg",
            ["--rot" as never]: "1.5deg",
            ["--delay" as never]: "0.22s",
          }}
        >
          <div className="flex items-center gap-1.5">
            <MessageSquare className="h-3 w-3 text-primary" />
            <span className="truncate text-[10px] font-semibold text-foreground">
              #owners · 4:51 AM
            </span>
          </div>
          <div className="mt-1 text-[10px] text-foreground">
            <span className="font-semibold text-accent">@owner</span> where's AUS-03 pacing for the
            weekend??
          </div>
        </div>

        <div
          className="ba-chaos-in w-36 shrink-0 rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated"
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
              RateShop_manual.xlsx
            </span>
          </div>
          <div className="mt-1 grid grid-cols-2 gap-0.5 text-[9px]">
            <span className="text-muted-foreground">Comp A</span>
            <span className="text-foreground">$172</span>
            <span className="text-muted-foreground">Comp B</span>
            <span className="text-foreground">$168</span>
            <span className="text-muted-foreground">Comp C</span>
            <span className="rounded bg-destructive/20 px-1 font-bold text-destructive">#REF!</span>
          </div>
        </div>

        <div
          className="ba-chaos-in w-24 shrink-0 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "30px",
            ["--y0" as never]: "-12px",
            ["--r0" as never]: "13deg",
            ["--rot" as never]: "6deg",
            ["--delay" as never]: "0.58s",
          }}
        >
          <div className="flex items-center gap-1">
            <StickyNote className="h-3 w-3" />
            <span>STR ??</span>
          </div>
          <div className="mt-0.5 text-[9px] font-normal">pull manually</div>
        </div>
      </div>

      {/* Bottom error */}
      <div
        className="ba-slide-in mt-2 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0"
        style={{ animationDelay: "0.86s" }}
      >
        <AlertCircle className="h-3 w-3 shrink-0 text-destructive" />
        <span className="text-[10px] font-semibold text-destructive">
          Decisions delayed · coffee already cold
        </span>
      </div>
    </div>
  );
}
