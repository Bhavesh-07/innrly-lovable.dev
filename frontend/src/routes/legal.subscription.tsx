import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/legal/subscription")({
  component: SubscriptionPage,
  loader: async () => {
    const seo = await fetchSeoData("/legal/subscription");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/legal/subscription"],
        "/legal/subscription"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/legal/subscription" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Subscription Services Agreement — Innrly",
          url: "/legal/subscription",
          isPartOf: { "@type": "WebSite", name: "Innrly", url: "/" },
        }),
      },
    ],
  }),
});

function SubscriptionPage() {
  return (
    <div className="bg-background">
      <Section className="max-w-3xl py-16">
        <h1 className="text-4xl font-bold text-foreground">Subscription Services Agreement</h1>
        <p className="mt-2 text-sm text-muted-foreground">Last updated: June 8, 2026</p>

        <div className="prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground">
          <p>
            This Subscription Services Agreement (the &ldquo;Agreement&rdquo;) governs your
            subscription to the Innrly hotel back-office platform (the &ldquo;Service&rdquo;). By
            signing an order form, accepting a quote, or using the Service, you (the
            &ldquo;Customer&rdquo;) agree to these terms. The Service is provided by Mystic Solutions LLC, d/b/a Innrly
            (&ldquo;Innrly,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;).
          </p>

          <h2 className="text-2xl font-semibold text-foreground">1. Subscription plans</h2>
          <p>
            Innrly is offered on a per-property basis under either a month-to-month plan or an
            annual plan, at the rates published on{" "}
            <a href="/pricing" className="underline">
              innrly.com/pricing
            </a>{" "}
            or in your order form. Customer may add or remove properties at any time; additions are
            pro-rated for the current billing period.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">2. Free trial</h2>
          <p>
            New customers may receive a 90-day free trial with full feature access. No payment
            method is required to begin the trial. At the end of the trial, the subscription does
            not auto-convert; Customer must affirmatively select a plan to continue using the
            Service.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">3. Fees and billing</h2>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Month-to-month plans</strong> are billed quarterly
              in advance (every three months) and may be cancelled at any time effective at the end
              of the then-current quarterly billing period. No refunds are issued for partial
              quarters.
            </li>
            <li>
              <strong className="text-foreground">Annual plans</strong> are billed in advance for
              the full 12-month term and include onboarding at no additional charge.
            </li>
            <li>
              Setup fees, if any, are stated on the order form and are due before the Service is
              activated.
            </li>
            <li>
              Fees are exclusive of taxes; Customer is responsible for all applicable sales, use,
              and similar taxes.
            </li>
            <li>
              Late payments accrue interest at the lesser of 1.5% per month or the maximum rate
              permitted by law.
            </li>
          </ul>

          <h2 className="text-2xl font-semibold text-foreground">4. Renewal</h2>
          <p>
            Month-to-month subscriptions renew automatically each quarter until cancelled. Annual
            subscriptions renew automatically for successive 12-month terms unless either party
            gives written notice of non-renewal at least thirty (30) days before the end of the
            then-current term.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">5. Suspension</h2>
          <p>
            We may suspend the Service if (a) Customer&rsquo;s account is more than thirty (30) days
            past due, (b) Customer materially breaches this Agreement and fails to cure within ten
            (10) days of written notice, or (c) Customer&rsquo;s use of the Service poses a security
            or operational risk to other customers.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">6. Data ownership</h2>
          <p>
            Customer retains all rights, title, and interest in and to data uploaded to or generated
            within the Service (&ldquo;Customer Data&rdquo;). Innrly receives a limited license to
            host, process, and display Customer Data solely as needed to provide the Service. We do
            not sell Customer Data. We may use aggregated, de-identified data to improve the
            Service.
          </p>
          <p>
            <strong className="text-foreground">No PHI.</strong> The Service is not a
            HIPAA-compliant platform. Customer represents and warrants that it will not upload,
            transmit, or store Protected Health Information (as defined by HIPAA) in the Service.
            Innrly is not a Business Associate, will not execute a Business Associate Agreement, and
            has no obligations under HIPAA with respect to Customer Data. Customer will indemnify
            Innrly against any claim arising from PHI submitted in violation of this provision.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">7. Data export and deletion</h2>
          <p>
            Customer may export Customer Data at any time during the subscription via the in-product
            export tools or documented APIs. Upon termination or expiration, Innrly will retain
            Customer Data in a retrievable state for ninety (90) days (the &ldquo;Export
            Window&rdquo;) so Customer can export it in industry-standard formats (CSV, JSON, and
            PDF for documents). On written request during the Export Window, Innrly will also
            provide a one-time full export at no additional charge. After the Export Window, Innrly
            will delete Customer Data from production systems within thirty (30) days, with residual
            copies in encrypted backups purged on the standard 35-day rolling rotation, except where
            longer retention is required by law.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            8. Service availability &amp; credits
          </h2>
          <p>
            Innrly is built and operated to enterprise hospitality-grade standards, with redundant
            cloud infrastructure, continuous automated monitoring, and on-call engineering coverage.
            Innrly will use commercially reasonable efforts to keep the production platform
            continuously available to Customer, and to investigate and resolve service interruptions
            promptly.
          </p>
          <p>
            If Customer experiences a service interruption attributable to Innrly that materially
            affects Customer&rsquo;s use of the Service for an extended period within a calendar
            month, Customer may request a service credit against the following month&rsquo;s fees
            for the affected properties. Credits are determined by Innrly in good faith based on the
            duration and operational impact of the interruption. Service credits are
            Customer&rsquo;s sole and exclusive remedy for service interruptions and, in aggregate,
            will not exceed fifty percent (50%) of one (1) month of fees for the affected properties
            in any month.
          </p>
          <p>
            Credit eligibility excludes: (a) scheduled maintenance announced at least forty-eight
            (48) hours in advance, (b) emergency security patching, (c) force majeure events, (d)
            issues originating on Customer&rsquo;s network, devices, or third-party systems, and (e)
            outages in third-party integrations (including PMS, accounting, and banking providers)
            outside Innrly&rsquo;s reasonable control. Credit requests must be submitted in writing
            within thirty (30) days of the end of the affected month.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">9. Confidentiality</h2>
          <p>
            Each party will protect the other&rsquo;s Confidential Information with at least the
            same care it uses for its own confidential information, and not less than a reasonable
            standard of care, and will use Confidential Information only to perform under this
            Agreement.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">10. IP indemnification</h2>
          <p>
            Subject to the limits and exclusions in this Section and the overall limitation of
            liability in Section 13, Innrly will defend Customer against any unaffiliated
            third-party claim alleging that Customer&rsquo;s properly licensed use of the unmodified
            Service, as delivered by Innrly and used in accordance with this Agreement and the
            Documentation, directly infringes a U.S. patent, copyright, or registered trademark
            issued or registered as of the Effective Date, and will pay damages and reasonable
            attorneys&rsquo; fees finally awarded by a court of competent jurisdiction against
            Customer, or agreed by Innrly in a written settlement, provided that Customer (a)
            promptly notifies Innrly in writing of the claim, (b) gives Innrly sole control of the
            defense and settlement, and (c) provides reasonable cooperation at Innrly&rsquo;s
            expense.
          </p>
          <p>
            If the Service is, or in Innrly&rsquo;s reasonable opinion is likely to become, the
            subject of an infringement claim, Innrly may, at its option and expense: (i) procure for
            Customer the right to continue using the Service; (ii) modify or replace the Service to
            be non-infringing while preserving substantially equivalent functionality; or (iii)
            terminate the affected subscription and refund any prepaid unused fees for the remaining
            term. Innrly has no obligation for claims arising from or relating to (1) modifications
            to the Service not made by Innrly, (2) combination, operation, or use of the Service
            with software, data, hardware, services, or systems not provided by Innrly where the
            claim would have been avoided absent such combination, (3) Customer Data or any content,
            data, or input supplied by or on behalf of Customer, (4) use of the Service in violation
            of this Agreement, applicable law, or the Documentation, (5) use of any version of the
            Service other than the most current version made available by Innrly, where use of the
            current version would have avoided the claim, or (6) any open-source components used in
            accordance with their own licenses. This Section states Innrly&rsquo;s sole liability,
            and Customer&rsquo;s sole and exclusive remedy, for any third-party claim of
            intellectual property infringement.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">11. Insurance</h2>
          <p>
            During the term, Innrly will maintain, at its own expense, cyber liability insurance
            (covering data breach response, privacy liability, network security liability, and
            regulatory defense) with limits of not less than
            <strong className="text-foreground"> $1,000,000 per claim and in the aggregate</strong>.
            Upon written request, Innrly will provide a certificate of insurance evidencing such
            coverage. This coverage does not increase or otherwise modify the limitation of
            liability in Section 13.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">12. Warranty disclaimer</h2>
          <p>
            Except as expressly set forth in this Agreement, the Service is provided &ldquo;as
            is&rdquo; and Innrly disclaims all other warranties, express or implied, including any
            implied warranties of merchantability, fitness for a particular purpose, and
            non-infringement.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">13. Limitation of liability</h2>
          <p>
            Except for Customer&rsquo;s payment obligations (which remain uncapped), each
            party&rsquo;s aggregate liability under this Agreement, including under indemnification
            and confidentiality obligations, is capped at the greater of (a) two (2) times the fees
            paid or payable by Customer in the twelve (12) months preceding the event giving rise to
            the claim, or (b) one million U.S. dollars ($1,000,000). Neither party is liable for
            indirect, incidental, consequential, special, exemplary, or punitive damages, or for
            lost profits, lost revenue, or loss of business opportunity, even if advised of the
            possibility of such damages.
          </p>
          <p>
            <strong className="text-foreground">Additional carve-outs.</strong> Notwithstanding
            anything to the contrary, Innrly has no liability for, and the foregoing cap does not
            entitle Customer to recover for: (i) wage-and-hour, employment, labor, scheduling, or
            biometric-privacy claims brought by Customer&rsquo;s workforce or any government agency;
            (ii) losses arising from third-party payment processors, banks, or payment rails,
            including misdirected, duplicate, fraudulent, or unauthorized disbursements; or (iii)
            inaccuracies, delays, or unavailability of data delivered by third-party data
            aggregators or by Customer&rsquo;s financial institutions.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">14. Termination</h2>
          <p>
            Either party may terminate this Agreement for material breach not cured within thirty
            (30) days of written notice. Customer may cancel month-to-month plans at any time
            effective at the end of the then-current quarterly billing period. Termination does not
            relieve Customer of fees owed for the term already in effect.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">15. Governing law</h2>
          <p>
            This Agreement is governed by the laws of the State of Louisiana, without regard to its
            conflict of law principles. The parties consent to the exclusive jurisdiction of the
            state and federal courts located in Louisiana.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            16. Workforce records &amp; biometric time clock
          </h2>
          <p>
            Innrly&rsquo;s time-and-attendance, scheduling, and labor modules are recordkeeping
            tools, not legal, payroll, or human-resources advice. Customer is the sole employer of
            record for its workforce and is solely responsible for compliance with the Fair Labor
            Standards Act, applicable state and local wage-and-hour laws, overtime classification,
            meal- and rest-break rules, minor-labor restrictions, predictive-scheduling ordinances,
            and recordkeeping and retention requirements (including 29 C.F.R. §516). Customer is
            responsible for reviewing, approving, correcting, and retaining time records produced by
            the Service. Innrly makes no warranty that the Service, as configured or used by
            Customer, satisfies the requirements of any particular jurisdiction.
          </p>
          <p>
            <strong className="text-foreground">Biometric time-clock (face geometry).</strong> Where
            Customer enables face-recognition clock-in, the Service collects and processes biometric
            identifiers and biometric information (collectively, &ldquo;Biometric Data&rdquo;) on
            Customer&rsquo;s behalf for the sole purpose of authenticating shift punches. Customer
            represents and warrants that, before any worker is enrolled, Customer (a) provides a
            written notice describing the type of Biometric Data collected, the purpose, and the
            retention schedule, and (b) obtains a written release from each worker, in each case in
            compliance with the Illinois Biometric Information Privacy Act (740 ILCS 14), Texas Bus.
            &amp; Com. Code §503.001, Washington RCW 19.375, New York City Admin. Code §22-1201 et
            seq., and any other applicable biometric-privacy law. Customer will maintain copies of
            such notices and releases and produce them on request. Innrly does not sell or lease
            Biometric Data, does not use it for any purpose other than providing the Service, and
            will delete Biometric Data within the shorter of (i) the period required by applicable
            law or (ii) three (3) years after the worker&rsquo;s last interaction with the Service.
            Customer will indemnify Innrly against any claim by Customer&rsquo;s workforce, former
            workforce, or any government agency arising from Customer&rsquo;s failure to obtain
            required notices or releases, or otherwise arising from wage, hour, classification,
            scheduling, employment, or biometric-privacy matters.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">
            17. Payment services (vendor disbursements)
          </h2>
          <p>
            Vendor check, ACH, and other disbursement features are made available through one or
            more independent third-party payment processors (each, a &ldquo;Payment
            Processor&rdquo;) with which{" "}
            <strong className="text-foreground">Customer contracts directly</strong>. Customer must
            execute the Payment Processor&rsquo;s own enrollment documents, terms of service,
            operating rules, and bank authorizations before any disbursement feature is activated,
            and Customer&rsquo;s use of those features is governed exclusively by that separate
            agreement between Customer and the Payment Processor. Innrly is not a party to, and has
            no rights or obligations under, that agreement.
          </p>
          <p>
            <strong className="text-foreground">
              Innrly is not a bank, money transmitter, money services business, payment processor,
              or fiduciary,
            </strong>{" "}
            does not hold, route, or take custody of Customer funds, and acts solely as a software
            interface that passes Customer-initiated payment instructions to the Payment Processor
            for execution. All funds movement, settlement timing, KYC/KYB, OFAC and sanctions
            screening, NACHA and card-network compliance, return/reversal handling, chargebacks,
            dispute resolution, error resolution under Regulation E, and customer support for
            payment transactions are the sole responsibility of the Payment Processor and/or
            Customer.
          </p>
          <p>
            <strong className="text-foreground">Customer assumes all risk</strong> arising from the
            Payment Services, including: (a) misdirected, duplicate, late, fraudulent, unauthorized,
            reversed, or returned payments; (b) losses from compromised credentials, business email
            compromise, vendor-impersonation fraud, or social engineering; (c) IRS Form 1099 and
            other tax reporting for vendors; (d) maintaining positive-pay, dual-control, and other
            fraud controls at Customer&rsquo;s bank; (e) verifying payee identity, banking details,
            and payment authorization before approval; and (f) any fees, fines, or assessments
            imposed by the Payment Processor or banking rails.
            <strong className="text-foreground"> Innrly has no liability of any kind</strong>{" "}
            arising out of or relating to the Payment Services, the acts or omissions of any Payment
            Processor, or any funds transmitted or attempted to be transmitted through the Payment
            Services, and Customer will indemnify, defend, and hold Innrly harmless from any claim
            by Customer, Customer&rsquo;s payees, Customer&rsquo;s bank, or any Payment Processor
            arising from the foregoing.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">18. Bank data connectivity</h2>
          <p>
            Bank-account connectivity for deposit reconciliation and related features is provided
            through an independent third-party data aggregator (the &ldquo;Aggregator&rdquo;) with
            which{" "}
            <strong className="text-foreground">
              Customer and each authorized user contract directly
            </strong>{" "}
            by accepting the Aggregator&rsquo;s end-user terms and privacy policy at the time of
            account linking. Innrly is not a party to that agreement. Bank login credentials are
            transmitted directly to the Aggregator; Innrly does not see, store, or transmit them.
            Customer represents that each individual who links a financial account through the
            Service is authorized to do so on behalf of the account holder.
          </p>
          <p>
            Innrly is not responsible for, and assumes no liability for, the accuracy, completeness,
            timeliness, security, or availability of any data delivered by the Aggregator or by the
            underlying financial institution, or for any institution that blocks, throttles, or
            discontinues connectivity. Customer remains solely responsible for monitoring its own
            accounts and for reporting unauthorized activity to its bank within the timeframes
            required by Regulation E, the Uniform Commercial Code, and Customer&rsquo;s deposit
            agreement. The Service is not a substitute for bank-side monitoring or treasury
            controls.
          </p>

          <h2 className="text-2xl font-semibold text-foreground">19. Changes</h2>
          <p>
            We may update this Agreement from time to time. Material changes will be communicated at
            least thirty (30) days in advance and will take effect at the start of Customer&rsquo;s
            next renewal term.
          </p>

          <p className="text-xs italic text-muted-foreground">
            Questions about this Agreement? Contact{" "}
            <a href="mailto:legal@innrly.com" className="underline">
              legal@innrly.com
            </a>
            .
          </p>
        </div>
      </Section>
    </div>
  );
}
