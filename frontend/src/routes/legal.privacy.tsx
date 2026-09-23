import { createFileRoute, Link } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/legal/privacy")({
  component: PrivacyPage,
  loader: async () => {
    const seo = await fetchSeoData("/legal/privacy");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/legal/privacy"],
        "/legal/privacy"
      ),
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/legal/privacy" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Privacy Policy — Innrly",
          url: "/legal/privacy",
          isPartOf: { "@type": "WebSite", name: "Innrly", url: "/" },
        }),
      },
    ],
  }),
});

const EFFECTIVE = "June 8, 2026";

function H2({ id, children }: { id: string; children: React.ReactNode }) {
  return (
    <h2 id={id} className="scroll-mt-24 text-2xl font-semibold text-foreground">
      {children}
    </h2>
  );
}

function PrivacyPage() {
  return (
    <div className="bg-background">
      <Section className="max-w-3xl py-16">
        <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">Legal</p>
        <h1 className="mt-2 text-4xl font-bold text-foreground sm:text-5xl">Privacy Policy</h1>
        <p className="mt-3 text-sm text-muted-foreground">Effective: {EFFECTIVE}</p>
        <p className="mt-2 text-sm text-muted-foreground">
          Mystic Solutions LLC, d/b/a Innrly ("Innrly", "we", "us", "our") respects your privacy. This Privacy Policy
          explains what information we collect, how we use and share it, and the rights and choices
          you have. It applies to{" "}
          <a href="https://innrly.com" className="underline">
            innrly.com
          </a>
          , our hotel back-office software platform, and any related services (collectively, the
          "Services").
        </p>

        {/* TOC */}
        <nav
          aria-label="Privacy policy sections"
          className="mt-8 rounded-2xl border border-border bg-card/60 p-5"
        >
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground">
            Contents
          </p>
          <ol className="mt-3 grid gap-1.5 text-sm sm:grid-cols-2">
            {[
              ["info-we-collect", "1. Information we collect"],
              ["how-we-use", "2. How we use information"],
              ["legal-bases", "3. Legal bases (GDPR)"],
              ["sms", "4. SMS / text messaging"],
              ["sharing", "5. Sharing & subprocessors"],
              ["sale-share", "6. We do not sell or share"],
              ["intl", "7. International transfers"],
              ["retention", "8. Retention"],
              ["security", "9. Security"],
              ["your-rights", "10. Your rights (GDPR)"],
              ["california", "11. California rights (CCPA/CPRA)"],
              ["us-states", "12. Other US state rights"],
              ["children", "13. Children's privacy"],
              ["cookies", "14. Cookies & tracking"],
              ["ai", "15. AI & automated decisions"],
              ["dnt", "16. Do Not Track & GPC"],
              ["changes", "17. Changes to this policy"],
              ["contact", "18. Contact us"],
            ].map(([id, label]) => (
              <li key={id}>
                <a href={`#${id}`} className="text-accent hover:underline">
                  {label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground">
          <H2 id="info-we-collect">1. Information we collect</H2>
          <p>We collect the following categories of information:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Information you provide:</strong> name, work
              email, phone number, company name, number of properties, job title, and any details
              you include in forms or communications.
            </li>
            <li>
              <strong className="text-foreground">Account & usage data:</strong> login records,
              pages viewed, features used, IP address, browser type, device identifiers, and
              timestamps.
            </li>
            <li>
              <strong className="text-foreground">Property data:</strong> data you or your
              authorized systems push into Innrly from connected PMS, accounting, payroll, time
              clock, banking, and survey platforms.
            </li>
            <li>
              <strong className="text-foreground">Communications:</strong> messages you send us by
              email, phone, SMS, or in-product chat, including any attachments.
            </li>
            <li>
              <strong className="text-foreground">Cookies & similar tech:</strong> see Section 14.
            </li>
          </ul>

          <H2 id="how-we-use">2. How we use information</H2>
          <ul className="list-disc space-y-2 pl-6">
            <li>Provide, operate, secure, and improve the Services.</li>
            <li>Authenticate users and prevent fraud or abuse.</li>
            <li>Respond to inquiries, schedule demos, and provide customer support.</li>
            <li>Send transactional messages (account, billing, security, service).</li>
            <li>
              Send marketing communications only where you have opted in, and let you opt out at any
              time.
            </li>
            <li>Comply with legal obligations and enforce our terms.</li>
          </ul>

          <H2 id="legal-bases">3. Legal bases for processing (GDPR / UK GDPR)</H2>
          <p>
            Where the GDPR applies, we rely on the following legal bases under Article 6: (a)
            performance of a contract; (b) compliance with a legal obligation; (c) your consent
            (which you may withdraw at any time); and (d) our legitimate interests in operating and
            securing the Services, balanced against your rights and freedoms.
          </p>

          <H2 id="sms">4. SMS / text messaging (TCPA, A2P 10DLC)</H2>
          <p>
            If you provide a mobile phone number and check the consent box, you authorize Innrly to
            contact you by SMS at that number in response to your inquiry, possibly using automated
            means. Message and data rates may apply.
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Frequency:</strong> we limit messages to no more
              than 3 per week.
            </li>
            <li>
              <strong className="text-foreground">Opt out:</strong> reply <code>STOP</code> at any
              time to unsubscribe. Reply <code>HELP</code> for help.
            </li>
            <li>
              <strong className="text-foreground">No sharing:</strong> we do not share your mobile
              opt-in or phone number with third parties or affiliates for their marketing or
              promotional purposes. This information is used solely to communicate with you about
              Innrly.
            </li>
            <li>
              <strong className="text-foreground">Consent is not a condition of purchase.</strong>
            </li>
          </ul>

          <H2 id="sharing">5. How we share information & subprocessors</H2>
          <p>
            We share information only as needed to deliver the Services and only with vendors who
            are bound by written confidentiality and data protection obligations. Categories of
            subprocessors currently include:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Cloud hosting and infrastructure (e.g. AWS, Cloudflare).</li>
            <li>Email and SMS delivery (e.g. Resend / SendGrid, Twilio).</li>
            <li>Payment processing (e.g. Stripe), where applicable.</li>
            <li>Analytics and product telemetry (e.g. GA4, PostHog), where enabled.</li>
            <li>Customer support and CRM tooling.</li>
          </ul>
          <p className="text-sm italic text-muted-foreground">
            A current, itemized subprocessor list is available on request at{" "}
            <a href="mailto:privacy@innrly.com" className="underline">
              privacy@innrly.com
            </a>
            .
          </p>
          <p>
            We may also disclose information when required by law, in response to lawful requests,
            to protect rights and safety, or in connection with a corporate transaction (e.g. merger
            or acquisition) subject to confidentiality obligations.
          </p>

          <H2 id="sale-share">6. We do not sell or share your information</H2>
          <p>
            Innrly <strong className="text-foreground">does not sell</strong> personal information
            and <strong className="text-foreground">does not share</strong> personal information for
            cross-context behavioral advertising, as those terms are defined under the California
            Consumer Privacy Act (CCPA), as amended by the CPRA.
          </p>

          <H2 id="intl">7. International data transfers</H2>
          <p>
            We are based in the United States and process information in the US. Where we transfer
            personal data out of the EEA, UK, or Switzerland, we rely on appropriate safeguards such
            as the Standard Contractual Clauses.
          </p>

          <H2 id="retention">8. Data retention</H2>
          <p>
            We retain personal information only as long as needed for the purposes described in this
            policy. Indicative retention windows:
          </p>
          <ul className="list-disc space-y-2 pl-6">
            <li>
              <strong className="text-foreground">Account &amp; user records:</strong> for the life
              of your subscription, plus 90 days after termination to allow export.
            </li>
            <li>
              <strong className="text-foreground">Property &amp; transaction data:</strong> for the
              life of your subscription, then deleted within 30 days of contract end unless a longer
              period is required by law or your written request.
            </li>
            <li>
              <strong className="text-foreground">Billing &amp; tax records:</strong> 7 years, to
              meet US tax and accounting obligations.
            </li>
            <li>
              <strong className="text-foreground">Marketing &amp; lead records:</strong> 24 months
              from last interaction, or until you unsubscribe.
            </li>
            <li>
              <strong className="text-foreground">Security &amp; audit logs:</strong> 12 months,
              longer where needed to investigate an incident.
            </li>
            <li>
              <strong className="text-foreground">Backups:</strong> rolling 35-day window; deleted
              records are purged as backups age out.
            </li>
          </ul>

          <H2 id="security">9. Security</H2>
          <p>
            We use administrative, technical, and physical safeguards designed to protect personal
            information, including encryption in transit and at rest, access controls, and
            continuous monitoring. No system is 100% secure; you are responsible for keeping your
            account credentials confidential.
          </p>

          <H2 id="your-rights">10. Your rights (GDPR / UK GDPR)</H2>
          <p>
            If you are in the EEA, UK, or Switzerland you have the right to access, rectify, erase,
            restrict, object to, and port your personal data, and to withdraw consent where
            processing is based on consent. To exercise these rights, contact{" "}
            <a href="mailto:privacy@innrly.com" className="underline">
              privacy@innrly.com
            </a>
            . You also have the right to lodge a complaint with your local supervisory authority.
          </p>

          <H2 id="california">11. California rights (CCPA / CPRA)</H2>
          <p>California residents have the right to:</p>
          <ul className="list-disc space-y-2 pl-6">
            <li>Know what personal information we collect, use, and disclose.</li>
            <li>Access and obtain a copy of personal information we hold about you.</li>
            <li>Correct inaccurate personal information.</li>
            <li>Delete personal information, subject to certain exceptions.</li>
            <li>Limit use of sensitive personal information.</li>
            <li>
              Opt out of sale or sharing of personal information. As noted in Section 6, Innrly does
              not sell or share personal information.
            </li>
            <li>Non-discrimination for exercising any of these rights.</li>
          </ul>
          <p>
            <strong className="text-foreground">Categories collected in the past 12 months:</strong>{" "}
            identifiers (name, email, phone), commercial information, internet/network activity,
            geolocation (approximate, IP-based), and professional information.{" "}
            <strong className="text-foreground">Sources:</strong> directly from you, automatically
            via the Services, and from your connected systems.{" "}
            <strong className="text-foreground">Purposes:</strong> as described in Section 2.
          </p>
          <p>
            To exercise any right, email{" "}
            <a href="mailto:privacy@innrly.com" className="underline">
              privacy@innrly.com
            </a>
            . We will verify your request and respond within the timeframes required by law. You may
            also designate an authorized agent to act on your behalf.
          </p>
          <p>
            <strong className="text-foreground">Shine the Light (Cal. Civ. Code § 1798.83):</strong>{" "}
            we do not share personal information with third parties for their direct marketing
            purposes.
          </p>

          <H2 id="us-states">12. Other US state rights</H2>
          <p>
            Residents of Virginia, Colorado, Connecticut, Utah, Texas, Oregon, and Montana, among
            others, have rights similar to those described above, including the right to access,
            correct, delete, and obtain a portable copy of personal data, and to opt out of targeted
            advertising, sale of personal data, and certain profiling. Contact{" "}
            <a href="mailto:privacy@innrly.com" className="underline">
              privacy@innrly.com
            </a>{" "}
            to exercise these rights or appeal a decision.
          </p>

          <H2 id="children">13. Children's privacy</H2>
          <p>
            The Services are not directed to children under 16 and we do not knowingly collect
            personal information from children. If you believe a child has provided us personal
            information, contact us and we will delete it.
          </p>

          <H2 id="cookies">14. Cookies & tracking technologies</H2>
          <p>
            We use first-party cookies and similar technologies for essential site function,
            preference storage, and analytics. You can control cookies through your browser settings
            and through our cookie banner where required. See our{" "}
            <Link to="/legal/cookies" className="underline">
              Cookies Policy
            </Link>{" "}
            for details.
          </p>

          <H2 id="ai">15. AI & automated decision-making</H2>
          <p>
            Innrly uses automation and machine learning to surface exceptions, summarize daily
            performance, and assist back-office workflows. These outputs support — but do not
            replace — human decision-making. We do not make decisions producing legal or similarly
            significant effects about you solely by automated means.
          </p>

          <H2 id="dnt">16. Do Not Track & Global Privacy Control</H2>
          <p>
            Our site does not respond to Do Not Track (DNT) signals because no industry standard
            exists. Where required by applicable law, we honor Global Privacy Control (GPC) signals
            as an opt-out of "sale" or "sharing" of personal information.
          </p>

          <H2 id="changes">17. Changes to this policy</H2>
          <p>
            We may update this Privacy Policy from time to time. Material changes will be posted
            here with a new "Effective" date and, where appropriate, notified to you by email or
            in-product notice.
          </p>

          <H2 id="contact">18. Contact us</H2>
          <p>
            For privacy questions, requests, or to exercise any rights described above, contact:
          </p>
          <address className="not-italic rounded-2xl border border-border bg-card/60 p-5 text-sm">
            <div className="font-semibold text-foreground">Innrly — Privacy</div>
            <div>4276 Hwy 51</div>
            <div>LaPlace, LA 70068</div>
            <div className="mt-2">
              Email:{" "}
              <a href="mailto:privacy@innrly.com" className="text-accent hover:underline">
                privacy@innrly.com
              </a>
            </div>
          </address>
        </div>
      </Section>
    </div>
  );
}
