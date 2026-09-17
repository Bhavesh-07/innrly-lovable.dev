import { CreditCard, Mail, Check, Send } from "lucide-react";

/**
 * InnrlyPayCheckRun — stylized in-product artifact for the Innrly Pay page.
 * Shows the A/P clerk's afternoon: invoice inbox → approval row → Virtual Card payment.
 */
export function InnrlyPayCheckRun() {
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
            Innrly Pay · A/P queue · 2:14 PM
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
          {/* Left: Invoice inbox */}
          <div className="col-span-2 rounded-xl border border-border/60 bg-surface/60 p-3">
            <div className="flex items-center gap-2 border-b border-border/40 pb-2">
              <Mail className="h-3.5 w-3.5 text-accent" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                Inbox · auto-captured
              </span>
            </div>
            <div className="mt-2 space-y-1.5">
              <InvoiceRow vendor="Ecolab" amount="$2,418" prop="AUS-03" status="coded" />
              <InvoiceRow vendor="Sysco" amount="$5,940" prop="DAL-12" status="approval" />
              <InvoiceRow vendor="HD Supply" amount="$1,127" prop="HOU-01" status="coded" />
              <InvoiceRow vendor="Reliant Energy" amount="$8,412" prop="DAL-12" status="paid" />
            </div>
            <div className="mt-3 rounded-lg border border-accent/30 bg-accent/5 p-2">
              <div className="text-[9px] font-bold uppercase tracking-wider text-accent">
                Vendor memory
              </div>
              <div className="mt-0.5 text-[11px] font-semibold text-foreground">
                Sysco · GL 5120 · pre-coded
              </div>
            </div>
          </div>

          {/* Right: Approval + Pay panel */}
          <div className="col-span-3 space-y-3">
            <div className="rounded-xl border border-accent/40 bg-surface/60 p-3">
              <div className="flex items-center gap-2 border-b border-border/40 pb-2">
                <Check className="h-3.5 w-3.5 text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                  Review · Approve · Pay
                </span>
                <span className="ml-auto text-[9px] font-semibold text-accent">Sysco · $5,940</span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2 text-[11px]">
                <Field label="Property" value="DAL-12" />
                <Field label="GL Code" value="5120 · F&B Cost" />
                <Field label="Approver" value="J. Patel · Controller" />
                <Field label="Due" value="Net 15 · Oct 22" />
              </div>
              <div className="mt-3 flex items-center justify-between rounded-lg bg-accent/10 p-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-accent">
                  Approved · 2:11 PM
                </span>
                <span className="text-[10px] font-semibold text-foreground">2 clicks</span>
              </div>
            </div>

            {/* Pay rail */}
            <div className="grid grid-cols-2 gap-3">
              <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
                <div className="flex items-center gap-2">
                  <CreditCard className="h-3.5 w-3.5 text-accent" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Virtual Card
                  </span>
                </div>
                <div className="mt-2 rounded-md bg-gradient-to-br from-accent/30 to-accent/10 p-2">
                  <div className="text-[9px] text-muted-foreground">Sysco · single-use</div>
                  <div className="mt-1 font-mono text-[10px] tracking-wider text-foreground">
                    •••• •••• •••• 5940
                  </div>
                </div>
                <div className="mt-2 text-[9px] text-success">+ 1.2% rebate</div>
              </div>

              <div className="rounded-xl border border-border/60 bg-surface/60 p-3">
                <div className="flex items-center gap-2">
                  <Send className="h-3.5 w-3.5 text-success" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                    Settlement
                  </span>
                </div>
                <div className="mt-2 space-y-1 text-[10px]">
                  <SettleRow label="Sent to vendor" done />
                  <SettleRow label="QuickBooks posted" done />
                  <SettleRow label="GL reconciled" done />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating ribbon */}
      <div className="absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block">
        <div className="text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
          Friday check run
        </div>
        <div className="text-lg font-bold text-foreground">Done by 2 PM</div>
      </div>
    </div>
  );
}

function InvoiceRow({
  vendor,
  amount,
  prop,
  status,
}: {
  vendor: string;
  amount: string;
  prop: string;
  status: "coded" | "approval" | "paid";
}) {
  const tone =
    status === "paid"
      ? "text-success"
      : status === "approval"
        ? "text-accent"
        : "text-muted-foreground";
  const label = status === "paid" ? "Paid" : status === "approval" ? "Approve" : "Coded";
  return (
    <div className="flex items-center justify-between rounded px-1.5 py-1 hover:bg-background/40">
      <div className="min-w-0">
        <div className="truncate text-[11px] font-semibold text-foreground">{vendor}</div>
        <div className="text-[9px] text-muted-foreground">{prop}</div>
      </div>
      <div className="flex items-center gap-2">
        <span className="text-[11px] font-bold text-foreground">{amount}</span>
        <span
          className={`rounded-full bg-background/60 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider ${tone}`}
        >
          {label}
        </span>
      </div>
    </div>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border/40 bg-background/40 p-2">
      <div className="text-[8px] font-bold uppercase tracking-wider text-muted-foreground">
        {label}
      </div>
      <div className="mt-0.5 text-[11px] font-semibold text-foreground">{value}</div>
    </div>
  );
}

function SettleRow({ label, done }: { label: string; done?: boolean }) {
  return (
    <div className="flex items-center gap-1.5">
      <Check className={`h-3 w-3 ${done ? "text-success" : "text-muted-foreground"}`} />
      <span className="text-[10px] text-foreground">{label}</span>
    </div>
  );
}
