import { useEffect, useState } from "react";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { openTrialModal } from "./TrialModal";
import { track } from "@/lib/analytics";

/**
 * Spotlight card shown on a module's solution page that tells the visitor
 * this module is reachable via the 90-day trial. Dismissible per session
 * per module so it isn't annoying on repeat visits.
 */
export function ModuleSpotlightCard({
  moduleKey,
  moduleName,
  pricing,
  blurb,
}: {
  moduleKey: "shift" | "pay";
  moduleName: string;
  pricing: "included" | "addon";
  blurb: string;
}) {
  const storageKey = `innrly_module_spotlight_dismissed:${moduleKey}`;
  const [dismissed, setDismissed] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    setDismissed(Boolean(sessionStorage.getItem(storageKey)));
  }, [storageKey]);

  if (dismissed) return null;

  const dismiss = () => {
    if (typeof window !== "undefined") sessionStorage.setItem(storageKey, "1");
    setDismissed(true);
  };

  const badge =
    pricing === "included"
      ? { label: "Included in 90-day trial", tone: "bg-success/15 text-success border-success/30" }
      : { label: "Available as add-on", tone: "bg-accent/15 text-accent border-accent/30" };

  return (
    <div className="mx-auto mt-6 max-w-6xl px-4 sm:px-6">
      <div className="relative overflow-hidden rounded-2xl border border-accent/30 bg-card/95 p-5 shadow-elevated sm:p-6">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <div className="flex flex-col gap-4 pr-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-accent">
                <Sparkles className="h-3 w-3" /> New
              </span>
              <span
                className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${badge.tone}`}
              >
                {badge.label}
              </span>
            </div>
            <p className="mt-2 text-base font-semibold text-foreground sm:text-lg">
              {moduleName}{" "}
              {pricing === "included"
                ? "ships with your 90-day trial."
                : "is available as a paid add-on."}
            </p>
            <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
          </div>
          <button
            type="button"
            onClick={() => {
              track("cta_click", { cta: "open_trial", location: `module_spotlight_${moduleKey}` });
              openTrialModal();
            }}
            className="inline-flex shrink-0 items-center justify-center gap-1.5 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95"
          >
            Start 90-day trial <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
