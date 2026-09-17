import { Globe2, Check, AlertTriangle } from "lucide-react";

/**
 * OTAReconcileEvidence — workflow artifact for the Reconciliation page.
 * A focused 3-line OTA statement vs PMS folio comparison with a recovered-$ chip.
 * Intentionally distinct from ReconciliationFlow (used in the before/after slot).
 */
export function OTAReconcileEvidence() {
  return (
    <div className="relative">
      <div className="absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl" aria-hidden />

      <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated">
        <div className="flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3">
          <Globe2 className="h-3.5 w-3.5 text-accent" />
          <span className="text-xs font-medium text-muted-foreground">
            OTA commission audit · Expedia · Oct
          </span>
          <span className="ml-auto rounded-full bg-success/15 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-success">
            $1,842 recovered
          </span>
        </div>

        <div className="p-4">
          <div className="grid grid-cols-[1fr_auto_1fr_auto] gap-x-3 gap-y-1.5 text-[11px]">
            <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
              PMS folio
            </span>
            <span />
            <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
              OTA statement
            </span>
            <span className="text-[9px] font-bold uppercase tracking-wider text-muted-foreground">
              Δ
            </span>

            <Row pms="Res #88210 · $412.00" ota="$412.00 · 18% · $74.16" delta="ok" />
            <Row
              pms="Res #88234 · $268.00"
              ota="$268.00 · 25% · $67.00"
              delta="over"
              deltaText="+7% comm"
            />
            <Row
              pms="Res #88251 · cxl no-show"
              ota="$340.00 · 18% · $61.20"
              delta="bad"
              deltaText="charged on cxl"
            />
          </div>

          <div className="mt-3 flex items-center justify-between rounded-lg bg-accent/10 px-3 py-2">
            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-accent">
              <Check className="h-3 w-3" /> Dispute drafted · routed to GM
            </span>
            <span className="text-[10px] font-semibold text-foreground">
              2 lines · auto-attached
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Row({
  pms,
  ota,
  delta,
  deltaText,
}: {
  pms: string;
  ota: string;
  delta: "ok" | "over" | "bad";
  deltaText?: string;
}) {
  const Icon = delta === "ok" ? Check : AlertTriangle;
  const tone =
    delta === "ok" ? "text-success" : delta === "over" ? "text-chart-4" : "text-destructive";
  return (
    <>
      <span className="truncate text-foreground">{pms}</span>
      <span className="text-muted-foreground">→</span>
      <span className="truncate text-foreground">{ota}</span>
      <span className={`flex items-center gap-1 text-[9px] font-bold ${tone}`}>
        <Icon className="h-3 w-3" />
        {deltaText ?? "match"}
      </span>
    </>
  );
}
