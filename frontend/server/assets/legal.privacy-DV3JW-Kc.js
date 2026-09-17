import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as Section } from "./Section-C0oe_XKQ.js";
import "lucide-react";
import "./router-eu0xRd06.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
const EFFECTIVE = "June 5, 2026";
function H2({
  id,
  children
}) {
  return /* @__PURE__ */ jsx("h2", { id, className: "scroll-mt-24 text-2xl font-semibold text-foreground", children });
}
function PrivacyPage() {
  return /* @__PURE__ */ jsx("div", { className: "bg-background", children: /* @__PURE__ */ jsxs(Section, { className: "max-w-3xl py-16", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: "Legal" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-bold text-foreground sm:text-5xl", children: "Privacy Policy" }),
    /* @__PURE__ */ jsxs("p", { className: "mt-3 text-sm text-muted-foreground", children: [
      "Effective: ",
      EFFECTIVE
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
      'Innrly LLC ("Innrly", "we", "us", "our") respects your privacy. This Privacy Policy explains what information we collect, how we use and share it, and the rights and choices you have. It applies to',
      " ",
      /* @__PURE__ */ jsx("a", { href: "https://innrly.com", className: "underline", children: "innrly.com" }),
      ', our hotel back-office software platform, and any related services (collectively, the "Services").'
    ] }),
    /* @__PURE__ */ jsxs("nav", { "aria-label": "Privacy policy sections", className: "mt-8 rounded-2xl border border-border bg-card/60 p-5", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-muted-foreground", children: "Contents" }),
      /* @__PURE__ */ jsx("ol", { className: "mt-3 grid gap-1.5 text-sm sm:grid-cols-2", children: [["info-we-collect", "1. Information we collect"], ["how-we-use", "2. How we use information"], ["legal-bases", "3. Legal bases (GDPR)"], ["sms", "4. SMS / text messaging"], ["sharing", "5. Sharing & subprocessors"], ["sale-share", "6. We do not sell or share"], ["intl", "7. International transfers"], ["retention", "8. Retention"], ["security", "9. Security"], ["your-rights", "10. Your rights (GDPR)"], ["california", "11. California rights (CCPA/CPRA)"], ["us-states", "12. Other US state rights"], ["children", "13. Children's privacy"], ["cookies", "14. Cookies & tracking"], ["ai", "15. AI & automated decisions"], ["dnt", "16. Do Not Track & GPC"], ["changes", "17. Changes to this policy"], ["contact", "18. Contact us"]].map(([id, label]) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: `#${id}`, className: "text-accent hover:underline", children: label }) }, id)) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground", children: [
      /* @__PURE__ */ jsx(H2, { id: "info-we-collect", children: "1. Information we collect" }),
      /* @__PURE__ */ jsx("p", { children: "We collect the following categories of information:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-2 pl-6", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Information you provide:" }),
          " name, work email, phone number, company name, number of properties, job title, and any details you include in forms or communications."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Account & usage data:" }),
          " login records, pages viewed, features used, IP address, browser type, device identifiers, and timestamps."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Property data:" }),
          " data you or your authorized systems push into Innrly from connected PMS, accounting, payroll, time clock, banking, and survey platforms."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Communications:" }),
          " messages you send us by email, phone, SMS, or in-product chat, including any attachments."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Cookies & similar tech:" }),
          " see Section 14."
        ] })
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "how-we-use", children: "2. How we use information" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-2 pl-6", children: [
        /* @__PURE__ */ jsx("li", { children: "Provide, operate, secure, and improve the Services." }),
        /* @__PURE__ */ jsx("li", { children: "Authenticate users and prevent fraud or abuse." }),
        /* @__PURE__ */ jsx("li", { children: "Respond to inquiries, schedule demos, and provide customer support." }),
        /* @__PURE__ */ jsx("li", { children: "Send transactional messages (account, billing, security, service)." }),
        /* @__PURE__ */ jsx("li", { children: "Send marketing communications only where you have opted in, and let you opt out at any time." }),
        /* @__PURE__ */ jsx("li", { children: "Comply with legal obligations and enforce our terms." })
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "legal-bases", children: "3. Legal bases for processing (GDPR / UK GDPR)" }),
      /* @__PURE__ */ jsx("p", { children: "Where the GDPR applies, we rely on the following legal bases under Article 6: (a) performance of a contract; (b) compliance with a legal obligation; (c) your consent (which you may withdraw at any time); and (d) our legitimate interests in operating and securing the Services, balanced against your rights and freedoms." }),
      /* @__PURE__ */ jsx(H2, { id: "sms", children: "4. SMS / text messaging (TCPA, A2P 10DLC)" }),
      /* @__PURE__ */ jsx("p", { children: "If you provide a mobile phone number and check the consent box, you authorize Innrly to contact you by SMS at that number in response to your inquiry, possibly using automated means. Message and data rates may apply." }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-2 pl-6", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Frequency:" }),
          " we limit messages to no more than 3 per week."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Opt out:" }),
          " reply ",
          /* @__PURE__ */ jsx("code", { children: "STOP" }),
          " at any time to unsubscribe. Reply ",
          /* @__PURE__ */ jsx("code", { children: "HELP" }),
          " for help."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "No sharing:" }),
          " we do not share your mobile opt-in or phone number with third parties or affiliates for their marketing or promotional purposes. This information is used solely to communicate with you about Innrly."
        ] }),
        /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Consent is not a condition of purchase." }) })
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "sharing", children: "5. How we share information & subprocessors" }),
      /* @__PURE__ */ jsx("p", { children: "We share information only as needed to deliver the Services and only with vendors who are bound by written confidentiality and data protection obligations. Categories of subprocessors currently include:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-2 pl-6", children: [
        /* @__PURE__ */ jsx("li", { children: "Cloud hosting and infrastructure (e.g. AWS, Cloudflare)." }),
        /* @__PURE__ */ jsx("li", { children: "Email and SMS delivery (e.g. Resend / SendGrid, Twilio)." }),
        /* @__PURE__ */ jsx("li", { children: "Payment processing (e.g. Stripe), where applicable." }),
        /* @__PURE__ */ jsx("li", { children: "Analytics and product telemetry (e.g. GA4, PostHog), where enabled." }),
        /* @__PURE__ */ jsx("li", { children: "Customer support and CRM tooling." })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-sm italic text-muted-foreground", children: [
        "A current, itemized subprocessor list is available on request at",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:privacy@innrly.com", className: "underline", children: "privacy@innrly.com" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("p", { children: "We may also disclose information when required by law, in response to lawful requests, to protect rights and safety, or in connection with a corporate transaction (e.g. merger or acquisition) subject to confidentiality obligations." }),
      /* @__PURE__ */ jsx(H2, { id: "sale-share", children: "6. We do not sell or share your information" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Innrly ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "does not sell" }),
        " personal information and ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "does not share" }),
        " personal information for cross-context behavioral advertising, as those terms are defined under the California Consumer Privacy Act (CCPA), as amended by the CPRA."
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "intl", children: "7. International data transfers" }),
      /* @__PURE__ */ jsx("p", { children: "We are based in the United States and process information in the US. Where we transfer personal data out of the EEA, UK, or Switzerland, we rely on appropriate safeguards such as the Standard Contractual Clauses." }),
      /* @__PURE__ */ jsx(H2, { id: "retention", children: "8. Data retention" }),
      /* @__PURE__ */ jsx("p", { children: "We retain personal information only as long as needed for the purposes described in this policy. Indicative retention windows:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-2 pl-6", children: [
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Account & user records:" }),
          " for the life of your subscription, plus 90 days after termination to allow export."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Property & transaction data:" }),
          " for the life of your subscription, then deleted within 30 days of contract end unless a longer period is required by law or your written request."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Billing & tax records:" }),
          " 7 years, to meet US tax and accounting obligations."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Marketing & lead records:" }),
          " 24 months from last interaction, or until you unsubscribe."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Security & audit logs:" }),
          " 12 months, longer where needed to investigate an incident."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Backups:" }),
          " rolling 35-day window; deleted records are purged as backups age out."
        ] })
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "security", children: "9. Security" }),
      /* @__PURE__ */ jsx("p", { children: "We use administrative, technical, and physical safeguards designed to protect personal information, including encryption in transit and at rest, access controls, and continuous monitoring. No system is 100% secure; you are responsible for keeping your account credentials confidential." }),
      /* @__PURE__ */ jsx(H2, { id: "your-rights", children: "10. Your rights (GDPR / UK GDPR)" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "If you are in the EEA, UK, or Switzerland you have the right to access, rectify, erase, restrict, object to, and port your personal data, and to withdraw consent where processing is based on consent. To exercise these rights, contact",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:privacy@innrly.com", className: "underline", children: "privacy@innrly.com" }),
        ". You also have the right to lodge a complaint with your local supervisory authority."
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "california", children: "11. California rights (CCPA / CPRA)" }),
      /* @__PURE__ */ jsx("p", { children: "California residents have the right to:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-2 pl-6", children: [
        /* @__PURE__ */ jsx("li", { children: "Know what personal information we collect, use, and disclose." }),
        /* @__PURE__ */ jsx("li", { children: "Access and obtain a copy of personal information we hold about you." }),
        /* @__PURE__ */ jsx("li", { children: "Correct inaccurate personal information." }),
        /* @__PURE__ */ jsx("li", { children: "Delete personal information, subject to certain exceptions." }),
        /* @__PURE__ */ jsx("li", { children: "Limit use of sensitive personal information." }),
        /* @__PURE__ */ jsx("li", { children: "Opt out of sale or sharing of personal information. As noted in Section 6, Innrly does not sell or share personal information." }),
        /* @__PURE__ */ jsx("li", { children: "Non-discrimination for exercising any of these rights." })
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Categories collected in the past 12 months:" }),
        " ",
        "identifiers (name, email, phone), commercial information, internet/network activity, geolocation (approximate, IP-based), and professional information.",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Sources:" }),
        " directly from you, automatically via the Services, and from your connected systems.",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Purposes:" }),
        " as described in Section 2."
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        "To exercise any right, email",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:privacy@innrly.com", className: "underline", children: "privacy@innrly.com" }),
        ". We will verify your request and respond within the timeframes required by law. You may also designate an authorized agent to act on your behalf."
      ] }),
      /* @__PURE__ */ jsxs("p", { children: [
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Shine the Light (Cal. Civ. Code § 1798.83):" }),
        " ",
        "we do not share personal information with third parties for their direct marketing purposes."
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "us-states", children: "12. Other US state rights" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Residents of Virginia, Colorado, Connecticut, Utah, Texas, Oregon, and Montana, among others, have rights similar to those described above, including the right to access, correct, delete, and obtain a portable copy of personal data, and to opt out of targeted advertising, sale of personal data, and certain profiling. Contact",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:privacy@innrly.com", className: "underline", children: "privacy@innrly.com" }),
        " ",
        "to exercise these rights or appeal a decision."
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "children", children: "13. Children's privacy" }),
      /* @__PURE__ */ jsx("p", { children: "The Services are not directed to children under 16 and we do not knowingly collect personal information from children. If you believe a child has provided us personal information, contact us and we will delete it." }),
      /* @__PURE__ */ jsx(H2, { id: "cookies", children: "14. Cookies & tracking technologies" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "We use first-party cookies and similar technologies for essential site function, preference storage, and analytics. You can control cookies through your browser settings and through our cookie banner where required. See our",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/legal/cookies", className: "underline", children: "Cookies Policy" }),
        " ",
        "for details."
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "ai", children: "15. AI & automated decision-making" }),
      /* @__PURE__ */ jsx("p", { children: "Innrly uses automation and machine learning to surface exceptions, summarize daily performance, and assist back-office workflows. These outputs support — but do not replace — human decision-making. We do not make decisions producing legal or similarly significant effects about you solely by automated means." }),
      /* @__PURE__ */ jsx(H2, { id: "dnt", children: "16. Do Not Track & Global Privacy Control" }),
      /* @__PURE__ */ jsx("p", { children: 'Our site does not respond to Do Not Track (DNT) signals because no industry standard exists. Where required by applicable law, we honor Global Privacy Control (GPC) signals as an opt-out of "sale" or "sharing" of personal information.' }),
      /* @__PURE__ */ jsx(H2, { id: "changes", children: "17. Changes to this policy" }),
      /* @__PURE__ */ jsx("p", { children: 'We may update this Privacy Policy from time to time. Material changes will be posted here with a new "Effective" date and, where appropriate, notified to you by email or in-product notice.' }),
      /* @__PURE__ */ jsx(H2, { id: "contact", children: "18. Contact us" }),
      /* @__PURE__ */ jsx("p", { children: "For privacy questions, requests, or to exercise any rights described above, contact:" }),
      /* @__PURE__ */ jsxs("address", { className: "not-italic rounded-2xl border border-border bg-card/60 p-5 text-sm", children: [
        /* @__PURE__ */ jsx("div", { className: "font-semibold text-foreground", children: "Innrly — Privacy" }),
        /* @__PURE__ */ jsx("div", { children: "4276 Hwy 51" }),
        /* @__PURE__ */ jsx("div", { children: "LaPlace, LA 70068" }),
        /* @__PURE__ */ jsxs("div", { className: "mt-2", children: [
          "Email:",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:privacy@innrly.com", className: "text-accent hover:underline", children: "privacy@innrly.com" })
        ] })
      ] })
    ] })
  ] }) });
}
export {
  PrivacyPage as component
};
