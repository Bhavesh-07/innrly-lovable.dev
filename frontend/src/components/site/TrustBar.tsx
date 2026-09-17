import { ShieldCheck, Lock, Building2, Activity } from "lucide-react";

const ITEMS = [
  { icon: ShieldCheck, label: "SOC 2 aligned" },
  { icon: Lock, label: "Bank-grade encryption" },
  { icon: Building2, label: "Trusted across hotel portfolios" },
  { icon: Activity, label: "99.9% uptime target" },
];

export function TrustBar() {
  return (
    <div className="border-y border-border/60 bg-surface/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-4 px-4 py-6 sm:grid-cols-4 sm:gap-6 sm:px-6 lg:px-8">
        {ITEMS.map((i) => (
          <div key={i.label} className="flex items-center gap-2.5">
            <i.icon className="h-4 w-4 shrink-0 text-accent" aria-hidden />
            <span className="text-xs font-medium text-muted-foreground sm:text-sm">{i.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
