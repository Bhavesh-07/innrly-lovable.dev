import { KeySquare, AlertCircle, StickyNote, Hash } from "lucide-react";

/**
 * ShiftChaos — pre-Innrly Shift labor pain. The real Hotel Effectiveness /
 * legacy PIN-pad world: shared 4-digit PINs taped to the wall, buddy-punching,
 * and a GM hand-tallying OT on Friday morning.
 */
export function ShiftChaos() {
  return (
    <div className="relative space-y-2">
      {/* Beat-up PIN pad with sticky-note passwords */}
      <div
        className="ba-chaos-in rounded-xl border border-destructive/60 bg-destructive/10 p-3 opacity-0 shadow-elevated"
        style={{
          ["--x0" as never]: "-32px",
          ["--y0" as never]: "14px",
          ["--r0" as never]: "-6deg",
          ["--rot" as never]: "-1.5deg",
        }}
      >
        <div className="flex items-center gap-1.5 border-b border-border/40 pb-1.5">
          <KeySquare className="h-3 w-3 text-chart-4" />
          <span className="text-[10px] font-semibold text-foreground">Lobby PIN pad · shared</span>
          <span className="ml-auto rounded bg-chart-4/20 px-1 text-[8px] font-bold uppercase tracking-wider text-chart-4">
            No biometrics
          </span>
        </div>
        <div className="mt-2 grid grid-cols-3 gap-1">
          {["1", "2", "3", "4", "5", "6", "7", "8", "9", "*", "0", "#"].map((k) => (
            <div
              key={k}
              className="flex h-5 items-center justify-center rounded-sm border border-border/40 bg-background/60 text-[10px] font-bold text-foreground"
            >
              {k}
            </div>
          ))}
        </div>
        <div className="mt-2 flex items-center gap-1 text-[9px] font-semibold text-muted-foreground">
          <Hash className="h-2.5 w-2.5" />
          <span>"Maria is sick — Lin, just punch her 4471 today."</span>
        </div>
      </div>

      {/* Sticky note — passwords on the wall */}
      <div
        className="ba-chaos-in ml-auto w-44 rotate-2 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated"
        style={{
          ["--x0" as never]: "30px",
          ["--y0" as never]: "-12px",
          ["--r0" as never]: "14deg",
          ["--rot" as never]: "3deg",
          ["--delay" as never]: "0.22s",
        }}
      >
        <div className="flex items-center gap-1">
          <StickyNote className="h-3 w-3" />
          <span>Shared PINs</span>
        </div>
        <div className="mt-1 space-y-0.5 text-[9px] font-mono font-normal leading-tight">
          <div>Maria · 4471</div>
          <div>Carlos · 8820</div>
          <div>Lin · 3309</div>
        </div>
      </div>

      {/* Hand-tally clipboard */}
      <div
        className="ba-chaos-in rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated"
        style={{
          ["--x0" as never]: "-20px",
          ["--y0" as never]: "16px",
          ["--r0" as never]: "-5deg",
          ["--rot" as never]: "1.5deg",
          ["--delay" as never]: "0.4s",
        }}
      >
        <div className="flex items-center gap-1 border-b border-border/40 pb-1">
          <span className="truncate text-[9px] font-semibold text-foreground">
            Friday hand-tally · OT scramble
          </span>
        </div>
        <div className="mt-1 grid grid-cols-2 gap-0.5 text-[9px]">
          <span className="text-muted-foreground">HK · Maria</span>
          <span className="text-foreground">38.5</span>
          <span className="text-muted-foreground">FD · Carlos</span>
          <span className="rounded bg-destructive/20 px-1 font-bold text-destructive">42.0 OT</span>
          <span className="text-muted-foreground">HK · Lin</span>
          <span className="text-foreground">36.0</span>
        </div>
      </div>

      <div
        className="ba-slide-in mt-2 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0"
        style={{ animationDelay: "0.86s" }}
      >
        <AlertCircle className="h-3 w-3 shrink-0 text-destructive" />
        <span className="text-[10px] font-semibold text-destructive">
          OT discovered after payroll closes — too late to act
        </span>
      </div>
    </div>
  );
}
