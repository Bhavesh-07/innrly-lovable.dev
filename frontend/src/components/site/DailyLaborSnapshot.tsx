import { Clock, AlertTriangle, Check } from "lucide-react";

/**
 * DailyLaborSnapshot — stylized in-product artifact for Labor & Shift pages.
 * 5-minute daily labor snapshot: hours vs forecast, MPOR, OT alerts, Face-ID clock-ins.
 */
export function DailyLaborSnapshot() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl" aria-hidden />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        <div className="flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-destructive/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-chart-4/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-success/70" />
          </div>
          <div className="ml-3 text-xs font-medium text-muted-foreground">
            Innrly Shift · Daily snapshot · 11:42 AM
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            LIVE
          </div>
        </div>

        <div className="p-4">
          {/* Top KPI row */}
          <div className="grid grid-cols-4 gap-2 rounded-xl border border-border/60 bg-surface/60 p-3">
            <Kpi label="Labor %" value="29.4%" sub="target 31%" good />
            <Kpi label="MPOR" value="24.6" sub="std 26" good />
            <Kpi label="Hours today" value="187" sub="vs fcst 195" good />
            <Kpi label="OT risk" value="2" sub="of 14 on shift" warn />
          </div>

          {/* Housekeeping productivity */}
          <div className="mt-3 rounded-xl border border-border/60 bg-surface/60 p-3">
            <div className="flex items-center justify-between border-b border-border/40 pb-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Housekeeping · 18 rooms attendants
              </span>
              <span className="text-[9px] text-muted-foreground">vs occupancy 82%</span>
            </div>
            <div className="mt-2 space-y-1.5">
              <Attendant name="M. Reyes" rooms={14} mpor={23.1} pct={92} good />
              <Attendant name="L. Patel" rooms={12} mpor={25.4} pct={88} good />
              <Attendant name="J. Owusu" rooms={9} mpor={31.2} pct={62} warn />
              <Attendant name="S. Kim" rooms={13} mpor={24.0} pct={90} good />
            </div>
          </div>

          {/* OT + clock-ins */}
          <div className="mt-3 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-chart-4/30 bg-chart-4/5 p-3">
              <div className="flex items-center gap-2">
                <AlertTriangle className="h-3.5 w-3.5 text-chart-4" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-chart-4">
                  OT guardrail
                </span>
              </div>
              <div className="mt-2 text-[11px] font-semibold text-foreground">
                D. Cole · 38.5 / 40 hrs
              </div>
              <div className="mt-0.5 text-[10px] text-muted-foreground">
                Flagged at clock-in · GM notified
              </div>
            </div>
            <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Face-ID clock-ins
                </span>
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <span className="text-xl font-bold text-foreground">14</span>
                <span className="text-[10px] font-semibold text-success">100% verified</span>
              </div>
              <div className="mt-1 text-[9px] text-muted-foreground">No buddy-punches today</div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block">
        <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          GM mobile · 5 min
        </div>
        <div className="text-lg font-bold text-foreground">Done before lunch</div>
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  sub,
  good,
  warn,
}: {
  label: string;
  value: string;
  sub: string;
  good?: boolean;
  warn?: boolean;
}) {
  return (
    <div className="rounded-lg border border-border/40 bg-background/40 p-2">
      <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 text-base font-bold text-foreground">{value}</div>
      <div
        className={`text-[9px] font-medium ${warn ? "text-chart-4" : good ? "text-success" : "text-muted-foreground"}`}
      >
        {sub}
      </div>
    </div>
  );
}

function Attendant({
  name,
  rooms,
  mpor,
  pct,
  good,
  warn,
}: {
  name: string;
  rooms: number;
  mpor: number;
  pct: number;
  good?: boolean;
  warn?: boolean;
}) {
  return (
    <div className="flex items-center gap-2">
      <span className="w-20 text-[10px] font-semibold text-foreground">{name}</span>
      <span className="w-12 text-[10px] text-muted-foreground">{rooms} rms</span>
      <span className="w-14 text-[10px] text-muted-foreground">{mpor} mpor</span>
      <div className="flex-1 overflow-hidden rounded-full bg-border/40">
        <div
          className={`h-1.5 rounded-full ${warn ? "bg-chart-4" : "bg-accent"}`}
          style={{ width: `${pct}%` }}
        />
      </div>
      {good && <Check className="h-3 w-3 text-success" />}
      {warn && <AlertTriangle className="h-3 w-3 text-chart-4" />}
    </div>
  );
}
