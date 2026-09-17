/* ════════════════════════════════════════════════════════════════════════════
 *  ⚠️  DEVELOPER: READ docs/DEVELOPER_HANDOFF_LEADS.md BEFORE GOING TO PROD
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  This file is the SINGLE network call for every lead-capture form on the
 *  Innrly marketing site:
 *    • Contact form         (src/routes/contact.tsx)
 *    • Onboarding / trial   (src/routes/onboarding.tsx)
 *    • Trial modal          (src/components/site/TrialModal.tsx)
 *    • Newsletter signup    (src/components/site/NewsletterSignup.tsx)
 *
 *  REQUIRED ENV VAR (build-time, Vite):
 *
 *      VITE_LEAD_WEBHOOK_URL=https://YOUR-API.innrly.com/leads
 *
 *  If unset:
 *    - dev   → payloads are console.info'd, forms "succeed"
 *    - prod  → forms silently no-op (see DevLeadBanner.tsx for visible warning)
 *
 *  Your endpoint receives a JSON POST with a `source` discriminator:
 *    "contact" | "onboarding" | "trial"
 *  Newsletter signups also carry `kind: "newsletter"` — route on that FIRST.
 *
 *  Full payload shapes, CORS requirements, and a go-live checklist live in:
 *      docs/DEVELOPER_HANDOFF_LEADS.md
 *
 * ════════════════════════════════════════════════════════════════════════════
 */
import { track } from "@/lib/analytics";

export type LeadPayload = Record<string, unknown> & {
  source: "contact" | "onboarding" | "trial";
};

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  const url = import.meta.env.VITE_LEAD_WEBHOOK_URL as string | undefined;
  const isNewsletter = (payload as { kind?: string }).kind === "newsletter";

  if (!url) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.warn(
        "[lead-submit] ⚠️ VITE_LEAD_WEBHOOK_URL is NOT set — lead is being DROPPED.\n" +
          "Set it in your build env to point at your backend.\n" +
          "See docs/DEVELOPER_HANDOFF_LEADS.md.\nPayload:",
        payload,
      );
    }
    track(isNewsletter ? "newsletter_signup" : "form_submit", {
      source: payload.source,
      ok: true,
      dropped: true,
    });
    return { ok: true };
  }

  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) {
      track(isNewsletter ? "newsletter_signup" : "form_submit", {
        source: payload.source,
        ok: false,
        status: res.status,
      });
      return { ok: false, error: `HTTP ${res.status}` };
    }
    track(isNewsletter ? "newsletter_signup" : "form_submit", { source: payload.source, ok: true });
    return { ok: true };
  } catch (e) {
    const error = e instanceof Error ? e.message : "network error";
    track(isNewsletter ? "newsletter_signup" : "form_submit", {
      source: payload.source,
      ok: false,
      error,
    });
    return { ok: false, error };
  }
}

/** True when no backend webhook is configured. Used by DevLeadBanner. */
export function isLeadWebhookConfigured(): boolean {
  return Boolean(import.meta.env.VITE_LEAD_WEBHOOK_URL);
}
