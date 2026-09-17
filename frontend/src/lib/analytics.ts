/* ════════════════════════════════════════════════════════════════════════════
 *  ⚠️  DEVELOPER: READ docs/DEVELOPER_HANDOFF_ANALYTICS.md BEFORE GOING TO PROD
 * ════════════════════════════════════════════════════════════════════════════
 *
 *  Single, provider-agnostic analytics surface for the Innrly marketing site.
 *  Every site event funnels through `track()`. Wire your backend / vendor by
 *  setting ONE env var:
 *
 *      VITE_ANALYTICS_ENDPOINT=https://YOUR-API.innrly.com/events
 *
 *  Events fired today:
 *    • page_view         — every route change
 *    • cta_click         — primary CTAs ("See it live", "Book a demo", etc.)
 *    • form_submit       — lead-capture form submissions (contact/trial/newsletter)
 *    • scroll_depth      — 50% and 90% of page height (once per page)
 *    • outbound_click    — clicks on external links
 *    • newsletter_signup — newsletter form submissions
 *
 *  If `VITE_ANALYTICS_ENDPOINT` is unset:
 *    - dev   → events are console.info'd (and DevAnalyticsBanner shows)
 *    - prod  → events silently no-op
 *
 *  Full payload shapes, vendor swap guides (GA4/PostHog/Plausible/custom),
 *  CORS requirements, and consent integration live in:
 *      docs/DEVELOPER_HANDOFF_ANALYTICS.md
 *
 * ════════════════════════════════════════════════════════════════════════════
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

export const GA_MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID || "G-TJZT02L07P";

export type AnalyticsEvent = string;

export type AnalyticsPayload = Record<string, unknown>;

export function isAnalyticsConfigured(): boolean {
  return Boolean(import.meta.env.VITE_ANALYTICS_ENDPOINT || GA_MEASUREMENT_ID);
}

export function track(event: AnalyticsEvent, payload: AnalyticsPayload = {}) {
  if (typeof window === "undefined") return;

  // Forward to Google Analytics 4 if available
  if (typeof window.gtag === "function") {
    try {
      window.gtag("event", event, payload);
    } catch {
      /* swallow */
    }
  }

  const body = {
    event,
    ...payload,
    path: window.location.pathname + window.location.search,
    referrer: document.referrer || undefined,
    ts: new Date().toISOString(),
  };

  const url = import.meta.env.VITE_ANALYTICS_ENDPOINT as string | undefined;
  if (!url) {
    if (import.meta.env.DEV) {
      // eslint-disable-next-line no-console
      console.info("[analytics]", event, body);
    }
    return;
  }

  try {
    const blob = new Blob([JSON.stringify(body)], { type: "application/json" });
    // sendBeacon survives page unloads; falls back to fetch when unavailable.
    if (navigator.sendBeacon?.(url, blob)) return;
    void fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true,
    });
  } catch {
    /* swallow — analytics must never break the page */
  }
}

export function trackPageView(path: string) {
  if (typeof window !== "undefined" && typeof window.gtag === "function") {
    try {
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
      });
      window.gtag("event", "page_view", {
        page_path: path,
        page_location: window.location.href,
        page_title: document.title,
      });
    } catch {
      /* swallow */
    }
  }
  track("page_view", { path });
}

