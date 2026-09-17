import { createFileRoute, Link } from '@tanstack/react-router'
import { breadcrumbLd, defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";
import { fetchTestimonials, type Testimonial } from "@/lib/testimonials";
import { Receipt, CreditCard, Repeat, Brain, ArrowDownToLine } from "lucide-react";
import { DeepSolutionLayout } from "@/components/site/DeepSolutionLayout";
import { BeforeAfterFlow } from "@/components/site/BeforeAfterFlow";
import { ExpenseChaos } from "@/components/site/ExpenseChaos";
import { ExpenseFlow } from "@/components/site/ExpenseFlow";
import { Section } from "@/components/site/Section";

export const Route = createFileRoute("/solutions/expense-entries")({
  component: Page,
  loader: async () => {
    const seo = await fetchSeoData("/solutions/expense-entries");
    const allTestimonials = await fetchTestimonials();
    return { seo, testimonials: allTestimonials };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/solutions/expense-entries"],
        "/solutions/expense-entries"
      ),
      { property: "og:image:alt", content: "The $400 invoice no one coded. We found it." },
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/solutions/expense-entries" }],
    scripts: [
      breadcrumbLd([
        { name: "Home", url: "/" },
        { name: "Solutions", url: "/solutions" },
        { name: "Expense Entries", url: "/solutions/expense-entries" },
      ]),
    ],
  }),
});

