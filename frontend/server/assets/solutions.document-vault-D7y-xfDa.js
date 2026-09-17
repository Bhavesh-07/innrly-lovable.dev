import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { Mail, Folder, FileText, HelpCircle, AlertCircle, Search, FolderArchive, Upload, CalendarDays, ShieldCheck } from "lucide-react";
import { D as DeepSolutionLayout } from "./DeepSolutionLayout-CNYVn58o.js";
import { B as BeforeAfterFlow } from "./BeforeAfterFlow-C8xLB9tX.js";
import { S as Section } from "./Section-Df9Ktkng.js";
import "./router-CBR-JcUy.js";
import "@tanstack/react-query";
import "react";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "zod";
import "@radix-ui/react-label";
import "sonner";
import "./ProductOrb-BcavPbLU.js";
function DocVaultChaos() {
  return /* @__PURE__ */ jsxs("div", { className: "relative space-y-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-2", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "ba-chaos-in flex-1 rounded-lg border border-destructive/50 bg-destructive/10 p-2 opacity-0",
          style: {
            ["--x0"]: "-34px",
            ["--y0"]: "18px",
            ["--r0"]: "-8deg",
            ["--rot"]: "-1deg"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-muted-foreground" }),
              /* @__PURE__ */ jsx("span", { className: "truncate text-[10px] font-semibold text-foreground", children: "Re: Re: NA pack Oct 12?" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 line-clamp-2 text-[9px] text-muted-foreground", children: `"Did anyone save this one? I can't find it on the drive…"` })
          ]
        }
      ),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "ba-chaos-in flex w-28 shrink-0 items-center gap-1.5 rounded-lg border border-destructive/50 bg-card p-2 opacity-0 shadow-elevated",
          style: {
            ["--x0"]: "28px",
            ["--y0"]: "-18px",
            ["--r0"]: "10deg",
            ["--rot"]: "4deg",
            ["--delay"]: "0.16s"
          },
          children: [
            /* @__PURE__ */ jsx(Folder, { className: "h-3.5 w-3.5 shrink-0 text-chart-4" }),
            /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
              /* @__PURE__ */ jsx("div", { className: "truncate text-[10px] font-semibold text-foreground", children: "/Night Audits/" }),
              /* @__PURE__ */ jsx("div", { className: "text-[9px] text-muted-foreground", children: "312 unsorted" })
            ] })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex-1", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "ba-chaos-in relative z-10 flex w-44 items-center gap-1.5 rounded-lg border border-destructive/60 bg-card p-2 opacity-0 shadow-elevated",
            style: {
              ["--x0"]: "-46px",
              ["--y0"]: "-12px",
              ["--r0"]: "-14deg",
              ["--rot"]: "-3deg",
              ["--delay"]: "0.32s"
            },
            children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-3.5 w-3.5 shrink-0 text-destructive" }),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsx("div", { className: "truncate text-[10px] font-semibold text-foreground", children: "NA_FINAL_v3 (1).pdf" }),
                /* @__PURE__ */ jsx("div", { className: "text-[9px] text-muted-foreground", children: "Modified 11 days ago" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "ba-chaos-in absolute left-6 top-3 flex w-44 items-center gap-1.5 rounded-lg border border-destructive/50 bg-card/80 p-2 opacity-0 shadow-elevated",
            style: {
              ["--x0"]: "-18px",
              ["--y0"]: "24px",
              ["--r0"]: "8deg",
              ["--rot"]: "2deg",
              ["--delay"]: "0.48s"
            },
            children: [
              /* @__PURE__ */ jsx(FileText, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
              /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsx("div", { className: "truncate text-[10px] font-semibold text-foreground", children: "audit_oct_v2.pdf" }),
                /* @__PURE__ */ jsx("div", { className: "text-[9px] text-muted-foreground", children: "Where's v3?" })
              ] })
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "ba-chaos-in w-24 shrink-0 rounded-md bg-chart-4/90 p-2 text-[10px] font-semibold text-background opacity-0 shadow-elevated",
          style: {
            ["--x0"]: "28px",
            ["--y0"]: "22px",
            ["--r0"]: "12deg",
            ["--rot"]: "-5deg",
            ["--delay"]: "0.64s"
          },
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(HelpCircle, { className: "h-3 w-3" }),
              /* @__PURE__ */ jsx("span", { children: "ask GM??" })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-[9px] font-normal", children: "Oct 14 missing" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: "ba-slide-in mt-6 flex items-center gap-1.5 rounded-md border border-destructive/40 bg-destructive/10 px-2 py-1.5 opacity-0",
        style: { animationDelay: "0.9s" },
        children: [
          /* @__PURE__ */ jsx(AlertCircle, { className: "h-3 w-3 shrink-0 text-destructive" }),
          /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold text-destructive", children: "Audit Monday · 4 nights still missing" })
        ]
      }
    )
  ] });
}
function DocVaultFlow({ playKey }) {
  const days = Array.from({ length: 31 }, (_, i) => i + 1);
  const leadingBlanks = 2;
  const manual = /* @__PURE__ */ new Set([3, 9, 14, 22, 27]);
  const searchHighlight = /* @__PURE__ */ new Set([6, 19]);
  const todayTile = 18;
  const manualLandTile = 14;
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx("div", { className: "absolute -inset-6 -z-10 rounded-3xl bg-cta opacity-20 blur-3xl", "aria-hidden": true }),
    /* @__PURE__ */ jsxs("div", { className: "relative overflow-hidden rounded-2xl border border-border bg-card shadow-elevated", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 bg-surface/60 px-4 py-3", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-1.5", children: [
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-destructive/70" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-chart-4/70" }),
          /* @__PURE__ */ jsx("span", { className: "h-2.5 w-2.5 rounded-full bg-success/70" })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "ml-3 text-xs font-medium text-muted-foreground", children: "Document Vault · October · AUS-03" }),
        /* @__PURE__ */ jsxs("div", { className: "ml-auto flex items-center gap-1.5 text-[10px] font-medium text-success", children: [
          /* @__PURE__ */ jsxs("span", { className: "relative flex h-1.5 w-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" }),
            /* @__PURE__ */ jsx("span", { className: "relative inline-flex h-1.5 w-1.5 rounded-full bg-success" })
          ] }),
          "SYNCED"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "border-b border-border/60 bg-surface/40 px-4 py-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 rounded-lg border border-border/60 bg-background/40 px-2 py-1", children: [
        /* @__PURE__ */ jsx(Search, { className: "h-3 w-3 text-muted-foreground" }),
        /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "ba-pop-in inline-block opacity-0", style: { animationDelay: "3.8s" }, children: "home depot" }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "ml-0.5 inline-block h-3 w-px bg-foreground align-middle opacity-0",
              style: {
                animation: "ba-pop-in 0.2s ease-out 3.7s forwards, ba-caret 0.7s steps(1) 3.9s infinite"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "ml-auto text-[9px] opacity-0 ba-pop-in",
            style: { animationDelay: "4.4s" },
            children: /* @__PURE__ */ jsx("span", { className: "rounded-full bg-accent/15 px-1.5 py-0.5 font-bold uppercase tracking-wider text-accent", children: "2 matches" })
          }
        )
      ] }) }),
      /* @__PURE__ */ jsxs("div", { className: "relative grid grid-cols-1 gap-3 p-4 md:grid-cols-5", children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            className: "pointer-events-none absolute inset-0 z-10 hidden h-full w-full text-accent/70 md:block",
            viewBox: "0 0 760 360",
            preserveAspectRatio: "none",
            "aria-hidden": true,
            children: [
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: "ba-route-dash",
                  style: { animationDelay: "0.25s" },
                  d: "M78 88 C166 40 280 72 370 172",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round"
                }
              ),
              /* @__PURE__ */ jsx(
                "path",
                {
                  className: "ba-route-dash",
                  style: { animationDelay: "2.35s" },
                  d: "M116 78 C214 16 314 48 332 126",
                  fill: "none",
                  stroke: "currentColor",
                  strokeWidth: "2",
                  strokeLinecap: "round"
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "ba-pop-in pointer-events-none absolute left-7 top-7 z-20 hidden rounded-xl border border-accent/50 bg-background/95 px-3 py-2 shadow-elevated opacity-0 md:block",
            style: { animationDelay: "0.05s" },
            children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(FolderArchive, { className: "h-4 w-4 text-accent" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("div", { className: "text-[10px] font-bold text-foreground", children: "PMS night audit" }),
                /* @__PURE__ */ jsx("div", { className: "text-[9px] text-muted-foreground", children: "4 files launching" })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "col-span-1 rounded-xl border border-border/60 bg-surface/60 p-3 md:col-span-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsx(FolderArchive, { className: "h-3.5 w-3.5 text-accent" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "One tile per day · 31 nights" }),
            /* @__PURE__ */ jsx("span", { className: "ml-auto text-[9px] text-muted-foreground", children: "100% auto-filed" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "mt-3 grid grid-cols-7 gap-1 text-center text-[9px] font-bold uppercase tracking-wider text-muted-foreground", children: ["S", "M", "T", "W", "T", "F", "S"].map((d, i) => /* @__PURE__ */ jsx("div", { children: d }, i)) }),
          /* @__PURE__ */ jsxs("div", { className: "mt-1 grid grid-cols-7 gap-1", children: [
            Array.from({ length: leadingBlanks }).map((_, i) => /* @__PURE__ */ jsx("div", { className: "aspect-square rounded bg-background/20" }, `b${i}`)),
            days.map((d) => {
              const isToday = d === todayTile;
              const isManualLand = d === manualLandTile;
              const isSearchHit = searchHighlight.has(d);
              const hasManual = manual.has(d);
              return /* @__PURE__ */ jsxs(
                "div",
                {
                  className: `relative aspect-square rounded border p-0.5 text-[8px] transition-colors ${isToday ? "border-accent bg-accent/15 text-foreground ba-pulse-ring" : "border-border/40 bg-background/40 text-foreground"}`,
                  children: [
                    /* @__PURE__ */ jsx("span", { className: "font-semibold", children: d }),
                    /* @__PURE__ */ jsx("span", { className: "absolute bottom-0.5 left-0.5 h-1 w-1 rounded-full bg-accent" }),
                    hasManual && /* @__PURE__ */ jsx("span", { className: "absolute bottom-0.5 right-0.5 h-1 w-1 rounded-full bg-success" }),
                    isToday && /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "ba-fly-doc pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0",
                        style: {
                          ["--sx"]: "-210px",
                          ["--sy"]: "-125px",
                          ["--sr"]: "-22deg",
                          animationDelay: "0.28s"
                        },
                        children: /* @__PURE__ */ jsx(FileText, { className: "h-5 w-5 text-accent" })
                      }
                    ),
                    isToday && /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "ba-pop-in absolute -right-1 -top-1 rounded-full bg-accent px-1 text-[7px] font-bold text-accent-foreground opacity-0",
                        style: { animationDelay: "1.6s" },
                        children: "4"
                      }
                    ),
                    isManualLand && /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "ba-fly-doc pointer-events-none absolute inset-0 z-20 flex items-center justify-center opacity-0",
                        style: {
                          ["--sx"]: "-150px",
                          ["--sy"]: "-115px",
                          ["--sr"]: "16deg",
                          animationDelay: "2.35s"
                        },
                        children: /* @__PURE__ */ jsx(Upload, { className: "h-5 w-5 text-success" })
                      }
                    ),
                    isSearchHit && /* @__PURE__ */ jsx(
                      "span",
                      {
                        className: "ba-pop-in pointer-events-none absolute -inset-px rounded border-2 border-chart-4 opacity-0",
                        style: { animationDelay: "4.4s" }
                      }
                    )
                  ]
                },
                d
              );
            })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 flex items-center gap-3 text-[9px] text-muted-foreground", children: [
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent" }),
              " Auto pack"
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1", children: [
              /* @__PURE__ */ jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-success" }),
              " Manual"
            ] }),
            /* @__PURE__ */ jsx("span", { className: "ml-auto text-success", children: "0 lost" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "ba-landing-glow col-span-1 rounded-xl border border-accent/40 bg-surface/60 p-3 md:col-span-2", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/40 pb-2", children: [
            /* @__PURE__ */ jsx(FileText, { className: "h-3.5 w-3.5 text-accent" }),
            /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: "Oct 18 · packet" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-1", children: [
            /* @__PURE__ */ jsx(AnimRow, { name: "NA Manager Report.pdf", kind: "auto", delay: "0.4s" }),
            /* @__PURE__ */ jsx(AnimRow, { name: "Trial Balance.pdf", kind: "auto", delay: "0.7s" }),
            /* @__PURE__ */ jsx(AnimRow, { name: "Daily Flash.xlsx", kind: "auto", delay: "1.0s" }),
            /* @__PURE__ */ jsx(AnimRow, { name: "Expedia Settlement.pdf", kind: "auto", delay: "1.3s" }),
            /* @__PURE__ */ jsx(AnimRow, { name: "Ecolab Invoice.pdf", kind: "manual", delay: "2.8s" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-3 rounded-lg border-2 border-dashed border-accent/40 bg-accent/5 p-2 text-center", children: [
            /* @__PURE__ */ jsx(Upload, { className: "mx-auto h-3.5 w-3.5 text-accent" }),
            /* @__PURE__ */ jsx("div", { className: "mt-1 text-[9px] font-semibold text-accent", children: "Drop a file on any day" })
          ] })
        ] })
      ] })
    ] })
  ] }, playKey);
}
function AnimRow({ name, kind, delay }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: "ba-slide-in flex items-center justify-between rounded px-1.5 py-1 opacity-0",
      style: { animationDelay: delay },
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-center gap-1.5", children: [
          /* @__PURE__ */ jsx(FileText, { className: "h-3 w-3 shrink-0 text-muted-foreground" }),
          /* @__PURE__ */ jsx("span", { className: "truncate text-[10px] text-foreground", children: name })
        ] }),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: `shrink-0 rounded-full px-1.5 py-0.5 text-[8px] font-bold uppercase tracking-wider ${kind === "manual" ? "bg-success/15 text-success" : "bg-accent/15 text-accent"}`,
            children: kind
          }
        )
      ]
    }
  );
}
function Page() {
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs(Section, { tone: "surface", className: "py-5 sm:py-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-6 text-center", children: [
        /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "From a paper avalanche to a calendar" }),
        /* @__PURE__ */ jsx("h2", { className: "mt-2 text-2xl font-bold text-foreground sm:text-3xl", children: "Watch a month of paperwork file itself in 6 seconds." })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "mx-auto max-w-6xl", children: /* @__PURE__ */ jsx(BeforeAfterFlow, { chaos: /* @__PURE__ */ jsx(DocVaultChaos, {}), after: (playKey) => /* @__PURE__ */ jsx(DocVaultFlow, { playKey }), motion: "documents" }) })
    ] }),
    /* @__PURE__ */ jsx(DeepSolutionLayout, { icon: FolderArchive, orbVariant: "vault", persona: "For Back-Office & Accounting Teams", eyebrow: "Document Vault", title: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Every document, ",
      /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "on the day it landed." })
    ] }), description: /* @__PURE__ */ jsxs(Fragment, { children: [
      "Document Vault is laid out as a calendar. Each night, the PMS audit pack and supporting files for every property are dropped automatically into that day's slot. Need to add something? Upload any file to any day — for future reference, audit prep, or quick recall. Learn how this calendar layout fits into our broader",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/hotel-back-office-automation", className: "text-accent underline font-semibold", children: "hotel back-office automation" }),
      " ",
      "system."
    ] }), accountingNote: false, bullets: ["Calendar view — one tile per day, per property", "Nightly auto-dump of PMS night-audit reports & supporting files", "Manual upload to any date for invoices, contracts, franchise letters", "Searchable across properties, dates, vendors, and document types"], metrics: [{
      stat: "Daily",
      label: "Auto file dump"
    }, {
      stat: "Any",
      label: "Manual upload"
    }, {
      stat: "365",
      label: "Days at a glance"
    }, {
      stat: "0",
      label: "Lost paperwork"
    }], beforeAfter: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "From ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: '"who has that PDF?"' }),
        ' to "click the date."'
      ] }),
      description: "Audit week stops being a scavenger hunt when the filing system is the calendar itself.",
      withoutTitle: "The paper scavenger hunt",
      without: ["Hunt through shared drives with cryptic folder names", "Email three GMs asking who has last Tuesday's night-audit pack", "Re-scan vendor invoices because the original got filed wrong", "Discover during an audit that March is missing two folios"],
      withTitle: "The calendar is the filing system",
      withItems: ["Click the date — the whole night's paperwork is there", "PMS night-audit pack lands automatically across every property", "Drag-drop any PDF/scan onto a day to keep it with that night", "Search by vendor, date, property, or document type in one box"]
    }, workflow: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "How back-office teams ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "actually use it." })
      ] }),
      description: "Four habits that replace the shared drive.",
      steps: [{
        icon: CalendarDays,
        title: "Overnight — the calendar fills itself",
        body: "While the property sleeps, Innrly pulls the night-audit pack, manager reports, and supporting files from every PMS and drops them onto today's tile."
      }, {
        icon: Upload,
        title: "Morning — drop extras onto any day",
        body: "Vendor invoice came in late? Franchise letter just landed? Drag it onto the right date so it lives with the rest of that day's records."
      }, {
        icon: Search,
        title: "Anytime — search across the portfolio",
        body: "Find every Sysco invoice in Q2 across all six properties in one query. No folder hunting, no naming conventions to remember."
      }, {
        icon: ShieldCheck,
        title: "Audit week — hand over the date",
        body: "When the inspector asks for March 14 at the Hampton, you click the date and export the packet. Done."
      }],
      artifact: /* @__PURE__ */ jsx(DocVaultFlow, { playKey: 0 })
    }, replaces: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "What Document Vault ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "replaces." })
      ] }),
      description: "These things go away.",
      items: ["Shared drives with cryptic folder names", "Manual email of night-audit packs to corporate", '"Where did we save that?" Slack threads', "Paper invoice binders at the property", "Scanning the same vendor invoice twice", "Audit-week scavenger hunts", "Per-property storage logins"]
    }, quote: {
      text: "Audit week used to be three days of digging through email. Now I send the inspector a date range and the export. Document Vault didn't just save us time — it gave us our audit confidence back.",
      author: "Corporate Controller · 6-property portfolio"
    }, modules: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "The modules behind ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "the calendar." })
      ] }),
      description: "Each module deep-links into the Features page.",
      items: [{
        name: "PMS Night-Audit Capture",
        body: "Auto-pulls the nightly pack from every PMS."
      }, {
        name: "Calendar Filing",
        body: "Every file lives on the date it belongs to."
      }, {
        name: "Manual Drop-Zone",
        body: "Drag any PDF, image, or scan onto any day."
      }, {
        name: "Portfolio Search",
        body: "Vendor, date, type, property — one query."
      }, {
        name: "Audit Export",
        body: "Date-range packet ready for the inspector."
      }, {
        name: "Retention & Access",
        body: "Role-based access and retention by document type."
      }]
    }, faq: {
      title: /* @__PURE__ */ jsxs(Fragment, { children: [
        "What back-office teams ",
        /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "actually ask us." })
      ] }),
      items: [{
        q: "Which PMS night-audit packs do you support?",
        a: "OnQ, PEP, FOSSE, StayNTouch, HotelKey, Choice Advantage, and most major PMS platforms. New connectors are added without a project on your side."
      }, {
        q: "Can we upload files that didn't come from the PMS?",
        a: "Yes. Vendor invoices, franchise communications, repair receipts, W-9s — drag them onto any day. They live with that date forever."
      }, {
        q: "How long are documents retained?",
        a: "Default is seven years; you can extend per document type or per property to match your retention policy."
      }, {
        q: "Who can see what?",
        a: "Role-based access by property and by document type. A GM sees their own property, corporate sees the portfolio, auditors get a read-only date range."
      }]
    }, cta: {
      title: "See the calendar with your own paperwork",
      subtitle: "A 20-minute demo with one property's PMS feed. You'll see last week's audit packs already on the calendar."
    } })
  ] });
}
export {
  Page as component
};
