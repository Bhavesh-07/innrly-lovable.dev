import { Fingerprint, Clock, Users, AlertTriangle } from "lucide-react";

/**
 * InnrlyShiftSnapshot — stylized in-product artifact for the Innrly Shift page.
 * Shows the GM's 5-minute morning labor view: KPI strip + Face-ID punch log +
 * housekeeping MPOR matrix + OT guardrail alert.
 */
export function InnrlyShiftSnapshot() {
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
            Innrly Shift · GM view · 8:02 AM
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            LIVE
          </div>
        </div>

        <div className="space-y-3 p-4">
          {/* KPI strip */}
          <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
            <div className="flex items-center gap-2 border-b border-border/40 pb-2">
              <Clock className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                5-min snapshot · 110 rooms
              </span>
              <span className="ml-auto text-[9px] text-muted-foreground">refreshed 7:58 AM</span>
            </div>
            <div className="mt-2 grid grid-cols-4 gap-2">
              <Kpi label="Labor %" value="28.4%" delta="-1.6" good />
              <Kpi label="MPOR" value="24.2" delta="+0.4" good />
              <Kpi label="Hrs vs fcst" value="-3.5" delta="under" good />
              <Kpi label="OT risk" value="2" delta="watch" warn />
            </div>
          </div>

          <div className="grid grid-cols-5 gap-3">
            {/* Face-ID punches */}
            <div className="col-span-2 rounded-xl border border-border/60 bg-surface/60 p-3">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                <Fingerprint className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Face-ID punches
                </span>
              </div>
              <div className="mt-2 space-y-1.5">
                <Punch name="M. Garcia" role="HK" time="7:02" ok />
                <Punch name="J. Tran" role="FD" time="7:00" ok />
                <Punch name="R. Lee" role="HK" time="7:14" warn />
                <Punch name="A. Singh" role="MX" time="7:06" ok />
              </div>
              <div className="mt-2 flex items-center justify-between rounded-md bg-chart-4/10 px-2 py-1">
                <span className="text-[9px] font-bold uppercase tracking-wider text-chart-4">
                  OT flag
                </span>
                <span className="text-[10px] font-semibold text-foreground">
                  R. Lee · 38.5 / 40
                </span>
              </div>
            </div>

            {/* Housekeeping matrix */}
            <div className="col-span-3 rounded-xl border border-border/60 bg-surface/60 p-3">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                <Users className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Housekeeping · rooms / shift
                </span>
                <span className="ml-auto text-[9px] text-muted-foreground">std 16</span>
              </div>
              <div className="mt-2 space-y-1.5">
                <MporRow name="M. Garcia" rooms={18} pct={113} />
                <MporRow name="R. Lee" rooms={17} pct={106} />
                <MporRow name="T. Phan" rooms={14} pct={88} warn />
                <MporRow name="L. Ortiz" rooms={16} pct={100} />
                <MporRow name="K. Brown" rooms={19} pct={119} best />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating ribbon */}
      <div className="absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block">
        <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Whole hotel labor
        </div>
        <div className="text-lg font-bold text-foreground">5 minutes flat</div>
      </div>
    </div>
  );
}

function Kpi({
  label,
  value,
  delta,
  good,
  warn,
}: {
  label: string;
  value: string;
  delta: string;
  good?: boolean;
  warn?: boolean;
}) {
  const tone = warn ? "text-chart-4" : good ? "text-success" : "text-muted-foreground";
  return (
    <div className="rounded-lg border border-border/40 bg-background/40 p-2">
      <div className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 flex items-baseline gap-1">
        <span className="text-base font-bold text-foreground">{value}</span>
        <span className={`text-[9px] font-semibold ${tone}`}>{delta}</span>
      </div>
    </div>
  );
}

function Punch({
  name,
  role,
  time,
  ok,
  warn,
}: {
  name: string;
  role: string;
  time: string;
  ok?: boolean;
  warn?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${warn ? "bg-chart-4" : "bg-success"}`} />
        <span className="text-[11px] font-semibold text-foreground">{name}</span>
        <span className="text-[9px] text-muted-foreground">{role}</span>
      </div>
      <div className="flex items-center gap-1">
        {warn && <AlertTriangle className="h-3 w-3 text-chart-4" />}
        <span className="text-[10px] font-mono text-foreground">{time}</span>
      </div>
    </div>
  );
}

function MporRow({
  name,
  rooms,
  pct,
  warn,
  best,
}: {
  name: string;
  rooms: number;
  pct: number;
  warn?: boolean;
  best?: boolean;
}) {
  const tone = warn ? "bg-chart-4" : best ? "bg-success" : "bg-accent";
  const pctTone = warn ? "text-chart-4" : best ? "text-success" : "text-foreground";
  return (
    <div className="flex items-center gap-2">
      <span className="w-16 truncate text-[10px] font-semibold text-foreground">{name}</span>
      <div className="flex-1 h-2 overflow-hidden rounded-full bg-background/60">
        <div className={`h-full ${tone}`} style={{ width: `${Math.min(pct, 130) / 1.3}%` }} />
      </div>
      <span className="w-8 text-right text-[10px] font-bold text-foreground">{rooms}</span>
      <span className={`w-10 text-right text-[10px] font-semibold ${pctTone}`}>{pct}%</span>
    </div>
  );
}