function Page() {
  const { testimonials: allTestimonials } = Route.useLoaderData();
  const t = allTestimonials.find((t: Testimonial) => t.page === "expense-entries");
  return (
    <div className="bg-background">
      {/* TOP-OF-PAGE chaos → coded animation */}
      <Section tone="surface" className="py-5 sm:py-6">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            From spreadsheet to synced
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Watch one charge go from chaos to coded in 6 seconds.
          </h2>
        </div>
        <div className="mx-auto max-w-6xl">
          <BeforeAfterFlow
            chaos={<ExpenseChaos />}
            after={(playKey) => <ExpenseFlow playKey={playKey} />}
            motion="expenses"
          />
        </div>
      </Section>

      <DeepSolutionLayout
        icon={Receipt}
        orbVariant="expense"
        persona="For Controllers & Property Accountants"
        eyebrow="Expense Entries"
        title={
          <>
            Record once, <span className="text-gradient">sync to your GL.</span>
          </>
        }
        description={
          <>
            Capture expense tickets, credit card charges, and auto-paid invoices directly in Innrly
            as expense items — they sync to your accounting system (QuickBooks, M3, Sage Intacct,
            and others) as already-spent transactions, so your ledger stays current without double
            entry. Find out how this is managed under our broader{" "}
            <Link
              to="/hotel-back-office-automation"
              className="text-accent underline font-semibold"
            >
              hotel back-office automation
            </Link>{" "}
            framework.
          </>
        }
        bullets={[
          "Log credit card charges as they happen",
          "Record auto-paid invoices (utilities, subscriptions, recurring vendors)",
          "GL-code at entry — Innrly remembers the vendor mapping",
          "One-way sync to your accounting system as expense / already-paid items",
        ]}
        metrics={[
          { stat: "1", label: "Place to enter" },
          { stat: "Auto", label: "GL sync" },
          { stat: "0", label: "Duplicate entries" },
          { stat: "Real-time", label: "Spend visibility" },
        ]}
        beforeAfter={{
          title: (
            <>
              From <span className="text-gradient">"who paid for that?"</span> to a clean GL.
            </>
          ),
          description:
            "Not every charge is an AP invoice. Credit card swipes and auto-debits used to live in side-spreadsheets. Now they post to the GL the day they happen.",
          withoutTitle: "The side-spreadsheet sprawl",
          without: [
            "Credit card statement reconciled by hand at month-end",
            "Auto-paid utility invoices discovered three weeks after the debit",
            "GL coding done from memory at the close meeting",
            "Same vendor coded three different ways across three properties",
          ],
          withTitle: "Posted the day it's spent",
          withItems: [
            "Card swipes logged from the property the same day",
            "Recurring auto-debits captured before they hit the statement",
            "Vendor memory pre-codes the next charge from the same vendor",
            "Portfolio-wide consistency — same vendor, same code, every time",
          ],
        }}
        workflow={{
          title: (
            <>
              How controllers <span className="text-gradient">actually use it.</span>
            </>
          ),
          description: "Four moves that close the credit-card and auto-debit gap.",
          steps: [
            {
              icon: CreditCard,
              title: "On-property — log the card swipe",
              body: "GM or AGM enters the charge from the property in seconds. Vendor, amount, GL code (pre-filled if Innrly recognizes the vendor).",
            },
            {
              icon: Repeat,
              title: "Recurring — auto-debits captured",
              body: "Utilities, SaaS, recurring vendors — set them up once with their cadence and Innrly drops the expense entry the day it's debited.",
            },
            {
              icon: Brain,
              title: "Vendor memory does the coding",
              body: "Innrly learns your GL mapping per vendor across the portfolio. The next charge from Sysco is pre-coded before you click.",
            },
            {
              icon: ArrowDownToLine,
              title: "Sync — straight to your GL",
              body: "Each entry posts to QuickBooks, M3, Sage Intacct, or whatever you run, as an already-paid transaction. No CSV imports, no manual journal entries.",
            },
          ],
          artifact: <ExpenseFlow playKey={0} />,
        }}
        replaces={{
          title: (
            <>
              What Expense Entries <span className="text-gradient">replaces.</span>
            </>
          ),
          description: "These things go away.",
          items: [
            "Credit card reconciliation spreadsheets",
            "Manual journal entries for auto-paid invoices",
            '"Who swiped this card?" email threads',
            "Inconsistent GL coding across properties",
            'Month-end "what was that charge?" hunts',
            "CSV imports into QuickBooks",
            "Side-spreadsheets that never tie to the GL",
          ],
        }}
        quote={{
          text: t?.quote || "We used to discover utility auto-debits two weeks after they hit. Now they post the day they're spent, coded correctly, and the GL is current. Our close dropped from twelve days to four.",
          author: t ? [t.name, t.title, t.company].filter(Boolean).join(" · ") : "Controller · 5-property portfolio",
        }}
        modules={{
          title: (
            <>
              The modules behind <span className="text-gradient">the entry.</span>
            </>
          ),
          description: "Each module deep-links into the Features page.",
          items: [
            { name: "Card-Swipe Entry", body: "On-property logging in under 20 seconds." },
            { name: "Recurring Auto-Debits", body: "Set the cadence, Innrly posts the entry." },
            { name: "Vendor Memory", body: "Pre-codes the next charge from the same vendor." },
            { name: "GL Sync", body: "Posts to QuickBooks, M3, Sage Intacct, and more." },
            {
              name: "Property Scoping",
              body: "Every entry tied to a property for per-property P&L.",
            },
            { name: "Audit Trail", body: "Who entered, when, with what receipt." },
          ],
        }}
        faq={{
          title: (
            <>
              What controllers <span className="text-gradient">actually ask us.</span>
            </>
          ),
          items: [
            {
              q: "Which accounting systems sync?",
              a: "QuickBooks Online, QuickBooks Desktop, M3, Sage Intacct, NetSuite, and most major systems. Sync is one-way (Innrly → GL) so your accounting tool stays the source of truth for the ledger.",
            },
            {
              q: "What about receipts? Do we attach them?",
              a: "Yes. Snap or upload a receipt at entry — it stays attached to the GL transaction so audit week is a two-click export.",
            },
            {
              q: "How is this different from an AP tool?",
              a: "AP tools handle invoices that haven't been paid yet. Expense Entries handles charges that already happened — card swipes, auto-debits, and tickets — and posts them as already-paid transactions.",
            },
            {
              q: "Can we approve before sync?",
              a: "Yes. Optional approval workflow per property or above a dollar threshold. Below the threshold, entries sync the same day.",
            },
          ],
        }}
        cta={{
          title: "See your card statement on Innrly",
          subtitle:
            "A 20-minute demo using one of your properties' credit card and auto-debit history. You'll see the GL-coded version in real time.",
        }}
      />
    </div>
  );
}
