import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { IntegrationLayout } from "@/components/site/IntegrationLayout";

const faqs = [
  {
    q: "Does Innrly read directly from Opera?",
    a: "Yes. Innrly pulls the nightly audit pack, manager reports, and folio data from Opera (cloud and on-premise) so the back office sees Opera the same way the property does.",
  },
  {
    q: "Is this an Oracle Hospitality partner integration?",
    a: "Innrly works with the standard Opera export and reporting interfaces used by certified integrators. Contact us for details on your specific Opera deployment.",
  },
  {
    q: "Do you support both Opera Cloud and Opera PMS (v5)?",
    a: "Yes. Both deployments are supported. Setup details vary — we'll walk through your version during onboarding.",
  },
  {
    q: "What happens after Opera data lands in Innrly?",
    a: "Innrly normalizes the data, reconciles against bank and OTAs, runs night audit checks, captures A/P invoices, and pushes coded entries into your accounting system (M3, QuickBooks, Sage Intacct).",
  },
];

export const Route = createFileRoute("/integrations/opera")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/integrations/opera");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/integrations/opera"],
        "/integrations/opera"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/integrations/opera" }],
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
        { name: "Opera", url: "/integrations/opera" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <IntegrationLayout
      partnerName="Oracle Opera"
      eyebrow="Integration · Opera"
      badge="PMS · Cloud + v5"
      title={
        <>
          Innrly + Opera: <span className="text-gradient">automate everything</span> downstream of
          the PMS.
        </>
      }
      intro="Innrly reads your Opera night-audit pack, folios, and manager reports — then runs the reconciliation, A/P, and labor workflows that turn raw PMS output into a closed set of books."
      direction="push-only"
      directionLabel="Read from Opera · push to accounting"
      whatItDoes={[
        {
          heading: "Read Opera nightly",
          body: "Innrly pulls the night-audit pack and supporting reports automatically — no overnight Excel exports.",
        },
        {
          heading: "Reconcile and audit",
          body: "Three-way match across Opera folios, bank deposits, and OTA statements. Variances are surfaced before sunrise.",
        },
        {
          heading: "Push to your GL",
          body: "Approved, GL-coded entries flow into M3, QuickBooks, or Sage Intacct — keeping Opera and your accounting system in lockstep.",
        },
      ]}
      flow={{
        from: "Opera (Cloud or v5)",
        via: "Innrly · audit, reconcile, code",
        to: "M3 · QuickBooks · Sage Intacct",
      }}
      inScope={[
        "Night audit automation across Opera-managed properties",
        "Three-way reconciliation (PMS · bank · OTA)",
        "Invoice capture, GL coding, and Bill Pay",
        "BI dashboards and labor management",
      ]}
      staysIn={{
        system: "Opera",
        items: [
          "Reservations and the active room ledger",
          "Front-desk operations and check-in / check-out",
          "Folio management and rate plans",
        ],
      }}
      faqs={faqs}
    />
  );
}
