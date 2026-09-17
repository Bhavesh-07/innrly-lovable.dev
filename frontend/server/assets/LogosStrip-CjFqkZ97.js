import { jsx, jsxs } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Check } from "lucide-react";
const PMS = [
  { brand: "Hilton", items: ["OnQ", "PEP"] },
  { brand: "Marriott", items: ["FOSSE", "StayNTouch"] },
  { brand: "IHG", items: ["HotelKey"] },
  { brand: "Choice", items: ["Choice Advantage"] },
  { brand: "Independent", items: ["Opera", "Visual Matrix", "Maestro"] }
];
const ACCOUNTING = ["M3", "QuickBooks", "Sage Intacct"];
const TIMECLOCK = [
  { name: "Innrly TimeClock", native: true },
  { name: "ADP" },
  { name: "Paychex" }
];
const ADDITIVE = [
  "Plaid",
  "Repay",
  "Medallia",
  "Revinate",
  "Hotel Effectiveness",
  "Kipsu"
];
function Panel({ label, accent, children }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: { ["--panel-accent"]: accent },
      className: "relative overflow-hidden rounded-2xl border-2 border-[color:var(--panel-accent)]/65 bg-card/70 p-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--panel-accent)_22%,transparent),0_18px_55px_-28px_var(--panel-accent)] transition-colors hover:border-[color:var(--panel-accent)]/95",
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full opacity-60 blur-2xl",
            style: { background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` },
            "aria-hidden": true
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "h-2 w-2 rounded-full",
              style: { background: accent, boxShadow: `0 0 10px ${accent}` },
              "aria-hidden": true
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-[color:var(--panel-accent)]", children: label })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative mt-4", children })
      ]
    }
  );
}
function LogosStrip({ compact = false } = {}) {
  const pad = compact ? "py-6" : "py-12";
  return /* @__PURE__ */ jsx(
    "section",
    {
      "aria-labelledby": "logos-heading",
      className: compact ? "bg-transparent" : "border-b border-border/60 bg-background",
      children: /* @__PURE__ */ jsxs("div", { className: `mx-auto max-w-7xl px-4 ${pad} sm:px-6 lg:px-8`, children: [
        /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
          /* @__PURE__ */ jsx(
            "h2",
            {
              id: "logos-heading",
              className: `${compact ? "text-lg sm:text-xl" : "text-2xl sm:text-3xl"} font-bold tracking-tight text-foreground`,
              children: "Keep your PMS. Keep your accounting. Keep your time clock."
            }
          ),
          /* @__PURE__ */ jsx("p", { className: `${compact ? "mt-2 text-xs" : "mt-3 text-sm"} text-muted-foreground`, children: "Innrly works around the three systems your hotel will never change — across every major brand." })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: `${compact ? "mt-5" : "mt-8"} grid gap-4 md:grid-cols-3`, children: [
          /* @__PURE__ */ jsx(Panel, { label: "PMS", accent: "oklch(0.72 0.16 235)", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: PMS.map((b) => /* @__PURE__ */ jsxs(
            "li",
            {
              className: "flex flex-wrap items-baseline gap-x-2",
              children: [
                b.brand && /* @__PURE__ */ jsx("span", { className: "min-w-[78px] text-[10px] font-bold uppercase tracking-wider text-muted-foreground/80", children: b.brand }),
                /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground/90", children: b.items.join(" · ") })
              ]
            },
            b.brand ?? b.items.join("-")
          )) }) }),
          /* @__PURE__ */ jsx(Panel, { label: "Accounting", accent: "oklch(0.78 0.18 155)", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: ACCOUNTING.map((a) => /* @__PURE__ */ jsx("li", { className: "text-sm font-semibold text-foreground/90", children: a }, a)) }) }),
          /* @__PURE__ */ jsx(Panel, { label: "TimeClock", accent: "oklch(0.78 0.18 35)", children: /* @__PURE__ */ jsx("ul", { className: "space-y-2.5", children: TIMECLOCK.map((t) => /* @__PURE__ */ jsxs(
            "li",
            {
              className: "flex items-center gap-2 text-sm font-semibold text-foreground/90",
              children: [
                t.name,
                t.native && /* @__PURE__ */ jsx("span", { className: "rounded-full border border-[color:var(--panel-accent)]/50 bg-[color:var(--panel-accent)]/10 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-[color:var(--panel-accent)]", children: "Innrly's own" })
              ]
            },
            t.name
          )) }) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-5 flex justify-center", children: /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent", children: [
          /* @__PURE__ */ jsx(Check, { className: "h-3 w-3", "aria-hidden": true }),
          "No system change required"
        ] }) }),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: `${compact ? "mt-6" : "mt-10"} relative overflow-hidden rounded-2xl border-2 border-accent/40 bg-gradient-to-r from-accent/10 via-accent/5 to-accent/10 px-5 py-5 shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent,oklch(0.78_0.16_200))_18%,transparent),0_18px_50px_-30px_color-mix(in_oklab,var(--accent,oklch(0.78_0.16_200))_60%,transparent)]`,
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "pointer-events-none absolute -left-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl",
                  "aria-hidden": true
                }
              ),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "pointer-events-none absolute -right-16 top-1/2 h-40 w-40 -translate-y-1/2 rounded-full bg-accent/15 blur-3xl",
                  "aria-hidden": true
                }
              ),
              /* @__PURE__ */ jsxs("div", { className: "relative flex flex-wrap items-center justify-center gap-x-2 gap-y-3", children: [
                /* @__PURE__ */ jsx("span", { className: "mr-2 inline-flex items-center gap-1.5 rounded-full border border-accent/50 bg-accent/15 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: "Integrations" }),
                ADDITIVE.map((t, i) => /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx("span", { className: "rounded-lg border border-border/60 bg-background/60 px-3 py-1.5 text-sm font-semibold text-foreground/90 transition-colors hover:border-accent/60 hover:text-foreground", children: t }),
                  i < ADDITIVE.length - 1 && /* @__PURE__ */ jsx("span", { className: "text-accent/40", "aria-hidden": true, children: "·" })
                ] }, t))
              ] })
            ]
          }
        ),
        !compact && /* @__PURE__ */ jsxs("p", { className: "mt-6 text-center text-xs text-muted-foreground", children: [
          "50+ integrations across PMS, accounting, payroll, banking, guest survey, and A/P.",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/integrations", className: "font-semibold text-accent hover:underline", children: "See all integrations →" })
        ] })
      ] })
    }
  );
}
export {
  LogosStrip as L
};
