import { Moon, FileCheck2, Sun, Inbox } from "lucide-react";

/**
 * OpsNightPack — stylized in-product artifact for the Operations Automation page.
 * Shows the overnight timeline: midnight audit → 2 AM recs → 6 AM exception queue.
 */
export function OpsNightPack() {
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
            Night Audit+ · 6 properties · 6:04 AM
          </div>
          <div className="ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-success" />
            </span>
            COMPLETE
          </div>
        </div>

        <div className="space-y-3 p-4">
          {/* Timeline */}
          <div className="relative overflow-hidden rounded-xl border border-border/60 bg-surface/60 p-3">
            <div className="flex items-center justify-between">
              <div className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Overnight pipeline · 6 properties
              </div>
              <div className="text-[9px] font-mono text-accent">9 PM → 6 AM</div>
            </div>

            {/* Sweep beam */}
            <div className="ba-scan pointer-events-none absolute inset-y-0 w-1.5 bg-gradient-to-b from-transparent via-accent/60 to-transparent shadow-[0_0_18px_4px_color-mix(in_oklab,var(--accent)_55%,transparent)]" />

            <div className="mt-3 grid grid-cols-4 gap-2">
              <TimelineStep icon={Moon} label="00:14" body="Audit kicked off" delay="0s" />
              <TimelineStep icon={FileCheck2} label="02:08" body="Recs · OTA · Bank" delay="0.9s" />
              <TimelineStep icon={Inbox} label="04:22" body="Invoices OCR'd" delay="1.8s" />
              <TimelineStep icon={Sun} label="06:00" body="Queue ready" delay="2.7s" current />
            </div>
          </div>

          {/* Properties grid + exceptions */}
          <div className="grid grid-cols-5 gap-3">
            {/* Property packs */}
            <div className="col-span-2 rounded-xl border border-border/60 bg-surface/60 p-3">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                <FileCheck2 className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Night packs · 6 of 6
                </span>
              </div>
              <div className="mt-2 space-y-1.5">
                <PackRow prop="AUS-03" status="filed" delay="0.2s" />
                <PackRow prop="DAL-12" status="filed" delay="0.5s" />
                <PackRow prop="HOU-01" status="variance" delay="0.8s" />
                <PackRow prop="SAT-04" status="filed" delay="1.1s" />
                <PackRow prop="ATX-09" status="filed" delay="1.4s" />
                <PackRow prop="FTW-02" status="filed" delay="1.7s" />
              </div>
            </div>

            {/* Exception queue */}
            <div className="col-span-3 rounded-xl border border-accent/40 bg-surface/60 p-3">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                <Inbox className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  AGM exception queue · 3 items
                </span>
                <span className="ml-auto text-[9px] font-semibold text-accent">$1,847 at risk</span>
              </div>
              <div className="mt-2 space-y-1.5">
                <ExceptionRow
                  prop="HOU-01"
                  type="Cash drawer"
                  amount="-$214"
                  tone="bad"
                  delay="2.2s"
                />
                <ExceptionRow
                  prop="DAL-12"
                  type="OTA short-pay"
                  amount="-$1,118"
                  tone="bad"
                  delay="2.6s"
                />
                <ExceptionRow
                  prop="AUS-03"
                  type="Comp threshold"
                  amount="$515"
                  tone="warn"
                  delay="3.0s"
                />
              </div>
              <div
                className="ba-slide-in mt-2 rounded-md bg-accent/10 p-2 opacity-0"
                style={{ animationDelay: "3.4s" }}
              >
                <div className="text-[9px] font-bold uppercase tracking-wider text-accent">
                  Filed to vault
                </div>
                <div className="mt-0.5 text-[11px] font-semibold text-foreground">
                  Oct 18 · 42 docs · 6 properties
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block">
        <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          The 4 AM grind
        </div>
        <div className="text-lg font-bold text-foreground">Already done</div>
      </div>
    </div>
  );
}

function TimelineStep({
  icon: Icon,
  label,
  body,
  delay,
  current,
}: {
  icon: typeof Moon;
  label: string;
  body: string;
  delay: string;
  current?: boolean;
}) {
  return (
    <div
      className={`ba-slide-from-left rounded-lg border p-2 opacity-0 ${current ? "border-accent/60 bg-accent/10" : "border-success/40 bg-success/5"}`}
      style={{ animationDelay: delay }}
    >
      <div className="flex items-center gap-1.5">
        <Icon className={`h-3 w-3 ${current ? "text-accent" : "text-success"}`} />
        <span className="font-mono text-[10px] font-bold text-foreground">{label}</span>
      </div>
      <div className="mt-1 text-[10px] text-muted-foreground">{body}</div>
    </div>
  );
}

function PackRow({
  prop,
  status,
  delay,
}: {
  prop: string;
  status: "filed" | "variance";
  delay: string;
}) {
  const variance = status === "variance";
  return (
    <div
      className="ba-slide-from-left flex items-center justify-between rounded px-1.5 py-0.5 opacity-0"
      style={{ animationDelay: delay }}
    >
      <span className="font-mono text-[10px] font-semibold text-foreground">{prop}</span>
      <span
        className={`rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider ${variance ? "bg-chart-4/15 text-chart-4" : "bg-success/15 text-success"}`}
      >
        {variance ? "Variance" : "Filed"}
      </span>
    </div>
  );
}

function ExceptionRow({
  prop,
  type,
  amount,
  tone,
  delay,
}: {
  prop: string;
  type: string;
  amount: string;
  tone: "bad" | "warn";
  delay: string;
}) {
  const color = tone === "bad" ? "text-destructive" : "text-chart-4";
  return (
    <div
      className="ba-slide-in flex items-center justify-between rounded border border-border/40 bg-background/40 px-2 py-1.5 opacity-0"
      style={{ animationDelay: delay }}
    >
      <div>
        <div className="font-mono text-[10px] font-bold text-foreground">{prop}</div>
        <div className="text-[10px] text-muted-foreground">{type}</div>
      </div>
      <span className={`text-[12px] font-bold ${color}`}>{amount}</span>
    </div>
  );
}
