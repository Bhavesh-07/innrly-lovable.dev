import { jsxs, jsx } from "react/jsx-runtime";
import { Mail, BarChart3, Calendar, TrendingUp, TrendingDown } from "lucide-react";
function BIMorningBriefing() {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-chart-4/70" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success/70" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ml-3 text-xs font-medium text-muted-foreground", children: "Innrly · Owner view · 5:02 AM" }),
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
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Early Bird · 5 AM digest" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-2", children: [
            /* @__PURE__ */ jsx(Row, { label: "Portfolio occ", value: "82%", delta: "+3.2", up: true }),
            /* @__PURE__ */ jsx(Row, { label: "RevPAR", value: "$118", delta: "+$9", up: true }),
            /* @__PURE__ */ jsx(Row, { label: "Labor %", value: "29.4%", delta: "-1.1", up: true }),
            /* @__PURE__ */ jsx(Row, { label: "Exceptions", value: "3", delta: "-2", up: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 rounded-lg border border-accent/30 bg-accent/5 p-2", children: [
            /* @__PURE__ */ jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-accent", children: "Pacing alert" }),
            /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[11px] font-semibold text-foreground", children: "AUS-03 weekend pace +14% vs LY" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "col-span-3 space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/60 bg-surface/60 p-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/40 pb-2", children: [
              /* @__PURE__ */ jsx(BarChart3, { className: "h-3.5 w-3.5 text-accent" }),
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Pulse · 8 properties" }),
              /* @__PURE__ */ jsx("span", { className: "ml-auto text-[9px] text-muted-foreground", children: "refreshed 4:58 AM" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mt-2 grid grid-cols-4 gap-2", children: [
              /* @__PURE__ */ jsx(Kpi, { label: "Occ", value: "82%" }),
              /* @__PURE__ */ jsx(Kpi, { label: "ADR", value: "$144" }),
              /* @__PURE__ */ jsx(Kpi, { label: "RevPAR", value: "$118" }),
              /* @__PURE__ */ jsx(Kpi, { label: "MPOR", value: "24.6" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-3", children: [
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/60 bg-surface/60 p-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(Calendar, { className: "h-3.5 w-3.5 text-accent" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "STR Index" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 flex items-baseline justify-between", children: [
                /* @__PURE__ */ jsx("span", { className: "text-xl font-bold text-foreground", children: "112.4" }),
                /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-0.5 text-[10px] font-semibold text-success", children: [
                  /* @__PURE__ */ jsx(TrendingUp, { className: "h-3 w-3" }),
                  "+4.2"
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "mt-1 text-[9px] text-muted-foreground", children: "RevPAR Index · vs comp set" }),
              /* @__PURE__ */ jsx("div", { className: "mt-2 flex h-6 items-end gap-0.5", children: [5, 7, 6, 8, 7, 9, 10, 8, 11].map((h, i) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "flex-1 rounded-sm bg-gradient-to-t from-accent/40 to-accent",
                  style: { height: `${h * 8}%` }
                },
                i
              )) })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-border/60 bg-surface/60 p-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsx(TrendingDown, { className: "h-3.5 w-3.5 text-chart-4" }),
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Rate Shop" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-1", children: [
                /* @__PURE__ */ jsx(CompRow, { name: "Comp A", delta: "-$8", down: true }),
                /* @__PURE__ */ jsx(CompRow, { name: "Comp B", delta: "+$3" }),
                /* @__PURE__ */ jsx(CompRow, { name: "Comp C", delta: "-$12", down: true }),
                /* @__PURE__ */ jsx(CompRow, { name: "You", delta: "hold", highlight: true })
              ] })
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground", children: "Before your coffee" }),
      /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-foreground", children: "Portfolio decided" })
    ] })
  ] });
}
function Row({
  label,
  value,
  delta,
  up
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
    /* @__PURE__ */ jsx("span", { className: "text-[11px] text-muted-foreground", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-1.5", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm font-bold text-foreground", children: value }),
      /* @__PURE__ */ jsx("span", { className: `text-[10px] font-semibold ${up ? "text-success" : "text-destructive"}`, children: delta })
    ] })
  ] });
}
function Kpi({ label, value }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-lg border border-border/40 bg-background/40 p-2", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-base font-bold text-foreground", children: value })
  ] });
}
function CompRow({
  name,
  delta,
  down,
  highlight
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: `flex items-center justify-between rounded px-1.5 py-0.5 ${highlight ? "bg-accent/10" : ""}`,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `text-[10px] ${highlight ? "font-bold text-accent" : "text-muted-foreground"}`,
            children: name
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `text-[10px] font-semibold ${down ? "text-destructive" : highlight ? "text-accent" : "text-success"}`,
            children: delta
          }
        )
      ]
    }
  );
}
export {
  BIMorningBriefing as B
};
