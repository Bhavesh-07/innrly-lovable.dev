import { createFileRoute, Link } from '@tanstack/react-router'
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";
import { FolderArchive, CalendarDays, Upload, Search, ShieldCheck } from "lucide-react";
import { DeepSolutionLayout } from "@/components/site/DeepSolutionLayout";
import { BeforeAfterFlow } from "@/components/site/BeforeAfterFlow";
import { DocVaultChaos } from "@/components/site/DocVaultChaos";
import { DocVaultFlow } from "@/components/site/DocVaultFlow";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/solutions/document-vault")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/solutions/document-vault");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/solutions/document-vault"],
        "/solutions/document-vault"
      ),
      {
        property: "og:image:alt",
        content: "Every folio, W-9, and STR report — in one place, on time.",
      },
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/solutions/document-vault" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Solutions", url: "/solutions" },
        { name: "Document Vault", url: "/solutions/document-vault" },
      ]),
    ],
  }),
});

function Page() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "document-vault");
  return (
    <div className="bg-background">
      {/* TOP-OF-PAGE chaos → calendar animation */}
      <Section tone="surface" className="py-5 sm:py-6">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            From a paper avalanche to a calendar
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Watch a month of paperwork file itself in 6 seconds.
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <BeforeAfterFlow
            chaos={<DocVaultChaos />}
            after={(playKey) => <DocVaultFlow playKey={playKey} />}
            motion="documents"
          />
        </div>
      </Section>

      <DeepSolutionLayout
        icon={FolderArchive}
        orbVariant="vault"
        persona="For Back-Office & Accounting Teams"
        eyebrow="Document Vault"
        title={
          <>
            Every document, <span className="text-gradient">on the day it landed.</span>
          </>
        }
        description={
          <>
            Document Vault is laid out as a calendar. Each night, the PMS audit pack and supporting
            files for every property are dropped automatically into that day's slot. Need to add
            something? Upload any file to any day — for future reference, audit prep, or quick
            recall. Learn how this calendar layout fits into our broader{" "}
            <Link
              to="/hotel-back-office-automation"
              className="text-accent underline font-semibold"
            >
              hotel back-office automation
            </Link>{" "}
            system.
          </>
        }
        accountingNote={false}
        bullets={[
          "Calendar view — one tile per day, per property",
          "Nightly auto-dump of PMS night-audit reports & supporting files",
          "Manual upload to any date for invoices, contracts, franchise letters",
          "Searchable across properties, dates, vendors, and document types",
        ]}
        metrics={[
          { stat: "Daily", label: "Auto file dump" },
          { stat: "Any", label: "Manual upload" },
          { stat: "365", label: "Days at a glance" },
          { stat: "0", label: "Lost paperwork" },
        ]}
        beforeAfter={{
          title: (
            <>
              From <span className="text-gradient">"who has that PDF?"</span> to "click the date."
            </>
          ),
          description:
            "Audit week stops being a scavenger hunt when the filing system is the calendar itself.",
          withoutTitle: "The paper scavenger hunt",
          without: [
            "Hunt through shared drives with cryptic folder names",
            "Email three GMs asking who has last Tuesday's night-audit pack",
            "Re-scan vendor invoices because the original got filed wrong",
            "Discover during an audit that March is missing two folios",
          ],
          withTitle: "The calendar is the filing system",
          withItems: [
            "Click the date — the whole night's paperwork is there",
            "PMS night-audit pack lands automatically across every property",
            "Drag-drop any PDF/scan onto a day to keep it with that night",
            "Search by vendor, date, property, or document type in one box",
          ],
        }}
        workflow={{
          title: (
            <>
              How back-office teams <span className="text-gradient">actually use it.</span>
            </>
          ),
          description: "Four habits that replace the shared drive.",
          steps: [
            {
              icon: CalendarDays,
              title: "Overnight — the calendar fills itself",
              body: "While the property sleeps, Innrly pulls the night-audit pack, manager reports, and supporting files from every PMS and drops them onto today's tile.",
            },
            {
              icon: Upload,
              title: "Morning — drop extras onto any day",
              body: "Vendor invoice came in late? Franchise letter just landed? Drag it onto the right date so it lives with the rest of that day's records.",
            },
            {
              icon: Search,
              title: "Anytime — search across the portfolio",
              body: "Find every Sysco invoice in Q2 across all six properties in one query. No folder hunting, no naming conventions to remember.",
            },
            {
              icon: ShieldCheck,
              title: "Audit week — hand over the date",
              body: "When the inspector asks for March 14 at the Hampton, you click the date and export the packet. Done.",
            },
          ],
          artifact: <DocVaultFlow playKey={0} />,
        }}
        replaces={{
          title: (
            <>
              What Document Vault <span className="text-gradient">replaces.</span>
            </>
          ),
          description: "These things go away.",
          items: [
            "Shared drives with cryptic folder names",
            "Manual email of night-audit packs to corporate",
            '"Where did we save that?" Slack threads',
            "Paper invoice binders at the property",
            "Scanning the same vendor invoice twice",
            "Audit-week scavenger hunts",
            "Per-property storage logins",
          ],
        }}
        quote={{
          text: t?.quote || "Audit week used to be three days of digging through email. Now I send the inspector a date range and the export. Document Vault didn't just save us time — it gave us our audit confidence back.",
          author: t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "Corporate Controller · 6-property portfolio",
        }}
        modules={{
          title: (
            <>
              The modules behind <span className="text-gradient">the calendar.</span>
            </>
          ),
          description: "Each module deep-links into the Features page.",
          items: [
            {
              name: "PMS Night-Audit Capture",
              body: "Auto-pulls the nightly pack from every PMS.",
            },
            { name: "Calendar Filing", body: "Every file lives on the date it belongs to." },
            { name: "Manual Drop-Zone", body: "Drag any PDF, image, or scan onto any day." },
            { name: "Portfolio Search", body: "Vendor, date, type, property — one query." },
            { name: "Audit Export", body: "Date-range packet ready for the inspector." },
            {
              name: "Retention & Access",
              body: "Role-based access and retention by document type.",
            },
          ],
        }}
        faq={{
          title: (
            <>
              What back-office teams <span className="text-gradient">actually ask us.</span>
            </>
          ),
          items: [
            {
              q: "Which PMS night-audit packs do you support?",
              a: "OnQ, PEP, FOSSE, StayNTouch, HotelKey, Choice Advantage, and most major PMS platforms. New connectors are added without a project on your side.",
            },
            {
              q: "Can we upload files that didn't come from the PMS?",
              a: "Yes. Vendor invoices, franchise communications, repair receipts, W-9s — drag them onto any day. They live with that date forever.",
            },
            {
              q: "How long are documents retained?",
              a: "Default is seven years; you can extend per document type or per property to match your retention policy.",
            },
            {
              q: "Who can see what?",
              a: "Role-based access by property and by document type. A GM sees their own property, corporate sees the portfolio, auditors get a read-only date range.",
            },
          ],
        }}
        cta={{
          title: "See the calendar with your own paperwork",
          subtitle:
            "A 20-minute demo with one property's PMS feed. You'll see last week's audit packs already on the calendar.",
        }}
      />
    </div>
  );
}
