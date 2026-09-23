import { createFileRoute } from "@tanstack/react-router";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { Cpu, Moon, FileCheck2, AlertCircle, Calendar } from "lucide-react";
import { DeepSolutionLayout } from "@/components/site/DeepSolutionLayout";
import { ExceptionsLedger } from "@/components/site/ExceptionsLedger";
import { BeforeAfterFlow } from "@/components/site/BeforeAfterFlow";
import { Section } from "@/components/site/Section";

const faqs = [
  {
    q: "Will this require us to replace our PMS or General Ledger?",
    a: "No. Innrly is PMS-neutral and GL-neutral. It sits in the middle, connecting PMS systems (Opera, Hilton OnQ, FOSSE) with General Ledgers (QuickBooks, M3, Sage Intacct). You keep your systems of record, while Innrly automates the manual entries and reconciliation between them.",
  },
  {
    q: "How much time do properties actually save?",
    a: "Depending on the brand and size, properties save between 40 and 180 hours per month. The biggest savings come from automated night audit packet filing, automated A/P invoice extraction/GL coding, and daily deposit reconciliation.",
  },
  {
    q: "What is an Exceptions-First workflow?",
    a: "Instead of having your controller check all 10,000 daily transactions, Innrly's engine matches and clears the correct ones overnight. Only the variances (mismatched credit card batches, missed deposits, or wrong invoice totals) land on the exceptions dashboard for human triage.",
  },
  {
    q: "How does it handle compliance for biometric Face-ID?",
    a: "Innrly provides standard biometric disclosures and releases for workers during enrollment on tablets, helping you comply with local regulations (such as BIPA in Illinois) by keeping consent tracking built directly into the flow.",
  },
];

export const Route = createFileRoute("/hotel-back-office-automation")({
  loader: async () => {
    const seo = await fetchSeoData("/hotel-back-office-automation");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/hotel-back-office-automation"],
        "/hotel-back-office-automation"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/hotel-back-office-automation" }],
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
        { name: "Hotel Back-Office Automation", url: "/hotel-back-office-automation" },
      ]),
    ],
  }),
});

function Page() {
  return (
    <div className="bg-background">
      <Section tone="surface" className="py-5 sm:py-6">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Integrated Hotel operations
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Triage variance across properties in under 60 seconds.
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <BeforeAfterFlow
            chaos={<ExceptionsLedger />}
            after={() => <ExceptionsLedger />}
            motion="guardrails"
          />
        </div>
      </Section>

      <DeepSolutionLayout
        icon={Cpu}
        orbVariant="intelligence"
        persona="For Multi-Property Owners & Corporate Teams"
        eyebrow="Category Pillar"
        title={
          <>
            Hotel back-office <span className="text-gradient">automation</span> in one place.
          </>
        }
        description="Stop stitching together five disconnected spreadsheets and platforms. Innrly unifies night audit, A/P invoice capture, OTA reconciliation, Face-ID TimeClock, and BI dashboards on a single codebase."
        bullets={[
          "Automate EOD night audit packs and file them directly to the vault",
          "Automated invoice OCR extraction and hotel-aware GL coding",
          "Daily deposit, credit card batch, and OTA reconciliation",
          "Integrated Face-ID TimeClock + labor scheduling + housekeeping MPOR",
        ]}
        metrics={[
          { stat: "40–180h", label: "Saved per property / month" },
          { stat: "Vast majority", label: "Of lines auto-match overnight" },
          { stat: "2–4 wks", label: "Typical onboarding timeline" },
          { stat: "0", label: "Spreadsheets required for audits" },
        ]}
        beforeAfter={{
          title: (
            <>
              From standard chaos to the{" "}
              <span className="text-gradient">automated back office.</span>
            </>
          ),
          description: "See the shift from manual folder matching to exceptions-only processing.",
          withoutTitle: "The manual back-office routine",
          without: [
            "GMs print and email night audit packs manually at 2 AM",
            "Invoices are scanned, emailed, printed, and hand-keyed into General Ledgers",
            "OTA commission settlements checked via monthly spreadsheet lookups",
            "Time clock punches are hand-verified against schedules during payroll",
          ],
          withTitle: "The Innrly automated workflow",
          withItems: [
            "Night audit runs automatically and files EOD packs to the vault by date",
            "Invoice OCR pulls files from vendor portals and pre-codes accounts",
            "Reconciliation checks deposits and flags OTA variances daily",
            "TimeClock matches schedules and flags labor leaks before payroll",
          ],
        }}
        workflow={{
          title: (
            <>
              A day in the life of <span className="text-gradient">an automated hotel group.</span>
            </>
          ),
          description: "How GMs and corporate teams monitor operations in four quick moves.",
          steps: [
            {
              icon: Moon,
              title: "Midnight — Night Audit+ runs",
              body: "PMS data aggregates across the portfolio, EOD packages file to the calendar vault automatically.",
            },
            {
              icon: FileCheck2,
              title: "2 AM — Invoice capture & GL coding",
              body: "Invoices are pulled from vendor portals or email, OCR'd, and matched to your chart of accounts.",
            },
            {
              icon: AlertCircle,
              title: "6 AM — Exceptions triage",
              body: "Reconciliation engine flags credit card variances, missing deposits, and OTA commission leaks for review.",
            },
            {
              icon: Calendar,
              title: "Always — Filed to Document Vault",
              body: "All EOD sheets, invoices, and bank matches are indexed against calendar dates in a secure vault.",
            },
          ],
          artifact: <ExceptionsLedger />,
        }}
        replaces={{
          title: (
            <>
              What Innrly <span className="text-gradient">consolidates.</span>
            </>
          ),
          description: "Point solutions and manual checklists that disappear from your operations.",
          items: [
            "Bank-rec spreadsheets",
            "Manual night-audit emails",
            "OTA commission audit files",
            "Paper A/P routing folders",
            "Separate labor scheduling software",
            "Disconnected BI dashboard feeds",
          ],
        }}
        quote={{
          text: "Before Innrly, our corporate office was a bottleneck of night-audit papers and A/P routing envelopes. Now, our controllers audit the exceptions in 15 minutes, and GMs get back to the floor where they belong.",
          author: "VP of Operations · 18-property brand portfolio",
        }}
        modules={{
          title: (
            <>
              The modules behind <span className="text-gradient">the platform.</span>
            </>
          ),
          description: "Every module runs off the same database and data model.",
          items: [
            { name: "Night Audit+", body: "Automated end-of-day packaging." },
            { name: "OTA Reconciliation", body: "Commission auditing and dispute resolution." },
            { name: "Invoice Auto-Pull", body: "OCR and automated GL coding." },
            { name: "Document Vault", body: "Calendar-based file indexing." },
            { name: "Face-ID TimeClock", body: "Integrated labor tracking." },
            { name: "Exceptions Dashboard", body: "Triage list for controllers." },
          ],
        }}
        faq={{
          title: (
            <>
              What operators <span className="text-gradient">ask us.</span>
            </>
          ),
          items: faqs,
        }}
        cta={{
          title: "Explore hotel back-office automation",
          subtitle:
            "Book a 20-minute walkthrough using your brands and PMS to see where automation saves time.",
        }}
      />
    </div>
  );
}
