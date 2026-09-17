import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";
import { isLeadWebhookConfigured } from "@/lib/lead-submit";

/**
 * Loud, visible banner that appears at the top of the site whenever the
 * lead-capture backend URL is not configured. Visible in dev AND preview/
 * staging builds so the developer can't miss it. Hidden in production
 * builds (NODE_ENV === "production") even if unset — that's a config bug
 * we don't want shown to real visitors, but we want it screaming during
 * handoff.
 *
 * See docs/DEVELOPER_HANDOFF_LEADS.md
 */
export function DevLeadBanner() {
  const [dismissed, setDismissed] = useState(false);

  // Only render in dev / preview builds. PROD silently hides it.
  const isProd = import.meta.env.PROD && import.meta.env.MODE === "production";
  if (isProd) return null;

  if (isLeadWebhookConfigured()) return null;
  if (dismissed) return null;

  return (
    <div
      role="alert"
      className="relative z-50 border-b-2 border-amber-500/60 bg-amber-500/15 px-4 py-2.5 text-amber-100 backdrop-blur"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-3 sm:items-center">
        <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-amber-300 sm:mt-0" aria-hidden />
        <div className="flex-1 text-xs sm:text-sm">
          <strong className="font-semibold">Developer: lead capture is not wired up.</strong> Set{" "}
          <code className="rounded bg-black/40 px-1.5 py-0.5 font-mono text-[11px]">
            VITE_LEAD_WEBHOOK_URL
          </code>{" "}
          in your build env to point at your backend. Every form (contact, trial, newsletter) is
          currently dropping submissions.{" "}
          <a
            href="https://github.com/your-org/your-repo/blob/main/docs/DEVELOPER_HANDOFF_LEADS.md"
            className="underline underline-offset-2 hover:text-white"
          >
            Read the handoff doc →
          </a>
        </div>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="shrink-0 rounded p-1 text-amber-200 transition-colors hover:bg-amber-500/20 hover:text-white"
        >
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
