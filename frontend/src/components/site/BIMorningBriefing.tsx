import { TrendingUp, TrendingDown, Mail, Calendar, BarChart3 } from "lucide-react";

/**
 * BIMorningBriefing — stylized in-product artifact for the BI solutions page.
 * Shows the owner/VP morning view: Early Bird email digest + Pulse dashboard +
 * STR/Rate-Shop strip. Same window-chrome grammar as HeroPortfolioWall.
 */
export function BIMorningBriefing() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl" aria-hidden />

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
          {/* Left: Early Bird email digest */}
          <div className="col-span-2 rounded-xl border border-border/60 bg-surface/60 p-3">
            <div className="flex items-center gap-2 border-b border-border/40 pb-2">
              <Mail className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Early Bird · 5 AM digest
              </span>
            </div>
            <div className="mt-2 space-y-2">
              <Row label="Portfolio occ" value="82%" delta="+3.2" up />
              <Row label="RevPAR" value="$118" delta="+$9" up />
              <Row label="Labor %" value="29.4%" delta="-1.1" up />
              <Row label="Exceptions" value="3" delta="-2" up />
            </div>
            <div className="mt-3 rounded-lg border border-accent/30 bg-accent/5 p-2">
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
                <Kpi label="Occ" value="82%" />
                <Kpi label="ADR" value="$144" />
                <Kpi label="RevPAR" value="$118" />
                <Kpi label="MPOR" value="24.6" />
              </div>
            </div>

            {/* STR + Rate Shop split */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
                <div className="flex items-center gap-2">
                  <Calendar className="h-3.5 w-3.5 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    STR Index
                  </span>
                </div>
                <div className="mt-2 flex items-baseline justify-between">
                  <span className="text-xl font-bold text-foreground">112.4</span>
                  <span className="flex items-center gap-0.5 text-[10px] font-semibold text-success">
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
                      className="flex-1 rounded-sm bg-gradient-to-t from-accent/40 to-accent"
                      style={{ height: `${h * 8}%` }}
                    />
                  ))}
                </div>
              </div>

              <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
                <div className="flex items-center gap-2">
                  <TrendingDown className="h-3.5 w-3.5 text-chart-4" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Rate Shop
                  </span>
                </div>
                <div className="mt-2 space-y-1">
                  <CompRow name="Comp A" delta="-$8" down />
                  <CompRow name="Comp B" delta="+$3" />
                  <CompRow name="Comp C" delta="-$12" down />
                  <CompRow name="You" delta="hold" highlight />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating ribbon */}
      <div className="absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block">
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
}: {
  label: string;
  value: string;
  delta: string;
  up?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
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

function Kpi({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/40 bg-background/40 p-2">
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
}: {
  name: string;
  delta: string;
  down?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className={`flex items-center justify-between rounded px-1.5 py-0.5 ${highlight ? "bg-accent/10" : ""}`}
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
