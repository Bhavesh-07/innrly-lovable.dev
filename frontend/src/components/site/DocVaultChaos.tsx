import { FileText, Mail, Folder, HelpCircle, AlertCircle } from "lucide-react";

/**
 * DocVaultChaos — tasteful chaos: overlapping doc cards, stale email, sticky.
 * Compact: items use relative flow (not absolute) so the box hugs content.
 */
export function DocVaultChaos() {
  return (
    <div className="relative space-y-2">
      {/* Top row: email + folder */}
      <div className="flex items-start gap-2">
        <div
          className="ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-destructive/10 p-2 opacity-0"
          style={{
            ["--x0" as never]: "-34px",
            ["--y0" as never]: "18px",
            ["--r0" as never]: "-8deg",
            ["--rot" as never]: "-1deg",
          }}
        >
          <div className="flex items-center gap-1.5">
            <Mail className="h-3 w-3 text-muted-foreground" />
            <span className="truncate text-[10px] font-semibold text-foreground">
              Re: Re: NA pack Oct 12?
            </span>
          </div>
          <div className="mt-1 line-clamp-2 text-[9px] text-muted-foreground">
            "Did anyone save this one? I can't find it on the drive…"
          </div>
        </div>
        <div
          className="ba-chaos-in flex w-28 shrink-0 items-center gap-1.5 rounded-lg border border-destructive/50 bg-card p-2 opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "28px",
            ["--y0" as never]: "-18px",
            ["--r0" as never]: "10deg",
            ["--rot" as never]: "4deg",
            ["--delay" as never]: "0.16s",
          }}
        >
          <Folder className="h-3.5 w-3.5 shrink-0 text-chart-4" />
          <div className="min-w-0">
            <div className="truncate text-[10px] font-semibold text-foreground">/Night Audits/</div>
            <div className="text-[9px] text-muted-foreground">312 unsorted</div>
          </div>
        </div>
      </div>

      {/* Mid row: overlapping PDFs + sticky */}
      <div className="flex items-center justify-between gap-2">
        <div className="relative flex-1">
          <div
            className="ba-chaos-in relative z-10 flex w-44 items-center gap-1.5 rounded-lg border border-destructive/60 bg-card p-2 opacity-0 shadow-elevated"
            style={{
              ["--x0" as never]: "-46px",
              ["--y0" as never]: "-12px",
              ["--r0" as never]: "-14deg",
              ["--rot" as never]: "-3deg",
              ["--delay" as never]: "0.32s",
            }}
          >
            <FileText className="h-3.5 w-3.5 shrink-0 text-destructive" />
            <div className="min-w-0">
              <div className="truncate text-[10px] font-semibold text-foreground">
                NA_FINAL_v3 (1).pdf
              </div>
              <div className="text-[9px] text-muted-foreground">Modified 11 days ago</div>
            </div>
          </div>
          <div
            className="ba-chaos-in absolute left-6 top-3 flex w-44 items-center gap-1.5 rounded-lg border border-destructive/50 bg-card/80 p-2 opacity-0 shadow-elevated"
            style={{
              ["--x0" as never]: "-18px",
              ["--y0" as never]: "24px",
              ["--r0" as never]: "8deg",
              ["--rot" as never]: "2deg",
              ["--delay" as never]: "0.48s",
            }}
          >
            <FileText className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <div className="min-w-0">
              <div className="truncate text-[10px] font-semibold text-foreground">
                audit_oct_v2.pdf
              </div>
              <div className="text-[9px] text-muted-foreground">Where's v3?</div>
            </div>
          </div>
        </div>

        <div
          className="ba-chaos-in w-24 shrink-0 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated"
          style={{
            ["--x0" as never]: "28px",
            ["--y0" as never]: "22px",
            ["--r0" as never]: "12deg",
            ["--rot" as never]: "-5deg",
            ["--delay" as never]: "0.64s",
          }}
        >
          <div className="flex items-center gap-1">
            <HelpCircle className="h-3 w-3" />
            <span>ask GM??</span>
          </div>
          <div className="mt-0.5 text-[9px] font-normal">Oct 14 missing</div>
        </div>
      </div>

      {/* Error banner */}
      <div
        className="ba-slide-in mt-6 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0"
        style={{ animationDelay: "0.9s" }}
      >
        <AlertCircle className="h-3 w-3 shrink-0 text-destructive" />
        <span className="text-[10px] font-semibold text-destructive">
          Audit Monday · 4 nights still missing
        </span>
      </div>
    </div>
  );
}
