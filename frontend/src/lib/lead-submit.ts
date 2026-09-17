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

const RECAPTCHA_SITE_KEY = "6LcVJrkkAAAAABsSLGi1FDOjAtIyby9UNsBQPUCd";

export async function getRecaptchaToken(action: string = "lead_submit"): Promise<string | null> {
  if (typeof window === "undefined") return null;
  const grecaptcha = (window as unknown as { grecaptcha?: { ready: (cb: () => void) => void; execute: (key: string, opts: { action: string }) => Promise<string> } }).grecaptcha;
  if (!grecaptcha || typeof grecaptcha.execute !== "function") return null;

  return new Promise((resolve) => {
    try {
      grecaptcha.ready(() => {
        grecaptcha
          .execute(RECAPTCHA_SITE_KEY, { action })
          .then((token) => resolve(token))
          .catch(() => resolve(null));
      });
    } catch {
      resolve(null);
    }
  });
}

export async function submitLead(payload: LeadPayload): Promise<{ ok: boolean; error?: string }> {
  const url = import.meta.env.VITE_LEAD_WEBHOOK_URL as string | undefined;
  const isNewsletter = (payload as { kind?: string }).kind === "newsletter";

  // Fetch reCAPTCHA v3 token if available
  let recaptchaToken: string | null = null;
  try {
    recaptchaToken = await getRecaptchaToken(payload.source || (isNewsletter ? "newsletter" : "lead_submit"));
  } catch {
    // Fail-open for reCAPTCHA client errors to prevent blocking genuine user submissions
  }

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
      body: JSON.stringify({
        ...payload,
        recaptcha_token: recaptchaToken,
        submittedAt: new Date().toISOString()
      }),
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
