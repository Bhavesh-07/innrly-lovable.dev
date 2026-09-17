import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useRef, useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Building2, Receipt, CreditCard, FileText, CheckCircle2, AlertTriangle, Moon, Sun, Coffee, ArrowRight, FolderArchive, Smile, ClipboardCheck } from "lucide-react";
import { W as Wordmark, c as cn, g as getApiBase, B as Button } from "./router-CBR-JcUy.js";
import { P as ProductOrb } from "./ProductOrb-BcavPbLU.js";
import { S as Section, a as SectionHeading, C as CtaBand } from "./Section-Df9Ktkng.js";
import { L as LogosStrip } from "./LogosStrip-CjFqkZ97.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-VTFDxVGu.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
import "@radix-ui/react-accordion";
function HeroNightAudit() {
  return /* @__PURE__ */ jsxs("div", { className: "relative mx-auto h-full w-full", children: [
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes na-fly-in {
          0% { transform: translateX(-35%); opacity: 0; }
          15% { transform: translateX(0); opacity: 1; }
          55% { transform: translateX(0); opacity: 1; }
          70% { transform: translateX(40%) scale(0.6); opacity: 0; }
          100% { transform: translateX(40%) scale(0.6); opacity: 0; }
        }
        @keyframes na-fly-out-ok {
          0%, 55% { transform: translateX(-40%) scale(0.4); opacity: 0; }
          70% { transform: translateX(0) scale(1); opacity: 1; }
          95% { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(20%); opacity: 0; }
        }
        @keyframes na-fly-out-flag {
          0%, 60% { transform: translateX(-40%) scale(0.4); opacity: 0; }
          75% { transform: translateX(0) scale(1); opacity: 1; }
          100% { transform: translateX(0) scale(1); opacity: 1; }
        }
        @keyframes na-orb-pulse {
          0%, 100% { transform: scale(1); filter: brightness(1); }
          50% { transform: scale(1.06); filter: brightness(1.3); }
        }
        @keyframes na-ring-spin {
          to { transform: rotate(360deg); }
        }
        @keyframes na-aurora-spin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }
        @keyframes na-bloom-pulse {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
          50% { transform: translate(-50%, -50%) scale(1.18); opacity: 0.85; }
        }
        @keyframes na-count-money {
          0% { content: "$0"; }
          25% { content: "$118"; }
          50% { content: "$246"; }
          75% { content: "$340"; }
          100% { content: "$412"; }
        }
        @keyframes na-pulse-ring {
          0% { transform: scale(0.3); opacity: 0.8; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        @keyframes na-scan {
          0% { transform: translateY(-20px); opacity: 0; }
          10%, 90% { opacity: 0.5; }
          100% { transform: translateY(440px); opacity: 0; }
        }
        @keyframes na-chip-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .na-orb-wrap:hover .na-aurora { animation-duration: 4s !important; }
        .na-orb-wrap:hover .na-bloom { animation-duration: 1.8s !important; }
      ` }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute -inset-10 -z-10 bg-cta opacity-20 blur-3xl lg:-inset-16",
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "relative h-full overflow-hidden bg-transparent", children: /* @__PURE__ */ jsxs("div", { className: "na-orb-wrap group relative h-full min-h-[640px] lg: min-h-[760px]", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "na-bloom pointer-events-none absolute left-[48%] top-1/2",
          style: {
            width: "clamp(200px, 18vw, 320px)",
            height: "clamp(200px, 18vw, 320px)",
            transform: "translate(-50%, -50%)",
            background: "radial-gradient(circle, oklch(0.78 0.14 195 / 0.55) 0%, oklch(0.62 0.22 260 / 0.35) 30%, oklch(0.55 0.20 300 / 0.18) 55%, transparent 75%)",
            filter: "blur(30px)",
            animation: "na-bloom-pulse 4s ease-in-out infinite",
            transition: "filter 0.6s ease"
          },
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "na-aurora pointer-events-none absolute left-[48%] top-1/2",
          style: {
            width: "clamp(150px, 13vw, 220px)",
            height: "clamp(150px, 13vw, 220px)",
            transform: "translate(-50%, -50%)",
            borderRadius: "9999px",
            background: "conic-gradient(from 0deg, oklch(0.82 0.16 195), oklch(0.62 0.22 260), oklch(0.65 0.22 310), oklch(0.85 0.16 85), oklch(0.74 0.17 155), oklch(0.82 0.16 195))",
            WebkitMaskImage: "radial-gradient(circle, transparent 56%, black 60%, black 78%, transparent 84%)",
            maskImage: "radial-gradient(circle, transparent 56%, black 60%, black 78%, transparent 84%)",
            animation: "na-aurora-spin 14s linear infinite",
            filter: "blur(2px) saturate(1.1)",
            opacity: 0.9,
            transition: "filter 0.6s ease"
          },
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsxs("svg", { className: "absolute inset-0 h-full w-full opacity-[0.08]", "aria-hidden": true, children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("pattern", { id: "na-grid", width: "28", height: "28", patternUnits: "userSpaceOnUse", children: /* @__PURE__ */ jsx("path", { d: "M 28 0 L 0 0 0 28", fill: "none", stroke: "currentColor", strokeWidth: "0.5" }) }) }),
        /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: "url(#na-grid)" })
      ] }),
      /* @__PURE__ */ jsxs(
        "svg",
        {
          className: "absolute inset-0 h-full w-full",
          viewBox: "0 0 100 100",
          preserveAspectRatio: "none",
          "aria-hidden": true,
          children: [
            /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("linearGradient", { id: "na-beam", x1: "0", x2: "1", children: [
              /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "oklch(0.78 0.14 195)", stopOpacity: "0" }),
              /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "oklch(0.78 0.14 195)", stopOpacity: "0.7" }),
              /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "oklch(0.78 0.14 195)", stopOpacity: "0" })
            ] }) }),
            [11, 22, 33, 44, 55, 66, 77].map((y, i) => /* @__PURE__ */ jsx(
              "line",
              {
                x1: "20",
                y1: y,
                x2: "48",
                y2: "50",
                stroke: "url(#na-beam)",
                strokeWidth: "1.5",
                vectorEffect: "non-scaling-stroke"
              },
              `in-${i}`
            )),
            [19, 30, 70, 78].map((y, i) => /* @__PURE__ */ jsx(
              "line",
              {
                x1: "48",
                y1: "50",
                x2: "80",
                y2: y,
                stroke: "url(#na-beam)",
                strokeWidth: "1.5",
                vectorEffect: "non-scaling-stroke"
              },
              `out-${i}`
            ))
          ]
        }
      ),
      /* @__PURE__ */ jsx(BeamParticles, {}),
      [0, 1.2, 2.4].map((d, i) => /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute left-[48%] top-1/2 rounded-full border",
          style: {
            width: "clamp(120px, 11vw, 180px)",
            height: "clamp(120px, 11vw, 180px)",
            marginLeft: "calc(-1 * clamp(120px, 11vw, 180px) / 2)",
            marginTop: "calc(-1 * clamp(120px, 11vw, 180px) / 2)",
            borderColor: "oklch(0.78 0.14 195 / 0.6)",
            animation: `na-pulse-ring 3.6s ease-out ${d}s infinite`
          },
          "aria-hidden": true
        },
        `pulse-${i}`
      )),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute left-[48%] top-1/2 rounded-full",
          style: {
            width: "clamp(130px, 11.5vw, 190px)",
            height: "clamp(130px, 11.5vw, 190px)",
            transform: "translate(-50%, -50%)",
            background: "oklch(0.16 0.04 250)",
            boxShadow: "0 0 0 1px oklch(0.82 0.16 195 / 0.5), inset 0 0 0 6px oklch(0.18 0.04 250), inset 0 0 0 7px oklch(0.62 0.22 260 / 0.35)"
          },
          "aria-hidden": true
        }
      ),
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "pointer-events-none absolute inset-x-0 top-0 h-12",
          style: {
            background: "linear-gradient(180deg, transparent 0%, oklch(0.78 0.14 195 / 0.18) 50%, transparent 100%)",
            animation: "na-scan 5s linear infinite"
          }
        }
      ),
      /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute left-[48%] top-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-foreground", children: [
        /* @__PURE__ */ jsx(Wordmark, { size: "sm", className: "mx-auto" }),
        /* @__PURE__ */ jsx("div", { className: "mt-1 text-[10px] text-muted-foreground lg:text-sm", children: "Automating" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-[22%] left-4 top-[8%] flex w-[clamp(11rem,18vw,18rem)] flex-col justify-between lg:left-8", children: inputs.map((r, i) => /* @__PURE__ */ jsxs(
        "div",
        {
          className: "flex items-center gap-2 rounded-lg border border-border/60 bg-surface/90 px-2.5 py-1.5 backdrop-blur lg:gap-3 lg:rounded-xl lg:px-4 lg:py-3",
          style: { animation: `na-fly-in 6s ${i * 0.85}s ease-out infinite both` },
          children: [
            /* @__PURE__ */ jsx(r.icon, { className: "h-3.5 w-3.5 shrink-0 text-accent lg:h-5 lg:w-5" }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0 leading-tight", children: [
              /* @__PURE__ */ jsx("div", { className: "truncate text-[10px] font-semibold text-foreground lg:text-base", children: r.label }),
              /* @__PURE__ */ jsx("div", { className: "truncate text-[9px] text-muted-foreground lg:text-sm", children: r.sub })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "ml-auto text-[10px] font-bold text-foreground lg:text-base", children: r.amt })
          ]
        },
        i
      )) }),
      /* @__PURE__ */ jsxs("div", { className: "absolute right-4 top-[14%] w-[clamp(11rem,18vw,18rem)] lg:right-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-success lg:mb-4 lg:text-base", children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 lg:h-5 lg:w-5" }),
          " Auto-cleared"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2 lg:space-y-4", children: cleared.map((r, i) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-center gap-2 rounded-lg border border-success/30 bg-success/5 px-2.5 py-2 lg:gap-3 lg:rounded-xl lg:px-4 lg:py-4",
            style: { animation: `na-fly-out-ok 6s ${i * 1.5 + 0.4}s ease-out infinite both` },
            children: [
              /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3.5 w-3.5 shrink-0 text-success lg:h-5 lg:w-5" }),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0 leading-tight", children: [
                /* @__PURE__ */ jsx("div", { className: "truncate text-[10px] font-semibold text-foreground lg:text-base", children: r.label }),
                /* @__PURE__ */ jsx("div", { className: "truncate text-[9px] text-success lg:text-sm", children: "Cleared" })
              ] })
            ]
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "absolute bottom-[17%] right-4 w-[clamp(11rem,18vw,18rem)] lg:right-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-destructive lg:mb-4 lg:text-base", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 lg:h-5 lg:w-5" }),
          " Flagged for human"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "space-y-2 lg:space-y-4", children: flagged.map((r, i) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "rounded-lg border border-destructive/40 bg-destructive/10 px-2.5 py-2 lg:rounded-xl lg:px-4 lg:py-4",
            style: {
              animation: `na-fly-out-flag 6s ${i * 1.5 + 0.8}s ease-out infinite both`
            },
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 lg:gap-3", children: [
              /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3.5 w-3.5 shrink-0 text-destructive lg:h-5 lg:w-5" }),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0 leading-tight", children: [
                /* @__PURE__ */ jsx("div", { className: "truncate text-[10px] font-semibold text-foreground lg:text-base", children: r.label }),
                /* @__PURE__ */ jsx("div", { className: "truncate text-[9px] text-muted-foreground lg:text-sm", children: r.sub })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "ml-auto text-[10px] font-bold text-accent lg:text-base", children: r.amt })
            ] })
          },
          i
        )) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-accent/30 bg-surface/95 px-4 py-2 shadow-lg backdrop-blur lg:bottom-10 lg:px-8 lg:py-4", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-[11px] font-medium lg:gap-8 lg:text-xl", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Loss prevented" }),
          /* @__PURE__ */ jsx(CountUp, { end: 412, prefix: "$" })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "text-border", children: "|" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Hours saved" }),
          /* @__PURE__ */ jsx(CountUp, { end: 11, suffix: " hrs" })
        ] })
      ] }) })
    ] }) })
  ] });
}
const inputs = [
  { icon: Building2, label: "Opera PMS feed", sub: "Folio sync", amt: "148" },
  { icon: Receipt, label: "OTA commission", sub: "Booking.com", amt: "74" },
  { icon: CreditCard, label: "Vendor invoice", sub: "Sysco #1284", amt: "1,284" },
  { icon: FileText, label: "Folio #4421", sub: "Tax variance", amt: "92" },
  { icon: Building2, label: "Marriott PMS", sub: "Night close", amt: "326" },
  { icon: Receipt, label: "Expedia recon", sub: "Comm sweep", amt: "212" },
  { icon: CreditCard, label: "Amex feed", sub: "Card recon", amt: "894" }
];
const cleared = [{ label: "PMS → GL posted" }, { label: "Vendor inv. matched" }];
const flagged = [
  { label: "Tax mismatch · #4421", sub: "Folio variance", amt: "$92" },
  { label: "Duplicate OTA fee", sub: "Booking.com", amt: "$74" }
];
function CountUp({
  end,
  prefix = "",
  suffix = ""
}) {
  const steps = 5;
  const id = `cu-${prefix}${end}${suffix}`.replace(/\W/g, "");
  const values = Array.from({ length: steps + 1 }, (_, i) => Math.round(end * i / steps));
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes ${id} {
          ${values.map(
      (v, i) => `${(i / steps * 100).toFixed(2)}% { content: "${prefix}${v.toLocaleString()}${suffix}"; }`
    ).join("\n")}
        }
        .${id}::after {
          content: "${prefix}0${suffix}";
          animation: ${id} 6s steps(1) infinite;
        }
      ` }),
    /* @__PURE__ */ jsx("span", { className: `${id} font-bold text-accent` })
  ] });
}
function BeamParticles() {
  const inputs2 = [11, 22, 33, 44, 55, 66, 77];
  const outputs = [19, 30, 70, 78];
  const beams = [
    ...inputs2.map((y, i) => ({
      key: `i${i}`,
      x1: 20,
      y1: y,
      x2: 48,
      y2: 50,
      delay: i * 0.75,
      color: "oklch(0.82 0.16 195)"
    })),
    ...outputs.map((y, i) => ({
      key: `o${i}`,
      x1: 48,
      y1: 50,
      x2: 80,
      y2: y,
      delay: i * 1 + 0.5,
      color: i < 2 ? "oklch(0.78 0.18 150)" : "oklch(0.72 0.20 30)"
    }))
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: beams.map(
      (b) => `
        @keyframes na-particle-${b.key} {
          0% { left: ${b.x1}%; top: ${b.y1}%; opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { left: ${b.x2}%; top: ${b.y2}%; opacity: 0; }
        }
      `
    ).join("\n") }),
    beams.map((b) => /* @__PURE__ */ jsx(
      "div",
      {
        className: "pointer-events-none absolute rounded-full",
        style: {
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
          background: b.color,
          boxShadow: `0 0 12px ${b.color}, 0 0 4px ${b.color}`,
          animation: `na-particle-${b.key} 4s ${b.delay}s ease-in-out infinite`
        },
        "aria-hidden": true
      },
      b.key
    ))
  ] });
}
function NightToMorningScene() {
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("style", { children: `
        @keyframes ntm-wipe {
          0%, 15% { clip-path: inset(0 100% 0 0); }
          45%, 70% { clip-path: inset(0 0 0 0); }
          95%, 100% { clip-path: inset(0 100% 0 0); }
        }
        @keyframes ntm-sun-rise {
          0%, 20% { transform: translateY(80px); opacity: 0; }
          50%, 75% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(80px); opacity: 0; }
        }
        @keyframes ntm-star-twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes ntm-row-resolve {
          0%, 20% { transform: translateX(0); opacity: 1; background-color: oklch(0.65 0.22 25 / 0.1); border-color: oklch(0.65 0.22 25 / 0.4); }
          45% { background-color: oklch(0.74 0.17 155 / 0.1); border-color: oklch(0.74 0.17 155 / 0.4); }
          75% { transform: translateX(0); opacity: 1; }
          90%, 100% { transform: translateX(8px); opacity: 0.7; }
        }
        @keyframes ntm-tick-pop {
          0%, 35% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.3); opacity: 1; }
          60%, 100% { transform: scale(1); opacity: 1; }
        }
        @keyframes ntm-coffee-steam {
          0% { transform: translateY(0) scale(1); opacity: 0.6; }
          100% { transform: translateY(-12px) scale(1.4); opacity: 0; }
        }
        @keyframes ntm-clock-tick {
          0% { content: "02:41 AM"; }
          25% { content: "04:12 AM"; }
          50% { content: "06:30 AM"; }
          75% { content: "07:15 AM"; }
          100% { content: "07:45 AM"; }
        }
        @keyframes ntm-cloud-drift {
          0% { transform: translateX(-40px); }
          100% { transform: translateX(560px); }
        }
        @keyframes ntm-bird-fly {
          0% { transform: translate(-30px, 10px) scale(0.8); opacity: 0; }
          20% { opacity: 1; }
          80% { opacity: 1; }
          100% { transform: translate(560px, -30px) scale(0.6); opacity: 0; }
        }
        @keyframes ntm-sun-rays {
          0%, 100% { transform: rotate(0deg) scale(1); opacity: 0.4; }
          50% { transform: rotate(180deg) scale(1.1); opacity: 0.7; }
        }
        @keyframes ntm-sparkle {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
        }
        @keyframes ntm-moon-glow {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.55; }
          50% { transform: translate(-50%, -50%) scale(1.15); opacity: 0.85; }
        }
        @keyframes ntm-sun-bloom {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
          50% { transform: translate(-50%, -50%) scale(1.18); opacity: 1; }
        }
        .ntm-wrap:hover .ntm-wipe-layer { animation-duration: 6s !important; }
        .ntm-wrap:hover .ntm-moon-aura { animation-duration: 1.6s !important; }
        .ntm-wrap:hover .ntm-sun-aura { animation-duration: 1.6s !important; }
      ` }),
    /* @__PURE__ */ jsx("div", { className: "absolute -inset-8 -z-10 rounded-3xl bg-cta opacity-25 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-chart-4/70" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success/70" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ml-3 text-xs font-medium text-muted-foreground", children: [
          "Innrly · One overnight cycle ·",
          " ",
          /* @__PURE__ */ jsx("span", { className: "ntm-clock font-mono text-accent", style: {} }),
          /* @__PURE__ */ jsx("style", { children: `
              .ntm-clock::after {
                content: "02:41 AM";
                animation: ntm-clock-tick 8s steps(1) infinite;
              }
            ` })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ntm-wrap relative h-[440px] overflow-hidden", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "absolute inset-0",
            style: {
              background: "linear-gradient(180deg, oklch(0.15 0.04 260) 0%, oklch(0.22 0.05 250) 100%)"
            },
            children: [
              stars.map((s, i) => /* @__PURE__ */ jsx(
                "span",
                {
                  className: "absolute rounded-full bg-white",
                  style: {
                    left: `${s.x}%`,
                    top: `${s.y}%`,
                    width: s.r,
                    height: s.r,
                    animation: `ntm-star-twinkle ${2 + i % 3}s ease-in-out ${i * 0.2}s infinite`
                  }
                },
                i
              )),
              /* @__PURE__ */ jsxs("div", { className: "absolute right-8 top-8 h-12 w-12", children: [
                /* @__PURE__ */ jsx(
                  "span",
                  {
                    className: "ntm-moon-aura pointer-events-none absolute left-1/2 top-1/2",
                    style: {
                      width: 140,
                      height: 140,
                      transform: "translate(-50%, -50%)",
                      background: "radial-gradient(circle, oklch(0.82 0.16 195 / 0.55) 0%, oklch(0.62 0.22 260 / 0.35) 40%, transparent 70%)",
                      filter: "blur(14px)",
                      animation: "ntm-moon-glow 4s ease-in-out infinite",
                      transition: "animation-duration 0.4s ease"
                    },
                    "aria-hidden": true
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "relative flex h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur", children: /* @__PURE__ */ jsx(Moon, { className: "h-6 w-6 text-white/80" }) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "absolute left-6 top-16 w-72", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/60", children: [
                  /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 text-destructive" }),
                  " Overnight queue · 14 items"
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: nightRows.map((r, i) => /* @__PURE__ */ jsxs(
                  "div",
                  {
                    className: "flex items-center gap-2 rounded-md border border-destructive/30 bg-destructive/10 px-2.5 py-1.5 backdrop-blur",
                    children: [
                      /* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 shrink-0 text-destructive" }),
                      /* @__PURE__ */ jsx("span", { className: "truncate text-[10px] font-medium text-white/90", children: r.label }),
                      /* @__PURE__ */ jsx("span", { className: "ml-auto text-[10px] font-bold text-white", children: r.amt })
                    ]
                  },
                  i
                )) })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "absolute right-6 top-16 hidden w-60 rounded-xl border border-white/10 bg-white/5 p-3 backdrop-blur sm:block", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-white/70", children: "Systems · live" }),
                  /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[9px] font-bold text-emerald-300", children: [
                    /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
                      /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-300 opacity-75" }),
                      /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-300" })
                    ] }),
                    "SYNCING"
                  ] })
                ] }),
                /* @__PURE__ */ jsx("div", { className: "space-y-1.5", children: [
                  { name: "Opera PMS", pct: 92 },
                  { name: "Booking.com", pct: 78 },
                  { name: "Expedia", pct: 64 },
                  { name: "QuickBooks GL", pct: 41 },
                  { name: "Amex feed", pct: 88 }
                ].map((s) => /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-[9px] font-medium text-white/80", children: [
                    /* @__PURE__ */ jsx("span", { children: s.name }),
                    /* @__PURE__ */ jsxs("span", { className: "font-mono text-white/60", children: [
                      s.pct,
                      "%"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("div", { className: "mt-0.5 h-1 overflow-hidden rounded-full bg-white/10", children: /* @__PURE__ */ jsx(
                    "div",
                    {
                      className: "h-full rounded-full bg-gradient-to-r from-indigo-400 to-cyan-300",
                      style: { width: `${s.pct}%` }
                    }
                  ) })
                ] }, s.name)) }),
                /* @__PURE__ */ jsx("div", { className: "mt-2 border-t border-white/10 pt-2 text-[9px] text-white/50", children: "428 transactions processed" })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-6 text-[10px] font-medium text-white/50", children: "Night audit running… 14 exceptions detected" })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "ntm-wipe-layer absolute inset-0",
            style: {
              background: "linear-gradient(180deg, oklch(0.92 0.05 75) 0%, oklch(0.85 0.12 50) 60%, oklch(0.78 0.14 30) 100%)",
              animation: "ntm-wipe 8s ease-in-out infinite"
            },
            children: [
              [
                { y: 24, delay: 0, dur: 22, w: 60, op: 0.7 },
                { y: 70, delay: 8, dur: 28, w: 90, op: 0.5 },
                { y: 130, delay: 14, dur: 32, w: 70, op: 0.6 }
              ].map((c, i) => /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute rounded-full bg-white",
                  style: {
                    top: c.y,
                    left: 0,
                    width: c.w,
                    height: c.w * 0.4,
                    opacity: c.op,
                    filter: "blur(6px)",
                    animation: `ntm-cloud-drift ${c.dur}s linear ${c.delay}s infinite`
                  }
                },
                `cloud-${i}`
              )),
              [
                { y: 60, delay: 2, dur: 9 },
                { y: 90, delay: 5, dur: 11 }
              ].map((b, i) => /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "absolute",
                  style: {
                    top: b.y,
                    left: 0,
                    animation: `ntm-bird-fly ${b.dur}s ease-in-out ${b.delay}s infinite`
                  },
                  width: "18",
                  height: "10",
                  viewBox: "0 0 18 10",
                  children: /* @__PURE__ */ jsx(
                    "path",
                    {
                      d: "M 1 5 Q 4 1, 7 5 Q 10 1, 13 5",
                      fill: "none",
                      stroke: "oklch(0.35 0.05 30)",
                      strokeWidth: "1.2",
                      strokeLinecap: "round"
                    }
                  )
                },
                `bird-${i}`
              )),
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "absolute right-10 top-10",
                  style: { animation: "ntm-sun-rise 8s ease-in-out infinite" },
                  children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "ntm-sun-aura pointer-events-none absolute left-1/2 top-1/2",
                        style: {
                          width: 220,
                          height: 220,
                          transform: "translate(-50%, -50%)",
                          background: "radial-gradient(circle, oklch(0.95 0.16 85 / 0.85) 0%, oklch(0.82 0.18 55 / 0.55) 35%, oklch(0.72 0.20 35 / 0.25) 60%, transparent 80%)",
                          filter: "blur(20px)",
                          animation: "ntm-sun-bloom 3.6s ease-in-out infinite"
                        },
                        "aria-hidden": true
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "svg",
                      {
                        className: "absolute -inset-6",
                        width: "112",
                        height: "112",
                        viewBox: "0 0 112 112",
                        style: {
                          animation: "ntm-sun-rays 12s linear infinite",
                          transformOrigin: "56px 56px"
                        },
                        children: Array.from({ length: 12 }).map((_, i) => {
                          const angle = i * 30 * Math.PI / 180;
                          const x1 = 56 + Math.cos(angle) * 36;
                          const y1 = 56 + Math.sin(angle) * 36;
                          const x2 = 56 + Math.cos(angle) * 52;
                          const y2 = 56 + Math.sin(angle) * 52;
                          return /* @__PURE__ */ jsx(
                            "line",
                            {
                              x1,
                              y1,
                              x2,
                              y2,
                              stroke: "oklch(0.92 0.15 75)",
                              strokeWidth: "2",
                              strokeLinecap: "round",
                              opacity: "0.85"
                            },
                            i
                          );
                        })
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-yellow-200 to-orange-400 shadow-[0_0_80px_rgba(255,180,80,0.9)]", children: /* @__PURE__ */ jsx(Sun, { className: "h-8 w-8 text-white" }) })
                  ] })
                }
              ),
              [
                { x: 340, y: 60, d: 0 },
                { x: 100, y: 50, d: 0.6 },
                { x: 360, y: 200, d: 1.2 },
                { x: 80, y: 240, d: 1.8 }
              ].map((s, i) => /* @__PURE__ */ jsx(
                "svg",
                {
                  className: "absolute",
                  style: {
                    left: s.x,
                    top: s.y,
                    animation: `ntm-sparkle 2.4s ease-in-out ${s.d}s infinite`
                  },
                  width: "12",
                  height: "12",
                  viewBox: "0 0 12 12",
                  children: /* @__PURE__ */ jsx("path", { d: "M6 0 L7 5 L12 6 L7 7 L6 12 L5 7 L0 6 L5 5 Z", fill: "oklch(0.95 0.12 90)" })
                },
                `sp-${i}`
              )),
              /* @__PURE__ */ jsxs("div", { className: "absolute left-6 top-16 w-80 rounded-xl border border-white/40 bg-white/85 p-4 shadow-2xl backdrop-blur", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-orange-700", children: "Morning briefing" }),
                    /* @__PURE__ */ jsx("div", { className: "text-sm font-bold text-slate-900", children: "Wednesday · 7:45 AM" })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsx(Coffee, { className: "h-6 w-6 text-orange-800" }),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "absolute -top-2 left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-white/70",
                        style: { animation: "ntm-coffee-steam 1.4s ease-out infinite" }
                      }
                    ),
                    /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "absolute -top-2 left-1/2 h-2 w-1 -translate-x-1/2 rounded-full bg-white/70",
                        style: { animation: "ntm-coffee-steam 1.4s ease-out 0.7s infinite" }
                      }
                    )
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-2", children: [
                  /* @__PURE__ */ jsx(Stat, { label: "Cleared", value: "12", accent: "text-emerald-700" }),
                  /* @__PURE__ */ jsx(Stat, { label: "To review", value: "2", accent: "text-orange-700" }),
                  /* @__PURE__ */ jsx(Stat, { label: "Saved", value: "$412", accent: "text-emerald-700" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-3 space-y-1.5", children: [
                  morningRows.map((r, i) => /* @__PURE__ */ jsxs(
                    "div",
                    {
                      className: "flex items-center gap-2 rounded-md border border-emerald-300 bg-emerald-50 px-2.5 py-1.5",
                      children: [
                        /* @__PURE__ */ jsx(
                          "span",
                          {
                            className: "inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-500",
                            style: { animation: `ntm-tick-pop 8s ease-out ${i * 0.15}s infinite` },
                            children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-3 w-3 text-white" })
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "truncate text-[10px] font-medium text-slate-800", children: r })
                      ]
                    },
                    i
                  )),
                  /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-md border border-orange-300 bg-orange-50 px-2.5 py-1.5", children: [
                    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-3 w-3 shrink-0 text-orange-600" }),
                    /* @__PURE__ */ jsxs("span", { className: "truncate text-[10px] font-medium text-slate-800", children: [
                      "Tax variance · folio #4421 · ",
                      /* @__PURE__ */ jsx("span", { className: "font-bold", children: "$92" })
                    ] }),
                    /* @__PURE__ */ jsx("button", { className: "ml-auto rounded bg-slate-900 px-1.5 py-0.5 text-[9px] font-bold text-white", children: "Review" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "absolute right-6 top-16 hidden w-60 rounded-xl border border-white/50 bg-white/90 p-3 shadow-2xl backdrop-blur sm:block", children: [
                /* @__PURE__ */ jsxs("div", { className: "mb-2 flex items-center justify-between", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-orange-700", children: "Today's outlook" }),
                  /* @__PURE__ */ jsx("span", { className: "rounded-full bg-emerald-100 px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider text-emerald-700", children: "On pace" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                  /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-slate-200 bg-white p-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-[9px] font-medium text-slate-500", children: [
                      /* @__PURE__ */ jsx("span", { children: "Occupancy" }),
                      /* @__PURE__ */ jsx("span", { className: "font-bold text-emerald-600", children: "+4.2%" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-0.5 flex items-end justify-between", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-base font-bold text-slate-900", children: "87%" }),
                      /* @__PURE__ */ jsx("svg", { width: "60", height: "20", viewBox: "0 0 60 20", children: /* @__PURE__ */ jsx(
                        "polyline",
                        {
                          points: "0,15 10,12 20,14 30,8 40,10 50,5 60,3",
                          fill: "none",
                          stroke: "oklch(0.65 0.18 155)",
                          strokeWidth: "1.5"
                        }
                      ) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-slate-200 bg-white p-2", children: [
                    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-[9px] font-medium text-slate-500", children: [
                      /* @__PURE__ */ jsx("span", { children: "ADR" }),
                      /* @__PURE__ */ jsx("span", { className: "font-bold text-emerald-600", children: "+$8" })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { className: "mt-0.5 flex items-end justify-between", children: [
                      /* @__PURE__ */ jsx("div", { className: "text-base font-bold text-slate-900", children: "$182" }),
                      /* @__PURE__ */ jsx("svg", { width: "60", height: "20", viewBox: "0 0 60 20", children: /* @__PURE__ */ jsx(
                        "polyline",
                        {
                          points: "0,14 10,11 20,13 30,9 40,7 50,8 60,4",
                          fill: "none",
                          stroke: "oklch(0.65 0.18 155)",
                          strokeWidth: "1.5"
                        }
                      ) })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-orange-200 bg-orange-50 p-2", children: [
                    /* @__PURE__ */ jsx("div", { className: "text-[9px] font-bold uppercase tracking-wider text-orange-700", children: "Action for you" }),
                    /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[10px] font-medium text-slate-800", children: "Approve 2 flagged items before 10 AM" })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "absolute bottom-4 left-6 text-[10px] font-bold text-orange-900", children: "☕ You walked in. It's already done." })
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute top-3 left-3 z-10 rounded-full border border-white/20 bg-black/40 px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-widest text-white/80 backdrop-blur", children: "Night → Morning" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "absolute -right-3 -top-3 hidden rounded-xl border border-border bg-card px-4 py-3 shadow-elevated sm:block", children: [
      /* @__PURE__ */ jsx("div", { className: "text-[10px] font-medium uppercase tracking-wider text-muted-foreground", children: "You sleep. Innrly works." }),
      /* @__PURE__ */ jsx("div", { className: "text-lg font-bold text-foreground", children: "14 → 2 · in one cycle" })
    ] })
  ] });
}
const stars = [
  { x: 8, y: 12, r: 2 },
  { x: 22, y: 8, r: 1 },
  { x: 35, y: 18, r: 1.5 },
  { x: 48, y: 6, r: 1 },
  { x: 60, y: 14, r: 2 },
  { x: 72, y: 22, r: 1 },
  { x: 88, y: 28, r: 1.5 },
  { x: 15, y: 32, r: 1 },
  { x: 42, y: 38, r: 1 },
  { x: 78, y: 42, r: 2 },
  { x: 5, y: 48, r: 1 },
  { x: 92, y: 52, r: 1.5 }
];
const nightRows = [
  { label: "Unposted room charge", amt: "$148" },
  { label: "Tax mismatch · #4421", amt: "$92" },
  { label: "Duplicate OTA fee", amt: "$74" },
  { label: "Comp room · no approval", amt: "$98" },
  { label: "Vendor inv. unmatched", amt: "$1,284" }
];
const morningRows = [
  "Room charges posted · 247",
  "OTA commissions reconciled",
  "Vendor invoices matched · 18",
  "GL entries pushed to QuickBooks"
];
function Stat({ label, value, accent }) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-md border border-slate-200 bg-white/60 p-2", children: [
    /* @__PURE__ */ jsx("div", { className: "text-[8px] font-bold uppercase tracking-wider text-slate-500", children: label }),
    /* @__PURE__ */ jsx("div", { className: `text-lg font-bold ${accent}`, children: value })
  ] });
}
function AuroraReveal({
  children,
  className,
  delay = 120
}) {
  const ref = useRef(null);
  const [revealed, setRevealed] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            window.setTimeout(() => setRevealed(true), delay);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return /* @__PURE__ */ jsxs(
    "span",
    {
      ref,
      className: cn("aurora-reveal relative inline-block", revealed && "is-revealed", className),
      children: [
        /* @__PURE__ */ jsx("style", { children: `
        .aurora-reveal::after {
          content: "";
          position: absolute;
          inset: -8% -6%;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            transparent 0%,
            transparent 38%,
            oklch(0.82 0.16 195 / 0.55) 46%,
            oklch(0.62 0.22 260 / 0.65) 50%,
            oklch(0.70 0.20 310 / 0.55) 54%,
            transparent 62%,
            transparent 100%
          );
          background-size: 260% 100%;
          background-position: 120% 0;
          mix-blend-mode: screen;
          filter: blur(14px);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .aurora-reveal.is-revealed::after {
          opacity: 1;
          animation: aurora-reveal-sweep 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes aurora-reveal-sweep {
          0% { background-position: 120% 0; opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { background-position: -40% 0; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-reveal::after { display: none; }
        }
      ` }),
        children
      ]
    }
  );
}
const METRICS = [
  { value: "20–40", unit: "hrs", label: "saved per property each month" },
  { value: "200+", unit: "hotels", label: "running on Innrly today" },
  {
    value: "$10K+",
    unit: "per property",
    label: "recovered annually in OTA, vendor, labor & audit packet exceptions"
  }
];
function ProofBand() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      "data-glow": "dark",
      className: "relative border-y border-border/60 bg-surface/40",
      "aria-label": "Proof of impact",
      children: [
        /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12", children: /* @__PURE__ */ jsx("div", { className: "grid items-center gap-8 lg:grid-cols-3", children: METRICS.map((m) => /* @__PURE__ */ jsxs(
          "div",
          {
            className: "flex items-baseline gap-3 border-l border-border/60 pl-5 first:border-l-0 first:pl-0 lg:border-l lg:pl-6 lg:first:border-l-0 lg:first:pl-0",
            children: [
              /* @__PURE__ */ jsx("div", { className: "text-3xl font-bold leading-none text-gradient sm:text-4xl", children: m.value }),
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[11px] font-semibold uppercase tracking-[0.18em] text-accent", children: m.unit }),
                /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: m.label })
              ] })
            ]
          },
          m.label
        )) }) }),
        /* @__PURE__ */ jsx("div", { className: "border-t border-border/40", children: /* @__PURE__ */ jsx(LogosStrip, { compact: true }) })
      ]
    }
  );
}
const coreAccent = {
  intelligence: "oklch(0.78 0.18 155)",
  // emerald
  control: "oklch(0.72 0.16 235)",
  // sapphire
  shift: "oklch(0.68 0.22 258)"
  // royal indigo
};
const coreSuites = [{
  variant: "intelligence",
  displayVariant: "intelligence",
  name: "Business Intelligence",
  to: "/solutions/business-intelligence",
  body: "Portfolio-wide dashboards, STR benchmarking, and predictive trends — in one view."
}, {
  variant: "control",
  displayVariant: "control",
  name: "Financial Control",
  to: "/solutions/financial-control",
  body: "Automated reconciliation, billing assurance, and revenue protection that defends your margins."
}, {
  variant: "shift",
  displayVariant: "shift",
  name: "Innrly Shift",
  to: "/solutions/innrly-shift",
  body: "Scheduling, Face-ID TimeClock, housekeeping productivity, and payroll — one mobile-first product for GMs."
}, {
  variant: "ops",
  displayVariant: "intelligence",
  name: "Operations Automation",
  to: "/solutions/operations-automation",
  body: "Night audit, OTA commissions, and bank reconciliation — handled without spreadsheets."
}, {
  variant: "pay",
  displayVariant: "control",
  name: "Innrly Pay",
  to: "/solutions/innrly-pay",
  body: "Replace paper checks with Virtual Cards & ACH. Faster settlement, fraud protection built in.",
  tag: "Included free"
}, {
  variant: "labor",
  displayVariant: "shift",
  name: "Labor & Workforce",
  to: "/solutions/labor-workforce",
  body: "5-minute labor snapshots that surface hidden overtime before it hits payroll.",
  tag: "New"
}];
const supportingSuites = [{
  icon: FolderArchive,
  name: "Document Vault",
  to: "/solutions/document-vault",
  body: "Calendar-based vault — PMS night-audit packs auto-drop on each day.",
  tone: "doc"
}, {
  icon: Receipt,
  name: "Expense Entries",
  to: "/solutions/expense-entries",
  body: "Log card charges + auto-paid invoices, synced straight to QuickBooks.",
  tone: "expense"
}, {
  icon: Smile,
  name: "Guest Experience",
  to: "/integrations",
  body: "Sentiment + review scores from Medallia and Revinate, alongside RevPAR.",
  tag: "Via Medallia",
  tone: "guest"
}, {
  icon: ClipboardCheck,
  name: "Accountability Pack",
  to: "/services/accountability-pack",
  body: "Done-for-you verification, franchise reporting, Green Engage, CLC.",
  tag: "Add-on",
  tone: "accountability"
}];
const outcomes = [{
  stat: "200+",
  label: "Hotels on Innrly"
}, {
  stat: "17,000+",
  label: "Rooms tracked nightly"
}, {
  stat: "1,500+",
  label: "Hotel team members using Innrly"
}, {
  stat: "250+",
  label: "Vendor invoices auto-processed per hotel / month"
}, {
  stat: "50+",
  label: "PMS, accounting, payroll & TimeClock integrations"
}];
const compatTier1 = ["Hilton", "Marriott", "IHG"];
const compatTier2 = ["Wyndham", "Choice Hotels", "Best Western", "Hyatt", "Radisson", "Sonesta", "Red Roof", "Motel 6", "Extended Stay America", "La Quinta", "Red Lion"];
const DEFAULT_HOMEPAGE_TESTIMONIALS = [{
  quote: "As a multi-property owner, I need instant visibility into what's happening across all of my hotels without making a dozen phone calls. INNRLY gives me a real-time snapshot of occupancy, revenue, labor, guest satisfaction, and cash flow in one easy-to-use dashboard. It has made asset management significantly more efficient by providing consistent reporting across every property, allowing us to identify trends, improve accountability, and make faster, data-driven decisions. It's the first thing I check every morning.",
  name: "Kate-Key",
  title: "VP of Operations",
  company: "Multi-Property Portfolio",
  avatar: ""
}, {
  quote: "Innrly has indeed elevated our business to a new level. The integration of the daily trial balance and accounts payables with QuickBooks has helped us develop above-property-level accountability and ease of management in our accounting. Additionally, the labor module provides a comprehensive overview at the management company level while helping the GM monitor daily labor leakage.",
  name: "Mrs. Aman Dhillon",
  title: "CEO",
  company: "Hotel Management Co.",
  avatar: ""
}];
function HomePage() {
  const [showAllProducts, setShowAllProducts] = useState(false);
  const [testimonialsList, setTestimonialsList] = useState(DEFAULT_HOMEPAGE_TESTIMONIALS);
  useEffect(() => {
    fetch(`${getApiBase()}/testimonials?page=homepage`).then((res) => res.json()).then((data) => {
      if (Array.isArray(data) && data.length > 0) {
        setTestimonialsList(data);
      }
    }).catch((err) => console.error("Failed to load homepage testimonials from API:", err));
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative min-h-[calc(100vh-4rem)] overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "absolute inset-0", "aria-hidden": true, children: [
        /* @__PURE__ */ jsx("div", { className: "absolute left-1/4 top-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" }),
        /* @__PURE__ */ jsx("div", { className: "absolute right-10 bottom-0 h-96 w-96 rounded-full bg-accent/20 blur-3xl" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "relative h-[calc(100vh-4rem)] min-h-[760px] px-4 py-6 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "relative z-10 mx-auto flex h-full max-w-[60rem] flex-col justify-center pb-28", children: [
        /* @__PURE__ */ jsx("div", { className: "font-pacifico text-2xl sm:text-3xl text-accent normal-case tracking-normal", children: "One Platform: Built for Hotels" }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 text-4xl font-bold leading-[1.05] text-foreground sm:text-5xl lg:text-6xl xl:text-7xl", children: [
          "Hotel management software that",
          " ",
          /* @__PURE__ */ jsx(AuroraReveal, { children: /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "automates the back office." }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-6 max-w-xl text-lg text-muted-foreground", children: "Innrly brings every part of your hotel's operation into one intelligent platform — financials, performance, and labor — across your entire portfolio." }),
        /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap gap-3", children: [
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsxs(Link, { to: "/contact", children: [
            "See it live",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-1.5 h-4 w-4" })
          ] }) }),
          /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", className: "border-border bg-background/40", children: /* @__PURE__ */ jsx(Link, { to: "/features", children: "Explore features" }) })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "90-day free trial · No credit card required" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("section", { className: "relative hidden h-[clamp(560px,72vh,820px)] overflow-hidden border-y border-border/40 bg-hero sm:block", children: /* @__PURE__ */ jsx(HeroNightAudit, {}) }),
    /* @__PURE__ */ jsx("section", { className: "relative overflow-hidden border-y border-border/40 bg-hero py-12 sm:hidden", children: /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-md px-4", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-accent/30 bg-surface/80 p-5 shadow-glow backdrop-blur", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-widest text-accent", children: "Live night audit" }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5 text-[10px] font-semibold text-success", children: [
          /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
          "Streaming"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-3 text-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-success/30 bg-success/10 p-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-success", children: "12" }),
          /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: "Auto-cleared" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "rounded-xl border border-destructive/30 bg-destructive/10 p-3", children: [
          /* @__PURE__ */ jsx("div", { className: "text-2xl font-bold text-destructive", children: "2" }),
          /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground", children: "Flagged" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 space-y-2", children: [{
        l: "Opera PMS · folio sync",
        v: "148",
        ok: true
      }, {
        l: "Booking.com · commission sweep",
        v: "$74",
        ok: true
      }, {
        l: "Tax mismatch · folio #4421",
        v: "$92",
        ok: false
      }].map((r) => /* @__PURE__ */ jsxs("div", { className: `flex items-center justify-between rounded-lg border px-3 py-2 text-xs ${r.ok ? "border-success/30 bg-success/5" : "border-destructive/40 bg-destructive/10"}`, children: [
        /* @__PURE__ */ jsx("span", { className: "truncate text-foreground", children: r.l }),
        /* @__PURE__ */ jsx("span", { className: `ml-2 font-bold ${r.ok ? "text-success" : "text-destructive"}`, children: r.v })
      ] }, r.l)) }),
      /* @__PURE__ */ jsxs("div", { className: "mt-4 flex items-center justify-between border-t border-border/60 pt-3 text-xs", children: [
        /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Loss prevented" }),
        /* @__PURE__ */ jsx("span", { className: "font-bold text-accent", children: "$412 · 11 hrs" })
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx(ProofBand, {}),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "The portfolio we run", title: "Trusted across hotels, rooms, and teams.", description: "Innrly powers daily operations for hotel owners and management companies across the U.S.", align: "center" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-6", children: outcomes.map((o) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "inline-block pr-1 text-3xl font-bold text-gradient sm:text-4xl leading-tight", children: o.stat }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: o.label })
      ] }, o.label)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "py-12", children: [
      /* @__PURE__ */ jsx("p", { className: "text-center text-sm font-medium uppercase tracking-wider text-muted-foreground", children: "Every major brand — plus independents and boutiques" }),
      /* @__PURE__ */ jsx("div", { className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-3", children: compatTier1.map((l) => /* @__PURE__ */ jsxs("div", { className: "relative flex h-16 items-center justify-center overflow-hidden rounded-xl border-2 border-accent/50 bg-accent/5 px-4 text-base font-bold tracking-tight text-foreground shadow-[0_0_0_1px_color-mix(in_oklab,var(--accent)_18%,transparent),0_16px_50px_-28px_color-mix(in_oklab,var(--accent)_70%,transparent)]", children: [
        /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute -right-10 -top-10 h-24 w-24 rounded-full bg-accent/20 blur-2xl", "aria-hidden": true }),
        /* @__PURE__ */ jsx("span", { className: "relative", children: l })
      ] }, l)) }),
      /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap items-center justify-center gap-2", children: compatTier2.map((l) => /* @__PURE__ */ jsx("div", { className: "flex h-10 items-center justify-center rounded-lg border border-border/40 bg-surface/40 px-3 text-sm font-semibold text-muted-foreground transition-colors hover:border-accent/40 hover:text-foreground", children: l }, l)) }),
      /* @__PURE__ */ jsx("p", { className: "mt-5 text-center text-xs text-muted-foreground", children: "Innrly runs on top of the PMS, accounting, and payroll systems these brands require — no system swap." })
    ] }),
    /* @__PURE__ */ jsxs(Section, { tone: "surface", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Product", title: "Six core products. Four supporting.", description: "The six brains run your back office. The four supporting products extend the system into vault, expense capture, guest signal, and done-for-you service." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3", children: coreSuites.map((s, idx) => {
        const accent = coreAccent[s.displayVariant];
        const hideOnMobile = idx >= 3 && !showAllProducts;
        return /* @__PURE__ */ jsxs(Link, { to: s.to, style: {
          // expose accent as a CSS var so border/halo/glow stay in sync
          ["--core-accent"]: accent
        }, className: `group relative ${hideOnMobile ? "hidden sm:flex" : "flex"} flex-col items-center overflow-hidden rounded-2xl border border-[color:var(--core-accent)]/25 bg-card p-6 pt-4 text-center transition-all hover:-translate-y-1 hover:border-[color:var(--core-accent)]/70 hover:shadow-[0_20px_60px_-25px_var(--core-accent)]`, children: [
          /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute left-1/2 top-10 -z-0 h-44 w-44 -translate-x-1/2 rounded-full opacity-60 blur-2xl transition-opacity group-hover:opacity-90", style: {
            background: `radial-gradient(circle, ${accent} 0%, transparent 70%)`
          }, "aria-hidden": true }),
          /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-4 top-4 h-2 w-2 rounded-full", style: {
            background: accent,
            boxShadow: `0 0 12px ${accent}`
          }, "aria-hidden": true }),
          s.tag && /* @__PURE__ */ jsx("span", { className: "absolute right-4 top-4 rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider", style: {
            borderColor: `color-mix(in oklab, ${accent} 50%, transparent)`,
            color: accent,
            background: `color-mix(in oklab, ${accent} 14%, transparent)`
          }, children: s.tag }),
          /* @__PURE__ */ jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsx(ProductOrb, { variant: s.displayVariant, size: "md" }) }),
          /* @__PURE__ */ jsx("h3", { className: "relative z-10 mt-2 font-display text-2xl font-normal text-foreground", children: s.name }),
          /* @__PURE__ */ jsx("p", { className: "relative z-10 mt-2 text-sm text-muted-foreground", children: s.body }),
          /* @__PURE__ */ jsxs("div", { className: "relative z-10 mt-4 inline-flex items-center gap-1 text-sm font-medium", style: {
            color: accent
          }, children: [
            "Explore",
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })
          ] })
        ] }, s.name);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center sm:hidden", children: /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => setShowAllProducts((v) => !v), className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background/60 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted", "aria-expanded": showAllProducts, children: [
        showAllProducts ? "Show fewer products" : "Show all 10 products",
        /* @__PURE__ */ jsx(ArrowRight, { className: `h-3.5 w-3.5 transition-transform ${showAllProducts ? "-rotate-90" : "rotate-90"}` })
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: `mt-10 border-t border-border/60 pt-10 ${showAllProducts ? "block" : "hidden sm:block"}`, children: [
        /* @__PURE__ */ jsx("p", { className: "text-center text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground", children: "Supporting products" }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4", children: supportingSuites.map((s) => /* @__PURE__ */ jsxs(Link, { to: s.to, className: `support-suite-card support-suite-card--${s.tone} group relative min-h-52 overflow-hidden rounded-2xl border border-border/70 p-5 transition-all hover:-translate-y-1 hover:border-[color:var(--support-accent)]`, children: [
          /* @__PURE__ */ jsx("div", { className: "support-suite-rail absolute inset-x-0 top-0 h-1", "aria-hidden": true }),
          /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-[color:var(--support-accent)]/20 blur-2xl", "aria-hidden": true }),
          s.tag && /* @__PURE__ */ jsx("span", { className: "absolute right-4 top-4 rounded-full border border-[color:var(--support-accent)]/35 bg-background/35 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-[color:var(--support-accent)]", children: s.tag }),
          /* @__PURE__ */ jsx("div", { className: "support-suite-icon flex h-14 w-14 items-center justify-center rounded-2xl transition-transform group-hover:scale-105", children: /* @__PURE__ */ jsx(s.icon, { className: "h-6 w-6", "aria-hidden": true }) }),
          /* @__PURE__ */ jsx("h4", { className: "mt-5 text-base font-semibold text-foreground", children: s.name }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: s.body }),
          /* @__PURE__ */ jsxs("div", { className: "mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--support-accent)]", children: [
            "Support layer",
            " ",
            /* @__PURE__ */ jsx(ArrowRight, { className: "h-3 w-3 transition-transform group-hover:translate-x-0.5" })
          ] })
        ] }, s.name)) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs(Section, { children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "Automation-first", title: "Innrly's core is automation.", description: "The work your team is doing manually today — Innrly is already doing in the background." }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: [{
        name: "Exceptions Dashboard",
        body: "Skip the wall of green checks. See only the transactions that need a human."
      }, {
        name: "Auto-pulled vendor invoices",
        body: "Innrly pulls invoices directly from vendor portals into A/P for your approval."
      }, {
        name: "Month-end reconciliation",
        body: "PMS-to-accounting reconciliation packets, automated and ready for close."
      }, {
        name: "Rate Shop + daily digest",
        body: "Competitor rates and your morning numbers, delivered without a login."
      }].map((f) => /* @__PURE__ */ jsxs("div", { className: "aurora-card rounded-2xl p-6", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-base font-semibold text-foreground", children: f.name }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: f.body })
      ] }, f.name)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { tone: "surface", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "One overnight cycle", title: "You sleep. Innrly works.", description: "By the time you walk in with your coffee, the night audit is done and exceptions are triaged — the only items left on your desk are the handful of variances that genuinely need a human decision.", align: "center" }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-12 max-w-4xl", children: /* @__PURE__ */ jsx(NightToMorningScene, {}) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { tone: "surface", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "From operators", title: "What hotel groups say.", description: "Real feedback from active hotel operators.", align: "center" }),
      /* @__PURE__ */ jsx("div", { className: "mt-12 grid gap-6 lg:grid-cols-2", children: testimonialsList.map((t, i) => /* @__PURE__ */ jsxs("figure", { className: "aurora-card rounded-2xl p-8 flex flex-col justify-between", children: [
        /* @__PURE__ */ jsxs("blockquote", { className: "text-base sm:text-lg leading-relaxed text-foreground italic", children: [
          '"',
          t.quote,
          '"'
        ] }),
        /* @__PURE__ */ jsxs("figcaption", { className: "mt-6 flex items-center gap-3 border-t border-border/60 pt-4", children: [
          t.avatar ? /* @__PURE__ */ jsx("img", { src: t.avatar, alt: t.name, className: "h-10 w-10 rounded-full object-cover border border-border" }) : /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-cta text-sm font-bold text-primary-foreground shrink-0", "aria-hidden": true, children: t.name ? t.name.charAt(0).toUpperCase() : "?" }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "text-sm font-semibold text-foreground", children: t.name }),
            /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground", children: [
              t.title,
              " ",
              t.company ? `· ${t.company}` : ""
            ] })
          ] })
        ] })
      ] }, i)) })
    ] }),
    /* @__PURE__ */ jsxs(Section, { className: "border-t border-border/40", children: [
      /* @__PURE__ */ jsx(SectionHeading, { eyebrow: "FAQ", title: "Frequently Asked Questions", description: "Have questions about spelling, integrations, or onboarding? We've got answers.", align: "center" }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto mt-12 max-w-3xl", children: /* @__PURE__ */ jsxs(Accordion, { type: "single", collapsible: true, className: "w-full", children: [
        /* @__PURE__ */ jsxs(AccordionItem, { value: "spelling", className: "border-border/60", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-base font-semibold text-foreground", children: "Is the platform name spelled Innrly or Innerly?" }),
          /* @__PURE__ */ jsxs(AccordionContent, { className: "text-muted-foreground leading-relaxed", children: [
            "The official spelling is ",
            /* @__PURE__ */ jsx("strong", { children: "Innrly" }),
            ' (without the "e"). While it is sometimes searched for or misspelled as "Innerly", the platform is called Innrly. The name represents our core mission: automating hotel or inn operations early in the overnight cycle so you wake up to clean, reconciled numbers.'
          ] })
        ] }),
        /* @__PURE__ */ jsxs(AccordionItem, { value: "onboarding", className: "border-border/60", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-base font-semibold text-foreground", children: "How long does onboarding take with Innrly?" }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed", children: "Onboarding is fully guided by our team and typically takes less than 14 days. We connect to your PMS, accounting systems, and bank feeds for you, ensuring a seamless transition with zero disruption to your daily operations." })
        ] }),
        /* @__PURE__ */ jsxs(AccordionItem, { value: "integrations", className: "border-border/60", children: [
          /* @__PURE__ */ jsx(AccordionTrigger, { className: "text-left text-base font-semibold text-foreground", children: "Which hotel systems and accounting platforms does Innrly integrate with?" }),
          /* @__PURE__ */ jsx(AccordionContent, { className: "text-muted-foreground leading-relaxed", children: "Innrly integrates with all major Property Management Systems (PMS) like Marriott, Hilton, IHG, Opera, Cloudbeds, and Mews, as well as leading back-office financial platforms including M3, Sage Intacct, and QuickBooks." })
        ] })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(CtaBand, {})
  ] });
}
export {
  HomePage as component
};
