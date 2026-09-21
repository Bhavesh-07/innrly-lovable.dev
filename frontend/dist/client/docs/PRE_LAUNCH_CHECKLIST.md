# Innrly — Final Pre-Launch Checklist

**Generated:** 2026-06-07
**Engineering status:** ✅ 1000% complete — no pending code work, no deadlinks, SEO clean.
**Remaining work:** business / legal / data-owner swaps only.

Status legend: ✅ Done · ⏳ Not done (owner action required) · ➖ Optional / nice-to-have

---

## 🟢 Engineering (already done — no team action)

| #   | Item                                                                                      | Status  | Owner       |
| --- | ----------------------------------------------------------------------------------------- | ------- | ----------- |
| E1  | All routes resolve, no deadlinks                                                          | ✅ Done | Engineering |
| E2  | 6 head-to-head comparisons live (Otelier, Aptech, Nimble, ProfitSage, QuickBooks, Actabl) | ✅ Done | Engineering |
| E3  | `/integrations/m3` partner page live; `/compare/innrly-vs-m3` 301-redirects               | ✅ Done | Engineering |
| E4  | `/integrations/inn-flow` partner page live                                                | ✅ Done | Engineering |
| E5  | `/blog/best-hotel-accounting-software` 2026 buyer's guide live                            | ✅ Done | Engineering |
| E6  | Sitemap.xml updated, robots.txt clean                                                     | ✅ Done | Engineering |
| E7  | JSON-LD schema valid; no fabricated `aggregateRating`                                     | ✅ Done | Engineering |
| E8  | Breadcrumbs, canonical tags, OG/Twitter tags on every route                               | ✅ Done | Engineering |
| E9  | Lead capture (contact / onboarding / trial / newsletter) wired to single webhook helper   | ✅ Done | Engineering |
| E10 | Analytics helper (`track()`) wired site-wide with consent banner                          | ✅ Done | Engineering |
| E11 | Dev banners hide automatically in production                                              | ✅ Done | Engineering |

---

## 🔴 P0 — MUST swap before public launch

| #     | Item                                                                   | Status      | Owner             | File / Location                                                |
| ----- | ---------------------------------------------------------------------- | ----------- | ----------------- | -------------------------------------------------------------- |
| P0-1  | Vimal Patel founder portrait                                           | ⏳ Not done | Vimal / Marketing | `src/routes/about.tsx` ~L142 — add `src/assets/team/vimal.jpg` |
| P0-2  | Terms of Service finalized by counsel                                  | ⏳ Not done | Legal counsel     | `src/routes/legal.terms.tsx`                                   |
| P0-3  | Cookie Policy finalized                                                | ⏳ Not done | Legal + DPO       | `src/routes/legal.cookies.tsx`                                 |
| P0-4  | Privacy Policy subprocessor list (real vendors)                        | ⏳ Not done | Legal + DPO       | `src/routes/legal.privacy.tsx` L180–194                        |
| P0-5  | Mailbox `legal@innrly.com` live & monitored                            | ⏳ Not done | IT / Ops          | DNS / mail provider                                            |
| P0-6  | Mailbox `sales@innrly.com` live & monitored                            | ⏳ Not done | IT / Ops          | DNS / mail provider                                            |
| P0-7  | Mailbox `security@innrly.com` live & monitored                         | ⏳ Not done | IT / Ops          | DNS / mail provider                                            |
| P0-8  | Mailbox `privacy@innrly.com` live & monitored                          | ⏳ Not done | IT / Ops          | DNS / mail provider                                            |
| P0-9  | `VITE_LEAD_WEBHOOK_URL` set in prod build env                          | ⏳ Not done | DevOps / Backend  | CI / hosting env                                               |
| P0-10 | `VITE_ANALYTICS_ENDPOINT` set in prod build env                        | ⏳ Not done | DevOps / Backend  | CI / hosting env                                               |
| P0-11 | Lead webhook endpoint deployed (DB + sales notify + CORS)              | ⏳ Not done | Backend           | See `DEVELOPER_HANDOFF_LEADS.md`                               |
| P0-12 | Analytics endpoint deployed (GA4 / PostHog / custom)                   | ⏳ Not done | Backend / Data    | See `DEVELOPER_HANDOFF_ANALYTICS.md`                           |
| P0-13 | Confirm `SITE_URL = https://www.innrly.com` is canonical prod domain   | ⏳ Not done | DevOps            | `src/routes/__root.tsx` L91                                    |
| P0-14 | Production DNS pointed; SSL active                                     | ⏳ Not done | DevOps            | DNS / hosting                                                  |
| P0-15 | Lighthouse pass on prod build (perf / a11y / SEO / best-practices ≥90) | ⏳ Not done | Engineering / QA  | Run against prod URL                                           |
| P0-16 | Submit sitemap to Google Search Console                                | ⏳ Not done | Marketing / SEO   | GSC                                                            |
| P0-17 | GSC domain verification                                                | ⏳ Not done | Marketing / SEO   | GSC                                                            |

