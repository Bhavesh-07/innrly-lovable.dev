import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Check, X, Minus } from "lucide-react";
import { B as Button } from "./router-CBR-JcUy.js";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-Df9Ktkng.js";
import { B as Breadcrumbs } from "./Breadcrumbs-CNu7uBt1.js";
function Cell({ value }) {
  if (value === true) return /* @__PURE__ */ jsx(Check, { className: "mx-auto h-4 w-4 text-accent", "aria-label": "Yes" });
  if (value === false)
    return /* @__PURE__ */ jsx(X, { className: "mx-auto h-4 w-4 text-muted-foreground/60", "aria-label": "No" });
  if (value === "partial")
    return /* @__PURE__ */ jsx(Minus, { className: "mx-auto h-4 w-4 text-muted-foreground", "aria-label": "Partial" });
  return /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: value });
}
function CompareLayout({
  competitorName,
  eyebrow,
  title,
  intro,
  summary,
  rows,
  whenToChoose,
  faqs
}) {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsx(
      Breadcrumbs,
      {
        items: [
          { name: "Home", to: "/" },
          { name: "Compare", to: "/compare" },
          { name: `Innrly: alternative to ${competitorName}` }
        ]
      }
    ),
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: eyebrow }),
        /* @__PURE__ */ jsx("h1", { className: "mt-4 text-4xl font-bold text-foreground sm:text-5xl", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: intro }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "See Innrly on your data" }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/pricing", children: "View pricing" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "The short version",
          title: `Innrly: alternative to ${competitorName} — at a glance.`
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-6 md:grid-cols-3", children: summary.map((s) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground", children: s.heading }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: s.body })
      ] }, s.heading)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "Difference, line by line",
          title: "Two ways to run the same back office."
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-10 space-y-3", children: rows.map((r) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "grid grid-cols-1 overflow-hidden aurora-card rounded-2xl md:grid-cols-[1.1fr_1fr_1fr]",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col justify-center border-b border-border px-5 py-4 md:border-b-0 md:border-r", children: [
              /* @__PURE__ */ jsx("p", { className: "text-sm font-semibold text-foreground", children: r.feature }),
              r.note && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: r.note })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 border-b border-border bg-accent/[0.06] px-5 py-4 md:border-b-0 md:border-r", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-accent", children: "Innrly" }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 text-sm font-medium text-foreground", children: /* @__PURE__ */ jsx(Cell, { value: r.innrly }) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 bg-muted/20 px-5 py-4", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold uppercase tracking-widest text-muted-foreground", children: competitorName }),
              /* @__PURE__ */ jsx("div", { className: "flex-1 text-sm text-muted-foreground", children: /* @__PURE__ */ jsx(Cell, { value: r.competitor }) })
            ] })
          ]
        },
        r.feature
      )) }),
      /* @__PURE__ */ jsxs("p", { className: "mt-4 text-xs text-muted-foreground", children: [
        "Based on publicly available information as of 2026. ",
        competitorName,
        " is a trademark of its respective owner; comparison is informational and not endorsed by ",
        competitorName,
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Why choose Innrly", title: "Reasons operators pick Innrly." }),
      /* @__PURE__ */ jsx("div", { className: "mt-10 grid gap-4 md:grid-cols-2", children: whenToChoose.innrly.map((i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-start gap-3 rounded-2xl border border-accent/40 bg-card p-5",
          children: [
            /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", { className: "text-sm text-foreground", children: i })
          ]
        },
        i
      )) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(
        SectionHeading,
        {
          eyebrow: "FAQ",
          title: `Questions about Innrly: alternative to ${competitorName}.`
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "mt-10 max-w-3xl space-y-6", children: faqs.map((f) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground", children: f.q }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.a })
      ] }, f.q)) })
    ] }),
    /* @__PURE__ */ jsx(
      CtaBand,
      {
        title: "See Innrly on your portfolio.",
        subtitle: "20-minute walkthrough on your own data — no slides, no commitment.",
        primary: { to: "/contact", label: "Book a walkthrough" },
        secondary: { to: "/pricing", label: "View pricing" }
      }
    )
  ] });
}
export {
  CompareLayout as C
};
