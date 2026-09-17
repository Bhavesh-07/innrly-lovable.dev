import { useState } from "react";
import { BarChart3, X } from "lucide-react";
import { isAnalyticsConfigured } from "@/lib/analytics";

/**
 * Visible warning shown in dev/preview when VITE_ANALYTICS_ENDPOINT is unset.
 * Hidden in production builds. See docs/DEVELOPER_HANDOFF_ANALYTICS.md
 */
export function DevAnalyticsBanner() {
  const [dismissed, setDismissed] = useState(false);

  const isProd = import.meta.env.PROD && import.meta.env.MODE === "production";
  if (isProd) return null;
  if (isAnalyticsConfigured()) return null;
  if (dismissed) return null;

  return (
    <div
      role="status"
      className="relative z-50 border-b border-sky-500/40 bg-sky-500/10 px-4 py-2 text-sky-100 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-3 sm:items-center">
        <BarChart3 className="mt-0.5 h-4 w-4 shrink-0 text-sky-300 sm:mt-0" aria-hidden />
        <div className="flex-1 text-xs sm:text-sm">
          <strong className="font-semibold">Developer: analytics is not wired up.</strong> Set{" "}
          <code className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-[11px]">
            VITE_ANALYTICS_ENDPOINT
          </code>{" "}
          to your events endpoint (GA4 / PostHog / Plausible / custom). Events are being logged to
          the console only.{" "}
          <a
            href="/docs/DEVELOPER_HANDOFF_ANALYTICS.md"
            className="underline underline-offset-2 hover:text-white"
          >
            Read the handoff doc →
          </a>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="shrink-0 rounded p-1 text-sky-200 transition-colors hover:bg-sky-500/20 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
