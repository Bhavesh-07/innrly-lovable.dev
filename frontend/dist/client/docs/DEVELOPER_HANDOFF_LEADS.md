# 🛠️ DEVELOPER HANDOFF — Lead Capture & Newsletter

> **READ THIS BEFORE GOING TO PRODUCTION.**
> The Innrly marketing site captures leads in 3 places. Right now they POST
> to a **single configurable webhook URL** (or no-op in dev if unset). Your
> job is to point that URL at your own server and persist the data.

---

## 1. The one variable you must set

| Env var                 | Where                             | Value                               |
| ----------------------- | --------------------------------- | ----------------------------------- |
| `VITE_LEAD_WEBHOOK_URL` | Build env (CI / hosting provider) | `https://YOUR-API.innrly.com/leads` |

This is a **build-time** variable (Vite). It is read at build time and baked
into the client bundle. Set it in your CI/hosting environment before
`bun run build`, **not** at runtime.

If unset:

- **dev**: payloads are logged to the browser console (`[lead-submit] …`).
- **prod**: forms silently "succeed" without sending anywhere. ⚠️ Don't ship like this.

Source of truth: [`src/lib/lead-submit.ts`](../src/lib/lead-submit.ts)

---

## 2. What your endpoint will receive

`POST {VITE_LEAD_WEBHOOK_URL}`
`Content-Type: application/json`

Every payload has a `source` discriminator. Branch on it:

### A. `source: "contact"` — Contact / sales form

From [`src/routes/contact.tsx`](../src/routes/contact.tsx)

```json
{
  "source": "contact",
  "name": "Jane Doe",
  "email": "jane@hotelgroup.com",
  "company": "Coastline Hotels",
  "phone": "+1 555 123 4567",
  "properties": "12",
  "message": "Looking to consolidate 12 select-service properties...",
  "submittedAt": "2026-06-06T14:23:11.000Z"
}
```

### B. `source: "onboarding"` — Onboarding / trial signup

From [`src/routes/onboarding.tsx`](../src/routes/onboarding.tsx)

```json
{
  "source": "onboarding",
  "name": "...",
  "email": "...",
  "company": "...",
  "role": "...",
  "phone": "...",
  "properties": "...",
  "pms": "Opera",
  "submittedAt": "..."
}
```

### C. `source: "trial"` — Trial modal (auto-opens once/session) AND newsletter

From [`src/components/site/TrialModal.tsx`](../src/components/site/TrialModal.tsx)
and [`src/components/site/NewsletterSignup.tsx`](../src/components/site/NewsletterSignup.tsx)

Trial modal:

```json
{
  "source": "trial",
  "name": "...",
  "email": "...",
  "company": "...",
  "role": "...",
  "phone": "...",
  "properties": "...",
  "pms": "Opera",
  "submittedAt": "..."
}
```

Newsletter signup (blog index + every blog post):

```json
{
  "source": "trial",
  "subSource": "blog-index", // or "blog-post:<slug>"
  "email": "you@hotelgroup.com",
  "kind": "newsletter",
  "submittedAt": "..."
}
```

> ⚠️ Newsletter uses `source: "trial"` for backwards compatibility but
> includes `"kind": "newsletter"`. **Route on `kind === "newsletter"` first**,
> then on `source`. Newsletter signups should go into your mailing list
> (Mailchimp / Brevo / etc.), NOT your sales pipeline.

---

## 3. What your server must do

Minimum viable handler:

```
POST /leads
1. Validate Content-Type === application/json
2. Validate required fields per source (use the schemas in
   src/components/site/TrialModal.tsx and src/routes/contact.tsx as reference —
   they already enforce client-side zod validation, but DO NOT trust the client)
3. Persist to your DB (leads table)
4. Route:
   - kind === "newsletter"       → add to mailing list provider
   - source === "contact"        → notify sales (Slack + email)
   - source === "onboarding"     → trigger onboarding workflow
   - source === "trial"          → notify sales + send confirmation email
5. Return 200 with { ok: true } (the client only checks res.ok)
6. CORS: allow your production marketing domain
```

### CORS headers your endpoint MUST return

```
Access-Control-Allow-Origin: https://innrly.com   (or your prod domain)
Access-Control-Allow-Methods: POST, OPTIONS
Access-Control-Allow-Headers: Content-Type
```

And handle the `OPTIONS` preflight.

### Anti-spam (recommended)

- Rate-limit by IP (e.g. 5 submissions / minute)
- Add a server-side honeypot or hCaptcha if abuse appears
- De-dupe by email within 24h for newsletter signups

---

## 4. Confirmation emails (your responsibility)

The site does **not** send any email itself. Suggested flow on your server:

| Trigger                             | Email to send                                                      |
| ----------------------------------- | ------------------------------------------------------------------ |
| `source: "contact"`                 | "Thanks for reaching out — sales will reply within 1 business day" |
| `source: "onboarding"` or `"trial"` | "Welcome — your dedicated onboarding specialist is…"               |
| `kind: "newsletter"`                | Double opt-in confirmation (GDPR/CASL)                             |

---

## 5. Checklist before going live

- [ ] `VITE_LEAD_WEBHOOK_URL` set in production build env
- [ ] Endpoint deployed, returns 200 on valid POST, 4xx on invalid
- [ ] CORS allows the marketing site's production origin
- [ ] DB table created (`leads`), all 3 sources persisting
- [ ] Newsletter signups routed to mailing list provider
- [ ] Sales notification wired (Slack/email)
- [ ] Confirmation emails configured for each source
- [ ] Rate limiting in place
- [ ] Tested end-to-end: contact form, onboarding, trial modal, newsletter (×2 placements)

---

## 6. Files to NOT touch (it'll just work once the env var is set)

- `src/lib/lead-submit.ts` — the only network call
- `src/components/site/TrialModal.tsx`
- `src/components/site/NewsletterSignup.tsx`
- `src/routes/contact.tsx`
- `src/routes/onboarding.tsx`

If you want to swap to a different transport (e.g. direct DB write via auth'd
API instead of webhook), edit ONLY `src/lib/lead-submit.ts` — every form
flows through it.

---

**Questions?** Search the codebase for `LEAD_WEBHOOK` and `submitLead` —
both lead back here.
