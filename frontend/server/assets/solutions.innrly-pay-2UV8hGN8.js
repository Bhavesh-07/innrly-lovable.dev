import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { M as ModuleSpotlightCard } from "./ModuleSpotlightCard-N-XbpOe1.js";
import { Mail, Check, CreditCard, Send, Printer, FileText, StickyNote, AlertCircle, ListChecks, ShieldCheck } from "lucide-react";
import { D as DeepSolutionLayout } from "./DeepSolutionLayout-CvfvrmwD.js";
import { B as BeforeAfterFlow } from "./BeforeAfterFlow-C8xLB9tX.js";
import { S as Section } from "./Section-CUtP8UOj.js";
import "react";
import "./router-CCF17sca.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
import "./ProductOrb-BC39IRy6.js";
function InnrlyPayCheckRun() {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-chart-4/70" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success/70" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ml-3 text-xs font-medium text-muted-foreground", children: "Innrly Pay · A/P queue · 2:14 PM" }),
        /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-success" })
          ] }),
          "LIVE"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-5 gap-3 p-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-2 rounded-xl border border-border/60 bg-surface/60 p-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-accent" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Inbox · auto-captured" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-1.5", children: [
            /* @__PURE__ */ jsx(InvoiceRow, { vendor: "Ecolab", amount: "$2,418", prop: "AUS-03", status: "coded" }),
            /* @__PURE__ */ jsx(InvoiceRow, { vendor: "Sysco", amount: "$5,940", prop: "DAL-12", status: "approval" }),
            /* @__PURE__ */ jsx(InvoiceRow, { vendor: "HD Supply", amount: "$1,127", prop: "HOU-01", status: "coded" }),
            /* @__PURE__ */ jsx(InvoiceRow, { vendor: "Reliant Energy", amount: "$8,412", prop: "DAL-12", status: "paid" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 rounded-lg border border-accent/30 bg-accent/5 p-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-accent", children: "Vendor memory" }),
            /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[11px] font-semibold text-foreground", children: "Sysco · GL 5120 · pre-coded" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-3 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-accent/40 bg-surface/60 p-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/40 pb-2", children: [
              /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5 text-accent" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Review · Approve · Pay" }),
              /* @__PURE__ */ jsx("span", { className: "ml-auto text-[9px] font-semibold text-accent", children: "Sysco · $5,940" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 grid grid-cols-2 gap-2 text-[11px]", children: [
              /* @__PURE__ */ jsx(Field, { label: "Property", value: "DAL-12" }),
              /* @__PURE__ */ jsx(Field, { label: "GL Code", value: "5120 · F&B Cost" }),
              /* @__PURE__ */ jsx(Field, { label: "Approver", value: "J. Patel · Controller" }),
              /* @__PURE__ */ jsx(Field, { label: "Due", value: "Net 15 · Oct 22" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center justify-between rounded-lg bg-accent/10 p-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-accent", children: "Approved · 2:11 PM" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-foreground", children: "2 clicks" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/60 bg-surface/60 p-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(CreditCard, { className: "h-3.5 w-3.5 text-accent" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Virtual Card" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 rounded-md bg-gradient-to-br from-accent/30 to-accent/10 p-2", children: [
                /* @__PURE__ */ jsx("div", { className: "text-[9px] text-muted-foreground", children: "Sysco · single-use" }),
                /* @__PURE__ */ jsx("div", { className: "mt-1 font-mono text-[10px] tracking-wider text-foreground", children: "•••• •••• •••• 5940" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 text-[9px] text-success", children: "+ 1.2% rebate" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/60 bg-surface/60 p-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Send, { className: "h-3.5 w-3.5 text-success" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Settlement" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-1 text-[10px]", children: [
                /* @__PURE__ */ jsx(SettleRow, { label: "Sent to vendor", done: true }),
                /* @__PURE__ */ jsx(SettleRow, { label: "QuickBooks posted", done: true }),
                /* @__PURE__ */ jsx(SettleRow, { label: "GL reconciled", done: true })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground", children: "Friday check run" }),
      /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-foreground", children: "Done by 2 PM" })
    ] })
  ] });
}
function InvoiceRow({
  vendor,
  amount,
  prop,
  status
}) {
  const tone = status === "paid" ? "text-success" : status === "approval" ? "text-accent" : "text-muted-foreground";
  const label = status === "paid" ? "Paid" : status === "approval" ? "Approve" : "Coded";
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between rounded px-1.5 py-1 hover:bg-background/40", children: [
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("div", { className: "truncate text-[11px] font-semibold text-foreground", children: vendor }),
      /* @__PURE__ */ jsx("div", { className: "text-[9px] text-muted-foreground", children: prop })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold text-foreground", children: amount }),
      /* @__PURE__ */ jsx(
        "span",
        {
          className: `rounded-full bg-background/60 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider ${tone}`,
          children: label
        }
      )
    ] })
  ] });
}
function Field({ label, value }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border/40 bg-background/40 p-2", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[8px] font-bold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[11px] font-semibold text-foreground", children: value })
  ] });
}
function SettleRow({ label, done }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
    /* @__PURE__ */ jsx(Check, { className: `h-3 w-3 ${done ? "text-success" : "text-muted-foreground"}` }),
    /* @__PURE__ */ jsx("span", { className: "text-[10px] text-foreground", children: label })
  ] });
}
function PayChaos() {
  return /* @__PURE__ */ jsxs("div", { className: "relative space-y-2", children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "ba-chaos-in rounded-lg border border-destructive/60 bg-destructive/10 p-2 opacity-0 shadow-elevated",
        style: {
          ["--x0"]: "-32px",
          ["--y0"]: "14px",
          ["--r0"]: "-6deg",
          ["--rot"]: "-1deg"
        },
        children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 border-b border-border/40 pb-1", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-chart-4" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-foreground", children: "A/P Inbox · Friday 9:14 AM" }),
            /* @__PURE__ */ jsx("span", { className: "ml-auto text-[9px] text-destructive", children: "27 unread" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1 space-y-0.5 text-[9px]", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[1fr_60px_56px] gap-1 text-muted-foreground", children: [
              /* @__PURE__ */ jsx("span", { children: "Vendor" }),
              /* @__PURE__ */ jsx("span", { children: "Amount" }),
              /* @__PURE__ */ jsx("span", { children: "GL" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[1fr_60px_56px] gap-1 text-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "truncate", children: "Sysco · F&B" }),
              /* @__PURE__ */ jsx("span", { children: "$1,842" }),
              /* @__PURE__ */ jsx("span", { className: "rounded bg-destructive/15 px-1 text-center text-destructive", children: "???" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[1fr_60px_56px] gap-1 text-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "truncate", children: "Ecolab" }),
              /* @__PURE__ */ jsx("span", { children: "$ 412" }),
              /* @__PURE__ */ jsx("span", { className: "rounded bg-destructive/15 px-1 text-center text-destructive", children: "???" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-[1fr_60px_56px] gap-1 text-foreground", children: [
              /* @__PURE__ */ jsx("span", { className: "truncate", children: "HD Supply" }),
              /* @__PURE__ */ jsx("span", { children: "$ 287" }),
              /* @__PURE__ */ jsx("span", { className: "rounded bg-destructive/15 px-1 text-center text-destructive", children: "???" })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "ba-chaos-in flex w-36 shrink-0 items-center gap-1.5 rounded-lg border border-destructive/50 bg-background/60 p-2 opacity-0 shadow-elevated",
          style: {
            ["--x0"]: "-26px",
            ["--y0"]: "-18px",
            ["--r0"]: "8deg",
            ["--rot"]: "2deg",
            ["--delay"]: "0.22s"
          },
          children: [
            /* @__PURE__ */ jsx(Printer, { className: "h-3.5 w-3.5 shrink-0 text-primary" }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "truncate text-[10px] font-semibold text-foreground", children: "HP LaserJet" }),
              /* @__PURE__ */ jsx("div", { className: "text-[9px] text-muted-foreground", children: "42 checks queued" })
            ] })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-destructive/10 p-2 opacity-0",
          style: {
            ["--x0"]: "12px",
            ["--y0"]: "22px",
            ["--r0"]: "5deg",
            ["--rot"]: "-1deg",
            ["--delay"]: "0.4s"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 text-muted-foreground" }),
              /* @__PURE__ */ jsx("span", { className: "truncate text-[10px] font-semibold text-foreground", children: "CHK #10472" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-[9px] text-muted-foreground", children: "awaiting 2nd signature" })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "ba-chaos-in w-24 shrink-0 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated",
          style: {
            ["--x0"]: "30px",
            ["--y0"]: "-12px",
            ["--r0"]: "14deg",
            ["--rot"]: "6deg",
            ["--delay"]: "0.58s"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(StickyNote, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsx("span", { children: "Bank trip" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[9px] font-normal", children: "by 3 PM!" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "ba-slide-in mt-2 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0",
        style: { animationDelay: "0.86s" },
        children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3 shrink-0 text-destructive" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-destructive", children: `3 vendors calling · "where's my payment?"` })
        ]
      }
    )
  ] });
}
function Page() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsx(ModuleSpotlightCard, { moduleKey: "pay", moduleName: "Innrly Pay", pricing: "included", blurb: "Virtual Cards + ACH replace paper checks. Included free with your trial." }),
    /* @__PURE__ */ jsxs(Section, { tone: "surface", className: "py-5 sm:py-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "From shoebox to settled" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-bold text-foreground sm:text-3xl", children: "Watch a Friday check run become a Tuesday two-click pay." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsx(BeforeAfterFlow, { chaos: /* @__PURE__ */ jsx(PayChaos, {}), after: () => /* @__PURE__ */ jsx(InnrlyPayCheckRun, {}), motion: "documents" }) })
    ] }),
    /* @__PURE__ */ jsx(DeepSolutionLayout, { icon: CreditCard, orbVariant: "pay", persona: "For A/P Clerks & Controllers", eyebrow: "Innrly Pay · Free with annual Professional", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Stop writing checks. ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Start closing books." })
    ] }), description: /* @__PURE__ */ jsxs(Fragment, { children: [
      "The A/P clerk's week shouldn't be invoice hunts, check runs, and bank trips. Innrly Pay captures every vendor invoice, routes it for approval, pays via Virtual Card or ACH, and reconciles to the GL — included free on the annual Professional plan. Discover how this integrates into our wider",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/hotel-back-office-automation", className: "text-accent underline font-semibold", children: "hotel back-office automation" }),
      " ",
      "system."
    ] }), bullets: ["Email or scan invoices in — Innrly OCRs and pre-codes them", "Approval flow that matches multi-property finance reality", "Pay by Virtual Card or ACH in the same workflow", "End-to-end reconciliation into QuickBooks, M3, Sage Intacct"], metrics: [{
      stat: "0",
      label: "Paper checks"
    }, {
      stat: "T+1",
      label: "Avg settlement"
    }, {
      stat: "100%",
      label: "Auto-reconciled"
    }, {
      stat: "FREE",
      label: "With annual Professional"
    }], beforeAfter: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "From ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "check runs" }),
        ' to "already paid."'
      ] }),
      description: "A/P shouldn't require a printer, a signature, and a trip to the bank.",
      withoutTitle: "The Friday check run",
      without: ["Open three inboxes hunting for vendor invoices", "Hand-key invoice headers and GL codes into accounting", "Print checks, walk for signatures, stuff envelopes", "Wait days to reconcile what cleared the bank"],
      withTitle: "The afternoon close",
      withItems: ["Invoices captured automatically via email, scan, or vendor portal", "GL coding remembered per vendor — pre-coded on arrival", "Approve and pay (Virtual Card or ACH) in two clicks", "Settlement reconciles itself into your accounting system"]
    }, workflow: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "How A/P teams ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "actually use it." })
      ] }),
      description: "Four moves that replace the check-run ritual.",
      steps: [{
        icon: Mail,
        title: "Invoice arrives — auto-captured",
        body: "Vendor emails the invoice or Innrly pulls it from the portal. OCR extracts header data, vendor memory pre-codes the GL."
      }, {
        icon: ListChecks,
        title: "Review · Approve · Pay",
        body: "One screen for the controller. Approval rules match property and threshold. No app-switching."
      }, {
        icon: Send,
        title: "Pay via Virtual Card or ACH",
        body: "Pick the rail. Virtual Cards generate per-vendor, per-transaction so fraud exposure stays at zero."
      }, {
        icon: ShieldCheck,
        title: "Reconciled automatically",
        body: "Settlement posts to QuickBooks / M3 / Sage Intacct with the right GL code, vendor, and property. Done."
      }],
      artifact: /* @__PURE__ */ jsx(InnrlyPayCheckRun, {})
    }, replaces: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "What Innrly Pay ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "consolidates." })
      ] }),
      description: "One product instead of four — these line items disappear from the back-office stack.",
      items: ["Paper checks", "Check-signing trips", "Manual invoice data entry", "Standalone AP automation subscriptions", "Bank deposit reconciliation by hand", `Vendor "where's my payment?" calls`, "Stamps and envelopes"]
    }, quote: {
      text: "We were paying $14K a year for a separate AP automation tool. Innrly Pay does more, sits in the same product as the rest of our back office, and is included with our subscription. The switch paid for the whole platform.",
      author: "Controller · 9-property select-service group"
    }, modules: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "The modules behind ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "Innrly Pay." })
      ] }),
      description: "Each module deep-links into the Features page.",
      items: [{
        name: "Invoice Capture",
        body: "Email, scan, or portal pull — OCR'd on arrival."
      }, {
        name: "Vendor Memory",
        body: "GL code learned per vendor; future invoices pre-coded."
      }, {
        name: "Approval Flow",
        body: "Property and threshold rules; mobile-friendly."
      }, {
        name: "Virtual Cards",
        body: "Per-vendor, per-transaction — zero fraud exposure."
      }, {
        name: "ACH Payments",
        body: "Same workflow as cards; pick the right rail per vendor."
      }, {
        name: "Accounting Sync",
        body: "QuickBooks, M3, Sage Intacct — always reconciled."
      }]
    }, faq: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "What A/P teams ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "actually ask us." })
      ] }),
      items: [{
        q: "Is it really free?",
        a: "Innrly Pay is included free on the annual Professional plan. On Starter or monthly Professional it's available as a paid add-on. We make money on interchange when vendors accept Virtual Cards — not on per-payment fees."
      }, {
        q: "What if a vendor only takes checks?",
        a: "Innrly will print and mail the check for you, then reconcile it automatically. You still never touch the check stock."
      }, {
        q: "How does the approval flow handle multi-property?",
        a: "Rules are scoped by property and dollar threshold. A GM can approve up to their cap; the controller sees everything above it."
      }, {
        q: "What accounting systems do you sync with?",
        a: "QuickBooks Online, QuickBooks Desktop, M3, Sage Intacct, and others. The sync is bi-directional — vendor master and GL stay aligned both ways."
      }]
    }, cta: {
      title: "Stop writing checks",
      subtitle: "A 20-minute demo. You'll see the invoice come in, get approved, paid, and reconciled — start to finish, in real time."
    } })
  ] });
}
export {
  Page as component
};
