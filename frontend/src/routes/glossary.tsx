import { createFileRoute } from "@tanstack/react-router";
import { Section, SectionHeading } from "@/components/site/Section";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

const terms = [
  {
    term: "ADR",
    full: "Average Daily Rate",
    def: "Total rooms revenue divided by rooms sold. The headline rate metric every hotel P&L starts with.",
  },
  {
    term: "ARR",
    full: "Average Room Rate",
    def: "Synonym for ADR — total rooms revenue divided by rooms sold over a given period.",
  },
  {
    term: "A/P",
    full: "Accounts Payable",
    def: "Money the hotel owes to vendors. Modern A/P workflows replace paper checks with Virtual Cards and ACH, with OCR-driven invoice capture.",
  },
  {
    term: "A/R",
    full: "Accounts Receivable",
    def: "Money owed to the hotel — group bills, direct bills, OTA settlements. A/R aging discipline is a leading indicator of cash health.",
  },
  {
    term: "BAR",
    full: "Best Available Rate",
    def: "The lowest non-restricted public rate offered for a given date. The reference rate most rate-parity and OTA contracts pivot on.",
  },
  {
    term: "Chargeback",
    full: "Disputed Card Transaction",
    def: "A guest- or card-issuer-initiated reversal of a settled transaction. Catching and contesting chargebacks is core revenue protection.",
  },
  {
    term: "Comp Set",
    full: "Competitive Set",
    def: "The group of properties you benchmark against in STR reports. Usually 4–6 hotels in the same market, segment, and price tier.",
  },
  {
    term: "CPOR",
    full: "Cost Per Occupied Room",
    def: "Departmental expense divided by occupied rooms. Used to control variable cost per stay — housekeeping CPOR is the most-watched flavor.",
  },
  {
    term: "Direct Bill",
    full: "Corporate / Group Billing",
    def: "An arrangement where charges are billed to a company or group account instead of collected from the guest at checkout.",
  },
  {
    term: "EFTPOS",
    full: "Tender Reconciliation",
    def: "The matching of card and cash settlement totals from the PMS to merchant batches and bank deposits — a core night-audit step.",
  },
  {
    term: "F&B",
    full: "Food and Beverage",
    def: "All food and beverage outlets — restaurant, bar, banquet, room service. F&B reconciliation matches POS to PMS folio postings nightly.",
  },
  {
    term: "FIT",
    full: "Free Independent Traveler",
    def: "Individually booked transient guests (not group, not contract). Usually the highest-rate segment in the mix.",
  },
  {
    term: "Folio",
    full: "Guest Folio",
    def: "The guest's transaction record for a stay — room charges, incidentals, taxes, payments. The reconciliation unit for night audit.",
  },
  {
    term: "GL",
    full: "General Ledger",
    def: "The master record of all financial transactions — QuickBooks, M3, Sage Intacct, or Profitvue in hotel contexts. Innrly pushes coded invoices into the GL of choice.",
  },
  {
    term: "GOP",
    full: "Gross Operating Profit",
    def: "Revenue minus departmental and undistributed operating expenses. The line ownership and lenders watch most closely.",
  },
  {
    term: "GOPPAR",
    full: "Gross Operating Profit Per Available Room",
    def: "GOP divided by available rooms. Normalizes profitability for portfolio comparison across asset sizes.",
  },
  {
    term: "House Profit",
    full: "House Profit",
    def: "Revenue minus departmental and undistributed expenses, before management fees, fixed charges, and ownership costs. Often used interchangeably with GOP.",
  },
  {
    term: "LOS",
    full: "Length of Stay",
    def: "Average number of nights per reservation. Long-LOS extended-stay economics differ materially from transient — tax treatment, housekeeping cadence, and rate logic all change.",
  },
  {
    term: "Manager's Report",
    full: "Daily Flash Report",
    def: "The morning packet GMs and owners read first — yesterday's revenue, occupancy, ADR, RevPAR, and pace vs forecast and last year.",
  },
  {
    term: "MPOR",
    full: "Minutes Per Occupied Room",
    def: "Total housekeeping minutes divided by occupied rooms cleaned. The labor productivity metric GMs should track daily.",
  },
  {
    term: "Night Audit",
    full: "End-of-Day Close",
    def: "The nightly process that closes the books on a hotel day — posts charges, reconciles tender, and produces the morning packet.",
  },
  {
    term: "No-Show",
    full: "No-Show Reservation",
    def: "A confirmed reservation that never arrived. Properly billed no-shows are often the highest-margin line on the property's books.",
  },
  {
    term: "NRevPAR",
    full: "Net Revenue Per Available Room",
    def: "RevPAR adjusted for distribution costs like OTA commissions. A truer measure of revenue the property actually keeps.",
  },
  {
    term: "OTA",
    full: "Online Travel Agency",
    def: "Third-party booking channels like Booking.com and Expedia. Commission and chargeback reconciliation is the single highest-ROI back-office task.",
  },
  {
    term: "Pace",
    full: "Booking Pace",
    def: "Cumulative reservations on the books for a future date vs the same point last year. The leading indicator revenue managers price against.",
  },
  {
    term: "Pickup",
    full: "Rooms Pickup",
    def: "Net new reservations added between two snapshots — a daily measure of demand momentum.",
  },
  {
    term: "PMS",
    full: "Property Management System",
    def: "The system of record for reservations, folios, and night audit. Opera, choiceADVANTAGE, SynXis, OnQ, Cloudbeds, and Mews are the most common.",
  },
  {
    term: "REVPOR",
    full: "Revenue Per Occupied Room",
    def: "Total revenue (rooms + F&B + ancillary) divided by occupied rooms. Captures the wallet share full-service hotels earn per stay.",
  },
  {
    term: "RevPAR",
    full: "Revenue Per Available Room",
    def: "Rooms revenue divided by rooms available. Combines occupancy and ADR into one productivity number.",
  },
  {
    term: "STR Report",
    full: "Smith Travel Research Report",
    def: "The industry benchmark report comparing your property's occupancy, ADR, and RevPAR against a defined competitive set.",
  },
  {
    term: "TRevPAR",
    full: "Total Revenue Per Available Room",
    def: "All revenue (rooms + F&B + ancillary) divided by available rooms. The best top-line measure for full-service hotels.",
  },
  {
    term: "USALI",
    full: "Uniform System of Accounts for the Lodging Industry",
    def: "The standardized chart of accounts and reporting framework ownership groups, lenders, and buyers expect. Current edition: USALI 11.",
  },
  {
    term: "Walk-In",
    full: "Walk-In Reservation",
    def: "A guest who books at the front desk without a prior reservation. Walk-in ADR is typically higher than rate-shopped channels.",
  },
  {
    term: "Walked",
    full: "Walked Guest",
    def: "A confirmed reservation relocated to another hotel because the property was oversold. Walked-guest cost (rebook + transport + comp) is a watched exception.",
  },
];

