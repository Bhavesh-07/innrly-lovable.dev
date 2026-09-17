import { Mail, Printer, AlertCircle, StickyNote, FileText } from "lucide-react";

/**
 * PayChaos — Friday check run. Shoebox of vendor invoices, printer queue,
 * unsigned check sticky.
 */
export function PayChaos() {
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
          <Mail className="h-3 w-3 text-chart-4" />
          <span className="text-[10px] font-semibold text-foreground">
            A/P Inbox · Friday 9:14 AM
          </span>
          <span className="ml-auto text-[9px] text-destructive">27 unread</span>
        </div>
        <div className="mt-1 space-y-0.5 text-[9px]">
          <div className="grid grid-cols-[1fr_60px_56px] gap-1 text-muted-foreground">
            <span>Vendor</span>
            <span>Amount</span>
            <span>GL</span>
          </div>
          <div className="grid grid-cols-[1fr_60px_56px] gap-1 text-foreground">
            <span className="truncate">Sysco · F&amp;B</span>
            <span>$1,842</span>
            <span className="rounded bg-destructive/15 px-1 text-center text-destructive">???</span>
          </div>
          <div className="grid grid-cols-[1fr_60px_56px] gap-1 text-foreground">
            <span className="truncate">Ecolab</span>
            <span>$ 412</span>
            <span className="rounded bg-destructive/15 px-1 text-center text-destructive">???</span>
          </div>
          <div className="grid grid-cols-[1fr_60px_56px] gap-1 text-foreground">
            <span className="truncate">HD Supply</span>
            <span>$ 287</span>
            <span className="rounded bg-destructive/15 px-1 text-center text-destructive">???</span>
          </div>
        </div>
      </div>

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
          <Printer className="h-3.5 w-3.5 shrink-0 text-primary" />
          <div className="min-w-0">
            <div className="truncate text-[10px] font-semibold text-foreground">HP LaserJet</div>
            <div className="text-[9px] text-muted-foreground">42 checks queued</div>
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
            <FileText className="h-3 w-3 text-muted-foreground" />
            <span className="truncate text-[10px] font-semibold text-foreground">CHK #10472</span>
          </div>
          <div className="mt-1 text-[9px] text-muted-foreground">awaiting 2nd signature</div>
        </div>

        <div
          className="ba-chaos-in w-24 shrink-0 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated"
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
            <span>Bank trip</span>
          </div>
          <div className="mt-0.5 text-[9px] font-normal">by 3 PM!</div>
        </div>
      </div>

      <div
        className="ba-slide-in mt-2 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0"
        style={{ animationDelay: "0.86s" }}
      >
        <AlertCircle className="h-3 w-3 shrink-0 text-destructive" />
        <span className="text-[10px] font-semibold text-destructive">
          3 vendors calling · "where's my payment?"
        </span>
      </div>
    </div>
  );
}
