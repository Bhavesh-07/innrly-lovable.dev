import { createFileRoute, Link } from "@tanstack/react-router";
import { ModuleSpotlightCard } from "@/components/site/ModuleSpotlightCard";
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";
import { Clock, Smartphone, Fingerprint, AlarmClock, BarChart3 } from "lucide-react";
import { DeepSolutionLayout } from "@/components/site/DeepSolutionLayout";
import { InnrlyShiftSnapshot } from "@/components/site/InnrlyShiftSnapshot";
import { BeforeAfterFlow } from "@/components/site/BeforeAfterFlow";
import { ShiftChaos } from "@/components/site/ShiftChaos";
import { FaceIDPunch } from "@/components/site/FaceIDPunch";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/solutions/innrly-shift")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/solutions/innrly-shift");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/solutions/innrly-shift"],
        "/solutions/innrly-shift"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/solutions/innrly-shift" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Innrly Shift",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: "/solutions/innrly-shift",
          offers: { "@type": "Offer", priceCurrency: "USD" },
        }),
      },
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Solutions", url: "/solutions" },
        { name: "Innrly Shift", url: "/solutions/innrly-shift" },
      ]),
    ],
  }),
});

function Page() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "innrly-shift");
  return (
    <div className="bg-background">
      <ModuleSpotlightCard
        moduleKey="shift"
        moduleName="Innrly Shift"
        pricing="included"
        blurb="Scheduling, Face-ID TimeClock, and labor analytics ship free with every 90-day trial."
      />
      <Section tone="surface" className="py-5 sm:py-6">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Face → Punch → Done · in 0.8 seconds
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Retire the shared PIN pad. Every punch is the person.
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <BeforeAfterFlow
            chaos={<ShiftChaos />}
            after={(playKey) => <FaceIDPunch playKey={playKey} />}
            chaosLabel="Shared PIN · buddy-punching"
            afterLabel="Innrly Face-ID TimeClock"
            motion="pulse"
          />
        </div>
      </Section>

      <Section className="py-10">
        <div className="mx-auto max-w-5xl rounded-2xl border border-border/60 bg-card/40 p-6 text-center sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Works with what you already have
          </p>
          <h2 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
            Keep your TimeClock. Keep your PMS. Keep your payroll provider.
          </h2>
          <p className="mt-3 text-sm text-muted-foreground sm:text-base">
            Innrly Shift runs on your existing time-and-attendance hardware — PIN pads, badge
            readers, tablet kiosks — and connects to 50+ hotel systems including Opera, OnQ, FOSSE,
            Cloudbeds, Mews, M3, QuickBooks, Sage Intacct, ADP, and Paychex. Face-ID TimeClock is
            the upgrade path, not the price of entry.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            <span>Opera</span>
            <span>·</span>
            <span>OnQ</span>
            <span>·</span>
            <span>FOSSE</span>
            <span>·</span>
            <span>Cloudbeds</span>
            <span>·</span>
            <span>Mews</span>
            <span>·</span>
            <span>M3</span>
            <span>·</span>
            <span>QuickBooks</span>
            <span>·</span>
            <span>Sage Intacct</span>
            <span>·</span>
            <span>ADP</span>
            <span>·</span>
            <span>Paychex</span>
          </div>
          <a
            href="/integrations"
            className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
          >
            See all 50+ integrations →
          </a>
        </div>
      </Section>

      <DeepSolutionLayout
        icon={Clock}
        orbVariant="shift"
        persona="For Hotel General Managers"
        eyebrow="Innrly Shift · Scheduling, TimeClock, Payroll"
        title={
          <>
            The whole hotel's labor, <span className="text-gradient">in five minutes.</span>
          </>
        }
        description={
          <>
            A GM shouldn't need three tabs and a phone call to know how labor is trending. Innrly
            Shift bundles scheduling, housekeeping productivity, OT guardrails, and payroll
            execution into one mobile-first product — and it works with the TimeClock hardware you
            already own. Learn how this fits into{" "}
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
          "Keep your current TimeClock — PIN pad, badge reader, anything — and still get scheduling, MPOR, OT guardrails, and payroll export",
          "One 5-minute daily snapshot, same format every morning",
          "Housekeeping standards auto-adjust to today's occupancy",
          "Face-ID clock-in is the upgrade path — biometric punch when you want it, not when a vendor forces it",
          "$149/mo per property — Shift add-on price, all-in: scheduling, TimeClock, MPOR, payroll export",
        ]}
        metrics={[
          { stat: "$149", label: "/mo per property — Shift add-on" },
          { stat: "Any", label: "TimeClock works — Face-ID optional" },
          { stat: "5min", label: "Daily snapshot" },
          { stat: "MPOR", label: "Auto-adjusts to occupancy" },
        ]}
        beforeAfter={{
          title: (
            <>
              From <span className="text-gradient">four vendors</span> to one product.
            </>
          ),
          description:
            "Most hotel GMs stitch together a scheduler, a TimeClock, a payroll tool, and a spreadsheet. Innrly Shift is one screen instead.",
          withoutTitle: "The Frankenstack",
          without: [
            "Schedule in one tool, clock in another, payroll in a third",
            "Reconcile hours between them by hand every Friday",
            "Discover OT after payroll closes — too late to act",
            "Flat MPOR standards that are wrong half the year",
          ],
          withTitle: "One mobile-first product",
          withItems: [
            "Schedule, clock, productivity, and payroll all in one product",
            "Standards auto-adjust to the day's actual occupancy from PMS",
            "OT guardrails flag the employee at clock-in, not after",
            "Approvals from your phone — Sunday at 8 PM if you want",
          ],
        }}
        workflow={{
          title: (
            <>
              How GMs <span className="text-gradient">actually use it.</span>
            </>
          ),
          description: "The 5-minute daily labor habit.",
          steps: [
            {
              icon: AlarmClock,
              title: "Morning — open the snapshot",
              body: "Labor %, MPOR, hours vs forecast, OT risk count. The whole hotel's labor on one phone screen, every morning, same format.",
            },
            {
              icon: Fingerprint,
              title: "Clock-ins start — Face-ID verifies",
              body: "Each punch is the person. OT-risk staff get flagged the moment they swipe — you can send them home before the hours land.",
            },
            {
              icon: BarChart3,
              title: "Mid-day — housekeeping matrix",
              body: "Rooms cleaned per shift, MPOR by attendant, variance vs standard. Coach the outlier today, not at week's end.",
            },
            {
              icon: Smartphone,
              title: "Friday — approve from phone",
              body: "Variance cards, not timesheets. Approve, push to payroll, done. Total time: minutes.",
            },
          ],
          artifact: <InnrlyShiftSnapshot />,
        }}
        replaces={{
          title: (
            <>
              What Innrly Shift <span className="text-gradient">replaces.</span>
            </>
          ),
          description: "These things go away.",
          items: [
            "Standalone scheduling tools",
            "PIN-pad TimeClocks",
            "Separate payroll prep spreadsheets",
            "Weekly OT firefights",
            "Manual hours-vs-forecast tallies",
            "Paper timecards",
            "Flat MPOR standards",
          ],
        }}
        quote={{
          text: t?.quote || "I used to spend Sunday night on next week's schedule and Friday afternoon fixing payroll. Innrly Shift gave me both nights back. The snapshot is the only labor screen I open all day.",
          author: t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "GM · 110-room Holiday Inn Express",
        }}
        modules={{
          title: (
            <>
              The modules behind <span className="text-gradient">Innrly Shift.</span>
            </>
          ),
          description: "Each module deep-links into the Features page.",
          items: [
            { name: "5-Min Labor Snapshot", body: "Same numbers, same format, every day." },
            { name: "Smart Scheduling", body: "Build from PMS forecast in one click." },
            {
              name: "Works With Your TimeClock",
              body: "PIN, badge, or kiosk you already own — fully supported.",
            },
            {
              name: "Face-ID TimeClock (optional)",
              body: "Biometric punch-in when you want to retire shared PINs.",
            },
            { name: "Housekeeping Matrix", body: "MPOR, rooms-per-shift, variance vs standard." },
            { name: "OT Guardrails", body: "Flag at clock-in, not after the run." },
            {
              name: "Staff Mobile App",
              body: "Schedules, shift swap requests, broadcasts, time-off — in the staff's pocket.",
            },
            { name: "Mobile Approvals", body: "Variance cards on your phone." },
          ],
        }}
        faq={{
          title: (
            <>
              What GMs <span className="text-gradient">actually ask us.</span>
            </>
          ),
          items: [
            {
              q: "Do we have to replace our current TimeClock?",
              a: "No. Innrly Shift works with the time-and-attendance hardware you already own — PIN pads, badge readers, tablet kiosks. You get scheduling, MPOR, OT guardrails, and payroll export regardless. Face-ID is the upgrade path when you're ready to retire shared PINs.",
            },
            {
              q: "How does Innrly Shift price against Actabl / Hotel Effectiveness?",
              a: "Innrly Shift is published at $149 per property per month — all-in for scheduling, TimeClock (works with your existing clock or Innrly's Face-ID), housekeeping productivity, OT guardrails, and payroll export. Actabl's labor suite (PerfectLabor, PerfectTime, CoverageFinder, PerfectEngage, PerfectWage) is quote-based and priced per module per property, so a comparable multi-module labor setup typically costs more than a single all-in add-on. Full breakdown on the Innrly: alternative to Actabl page.",
            },
            {
              q: "How is Shift different from a standalone scheduler?",
              a: "A standalone scheduler doesn't know your occupancy, doesn't know who clocked in, and doesn't talk to payroll. Shift does all three because it lives inside the same product as your PMS feed.",
            },
            {
              q: "Do we have to switch payroll providers?",
              a: "No. Shift exports approved hours to ADP, Paychex, and most payroll providers. Keep your provider — just stop the Friday reconciliation.",
            },
            {
              q: "Can a multi-property owner see all GMs at once?",
              a: "Yes. Each GM owns their 5-minute snapshot; the owner gets a roll-up that pairs with Innrly Business Intelligence.",
            },
            {
              q: "What's it like for housekeeping staff?",
              a: "They get a mobile app for their schedule, shift swaps, broadcasts, and time-off requests. No badges, no PINs to share. Face-ID at the kiosk is optional.",
            },
          ],
        }}
        cta={{
          title: "See the 5-minute snapshot",
          subtitle:
            "A 20-minute demo using one of your properties. You'll see Tuesday's OT risk before Friday's payroll.",
        }}
      />
    </div>
  );
}
