import { createFileRoute, Link } from '@tanstack/react-router'
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";
import { ShieldCheck, FileSpreadsheet, ScanSearch, Banknote, BookOpenCheck } from "lucide-react";
import { DeepSolutionLayout } from "@/components/site/DeepSolutionLayout";
import { ExceptionsLedger } from "@/components/site/ExceptionsLedger";
import { BeforeAfterFlow } from "@/components/site/BeforeAfterFlow";
import { FinancialControlChaos } from "@/components/site/FinancialControlChaos";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/solutions/financial-control")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/solutions/financial-control");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/solutions/financial-control"],
        "/solutions/financial-control"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/solutions/financial-control" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Innrly Financial Control",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          url: "/solutions/financial-control",
          offers: { "@type": "Offer", priceCurrency: "USD" },
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Solutions", url: "/solutions" },
        { name: "Financial Control", url: "/solutions/financial-control" },
      ]),
    ],
  }),
});

function Page() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "financial-control");
  return (
    <div className="bg-background">
      <Section tone="surface" className="py-5 sm:py-6">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            From day-11 scramble to day-3 close
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Watch the close calendar light up green in 6 seconds.
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <BeforeAfterFlow
            chaos={<FinancialControlChaos />}
            after={() => <ExceptionsLedger />}
            motion="guardrails"
          />
        </div>
      </Section>
      <DeepSolutionLayout
        icon={ShieldCheck}
        orbVariant="control"
        persona="For Controllers & CFOs"
        eyebrow="Hotel Accounting & Reconciliation"
        title={
          <>
            Work the <span className="text-gradient">exceptions</span>, not the entire ledger.
          </>
        }
        description={
          <>
            Your controller shouldn't tick-and-tie 14,000 transactions to find the seven that
            matter. Innrly auto-reconciles every line between PMS, bank, and OTAs — then surfaces
            only what needs a human. Learn how this fits into{" "}
            <Link
              to="/hotel-back-office-automation"
              className="text-accent underline font-semibold"
            >
              hotel back-office automation
            </Link>
            .
          </>
        }
        bullets={[
          "Auto-match every deposit, batch, and OTA settlement to the PMS",
          "Variances flagged within hours, not at month-end close",
          "Audit-ready trail packaged on the 1st of every month",
          "Recover OTA commission clawbacks and undercharged group bills automatically",
        ]}
        metrics={[
          {
            stat: "Recoverable",
            label: "OTA errors typically surfaced for currently onboarded hotels",
          },
          { stat: "Overnight", label: "Auto-cleared on first pass" },
          { stat: "0", label: "Manual spreadsheets" },
          { stat: "24h", label: "Variance flag SLA" },
        ]}
        beforeAfter={{
          title: (
            <>
              From <span className="text-gradient">tick-and-tie</span> to "show me the exceptions."
            </>
          ),
          description:
            "The biggest change controllers feel on Innrly isn't a feature — it's that the busywork is gone before they sit down.",
          withoutTitle: "The month-end marathon",
          without: [
            "Export PMS, bank, OTA reports into seven spreadsheets",
            "Eyeball thousands of matched lines looking for a few breaks",
            "Discover the OTA commission overcharge weeks after it could have been disputed",
            "Stitch together an audit binder by hand on the 5th of the month",
          ],
          withTitle: "Exceptions-only ledger",
          withItems: [
            "The vast majority of transactions auto-clear overnight",
            "The 7 that need a human are on one screen with the dollar amount",
            "Chargebacks and undercharged group bills surface inside 24 hours",
            "Month-end pack is generated, not assembled",
          ],
        }}
        workflow={{
          title: (
            <>
              How controllers <span className="text-gradient">actually use it.</span>
            </>
          ),
          description: "Four moves that replace the reconciliation marathon.",
          steps: [
            {
              icon: ScanSearch,
              title: "Overnight — auto-match runs",
              body: "Innrly reads PMS, bank, and OTA feeds and reconciles every transaction against the right counterparty before you log in.",
            },
            {
              icon: BookOpenCheck,
              title: "Morning — open the Exceptions worklist",
              body: "Only unmatched, variant, or suspicious transactions appear. Each one shows the dollar amount and the property responsible.",
            },
            {
              icon: Banknote,
              title: "Same day — recover the dollars",
              body: "Dispute the OTA commission overcharge, re-bill the group, void the comp — without copying a folio number into another tool.",
            },
            {
              icon: FileSpreadsheet,
              title: "Month-end — close in days, not weeks",
              body: "The reconciliation pack — OTA, bank, A/R, credit card — is generated on the 1st with a full audit trail.",
            },
          ],
          artifact: <ExceptionsLedger />,
        }}
        replaces={{
          title: (
            <>
              What Innrly Financial Control <span className="text-gradient">replaces.</span>
            </>
          ),
          description: "Not another report on top of the pile — these things go away.",
          items: [
            "Bank rec spreadsheets",
            "OTA commission clawback hunts",
            "Manual folio-to-deposit matching",
            "End-of-month audit binders",
            "A/R aging by hand",
            "Comp & void chase reports",
            '"Tie out the night audit" tasks',
          ],
        }}
        quote={{
          text: t?.quote || "We used to spend the first ten days of every month closing the prior month. Now my controller spends those ten days on actual analysis. Innrly didn't speed up reconciliation — it removed it.",
          author: t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "CFO · 12-property hotel ownership group",
        }}
        modules={{
          title: (
            <>
              The modules behind <span className="text-gradient">the close.</span>
            </>
          ),
          description: "Each module deep-links into the Features page.",
          items: [
            { name: "Exceptions Dashboard", body: "Only the transactions that need a human." },
            {
              name: "OTA Reconciliation",
              body: "Match every Booking, Expedia, direct reservation to settled payment.",
            },
            {
              name: "Bank Reconciliation",
              body: "Daily deposit matching against PMS — variances inside hours.",
            },
            {
              name: "Billing Assurance",
              body: "Validate folios, group bills, and direct bills against contracts.",
            },
            {
              name: "Revenue Protection",
              body: "Monitor comps, voids, discounts, rate overrides for anomalies.",
            },
            {
              name: "Month-End Packs",
              body: "Audit-ready reconciliation reports generated on the 1st.",
            },
          ],
        }}
        faq={{
          title: (
            <>
              What controllers <span className="text-gradient">actually ask us.</span>
            </>
          ),
          items: [
            {
              q: "Does this replace our accounting system?",
              a: "No — Innrly sits between your PMS and your accounting system (QuickBooks, M3, Sage Intacct). Your GL stays where it is; Innrly makes sure what hits it is already reconciled.",
            },
            {
              q: "How does it handle multiple PMSes across brands?",
              a: "Innrly is PMS-neutral. OnQ, PEP, FOSSE, StayNTouch, HotelKey, Choice Advantage — the reconciliation logic is the same regardless of source.",
            },
            {
              q: "What about the auditor?",
              a: "Every match, exception, and resolution is logged with timestamp and user. The audit pack is one-click export, including the supporting PMS night-audit files via Document Vault.",
            },
            {
              q: "How fast do you find the money?",
              a: "Most portfolios surface $5–15K of recoverable OTA and billing errors in the first 60 days — typically more than the annual subscription.",
            },
          ],
        }}
        cta={{
          title: "See your portfolio's exceptions on Innrly",
          subtitle:
            "A 20-minute demo using your brands and PMS. We'll show you where the recoverable dollars usually hide.",
        }}
      />
    </div>
  );
}
