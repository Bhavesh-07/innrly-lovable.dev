import { createFileRoute, Link } from '@tanstack/react-router'
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";
import { Workflow, Moon, FileCheck2, Sun, Inbox } from "lucide-react";
import { DeepSolutionLayout } from "@/components/site/DeepSolutionLayout";
import { OpsNightPack } from "@/components/site/OpsNightPack";
import { BeforeAfterFlow } from "@/components/site/BeforeAfterFlow";
import { OpsChaos } from "@/components/site/OpsChaos";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/solutions/operations-automation")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/solutions/operations-automation");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/solutions/operations-automation"],
        "/solutions/operations-automation"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/solutions/operations-automation" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Innrly Operations Automation",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "/solutions/operations-automation",
          offers: { "@type": "Offer", priceCurrency: "USD" },
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Solutions", url: "/solutions" },
        { name: "Operations Automation", url: "/solutions/operations-automation" },
      ]),
    ],
  }),
});

function Page() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "operations-automation");
  return (
    <div className="bg-background">
      <Section tone="surface" className="py-5 sm:py-6">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            From 11 PM checklist to 6 AM queue
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Watch the night audit pack assemble itself before sunrise.
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <BeforeAfterFlow chaos={<OpsChaos />} after={() => <OpsNightPack />} motion="pulse" />
        </div>
      </Section>
      <DeepSolutionLayout
        icon={Workflow}
        orbVariant="ops"
        persona="For Night Auditors & AGMs"
        eyebrow="Hotel Back-Office Automation"
        title={
          <>
            Night audit, <span className="text-gradient">done before</span> sunrise.
          </>
        }
        description={
          <>
            The night audit, OTA reconciliation, bank matching, and A/P queue shouldn't be four
            separate jobs at four separate hotels. Innrly runs them in one flow — variances flagged,
            packets filed by date, accounting in sync before the morning shift walks in. Read about
            the power of unified{" "}
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
          "Night Audit+ runs automatically with variance flags surfaced by 6 AM",
          "OTA, bank, and credit-card reconciliation in the same pass",
          "Vendor invoices auto-pulled from portals and pre-coded",
          "Every report filed against a calendar — pull any night in two clicks",
        ]}
        metrics={[
          { stat: "20–40", label: "Hrs saved / property / month" },
          { stat: "0", label: "Spreadsheets required" },
          { stat: "100%", label: "Audit trail coverage" },
          { stat: "Real-time", label: "Accounting sync" },
        ]}
        beforeAfter={{
          title: (
            <>
              From <span className="text-gradient">four jobs at four hotels</span> to one queue.
            </>
          ),
          description: "The night auditor's day shouldn't begin with re-keying.",
          withoutTitle: "The 4 AM grind",
          without: [
            "Run the PMS audit, print, email the pack to corporate",
            "Re-key OTA settlements into a separate spreadsheet",
            "Chase vendor invoices in three inboxes and a fax",
            "Hope the GM signs off before the AGM has to redo it",
          ],
          withTitle: "The automated pack",
          withItems: [
            "Audit pack generated, filed to the calendar, emailed automatically",
            "OTA, bank, card recs run in the same pass with variance flags",
            "Vendor invoices pulled from portals overnight, OCR'd and GL-coded",
            "AGM gets one queue of exceptions — not a stack of paper",
          ],
        }}
        workflow={{
          title: (
            <>
              How ops teams <span className="text-gradient">actually use it.</span>
            </>
          ),
          description: "Four moves between midnight and morning.",
          steps: [
            {
              icon: Moon,
              title: "Midnight — Night Audit+ kicks off",
              body: "Innrly runs the EOD across every property in the portfolio, applies variance rules, and packages the pack with supporting reports.",
            },
            {
              icon: FileCheck2,
              title: "2 AM — recs and invoices process",
              body: "OTA, bank, credit-card reconciliation runs. Vendor invoices are pulled from portals, OCR'd, GL-coded, routed for approval.",
            },
            {
              icon: Sun,
              title: "6 AM — exceptions queue ready",
              body: "The AGM opens one screen with the night's variances, missing deposits, and invoices that need a human.",
            },
            {
              icon: Inbox,
              title: "Always — files in the Document Vault",
              body: "Every PMS pack, vendor invoice, and supporting doc is stored against the calendar date — pull any night, any property, in two clicks.",
            },
          ],
          artifact: <OpsNightPack />,
        }}
        replaces={{
          title: (
            <>
              What Innrly Operations Automation <span className="text-gradient">replaces.</span>
            </>
          ),
          description: "These things go away.",
          items: [
            "Manual night audit emails to corporate",
            "OTA reconciliation spreadsheets",
            "Vendor portal logins for invoice pulls",
            "Folder-by-folder file storage",
            "Re-keying batch totals into accounting",
            '"Resend me the audit pack" requests',
            "Paper invoice routing",
          ],
        }}
        quote={{
          text: t?.quote || "We had two night auditors quit because of the workload. After Innrly, the role is genuinely a 4-hour shift — they actually want it now. And the AGM walks in to a queue, not a panic.",
          author: t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "Director of Operations · 6-property select-service group",
        }}
        modules={{
          title: (
            <>
              The modules behind <span className="text-gradient">the automation.</span>
            </>
          ),
          description: "Each module deep-links into the Features page.",
          items: [
            { name: "Night Audit+", body: "Automated EOD with variance flags by sunrise." },
            {
              name: "OTA Reconciliation",
              body: "Match Booking, Expedia, direct to settled payments.",
            },
            { name: "Bank & Card Rec", body: "Match every deposit, batch, chargeback to PMS." },
            {
              name: "Invoice Auto-Pull",
              body: "Innrly pulls vendor invoices from portals overnight.",
            },
            { name: "OCR + GL Coding", body: "Email or scanned invoices captured and pre-coded." },
            { name: "Document Vault", body: "Calendar-based filing — any night, any property." },
          ],
        }}
        faq={{
          title: (
            <>
              What ops leaders <span className="text-gradient">actually ask us.</span>
            </>
          ),
          items: [
            {
              q: "Does this replace our night auditor?",
              a: "No — it removes the busywork so the night auditor can actually audit. The role becomes shorter, calmer, and far easier to staff.",
            },
            {
              q: "Will it work with every PMS in our portfolio?",
              a: "Yes. OnQ, PEP, FOSSE, StayNTouch, HotelKey, Choice Advantage and others — Innrly normalizes the pack across all of them so corporate sees one format.",
            },
            {
              q: "How does the OTA recovery actually work?",
              a: "Innrly matches every reservation back to its settled payment from Booking, Expedia, etc. When the OTA settles short, you get a worked queue with the dispute amount pre-calculated.",
            },
            {
              q: "What happens to our existing audit files?",
              a: "We backfill the Document Vault during onboarding so you have a continuous calendar — old packets, new packets, all in one place.",
            },
          ],
        }}
        cta={{
          title: "See the night, automated",
          subtitle:
            "A 20-minute demo using one of your properties. You'll see the audit pack, the exceptions queue, and the Document Vault filed by date.",
        }}
      />
    </div>
  );
}
