import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { IntegrationLayout } from "@/components/site/IntegrationLayout";

const faqs = [
  { q: "Is Innrly a competitor to Inn-flow?", a: "No. Inn-flow is a full hotel accounting system — general ledger, AP, AR, payroll, bank reconciliation, financial statements. Innrly is the back-office automation and data layer that sits in front of an accounting system. The right comparison is 'Innrly + Inn-flow' — not 'Innrly: alternative to Inn-flow'. Innrly does for Inn-flow what it already does for M3, QuickBooks, and Sage Intacct: capture invoices, auto-code them, reconcile OTAs, run night audit, and push clean data into the GL." },
  { q: "Is the Innrly + Inn-flow integration available today?", a: "An API-based push integration is on our roadmap. If you're an Inn-flow customer interested in early access, talk to us — we're prioritizing the integration based on customer demand." },
  { q: "Will the integration be two-way or push-only?", a: "Push-only at launch, mirroring how Innrly integrates with M3 and Sage Intacct: Innrly captures and codes the source documents, then pushes the completed entries into Inn-flow. Inn-flow remains the system of record for your general ledger and financials." },
  { q: "Do I keep Inn-flow for accounting?", a: "Yes. Inn-flow stays your accounting system of record. Innrly sits in front as the automation layer — invoice capture and GL coding, OTA reconciliation, night audit, Bill Pay, BI dashboards, and labor — feeding clean, audit-ready data into Inn-flow." },
  { q: "What does an Inn-flow customer actually gain from adding Innrly?", a: "Time. Innrly eliminates the manual A/P keying, the OTA reconciliation spreadsheets, the morning-after audit chase, and the patchwork of manual labor reports. Your Inn-flow GL gets audit-ready data sooner, and your GMs get a 5-minute daily snapshot they don't have today." },
  { q: "How is this different from Innrly + M3 or Innrly + QuickBooks?", a: "Same pattern. Innrly is a back-office automation layer that pushes into whatever accounting system you run. M3, QuickBooks, Sage Intacct, and Inn-flow are all valid systems of record — Innrly's job is to feed them, not replace them." },
];

export const Route = createFileRoute("/integrations/inn-flow")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/integrations/inn-flow");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/integrations/inn-flow"],
        "/integrations/inn-flow"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/integrations/inn-flow" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
      breadcrumbLd([{ name: "Home", url: "/" }, { name: "Integrations", url: "/integrations" }, { name: "Inn-flow", url: "/integrations/inn-flow" }]),
    ],
  }),
});

function Page() {
  return (
    <IntegrationLayout
      partnerName="Inn-flow"
      eyebrow="Integration · Inn-flow"
      badge="API integration — on the roadmap"
      title={<>Innrly + Inn-flow: <span className="text-gradient">the automation layer</span> for your Inn-flow GL.</>}
      intro="Inn-flow is your hotel accounting system of record. Innrly is the back-office automation layer that captures invoices, auto-codes them, reconciles OTAs, runs night audit, and pushes clean, audit-ready data into Inn-flow — the same way we already integrate with M3, QuickBooks, and Sage Intacct. API integration is on our near-term roadmap; early-access slots are open to Inn-flow customers today."
      direction="push-only"
      directionLabel="Push-only · automation → Inn-flow GL"
      whatItDoes={[
        { heading: "Capture & auto-populate", body: "Invoices arrive via OCR and email-in. Innrly extracts header, vendor, line items, and totals — no manual keying into Inn-flow." },
        { heading: "GL-code automatically", body: "Innrly applies your Inn-flow chart of accounts and historical coding rules so every invoice lands with the correct GL before approval." },
        { heading: "Push to Inn-flow", body: "Approved, GL-coded invoices, OTA reconciliation entries, and night-audit summaries push into Inn-flow as your system of record — clean, audit-ready, ready for close." },
      ]}
      flow={{
        from: "Invoice / OTA data / audit arrives in Innrly",
        via: "Auto-populate, GL-code, reconcile, approve",
        to: "Push into Inn-flow as system of record",
      }}
      inScope={[
        "Invoice capture and OCR",
        "Auto GL-coding with your Inn-flow chart of accounts",
        "A/P approval workflows + Bill Pay",
        "OTA reconciliation and night-audit summaries",
        "BI dashboards and 5-minute labor snapshot (Innrly Shift)",
      ]}
      staysIn={{
        system: "Inn-flow",
        items: [
          "General ledger and financial statements",
          "AR, payroll, and bank reconciliation",
          "Month-end close and financial reporting",
          "Your existing Inn-flow workflows and users",
        ],
      }}
      faqs={faqs}
    />
  );
}
