import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Quote, Check } from "lucide-react";
import { S as Section } from "./Section-DP-l4DF_.js";
import { B as Button } from "./router-uiSeds_Z.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
const vimalPortrait = "/assets/vimal-DKl1rEnn.jpg";
const RECEIPTS = [{
  value: "19 years",
  label: "Running in our own hotels"
}, {
  value: "4 brands",
  label: "Hilton · Marriott · IHG · Best Western"
}, {
  value: "Since 2012",
  label: "Multi-property, multi-brand"
}];
const TIMELINE = [{
  year: "2007",
  title: "Built for our own hotels",
  body: "Vimal builds the first internal tool at Q Hotels Management to replace six spreadsheets and a stack of night-audit packets."
}, {
  year: "2012",
  title: "Multi-property, multi-brand",
  body: "Rolled across the full Q Hotels portfolio — Hilton, Marriott, IHG, and Best Western properties running on one back office."
}, {
  year: "2023",
  title: "Released as Innrly",
  body: "After 16 years of operator-only use, the platform was rebranded and opened up to other independent operators and management groups."
}, {
  year: "Today",
  title: "200+ properties live",
  body: "Independent owners and management companies across the US run their back office on Innrly — and Q Hotels still does too."
}];
const TRANSLATOR = ["You're not the beta tester. 19 years of edge cases are already handled.", "The roadmap is set by an operator — not a PM who's never run a night audit.", "If it breaks in your hotel, it broke in ours first. And we already fixed it."];
function AboutPage() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent", children: "Operator-built. Operator-run. Since 2007." }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl", children: [
          "19 years in our own hotels",
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "before we sold it to yours." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-5 max-w-2xl text-lg text-muted-foreground", children: "Innrly has been running Q Hotels Management's portfolio — across Hilton, Marriott, IHG, and Best Western properties — since 2007. We released it to other operators in 2023." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-y border-border/60 bg-surface/30", children: /* @__PURE__ */ jsx("div", { className: "mx-auto grid max-w-7xl grid-cols-1 gap-4 px-4 py-6 sm:grid-cols-3 sm:gap-6 sm:px-6 lg:px-8", children: RECEIPTS.map((r) => /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-accent", children: r.value }),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: r.label })
    ] }, r.label)) }) }),
    /* @__PURE__ */ jsx(Section, { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: "A note from the founder" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex items-center gap-4", children: [
        /* @__PURE__ */ jsx("div", { className: "h-16 w-16 shrink-0 overflow-hidden rounded-full border border-border bg-gradient-to-br from-surface to-card", children: /* @__PURE__ */ jsx("img", { src: vimalPortrait, alt: "Vimal Patel", className: "h-full w-full object-cover" }) }),
        /* @__PURE__ */ jsxs("div", { className: "leading-tight", children: [
          /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-foreground", children: "Vimal Patel" }),
          /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: "Founder, Innrly · Q Hotels Management" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 space-y-5 text-lg leading-relaxed text-muted-foreground", children: [
        /* @__PURE__ */ jsx("p", { children: "In 2007 I was closing the month at Q Hotels with six spreadsheets, a stack of night-audit packets, and a part-time bookkeeper. None of it agreed with the PMS. So I built the tool I needed." }),
        /* @__PURE__ */ jsx("p", { children: "One place where the night audit, payroll, AP, and the P&L finally talked to each other. We've been running our portfolio on it ever since — across Hilton, Marriott, IHG, and Best Western properties." }),
        /* @__PURE__ */ jsxs("p", { children: [
          "Other operators kept asking. In 2023 we rebranded it",
          " ",
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Innrly" }),
          " and opened it up. Every feature still ships through our own hotels first."
        ] })
      ] }),
      /* @__PURE__ */ jsxs("figure", { className: "relative mt-10 rounded-2xl border border-accent/30 bg-card/60 p-6 sm:p-8", children: [
        /* @__PURE__ */ jsx(Quote, { className: "absolute -top-3 left-6 h-6 w-6 rounded-full bg-background p-1 text-accent", "aria-hidden": true }),
        /* @__PURE__ */ jsx("blockquote", { className: "font-serif text-xl leading-relaxed text-foreground sm:text-2xl", children: `"Every hotel loses money in the small places no one is watching. I built Innrly to watch them — with an owner's mindset, at the scale of a portfolio. Micro discipline, macro reach."` }),
        /* @__PURE__ */ jsxs("figcaption", { className: "mt-5 border-t border-border/60 pt-4 text-sm", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold text-foreground", children: "Vimal Patel" }),
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
            " ",
            "— Founder, Innrly · Q Hotels Management"
          ] })
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs(Section, { className: "border-t border-border/60 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-3xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: "What this means for you" }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-2xl font-semibold text-foreground sm:text-3xl", children: "You're buying something that's already survived 19 years of real hotels." })
      ] }),
      /* @__PURE__ */ jsx("ul", { className: "mx-auto mt-10 grid max-w-5xl gap-4 md:grid-cols-3", children: TRANSLATOR.map((line) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 rounded-2xl border border-border bg-card/70 p-5", children: [
        /* @__PURE__ */ jsx(Check, { className: "mt-0.5 h-5 w-5 shrink-0 text-accent", "aria-hidden": true }),
        /* @__PURE__ */ jsx("span", { className: "text-sm leading-relaxed text-muted-foreground", children: line })
      ] }, line)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "border-t border-border/60 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: "The build" }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-3xl font-semibold text-foreground sm:text-4xl", children: "From one hotel's pain to a platform for 200+." })
      ] }),
      /* @__PURE__ */ jsx("ol", { className: "relative mx-auto mt-12 max-w-3xl space-y-8 border-l border-border/60 pl-8", children: TIMELINE.map((t) => /* @__PURE__ */ jsxs("li", { className: "relative", children: [
        /* @__PURE__ */ jsx("span", { className: "absolute -left-[37px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-accent bg-background", "aria-hidden": true }),
        /* @__PURE__ */ jsx("div", { className: "text-[11px] font-bold uppercase tracking-wider text-accent", children: t.year }),
        /* @__PURE__ */ jsx("h3", { className: "mt-1 text-lg font-semibold text-foreground", children: t.title }),
        /* @__PURE__ */ jsx("p", { className: "mt-1 text-base leading-relaxed text-muted-foreground", children: t.body })
      ] }, t.year)) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "border-t border-border/60 bg-surface/30", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 py-16 text-center sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-semibold text-foreground sm:text-4xl", children: "Run your back office the way an operator would." }),
      /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-base text-muted-foreground", children: "See Innrly with your portfolio. 30-minute demo, no pitch deck — or skip ahead and start your 90-day trial." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "See it on your portfolio" }) }),
        /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/onboarding", children: "Start the 90-day trial" }) })
      ] })
    ] }) })
  ] });
}
export {
  AboutPage as component
};
