# Analytics — Developer Handoff

This site fires every analytics event through a single helper at
`src/lib/analytics.ts`. To go live, configure ONE build-time env var:

```
VITE_ANALYTICS_ENDPOINT=https://YOUR-API.innrly.com/events
```

When unset:

- **dev** → events are `console.info`d, and `<DevAnalyticsBanner />` shows
  a visible blue warning at the top of the site.
- **prod** → events silently no-op (no banner, no console noise).

---

## Transport

`track()` uses `navigator.sendBeacon` (survives page unloads), falling back
to `fetch` with `keepalive: true`. Both POST `Content-Type: application/json`
to the endpoint above. **No retry** — analytics must never block the UI.

Your endpoint MUST respond with `2xx` quickly and allow CORS from the site
origin (`https://www.innrly.com` in prod, your preview domain in staging):

```
Access-Control-Allow-Origin: https://www.innrly.com
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

---

## Event catalog

Every event includes these fields automatically:

```ts
{
  event:    "<event name>",
  path:     "/blog/foo",      // pathname + search at fire time
  referrer: "https://...",    // document.referrer (optional)
  ts:       "2026-06-06T...", // ISO 8601
  ...payload                  // event-specific fields below
}
```

| Event               | Where it fires                             | Extra payload            |
| ------------------- | ------------------------------------------ | ------------------------ |
| `page_view`         | Every route change (AnalyticsProvider)     | —                        |
| `scroll_depth`      | 50% and 90% of page height (once per page) | `{ depth: 50 \| 90 }`    |
| `outbound_click`    | Any `<a>` to a different origin            | `{ href, host }`         |
| `form_submit`       | Lead-capture submits (lead-submit.ts)      | `{ source, ok, error? }` |
| `newsletter_signup` | Newsletter form submits                    | `{ subSource }`          |
| `cta_click`         | Primary CTA components (manually wired)    | `{ cta, location }`      |

---

## Swapping vendors

The endpoint is dumb — swap the receiver freely.

- **GA4 Measurement Protocol**: receive POST, forward to
  `https://www.google-analytics.com/mp/collect?api_secret=...&measurement_id=...`.
- **PostHog**: forward to `https://app.posthog.com/capture/` with `api_key`.
- **Plausible**: forward to `https://plausible.io/api/event` (server-side).
- **Custom**: write to your own warehouse (Snowflake/BigQuery/Postgres).

If you'd rather drop in a vendor's client-side snippet (GA4 gtag, PostHog
JS, etc.), do it in `src/routes/__root.tsx` `head().scripts` and leave
`VITE_ANALYTICS_ENDPOINT` unset — the helper becomes a no-op and your
vendor handles everything.

---

## Consent

`src/components/site/CookieConsent.tsx` already handles the EU/UK consent
banner. To gate analytics behind consent, read the consent value inside
`track()` and bail when the user has declined. The current setup fires
events regardless — confirm your privacy stance before going live in
GDPR/CCPA jurisdictions.

---

## Go-live checklist

- [ ] Set `VITE_ANALYTICS_ENDPOINT` in production build env.
- [ ] Verify CORS headers allow the production origin.
- [ ] Test in staging: open devtools Network tab and confirm POSTs to your
      endpoint on every page change.
- [ ] Confirm `DevAnalyticsBanner` disappears once the env var is set.
- [ ] Decide on consent gating (see above) and wire if required.
- [ ] Update the GitHub URL in `DevAnalyticsBanner.tsx` once the repo lives
      somewhere permanent.
