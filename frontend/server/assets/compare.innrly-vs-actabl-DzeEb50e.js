import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { D as faqs } from "./router-CBR-JcUy.js";
import { C as CompareLayout } from "./CompareLayout-BVxrdXX0.js";
import "@tanstack/react-query";
import "@tanstack/react-router";
import "react";
import "lucide-react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
import "./Section-Df9Ktkng.js";
import "./Breadcrumbs-CNu7uBt1.js";
function Page() {
  return /* @__PURE__ */ jsx(CompareLayout, { competitorName: "Actabl", eyebrow: "Innrly: alternative to Actabl / Hotel Effectiveness", title: /* @__PURE__ */ jsxs(Fragment, { children: [
    "How Innrly Shift and Actabl ",
    /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "compare." })
  ] }), intro: "Actabl (parent of Hotel Effectiveness) is the labor incumbent in hotels — PerfectLabor, PerfectTime, CoverageFinder, PerfectEngage, and PerfectWage. Innrly Shift covers the same labor surface and is delivered as part of a single back-office product alongside A/P, OTA reconciliation, BI, and night audit. This page highlights the specific places where the two differ.", summary: [{
    heading: "Keep your existing TimeClock",
    body: "Innrly Shift does NOT require Innrly's Face-ID TimeClock to work. Run scheduling, housekeeping productivity, OT guardrails, and payroll export on whatever clock hardware you already own. Face-ID is an upgrade, not a prerequisite. Actabl typically sells PerfectLabor and PerfectTime together as the labor stack."
  }, {
    heading: "Lower, published pricing",
    body: "Innrly Shift is $149 per property per month — all-in for scheduling, TimeClock, MPOR, OT guardrails, and payroll export. Actabl's labor suite is quote-based, tiered (Base / Advanced / Premier), and typically priced per module per property. Operators commonly pay multiples of $149 for Actabl labor alone."
  }, {
    heading: "Face-ID is the upgrade path",
    body: "When you do want biometric punch-in, Innrly's Face-ID TimeClock is built into the same product as scheduling, MPOR, and payroll — no separate vendor, no separate login, no buddy punching. Actabl's PerfectTime is a strong PIN/badge time-and-attendance system but is not biometric face-recognition by default."
  }, {
    heading: "Labor inside an integrated back office",
    body: "Innrly Shift lives inside one product with A/P automation, OTA reconciliation, BI, Bill Pay, and night audit on a single data model. Actabl is a labor-led suite — A/P, accounting, and BI usually come from other vendors in your stack."
  }], rows: [{
    feature: "Works with your existing TimeClock hardware",
    innrly: true,
    competitor: "partial",
    note: "Innrly: PIN, badge, or Face-ID — your choice"
  }, {
    feature: "Published per-property pricing",
    innrly: "$149/mo, all-in labor",
    competitor: "Quote-based, per module"
  }, {
    feature: "Free trial",
    innrly: "90 days, full access",
    competitor: "Not published"
  }, {
    feature: "Month-to-month contract",
    innrly: true,
    competitor: "partial",
    note: "Actabl: typically annual"
  }, {
    feature: "Face-ID (biometric) TimeClock built in",
    innrly: true,
    competitor: false,
    note: "Actabl PerfectTime is PIN/badge time-and-attendance"
  }, {
    feature: "Labor scheduling + forecast vs actual",
    innrly: true,
    competitor: true
  }, {
    feature: "Housekeeping productivity matrix (MPOR, rooms/shift, variance)",
    innrly: "Built into TimeClock",
    competitor: "partial"
  }, {
    feature: "OT guardrails at clock-in",
    innrly: true,
    competitor: "partial"
  }, {
    feature: "Payroll export to ADP / Paychex / others",
    innrly: true,
    competitor: true
  }, {
    feature: "Cross-property shift coverage for large clusters",
    innrly: "partial",
    competitor: true,
    note: "Actabl CoverageFinder is purpose-built for this"
  }, {
    feature: "Wage benchmarking data",
    innrly: false,
    competitor: true,
    note: "Actabl PerfectWage"
  }, {
    feature: "Same product also runs A/P, OTA recon, BI, night audit",
    innrly: true,
    competitor: false
  }, {
    feature: "Typical time to live",
    innrly: "2–4 weeks",
    competitor: "60–90+ days (multi-module)"
  }], whenToChoose: {
    innrly: ["You want to keep your current TimeClock and still get scheduling, MPOR, OT guardrails, and payroll export", "You want published, predictable pricing — labor included in the back-office price, not billed per module", "You want Face-ID biometric punch-in as an option, in the same product as scheduling and payroll", "You want labor inside the same product as A/P, OTA reconciliation, BI, and night audit — one login, one data model", "You want a real 90-day trial on your own data before you commit"],
    competitor: ["Large multi-property clusters where cross-property shift filling (CoverageFinder) is a hard requirement", "You specifically need proprietary wage benchmarking data (PerfectWage)", "You already run Actabl's full labor stack and don't want to consolidate vendors"]
  }, faqs });
}
export {
  Page as component
};
