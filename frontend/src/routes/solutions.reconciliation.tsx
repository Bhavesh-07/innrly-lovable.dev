import { createFileRoute } from "@tanstack/react-router";
import { Scale, Banknote, CreditCard, Globe2, AlertTriangle } from "lucide-react";
import { DeepSolutionLayout } from "@/components/site/DeepSolutionLayout";
import { BeforeAfterFlow } from "@/components/site/BeforeAfterFlow";
import { ReconciliationChaos } from "@/components/site/ReconciliationChaos";
import { ReconciliationFlow } from "@/components/site/ReconciliationFlow";
import { OTAReconcileEvidence } from "@/components/site/OTAReconcileEvidence";
import { Section } from "@/components/site/Section";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";

export const Route = createFileRoute("/solutions/reconciliation")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/solutions/reconciliation");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/solutions/reconciliation"],
        "/solutions/reconciliation"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/solutions/reconciliation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Innrly Reconciliation",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "/solutions/reconciliation",
          offers: { "@type": "Offer", priceCurrency: "USD" },
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Solutions", url: "/solutions" },
        { name: "Reconciliation", url: "/solutions/reconciliation" },
      ]),
    ],
  }),
});

function Page() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "reconciliation");

  return (
    <div className="bg-background">
      {/* TOP-OF-PAGE chaos → matched animation */}
      <Section tone="surface" className="py-5 sm:py-6">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            From variance to matched
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Watch unmatched settlements snap into place in 6 seconds.
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <BeforeAfterFlow
            chaos={<ReconciliationChaos />}
            after={(playKey) => <ReconciliationFlow playKey={playKey} />}
            motion="expenses"
          />
        </div>
      </Section>

      <DeepSolutionLayout
        icon={Scale}
        orbVariant="reconciliation"
        persona="For Controllers & Corporate Accountants"
        eyebrow="Hotel Reconciliation"
        title={<>Reconciliation that <span className="text-gradient">closes books daily.</span></>}
        description="Automated daily reconciliation across PMS, bank, credit card, and OTA deposits. Variances surface in hours, not at month-end — across every property in your portfolio."
        bullets={[
          "Daily PMS-to-bank reconciliation, fully automated",
          "Credit card settlement matching with chargeback alerts",
          "OTA commission audit — Expedia, Booking.com, Airbnb",
          "Variance exceptions routed to the right GM or controller",
        ]}
        metrics={[
          { stat: "8hrs", label: "Saved per property / week" },
          { stat: "Vast majority", label: "Of lines auto-match overnight" },
          { stat: "T+1", label: "Close cadence" },
          { stat: "100%", label: "Audit trail coverage" },
        ]}
        beforeAfter={{
          title: <>From <span className="text-gradient">two-week close</span> to two-day close.</>,
          description: "Month-end stops being a fire drill when daily reconciliation is already done.",
          withoutTitle: "The month-end fire drill",
          without: [
            "Spend two weeks matching deposits to PMS folios by hand",
            "Discover chargebacks 45 days after they happened",
            "Pay OTA commissions on bookings that never checked in",
            "Find out about a bank deposit short on day 28 of the close",
          ],
          withTitle: "Already reconciled by tomorrow",
          withItems: [
            "Every deposit matched to PMS the morning after it lands",
            "Chargeback alerts the same day the merchant batch hits",
            "OTA commission audit catches over-billing line by line",
            "Variance exceptions routed with full context, not a spreadsheet",
          ],
        }}
        workflow={{
          title: <>How controllers <span className="text-gradient">actually use it.</span></>,
          description: "Four feeds that close the books a day at a time.",
          steps: [
            { icon: Banknote, title: "Overnight — PMS to bank", body: "Every deposit on every bank account matched against the previous day's PMS revenue report. Breaks land in your exceptions queue before 7 AM." },
            { icon: CreditCard, title: "Daily — credit card settlement", body: "Merchant batches reconcile against PMS folios and statement deposits. Chargebacks, fees, and timing differences isolate automatically." },
            { icon: Globe2, title: "Weekly — OTA commission audit", body: "Compare Expedia, Booking.com, and Airbnb statements against PMS reservations to catch over-billed commissions and missed adjustments." },
            { icon: AlertTriangle, title: "Anytime — exception routing", body: "Variances over threshold get routed to the right operator with the matched/unmatched evidence attached. No chasing spreadsheets across email." },
          ],
          artifact: <OTAReconcileEvidence />,
        }}
        replaces={{
          title: <>What Reconciliation <span className="text-gradient">consolidates.</span></>,
          description: "These line items disappear from the month-end checklist.",
          items: [
            "Month-end reconciliation marathons",
            "Per-property bank-rec spreadsheets",
            "Manual OTA commission audits",
            "Discovering chargebacks 45 days late",
            "\"Send me your settlement file\" emails",
            "Forensic month-end variance hunts",
            "Two-week close cycles",
          ],
        }}
        quote={{
          text: t?.quote || "We went from a fourteen-day close to a four-day close in our first quarter on Innrly. The OTA audit alone paid for the platform — we recovered hundreds of dollars in mis-billed commissions in month one.",
          author: t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "Corporate Controller · 9-property portfolio",
        }}
        modules={{
          title: <>The modules behind <span className="text-gradient">the match.</span></>,
          description: "Each module deep-links into the Features page.",
          items: [
            { name: "PMS-to-Bank Match", body: "Daily deposit reconciliation, fully automated." },
            { name: "Credit Card Settlement", body: "Merchant batch reconciliation with chargeback alerts." },
            { name: "OTA Commission Audit", body: "Expedia, Booking.com, Airbnb — line by line." },
            { name: "Exception Routing", body: "Variances sent to the right operator with evidence." },
            { name: "Month-End Packets", body: "Reconciliation packets ready on day one of close." },
            { name: "Audit Trail", body: "Every match, override, and adjustment timestamped." },
          ],
        }}
        faq={{
          title: <>What controllers <span className="text-gradient">actually ask us.</span></>,
          items: [
            { q: "Which banks and processors do you support?", a: "All major U.S. banks via direct feed or BAI2, plus the merchant processors hotels actually use (Elavon, Shift4, Worldpay, FreedomPay, and more). New connectors are added without an IT project on your side." },
            { q: "How does the OTA audit catch over-billing?", a: "Innrly compares each OTA statement line item against the matching PMS reservation. When commission is charged on a no-show, cancellation, or rate that doesn't match the actual stay, it's flagged for a commission clawback / dispute." },
            { q: "Will this work with our existing accounting system?", a: "Yes. Reconciliation runs against your PMS, banks, and OTAs in Innrly — matched results then flow to QuickBooks, M3, Sage Intacct, or whichever GL you run." },
            { q: "How long until our first daily close?", a: "Most portfolios complete first daily reconciliation within two weeks of go-live. The hard part — connectors — is on us." },
          ],
        }}
        cta={{
          title: "See your last week reconciled on Innrly",
          subtitle: "A 20-minute demo using one property's bank, merchant, and OTA feed. You'll see last week's matches and exceptions on screen.",
        }}
      />
    </div>
  );
}
