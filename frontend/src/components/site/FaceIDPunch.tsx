import { Check, Fingerprint, ShieldCheck } from "lucide-react";

/**
 * FaceIDPunch — Face-ID TimeClock punch animation.
 * A kiosk frame with a camera viewfinder, a face scan, then a
 * "Clocked in · 7:02 AM · M. Garcia" confirmation. A live ticker of
 * recent punches scrolls below. The whole loop runs in ~6.8s to match
 * the other BeforeAfter animation rhythms.
 *
 * Purpose: visually answer "Face-ID TimeClock vs Hotel Effectiveness" —
 * physical, biometric, sub-second. Not another spreadsheet.
 */
export function FaceIDPunch({ playKey = 0 }: { playKey?: number }) {
  return (
    <div key={playKey} className="relative">
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl" aria-hidden />

      <div className="relative grid gap-3 sm:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        {/* Kiosk frame */}
        <div className="relative overflow-hidden rounded-[28px] border-[6px] border-foreground/80 bg-background shadow-elevated">
          {/* Status bar */}
          <div className="flex items-center justify-between bg-surface/80 px-3 py-1.5 text-[9px] font-semibold text-muted-foreground">
            <span>Lobby kiosk · 7:02 AM</span>
            <span className="flex items-center gap-1 text-success">
              <ShieldCheck className="h-2.5 w-2.5" /> Face-ID
            </span>
          </div>

          {/* Viewfinder */}
          <div className="relative flex aspect-[3/4] items-center justify-center bg-gradient-to-b from-surface/60 to-background p-4">
            {/* Pulsing ring */}
            <div className="relative flex h-32 w-32 items-center justify-center sm:h-36 sm:w-36">
              <div className="absolute inset-0 rounded-full border-2 border-accent/40 ba-pulse-ring" />
              <div className="absolute inset-2 rounded-full border border-accent/30" />

              {/* Avatar */}
              <div className="relative flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-accent/30 to-primary/40 sm:h-28 sm:w-28">
                <span className="text-2xl font-bold text-foreground">MG</span>
                {/* Scan line */}
                <div className="ba-scan absolute inset-x-0 h-0.5 bg-accent/90 shadow-[0_0_12px_2px_color-mix(in_oklab,var(--accent)_60%,transparent)]" />
              </div>

              {/* Corner brackets */}
              <Corners />
            </div>

            {/* Confirmation chip — fades in */}
            <div className="ba-pop-in absolute bottom-3 left-3 right-3 flex items-center gap-2 rounded-xl border border-success/40 bg-success/10 px-3 py-2 text-foreground">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-background">
                <Check className="h-3.5 w-3.5" strokeWidth={3} />
              </span>
              <div className="min-w-0">
                <div className="truncate text-[11px] font-bold">Clocked in · M. Garcia</div>
                <div className="truncate text-[9px] font-medium text-muted-foreground">
                  HK · 7:02 AM · 0.8s
                </div>
              </div>
            </div>
          </div>

          {/* Speed strip */}
          <div className="flex items-center justify-between border-t border-border/40 bg-surface/60 px-3 py-1.5">
            <span className="flex items-center gap-1 text-[9px] font-semibold uppercase tracking-wider text-accent">
              <Fingerprint className="h-2.5 w-2.5" /> Avg punch 0.8s
            </span>
            <span className="text-[9px] font-medium text-muted-foreground">No PINs to share</span>
          </div>
        </div>

        {/* Live ticker + OT flag */}
        <div className="space-y-2">
          <div className="rounded-2xl border border-border bg-card p-3 shadow-elevated">
            <div className="flex items-center justify-between border-b border-border/40 pb-1.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Live punches · this morning
              </span>
              <span className="flex items-center gap-1 text-[9px] font-semibold text-success">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
                </span>
                LIVE
              </span>
            </div>
            <ul className="mt-2 space-y-1.5">
              <Punch name="M. Garcia" role="HK" time="7:02" delay="0s" />
              <Punch name="J. Tran" role="FD" time="7:00" delay="1.2s" />
              <Punch name="A. Singh" role="MX" time="7:06" delay="2.4s" />
              <Punch name="R. Lee" role="HK" time="7:14" delay="3.6s" ot />
            </ul>
          </div>

          <div
            className="ba-slide-in flex items-center gap-2 rounded-xl border border-chart-4/40 bg-chart-4/10 px-3 py-2"
            style={{ animationDelay: "4s" }}
          >
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-chart-4 text-background text-[10px] font-bold">
              !
            </span>
            <div className="min-w-0">
              <div className="text-[11px] font-bold text-foreground">OT flagged at punch</div>
              <div className="text-[9px] text-muted-foreground">
                R. Lee · 38.5 / 40 hrs · send home option offered
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating ribbon */}
      <div className="absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-2.5 shadow-elevated sm:block">
        <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Face → Punch → Done
        </div>
        <div className="text-base font-bold text-foreground">in 0.8 seconds</div>
      </div>
    </div>
  );
}

function Corners() {
  const base = "absolute h-3 w-3 border-accent";
  return (
    <>
      <span className={`${base} -left-1 -top-1 border-l-2 border-t-2`} />
      <span className={`${base} -right-1 -top-1 border-r-2 border-t-2`} />
      <span className={`${base} -left-1 -bottom-1 border-b-2 border-l-2`} />
      <span className={`${base} -right-1 -bottom-1 border-b-2 border-r-2`} />
    </>
  );
}

function Punch({
  name,
  role,
  time,
  delay,
  ot,
}: {
  name: string;
  role: string;
  time: string;
  delay: string;
  ot?: boolean;
}) {
  return (
    <li
      className="ba-slide-from-left flex items-center justify-between rounded-lg border border-border/40 bg-surface/60 px-2 py-1.5 opacity-0"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-2">
        <span
          className={`flex h-6 w-6 items-center justify-center rounded-full text-[9px] font-bold text-background ${ot ? "bg-chart-4" : "bg-accent"}`}
        >
          {ot ? "!" : <Check className="h-3 w-3" strokeWidth={3} />}
        </span>
        <span className="text-[11px] font-semibold text-foreground">{name}</span>
        <span className="text-[9px] font-medium text-muted-foreground">{role}</span>
      </div>
      <div className="flex items-center gap-2">
        {ot && (
          <span className="rounded-sm bg-chart-4/20 px-1 text-[8px] font-bold uppercase tracking-wider text-chart-4">
            OT risk
          </span>
        )}
        <span className="font-mono text-[10px] text-foreground">{time}</span>
      </div>
    </li>
  );
}
