import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { S as Section } from "./Section-DfKao03n.js";
import "lucide-react";
import "./router-dBewJNnO.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
function H2({
  id,
  children
}) {
  return /* @__PURE__ */ jsx("h2", { id, className: "scroll-mt-24 text-2xl font-semibold text-foreground", children });
}
function TermsPage() {
  return /* @__PURE__ */ jsx("div", { className: "bg-background", children: /* @__PURE__ */ jsxs(Section, { className: "max-w-3xl py-16", children: [
    /* @__PURE__ */ jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: "Legal" }),
    /* @__PURE__ */ jsx("h1", { className: "mt-2 text-4xl font-bold text-foreground sm:text-5xl", children: "Terms of Service & Software License" }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Last updated: June 8, 2026" }),
    /* @__PURE__ */ jsxs("p", { className: "mt-2 text-sm text-muted-foreground", children: [
      'These Terms govern your access to and use of the Innrly hotel back-office platform (the "Service") provided by ',
      /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Mystic Solutions LLC" }),
      " ",
      '("Innrly", "we", "us"). Sections 1–7 cover general use of the Service. Sections 8–10 form the binding ',
      /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Software License" }),
      " (formerly issued as a separate document) and apply to every authorized user. For enterprise commercial terms (renewal, fees, SLA, liability), see the",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/legal/subscription", className: "text-accent underline", children: "Subscription Services Agreement" }),
      "."
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "prose prose-invert mt-10 max-w-none space-y-6 text-muted-foreground", children: [
      /* @__PURE__ */ jsx(H2, { id: "accounts", children: "1. Accounts & eligibility" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "You must be at least 18 and authorized to bind your organization. You are responsible for your account credentials and all activity that occurs under your account. Notify us immediately at",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:security@innrly.com", className: "underline", children: "security@innrly.com" }),
        " ",
        "if you suspect unauthorized access."
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "billing", children: "2. Subscription & billing" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Month-to-month plans are billed quarterly in advance; annual plans are billed annually. Setup fees apply at onboarding. Annual plans commit to a 12-month term. Fees, renewal, suspension for non-payment, and refund terms are governed by the",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/legal/subscription", className: "underline", children: "Subscription Services Agreement" }),
        "."
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "acceptable-use", children: "3. Acceptable use" }),
      /* @__PURE__ */ jsx("p", { children: "You agree not to:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-2 pl-6", children: [
        /* @__PURE__ */ jsx("li", { children: "Attempt to circumvent authentication, rate limits, or other security controls." }),
        /* @__PURE__ */ jsx("li", { children: "Use the Service to transmit malware, spam, or unlawful content." }),
        /* @__PURE__ */ jsx("li", { children: "Scrape, mirror, or systematically extract the Service except via authorized APIs." }),
        /* @__PURE__ */ jsx("li", { children: "Use the Service to develop a competing product or for competitive benchmarking." }),
        /* @__PURE__ */ jsx("li", { children: "Use the Service in violation of applicable law, including export controls and sanctions." }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Submit Protected Health Information (PHI)." }),
          " ",
          "The Service is not designed or offered as a HIPAA-compliant platform. Innrly does not accept, and Customer will not upload, transmit, or store, any Protected Health Information as defined by HIPAA. Innrly is not a Business Associate, will not execute a Business Associate Agreement, and disclaims any liability arising from PHI submitted in violation of this restriction."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Use biometric time-clock features without required consent." }),
          " ",
          "The face-recognition clock-in feature collects biometric identifiers. Customer must provide written notice and obtain a written release from each worker before enrollment, as required by the Illinois Biometric Information Privacy Act and comparable laws. Customer’s biometric obligations and Innrly’s handling of biometric data are set out in Section 16 of the",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/legal/subscription", className: "underline", children: "Subscription Services Agreement" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("li", { children: [
          /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Misuse payment or banking features." }),
          " ",
          "Vendor disbursements are processed by third-party Payment Processors, and bank connectivity is provided by Plaid. Customer is responsible for payee verification, OFAC screening, fraud controls, and monitoring its own accounts, as further described in Sections 17 and 18 of the Subscription Services Agreement."
        ] })
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "customer-data", children: "4. Customer data & privacy" }),
      /* @__PURE__ */ jsxs("p", { children: [
        'You retain all rights to data you or your connected systems push into the Service ("Customer Data"). You grant Innrly a limited license to host, process, and display Customer Data solely to operate the Service and to produce aggregated, de-identified analytics. Our handling of personal data is described in the',
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/legal/privacy", className: "underline", children: "Privacy Policy" }),
        "."
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "suspension", children: "5. Suspension & termination" }),
      /* @__PURE__ */ jsx("p", { children: "We may suspend or terminate access for material breach, non-payment, or activity that puts the Service or other customers at risk. You may cancel a monthly subscription at any time, effective at the end of the then-current billing month. Annual subscriptions are governed by their term and renewal clauses in the Subscription Services Agreement." }),
      /* @__PURE__ */ jsx(H2, { id: "changes", children: "6. Changes to these Terms" }),
      /* @__PURE__ */ jsx("p", { children: 'We may update these Terms from time to time. Material changes will be posted here with a new "Last updated" date and, where appropriate, communicated by email or in-product notice. Continued use of the Service after the effective date constitutes acceptance.' }),
      /* @__PURE__ */ jsx(H2, { id: "contact", children: "7. Contact" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "Questions about these Terms:",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:legal@innrly.com", className: "underline", children: "legal@innrly.com" }),
        "."
      ] }),
      /* @__PURE__ */ jsx("hr", { className: "my-10 border-border" }),
      /* @__PURE__ */ jsx("p", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: "Software License (Sections 8–10)" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "The following sections form the",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: "Software License" }),
        " and apply to every authorized user of the Service. They replace any standalone End User License Agreement previously issued."
      ] }),
      /* @__PURE__ */ jsx(H2, { id: "license-grant", children: "8. License grant" }),
      /* @__PURE__ */ jsx("p", { children: "Subject to your compliance with these Terms and timely payment of applicable fees, Innrly grants you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license during the term of your subscription to:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-2 pl-6", children: [
        /* @__PURE__ */ jsx("li", { children: "Access and use the hosted Service for your internal business operations;" }),
        /* @__PURE__ */ jsx("li", { children: 'Permit your employees, contractors, and authorized agents ("Authorized Users") to access the Service on your behalf, provided each Authorized User is bound by terms at least as protective as these Terms;' }),
        /* @__PURE__ */ jsx("li", { children: "Use any documentation, dashboards, exports, and reports generated by the Service for your internal business and audit purposes." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "The Service is licensed, not sold. No rights are granted by implication, estoppel, or otherwise except as expressly stated in this Section 8." }),
      /* @__PURE__ */ jsx(H2, { id: "restrictions", children: "9. License restrictions & IP ownership" }),
      /* @__PURE__ */ jsx("p", { children: "You will not, and will not permit any third party to:" }),
      /* @__PURE__ */ jsxs("ul", { className: "list-disc space-y-2 pl-6", children: [
        /* @__PURE__ */ jsx("li", { children: "Copy, modify, translate, or create derivative works of the Service or any part of it;" }),
        /* @__PURE__ */ jsx("li", { children: "Reverse engineer, decompile, or disassemble the Service, except to the extent expressly permitted by applicable law notwithstanding this restriction;" }),
        /* @__PURE__ */ jsx("li", { children: "Rent, lease, lend, sell, sublicense, assign, distribute, publish, or otherwise transfer the Service to any third party;" }),
        /* @__PURE__ */ jsx("li", { children: "Remove or alter any proprietary notices, labels, or marks on or in the Service;" }),
        /* @__PURE__ */ jsx("li", { children: "Use the Service to build, train, or improve any competing product, machine learning model, or large language model, except for your own internal use of your own Customer Data." })
      ] }),
      /* @__PURE__ */ jsx("p", { children: "Innrly and its licensors retain all right, title, and interest in and to the Service, including all software, algorithms, models, interfaces, documentation, and improvements, and all related intellectual property rights. Feedback you provide may be used by Innrly without restriction or compensation." }),
      /* @__PURE__ */ jsx(H2, { id: "warranty-license", children: "10. Warranty disclaimer & license termination" }),
      /* @__PURE__ */ jsxs("p", { children: [
        "The Service is provided ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: '"AS IS"' }),
        " and",
        " ",
        /* @__PURE__ */ jsx("strong", { className: "text-foreground", children: '"AS AVAILABLE"' }),
        " without warranties of any kind, express or implied, including merchantability, fitness for a particular purpose, title, and non-infringement, except as expressly stated in the Subscription Services Agreement. The license granted in Section 8 terminates automatically upon expiration or termination of your subscription, or upon your material breach of these Terms. Sections 4 (Customer Data), 9 (Restrictions & IP), and 10 (this section) survive termination."
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs italic text-muted-foreground", children: [
        "For the binding commercial contract — including fees, renewal, SLA, liability cap, and governing law — please refer to the",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/legal/subscription", className: "underline", children: "Subscription Services Agreement" }),
        " ",
        "or contact",
        " ",
        /* @__PURE__ */ jsx("a", { href: "mailto:legal@innrly.com", className: "underline", children: "legal@innrly.com" }),
        "."
      ] })
    ] })
  ] }) });
}
export {
  TermsPage as component
};