export const Route = createFileRoute("/glossary")({
  component: GlossaryPage,
  loader: async () => {
    const seo = await fetchSeoData("/glossary");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/glossary"],
        "/glossary"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/glossary" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "DefinedTermSet",
          name: "Hotel Operations Glossary",
          hasDefinedTerm: terms.map((t) => ({
            "@type": "DefinedTerm",
            name: t.term,
            description: `${t.full}. ${t.def}`,
          })),
        }),
      },
    ],
  }),
});

function GlossaryPage() {
  const groups = terms.reduce<Record<string, typeof terms>>((acc, t) => {
    const letter = t.term.charAt(0).toUpperCase();
    (acc[letter] ||= []).push(t);
    return acc;
  }, {});
  const letters = Object.keys(groups).sort();
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  return (
    <div className="bg-background">
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground sm:text-5xl">
            Hotel operations <span className="text-gradient">glossary.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Plain-English definitions for the finance, labor, and operations terms multi-property
            operators use every day.
          </p>
        </div>
      </section>

      <Section>
        <div className="sticky top-16 z-10 -mx-4 mb-8 flex flex-wrap justify-center gap-1 border-y border-border/60 bg-background/85 px-4 py-3 backdrop-blur-xl sm:-mx-6 lg:-mx-8">
          {alphabet.map((l) => {
            const has = groups[l];
            return has ? (
              <a
                key={l}
                href={`#letter-${l}`}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold text-foreground transition-colors hover:bg-accent/15 hover:text-accent"
              >
                {l}
              </a>
            ) : (
              <span
                key={l}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md text-xs font-semibold text-muted-foreground/40"
              >
                {l}
              </span>
            );
          })}
        </div>
        <SectionHeading title="The terms that matter" />
        {letters.map((letter) => (
          <div key={letter} id={`letter-${letter}`} className="mt-10 scroll-mt-32">
            <h2 className="mb-4 text-sm font-bold uppercase tracking-widest text-accent">
              {letter}
            </h2>
            <dl className="grid gap-6 sm:grid-cols-2">
              {groups[letter].map((t) => (
                <div key={t.term} className="aurora-card rounded-2xl p-6">
                  <dt className="flex items-baseline gap-3">
                    <span className="text-lg font-semibold text-foreground">{t.term}</span>
                    <span className="text-xs text-muted-foreground">{t.full}</span>
                  </dt>
                  <dd className="mt-3 text-sm text-muted-foreground">{t.def}</dd>
                </div>
              ))}
            </dl>
          </div>
        ))}
      </Section>
    </div>
  );
}
