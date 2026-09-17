import { jsx, jsxs } from "react/jsx-runtime";
import { Star } from "lucide-react";
const TESTIMONIALS = [
  {
    quote: "Innrly replaced three spreadsheets and a part-time analyst. We close the month in two days instead of two weeks.",
    name: "Sarah Jenkins",
    title: "VP of Finance, Coastal Hospitality · 14 hotels"
  },
  {
    quote: "The labor dashboard alone paid for the platform in the first quarter. Every GM checks it before they cut the schedule.",
    name: "Marcus Rodriguez",
    title: "Director of Operations, Horizon Group · 9 hotels"
  },
  {
    quote: "Onboarding took a week, not a quarter. Their team mapped our PMS, payroll, and accounting without us lifting a finger.",
    name: "David Chen",
    title: "Owner, Elevate Boutique Hotels · 4 hotels"
  }
];
function Testimonials() {
  return /* @__PURE__ */ jsx(
    "section",
    {
      "aria-labelledby": "testimonials-heading",
      className: "border-b border-border/60 bg-surface/30",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl text-center", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              id: "testimonials-heading",
              className: "text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
              children: "Operators who trust Innrly with the back office"
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-3 text-base text-muted-foreground", children: "Finance leaders, owners, and GMs using Innrly across 200+ properties." })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 md:grid-cols-3", children: TESTIMONIALS.map((t) => /* @__PURE__ */ jsxs(
          "figure",
          {
            className: "flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-background p-6 shadow-sm",
            children: [
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "flex gap-0.5 text-accent", "aria-label": "5 out of 5", children: Array.from({ length: 5 }).map((_, i) => /* @__PURE__ */ jsx(Star, { className: "h-4 w-4 fill-current", "aria-hidden": true }, i)) }),
                /* @__PURE__ */ jsxs("blockquote", { className: "mt-4 text-base leading-relaxed text-foreground", children: [
                  "“",
                  t.quote,
                  "”"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 border-t border-border/60 pt-4", children: [
                /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-foreground", children: t.name }),
                /* @__PURE__ */ jsx("div", { className: "text-xs text-muted-foreground", children: t.title })
              ] })
            ]
          },
          t.name
        )) })
      ] })
    }
  );
}
export {
  Testimonials as T
};