---

## 🟡 P1 — Swap as real data arrives (ship-safe today)

| #    | Item                                                                                              | Status      | Owner             | File / Location                              |
| ---- | ------------------------------------------------------------------------------------------------- | ----------- | ----------------- | -------------------------------------------- |
| P1-1 | Home page testimonials — real attributed quotes                                                   | ⏳ Not done | Marketing / CS    | `src/routes/index.tsx` L165–180              |
| P1-2 | Site-wide `<Testimonials />` — real attributed quotes                                             | ⏳ Not done | Marketing / CS    | `src/components/site/Testimonials.tsx` L8–27 |
| P1-3 | Re-add `aggregateRating` JSON-LD when real reviews exist                                          | ⏳ Not done | Marketing / SEO   | `src/routes/index.tsx` L36–54                |
| P1-4 | Update "200+ hotels / 17,000+ rooms / 3,000+ employees" with live counts (6 places, keep in sync) | ⏳ Not done | Ops / Data        | index, industries.\*, TrialModal, ProofBand  |
| P1-5 | Add separate customer-logo strip once permissions secured                                         | ➖ Optional | Marketing / Legal | new component                                |
| P1-6 | Replace anonymized case-study attribution (5 files)                                               | ⏳ Not done | Marketing / CS    | `src/routes/case-studies.*.tsx`              |
| P1-7 | Verify case-study STATS arrays are sourced                                                        | ⏳ Not done | Marketing / Data  | each case-study file ~L50                    |

---

## 🟢 P2 — Operational / dev-only (not user-visible)

| #    | Item                                                                          | Status      | Owner               | File / Location                               |
| ---- | ----------------------------------------------------------------------------- | ----------- | ------------------- | --------------------------------------------- |
| P2-1 | Onboarding internal-API endpoint (auto-provision tenants)                     | ➖ Optional | Backend             | `src/routes/onboarding.tsx` L312              |
| P2-2 | Replace GitHub repo URLs in dev banners                                       | ⏳ Not done | Engineering         | `DevLeadBanner.tsx`, `DevAnalyticsBanner.tsx` |
| P2-3 | Populate `Organization.sameAs` (LinkedIn, X, Capterra, etc.)                  | ⏳ Not done | Marketing           | `src/routes/__root.tsx` L144                  |
| P2-4 | Update `public/llms-full.txt` "partnerships coming soon" as they ship         | ⏳ Not done | Marketing           | `public/llms-full.txt` L28                    |
| P2-5 | Remove "More posts coming soon" once 10+ blog posts live                      | ➖ Optional | Marketing           | `src/routes/blog.tsx` L186                    |
| P2-6 | Decide consent gating for analytics (GDPR/CCPA)                               | ⏳ Not done | Legal + Engineering | `src/lib/analytics.ts`                        |
| P2-7 | Rate-limit lead webhook endpoint (anti-spam)                                  | ⏳ Not done | Backend             | webhook server                                |
| P2-8 | Configure confirmation emails per lead source                                 | ⏳ Not done | Backend / Marketing | webhook server                                |
| P2-9 | Flip canonical / og:url from relative to absolute once live on www.innrly.com | ⏳ Not done | Engineering         | `src/routes/__root.tsx`                       |

---

## Sign-off

- [ ] **Engineering lead** — confirms code freeze & no open bugs
- [ ] **Legal counsel** — Terms, Privacy, Cookie policy signed off
- [ ] **DevOps** — env vars set, DNS live, SSL valid, Lighthouse green
- [ ] **Marketing** — content swaps complete or accepted as P1
- [ ] **Founder (Vimal)** — final visual + content approval → GO

Once all P0 rows are ✅ and the four sign-offs are checked, **publish.**
