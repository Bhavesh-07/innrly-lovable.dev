# Content & Swap-Point Handoff

**Last reviewed: 2026-06-06** — engineering is launch-complete. Every open
item below is a **business / legal / data owner** task, NOT an engineering
blocker. The site is safe to publish as-is.

This document is the **single source of truth** for everything in the site
that's currently anonymized, templated, or awaiting real production data.
Every item below is safe to ship as-is (no "[PLACEHOLDER]" brackets are
visible to visitors) but should be swapped before/after launch as the
information becomes available.

Items are grouped by urgency, then by file. Each entry lists what's there
now, what to replace it with, and exactly where it lives.

---

## What shipped on 2026-06-06 (engineering complete)

- `/integrations/m3` — officially-certified M3 partner page (push-only invoice flow). Replaces the old `/compare/innrly-vs-m3`, which now 301-redirects here (route + server `GET` handler in `src/routes/compare.innrly-vs-m3.tsx`).
- `/integrations/inn-flow` — Inn-Flow partner page (integration on roadmap, positioned as partner GL, not competitor).
- `/blog/best-hotel-accounting-software` — 2026 buyer's guide. Internal-links to all 6 active comparison pages + the 2 partner integration pages.
- Sitemap updated; `/compare/innrly-vs-m3` removed from sitemap (kept as redirect route only).
- Active head-to-head comparisons: **6** (Otelier, Aptech, Nimble, ProfitSage, QuickBooks, Actabl). M3 and Inn-Flow are partners, not competitors.

---

## 🔴 P0 — Swap before public launch

These will affect credibility, SEO, or legal exposure if shipped to a
public audience as-is.

### 1. Founder portrait

- **File**: `src/routes/about.tsx` (~line 142)
- **Current**: Generic `<User />` Lucide icon in a 64px circle
- **Replace with**: Vimal Patel's portrait photo (square, ≥256×256, JPG)
- **How**: Add `src/assets/team/vimal.jpg`, import it, swap the icon
  inside the `<div className="h-16 w-16 ...">` for an `<img>` with
  `alt="Vimal Patel, Founder of Innrly"`.

### 2. Legal — Terms of Service

- **File**: `src/routes/legal.terms.tsx`
- **Current**: Generic SaaS template ending in "Last updated: June 2026.
  For the binding contract terms… refer to your signed Master Subscription
  Agreement or contact legal@innrly.com."
- **Replace with**: Final Terms reviewed by counsel. Update the
  "Last updated" date.
- **Owner**: Legal counsel

### 3. Legal — Cookie Policy

- **File**: `src/routes/legal.cookies.tsx`
- **Current**: Generic template, "Last updated: June 2026"
- **Replace with**: Finalized cookie policy covering the actual analytics
  - consent stack chosen (see `DEVELOPER_HANDOFF_ANALYTICS.md`)
- **Owner**: Legal + DPO

### 4. Legal — Privacy Policy subprocessor list

- **File**: `src/routes/legal.privacy.tsx` (~lines 180-194)
- **Current**: Example subprocessors listed with "e.g. Resend / SendGrid,
  Twilio, Stripe, GA4, PostHog"
- **Replace with**: The actual subprocessors you use, with country of
  processing per GDPR Art. 28
- **Owner**: Legal + DPO

### 5. Legal email address

- **Used in**: `src/routes/legal.terms.tsx` (`legal@innrly.com`)
- **Current**: `legal@innrly.com` — make sure this mailbox exists and is
  monitored, or change to whatever address you'll actually use.

### 6. Make sure these mailboxes work

- `sales@innrly.com` — `src/routes/contact.tsx:241`
- `security@innrly.com` — `src/routes/legal.security.tsx`, `src/routes/security.tsx`
- `privacy@innrly.com` — `src/routes/legal.privacy.tsx` (×5)
- `legal@innrly.com` — `src/routes/legal.terms.tsx` (new)

---

## 🟡 P1 — Swap as real data arrives

These are anonymized but credible. Ship-safe. Swap when you have signed
permission to use real names / logos / numbers.

### 7. Home page testimonials

- **File**: `src/routes/index.tsx` (~lines 165-180)
- **Current**: Anonymized by role + portfolio shape, e.g. "VP of
  Operations · Multi-brand management company · 12 hotels · select-service"
- **Replace with**: Real attributed quotes — keep the same object shape:
  ```ts
  { quote: "...", name: "Real Person Name", title: "Real Title",
    company: "Real Company · N hotels · segment" }
  ```
- **Section description** (~line 476) also currently reads "Anonymized to
  protect operator portfolios. Logos and attributed quotes available
  under NDA." — swap to something like "Real operators. Real numbers."
  once you have attribution.

### 8. Site-wide Testimonials component

- **File**: `src/components/site/Testimonials.tsx` (~lines 8-27)
- **Used on**: pricing, industries (extended-stay, full-service,
  select-service), and anywhere `<Testimonials />` is mounted
- **Current**: 3 anonymized testimonials by role + portfolio shape
- **Replace with**: Real attributed quotes. Same object shape as #7.

### 9. Home page JSON-LD review schema

- **File**: `src/routes/index.tsx` (~lines 36-54)
- **Current**: `aggregateRating` is intentionally **omitted**. A previous
  draft had `ratingValue: "4.8", reviewCount: "127"` — Google penalizes
  unverified review schema.
- **Re-add when**: You have a real review source (G2, Capterra, or your
  own structured review collection). Inside the SoftwareApplication
  block, add:
  ```ts
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "<real average>",
    reviewCount: "<real count>"
  }
  ```

### 10. Hardcoded "200+ hotels" stat

