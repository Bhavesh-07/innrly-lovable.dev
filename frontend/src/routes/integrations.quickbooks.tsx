import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { IntegrationLayout } from "@/components/site/IntegrationLayout";

const faqs = [
  {
    q: "Is the QuickBooks integration two-way?",
    a: "Yes. Full bi-directional sync. Innrly pushes GL-coded invoices and journal entries into QuickBooks, and reads back vendors, chart of accounts, classes, and posted balances so both systems stay aligned.",
  },
  {
    q: "Which versions of QuickBooks are supported?",
    a: "QuickBooks Online is fully supported with the two-way sync. Talk to us if you're on QuickBooks Desktop — we'll walk through the options.",
  },
  {
    q: "Do I keep QuickBooks as my accounting system?",
    a: "Yes. QuickBooks stays your system of record. Innrly handles invoice capture, GL coding, OTA reconciliation, night audit, Bill Pay, and BI — then syncs cleanly with QuickBooks.",
  },
  {
    q: "What about multi-property?",
    a: "Innrly supports portfolios across multiple QuickBooks files or a single multi-class file. Mapping is handled per property during onboarding.",
  },
];

export const Route = createFileRoute("/integrations/quickbooks")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/integrations/quickbooks");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/integrations/quickbooks"],
        "/integrations/quickbooks"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/integrations/quickbooks" }],
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
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Integrations", url: "/integrations" },
        { name: "QuickBooks", url: "/integrations/quickbooks" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <IntegrationLayout
      partnerName="QuickBooks"
      eyebrow="Integration · QuickBooks"
      badge="Two-way sync"
      title={
        <>
          Innrly + QuickBooks: <span className="text-gradient">full two-way sync</span>.
        </>
      }
      intro="Innrly syncs bi-directionally with QuickBooks Online. Push GL-coded invoices and journal entries out, read vendors and chart of accounts back — both systems stay aligned, automatically."
      direction="two-way"
      directionLabel="Two-way sync · invoices out, vendors & accounts in"
      whatItDoes={[
        {
          heading: "Push invoices out",
          body: "GL-coded, approved invoices flow from Innrly into QuickBooks with vendor, class, and account mapping intact.",
        },
        {
          heading: "Read accounts in",
          body: "Innrly pulls your QuickBooks chart of accounts, vendors, and classes so coding stays accurate without duplicate maintenance.",
        },
        {
          heading: "Stay aligned",
          body: "Posted balances and reconciled data flow back so Innrly's dashboards always match QuickBooks.",
        },
      ]}
      flow={{
        from: "Capture in Innrly · CoA in QuickBooks",
        via: "Auto-code, approve, sync",
        to: "Invoices in QuickBooks · BI in Innrly",
      }}
      inScope={[
        "Invoice capture, OCR, auto GL-coding",
        "OTA reconciliation, night audit, Bill Pay",
        "Labor management and BI dashboards",
        "Two-way sync with QuickBooks Online",
      ]}
      staysIn={{
        system: "QuickBooks",
        items: [
          "General ledger and chart of accounts",
          "Bank feeds and reconciliations",
          "Tax reporting and financial statements",
        ],
      }}
      faqs={faqs}
    />
  );
}
