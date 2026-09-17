import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Check, ArrowRight } from "lucide-react";
import { B as Button } from "./router-CBR-JcUy.js";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-Df9Ktkng.js";
function IntegrationLayout({
  partnerName,
  eyebrow,
  badge,
  title,
  intro,
  directionLabel,
  whatItDoes,
  flow,
  inScope,
  staysIn,
  faqs
}) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-bold text-foreground sm:text-5xl", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: intro }),
        /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
          badge && /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold text-accent", children: [
            /* @__PURE__ */ jsx(Check, { className: "h-3.5 w-3.5", "aria-hidden": true }),
            badge
          ] }),
          /* @__PURE__ */ jsx("span", { className: "inline-flex items-center rounded-full border border-border bg-surface/40 px-3 py-1 text-xs font-medium text-muted-foreground", children: directionLabel })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
            "Talk to us about ",
            partnerName
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/pricing", children: "View pricing" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "How it works", title: `Innrly + ${partnerName} — the data flow.` }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid items-stretch gap-4 md:grid-cols-3", children: [flow.from, flow.via, flow.to].map((step, i) => /* @__PURE__ */ jsxs("div", { className: "relative aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: [
          "Step ",
          i + 1
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-base font-semibold text-foreground", children: step }),
        i < 2 && /* @__PURE__ */ jsx(
          ArrowRight,
          {
            className: "absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-accent md:block",
            "aria-hidden": true
          }
        )
      ] }, step)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "What Innrly automates into it",
          title: `What Innrly does for ${partnerName} users.`
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: whatItDoes.map((s) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground", children: s.heading }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.body })
      ] }, s.heading)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "Where each platform lives in your stack",
          title: "Clear lines, no overlap."
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "mt-10 grid gap-6 md:grid-cols-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-accent/40 bg-card p-6", children: [
          /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: "In Innrly" }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: inScope.map((i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-accent", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", { children: i })
          ] }, i)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
          /* @__PURE__ */ jsxs("h3", { className: "text-lg font-semibold text-foreground", children: [
            "Stays in ",
            staysIn.system
          ] }),
          /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: staysIn.items.map((i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-4 w-4 shrink-0 text-muted-foreground", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", { children: i })
          ] }, i)) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "FAQ", title: `Questions about the ${partnerName} integration.` }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 max-w-3xl space-y-6", children: faqs.map((f) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground", children: f.q }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.a })
      ] }, f.q)) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-6 text-xs text-muted-foreground", children: [
        partnerName,
        " is a trademark of its respective owner. Integration details reflect Innrly's implementation."
      ] })
    ] }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: `See Innrly + ${partnerName} on your portfolio.`,
        subtitle: "20-minute walkthrough on your own data — no slides, no commitment.",
        primary: { to: "/contact", label: "Book a walkthrough" },
        secondary: { to: "/pricing", label: "View pricing" }
      }
    )
  ] });
}
export {
  IntegrationLayout as I
};