- **Used in**: 6 places, all displaying the same claim:
  - `src/routes/index.tsx:32` (og:image:alt)
  - `src/routes/index.tsx:143` (ProofBand stat)
  - `src/routes/industries.full-service.tsx:93`
  - `src/routes/industries.select-service.tsx:92`
  - `src/components/site/TrialModal.tsx:151` ("200+ hotels · 17,000+ rooms · 3,000+ employees")
  - `src/components/site/ProofBand.tsx:13`
- **Replace with**: Your live hotel count. The 200+ figure plus "17,000+
  rooms · 3,000+ employees" in the trial modal should all stay in sync
  — update all six places together.

### 11. Customer logo strip

- **File**: `src/components/site/LogosStrip.tsx`
- **Current**: Lists PMS / accounting / TimeClock brand logos as
  _integrations_ (which is factual — not customer logos). No fix needed
  unless you want to add a real **customer** logo strip elsewhere.
- **Optional**: Add a separate `<CustomerLogos />` section once you have
  signed permission to use customer brand marks.

### 12. Case study attribution

- **Files**: `src/routes/case-studies.*.tsx` (5 files)
- **Current**: Already anonymized by portfolio shape (e.g. "Hilton
  Management Company", "Midwest Portfolio", "Boutique Group"). All stats
  (`5–15 hrs saved`, `$140K+ OTA recovered`, etc.) presented as
  ranges/typicals.
- **Replace with**: Real named studies once you have signed customer
  permission. The `breadcrumb` `name` field is the easiest swap point.
- **Stats to verify**: every `STATS` array (~line 50 of each file).
  Currently realistic but unsourced.

### 13. Webhook sample URL

- **File**: `src/routes/developers.tsx` (~line 63)
- **Current**: `POST https://your-app.example.com/innrly` in a code
  sample — this is **correct** placeholder usage (it's documentation
  showing where the customer puts their own URL). No action needed
  unless you want to use a more branded example like
  `https://api.yourcompany.com/webhooks/innrly`.

---

## 🟢 P2 — Operational / dev-only (not user-visible)

### 14. Lead webhook URL

- **Env var**: `VITE_LEAD_WEBHOOK_URL`
- **Doc**: `docs/DEVELOPER_HANDOFF_LEADS.md` (full payload shapes &
  go-live checklist)
- **Banner**: `src/components/site/DevLeadBanner.tsx` shows an amber
  warning in dev/preview when unset. Hidden in production.

### 15. Analytics endpoint

- **Env var**: `VITE_ANALYTICS_ENDPOINT`
- **Doc**: `docs/DEVELOPER_HANDOFF_ANALYTICS.md`
- **Banner**: `src/components/site/DevAnalyticsBanner.tsx` shows a blue
  warning in dev/preview when unset. Hidden in production.

### 16. Onboarding API

- **File**: `src/routes/onboarding.tsx` (~line 312)
- **Current**: `// TODO: wire to internal API endpoint`
- **Action**: The onboarding form currently routes through `submitLead`
  with `source: "onboarding"`. If you want a separate internal API
  endpoint (e.g. to provision tenants automatically), wire it here.

### 17. GitHub repo URLs in dev banners

- **Files**: `src/components/site/DevLeadBanner.tsx:38`,
  `src/components/site/DevAnalyticsBanner.tsx`
- **Current**: `https://github.com/your-org/your-repo/...`
- **Replace with**: Real repo URL once the project lives somewhere
  permanent.

### 18. Organization JSON-LD `sameAs`

- **File**: `src/routes/__root.tsx` (~line 144)
- **Current**: `sameAs: []` (empty)
- **Replace with**: Public profile URLs for Innrly — LinkedIn company
  page, X/Twitter handle, YouTube, Capterra/G2 listings, Crunchbase.
  Helps Google build the Knowledge Graph entry. Example:
  ```ts
  sameAs: [
    "https://www.linkedin.com/company/innrly",
    "https://x.com/innrly",
    "https://www.capterra.com/p/.../innrly",
  ];
  ```

### 19. `llms-full.txt` partnerships section

- **File**: `public/llms-full.txt:28`
- **Current**: "**Coming soon — partnerships in progress** with:" followed
  by a list
- **Action**: Update or remove the "coming soon" line as partnerships
  ship.

### 20. Blog "More posts coming soon"

- **File**: `src/routes/blog.tsx:186`
- **Current**: "More posts coming soon. Have a topic you want covered?"
- **Action**: Acceptable as-is. Remove the line once you have 10+ posts.

### 21. Site URL hardcoding

- **File**: `src/routes/__root.tsx:91` (`SITE_URL = "https://www.innrly.com"`)
- **Used in**: og:image, twitter:image, JSON-LD `url` fields
- **Action**: Confirm `www.innrly.com` is the canonical production
  domain. If you launch on a different subdomain (e.g. `innrly.com`
  without www, or a regional TLD), update this constant.

---

## Go-live checklist (paste this into your launch ticket)

- [ ] Vimal portrait added to `/about`
- [ ] Terms of Service finalized by counsel
- [ ] Cookie Policy finalized by counsel
- [ ] Privacy Policy subprocessor list updated with real vendors
- [ ] All 4 legal mailboxes (`legal@`, `sales@`, `security@`, `privacy@`) tested
- [ ] `VITE_LEAD_WEBHOOK_URL` set in production build env (see leads doc)
- [ ] `VITE_ANALYTICS_ENDPOINT` set in production build env (see analytics doc)
- [ ] Decide: keep anonymized testimonials, or swap with real attribution
- [ ] "200+ hotels" / "17,000+ rooms" / "3,000+ employees" updated everywhere
- [ ] `Organization.sameAs` populated in `__root.tsx`
- [ ] GitHub repo URLs in dev banners updated
- [ ] `SITE_URL` confirmed as production domain
- [ ] Lighthouse pass on production build (perf, a11y, SEO, best practices)
