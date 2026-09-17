import { TrendingUp, TrendingDown, Mail, Calendar, BarChart3 } from "lucide-react";

/**
 * BIFlow — With Innrly: morning briefing assembles itself between 5:00 and 5:02 AM.
 * Three-phase reveal: Early Bird digest → Pulse KPIs → STR + Rate Shop → Pacing alert.
 * Accepts playKey so the parent Replay button restarts the cycle.
 */
export function BIFlow({ playKey }: { playKey: number }) {
  return (
    <div key={playKey} className="relative">
      <div className="absolute -inset-6 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl" aria-hidden />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        {/* Window chrome */}
        <div className="flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <div className="ml-3 text-xs font-medium text-muted-foreground">
            Innrly · Owner view · 5:02 AM
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            LIVE
          </div>
        </div>

        <div className="grid grid-cols-5 gap-3 p-4">
          {/* Left: Early Bird email digest — slides in first */}
          <div
            className="ba-slide-from-left col-span-2 rounded-xl border border-border/60 bg-surface/60 p-3 opacity-0"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="flex items-center gap-2 border-b border-border/40 pb-2">
              <Mail className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Early Bird · 5 AM digest
              </span>
            </div>
            <div className="mt-2 space-y-2">
              <Row label="Portfolio occ" value="82%" delta="+3.2" delay="0.7s" up />
              <Row label="RevPAR" value="$118" delta="+$9" delay="0.85s" up />
              <Row label="Labor %" value="29.4%" delta="-1.1" delay="1.0s" up />
              <Row label="Exceptions" value="3" delta="-2" delay="1.15s" up />
            </div>
            <div
              className="ba-pop-in mt-3 rounded-lg border border-accent/40 bg-accent/10 p-2 opacity-0 ring-1 ring-accent/30"
              style={{ animationDelay: "3.6s" }}
            >
              <div className="text-[9px] font-bold uppercase tracking-wider text-accent">
                Pacing alert
              </div>
              <div className="mt-0.5 text-[11px] font-semibold text-foreground">
                AUS-03 weekend pace +14% vs LY
              </div>
            </div>
          </div>

          {/* Right: Pulse + STR */}
          <div className="col-span-3 space-y-3">
            {/* Pulse KPI strip */}
            <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                <BarChart3 className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Pulse · 8 properties
                </span>
                <span className="ml-auto text-[9px] text-muted-foreground">refreshed 4:58 AM</span>
              </div>
              <div className="mt-2 grid grid-cols-4 gap-2">
                <Kpi label="Occ" value="82%" delay="1.6s" />
                <Kpi label="ADR" value="$144" delay="1.8s" />
                <Kpi label="RevPAR" value="$118" delay="2.0s" />
                <Kpi label="MPOR" value="24.6" delay="2.2s" />
              </div>
            </div>

            {/* STR + Rate Shop split */}
            <div className="grid grid-cols-2 gap-3">
              <div
                className="ba-landing-glow rounded-xl border border-border/60 bg-surface/60 p-3"
                style={{ animationDelay: "2.6s" }}
              >
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    STR Index
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span
                    className="ba-pop-in text-xl font-bold text-foreground opacity-0"
                    style={{ animationDelay: "2.8s" }}
                  >
                    112.4
                  </span>
                  <span
                    className="ba-pop-in flex items-center gap-0.5 text-[10px] font-semibold text-success opacity-0"
                    style={{ animationDelay: "2.9s" }}
                  >
                    <TrendingUp className="h-3 w-3" />
                    +4.2
                  </span>
                </div>
                <div className="mt-1 text-[9px] text-muted-foreground">
                  RevPAR Index · vs comp set
                </div>
                <div className="mt-2 flex h-6 items-end gap-0.5">
                  {[5, 7, 6, 8, 7, 9, 10, 8, 11].map((h, i) => (
                    <div
                      key={i}
                      className="ba-pop-in flex-1 rounded-sm bg-gradient-to-t from-accent/40 to-accent opacity-0"
                      style={{ height: `${h * 8}%`, animationDelay: `${2.6 + i * 0.06}s` }}
                    />
                  ))}
                </div>
              </div>

              <div
                className="ba-landing-glow rounded-xl border border-border/60 bg-surface/60 p-3"
                style={{ animationDelay: "2.8s" }}
              >
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-3.5 w-3.5 text-chart-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Rate Shop
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  <CompRow name="Comp A" delta="-$8" delay="3.0s" down />
                  <CompRow name="Comp B" delta="+$3" delay="3.15s" />
                  <CompRow name="Comp C" delta="-$12" delay="3.3s" down />
                  <CompRow name="You" delta="hold" delay="3.45s" highlight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating ribbon — last to land */}
      <div
        className="ba-pop-in absolute -right-3 -top-3 hidden rounded-xl border border-accent/40 bg-card px-4 py-3 opacity-0 shadow-elevated sm:block"
        style={{ animationDelay: "4.2s" }}
      >
        <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Before your coffee
        </div>
        <div className="text-lg font-bold text-foreground">Portfolio decided</div>
      </div>
    </div>
  );
}

function Row({
  label,
  value,
  delta,
  up,
  delay,
}: {
  label: string;
  value: string;
  delta: string;
  up?: boolean;
  delay: string;
}) {
  return (
    <div
      className="ba-pop-in flex items-center justify-between opacity-0"
      style={{ animationDelay: delay }}
    >
      <span className="text-[11px] text-muted-foreground">{label}</span>
      <div className="flex items-baseline gap-1.5">
        <span className="text-sm font-bold text-foreground">{value}</span>
        <span className={`text-[10px] font-semibold ${up ? "text-success" : "text-destructive"}`}>
          {delta}
        </span>
      </div>
    </div>
  );
}

function Kpi({ label, value, delay }: { label: string; value: string; delay: string }) {
  return (
    <div
      className="ba-pop-in rounded-lg border border-border/40 bg-background/40 p-2 opacity-0"
      style={{ animationDelay: delay }}
    >
      <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 text-base font-bold text-foreground">{value}</div>
    </div>
  );
}

function CompRow({
  name,
  delta,
  down,
  highlight,
  delay,
}: {
  name: string;
  delta: string;
  down?: boolean;
  highlight?: boolean;
  delay: string;
}) {
  return (
    <div
      className={`ba-pop-in flex items-center justify-between rounded px-1.5 py-0.5 opacity-0 ${highlight ? "bg-accent/10" : ""}`}
      style={{ animationDelay: delay }}
    >
      <span
        className={`text-[10px] ${highlight ? "font-bold text-accent" : "text-muted-foreground"}`}
      >
        {name}
      </span>
      <span
        className={`text-[10px] font-semibold ${down ? "text-destructive" : highlight ? "text-accent" : "text-success"}`}
      >
        {delta}
      </span>
    </div>
  );
}
