import { createFileRoute, Link } from "@tanstack/react-router";
import { ModuleSpotlightCard } from "@/components/site/ModuleSpotlightCard";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";
import { CreditCard, Mail, ListChecks, Send, ShieldCheck } from "lucide-react";
import { DeepSolutionLayout } from "@/components/site/DeepSolutionLayout";
import { InnrlyPayCheckRun } from "@/components/site/InnrlyPayCheckRun";
import { BeforeAfterFlow } from "@/components/site/BeforeAfterFlow";
import { PayChaos } from "@/components/site/PayChaos";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/solutions/innrly-pay")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/solutions/innrly-pay");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/solutions/innrly-pay"],
        "/solutions/innrly-pay"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/solutions/innrly-pay" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Innrly Pay",
          applicationCategory: "FinanceApplication",
          operatingSystem: "Web",
          url: "/solutions/innrly-pay",
          offers: { "@type": "Offer", priceCurrency: "USD" },
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Solutions", url: "/solutions" },
        { name: "Innrly Pay", url: "/solutions/innrly-pay" },
      ]),
    ],
  }),
});

function Page() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "innrly-pay");
  return (
    <div className="bg-background">
      <ModuleSpotlightCard
        moduleKey="pay"
        moduleName="Innrly Pay"
        pricing="addon"
        blurb="Virtual Cards + ACH replace paper checks. Available as a paid add-on — try it during your 90-day trial."
      />
      <Section tone="surface" className="py-5 sm:py-6">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            From shoebox to settled
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Watch a Friday check run become a Tuesday two-click pay.
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <BeforeAfterFlow
            chaos={<PayChaos />}
            after={() => <InnrlyPayCheckRun />}
            motion="documents"
          />
        </div>
      </Section>
      <DeepSolutionLayout
        icon={CreditCard}
        orbVariant="pay"
        persona="For A/P Clerks & Controllers"
        eyebrow="Innrly Pay · Free with annual Professional"
        title={
          <>
            Stop writing checks. <span className="text-gradient">Start closing books.</span>
          </>
        }
        description={
          <>
            The A/P clerk's week shouldn't be invoice hunts, check runs, and bank trips. Innrly Pay
            captures every vendor invoice, routes it for approval, pays via Virtual Card or ACH, and
            reconciles to the GL — included free on the annual Professional plan. Discover how this
            integrates into our wider{" "}
            <Link
              to="/hotel-back-office-automation"
              className="text-accent underline font-semibold"
            >
              hotel back-office automation
            </Link>{" "}
            system.
          </>
        }
        bullets={[
          "Email or scan invoices in — Innrly OCRs and pre-codes them",
          "Approval flow that matches multi-property finance reality",
          "Pay by Virtual Card or ACH in the same workflow",
          "End-to-end reconciliation into QuickBooks, M3, Sage Intacct",
        ]}
        metrics={[
          { stat: "0", label: "Paper checks" },
          { stat: "T+1", label: "Avg settlement" },
          { stat: "100%", label: "Auto-reconciled" },
          { stat: "FREE", label: "With annual Professional" },
        ]}
        beforeAfter={{
          title: (
            <>
              From <span className="text-gradient">check runs</span> to "already paid."
            </>
          ),
          description: "A/P shouldn't require a printer, a signature, and a trip to the bank.",
          withoutTitle: "The Friday check run",
          without: [
            "Open three inboxes hunting for vendor invoices",
            "Hand-key invoice headers and GL codes into accounting",
            "Print checks, walk for signatures, stuff envelopes",
            "Wait days to reconcile what cleared the bank",
          ],
          withTitle: "The afternoon close",
          withItems: [
            "Invoices captured automatically via email, scan, or vendor portal",
            "GL coding remembered per vendor — pre-coded on arrival",
            "Approve and pay (Virtual Card or ACH) in two clicks",
            "Settlement reconciles itself into your accounting system",
          ],
        }}
        workflow={{
          title: (
            <>
              How A/P teams <span className="text-gradient">actually use it.</span>
            </>
          ),
          description: "Four moves that replace the check-run ritual.",
          steps: [
            {
              icon: Mail,
              title: "Invoice arrives — auto-captured",
              body: "Vendor emails the invoice or Innrly pulls it from the portal. OCR extracts header data, vendor memory pre-codes the GL.",
            },
            {
              icon: ListChecks,
              title: "Review · Approve · Pay",
              body: "One screen for the controller. Approval rules match property and threshold. No app-switching.",
            },
            {
              icon: Send,
              title: "Pay via Virtual Card or ACH",
              body: "Pick the rail. Virtual Cards generate per-vendor, per-transaction so fraud exposure stays at zero.",
            },
            {
              icon: ShieldCheck,
              title: "Reconciled automatically",
              body: "Settlement posts to QuickBooks / M3 / Sage Intacct with the right GL code, vendor, and property. Done.",
            },
          ],
          artifact: <InnrlyPayCheckRun />,
        }}
        replaces={{
          title: (
            <>
              What Innrly Pay <span className="text-gradient">consolidates.</span>
            </>
          ),
          description:
            "One product instead of four — these line items disappear from the back-office stack.",
          items: [
            "Paper checks",
            "Check-signing trips",
            "Manual invoice data entry",
            "Standalone AP automation subscriptions",
            "Bank deposit reconciliation by hand",
            'Vendor "where\'s my payment?" calls',
            "Stamps and envelopes",
          ],
        }}
        quote={{
          text: t?.quote || "We were paying $14K a year for a separate AP automation tool. Innrly Pay does more, sits in the same product as the rest of our back office, and is included with our subscription. The switch paid for the whole platform.",
          author: t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "Controller · 9-property select-service group",
        }}
        modules={{
          title: (
            <>
              The modules behind <span className="text-gradient">Innrly Pay.</span>
            </>
          ),
          description: "Each module deep-links into the Features page.",
          items: [
            { name: "Invoice Capture", body: "Email, scan, or portal pull — OCR'd on arrival." },
            {
              name: "Vendor Memory",
              body: "GL code learned per vendor; future invoices pre-coded.",
            },
            { name: "Approval Flow", body: "Property and threshold rules; mobile-friendly." },
            { name: "Virtual Cards", body: "Per-vendor, per-transaction — zero fraud exposure." },
            {
              name: "ACH Payments",
              body: "Same workflow as cards; pick the right rail per vendor.",
            },
            { name: "Accounting Sync", body: "QuickBooks, M3, Sage Intacct — always reconciled." },
          ],
        }}
        faq={{
          title: (
            <>
              What A/P teams <span className="text-gradient">actually ask us.</span>
            </>
          ),
          items: [
            {
              q: "Is it really free?",
              a: "Innrly Pay is included free on the annual Professional plan. On Starter or monthly Professional it's available as a paid add-on. We make money on interchange when vendors accept Virtual Cards — not on per-payment fees.",
            },
            {
              q: "What if a vendor only takes checks?",
              a: "Innrly will print and mail the check for you, then reconcile it automatically. You still never touch the check stock.",
            },
            {
              q: "How does the approval flow handle multi-property?",
              a: "Rules are scoped by property and dollar threshold. A GM can approve up to their cap; the controller sees everything above it.",
            },
            {
              q: "What accounting systems do you sync with?",
              a: "QuickBooks (two-way sync), M3 (certified push integration), Sage Intacct, and others. Vendor master and GL stay aligned so your accounting system remains the system of record.",
            },
          ],
        }}
        cta={{
          title: "Stop writing checks",
          subtitle:
            "A 20-minute demo. You'll see the invoice come in, get approved, paid, and reconciled — start to finish, in real time.",
        }}
      />
    </div>
  );
}
