import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/legal/terms")({
  component: TermsPage,
  loader: async () => {
    const seo = await fetchSeoData("/legal/terms");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/legal/terms"],
        "/legal/terms"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/legal/terms" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Terms of Service & Software License — Innrly",
          url: "/legal/terms",
          isPartOf: { "@type": "WebSite", name: "Innrly", url: "/" },
        }),
      },
    ],
  }),
});

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-semibold text-foreground">
      {children}
    </h2>
  );
}

function TermsPage() {
  return (
    <div className="bg-background">
      <Section className="max-w-3xl py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Legal</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">
          Terms of Service &amp; Software License
        </h1>
        <p className="mt-3 text-sm text-muted-foreground">Last updated: June 8, 2026</p>
        <p className="mt-2 text-sm text-muted-foreground">
          These Terms govern your access to and use of the Innrly hotel back-office platform (the
          "Service") provided by <strong className="text-foreground">Mystic Solutions LLC</strong>{" "}
          ("Innrly", "we", "us"). Sections 1–7 cover general use of the Service. Sections 8–10 form
          the binding <strong className="text-foreground">Software License</strong> (formerly issued
          as a separate document) and apply to every authorized user. For enterprise commercial
          terms (renewal, fees, SLA, liability), see the{" "}
          <Link to="/legal/subscription" className="text-accent underline">
            Subscription Services Agreement
          </Link>
          .
        </p>

        <div className="prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground">
          <H2 id="accounts">1. Accounts &amp; eligibility</H2>
          <p>
            You must be at least 18 and authorized to bind your organization. You are responsible
            for your account credentials and all activity that occurs under your account. Notify us
            immediately at{" "}
            <a href="mailto:security@innrly.com" className="underline">
              security@innrly.com
            </a>{" "}
            if you suspect unauthorized access.
          </p>

          <H2 id="billing">2. Subscription &amp; billing</H2>
          <p>
            Month-to-month plans are billed quarterly in advance; annual plans are billed annually.
            Setup fees apply at onboarding. Annual plans commit to a 12-month term. Fees, renewal,
            suspension for non-payment, and refund terms are governed by the{" "}
            <Link to="/legal/subscription" className="underline">
              Subscription Services Agreement
            </Link>
            .
          </p>

          <H2 id="acceptable-use">3. Acceptable use</H2>
          <p>You agree not to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Attempt to circumvent authentication, rate limits, or other security controls.</li>
            <li>Use the Service to transmit malware, spam, or unlawful content.</li>
            <li>
              Scrape, mirror, or systematically extract the Service except via authorized APIs.
            </li>
            <li>Use the Service to develop a competing product or for competitive benchmarking.</li>
            <li>
              Use the Service in violation of applicable law, including export controls and
              sanctions.
            </li>
            <li>
              <strong className="text-foreground">
                Submit Protected Health Information (PHI).
              </strong>{" "}
              The Service is not designed or offered as a HIPAA-compliant platform. Innrly does not
              accept, and Customer will not upload, transmit, or store, any Protected Health
              Information as defined by HIPAA. Innrly is not a Business Associate, will not execute
              a Business Associate Agreement, and disclaims any liability arising from PHI submitted
              in violation of this restriction.
            </li>
            <li>
              <strong className="text-foreground">
                Use biometric time-clock features without required consent.
              </strong>{" "}
              The face-recognition clock-in feature collects biometric identifiers. Customer must
              provide written notice and obtain a written release from each worker before
              enrollment, as required by the Illinois Biometric Information Privacy Act and
              comparable laws. Customer&rsquo;s biometric obligations and Innrly&rsquo;s handling of
              biometric data are set out in Section 16 of the{" "}
              <Link to="/legal/subscription" className="underline">
                Subscription Services Agreement
              </Link>
              .
            </li>
            <li>
              <strong className="text-foreground">Misuse payment or banking features.</strong>{" "}
              Vendor disbursements are processed by third-party Payment Processors, and bank
              connectivity is provided by Plaid. Customer is responsible for payee verification,
              OFAC screening, fraud controls, and monitoring its own accounts, as further described
              in Sections 17 and 18 of the Subscription Services Agreement.
            </li>
          </ul>

          <H2 id="customer-data">4. Customer data &amp; privacy</H2>
          <p>
            You retain all rights to data you or your connected systems push into the Service
            ("Customer Data"). You grant Innrly a limited license to host, process, and display
            Customer Data solely to operate the Service and to produce aggregated, de-identified
            analytics. Our handling of personal data is described in the{" "}
            <Link to="/legal/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>

          <H2 id="suspension">5. Suspension &amp; termination</H2>
          <p>
            We may suspend or terminate access for material breach, non-payment, or activity that
            puts the Service or other customers at risk. You may cancel a monthly subscription at
            any time, effective at the end of the then-current billing month. Annual subscriptions
            are governed by their term and renewal clauses in the Subscription Services Agreement.
          </p>

          <H2 id="changes">6. Changes to these Terms</H2>
          <p>
            We may update these Terms from time to time. Material changes will be posted here with a
            new "Last updated" date and, where appropriate, communicated by email or in-product
            notice. Continued use of the Service after the effective date constitutes acceptance.
          </p>

          <H2 id="contact">7. Contact</H2>
          <p>
            Questions about these Terms:{" "}
            <a href="mailto:legal@innrly.com" className="underline">
              legal@innrly.com
            </a>
            .
          </p>

          <hr className="my-10 border-border" />

          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
            Software License (Sections 8–10)
          </p>
          <p>
            The following sections form the{" "}
            <strong className="text-foreground">Software License</strong> and apply to every
            authorized user of the Service. They replace any standalone End User License Agreement
            previously issued.
          </p>

          <H2 id="license-grant">8. License grant</H2>
          <p>
            Subject to your compliance with these Terms and timely payment of applicable fees,
            Innrly grants you a limited, non-exclusive, non-transferable, non-sublicensable,
            revocable license during the term of your subscription to:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Access and use the hosted Service for your internal business operations;</li>
            <li>
              Permit your employees, contractors, and authorized agents ("Authorized Users") to
              access the Service on your behalf, provided each Authorized User is bound by terms at
              least as protective as these Terms;
            </li>
            <li>
              Use any documentation, dashboards, exports, and reports generated by the Service for
              your internal business and audit purposes.
            </li>
          </ul>
          <p>
            The Service is licensed, not sold. No rights are granted by implication, estoppel, or
            otherwise except as expressly stated in this Section 8.
          </p>

          <H2 id="restrictions">9. License restrictions &amp; IP ownership</H2>
          <p>You will not, and will not permit any third party to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              Copy, modify, translate, or create derivative works of the Service or any part of it;
            </li>
            <li>
              Reverse engineer, decompile, or disassemble the Service, except to the extent
              expressly permitted by applicable law notwithstanding this restriction;
            </li>
            <li>
              Rent, lease, lend, sell, sublicense, assign, distribute, publish, or otherwise
              transfer the Service to any third party;
            </li>
            <li>Remove or alter any proprietary notices, labels, or marks on or in the Service;</li>
            <li>
              Use the Service to build, train, or improve any competing product, machine learning
              model, or large language model, except for your own internal use of your own Customer
              Data.
            </li>
          </ul>
          <p>
            Innrly and its licensors retain all right, title, and interest in and to the Service,
            including all software, algorithms, models, interfaces, documentation, and improvements,
            and all related intellectual property rights. Feedback you provide may be used by Innrly
            without restriction or compensation.
          </p>

          <H2 id="warranty-license">10. Warranty disclaimer &amp; license termination</H2>
          <p>
            The Service is provided <strong className="text-foreground">"AS IS"</strong> and{" "}
            <strong className="text-foreground">"AS AVAILABLE"</strong> without warranties of any
            kind, express or implied, including merchantability, fitness for a particular purpose,
            title, and non-infringement, except as expressly stated in the Subscription Services
            Agreement. The license granted in Section 8 terminates automatically upon expiration or
            termination of your subscription, or upon your material breach of these Terms. Sections
            4 (Customer Data), 9 (Restrictions &amp; IP), and 10 (this section) survive termination.
          </p>

          <p className="text-xs italic text-muted-foreground">
            For the binding commercial contract — including fees, renewal, SLA, liability cap, and
            governing law — please refer to the{" "}
            <Link to="/legal/subscription" className="underline">
              Subscription Services Agreement
            </Link>{" "}
            or contact{" "}
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
