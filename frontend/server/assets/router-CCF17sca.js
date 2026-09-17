import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { Link, useLocation, createRootRouteWithContext, useRouter, useRouterState, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, redirect, notFound, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import * as React from "react";
import { useState, useEffect, useRef } from "react";
import { X, Sparkles, Check, Clock, ArrowUpRight, CreditCard, Loader2, ChevronDown, Menu, Mail, ArrowRight, RefreshCw, Download, Search, ListFilter, Phone, Building2, Users, MapPin, ChevronUp } from "lucide-react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { z } from "zod";
import * as LabelPrimitive from "@radix-ui/react-label";
import { toast, Toaster as Toaster$1 } from "sonner";
const appCss = "/assets/styles-C8CHmFhV.css";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const Input = React.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(LabelPrimitive.Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = LabelPrimitive.Root.displayName;
function track(event, payload = {}) {
  if (typeof window === "undefined") return;
  const consent = window.__cookieConsent;
  if (consent === "rejected") {
    return;
  }
  const body = {
    event,
    ...payload,
    path: window.location.pathname + window.location.search,
    referrer: document.referrer || void 0,
    ts: (/* @__PURE__ */ new Date()).toISOString()
  };
  const url = "https://api.innrly.com/events";
  try {
    const blob = new Blob([JSON.stringify(body)], { type: "application/json" });
    if (navigator.sendBeacon?.(url, blob)) return;
    void fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
      keepalive: true
    });
  } catch {
  }
}
function trackPageView(path) {
  track("page_view", { path });
}
async function submitLead(payload) {
  const url = "http://127.0.0.1:8000/leads";
  const isNewsletter = payload.kind === "newsletter";
  try {
    const res = await fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...payload, submittedAt: (/* @__PURE__ */ new Date()).toISOString() })
    });
    if (!res.ok) {
      track(isNewsletter ? "newsletter_signup" : "form_submit", {
        source: payload.source,
        ok: false,
        status: res.status
      });
      return { ok: false, error: `HTTP ${res.status}` };
    }
    track(isNewsletter ? "newsletter_signup" : "form_submit", { source: payload.source, ok: true });
    return { ok: true };
  } catch (e) {
    const error = e instanceof Error ? e.message : "network error";
    track(isNewsletter ? "newsletter_signup" : "form_submit", {
      source: payload.source,
      ok: false,
      error
    });
    return { ok: false, error };
  }
}
const SESSION_KEY = "innrly_trial_modal_seen";
const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().min(1, "Required").max(150),
  role: z.string().trim().max(100).optional(),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  properties: z.string().trim().min(1, "Required").max(20),
  pms: z.string().trim().max(100).optional()
});
const benefits = [
  "Full platform access — BI, A/P automation, night audit, labor",
  "Connect your PMS, accounting, and payroll in days",
  "Dedicated onboarding specialist for your portfolio",
  "No credit card. No contract. Cancel anytime."
];
function TrialModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [showMore, setShowMore] = useState(false);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    fetch("http://127.0.0.1:8000/settings").then((res) => res.json()).then((data) => {
      if (data && data.innrly_trial_modal_disabled === "true") return;
      setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      }, 600);
    }).catch((err) => {
      setTimeout(() => {
        setOpen(true);
        sessionStorage.setItem(SESSION_KEY, "1");
      }, 600);
    });
  }, []);
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("innrly:open-trial", handler);
    return () => window.removeEventListener("innrly:open-trial", handler);
  }, []);
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);
  if (!open) return null;
  async function onSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const raw = Object.fromEntries(fd.entries());
    const parsed = schema.safeParse(raw);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setSubmitting(true);
    const res = await submitLead({ ...parsed.data, source: "trial" });
    setSubmitting(false);
    if (!res.ok) {
      toast.error(res.error ?? "Could not submit — please try again");
      return;
    }
    setDone(true);
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-3 backdrop-blur-md animate-in fade-in duration-200 sm:p-6",
      role: "dialog",
      "aria-modal": "true",
      "aria-labelledby": "trial-modal-title",
      onClick: () => setOpen(false),
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: "relative grid w-full max-w-5xl max-h-[92dvh] grid-cols-1 overflow-y-auto overscroll-contain rounded-2xl border border-border bg-card shadow-elevated animate-in zoom-in-95 fade-in slide-in-from-bottom-4 duration-300 md:grid-cols-2 md:max-h-[90dvh]",
          onClick: (e) => e.stopPropagation(),
          children: [
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setOpen(false),
                "aria-label": "Close",
                className: "absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
                children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxs("div", { className: "relative hidden overflow-hidden bg-hero p-8 md:flex md:flex-col md:justify-between md:p-10", children: [
              /* @__PURE__ */ jsxs("div", { className: "absolute inset-0 opacity-60", "aria-hidden": true, children: [
                /* @__PURE__ */ jsx("div", { className: "absolute left-10 top-10 h-64 w-64 rounded-full bg-primary/30 blur-3xl" }),
                /* @__PURE__ */ jsx("div", { className: "absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                  " Limited launch offer"
                ] }),
                /* @__PURE__ */ jsxs(
                  "h2",
                  {
                    id: "trial-modal-title",
                    className: "mt-5 text-3xl font-bold leading-tight text-foreground",
                    children: [
                      "Try Innrly free for ",
                      /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "90 days." })
                    ]
                  }
                ),
                /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Full platform. Every property. Zero risk. See what your back office looks like when the spreadsheets are gone." }),
                /* @__PURE__ */ jsx("ul", { className: "mt-6 space-y-3", children: benefits.map((b) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2.5 text-sm text-foreground/90", children: [
                  /* @__PURE__ */ jsx("span", { className: "mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cta", children: /* @__PURE__ */ jsx(Check, { className: "h-3 w-3 text-primary-foreground" }) }),
                  b
                ] }, b)) }),
                /* @__PURE__ */ jsxs("div", { className: "mt-6", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-accent", children: "New in Innrly" }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-2 grid gap-2", children: [
                    /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/solutions/innrly-shift",
                        target: "_blank",
                        rel: "noopener",
                        className: "group flex items-center gap-3 rounded-lg border border-border/40 bg-surface/40 p-3 transition-colors hover:border-accent/40 hover:bg-surface/60",
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(Clock, { className: "h-4 w-4" }) }),
                          /* @__PURE__ */ jsxs("span", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground", children: "Innrly Shift" }),
                              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-accent/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent", children: "Add-on" })
                            ] }),
                            /* @__PURE__ */ jsx("span", { className: "block truncate text-[11px] text-muted-foreground", children: "Face-ID labor in 5 minutes" })
                          ] }),
                          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" })
                        ]
                      }
                    ),
                    /* @__PURE__ */ jsxs(
                      Link,
                      {
                        to: "/solutions/innrly-pay",
                        target: "_blank",
                        rel: "noopener",
                        className: "group flex items-center gap-3 rounded-lg border border-border/40 bg-surface/40 p-3 transition-colors hover:border-accent/40 hover:bg-surface/60",
                        children: [
                          /* @__PURE__ */ jsx("span", { className: "inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(CreditCard, { className: "h-4 w-4" }) }),
                          /* @__PURE__ */ jsxs("span", { className: "min-w-0 flex-1", children: [
                            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1.5", children: [
                              /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground", children: "Innrly Pay" }),
                              /* @__PURE__ */ jsx("span", { className: "rounded-full bg-success/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-success", children: "Included" })
                            ] }),
                            /* @__PURE__ */ jsx("span", { className: "block truncate text-[11px] text-muted-foreground", children: "Virtual Cards + ACH, no bank logins" })
                          ] }),
                          /* @__PURE__ */ jsx(ArrowUpRight, { className: "h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" })
                        ]
                      }
                    )
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "relative mt-6 rounded-xl border border-border/40 bg-surface/40 p-4", children: [
                /* @__PURE__ */ jsx("p", { className: "text-xs uppercase tracking-wider text-muted-foreground", children: "Trusted across" }),
                /* @__PURE__ */ jsx("p", { className: "mt-1 text-lg font-bold text-foreground", children: "200+ hotels · 17,000+ rooms · 1,500+ users" })
              ] })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "flex flex-col bg-card p-6 sm:p-10", children: done ? /* @__PURE__ */ jsxs("div", { className: "flex flex-1 flex-col items-center justify-center text-center", children: [
              /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-cta", children: /* @__PURE__ */ jsx(Check, { className: "h-7 w-7 text-primary-foreground" }) }),
              /* @__PURE__ */ jsx("h3", { className: "mt-5 text-xl font-semibold text-foreground", children: "You're in. Welcome to Innrly." }),
              /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-sm text-sm text-muted-foreground", children: "Our team will reach out within one business day to schedule your onboarding and activate your 90-day trial." }),
              /* @__PURE__ */ jsx(Button, { className: "mt-6 bg-cta hover:opacity-90", onClick: () => setOpen(false), children: "Close" })
            ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
              /* @__PURE__ */ jsxs("div", { className: "md:hidden", children: [
                /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent", children: [
                  /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                  " 90-day free trial"
                ] }),
                /* @__PURE__ */ jsxs("h2", { className: "mt-3 text-2xl font-bold text-foreground", children: [
                  "Try Innrly free for ",
                  /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "90 days." })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "mt-4 grid grid-cols-2 gap-2", children: [
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/solutions/innrly-shift",
                      target: "_blank",
                      rel: "noopener",
                      onClick: () => setOpen(false),
                      className: "flex items-start gap-2 rounded-lg border border-border/60 bg-surface/50 p-2.5",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(Clock, { className: "h-3.5 w-3.5" }) }),
                        /* @__PURE__ */ jsxs("span", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsx("span", { className: "block text-[12px] font-semibold text-foreground", children: "Innrly Shift" }),
                          /* @__PURE__ */ jsx("span", { className: "mt-0.5 inline-block rounded-full bg-accent/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent", children: "Add-on" })
                        ] })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: "/solutions/innrly-pay",
                      target: "_blank",
                      rel: "noopener",
                      onClick: () => setOpen(false),
                      className: "flex items-start gap-2 rounded-lg border border-border/60 bg-surface/50 p-2.5",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(CreditCard, { className: "h-3.5 w-3.5" }) }),
                        /* @__PURE__ */ jsxs("span", { className: "min-w-0", children: [
                          /* @__PURE__ */ jsx("span", { className: "block text-[12px] font-semibold text-foreground", children: "Innrly Pay" }),
                          /* @__PURE__ */ jsx("span", { className: "mt-0.5 inline-block rounded-full bg-success/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-success", children: "Included" })
                        ] })
                      ]
                    }
                  )
                ] })
              ] }),
              /* @__PURE__ */ jsx("h3", { className: "hidden text-xl font-semibold text-foreground md:block", children: "Start your 90-day trial" }),
              /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Tell us about your portfolio — we'll set you up with full access." }),
              /* @__PURE__ */ jsxs("form", { onSubmit, className: "mt-5 grid gap-3.5 sm:grid-cols-2", children: [
                /* @__PURE__ */ jsx(Field, { label: "Full name", name: "name", placeholder: "Jane Patel" }),
                /* @__PURE__ */ jsx(
                  Field,
                  {
                    label: "Work email",
                    name: "email",
                    type: "email",
                    placeholder: "jane@hotelco.com"
                  }
                ),
                /* @__PURE__ */ jsx(Field, { label: "Company", name: "company", placeholder: "Hotel Co." }),
                /* @__PURE__ */ jsx(Field, { label: "Phone", name: "phone", type: "tel", placeholder: "(555) 123-4567" }),
                /* @__PURE__ */ jsx("div", { className: "sm:col-span-2", children: /* @__PURE__ */ jsx(
                  Field,
                  {
                    label: "# of properties",
                    name: "properties",
                    type: "number",
                    placeholder: "12",
                    min: "1"
                  }
                ) }),
                showMore ? /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(Field, { label: "Your role", name: "role", placeholder: "VP of Operations" }),
                  /* @__PURE__ */ jsx(
                    Field,
                    {
                      label: "Current PMS (optional)",
                      name: "pms",
                      placeholder: "Opera, Choice Advantage, etc."
                    }
                  )
                ] }) : /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setShowMore(true),
                    className: "text-left text-xs font-semibold text-accent hover:underline sm:col-span-2",
                    children: "+ Add role & current PMS (optional)"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    type: "submit",
                    size: "lg",
                    disabled: submitting,
                    className: "mt-2 bg-cta hover:opacity-90 sm:col-span-2",
                    children: submitting ? /* @__PURE__ */ jsxs(Fragment, { children: [
                      /* @__PURE__ */ jsx(Loader2, { className: "mr-1.5 h-4 w-4 animate-spin" }),
                      " Submitting…"
                    ] }) : "Start my 90-day free trial"
                  }
                ),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-2 sm:col-span-2", children: [
                  /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "No credit card required. We'll never share your information." }),
                  /* @__PURE__ */ jsx(
                    Link,
                    {
                      to: "/features",
                      onClick: () => setOpen(false),
                      className: "text-xs font-semibold text-accent hover:underline",
                      children: "Not ready? Watch the 2-min product tour →"
                    }
                  )
                ] })
              ] })
            ] }) })
          ]
        }
      )
    }
  );
}
function Field({
  label,
  name,
  type = "text",
  placeholder,
  min
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-1.5", children: [
    /* @__PURE__ */ jsx(Label, { htmlFor: name, className: "text-xs font-medium text-muted-foreground", children: label }),
    /* @__PURE__ */ jsx(Input, { id: name, name, type, placeholder, min })
  ] });
}
function openTrialModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("innrly:open-trial"));
  }
}
function Wordmark({
  className,
  size = "md"
}) {
  const width = size === "sm" ? 92 : size === "lg" ? 150 : 118;
  const height = Math.round(width * 0.533);
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      role: "img",
      "aria-label": "Innrly",
      viewBox: "430 355 600 320",
      width,
      height,
      className: cn("block h-auto max-w-full", className),
      style: { width: `${width}px` },
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("title", { children: "Innrly" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M992.597 500H1024.39L955.387 615.5H925.387L946.887 579L921.387 500H951.469L965.887 552L992.597 500Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx("path", { d: "M901.887 583H874.387L892.387 468H919.887L901.887 583Z", fill: "currentColor" }),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M812.387 499.301L839.134 499.301L837.721 523.424L828.387 583L800.387 583L812.387 499.301ZM874.012 524.972C872.123 524.354 870.039 523.934 867.76 523.71C861.777 523.121 856.421 524.131 851.693 526.739C847.021 529.352 843.173 533.098 840.148 537.977C837.186 542.807 833.361 549.743 832.387 555.847L827.524 552.666C828.488 546.13 829.988 539.7 832.023 533.376C834.064 527 836.809 521.285 840.257 516.233C843.761 511.186 848.115 507.301 853.317 504.578C858.577 501.861 864.881 500.863 872.232 501.586C873.029 501.665 873.821 501.797 874.607 501.982C875.398 502.114 876.159 502.269 876.887 502.449L874.012 524.972Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M608.886 583L580.386 583L594.387 500L624.61 500L622.267 517.415L608.886 583ZM683.658 537.422L674.386 583L646.386 583L654.302 538.2C654.969 533.989 654.257 530.67 652.165 528.244C650.083 525.756 646.844 524.164 642.447 523.468C636.998 522.605 632.232 523.437 628.15 525.964C624.129 528.501 620.027 533.252 617.827 539.124L616.527 526.599C618.037 519.474 620.664 513.511 624.408 508.708C628.162 503.843 632.685 500.338 637.976 498.192C643.329 496.057 649.102 495.479 655.295 496.46C661.797 497.49 667.342 499.955 671.93 503.856C676.589 507.704 679.983 512.527 682.112 518.323C684.241 524.12 684.757 530.486 683.658 537.422Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M717.886 583L689.386 583L703.555 499.994L733.386 500L731.267 517.142L717.886 583ZM792.658 537.149L783.386 583L755.386 583L763.302 537.927C763.969 533.716 763.257 530.398 761.165 527.972C759.083 525.483 755.844 523.891 751.447 523.195C745.998 522.332 741.232 523.164 737.15 525.691C733.129 528.229 729.027 532.979 726.827 538.852L725.527 526.326C727.037 519.202 729.663 513.238 733.408 508.435C737.162 503.57 741.684 500.065 746.976 497.92C752.329 495.784 758.102 495.206 764.295 496.187C770.797 497.217 776.342 499.682 780.93 503.583C785.589 507.432 788.983 512.254 791.112 518.051C793.241 523.847 793.756 530.213 792.658 537.149Z",
            fill: "currentColor"
          }
        ),
        /* @__PURE__ */ jsx(
          "ellipse",
          {
            cx: "528.282",
            cy: "409.255",
            rx: "54.08",
            ry: "42.27",
            transform: "rotate(-14 528.282 409.255)",
            fill: "url(#wm_g0)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M467.02 436.397C467.826 442.328 486.752 462.558 501.104 465.429C526.104 470.429 561.233 475.429 557.353 497.44C554.407 514.146 540.533 606.879 532.852 650.44C531.387 661.553 521.913 669.859 510.704 669.859L460.077 669.859C443.356 669.859 430.594 655.121 432.763 638.727L432.733 638.724L467.02 436.397Z",
            fill: "url(#wm_g1)"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M467.02 436.397C467.826 442.328 486.752 462.558 501.104 465.429C526.104 470.429 561.233 475.429 557.353 497.44C554.407 514.146 540.533 606.879 532.852 650.44C531.387 661.553 521.913 669.859 510.704 669.859L460.077 669.859C443.356 669.859 430.594 655.121 432.763 638.727L432.733 638.724L467.02 436.397Z",
            fill: "url(#wm_g2)",
            fillOpacity: "0.9"
          }
        ),
        /* @__PURE__ */ jsxs("defs", { children: [
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "wm_g0",
              x1: "514.845",
              y1: "397.912",
              x2: "538.371",
              y2: "460.74",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#2742DB" }),
                /* @__PURE__ */ jsx("stop", { offset: "0.575", stopColor: "#1481D9" }),
                /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#00C4D6" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "wm_g1",
              x1: "480",
              y1: "538",
              x2: "545.064",
              y2: "485.458",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#2742DB" }),
                /* @__PURE__ */ jsx("stop", { offset: "0.617", stopColor: "#1385D8" }),
                /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#00C4D6" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "linearGradient",
            {
              id: "wm_g2",
              x1: "477",
              y1: "581.5",
              x2: "504.201",
              y2: "665.762",
              gradientUnits: "userSpaceOnUse",
              children: [
                /* @__PURE__ */ jsx("stop", { stopColor: "#2742DB", stopOpacity: "0.32" }),
                /* @__PURE__ */ jsx("stop", { offset: "0.5", stopColor: "#1383D8", stopOpacity: "0.66" }),
                /* @__PURE__ */ jsx("stop", { offset: "1", stopColor: "#00C4D6" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const defaultPrimaryNav = [
  { to: "/features", label: "Features" },
  { to: "/solutions/business-intelligence", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" }
];
const defaultResources = [
  {
    to: "/integrations",
    label: "Integrations",
    desc: "50+ PMS, accounting, payroll & banking systems."
  },
  { to: "/case-studies", label: "Case studies", desc: "Real portfolios, real hours saved." },
  { to: "/blog", label: "Blog", desc: "Operator playbooks and product updates." },
  { to: "/glossary", label: "Glossary", desc: "Hotel back-office terms, plainly defined." },
  { to: "/roi-calculator", label: "ROI calculator", desc: "See your savings in 30 seconds." },
  { to: "/security", label: "Security & trust", desc: "Encryption, access control, compliance." }
];
function Header() {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef(null);
  const closeTimer = useRef(null);
  const [loginLink, setLoginLink] = useState("https://app.innrly.com");
  const [navItems, setNavItems] = useState(defaultPrimaryNav);
  const [resourceItems, setResourceItems] = useState(defaultResources);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const baseUrl = "http://127.0.0.1:8000/leads";
      const settingsUrl = baseUrl.replace(/\/leads\/?$/, "/settings");
      fetch(settingsUrl).then((res) => res.json()).then((data) => {
        if (data) {
          if (data.innrly_login_link) {
            setLoginLink(data.innrly_login_link);
          }
          if (data.header_menu) {
            try {
              const parsed = JSON.parse(data.header_menu);
              if (parsed.primaryNav) setNavItems(parsed.primaryNav.filter((i) => i.enabled !== false));
              if (parsed.resources) setResourceItems(parsed.resources.filter((i) => i.enabled !== false));
            } catch (e) {
              console.error("Failed to parse header menu settings", e);
            }
          }
        }
      }).catch((err) => console.error("Failed to load settings in Header", err));
    }
  }, []);
  useEffect(() => {
    if (!resourcesOpen) return;
    const onClick = (e) => {
      if (!resourcesRef.current?.contains(e.target)) setResourcesOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setResourcesOpen(false);
    };
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [resourcesOpen]);
  const handleEnter = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setResourcesOpen(true);
  };
  const handleLeave = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setResourcesOpen(false), 150);
  };
  return /* @__PURE__ */ jsxs("header", { className: "sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl", children: [
    /* @__PURE__ */ jsxs("div", { className: "mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", "aria-label": "Innrly home", children: /* @__PURE__ */ jsx(Wordmark, { size: "md" }) }),
      /* @__PURE__ */ jsxs("nav", { className: "hidden items-center gap-7 md:flex", "aria-label": "Primary", children: [
        navItems.map((item) => /* @__PURE__ */ jsx(
          Link,
          {
            to: item.to,
            className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
            activeProps: { className: "text-foreground" },
            children: item.label
          },
          item.to
        )),
        /* @__PURE__ */ jsxs(
          "div",
          {
            ref: resourcesRef,
            className: "relative",
            onMouseEnter: handleEnter,
            onMouseLeave: handleLeave,
            children: [
              /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setResourcesOpen((v) => !v),
                  "aria-haspopup": "menu",
                  "aria-expanded": resourcesOpen,
                  className: "inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
                  children: [
                    "Resources",
                    /* @__PURE__ */ jsx(
                      ChevronDown,
                      {
                        className: `h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`,
                        "aria-hidden": true
                      }
                    )
                  ]
                }
              ),
              resourcesOpen && /* @__PURE__ */ jsx(
                "div",
                {
                  role: "menu",
                  className: "absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-2xl border-2 border-accent/30 bg-card/95 p-2 shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--accent)_45%,transparent)] backdrop-blur-xl",
                  children: resourceItems.map((r) => /* @__PURE__ */ jsxs(
                    Link,
                    {
                      to: r.to,
                      role: "menuitem",
                      onClick: () => setResourcesOpen(false),
                      className: "group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-accent/10",
                      children: [
                        /* @__PURE__ */ jsx("span", { className: "text-sm font-semibold text-foreground group-hover:text-accent", children: r.label }),
                        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: r.desc })
                      ]
                    },
                    r.to
                  ))
                }
              )
            ]
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "hidden items-center gap-2 md:flex", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", size: "sm", children: /* @__PURE__ */ jsx("a", { href: loginLink, rel: "noreferrer", children: "Login" }) }),
        /* @__PURE__ */ jsx(Button, { size: "sm", onClick: openTrialModal, className: "bg-cta hover:opacity-90", children: "Start free trial" }),
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "outline", size: "sm", children: /* @__PURE__ */ jsx(Link, { to: "/contact", children: "See it live" }) })
      ] }),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          onClick: () => setOpen((v) => !v),
          className: "inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden",
          "aria-label": open ? "Close menu" : "Open menu",
          "aria-expanded": open,
          children: open ? /* @__PURE__ */ jsx(X, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Menu, { className: "h-5 w-5" })
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { className: "border-t border-border/60 bg-background md:hidden", children: /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3", "aria-label": "Mobile", children: [
      navItems.map((item) => /* @__PURE__ */ jsx(
        Link,
        {
          to: item.to,
          onClick: () => setOpen(false),
          className: "rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
          children: item.label
        },
        item.to
      )),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 border-t border-border/60 pt-2", children: [
        /* @__PURE__ */ jsx("p", { className: "px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground", children: "Resources" }),
        resourceItems.map((r) => /* @__PURE__ */ jsx(
          Link,
          {
            to: r.to,
            onClick: () => setOpen(false),
            className: "block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground",
            children: r.label
          },
          r.to
        ))
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "mt-2 flex flex-col gap-2 border-t border-border/60 pt-3", children: [
        /* @__PURE__ */ jsx(Button, { asChild: true, variant: "ghost", children: /* @__PURE__ */ jsx("a", { href: loginLink, rel: "noreferrer", children: "Login" }) }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "outline",
            onClick: () => {
              setOpen(false);
              openTrialModal();
            },
            children: "Start 90-day free trial"
          }
        ),
        /* @__PURE__ */ jsx(Button, { asChild: true, className: "bg-cta", children: /* @__PURE__ */ jsx(Link, { to: "/contact", onClick: () => setOpen(false), children: "See it live" }) })
      ] })
    ] }) })
  ] });
}
const defaultColumns = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/pricing", label: "Pricing" },
      { to: "/integrations", label: "Integrations" },
      { to: "/onboarding", label: "Get started" },
      { to: "/solutions/innrly-pay", label: "Innrly Pay" },
      { to: "/solutions/innrly-shift", label: "Innrly Shift" }
    ]
  },
  {
    title: "Solutions",
    links: [
      { to: "/solutions/business-intelligence", label: "Business Intelligence" },
      { to: "/solutions/financial-control", label: "Financial Control" },
      { to: "/solutions/innrly-shift", label: "Innrly Shift" },
      { to: "/solutions/operations-automation", label: "Operations Automation" },
      { to: "/solutions/reconciliation", label: "Reconciliation" },
      { to: "/solutions/expense-entries", label: "Expense Entries" },
      { to: "/solutions/document-vault", label: "Document Vault" },
      { to: "/services/accountability-pack", label: "Accountability Pack" }
    ]
  },
  {
    title: "Resources",
    links: [
      { to: "/blog", label: "Blog" },
      { to: "/glossary", label: "Glossary" },
      { to: "/case-studies", label: "Case studies" },
      { to: "/roi-calculator", label: "ROI calculator" },
      { to: "/compare", label: "Compare" },
      { to: "/integrations/m3", label: "Innrly + M3" },
      { to: "/integrations/quickbooks", label: "Innrly + QuickBooks" },
      { to: "/industries/select-service", label: "Select-Service Hotels" }
    ]
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "/security", label: "Security & trust" },
      { to: "/developers", label: "Developers" }
    ]
  },
  {
    title: "Legal",
    links: [
      { to: "/legal/privacy", label: "Privacy" },
      { to: "/legal/terms", label: "Terms" },
      { to: "/legal/subscription", label: "Subscription Agreement" },
      { to: "/legal/security", label: "Security" },
      { to: "/legal/cookies", label: "Cookies" },
      { to: "/legal/accessibility", label: "Accessibility" }
    ]
  }
];
function Footer() {
  const [footerColumns, setFooterColumns] = useState(defaultColumns);
  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("http://127.0.0.1:8000/settings").then((res) => res.json()).then((data) => {
        if (data && data.footer_menu) {
          try {
            const parsed = JSON.parse(data.footer_menu);
            setFooterColumns(parsed);
          } catch (e) {
            console.error("Failed to parse footer menu settings", e);
          }
        }
      }).catch((err) => console.error("Failed to load settings in Footer", err));
    }
  }, []);
  return /* @__PURE__ */ jsx("footer", { className: "border-t border-border/60 bg-surface/40", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 xl:grid-cols-[minmax(13rem,1.25fr)_repeat(5,minmax(0,1fr))] xl:gap-x-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 min-w-0 md:col-span-1", children: [
        /* @__PURE__ */ jsx(Link, { to: "/", className: "flex items-center", "aria-label": "Innrly home", children: /* @__PURE__ */ jsx(Wordmark, { size: "md" }) }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-sm text-muted-foreground", children: "One platform for hotel back-office automation, business intelligence, and labor management." }),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "mailto:contact@innrly.com",
            className: "mt-4 inline-flex max-w-full items-start gap-2 text-sm font-medium text-accent hover:underline",
            children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 shrink-0", "aria-hidden": true }),
              /* @__PURE__ */ jsx("span", { className: "min-w-0 break-all", children: "contact@innrly.com" })
            ]
          }
        )
      ] }),
      footerColumns.filter((c) => c.enabled !== false).map((col) => /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
        /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold text-foreground", children: col.title }),
        /* @__PURE__ */ jsx("ul", { className: "mt-4 space-y-3", children: col.links.filter((l) => l.enabled !== false).map((l) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
          Link,
          {
            to: l.to,
            className: "text-sm text-muted-foreground transition-colors hover:text-foreground",
            children: l.label
          }
        ) }, l.to)) })
      ] }, col.title))
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-12 border-t border-border/60 pt-8", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-wider text-muted-foreground", children: "Innrly mobile apps" }),
      /* @__PURE__ */ jsxs("div", { className: "mt-3 flex flex-wrap items-center gap-3", children: [
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://apps.apple.com/app/innrly",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Download Innrly on the App Store",
            className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/60",
            children: [
              /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M17.05 12.5a4.27 4.27 0 0 1 2.04-3.59 4.38 4.38 0 0 0-3.45-1.87c-1.45-.15-2.85.86-3.6.86-.76 0-1.9-.84-3.13-.82a4.6 4.6 0 0 0-3.87 2.36c-1.66 2.88-.42 7.13 1.19 9.46.79 1.14 1.72 2.42 2.94 2.38 1.18-.05 1.63-.76 3.06-.76 1.42 0 1.83.76 3.08.74 1.27-.02 2.08-1.16 2.86-2.31a10.2 10.2 0 0 0 1.3-2.66 4.13 4.13 0 0 1-2.42-3.79zM14.78 5.6a4.2 4.2 0 0 0 .96-3.02 4.27 4.27 0 0 0-2.77 1.43 3.99 3.99 0 0 0-.99 2.91 3.53 3.53 0 0 0 2.8-1.32z" }) }),
              /* @__PURE__ */ jsxs("span", { className: "flex flex-col leading-tight", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-normal text-muted-foreground", children: "Download on the" }),
                /* @__PURE__ */ jsx("span", { children: "App Store" })
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          "a",
          {
            href: "https://play.google.com/store/apps/details?id=com.innrly",
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": "Get Innrly on Google Play",
            className: "inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/60",
            children: [
              /* @__PURE__ */ jsx("svg", { className: "h-5 w-5", viewBox: "0 0 24 24", fill: "currentColor", "aria-hidden": true, children: /* @__PURE__ */ jsx("path", { d: "M3.6 2.1c-.3.3-.5.7-.5 1.2v17.4c0 .5.2.9.5 1.2l9.3-9.9L3.6 2.1zm10.4 11l2.8 2.9-9.5 5.4 6.7-8.3zm0-2.2L7.3 2.6l9.5 5.4-2.8 2.9zm6.8 1.1c0 .5-.3 1-.8 1.3l-2.5 1.4-3-3.2 3-3.2 2.5 1.4c.5.3.8.8.8 1.3z" }) }),
              /* @__PURE__ */ jsxs("span", { className: "flex flex-col leading-tight", children: [
                /* @__PURE__ */ jsx("span", { className: "text-[10px] font-normal text-muted-foreground", children: "Get it on" }),
                /* @__PURE__ */ jsx("span", { children: "Google Play" })
              ] })
            ]
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center", children: [
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground", children: [
        "© ",
        (/* @__PURE__ */ new Date()).getFullYear(),
        " Innrly. All rights reserved."
      ] }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Built for hotel owners and operators." })
    ] })
  ] }) });
}
function StickyMobileCta() {
  const { pathname } = useLocation();
  const hidden = pathname.startsWith("/contact") || pathname.startsWith("/onboarding") || pathname.startsWith("/legal");
  if (hidden) return null;
  return /* @__PURE__ */ jsx("div", { className: "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md sm:hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-3", children: [
    /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
      /* @__PURE__ */ jsx("div", { className: "truncate text-sm font-semibold text-foreground", children: "Try Innrly free for 90 days" }),
      /* @__PURE__ */ jsx("div", { className: "truncate text-[11px] text-muted-foreground", children: "Full platform · No credit card" })
    ] }),
    /* @__PURE__ */ jsxs(
      "button",
      {
        type: "button",
        onClick: () => {
          track("cta_click", { cta: "open_trial", location: "sticky_mobile_cta" });
          openTrialModal();
        },
        className: "inline-flex shrink-0 items-center gap-1 rounded-md bg-cta px-3.5 py-2 text-sm font-semibold text-primary-foreground",
        children: [
          "Start trial ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ]
      }
    )
  ] }) });
}
const ALLOW_PREFIXES = ["/blog/", "/compare/innrly-vs-"];
const STORAGE_PREFIX = "innrly_desktop_cta_dismissed:";
function DesktopScrollCta() {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const isAllowed = ALLOW_PREFIXES.some((p) => pathname.startsWith(p));
  useEffect(() => {
    setVisible(false);
    setDismissed(false);
    if (typeof window === "undefined" || !isAllowed) return;
    const key = STORAGE_PREFIX + pathname;
    if (sessionStorage.getItem(key)) {
      setDismissed(true);
      return;
    }
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) return;
      const pct = window.scrollY / max;
      if (pct > 0.5) setVisible(true);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname, isAllowed]);
  if (!isAllowed || dismissed || !visible) return null;
  const dismiss = () => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem(STORAGE_PREFIX + pathname, "1");
    }
    setDismissed(true);
  };
  return /* @__PURE__ */ jsx("div", { className: "fixed bottom-6 right-6 z-40 hidden w-80 animate-in fade-in slide-in-from-bottom-4 duration-500 sm:block", children: /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-accent/30 bg-card/95 p-5 shadow-glow backdrop-blur", children: [
    /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        onClick: dismiss,
        "aria-label": "Dismiss",
        className: "absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground",
        children: /* @__PURE__ */ jsx(X, { className: "h-4 w-4" })
      }
    ),
    /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "See it on your portfolio" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm font-semibold text-foreground", children: "Book a 20-minute walkthrough" }),
    /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-muted-foreground", children: "We'll show Innrly running against a portfolio your size — PMS, accounting, and labor wired up." }),
    /* @__PURE__ */ jsxs(
      Link,
      {
        to: "/contact",
        onClick: () => track("cta_click", { cta: "book_demo", location: "desktop_scroll_cta" }),
        className: "mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95",
        children: [
          "Book a demo ",
          /* @__PURE__ */ jsx(ArrowRight, { className: "h-3.5 w-3.5" })
        ]
      }
    )
  ] }) });
}
function DevLeadBanner() {
  const [dismissed, setDismissed] = useState(false);
  return null;
}
function DevAnalyticsBanner() {
  const [dismissed, setDismissed] = useState(false);
  return null;
}
function AnalyticsProvider() {
  const { pathname, search } = useLocation();
  const lastPath = useRef("");
  useEffect(() => {
    const full = pathname + (search ? `?${new URLSearchParams(search).toString()}` : "");
    if (lastPath.current === full) return;
    lastPath.current = full;
    trackPageView(pathname);
  }, [pathname, search]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hit = { 50: false, 90: false };
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) return;
      const pct = window.scrollY / max * 100;
      if (!hit[50] && pct >= 50) {
        hit[50] = true;
        track("scroll_depth", { depth: 50 });
      }
      if (!hit[90] && pct >= 90) {
        hit[90] = true;
        track("scroll_depth", { depth: 90 });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onClick = (e) => {
      const target = e.target?.closest?.("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("/")) return;
      try {
        const u = new URL(href, window.location.origin);
        if (u.origin !== window.location.origin) {
          track("outbound_click", { href: u.href, host: u.host });
        }
      } catch {
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);
  return null;
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
const STORAGE_KEY = "innrly_cookie_consent_v1";
function CookieConsent() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        window.__cookieConsent = stored;
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);
  function decide(choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
      window.__cookieConsent = choice;
    } catch {
    }
    track("cookie_consent", { choice });
    setVisible(false);
  }
  if (!visible) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "dialog",
      "aria-live": "polite",
      "aria-label": "Cookie consent",
      className: "fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-2xl sm:border",
      children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm text-muted-foreground", children: [
          "We use cookies to improve your experience and measure site performance. See our",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/legal/cookies", className: "text-accent underline", children: "cookie policy" }),
          "."
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex shrink-0 gap-2", children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              variant: "outline",
              size: "sm",
              className: "border-border bg-background/40",
              onClick: () => decide("rejected"),
              children: "Reject"
            }
          ),
          /* @__PURE__ */ jsx(Button, { size: "sm", className: "bg-cta hover:opacity-90", onClick: () => decide("accepted"), children: "Accept" })
        ] })
      ] })
    }
  );
}
function CursorGlow() {
  const ref = useRef(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none)").matches;
    if (reduce || touch) return;
    const el = ref.current;
    if (!el) return;
    let rafId = null;
    let pendingX = 0;
    let pendingY = 0;
    let inZone = false;
    const apply = () => {
      rafId = null;
      el.style.setProperty("--cx", `${pendingX}px`);
      el.style.setProperty("--cy", `${pendingY}px`);
    };
    const onMove = (e) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const insideZone = !!target?.closest('[data-glow="dark"], .cursor-glow-zone');
      if (insideZone !== inZone) {
        inZone = insideZone;
        el.style.opacity = inZone ? "1" : "0";
      }
      if (rafId == null) rafId = requestAnimationFrame(apply);
    };
    const onLeave = () => {
      inZone = false;
      el.style.opacity = "0";
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "aria-hidden": true,
      className: "pointer-events-none fixed z-[5] transition-opacity duration-300",
      style: {
        // Position via CSS variables updated by the rAF loop.
        left: 0,
        top: 0,
        width: 620,
        height: 620,
        opacity: 0,
        transform: "translate3d(calc(var(--cx, -9999px) - 50%), calc(var(--cy, -9999px) - 50%), 0)",
        background: "radial-gradient(circle, oklch(0.78 0.16 195 / 0.32) 0%, oklch(0.62 0.22 260 / 0.18) 38%, transparent 72%)",
        filter: "blur(28px)",
        mixBlendMode: "screen"
      }
    }
  );
}
function NotFoundComponent() {
  return /* @__PURE__ */ jsxs("div", { className: "relative flex min-h-dvh items-center justify-center overflow-hidden bg-background px-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute inset-0 opacity-40", "aria-hidden": true, children: [
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/2 top-1/3 h-72 w-72 -translate-x-1/2 rounded-full bg-primary blur-3xl" }),
      /* @__PURE__ */ jsx("div", { className: "absolute left-1/3 bottom-1/4 h-64 w-64 rounded-full bg-accent blur-3xl" })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "relative max-w-lg text-center", children: [
      /* @__PURE__ */ jsx("p", { className: "text-[10rem] font-black leading-none tracking-tight text-gradient sm:text-[12rem]", children: "404" }),
      /* @__PURE__ */ jsx("h1", { className: "mt-2 text-2xl font-semibold text-foreground", children: "This room isn't on the floor plan." }),
      /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "The page you're looking for doesn't exist, has been moved, or never checked in." }),
      /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-wrap justify-center gap-3", children: [
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/",
            className: "inline-flex items-center justify-center rounded-md bg-cta px-5 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
            children: "Back to home"
          }
        ),
        /* @__PURE__ */ jsx(
          Link,
          {
            to: "/contact",
            className: "inline-flex items-center justify-center rounded-md border border-border bg-background/40 px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted",
            children: "Contact us"
          }
        )
      ] })
    ] })
  ] });
}
function ErrorComponent({ error, reset }) {
  console.error(error);
  const router2 = useRouter();
  return /* @__PURE__ */ jsx("div", { className: "flex min-h-dvh items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsx("h1", { className: "text-xl font-semibold tracking-tight text-foreground", children: "This page didn't load" }),
    /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Something went wrong on our end. Try refreshing or head back home." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-wrap justify-center gap-2", children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-cta px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const SITE_URL = "https://www.innrly.com";
const Route$13 = createRootRouteWithContext()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Innrly — Hotel management software" },
      {
        name: "description",
        content: "Innrly is one platform for hotel back-office automation, business intelligence, and labor management. Save 20–40 hours a month per property."
      },
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Innrly" },
      { property: "og:image", content: `${SITE_URL}/og/home.jpg` },
      { property: "og:image:width", content: "1216" },
      { property: "og:image:height", content: "640" },
      { property: "og:image:alt", content: "Innrly — back-office automation for hotels." },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: `${SITE_URL}/og/home.jpg` },
      { name: "theme-color", content: "#0f1d2e" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      { rel: "apple-touch-icon", href: "/favicon.svg" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Pacifico&display=swap"
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=Instrument+Serif:ital@0;1&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Pacifico&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "Innrly",
          url: SITE_URL,
          logo: `${SITE_URL}/favicon.svg`,
          description: "Hotel management software for back-office automation, business intelligence, and labor management.",
          sameAs: ["https://www.linkedin.com/company/innrly", "https://x.com/innrly"]
        })
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Innrly",
          url: SITE_URL,
          potentialAction: {
            "@type": "SearchAction",
            target: {
              "@type": "EntryPoint",
              urlTemplate: `${SITE_URL}/glossary?q={search_term_string}`
            },
            "query-input": "required name=search_term_string"
          }
        })
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      children,
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  const { queryClient } = Route$13.useRouteContext();
  const routerState = useRouterState();
  const isAdminRoute = routerState.location.pathname.startsWith("/control-hub");
  return /* @__PURE__ */ jsxs(QueryClientProvider, { client: queryClient, children: [
    /* @__PURE__ */ jsx(
      "a",
      {
        href: "#main",
        className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-cta focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground",
        children: "Skip to main content"
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "flex min-h-dvh flex-col pb-20 sm:pb-0", children: [
      !isAdminRoute && /* @__PURE__ */ jsx(DevLeadBanner, {}),
      !isAdminRoute && /* @__PURE__ */ jsx(DevAnalyticsBanner, {}),
      !isAdminRoute && /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx("main", { id: "main", className: `${!isAdminRoute ? "cursor-glow-zone" : ""} flex-1`, children: /* @__PURE__ */ jsx(Outlet, {}) }),
      !isAdminRoute && /* @__PURE__ */ jsx(Footer, {})
    ] }),
    /* @__PURE__ */ jsx(AnalyticsProvider, {}),
    !isAdminRoute && /* @__PURE__ */ jsx(StickyMobileCta, {}),
    !isAdminRoute && /* @__PURE__ */ jsx(DesktopScrollCta, {}),
    !isAdminRoute && /* @__PURE__ */ jsx(CookieConsent, {}),
    !isAdminRoute && /* @__PURE__ */ jsx(TrialModal, {}),
    /* @__PURE__ */ jsx(CursorGlow, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
const Route$12 = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const url = new URL(request.url);
        const base = `${url.protocol}//${url.host}`;
        const today = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
        const blogPosts = "2025-05-01";
        const legal = "2025-01-01";
        const entries = [
          { path: "/", changefreq: "weekly", priority: "1.0", lastmod: today },
          { path: "/features", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/pricing", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/contact", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/onboarding", changefreq: "monthly", priority: "0.9", lastmod: today },
          { path: "/about", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/security", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/developers", changefreq: "monthly", priority: "0.6", lastmod: today },
          { path: "/roi-calculator", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/case-studies", changefreq: "monthly", priority: "0.8", lastmod: today },
          { path: "/blog", changefreq: "weekly", priority: "0.8", lastmod: today },
          {
            path: "/blog/ota-reconciliation-guide",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-18"
          },
          {
            path: "/blog/hotel-night-audit-software-guide",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-14"
          },
          {
            path: "/blog/multi-property-hotel-accounting-software",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-08"
          },
          {
            path: "/blog/hotel-budgeting-software-2026",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-19"
          },
          {
            path: "/blog/select-service-back-office-savings",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-17"
          },
          {
            path: "/blog/mpor-explained",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-15"
          },
          {
            path: "/blog/quickbooks-for-hotels-limits",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-11"
          },
          {
            path: "/blog/hospitality-accounting-services-vs-software",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-09"
          },
          {
            path: "/blog/best-hotel-accounting-software",
            changefreq: "monthly",
            priority: "0.9",
            lastmod: "2026-06-06"
          },
          {
            path: "/blog/hotel-back-office-automation",
            changefreq: "monthly",
            priority: "0.85",
            lastmod: "2026-05-25"
          },
          {
            path: "/blog/night-audit-automation",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-24"
          },
          {
            path: "/blog/multi-property-accounting-software",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-23"
          },
          {
            path: "/blog/ap-automation-hotels",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-22"
          },
          {
            path: "/blog/hotel-labor-cost-percentage",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-21"
          },
          {
            path: "/blog/innrly-vs-inn-flow",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: "2026-05-20"
          },
          {
            path: "/blog/pms-vs-back-office-automation",
            changefreq: "monthly",
            priority: "0.85",
            lastmod: "2026-05-26"
          },
          {
            path: "/blog/hotel-night-audit-checklist",
            changefreq: "monthly",
            priority: "0.85",
            lastmod: "2026-05-28"
          },
          {
            path: "/blog/hotel-ota-commission-reconciliation",
            changefreq: "monthly",
            priority: "0.85",
            lastmod: "2026-05-27"
          },
          { path: "/compare", changefreq: "monthly", priority: "0.7", lastmod: today },
          {
            path: "/compare/innrly-vs-otelier",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/compare/innrly-vs-nimble",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/compare/innrly-vs-aptech",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/compare/innrly-vs-profitsage",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/compare/innrly-vs-actabl",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/solutions/document-vault",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/solutions/expense-entries",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/services/accountability-pack",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          { path: "/integrations", changefreq: "monthly", priority: "0.85", lastmod: today },
          { path: "/integrations/m3", changefreq: "monthly", priority: "0.9", lastmod: today },
          {
            path: "/integrations/quickbooks",
            changefreq: "monthly",
            priority: "0.9",
            lastmod: today
          },
          {
            path: "/integrations/sage-intacct",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/integrations/inn-flow",
            changefreq: "monthly",
            priority: "0.9",
            lastmod: today
          },
          { path: "/integrations/opera", changefreq: "monthly", priority: "0.85", lastmod: today },
          {
            path: "/integrations/cloudbeds",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          { path: "/integrations/mews", changefreq: "monthly", priority: "0.8", lastmod: today },
          {
            path: "/blog/five-back-office-wins",
            changefreq: "yearly",
            priority: "0.6",
            lastmod: blogPosts
          },
          {
            path: "/blog/labor-cost-blind-spots",
            changefreq: "yearly",
            priority: "0.6",
            lastmod: blogPosts
          },
          {
            path: "/blog/ota-commission-audit",
            changefreq: "yearly",
            priority: "0.6",
            lastmod: blogPosts
          },
          {
            path: "/solutions/business-intelligence",
            changefreq: "monthly",
            priority: "0.85",
            lastmod: today
          },
          {
            path: "/solutions/financial-control",
            changefreq: "monthly",
            priority: "0.85",
            lastmod: today
          },
          {
            path: "/solutions/operations-automation",
            changefreq: "monthly",
            priority: "0.85",
            lastmod: today
          },
          {
            path: "/solutions/innrly-pay",
            changefreq: "monthly",
            priority: "0.85",
            lastmod: today
          },
          {
            path: "/solutions/innrly-shift",
            changefreq: "monthly",
            priority: "0.85",
            lastmod: today
          },
          {
            path: "/solutions/reconciliation",
            changefreq: "monthly",
            priority: "0.9",
            lastmod: today
          },
          {
            path: "/solutions/labor-workforce",
            changefreq: "monthly",
            priority: "0.85",
            lastmod: today
          },
          {
            path: "/industries/select-service",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/industries/full-service",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/industries/extended-stay",
            changefreq: "monthly",
            priority: "0.8",
            lastmod: today
          },
          {
            path: "/case-studies/midwest-portfolio",
            changefreq: "yearly",
            priority: "0.75",
            lastmod: today
          },
          {
            path: "/case-studies/urban-full-service",
            changefreq: "yearly",
            priority: "0.75",
            lastmod: today
          },
          {
            path: "/case-studies/hilton-management-company",
            changefreq: "yearly",
            priority: "0.75",
            lastmod: today
          },
          {
            path: "/case-studies/extended-stay-portfolio",
            changefreq: "yearly",
            priority: "0.75",
            lastmod: today
          },
          {
            path: "/case-studies/boutique-group",
            changefreq: "yearly",
            priority: "0.75",
            lastmod: today
          },
          { path: "/glossary", changefreq: "monthly", priority: "0.7", lastmod: today },
          { path: "/legal/privacy", changefreq: "yearly", priority: "0.3", lastmod: legal },
          { path: "/legal/terms", changefreq: "yearly", priority: "0.3", lastmod: legal },
          { path: "/legal/subscription", changefreq: "yearly", priority: "0.4", lastmod: legal },
          { path: "/legal/security", changefreq: "yearly", priority: "0.4", lastmod: legal },
          { path: "/legal/cookies", changefreq: "yearly", priority: "0.3", lastmod: legal },
          { path: "/legal/accessibility", changefreq: "yearly", priority: "0.3", lastmod: legal }
        ];
        const urls = entries.map(
          (e) => [
            `  <url>`,
            `    <loc>${base}${e.path}</loc>`,
            e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
            e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
            e.priority ? `    <priority>${e.priority}</priority>` : null,
            `  </url>`
          ].filter(Boolean).join("\n")
        );
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`
        ].join("\n");
        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600"
          }
        });
      }
    }
  }
});
const faqs$h = [{
  q: "Where is data hosted?",
  a: "Innrly runs on a tier-1 US cloud provider with multi-region replication and isolated tenant storage. Data residency can be discussed for enterprise portfolios."
}, {
  q: "What compliance frameworks do you map to?",
  a: "Our controls are aligned with SOC 2 and PCI-DSS principles. We share our security documentation under NDA — email security@innrly.com."
}, {
  q: "How do you handle PII?",
  a: "Guest PII stays within the PMS unless explicitly required. Innrly minimizes the PII surface and never sells or shares your data with third parties."
}, {
  q: "Can I get a custom DPA or BAA?",
  a: "Yes. We sign standard data processing agreements and accommodate enterprise legal review on request."
}];
const defaultSeoData = {
  "/": {
    page_path: "/",
    title: "Innrly — Hotel back-office, BI & labor platform",
    description: "Innrly (sometimes spelled Innerly) automates hotel back-office work, surfaces real-time portfolio insights, and controls labor costs. Save 20–40 hours per property each month.",
    keywords: "hotel management software, back-office automation, hotel BI, labor management",
    og_title: "Innrly — One platform for total hotel control",
    og_description: "Automate financials, streamline operations, and manage performance across your entire hotel portfolio with Innrly (sometimes spelled Innerly).",
    og_image: "https://www.innrly.com/og/home.jpg"
  },
  "/about": {
    page_path: "/about",
    title: "About Innrly — Operator-built hotel back-office platform",
    description: "Innrly was built by hotelier Vimal Patel and has been running Q Hotels Management's portfolio since 2007 — across Hilton, Marriott, IHG, and Best Western brands.",
    keywords: "about innrly, hotel operator software, vimal patel",
    og_title: "About Innrly — Built by an operator, since 2007",
    og_description: "19 years inside our own hotels before we sold it to yours. Built by Vimal Patel of Q Hotels Management.",
    og_image: "https://www.innrly.com/og/about.jpg"
  },
  "/pricing": {
    page_path: "/pricing",
    title: "Innrly Pricing — Transparent, flat-rate hotel back-office software",
    description: "Simple, per-property pricing with no setup fees or contract lock-in. 90-day free trial on your real data.",
    keywords: "hotel software pricing, innrly pricing, transparent pricing",
    og_title: "Innrly Pricing — Simple, flat-rate hotel control",
    og_description: "90-day free trial on your real data. No setup fees, no contracts.",
    og_image: "https://www.innrly.com/og/pricing.jpg"
  },
  "/contact": {
    page_path: "/contact",
    title: "Book an Innrly Demo — PMS-agnostic hotel back-office automation",
    description: "Schedule a 20-minute walkthrough on your own data. See how Innrly can automate your night audit, OTA reconciliation, and labor tracking.",
    keywords: "book innrly demo, hotel software demo, contact innrly",
    og_title: "Book an Innrly Demo — 20 minutes to total control",
    og_description: "Schedule a walkthrough on your own data. See Innrly's PMS-agnostic automation live.",
    og_image: "https://www.innrly.com/og/contact.jpg"
  },
  "/features": {
    page_path: "/features",
    title: "Innrly Features — Automated night audit, OTA assurance & labor tracking",
    description: "Explore Innrly's feature set: dynamic exceptions dashboard, OCR expense capture, mobile-first labor tracking, and daily KPI digests.",
    keywords: "innrly features, night audit automation, ota reconciliation",
    og_title: "Innrly Features — PMS-agnostic back-office automation",
    og_description: "Explore the exceptions dashboard, invoice capture, bank matching, and daily labor tracking.",
    og_image: "https://www.innrly.com/og/features.jpg"
  },
  "/security": {
    page_path: "/security",
    title: "Innrly Security — Bank-grade data protection for hotel operators",
    description: "Read about our data security standards, read-only PMS connections, encryption protocols, and SOC-2 alignment.",
    keywords: "hotel software security, data protection, soc 2 hotel software",
    og_title: "Innrly Security — Bank-grade protection by design",
    og_description: "Read-only PMS connections, daily backup encryption, and enterprise access control.",
    og_image: "https://www.innrly.com/og/security.jpg"
  },
  "/developers": {
    page_path: "/developers",
    title: "Innrly Developer Portal — PMS & Accounting APIs",
    description: "Access API reference, webhook documentation, and integration guides for PMS and accounting sync.",
    keywords: "innrly developer api, hotel software api, webhook integration",
    og_title: "Innrly Developer Portal — Open APIs for hospitality",
    og_description: "Integrate your PMS, accounting GL, and payroll systems via our REST APIs.",
    og_image: "https://www.innrly.com/og/developers.jpg"
  }
};
const API_BASE = "http://127.0.0.1:8000";
async function fetchSeoData(path) {
  try {
    const res = await fetch(`${API_BASE}/seo?page_path=${encodeURIComponent(path)}`);
    if (!res.ok) return null;
    const data = await res.json();
    if (data && data.title) return data;
    return null;
  } catch (e) {
    console.error("Failed to fetch SEO data", e);
    return null;
  }
}
function getMetaTags(dynamicSeo, fallbackSeo, canonicalPath) {
  const seo = dynamicSeo && dynamicSeo.title ? dynamicSeo : fallbackSeo;
  const meta = [
    { title: seo.title }
  ];
  if (seo.description) {
    meta.push({ name: "description", content: seo.description });
  }
  if (seo.keywords) {
    meta.push({ name: "keywords", content: seo.keywords });
  }
  if (seo.og_title) {
    meta.push({ property: "og:title", content: seo.og_title });
  }
  if (seo.og_description) {
    meta.push({ property: "og:description", content: seo.og_description });
  }
  if (seo.og_image) {
    meta.push({ property: "og:image", content: seo.og_image });
    meta.push({ name: "twitter:image", content: seo.og_image });
  }
  meta.push({ property: "og:url", content: `https://www.innrly.com${canonicalPath === "/" ? "" : canonicalPath}` });
  return meta;
}
function breadcrumbLd(crumbs) {
  return {
    type: "application/ld+json",
    children: JSON.stringify({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.url
      }))
    })
  };
}
const $$splitComponentImporter$$ = () => import("./security-CL6djJGg.js");
const Route$11 = createFileRoute("/security")({
  component: lazyRouteComponent($$splitComponentImporter$$, "component"),
  loader: async () => {
    const seo = await fetchSeoData("/security");
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/security"], "/security")],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/security"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$h.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Security",
      url: "/security"
    }])]
  })
});
const faqs$g = [{
  q: "How accurate is this ROI calculator?",
  a: "The defaults are drawn from anonymized data across 200+ hotels on Innrly. Time savings (10 hrs/week per property) is the operator midpoint of a 5–15 hour range. Revenue recovery (25 bps) is the conservative end of OTA commission clawback + card chargeback audit recoveries we actually see in production."
}, {
  q: "Does the calculation include the setup fee?",
  a: "No — it compares ongoing annual subscription cost against ongoing annual savings. A one-time $299 per-property setup fee applies on monthly plans and is waived on annual plans."
}, {
  q: "What if my portfolio has lower revenue per property?",
  a: "Adjust the slider. The labor savings stay constant per property (they depend on hours, not revenue), but the revenue-recovery component scales with each property's top line. For limited-service portfolios under $1.5M ARR per property, the labor savings typically dominate the ROI."
}, {
  q: "How long until the savings start?",
  a: "Most operators see hours saved in week 2 as the night-audit workflow stabilizes. OTA reconciliation typically surfaces the first month's recoveries within 30 days. The full run-rate is usually in place by day 60."
}, {
  q: "Can I get a tailored ROI on my actual data?",
  a: "Yes — book a walkthrough and we'll run the model against a sample of your real PMS, accounting, and OTA statements so the numbers reflect your specific portfolio, not industry averages."
}];
const $$splitComponentImporter$_ = () => import("./roi-calculator-DH7-Lm8O.js");
const Route$10 = createFileRoute("/roi-calculator")({
  component: lazyRouteComponent($$splitComponentImporter$_, "component"),
  head: () => ({
    meta: [{
      title: "Hotel Back-Office ROI Calculator | Innrly"
    }, {
      name: "description",
      content: "See your portfolio's ROI with Innrly in 30 seconds. Hours saved per property, hidden revenue recovered, and total annual return — based on your numbers."
    }, {
      property: "og:title",
      content: "Innrly ROI Calculator"
    }, {
      property: "og:description",
      content: "Calculate hours saved and revenue recovered across your hotel portfolio."
    }, {
      property: "og:url",
      content: "/roi-calculator"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/roi-calculator"
    }],
    scripts: [breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "ROI calculator",
      url: "/roi-calculator"
    }]), {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$g.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  })
});
const $$splitComponentImporter$Z = () => import("./pricing-D2A_fifV.js");
const Route$$ = createFileRoute("/pricing")({
  component: lazyRouteComponent($$splitComponentImporter$Z, "component"),
  loader: async () => {
    const seo = await fetchSeoData("/pricing");
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/pricing"], "/pricing"), {
      property: "og:image:alt",
      content: "Priced per door, not per seat. No per-user fees. 90-day trial."
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/pricing"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Product",
        name: "Innrly Hotel Management Platform",
        description: "Cloud-based hotel back-office automation and business intelligence.",
        offers: [{
          "@type": "Offer",
          name: "Starter",
          price: "199",
          priceCurrency: "USD"
        }, {
          "@type": "Offer",
          name: "Professional",
          price: "299",
          priceCurrency: "USD"
        }]
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{
          "@type": "Question",
          name: "What does the setup fee cover?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Onboarding, PMS and accounting connections, chart-of-accounts mapping, and a guided launch with a dedicated implementation specialist."
          }
        }, {
          "@type": "Question",
          name: "Is there a minimum portfolio size?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No — Starter works for a single property. Most operators start with 1–5 hotels and expand from there."
          }
        }, {
          "@type": "Question",
          name: "Can I cancel anytime?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Monthly plans have no annual contract — cancel anytime. Annual plans get a 25% discount (and Innrly Pay included free on Professional) in exchange for a 12-month commitment."
          }
        }, {
          "@type": "Question",
          name: "Do I need to change my PMS or accounting system?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "No. Innrly sits on top of your existing stack — you keep your PMS, accounting, payroll, and credentials."
          }
        }]
      })
    }]
  })
});
const $$splitComponentImporter$Y = () => import("./orb-preview-CGwxcQA0.js");
const Route$_ = createFileRoute("/orb-preview")({
  component: lazyRouteComponent($$splitComponentImporter$Y, "component"),
  head: () => ({
    meta: [{
      title: "Product Orb Preview | Innrly"
    }, {
      name: "description",
      content: "Preview of Innrly signature product identity system orbs."
    }]
  })
});
const $$splitComponentImporter$X = () => import("./onboarding-DVAvg9Xk.js");
const Route$Z = createFileRoute("/onboarding")({
  component: lazyRouteComponent($$splitComponentImporter$X, "component"),
  head: () => ({
    meta: [{
      title: "Get Started with Innrly — Hotel Onboarding"
    }, {
      name: "description",
      content: "Onboard your hotel portfolio to Innrly in minutes. Tell us about your company, users, and properties — we'll handle the rest."
    }, {
      property: "og:title",
      content: "Get Started with Innrly"
    }, {
      property: "og:description",
      content: "Onboard your hotel portfolio to Innrly in minutes."
    }, {
      property: "og:url",
      content: "/onboarding"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/onboarding"
    }]
  })
});
const phoneRe = /^[\d\s()+\-.]{7,20}$/;
const zipRe = /^[A-Za-z0-9\s-]{3,10}$/;
z.object({
  decisionMaker: z.enum(["yes", "no"], {
    required_error: "Required"
  }),
  companyName: z.string().trim().min(1, "Company name required").max(150),
  authorizedPerson: z.string().trim().min(1, "Authorized person required").max(150),
  email: z.string().trim().email("Valid email required").max(255),
  address: z.string().trim().min(1, "Address required").max(255),
  state: z.string().trim().min(1, "State required").max(80),
  city: z.string().trim().min(1, "City required").max(80),
  zip: z.string().trim().regex(zipRe, "Valid ZIP required"),
  mobile: z.string().trim().regex(phoneRe, "Valid mobile required"),
  work: z.string().trim().regex(phoneRe, "Valid work phone required")
});
z.object({
  name: z.string().trim().min(1, "Name required").max(150),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().regex(phoneRe, "Valid phone required")
});
const PMS_OPTIONS = ["Opera", "SYNXIS", "Choice Advantage", "Other"];
z.object({
  propertyName: z.string().trim().min(1, "Property name required").max(150),
  propertyCode: z.string().trim().min(1, "Property code required").max(50),
  address: z.string().trim().min(1, "Address required").max(255),
  rooms: z.coerce.number().int().min(1, "Required").max(1e4),
  managerName: z.string().trim().min(1, "Required").max(150),
  managerEmail: z.string().trim().email("Valid email required").max(255),
  managerMobile: z.string().trim().regex(phoneRe, "Valid mobile required"),
  pms: z.enum(PMS_OPTIONS, {
    required_error: "Select a PMS"
  }),
  pmsOther: z.string().trim().max(80).optional(),
  brand: z.string().min(1, "Select a brand"),
  contactPerson: z.string().trim().min(1, "Required").max(150)
}).refine((v) => v.pms !== "Other" || v.pmsOther && v.pmsOther.length > 0, {
  message: "Specify PMS",
  path: ["pmsOther"]
});
const faqs$f = [{
  q: "Will this require us to replace our PMS or General Ledger?",
  a: "No. Innrly is PMS-neutral and GL-neutral. It sits in the middle, connecting PMS systems (Opera, Hilton OnQ, FOSSE) with General Ledgers (QuickBooks, M3, Sage Intacct). You keep your systems of record, while Innrly automates the manual entries and reconciliation between them."
}, {
  q: "How much time do properties actually save?",
  a: "Depending on the brand and size, properties save between 40 and 180 hours per month. The biggest savings come from automated night audit packet filing, automated A/P invoice extraction/GL coding, and daily deposit reconciliation."
}, {
  q: "What is an Exceptions-First workflow?",
  a: "Instead of having your controller check all 10,000 daily transactions, Innrly's engine matches and clears the correct ones overnight. Only the variances (mismatched credit card batches, missed deposits, or wrong invoice totals) land on the exceptions dashboard for human triage."
}, {
  q: "How does it handle compliance for biometric Face-ID?",
  a: "Innrly provides standard biometric disclosures and releases for workers during enrollment on tablets, helping you comply with local regulations (such as BIPA in Illinois) by keeping consent tracking built directly into the flow."
}];
const $$splitComponentImporter$W = () => import("./hotel-back-office-automation-BQN_DuBE.js");
const Route$Y = createFileRoute("/hotel-back-office-automation")({
  component: lazyRouteComponent($$splitComponentImporter$W, "component"),
  head: () => ({
    meta: [{
      title: "Hotel Back-Office Automation & Night Audit Software | Innrly"
    }, {
      name: "description",
      content: "Automate your hotel group's night audit, accounts payable capture, OTA reconciliation, and labor tracking. Reclaim 40-180 hours per property each month."
    }, {
      property: "og:title",
      content: "Hotel Back-Office Automation & Night Audit Software | Innrly"
    }, {
      property: "og:description",
      content: "Unify your night audit, A/P capture, bank matching, and labor control on a single automated platform."
    }, {
      property: "og:url",
      content: "/hotel-back-office-automation"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/hotel-back-office-automation"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$f.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Hotel Back-Office Automation",
      url: "/hotel-back-office-automation"
    }])]
  })
});
const terms = [{
  term: "ADR",
  full: "Average Daily Rate",
  def: "Total rooms revenue divided by rooms sold. The headline rate metric every hotel P&L starts with."
}, {
  term: "ARR",
  full: "Average Room Rate",
  def: "Synonym for ADR — total rooms revenue divided by rooms sold over a given period."
}, {
  term: "A/P",
  full: "Accounts Payable",
  def: "Money the hotel owes to vendors. Modern A/P workflows replace paper checks with Virtual Cards and ACH, with OCR-driven invoice capture."
}, {
  term: "A/R",
  full: "Accounts Receivable",
  def: "Money owed to the hotel — group bills, direct bills, OTA settlements. A/R aging discipline is a leading indicator of cash health."
}, {
  term: "BAR",
  full: "Best Available Rate",
  def: "The lowest non-restricted public rate offered for a given date. The reference rate most rate-parity and OTA contracts pivot on."
}, {
  term: "Chargeback",
  full: "Disputed Card Transaction",
  def: "A guest- or card-issuer-initiated reversal of a settled transaction. Catching and contesting chargebacks is core revenue protection."
}, {
  term: "Comp Set",
  full: "Competitive Set",
  def: "The group of properties you benchmark against in STR reports. Usually 4–6 hotels in the same market, segment, and price tier."
}, {
  term: "CPOR",
  full: "Cost Per Occupied Room",
  def: "Departmental expense divided by occupied rooms. Used to control variable cost per stay — housekeeping CPOR is the most-watched flavor."
}, {
  term: "Direct Bill",
  full: "Corporate / Group Billing",
  def: "An arrangement where charges are billed to a company or group account instead of collected from the guest at checkout."
}, {
  term: "EFTPOS",
  full: "Tender Reconciliation",
  def: "The matching of card and cash settlement totals from the PMS to merchant batches and bank deposits — a core night-audit step."
}, {
  term: "F&B",
  full: "Food and Beverage",
  def: "All food and beverage outlets — restaurant, bar, banquet, room service. F&B reconciliation matches POS to PMS folio postings nightly."
}, {
  term: "FIT",
  full: "Free Independent Traveler",
  def: "Individually booked transient guests (not group, not contract). Usually the highest-rate segment in the mix."
}, {
  term: "Folio",
  full: "Guest Folio",
  def: "The guest's transaction record for a stay — room charges, incidentals, taxes, payments. The reconciliation unit for night audit."
}, {
  term: "GL",
  full: "General Ledger",
  def: "The master record of all financial transactions — QuickBooks, M3, Sage Intacct, or Profitvue in hotel contexts. Innrly pushes coded invoices into the GL of choice."
}, {
  term: "GOP",
  full: "Gross Operating Profit",
  def: "Revenue minus departmental and undistributed operating expenses. The line ownership and lenders watch most closely."
}, {
  term: "GOPPAR",
  full: "Gross Operating Profit Per Available Room",
  def: "GOP divided by available rooms. Normalizes profitability for portfolio comparison across asset sizes."
}, {
  term: "House Profit",
  full: "House Profit",
  def: "Revenue minus departmental and undistributed expenses, before management fees, fixed charges, and ownership costs. Often used interchangeably with GOP."
}, {
  term: "LOS",
  full: "Length of Stay",
  def: "Average number of nights per reservation. Long-LOS extended-stay economics differ materially from transient — tax treatment, housekeeping cadence, and rate logic all change."
}, {
  term: "Manager's Report",
  full: "Daily Flash Report",
  def: "The morning packet GMs and owners read first — yesterday's revenue, occupancy, ADR, RevPAR, and pace vs forecast and last year."
}, {
  term: "MPOR",
  full: "Minutes Per Occupied Room",
  def: "Total housekeeping minutes divided by occupied rooms cleaned. The labor productivity metric GMs should track daily."
}, {
  term: "Night Audit",
  full: "End-of-Day Close",
  def: "The nightly process that closes the books on a hotel day — posts charges, reconciles tender, and produces the morning packet."
}, {
  term: "No-Show",
  full: "No-Show Reservation",
  def: "A confirmed reservation that never arrived. Properly billed no-shows are often the highest-margin line on the property's books."
}, {
  term: "NRevPAR",
  full: "Net Revenue Per Available Room",
  def: "RevPAR adjusted for distribution costs like OTA commissions. A truer measure of revenue the property actually keeps."
}, {
  term: "OTA",
  full: "Online Travel Agency",
  def: "Third-party booking channels like Booking.com and Expedia. Commission and chargeback reconciliation is the single highest-ROI back-office task."
}, {
  term: "Pace",
  full: "Booking Pace",
  def: "Cumulative reservations on the books for a future date vs the same point last year. The leading indicator revenue managers price against."
}, {
  term: "Pickup",
  full: "Rooms Pickup",
  def: "Net new reservations added between two snapshots — a daily measure of demand momentum."
}, {
  term: "PMS",
  full: "Property Management System",
  def: "The system of record for reservations, folios, and night audit. Opera, choiceADVANTAGE, SynXis, OnQ, Cloudbeds, and Mews are the most common."
}, {
  term: "REVPOR",
  full: "Revenue Per Occupied Room",
  def: "Total revenue (rooms + F&B + ancillary) divided by occupied rooms. Captures the wallet share full-service hotels earn per stay."
}, {
  term: "RevPAR",
  full: "Revenue Per Available Room",
  def: "Rooms revenue divided by rooms available. Combines occupancy and ADR into one productivity number."
}, {
  term: "STR Report",
  full: "Smith Travel Research Report",
  def: "The industry benchmark report comparing your property's occupancy, ADR, and RevPAR against a defined competitive set."
}, {
  term: "TRevPAR",
  full: "Total Revenue Per Available Room",
  def: "All revenue (rooms + F&B + ancillary) divided by available rooms. The best top-line measure for full-service hotels."
}, {
  term: "USALI",
  full: "Uniform System of Accounts for the Lodging Industry",
  def: "The standardized chart of accounts and reporting framework ownership groups, lenders, and buyers expect. Current edition: USALI 11."
}, {
  term: "Walk-In",
  full: "Walk-In Reservation",
  def: "A guest who books at the front desk without a prior reservation. Walk-in ADR is typically higher than rate-shopped channels."
}, {
  term: "Walked",
  full: "Walked Guest",
  def: "A confirmed reservation relocated to another hotel because the property was oversold. Walked-guest cost (rebook + transport + comp) is a watched exception."
}];
const $$splitComponentImporter$V = () => import("./glossary-DaqsUckc.js");
const Route$X = createFileRoute("/glossary")({
  component: lazyRouteComponent($$splitComponentImporter$V, "component"),
  head: () => ({
    meta: [{
      title: "Hotel Operations Glossary: ADR, RevPAR, MPOR | Innrly"
    }, {
      name: "description",
      content: "Plain-English definitions of the hotel finance, labor, and operations terms multi-property operators use every day — ADR, RevPAR, GOP, MPOR, OTA, PMS, USALI."
    }, {
      property: "og:title",
      content: "Hotel Operations Glossary — Innrly"
    }, {
      property: "og:description",
      content: "Definitions for the hotel terms operators use daily — ADR, RevPAR, MPOR, USALI, and more."
    }, {
      property: "og:url",
      content: "/glossary"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/glossary"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "DefinedTermSet",
        name: "Hotel Operations Glossary",
        hasDefinedTerm: terms.map((t) => ({
          "@type": "DefinedTerm",
          name: t.term,
          description: `${t.full}. ${t.def}`
        }))
      })
    }]
  })
});
const $$splitComponentImporter$U = () => import("./features-DFDNQwtE.js");
const Route$W = createFileRoute("/features")({
  component: lazyRouteComponent($$splitComponentImporter$U, "component"),
  loader: async () => {
    const seo = await fetchSeoData("/features");
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/features"], "/features"), {
      property: "og:image:alt",
      content: "Night audit to morning coffee — already done. Reconciliation, AP, payroll, BI."
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/features"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "/"
        }, {
          "@type": "ListItem",
          position: 2,
          name: "Features",
          item: "/features"
        }]
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ItemList",
        name: "Innrly Features",
        itemListElement: [{
          "@type": "ListItem",
          position: 1,
          name: "Business Intelligence",
          url: "/solutions/business-intelligence"
        }, {
          "@type": "ListItem",
          position: 2,
          name: "Financial Control",
          url: "/solutions/financial-control"
        }, {
          "@type": "ListItem",
          position: 3,
          name: "Labor & Workforce",
          url: "/solutions/innrly-shift"
        }, {
          "@type": "ListItem",
          position: 4,
          name: "Operations Automation",
          url: "/solutions/operations-automation"
        }, {
          "@type": "ListItem",
          position: 5,
          name: "Innrly Pay",
          url: "/solutions/innrly-pay"
        }, {
          "@type": "ListItem",
          position: 6,
          name: "Innrly Shift",
          url: "/solutions/innrly-shift"
        }]
      })
    }]
  })
});
const $$splitComponentImporter$T = () => import("./developers-DiTlyGBc.js");
const Route$V = createFileRoute("/developers")({
  component: lazyRouteComponent($$splitComponentImporter$T, "component"),
  loader: async () => {
    const seo = await fetchSeoData("/developers");
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/developers"], "/developers")],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/developers"
    }],
    scripts: [breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Developers",
      url: "/developers"
    }])]
  })
});
const $$splitComponentImporter$S = () => import("./control-hub-DGuaaKc6.js");
const Route$U = createFileRoute("/control-hub")({
  beforeLoad: ({
    location
  }) => {
    if (location.pathname !== "/control-hub/login") {
      if (typeof window !== "undefined") {
        const token = localStorage.getItem("innrly_admin_token");
        if (!token) {
          throw redirect({
            to: "/control-hub/login"
          });
        }
      }
    }
  },
  component: lazyRouteComponent($$splitComponentImporter$S, "component")
});
const $$splitComponentImporter$R = () => import("./contact-2X5eq-bH.js");
const Route$T = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$R, "component"),
  loader: async () => {
    const seo = await fetchSeoData("/contact");
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/contact"], "/contact"), {
      property: "og:image:alt",
      content: "Talk to an operator, not an SDR. 30-minute demo on your portfolio."
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/contact"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        name: "Contact Innrly",
        url: "/contact",
        mainEntity: {
          "@type": "Organization",
          name: "Innrly",
          contactPoint: {
            "@type": "ContactPoint",
            contactType: "sales",
            email: "sales@innrly.com",
            availableLanguage: ["English"],
            areaServed: "US"
          }
        }
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "/"
        }, {
          "@type": "ListItem",
          position: 2,
          name: "Contact",
          item: "/contact"
        }]
      })
    }]
  })
});
const $$splitComponentImporter$Q = () => import("./about-DPZTGALc.js");
const Route$S = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$Q, "component"),
  loader: async () => {
    const seo = await fetchSeoData("/about");
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/about"], "/about"), {
      property: "og:image:alt",
      content: "We ate our own cooking for 16 years — built by Vimal Patel inside Q Hotels Management."
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/about"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        name: "About Innrly",
        url: "/about",
        description: "Innrly was built by hotelier Vimal Patel and has run Q Hotels Management's portfolio since 2007.",
        mainEntity: {
          "@type": "Organization",
          name: "Innrly",
          founder: {
            "@type": "Person",
            name: "Vimal Patel",
            jobTitle: "Founder, Innrly · Q Hotels Management"
          },
          foundingDate: "2007"
        }
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [{
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: "/"
        }, {
          "@type": "ListItem",
          position: 2,
          name: "About",
          item: "/about"
        }]
      })
    }]
  })
});
const $$splitComponentImporter$P = () => import("./index-CQ1SF6DP.js");
const Route$R = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$P, "component"),
  loader: async () => {
    const seo = await fetchSeoData("/");
    return {
      seo
    };
  },
  head: ({
    loaderData
  }) => ({
    meta: [...getMetaTags(loaderData?.seo || null, defaultSeoData["/"], "/"), {
      property: "og:image:alt",
      content: "You sleep. Innrly works. — back-office automation for 200+ hotels."
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Innrly",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        description: "Hotel back-office automation, business intelligence, and labor management for multi-property operators.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD",
          description: "90-day free trial"
        }
        // NOTE: aggregateRating intentionally omitted — Google penalizes
        // unverified review schema. Add back once you have a real review
        // source (G2 / Capterra / your own collection). See
        // docs/DEVELOPER_HANDOFF_CONTENT.md
      })
    }, {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{
          "@type": "Question",
          name: "Is the platform name spelled Innrly or Innerly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "The official spelling is Innrly (without the 'e'). While it is sometimes searched for or misspelled as 'Innerly', the platform is called Innrly, representing inn automation done early."
          }
        }, {
          "@type": "Question",
          name: "How long does onboarding take with Innrly?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Onboarding is fully guided by our team and typically takes less than 14 days. We connect to your PMS, accounting systems, and bank feeds for you, ensuring a seamless transition with zero disruption to your daily operations."
          }
        }, {
          "@type": "Question",
          name: "Which hotel systems and accounting platforms does Innrly integrate with?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Innrly integrates with all major Property Management Systems (PMS) like Marriott, Hilton, IHG, Opera, Cloudbeds, and Mews, as well as leading back-office financial platforms including M3, Sage Intacct, and QuickBooks."
          }
        }]
      })
    }]
  })
});
const $$splitComponentImporter$O = () => import("./integrations.index-Bsw1YD0b.js");
const Route$Q = createFileRoute("/integrations/")({
  component: lazyRouteComponent($$splitComponentImporter$O, "component"),
  head: () => ({
    meta: [{
      title: "Hotel Integrations — PMS, Accounting, Payroll & More | Innrly"
    }, {
      name: "description",
      content: "Innrly connects to 50+ hotel systems — Opera, Hilton OnQ, Marriott FOSSE, M3, QuickBooks, Sage Intacct, ADP, Medallia, Plaid and more. Official partner with Plaid, M3 & Repay."
    }, {
      property: "og:title",
      content: "Innrly Integrations — 50+ Hotel Systems Connected"
    }, {
      property: "og:description",
      content: "PMS, accounting, payroll, banking, guest survey, and invoice payment integrations — all in one back-office platform."
    }, {
      property: "og:url",
      content: "/integrations"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/integrations"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Innrly",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "/integrations",
        description: "Innrly connects to 50+ hotel systems — PMS, accounting, payroll, banking, guest survey, and A/P platforms.",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD"
        }
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Integrations",
      url: "/integrations"
    }])]
  })
});
const $$splitComponentImporter$N = () => import("./control-hub.index-GFAZoJcb.js");
const Route$P = createFileRoute("/control-hub/")({
  component: lazyRouteComponent($$splitComponentImporter$N, "component"),
  head: () => ({
    meta: [{
      title: "Innrly Administrative Console"
    }, {
      name: "description",
      content: "Manage and view captured marketing leads and onboarding requests."
    }]
  })
});
function LeadsDashboardContainer({
  activeTab
}) {
  const [data, setData] = useState({
    contacts: [],
    trials: [],
    newsletters: [],
    onboarding: [],
    onboarding_users: [],
    onboarding_properties: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [expandedCompanyId, setExpandedCompanyId] = useState(null);
  useEffect(() => {
    setExpandedCompanyId(null);
  }, [activeTab]);
  const fetchLeads = async () => {
    setLoading(true);
    setError(null);
    try {
      const baseUrl = "http://127.0.0.1:8000/leads";
      const fetchUrl = baseUrl.endsWith("/leads") ? baseUrl : `${baseUrl}/leads`;
      const token = typeof window !== "undefined" ? localStorage.getItem("innrly_admin_token") || "" : "";
      const response = await fetch(fetchUrl, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      });
      if (response.status === 401) {
        if (typeof window !== "undefined") {
          localStorage.removeItem("innrly_admin_token");
          window.location.href = "/admin/login";
        }
        return;
      }
      if (!response.ok) {
        throw new Error(`Failed to fetch: ${response.statusText}`);
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      console.error("Error fetching leads:", err);
      setError(err.message || "Failed to load lead data from backend.");
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchLeads();
  }, []);
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    try {
      const d = new Date(dateString);
      return d.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      });
    } catch {
      return dateString;
    }
  };
  const exportCSV = () => {
    let currentList = [];
    let fileName = `innrly_${activeTab}`;
    if (activeTab === "contacts") currentList = data.contacts;
    else if (activeTab === "trials") currentList = data.trials;
    else if (activeTab === "newsletters") currentList = data.newsletters;
    else if (activeTab === "onboarding") {
      currentList = data.onboarding;
    }
    if (currentList.length === 0) {
      alert("No data available to export in this tab.");
      return;
    }
    const headers = Object.keys(currentList[0]);
    const csvRows = [];
    csvRows.push(headers.join(","));
    for (const row of currentList) {
      const values = headers.map((header) => {
        const val = row[header];
        const escaped = ("" + (val !== null && val !== void 0 ? val : "")).replace(/"/g, '""');
        return `"${escaped}"`;
      });
      csvRows.push(values.join(","));
    }
    const blob = new Blob([csvRows.join("\n")], {
      type: "text/csv;charset=utf-8;"
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.setAttribute("href", url);
    link.setAttribute("download", `${fileName}_export_${(/* @__PURE__ */ new Date()).toISOString().split("T")[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };
  const filterLeads = (list) => {
    if (!searchQuery) return list;
    const q = searchQuery.toLowerCase();
    return list.filter((item) => {
      return Object.values(item).some((val) => {
        if (val === null || val === void 0) return false;
        return String(val).toLowerCase().includes(q);
      });
    });
  };
  const handleDeleteMock = (name) => {
    alert(`Mock Delete action triggered for lead: ${name}`);
  };
  const handleEditMock = (name) => {
    alert(`Mock Edit action triggered for lead: ${name}`);
  };
  const totalLeads = data.contacts.length + data.trials.length + data.onboarding.length + data.newsletters.length;
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] font-bold uppercase tracking-[0.2em] text-indigo-600 block", children: "Dashboard" }),
        /* @__PURE__ */ jsx("h1", { className: "text-2xl font-bold text-slate-800 mt-1", children: "Lead Capture Center" }),
        /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 mt-0.5", children: "Overview of pipelines, trials, newsletter updates, and guided onboarding." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs(Button, { variant: "outline", onClick: fetchLeads, disabled: loading, className: "border-slate-200 hover:bg-slate-50 text-slate-700 bg-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9", children: [
          /* @__PURE__ */ jsx(RefreshCw, { className: `h-3.5 w-3.5 ${loading ? "animate-spin" : ""}` }),
          "Refresh"
        ] }),
        /* @__PURE__ */ jsxs(Button, { onClick: exportCSV, className: "bg-indigo-600 hover:bg-indigo-700 text-white shadow-sm flex items-center gap-1.5 text-xs py-1.5 h-9 font-semibold", children: [
          /* @__PURE__ */ jsx(Download, { className: "h-3.5 w-3.5" }),
          "Export CSV"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block", children: "Total Captured" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 block mt-1", children: totalLeads }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-indigo-500 font-semibold block mt-0.5", children: "across all tables" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block", children: "Contacts" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 block mt-1", children: data.contacts.length }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium block mt-0.5", children: "Sales inquiries" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block", children: "Free Trials" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 block mt-1", children: data.trials.length }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium block mt-0.5", children: "Platform trials" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block", children: "Onboardings" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 block mt-1", children: data.onboarding.length }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium block mt-0.5", children: "Wizard completions" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm col-span-2 md:col-span-1", children: [
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-bold uppercase tracking-wider block", children: "Newsletter" }),
        /* @__PURE__ */ jsx("span", { className: "text-2xl font-bold text-slate-900 block mt-1", children: data.newsletters.length }),
        /* @__PURE__ */ jsx("span", { className: "text-[10px] text-slate-400 font-medium block mt-0.5", children: "Subscribers list" })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-4 shadow-sm flex flex-col sm:flex-row items-center gap-4", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative flex-1 w-full", children: [
        /* @__PURE__ */ jsx(Search, { className: "absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" }),
        /* @__PURE__ */ jsx("input", { type: "text", placeholder: "Search records by name, email, company, PMS, source...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full pl-9 pr-4 py-1.5 bg-slate-50 border border-slate-200 rounded-lg text-slate-800 placeholder:text-slate-400 focus:outline-none focus:bg-white focus:border-indigo-500 text-sm transition-all" })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 shrink-0 text-xs", children: [
        /* @__PURE__ */ jsx(ListFilter, { className: "h-3.5 w-3.5 text-slate-500" }),
        /* @__PURE__ */ jsx("span", { className: "text-slate-400 font-medium", children: "Filtering by search:" }),
        /* @__PURE__ */ jsx("span", { className: "bg-indigo-50 text-indigo-600 border border-indigo-100 font-bold px-2.5 py-0.5 rounded-full text-[10px]", children: searchQuery ? "Active" : "None" })
      ] })
    ] }),
    error && /* @__PURE__ */ jsxs("div", { className: "bg-red-50 border border-red-200 rounded-xl p-5 text-center my-6", children: [
      /* @__PURE__ */ jsx("span", { className: "text-sm text-red-700 font-bold block", children: "Database Fetch Failed" }),
      /* @__PURE__ */ jsx("p", { className: "text-xs text-red-500 mt-1", children: error }),
      /* @__PURE__ */ jsx(Button, { onClick: fetchLeads, variant: "outline", className: "mt-4 border-red-200 text-red-700 hover:bg-red-50/80 bg-white", children: "Try Again" })
    ] }),
    loading && !error && /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-20 bg-white border border-slate-200 rounded-2xl shadow-sm", children: [
      /* @__PURE__ */ jsx(RefreshCw, { className: "h-7 w-7 text-indigo-600 animate-spin" }),
      /* @__PURE__ */ jsx("span", { className: "text-xs text-slate-400 mt-2 font-medium", children: "Fetching lead submissions..." })
    ] }),
    !loading && !error && /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm", children: [
      activeTab === "contacts" && /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Product Lead" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Email / Phone" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Company" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Properties" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Rating" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-100 text-xs text-slate-700", children: filterLeads(data.contacts).length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 7, className: "py-12 text-center text-slate-400 font-medium", children: "No contact leads found." }) }) : filterLeads(data.contacts).map((lead) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/50 transition-colors", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 font-semibold text-slate-900", children: lead.name }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[11px] text-slate-800", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-slate-400" }),
              lead.email
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[10px] text-slate-400 mt-0.5", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-slate-400" }),
              lead.phone
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-800", children: lead.company }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center font-mono font-semibold text-slate-700", children: lead.properties }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-800", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-0.5 font-semibold text-slate-900", children: "4.5 ★" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded text-[10px] font-bold", children: "Active" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-1.5", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => handleEditMock(lead.name), className: "bg-slate-900 hover:bg-slate-800 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Edit" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleDeleteMock(lead.name), className: "bg-red-500 hover:bg-red-650 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Delete" })
          ] }) })
        ] }, lead.id)) })
      ] }) }),
      activeTab === "trials" && /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Contact / Role" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Email / Phone" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Company" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Properties" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "PMS System" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Rating" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-100 text-xs text-slate-700", children: filterLeads(data.trials).length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 8, className: "py-12 text-center text-slate-400 font-medium", children: "No trial leads found." }) }) : filterLeads(data.trials).map((lead) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/50 transition-colors", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsx("span", { className: "font-semibold text-slate-900", children: lead.name }),
            /* @__PURE__ */ jsx("span", { className: "text-[9px] text-indigo-600 uppercase tracking-wider font-bold mt-0.5", children: lead.role })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[11px] text-slate-800", children: [
              /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-slate-400" }),
              lead.email
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1 text-[10px] text-slate-400 mt-0.5", children: [
              /* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-slate-400" }),
              lead.phone
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-800", children: lead.company }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center font-mono font-semibold text-slate-700", children: lead.properties }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-800", children: /* @__PURE__ */ jsx("span", { className: "bg-slate-50 border border-slate-200/50 px-2 py-0.5 rounded text-[10px] font-semibold", children: lead.pms }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "inline-flex items-center gap-0.5 font-semibold text-slate-900", children: "4.2 ★" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "bg-indigo-50 text-indigo-700 border border-indigo-100 px-2.5 py-0.5 rounded text-[10px] font-bold", children: "New" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-1.5", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => handleEditMock(lead.name), className: "bg-slate-900 hover:bg-slate-800 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Edit" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleDeleteMock(lead.name), className: "bg-red-500 hover:bg-red-650 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Delete" })
          ] }) })
        ] }, lead.id)) })
      ] }) }),
      activeTab === "newsletters" && /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full text-left border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { className: "border-b border-slate-200 bg-slate-50 text-slate-400 text-[10px] font-bold uppercase tracking-wider", children: [
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Subscriber Email" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Signup Source Placement" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Subscribed At" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6", children: "Status" }),
          /* @__PURE__ */ jsx("th", { className: "py-3.5 px-6 text-center", children: "Actions" })
        ] }) }),
        /* @__PURE__ */ jsx("tbody", { className: "divide-y divide-slate-100 text-xs text-slate-700", children: filterLeads(data.newsletters).length === 0 ? /* @__PURE__ */ jsx("tr", { children: /* @__PURE__ */ jsx("td", { colSpan: 5, className: "py-12 text-center text-slate-400 font-medium", children: "No newsletter subscribers found." }) }) : filterLeads(data.newsletters).map((lead) => /* @__PURE__ */ jsxs("tr", { className: "hover:bg-slate-50/50 transition-colors", children: [
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 font-semibold text-slate-900", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Mail, { className: "h-4 w-4 text-slate-400" }),
            lead.email
          ] }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "bg-slate-100 text-slate-500 border border-slate-200/50 px-2 py-0.5 rounded text-[10px] font-mono", children: lead.sub_source || "general" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-slate-400 font-medium", children: formatDate(lead.submitted_at || lead.created_at) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6", children: /* @__PURE__ */ jsx("span", { className: "bg-emerald-50 text-emerald-700 border border-emerald-100 px-2.5 py-0.5 rounded text-[10px] font-bold", children: "Active" }) }),
          /* @__PURE__ */ jsx("td", { className: "py-3.5 px-6 text-center", children: /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-1.5", children: [
            /* @__PURE__ */ jsx("button", { onClick: () => handleEditMock(lead.email), className: "bg-slate-900 hover:bg-slate-800 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Edit" }),
            /* @__PURE__ */ jsx("button", { onClick: () => handleDeleteMock(lead.email), className: "bg-red-500 hover:bg-red-650 text-white text-[10px] px-3 py-1 rounded font-bold transition-all shadow-sm", children: "Delete" })
          ] }) })
        ] }, lead.id)) })
      ] }) }),
      activeTab === "onboarding" && /* @__PURE__ */ jsxs("div", { className: "p-1", children: [
        /* @__PURE__ */ jsx("div", { className: "text-[10px] text-slate-400 px-5 py-3 bg-slate-50/50 border-b border-slate-200 font-bold uppercase tracking-wider", children: "Click on any company record to expand and view its Users and Properties." }),
        filterLeads(data.onboarding).length === 0 ? /* @__PURE__ */ jsx("div", { className: "py-12 text-center text-slate-400 text-xs font-semibold", children: "No completed onboarding records found." }) : /* @__PURE__ */ jsx("div", { className: "divide-y divide-slate-100", children: filterLeads(data.onboarding).map((comp) => {
          const isExpanded = expandedCompanyId === comp.id;
          const associatedUsers = data.onboarding_users?.filter((u) => u.company_id === comp.id) || [];
          const associatedProps = data.onboarding_properties?.filter((p) => p.company_id === comp.id) || [];
          return /* @__PURE__ */ jsxs("div", { className: "transition-all", children: [
            /* @__PURE__ */ jsxs("div", { onClick: () => setExpandedCompanyId(isExpanded ? null : comp.id), className: `flex flex-col sm:flex-row sm:items-center sm:justify-between py-4 px-6 cursor-pointer hover:bg-slate-50 transition-colors ${isExpanded ? "bg-slate-50 border-l-4 border-indigo-600" : "border-l-4 border-transparent"}`, children: [
              /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center gap-4", children: [
                /* @__PURE__ */ jsx("div", { className: "h-10 w-10 shrink-0 rounded-xl bg-indigo-50 border border-indigo-100 flex items-center justify-center", children: /* @__PURE__ */ jsx(Building2, { className: "h-5 w-5 text-indigo-600" }) }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h3", { className: "text-sm font-bold text-slate-800 leading-tight", children: comp.company_name }),
                  /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-slate-400 mt-1 font-medium", children: [
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Users, { className: "h-3.5 w-3.5 text-slate-400" }),
                      comp.authorized_person
                    ] }),
                    /* @__PURE__ */ jsx("span", { children: "•" }),
                    /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 text-slate-400" }),
                      comp.city,
                      ", ",
                      comp.state
                    ] })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-3 sm:mt-0 gap-6", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 text-xs font-semibold", children: [
                  /* @__PURE__ */ jsxs("div", { className: "text-right", children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-slate-800 block", children: [
                      associatedProps.length,
                      " Properties"
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "text-slate-400 text-[10px] block font-medium", children: [
                      associatedUsers.length,
                      " Users"
                    ] })
                  ] }),
                  /* @__PURE__ */ jsx("span", { className: "bg-indigo-50 border border-indigo-100 text-indigo-700 px-2.5 py-0.5 rounded-full text-[10px] font-bold", children: comp.decision_maker === "yes" ? "Decision Maker" : "Non-DM" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
                  /* @__PURE__ */ jsxs("div", { className: "inline-flex gap-1", children: [
                    /* @__PURE__ */ jsx("button", { onClick: (e) => {
                      e.stopPropagation();
                      handleEditMock(comp.company_name);
                    }, className: "bg-slate-900 hover:bg-slate-800 text-white text-[9px] px-2 py-0.5 rounded font-bold transition-all", children: "Edit" }),
                    /* @__PURE__ */ jsx("button", { onClick: (e) => {
                      e.stopPropagation();
                      handleDeleteMock(comp.company_name);
                    }, className: "bg-red-500 hover:bg-red-600 text-white text-[9px] px-2 py-0.5 rounded font-bold transition-all", children: "Delete" })
                  ] }),
                  isExpanded ? /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4 text-indigo-600" }) : /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 text-slate-500" })
                ] })
              ] })
            ] }),
            isExpanded && /* @__PURE__ */ jsxs("div", { className: "bg-slate-50 border-t border-slate-100 px-6 py-6 space-y-6", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 bg-white border border-slate-200 rounded-xl p-5 shadow-sm", children: [
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2", children: "Corporate Office" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-800 leading-tight", children: comp.company_name }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 mt-1 flex items-start gap-1", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "h-3.5 w-3.5 mt-0.5 shrink-0 text-slate-400" }),
                    /* @__PURE__ */ jsxs("span", { children: [
                      comp.address,
                      /* @__PURE__ */ jsx("br", {}),
                      comp.city,
                      ", ",
                      comp.state,
                      " ",
                      comp.zip
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2", children: "Primary Contact" }),
                  /* @__PURE__ */ jsx("p", { className: "text-sm font-bold text-slate-800", children: comp.authorized_person }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 mt-1 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(Mail, { className: "h-3.5 w-3.5 text-slate-400" }),
                    comp.email
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 mt-1 flex items-center gap-1.5", children: [
                    /* @__PURE__ */ jsx(Phone, { className: "h-3.5 w-3.5 text-slate-400" }),
                    "Mobile: ",
                    comp.mobile
                  ] })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx("h4", { className: "text-[9px] uppercase font-bold tracking-wider text-indigo-600 mb-2", children: "Metadata" }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600", children: [
                    "Office Phone: ",
                    /* @__PURE__ */ jsx("span", { className: "text-slate-800 font-semibold", children: comp.work_phone || "N/A" })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-xs text-slate-600 mt-1", children: [
                    "Submission: ",
                    /* @__PURE__ */ jsx("span", { className: "text-slate-800 font-semibold", children: formatDate(comp.submitted_at || comp.created_at) })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Users, { className: "h-4 w-4" }),
                  "Authorized Platform Users"
                ] }),
                associatedUsers.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 italic pl-2", children: "No additional team members listed." }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: associatedUsers.map((user) => /* @__PURE__ */ jsxs("div", { className: "bg-white border border-slate-200 rounded-xl p-3.5 shadow-sm flex flex-col justify-between", children: [
                  /* @__PURE__ */ jsx("span", { className: "text-xs font-bold text-slate-800 block", children: user.name }),
                  /* @__PURE__ */ jsxs("div", { className: "mt-2 space-y-0.5", children: [
                    /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-slate-600 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Mail, { className: "h-3 w-3 text-slate-400" }),
                      user.email
                    ] }),
                    /* @__PURE__ */ jsxs("span", { className: "text-[11px] text-slate-700 flex items-center gap-1", children: [
                      /* @__PURE__ */ jsx(Phone, { className: "h-3 w-3 text-slate-400" }),
                      user.phone
                    ] })
                  ] })
                ] }, user.id)) })
              ] }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsxs("h4", { className: "text-[10px] uppercase font-bold tracking-wider text-slate-400 mb-3 flex items-center gap-2", children: [
                  /* @__PURE__ */ jsx(Building2, { className: "h-4 w-4" }),
                  "Configured Properties (",
                  associatedProps.length,
                  ")"
                ] }),
                associatedProps.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-xs text-slate-400 italic pl-2", children: "No hotels added to the wizard." }) : /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: associatedProps.map((prop) => /* @__PURE__ */ jsx("div", { className: "bg-white border border-slate-200 rounded-xl p-4 flex flex-col justify-between shadow-sm hover:border-indigo-300 transition-colors", children: /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-xs font-extrabold text-slate-800", children: prop.property_name }),
                      /* @__PURE__ */ jsx("span", { className: "bg-indigo-50 border border-indigo-100 text-indigo-700 text-[8px] uppercase tracking-widest font-semibold px-2 py-0.5 rounded ml-2", children: prop.brand })
                    ] }),
                    /* @__PURE__ */ jsx("span", { className: "text-[10px] font-mono bg-slate-50 px-2 py-0.5 rounded border border-slate-200 text-slate-500 font-bold", children: prop.property_code })
                  ] }),
                  /* @__PURE__ */ jsxs("p", { className: "text-[11px] text-slate-500 mt-1.5 flex items-start gap-1", children: [
                    /* @__PURE__ */ jsx(MapPin, { className: "h-3 w-3 mt-0.5 shrink-0 text-slate-400" }),
                    prop.address
                  ] }),
                  /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 gap-4 border-t border-slate-100 pt-3 mt-3 text-[11px]", children: [
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400 block text-[9px] uppercase font-bold tracking-wider", children: "Property Manager" }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-800 block font-semibold mt-0.5", children: prop.manager_name }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-500 block", children: prop.manager_email }),
                      /* @__PURE__ */ jsx("span", { className: "text-slate-500 block", children: prop.manager_mobile })
                    ] }),
                    /* @__PURE__ */ jsxs("div", { children: [
                      /* @__PURE__ */ jsx("span", { className: "text-slate-400 block text-[9px] uppercase font-bold tracking-wider", children: "Rooms & Integrations" }),
                      /* @__PURE__ */ jsxs("span", { className: "text-slate-800 block font-semibold mt-0.5", children: [
                        prop.rooms,
                        " Rooms"
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "text-indigo-600 block mt-0.5 font-bold", children: [
                        "PMS: ",
                        prop.pms === "Other" ? prop.pms_other || "Other" : prop.pms
                      ] }),
                      /* @__PURE__ */ jsxs("span", { className: "text-slate-500 block", children: [
                        "Contact: ",
                        prop.contact_person
                      ] })
                    ] })
                  ] })
                ] }) }, prop.id)) })
              ] })
            ] })
          ] }, comp.id);
        }) })
      ] })
    ] })
  ] });
}
const comparisons = [{
  to: "/compare/innrly-vs-otelier",
  competitor: "Otelier",
  tagline: "Single platform vs a multi-module suite of acquired products.",
  readTime: "7 min read",
  highlights: ["One login, one data model", "Transparent $199/mo pricing", "2–4 week onboarding"],
  available: true
}, {
  to: "/integrations/m3",
  competitor: "M3",
  tagline: "How Innrly + M3 work together — capture, code, and push invoices into M3.",
  readTime: "5 min read",
  highlights: ["Certified M3 partner", "Push-only invoice sync", "M3 stays your GL"],
  available: true
}, {
  to: "/compare/innrly-vs-inn-flow",
  competitor: "Inn-flow",
  tagline: "Transparent month-to-month contracts, native Face-ID TimeClock, and housekeeping metrics vs Inn-flow's accounting model.",
  readTime: "6 min read",
  highlights: ["Month-to-month contract", "Face-ID TimeClock native", "90-day free trial"],
  available: true
}, {
  to: "/integrations/quickbooks",
  competitor: "QuickBooks",
  tagline: "Two-way QuickBooks sync — see how Innrly extends what QuickBooks alone can't do for hotels.",
  readTime: "4 min read",
  highlights: ["Two-way sync", "Hotel-aware GL coding", "OTA reconciliation built in"],
  available: true
}, {
  to: "/compare/innrly-vs-nimble",
  competitor: "Nimble Property",
  tagline: "Published pricing, faster deployment, and native housekeeping productivity vs Nimble's quote-based model.",
  readTime: "6 min read",
  highlights: ["$199/mo published pricing", "2–4 week deployment", "Face-ID TimeClock built in"],
  available: true
}, {
  to: "/compare/innrly-vs-aptech",
  competitor: "Aptech",
  tagline: "One platform vs Profitvue + Execuvue + Targetvue — three products licensed and onboarded separately.",
  readTime: "7 min read",
  highlights: ["One login, one data model", "No multi-module licensing", "2–4 week deployment"],
  available: true
}, {
  to: "/compare/innrly-vs-profitsage",
  competitor: "ProfitSage",
  tagline: "Same BI surface — plus the A/P, audit, OTA, TimeClock, and payroll layers ProfitSage doesn't cover natively.",
  readTime: "6 min read",
  highlights: ["BI on the same data model", "A/P + audit + labor included", "Native TimeClock + MPOR"],
  available: true
}, {
  to: "/compare/innrly-vs-actabl",
  competitor: "Actabl / Hotel Effectiveness",
  tagline: "Keep your existing TimeClock, get scheduling + MPOR + payroll export — at a fraction of Actabl's per-module labor pricing.",
  readTime: "7 min read",
  highlights: ["Works with your existing clock", "Face-ID is the upgrade, not required", "$149/mo per property, all-in"],
  available: true
}];
const $$splitComponentImporter$M = () => import("./compare.index-Dl1dERkx.js");
const Route$O = createFileRoute("/compare/")({
  component: lazyRouteComponent($$splitComponentImporter$M, "component"),
  head: () => ({
    meta: [{
      title: "Compare Hotel Back-Office Software | Innrly"
    }, {
      name: "description",
      content: "Compare Innrly against other hotel back-office, accounting, and labor platforms. Pick a vendor below to see the head-to-head."
    }, {
      property: "og:title",
      content: "Compare hotel back-office software"
    }, {
      property: "og:description",
      content: "Hub of head-to-head Innrly comparisons for multi-property hotel operators."
    }, {
      property: "og:url",
      content: "/compare"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/compare"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Innrly Comparisons",
        description: "Side-by-side comparisons positioning Innrly as an alternative to leading hotel back-office platforms.",
        hasPart: comparisons.map((c) => ({
          "@type": "WebPage",
          name: `Innrly: alternative to ${c.competitor}`,
          url: c.to
        }))
      })
    }]
  })
});
const studies = [{
  to: "/case-studies/midwest-portfolio",
  portfolio: "Midwest select-service portfolio",
  segment: "12 properties · Hilton, IHG, Choice",
  headline: "5–15 hours saved per hotel per week",
  body: "How a select-service operator catches night-audit anomalies daily and protects $200–500 in revenue per hotel each week.",
  available: true
}, {
  to: "/case-studies/urban-full-service",
  portfolio: "Urban full-service operator",
  segment: "4 properties · Marriott + independent",
  headline: "$7K–15K OTA commission recovered per quarter",
  body: "OTA reconciliation runs nightly, F&B variance tightens to roughly 1%, and the month-end close moves from 12 days to about 6.",
  available: true
}, {
  to: "/case-studies/hilton-management-company",
  portfolio: "Hilton management company",
  segment: "28 properties · Hampton, HGI, Home2, Embassy",
  headline: "Month-end close in about 6 days, not 14",
  body: "OnQ and OPERA consolidated nightly, AP through one queue, and no new corporate headcount as the portfolio grew.",
  available: true
}, {
  to: "/case-studies/extended-stay-portfolio",
  portfolio: "Extended-stay portfolio",
  segment: "18 properties · Marriott + Hilton extended-stay",
  headline: "8–12% MPOR reduction across the portfolio",
  body: "Weekly-clean MPOR modeled correctly, long-stay tax automated, and consolidated USALI packages inside the first week of month-end.",
  available: true
}, {
  to: "/case-studies/boutique-group",
  portfolio: "Independent boutique group",
  segment: "6 properties · 7 different PMSes",
  headline: "$15K–25K/yr net savings vs. prior bookkeeping setup",
  body: "Seven PMSes consolidated into one P&L, run by a two-person back office instead of a fractional CFO plus an outside firm.",
  available: true
}];
const $$splitComponentImporter$L = () => import("./case-studies.index-C1q3CuHq.js");
const Route$N = createFileRoute("/case-studies/")({
  component: lazyRouteComponent($$splitComponentImporter$L, "component"),
  head: () => ({
    meta: [{
      title: "Hotel Operator Case Studies | Innrly"
    }, {
      name: "description",
      content: "Illustrative scenarios showing the shape of impact multi-property hotel operators see with Innrly — hours saved, revenue protected, faster close."
    }, {
      property: "og:title",
      content: "Innrly Case Studies"
    }, {
      property: "og:description",
      content: "Illustrative scenarios. Directional ranges from typical Innrly engagements — composite, not single-customer audited results."
    }, {
      property: "og:url",
      content: "/case-studies"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/case-studies"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        name: "Innrly Case Studies",
        description: "Real multi-property hotel operators using Innrly.",
        hasPart: studies.map((s) => ({
          "@type": "Article",
          name: s.portfolio,
          url: s.to
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Case Studies",
      url: "/case-studies"
    }])]
  })
});
const $$splitComponentImporter$K = () => import("./blog.index-BtijZ40v.js");
const Route$M = createFileRoute("/blog/")({
  loader: async () => {
    try {
      const res = await fetch("http://127.0.0.1:8000/blog");
      if (res.ok) {
        const data = await res.json();
        return data.filter((p) => p.status === "published");
      }
    } catch (e) {
      console.error("Failed to fetch blogs", e);
    }
    return [];
  },
  component: lazyRouteComponent($$splitComponentImporter$K, "component"),
  head: () => ({
    meta: [{
      title: "Blog — Innrly"
    }, {
      name: "description",
      content: "Hotel operations, finance, and labor insights from the Innrly team."
    }, {
      property: "og:title",
      content: "Innrly Blog"
    }, {
      property: "og:description",
      content: "Operator-focused writing on hotel finance, labor, and analytics."
    }, {
      property: "og:url",
      content: "/blog"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/blog"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Innrly Blog",
        url: "/blog",
        description: "Operator-focused writing on hotel finance, labor, and analytics.",
        publisher: {
          "@type": "Organization",
          name: "Innrly"
        }
      })
    }]
  })
});
const $$splitComponentImporter$J = () => import("./solutions.reconciliation-DOtlVE2F.js");
const Route$L = createFileRoute("/solutions/reconciliation")({
  component: lazyRouteComponent($$splitComponentImporter$J, "component"),
  head: () => ({
    meta: [{
      title: "Hotel Reconciliation Software | Innrly"
    }, {
      name: "description",
      content: "Automated hotel reconciliation software — match PMS, bank, credit card, and OTA deposits daily. Catch variances before they cost you money."
    }, {
      property: "og:title",
      content: "Hotel Reconciliation Software | Innrly"
    }, {
      property: "og:description",
      content: "Daily PMS-to-bank, credit card, and OTA reconciliation — automated across every property in your portfolio."
    }, {
      property: "og:url",
      content: "/solutions/reconciliation"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/solutions/reconciliation"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Innrly Reconciliation",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "/solutions/reconciliation",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD"
        }
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Solutions",
      url: "/solutions"
    }, {
      name: "Reconciliation",
      url: "/solutions/reconciliation"
    }])]
  })
});
const $$splitComponentImporter$I = () => import("./solutions.operations-automation-CuzlwIOv.js");
const Route$K = createFileRoute("/solutions/operations-automation")({
  component: lazyRouteComponent($$splitComponentImporter$I, "component"),
  head: () => ({
    meta: [{
      title: "Hotel Night Audit & Back-Office Automation Software | Innrly"
    }, {
      name: "description",
      content: "Built for night auditors and AGMs. Automate the night audit pack, OTA reconciliation, bank matching, and A/P invoice capture — across every property and PMS."
    }, {
      property: "og:title",
      content: "Hotel Night Audit & Back-Office Automation | Innrly"
    }, {
      property: "og:description",
      content: "The night auditor's full pack, generated and filed by sunrise — at every property."
    }, {
      property: "og:url",
      content: "/solutions/operations-automation"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/solutions/operations-automation"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Innrly Operations Automation",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "/solutions/operations-automation",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD"
        }
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Solutions",
      url: "/solutions"
    }, {
      name: "Operations Automation",
      url: "/solutions/operations-automation"
    }])]
  })
});
const Route$J = createFileRoute("/solutions/labor-workforce")({
  beforeLoad: () => {
    throw redirect({ to: "/solutions/innrly-shift" });
  }
});
const $$splitComponentImporter$H = () => import("./solutions.innrly-shift-D3M_Yjmv.js");
const Route$I = createFileRoute("/solutions/innrly-shift")({
  component: lazyRouteComponent($$splitComponentImporter$H, "component"),
  head: () => ({
    meta: [{
      title: "Innrly Shift — 5-Minute Labor Snapshot for Hotel GMs"
    }, {
      name: "description",
      content: "Built for GMs who run the whole hotel. 5-minute daily labor snapshot, Face-ID TimeClock, housekeeping productivity, and payroll — one product, not four."
    }, {
      property: "og:title",
      content: "Innrly Shift — 5-Minute Labor Snapshot"
    }, {
      property: "og:description",
      content: "Precision payroll powered by real labor data — built for hotel GMs."
    }, {
      property: "og:url",
      content: "/solutions/innrly-shift"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/solutions/innrly-shift"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Innrly Shift",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "/solutions/innrly-shift",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD"
        }
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Solutions",
      url: "/solutions"
    }, {
      name: "Innrly Shift",
      url: "/solutions/innrly-shift"
    }])]
  })
});
const $$splitComponentImporter$G = () => import("./solutions.innrly-pay-2UV8hGN8.js");
const Route$H = createFileRoute("/solutions/innrly-pay")({
  component: lazyRouteComponent($$splitComponentImporter$G, "component"),
  head: () => ({
    meta: [{
      title: "Innrly Pay — Hotel AP Automation & Virtual Cards"
    }, {
      name: "description",
      content: "Built for hotel A/P clerks. Replace paper checks with Virtual Cards and ACH. Invoices captured, approved, paid, and reconciled in one workflow — included free with every plan."
    }, {
      property: "og:title",
      content: "Innrly Pay — Hotel AP Automation"
    }, {
      property: "og:description",
      content: "The A/P clerk's full week, done in an afternoon. Virtual Cards + ACH, free with every plan."
    }, {
      property: "og:url",
      content: "/solutions/innrly-pay"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/solutions/innrly-pay"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Innrly Pay",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        url: "/solutions/innrly-pay",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD"
        }
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Solutions",
      url: "/solutions"
    }, {
      name: "Innrly Pay",
      url: "/solutions/innrly-pay"
    }])]
  })
});
const $$splitComponentImporter$F = () => import("./solutions.financial-control-D2y-ETwz.js");
const Route$G = createFileRoute("/solutions/financial-control")({
  component: lazyRouteComponent($$splitComponentImporter$F, "component"),
  head: () => ({
    meta: [{
      title: "Hotel Accounting Reconciliation Software | Innrly"
    }, {
      name: "description",
      content: "Work the exceptions, not the entire ledger. Automated OTA, bank, A/R reconciliation built for hotel CFOs and controllers across multi-property portfolios."
    }, {
      property: "og:title",
      content: "Hotel Accounting Reconciliation for Controllers | Innrly"
    }, {
      property: "og:description",
      content: "An exceptions-first ledger for hotel finance teams — recover the dollars hidden in the noise."
    }, {
      property: "og:url",
      content: "/solutions/financial-control"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/solutions/financial-control"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Innrly Financial Control",
        applicationCategory: "FinanceApplication",
        operatingSystem: "Web",
        url: "/solutions/financial-control",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD"
        }
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Solutions",
      url: "/solutions"
    }, {
      name: "Financial Control",
      url: "/solutions/financial-control"
    }])]
  })
});
const $$splitComponentImporter$E = () => import("./solutions.expense-entries-lAumlE9T.js");
const Route$F = createFileRoute("/solutions/expense-entries")({
  component: lazyRouteComponent($$splitComponentImporter$E, "component"),
  head: () => ({
    meta: [{
      title: "Expense Entries — Receipts to Your Accounting System | Innrly"
    }, {
      name: "description",
      content: "Record expense tickets, credit card charges, and auto-paid invoices in Innrly — synced straight to your accounting system (QuickBooks, M3, Sage Intacct, and others) as already-spent transactions."
    }, {
      property: "og:title",
      content: "Expense Entries — Direct to Your GL"
    }, {
      property: "og:description",
      content: "Capture credit card charges and auto-paid invoices once. Innrly syncs them to your accounting system as expense items."
    }, {
      property: "og:url",
      content: "/solutions/expense-entries"
    }, {
      property: "og:image",
      content: "https://www.innrly.com/og/expense-entries.jpg"
    }, {
      property: "og:image:alt",
      content: "The $400 invoice no one coded. We found it."
    }, {
      name: "twitter:image",
      content: "https://www.innrly.com/og/expense-entries.jpg"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/solutions/expense-entries"
    }],
    scripts: [breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Solutions",
      url: "/solutions"
    }, {
      name: "Expense Entries",
      url: "/solutions/expense-entries"
    }])]
  })
});
const $$splitComponentImporter$D = () => import("./solutions.document-vault-C74K3TbT.js");
const Route$E = createFileRoute("/solutions/document-vault")({
  component: lazyRouteComponent($$splitComponentImporter$D, "component"),
  head: () => ({
    meta: [{
      title: "Document Vault — Hotel Document Storage | Innrly"
    }, {
      name: "description",
      content: "Every night-audit pack, vendor invoice, and franchise report auto-dropped onto a daily calendar. Upload extras to any day. Searchable, secure, and always ready for audit."
    }, {
      property: "og:title",
      content: "Document Vault — Calendar view of every document"
    }, {
      property: "og:description",
      content: "Daily PMS night-audit files land automatically. Add manual uploads to any day. Built for hotel back-office teams."
    }, {
      property: "og:url",
      content: "/solutions/document-vault"
    }, {
      property: "og:image",
      content: "https://www.innrly.com/og/document-vault.jpg"
    }, {
      property: "og:image:alt",
      content: "Every folio, W-9, and STR report — in one place, on time."
    }, {
      name: "twitter:image",
      content: "https://www.innrly.com/og/document-vault.jpg"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/solutions/document-vault"
    }],
    scripts: [breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Solutions",
      url: "/solutions"
    }, {
      name: "Document Vault",
      url: "/solutions/document-vault"
    }])]
  })
});
const $$splitComponentImporter$C = () => import("./solutions.business-intelligence-BSV6xdQ9.js");
const Route$D = createFileRoute("/solutions/business-intelligence")({
  component: lazyRouteComponent($$splitComponentImporter$C, "component"),
  head: () => ({
    meta: [{
      title: "Hotel Business Intelligence Software | Innrly"
    }, {
      name: "description",
      content: "The portfolio sits on your screen before coffee. Real-time dashboards, STR benchmarking, and rate-shop intelligence for multi-property hotel owners and VPs of Operations."
    }, {
      property: "og:title",
      content: "Hotel Business Intelligence for Multi-Property Owners | Innrly"
    }, {
      property: "og:description",
      content: "One screen for the whole portfolio. Built for owners and VPs of Operations who refuse to wait for month-end."
    }, {
      property: "og:url",
      content: "/solutions/business-intelligence"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/solutions/business-intelligence"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Innrly Business Intelligence",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "/solutions/business-intelligence",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD"
        }
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Solutions",
      url: "/solutions"
    }, {
      name: "Business Intelligence",
      url: "/solutions/business-intelligence"
    }])]
  })
});
const $$splitComponentImporter$B = () => import("./services.accountability-pack-BYYjrbgv.js");
const Route$C = createFileRoute("/services/accountability-pack")({
  component: lazyRouteComponent($$splitComponentImporter$B, "component"),
  head: () => ({
    meta: [{
      title: "Accountability Pack — Done-for-You Back-Office | Innrly"
    }, {
      name: "description",
      content: "Add Innrly's Accountability Pack to your subscription: data verification, franchise reporting, Green Engage, CLC reconciliation, and manual entry — handled by our team."
    }, {
      property: "og:title",
      content: "Innrly Accountability Pack — Services beyond software"
    }, {
      property: "og:description",
      content: "Per-property add-on. Our team verifies, reconciles, and files the back-office work your in-house team doesn't have time for."
    }, {
      property: "og:url",
      content: "/services/accountability-pack"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/services/accountability-pack"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Innrly Accountability Pack",
        serviceType: "Hotel back-office data verification and reporting",
        provider: {
          "@type": "Organization",
          name: "Innrly"
        },
        areaServed: "US",
        offers: {
          "@type": "Offer",
          priceSpecification: {
            "@type": "PriceSpecification",
            priceCurrency: "USD",
            description: "Per-property pricing — contact sales"
          }
        }
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Services",
      url: "/services"
    }, {
      name: "Accountability Pack",
      url: "/services/accountability-pack"
    }])]
  })
});
const $$splitComponentImporter$A = () => import("./legal.terms-Dgf_Pcli.js");
const Route$B = createFileRoute("/legal/terms")({
  component: lazyRouteComponent($$splitComponentImporter$A, "component"),
  head: () => ({
    meta: [{
      title: "Terms of Service & Software License — Innrly"
    }, {
      name: "description",
      content: "Terms of Service and Software License governing access to and use of the Innrly hotel back-office platform."
    }, {
      property: "og:title",
      content: "Terms of Service & Software License — Innrly"
    }, {
      property: "og:url",
      content: "/legal/terms"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/legal/terms"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Terms of Service & Software License — Innrly",
        url: "/legal/terms",
        isPartOf: {
          "@type": "WebSite",
          name: "Innrly",
          url: "/"
        }
      })
    }]
  })
});
const $$splitComponentImporter$z = () => import("./legal.subscription-H2LzUyey.js");
const Route$A = createFileRoute("/legal/subscription")({
  component: lazyRouteComponent($$splitComponentImporter$z, "component"),
  head: () => ({
    meta: [{
      title: "Subscription Services Agreement — Innrly"
    }, {
      name: "description",
      content: "Commercial terms for Innrly subscriptions: trial, monthly and annual plans, fees, renewal, suspension, data ownership, and termination."
    }, {
      property: "og:title",
      content: "Subscription Services Agreement — Innrly"
    }, {
      property: "og:description",
      content: "Master commercial terms for hotel operators subscribing to the Innrly platform."
    }, {
      property: "og:url",
      content: "/legal/subscription"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/legal/subscription"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Subscription Services Agreement — Innrly",
        url: "/legal/subscription",
        isPartOf: {
          "@type": "WebSite",
          name: "Innrly",
          url: "/"
        }
      })
    }]
  })
});
const $$splitComponentImporter$y = () => import("./legal.security-DRfh5h0y.js");
const Route$z = createFileRoute("/legal/security")({
  component: lazyRouteComponent($$splitComponentImporter$y, "component"),
  head: () => ({
    meta: [{
      title: "Security — Innrly"
    }, {
      name: "description",
      content: "How Innrly protects your data: encryption, access controls, audit, and compliance."
    }, {
      property: "og:title",
      content: "Security — Innrly"
    }, {
      property: "og:url",
      content: "/legal/security"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/legal/security"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Security — Innrly",
        url: "/legal/security",
        isPartOf: {
          "@type": "WebSite",
          name: "Innrly",
          url: "/"
        }
      })
    }]
  })
});
const $$splitComponentImporter$x = () => import("./legal.privacy-BJxV29ql.js");
const Route$y = createFileRoute("/legal/privacy")({
  component: lazyRouteComponent($$splitComponentImporter$x, "component"),
  head: () => ({
    meta: [{
      title: "Privacy Policy — Innrly"
    }, {
      name: "description",
      content: "How Innrly collects, uses, and protects your information. GDPR, CCPA/CPRA, and TCPA-aligned privacy practices for hotel operators."
    }, {
      property: "og:title",
      content: "Privacy Policy — Innrly"
    }, {
      property: "og:description",
      content: "GDPR, CCPA/CPRA, and TCPA-aligned privacy practices."
    }, {
      property: "og:url",
      content: "/legal/privacy"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/legal/privacy"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Privacy Policy — Innrly",
        url: "/legal/privacy",
        isPartOf: {
          "@type": "WebSite",
          name: "Innrly",
          url: "/"
        }
      })
    }]
  })
});
const $$splitComponentImporter$w = () => import("./legal.cookies-YlnEEO7v.js");
const Route$x = createFileRoute("/legal/cookies")({
  component: lazyRouteComponent($$splitComponentImporter$w, "component"),
  head: () => ({
    meta: [{
      title: "Cookie Policy — Innrly"
    }, {
      name: "description",
      content: "How Innrly uses cookies and similar technologies on innrly.com — the categories we set, why we set them, and how you can control them."
    }, {
      property: "og:title",
      content: "Cookie Policy — Innrly"
    }, {
      property: "og:description",
      content: "Innrly's cookie categories, third-party services, and browser-level controls."
    }, {
      property: "og:url",
      content: "/legal/cookies"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/legal/cookies"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Cookie Policy — Innrly",
        url: "/legal/cookies",
        isPartOf: {
          "@type": "WebSite",
          name: "Innrly",
          url: "/"
        }
      })
    }]
  })
});
const $$splitComponentImporter$v = () => import("./legal.accessibility-D32851I1.js");
const Route$w = createFileRoute("/legal/accessibility")({
  component: lazyRouteComponent($$splitComponentImporter$v, "component"),
  head: () => ({
    meta: [{
      title: "Accessibility Statement — Innrly"
    }, {
      name: "description",
      content: "Innrly's commitment to digital accessibility, our WCAG 2.1 AA target, and how to report accessibility issues."
    }, {
      property: "og:title",
      content: "Accessibility Statement — Innrly"
    }, {
      property: "og:description",
      content: "How Innrly approaches accessibility across our hotel back-office platform and marketing site."
    }, {
      property: "og:url",
      content: "/legal/accessibility"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/legal/accessibility"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Accessibility Statement — Innrly",
        url: "/legal/accessibility",
        isPartOf: {
          "@type": "WebSite",
          name: "Innrly",
          url: "/"
        }
      })
    }]
  })
});
const $$splitComponentImporter$u = () => import("./integrations.sage-intacct-BFKtKXwK.js");
const Route$v = createFileRoute("/integrations/sage-intacct")({
  component: lazyRouteComponent($$splitComponentImporter$u, "component"),
  head: () => ({
    meta: [{
      title: "Innrly + Sage Intacct Integration | Innrly"
    }, {
      name: "description",
      content: "Innrly syncs with Sage Intacct as your accounting system of record. Talk to us about your portfolio's setup and mapping."
    }, {
      property: "og:title",
      content: "Innrly + Sage Intacct"
    }, {
      property: "og:description",
      content: "Sync Innrly with Sage Intacct as your accounting system of record."
    }, {
      property: "og:url",
      content: "/integrations/sage-intacct"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/integrations/sage-intacct"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        name: "Innrly + Sage Intacct",
        applicationCategory: "BusinessApplication",
        operatingSystem: "Web",
        url: "/integrations/sage-intacct",
        offers: {
          "@type": "Offer",
          priceCurrency: "USD"
        }
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Integrations",
      url: "/integrations"
    }, {
      name: "Sage Intacct",
      url: "/integrations/sage-intacct"
    }])]
  })
});
const faqs$e = [{
  q: "Is the QuickBooks integration two-way?",
  a: "Yes. Full bi-directional sync. Innrly pushes GL-coded invoices and journal entries into QuickBooks, and reads back vendors, chart of accounts, classes, and posted balances so both systems stay aligned."
}, {
  q: "Which versions of QuickBooks are supported?",
  a: "QuickBooks Online is fully supported with the two-way sync. Talk to us if you're on QuickBooks Desktop — we'll walk through the options."
}, {
  q: "Do I keep QuickBooks as my accounting system?",
  a: "Yes. QuickBooks stays your system of record. Innrly handles invoice capture, GL coding, OTA reconciliation, night audit, Bill Pay, and BI — then syncs cleanly with QuickBooks."
}, {
  q: "What about multi-property?",
  a: "Innrly supports portfolios across multiple QuickBooks files or a single multi-class file. Mapping is handled per property during onboarding."
}];
const $$splitComponentImporter$t = () => import("./integrations.quickbooks-SqTmGzDv.js");
const Route$u = createFileRoute("/integrations/quickbooks")({
  component: lazyRouteComponent($$splitComponentImporter$t, "component"),
  head: () => ({
    meta: [{
      title: "Innrly + QuickBooks — Two-Way Sync for Hotels | Innrly"
    }, {
      name: "description",
      content: "Full two-way QuickBooks Online sync. Innrly pushes GL-coded invoices and reads back vendors and accounts — keeping both systems aligned for multi-property hotel operators."
    }, {
      property: "og:title",
      content: "Innrly + QuickBooks — Two-Way Sync"
    }, {
      property: "og:description",
      content: "Bi-directional QuickBooks integration for hotel back-office automation."
    }, {
      property: "og:url",
      content: "/integrations/quickbooks"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/integrations/quickbooks"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$e.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Integrations",
      url: "/integrations"
    }, {
      name: "QuickBooks",
      url: "/integrations/quickbooks"
    }])]
  })
});
const faqs$d = [{
  q: "Does Innrly read directly from Opera?",
  a: "Yes. Innrly pulls the nightly audit pack, manager reports, and folio data from Opera (cloud and on-premise) so the back office sees Opera the same way the property does."
}, {
  q: "Is this an Oracle Hospitality partner integration?",
  a: "Innrly works with the standard Opera export and reporting interfaces used by certified integrators. Contact us for details on your specific Opera deployment."
}, {
  q: "Do you support both Opera Cloud and Opera PMS (v5)?",
  a: "Yes. Both deployments are supported. Setup details vary — we'll walk through your version during onboarding."
}, {
  q: "What happens after Opera data lands in Innrly?",
  a: "Innrly normalizes the data, reconciles against bank and OTAs, runs night audit checks, captures A/P invoices, and pushes coded entries into your accounting system (M3, QuickBooks, Sage Intacct)."
}];
const $$splitComponentImporter$s = () => import("./integrations.opera-snUBJB0t.js");
const Route$t = createFileRoute("/integrations/opera")({
  component: lazyRouteComponent($$splitComponentImporter$s, "component"),
  head: () => ({
    meta: [{
      title: "Innrly + Oracle Opera Integration | Innrly"
    }, {
      name: "description",
      content: "Pull Opera night-audit packs, folios, and manager reports into Innrly. Reconcile, audit, and push to your accounting system — across Opera Cloud and Opera PMS."
    }, {
      property: "og:title",
      content: "Innrly + Oracle Opera"
    }, {
      property: "og:description",
      content: "Hotel back-office automation on top of Oracle Opera."
    }, {
      property: "og:url",
      content: "/integrations/opera"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/integrations/opera"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$d.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Integrations",
      url: "/integrations"
    }, {
      name: "Opera",
      url: "/integrations/opera"
    }])]
  })
});
const faqs$c = [{
  q: "How does Innrly connect to Mews?",
  a: "Through the Mews integration interface used by certified back-office partners. Setup typically takes 1–2 weeks per portfolio."
}, {
  q: "Is Mews still my system of record?",
  a: "Yes. Mews stays your PMS. Innrly handles the reconciliation, A/P, labor, and BI workflows that sit behind it."
}, {
  q: "Do you support Mews multi-property?",
  a: "Yes. Each Mews enterprise / property maps cleanly into Innrly's portfolio model with consolidated and per-property reporting."
}];
const $$splitComponentImporter$r = () => import("./integrations.mews-cK_V0_5e.js");
const Route$s = createFileRoute("/integrations/mews")({
  component: lazyRouteComponent($$splitComponentImporter$r, "component"),
  head: () => ({
    meta: [{
      title: "Innrly + Mews Integration | Innrly"
    }, {
      name: "description",
      content: "Connect Mews to Innrly for automated daily reconciliation, A/P, labor, and BI across your portfolio."
    }, {
      property: "og:title",
      content: "Innrly + Mews"
    }, {
      property: "og:description",
      content: "Hotel back-office automation on top of Mews."
    }, {
      property: "og:url",
      content: "/integrations/mews"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/integrations/mews"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$c.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Integrations",
      url: "/integrations"
    }, {
      name: "Mews",
      url: "/integrations/mews"
    }])]
  })
});
const faqs$b = [{
  q: "Is this an official M3 integration?",
  a: "Yes. Innrly is an officially certified M3 integration partner. Invoices captured and GL-coded in Innrly push directly into M3 as the system of record."
}, {
  q: "Is the integration two-way or push-only?",
  a: "Push-only today. Innrly sends GL-coded invoices into M3; M3 remains the system of record for your general ledger, financials, and reporting."
}, {
  q: "What does Innrly actually do for M3 customers?",
  a: "Innrly captures invoices via OCR and email-in, auto-populates header and line data, applies your GL codes, routes for approval, and pushes the completed invoice into M3 — eliminating manual data entry."
}, {
  q: "Do I keep M3 for accounting?",
  a: "Yes. M3 stays your accounting system of record. Innrly sits in front as the back-office automation layer: invoice capture, GL coding, OTA reconciliation, night audit, Bill Pay, BI, and labor."
}, {
  q: "How long does it take to connect?",
  a: "Most properties are connected and pushing live invoices within 2–4 weeks."
}];
const $$splitComponentImporter$q = () => import("./integrations.m3-Bharu9MW.js");
const Route$r = createFileRoute("/integrations/m3")({
  component: lazyRouteComponent($$splitComponentImporter$q, "component"),
  head: () => ({
    meta: [{
      title: "Innrly + M3 — Auto GL-Code & Push Invoices | Innrly"
    }, {
      name: "description",
      content: "Officially certified M3 integration. Innrly auto-populates, GL-codes, and pushes invoices into M3 — eliminating manual A/P data entry for hotel operators."
    }, {
      property: "og:title",
      content: "Innrly + M3 — Certified Invoice Integration"
    }, {
      property: "og:description",
      content: "Auto GL-code and push invoices from Innrly into M3. Officially certified integration."
    }, {
      property: "og:url",
      content: "/integrations/m3"
    }, {
      property: "og:image",
      content: "https://www.innrly.com/og/integrations-m3.jpg"
    }, {
      property: "og:image:alt",
      content: "The M3 data you already have — finally working for you."
    }, {
      name: "twitter:image",
      content: "https://www.innrly.com/og/integrations-m3.jpg"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/integrations/m3"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$b.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Integrations",
      url: "/integrations"
    }, {
      name: "M3",
      url: "/integrations/m3"
    }])]
  })
});
const faqs$a = [{
  q: "Is Innrly a competitor to Inn-flow?",
  a: "No. Inn-flow is a full hotel accounting system — general ledger, AP, AR, payroll, bank reconciliation, financial statements. Innrly is the back-office automation and data layer that sits in front of an accounting system. The right comparison is 'Innrly + Inn-flow' — not 'Innrly: alternative to Inn-flow'. Innrly does for Inn-flow what it already does for M3, QuickBooks, and Sage Intacct: capture invoices, auto-code them, reconcile OTAs, run night audit, and push clean data into the GL."
}, {
  q: "Is the Innrly + Inn-flow integration available today?",
  a: "An API-based push integration is on our roadmap. If you're an Inn-flow customer interested in early access, talk to us — we're prioritizing the integration based on customer demand."
}, {
  q: "Will the integration be two-way or push-only?",
  a: "Push-only at launch, mirroring how Innrly integrates with M3 and Sage Intacct: Innrly captures and codes the source documents, then pushes the completed entries into Inn-flow. Inn-flow remains the system of record for your general ledger and financials."
}, {
  q: "Do I keep Inn-flow for accounting?",
  a: "Yes. Inn-flow stays your accounting system of record. Innrly sits in front as the automation layer — invoice capture and GL coding, OTA reconciliation, night audit, Bill Pay, BI dashboards, and labor — feeding clean, audit-ready data into Inn-flow."
}, {
  q: "What does an Inn-flow customer actually gain from adding Innrly?",
  a: "Time. Innrly eliminates the manual A/P keying, the OTA reconciliation spreadsheets, the morning-after audit chase, and the labor-snapshot Frankenstack. Your Inn-flow GL gets cleaner data faster, and your GMs get a 5-minute daily snapshot they don't have today."
}, {
  q: "How is this different from Innrly + M3 or Innrly + QuickBooks?",
  a: "Same pattern. Innrly is a back-office automation layer that pushes into whatever accounting system you run. M3, QuickBooks, Sage Intacct, and Inn-flow are all valid systems of record — Innrly's job is to feed them, not replace them."
}];
const $$splitComponentImporter$p = () => import("./integrations.inn-flow-Dv58-LoP.js");
const Route$q = createFileRoute("/integrations/inn-flow")({
  component: lazyRouteComponent($$splitComponentImporter$p, "component"),
  head: () => ({
    meta: [{
      title: "Innrly + Inn-flow — Automate A/P, OTA Recon & Audit Into Inn-flow | Innrly"
    }, {
      name: "description",
      content: "Innrly is the automation layer for Inn-flow customers — auto-coded invoices, OTA reconciliation, night audit, and labor data pushed into your Inn-flow GL. API integration on the roadmap."
    }, {
      property: "og:title",
      content: "Innrly + Inn-flow — The Automation Layer for Inn-flow"
    }, {
      property: "og:description",
      content: "Inn-flow stays your GL. Innrly captures, codes, and pushes clean data into it. API integration on the roadmap."
    }, {
      property: "og:url",
      content: "/integrations/inn-flow"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/integrations/inn-flow"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$a.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Integrations",
      url: "/integrations"
    }, {
      name: "Inn-flow",
      url: "/integrations/inn-flow"
    }])]
  })
});
const faqs$9 = [{
  q: "Does Innrly read directly from Cloudbeds?",
  a: "Yes. Innrly pulls daily reports and folio data from Cloudbeds so your back-office reconciliation and reporting stays current automatically."
}, {
  q: "Do I keep Cloudbeds as the PMS?",
  a: "Yes. Cloudbeds remains your PMS and system of record at the property. Innrly sits behind it — handling reconciliation, A/P, labor, and BI."
}, {
  q: "How does multi-property work?",
  a: "Each Cloudbeds property maps to a portfolio entity in Innrly. Reporting consolidates across the portfolio while drill-downs go back to the individual Cloudbeds tenant."
}];
const $$splitComponentImporter$o = () => import("./integrations.cloudbeds-CdH3akwr.js");
const Route$p = createFileRoute("/integrations/cloudbeds")({
  component: lazyRouteComponent($$splitComponentImporter$o, "component"),
  head: () => ({
    meta: [{
      title: "Innrly + Cloudbeds Integration | Innrly"
    }, {
      name: "description",
      content: "Connect Cloudbeds to Innrly for automated daily reconciliation, A/P, labor, and BI — across every property in your portfolio."
    }, {
      property: "og:title",
      content: "Innrly + Cloudbeds"
    }, {
      property: "og:description",
      content: "Hotel back-office automation on top of Cloudbeds."
    }, {
      property: "og:url",
      content: "/integrations/cloudbeds"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/integrations/cloudbeds"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$9.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Integrations",
      url: "/integrations"
    }, {
      name: "Cloudbeds",
      url: "/integrations/cloudbeds"
    }])]
  })
});
const faqs$8 = [{
  q: "Which select-service PMSes does Innrly support?",
  a: "OPERA Cloud, OnQ (Hilton), FOSSE (Marriott), choiceADVANTAGE, Visual Matrix, StayNTouch, and Cloudbeds — plus most other major systems. Most multi-brand portfolios run 3–5 PMSes and Innrly consolidates them into a single nightly P&L without forcing a system change."
}, {
  q: "Will Innrly work for a single Hampton Inn or Holiday Inn Express?",
  a: "Yes — Starter is built for single properties and small portfolios. The bigger wins compound at 5+ hotels (consolidated reporting, multi-PMS night audit, corporate-team leverage), but single-property select-service operators still save 5–10 hours per week."
}, {
  q: "How does Innrly handle brand-required reporting?",
  a: "Brand-mandated reports (Hilton, Marriott, IHG, Choice, Wyndham) stay where they are — Innrly doesn't replace them. It sits on top, normalizes the data, and produces the cross-brand corporate view your flag reports don't give you."
}, {
  q: "What's the typical onboarding timeline for a select-service portfolio?",
  a: "2–4 weeks for a 5–15 property portfolio. Week 1: PMS and accounting connections. Week 2: chart of accounts mapping and night-audit dry run. Weeks 3–4: parallel running and corporate report sign-off. No PMS migration required."
}];
const $$splitComponentImporter$n = () => import("./industries.select-service-CX3k6Iab.js");
const Route$o = createFileRoute("/industries/select-service")({
  head: () => ({
    meta: [{
      title: "Select-Service Hotels — Innrly"
    }, {
      name: "description",
      content: "Innrly for select-service hotels: automate night audits, consolidate multi-brand reporting, and run lean corporate teams across Hilton, IHG, Marriott, and Choice properties."
    }, {
      property: "og:title",
      content: "Select-Service Hotels — Innrly"
    }, {
      property: "og:description",
      content: "Multi-brand back-office automation built for select-service operators."
    }, {
      property: "og:url",
      content: "/industries/select-service"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/industries/select-service"
    }],
    scripts: [breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Industries",
      url: "/industries/select-service"
    }, {
      name: "Select-Service",
      url: "/industries/select-service"
    }]), {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$8.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$n, "component")
});
const faqs$7 = [{
  q: "Does Innrly support USALI 11th edition out of the box?",
  a: "Yes. The default chart of accounts ships USALI-aligned with departmental P&Ls, schedule of operated departments, and the supporting reconciliations auditors and ownership groups expect. No re-mapping work required at onboarding."
}, {
  q: "How does Innrly handle F&B and banquet reconciliation?",
  a: "POS integrations (Micros Simphony, Toast, Squirrel) push outlet-level F&B revenue and covers into Innrly nightly. Banquet event orders reconcile to the PMS and catering system, and variances surface the next morning instead of at month-end."
}, {
  q: "What about resort fees, spa, golf, and parking revenue?",
  a: "All ancillary revenue streams are first-class — separate departmental P&L lines, separate labor tracking, and separate reconciliation against the source system (spa management, golf POS, parking system)."
}, {
  q: "Can Innrly handle a single full-service property, or do I need a portfolio?",
  a: "Single property is fine. A standalone full-service hotel or resort typically saves 20–40 controller hours per month and recovers 0.5–2% of F&B revenue through reconciliation. Portfolio operators add multi-property consolidation on top."
}];
const $$splitComponentImporter$m = () => import("./industries.full-service-CkyvSwGE.js");
const Route$n = createFileRoute("/industries/full-service")({
  head: () => ({
    meta: [{
      title: "Full-Service Hotels — Innrly"
    }, {
      name: "description",
      content: "Innrly for full-service and resort hotels: F&B GL coding, banquet revenue reconciliation, multi-outlet labor, and USALI-aligned owner reporting — across OPERA, Infor, and Maestro."
    }, {
      property: "og:title",
      content: "Full-Service Hotels — Innrly"
    }, {
      property: "og:description",
      content: "Back-office automation for full-service and resort operators with F&B, banquets, and multi-outlet labor."
    }, {
      property: "og:url",
      content: "/industries/full-service"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/industries/full-service"
    }],
    scripts: [breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Industries",
      url: "/industries/full-service"
    }, {
      name: "Full-Service",
      url: "/industries/full-service"
    }]), {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$7.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$m, "component")
});
const faqs$6 = [{
  q: "How does Innrly handle multi-month folio revenue recognition?",
  a: "Long stays (30, 60, 90+ days) are recognized by night, not by check-out. Revenue, taxes, and fees post to the period each night belongs to, so a 60-day stay that spans two months splits cleanly across both monthly P&Ls without manual adjustment."
}, {
  q: "Does Innrly's labor model handle weekly housekeeping?",
  a: "Yes. MPOR benchmarks, schedule templates, and variance alerts are tuned to weekly tidies and full cleans rather than daily — the default cadence assumed by most labor tools breaks extended-stay productivity numbers."
}, {
  q: "What about direct-bill corporate accounts?",
  a: "Direct-bill A/R reconciles nightly. Contract rates audit against the folio, project rates flag against negotiated terms, and A/R aging produces a clean monthly statement per corporate account without three separate spreadsheets."
}, {
  q: "Which extended-stay brands does Innrly support?",
  a: "All major brand families — Marriott (Residence Inn, TownePlace, Element), Hilton (Homewood Suites, Home2 Suites), IHG (Staybridge Suites, Candlewood Suites), Choice (WoodSpring, MainStay, Suburban), and Wyndham (Hawthorn Suites). Multi-brand portfolios consolidate into one nightly P&L."
}];
const $$splitComponentImporter$l = () => import("./industries.extended-stay-DtcrPMuN.js");
const Route$m = createFileRoute("/industries/extended-stay")({
  head: () => ({
    meta: [{
      title: "Extended-Stay Hotels — Innrly"
    }, {
      name: "description",
      content: "Innrly for extended-stay portfolios: long-stay folio handling, weekly housekeeping cycles, low-labor models, and corporate-account reconciliation across Residence Inn, Homewood, WoodSpring, and Candlewood."
    }, {
      property: "og:title",
      content: "Extended-Stay Hotels — Innrly"
    }, {
      property: "og:description",
      content: "Back-office automation tuned to the low-labor, long-folio reality of extended-stay operations."
    }, {
      property: "og:url",
      content: "/industries/extended-stay"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/industries/extended-stay"
    }],
    scripts: [breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Industries",
      url: "/industries/extended-stay"
    }, {
      name: "Extended-Stay",
      url: "/industries/extended-stay"
    }]), {
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$6.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter$l, "component")
});
const $$splitComponentImporter$k = () => import("./control-hub.trials-dcUk9fan.js");
const Route$l = createFileRoute("/control-hub/trials")({
  component: lazyRouteComponent($$splitComponentImporter$k, "component"),
  head: () => ({
    meta: [{
      title: "Innrly Free Trials — Admin"
    }, {
      name: "description",
      content: "Manage free trial applications."
    }]
  })
});
const $$splitComponentImporter$j = () => import("./control-hub.settings-DK4fnjus.js");
const Route$k = createFileRoute("/control-hub/settings")({
  component: lazyRouteComponent($$splitComponentImporter$j, "component"),
  head: () => ({
    meta: [{
      title: "Innrly Admin Settings"
    }, {
      name: "description",
      content: "Configure platform settings, notification channels, and webhooks."
    }]
  })
});
const $$splitComponentImporter$i = () => import("./control-hub.seo-CaD61XBz.js");
const Route$j = createFileRoute("/control-hub/seo")({
  component: lazyRouteComponent($$splitComponentImporter$i, "component")
});
const $$splitComponentImporter$h = () => import("./control-hub.onboarding-DMZKfm-6.js");
const Route$i = createFileRoute("/control-hub/onboarding")({
  component: lazyRouteComponent($$splitComponentImporter$h, "component"),
  head: () => ({
    meta: [{
      title: "Innrly Onboarding Completions — Admin"
    }, {
      name: "description",
      content: "Manage completed customer onboarding details."
    }]
  })
});
const $$splitComponentImporter$g = () => import("./control-hub.newsletters-aoC6UouW.js");
const Route$h = createFileRoute("/control-hub/newsletters")({
  component: lazyRouteComponent($$splitComponentImporter$g, "component"),
  head: () => ({
    meta: [{
      title: "Innrly Newsletter Subscribers — Admin"
    }, {
      name: "description",
      content: "Manage newsletter signups."
    }]
  })
});
const $$splitComponentImporter$f = () => import("./control-hub.menus-Dd_i11w5.js");
const Route$g = createFileRoute("/control-hub/menus")({
  component: lazyRouteComponent($$splitComponentImporter$f, "component")
});
const $$splitComponentImporter$e = () => import("./control-hub.login-DfOah83n.js");
const Route$f = createFileRoute("/control-hub/login")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component"),
  head: () => ({
    meta: [{
      title: "Innrly Admin Login"
    }, {
      name: "description",
      content: "Access the Innrly administrative console."
    }]
  })
});
const $$splitComponentImporter$d = () => import("./control-hub.integrations-BaEnM9S0.js");
const Route$e = createFileRoute("/control-hub/integrations")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./control-hub.blogs-Bonkq6UA.js");
const Route$d = createFileRoute("/control-hub/blogs")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const faqs$5 = [{
  q: "Is ProfitSage a direct Innrly competitor?",
  a: "ProfitSage is primarily a hotel BI and data-warehousing product — daily flash reports, STR feeds, forecasting, and labor analytics. Innrly is a broader back-office platform that includes BI plus A/P automation, night audit, OTA reconciliation, Face-ID TimeClock, and payroll. Buyers shopping ProfitSage for BI alone should know Innrly covers the same BI surface and several layers beyond it."
}, {
  q: "How do they compare on pricing?",
  a: "Innrly publishes pricing at $199/property/month with a 90-day full-access free trial. ProfitSage is quote-based with no published free trial."
}, {
  q: "What about BI dashboards specifically?",
  a: "Both produce daily flash reports, forecasts, STR overlays, and segment performance. Innrly's BI runs on the same data model as A/P, night audit, and labor — so a labor variance on the dashboard links directly to the underlying scheduling, TimeClock punches, and payroll registers without exporting between systems."
}, {
  q: "Does Innrly replace ProfitSage?",
  a: "If you bought ProfitSage as a standalone BI layer over your PMS, Innrly's BI module covers the same use cases and you get A/P, night audit, OTA reconciliation, TimeClock, and payroll on the same platform. If you bought ProfitSage as part of a larger Actabl rollout, the right comparison is broader — talk to us and we'll be honest about fit."
}, {
  q: "What about A/P, night audit, and labor — not in ProfitSage's core?",
  a: "Right. ProfitSage focuses on BI and forecasting. A/P automation, night audit, OTA reconciliation, Face-ID TimeClock, housekeeping productivity matrix, and payroll are all native in Innrly on the same data model — no separate purchase required."
}];
const $$splitComponentImporter$b = () => import("./compare.innrly-vs-profitsage-CvBQfwR_.js");
const Route$c = createFileRoute("/compare/innrly-vs-profitsage")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component"),
  head: () => ({
    meta: [{
      title: "Innrly: alternative to ProfitSage: 2026 Comparison | Innrly"
    }, {
      name: "description",
      content: "How Innrly and ProfitSage compare for multi-property hotel operators — BI dashboards, forecasting, and what each platform covers beyond reporting."
    }, {
      property: "og:title",
      content: "Innrly: alternative to ProfitSage — How They Compare"
    }, {
      property: "og:description",
      content: "BI overlap plus the back-office layers ProfitSage doesn't cover natively."
    }, {
      property: "og:url",
      content: "/compare/innrly-vs-profitsage"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/compare/innrly-vs-profitsage"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$5.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Compare",
      url: "/compare"
    }, {
      name: "Innrly: alternative to ProfitSage",
      url: "/compare/innrly-vs-profitsage"
    }])]
  })
});
const faqs$4 = [{
  q: "Do I need to sign an annual contract with Innrly?",
  a: "No. Innrly is month-to-month with no annual commitment. An annual plan is available and includes onboarding. Otelier is typically sold on annual contracts negotiated per module."
}, {
  q: "Is there an onboarding or implementation fee?",
  a: "Onboarding is included with Innrly's annual plan. On month-to-month, onboarding is quoted separately. Otelier deployments commonly include implementation fees that scale with the number of modules being rolled out."
}, {
  q: "How does the free trial work?",
  a: "Innrly offers a 90-day free trial with full feature access and no credit card required, so you can validate value on your own data before paying anything. Otelier does not publish a free trial."
}, {
  q: "What's different about Innrly's TimeClock?",
  a: "Innrly's Face-ID TimeClock is built into the same platform as labor scheduling and a Housekeeping productivity matrix — minutes per occupied room (MPOR), rooms cleaned per shift, and variance vs standard — so house attendants, supervisors, and GMs see the same numbers. Otelier does not publish an equivalent native Face-ID TimeClock or built-in housekeeping productivity matrix."
}, {
  q: "What about the rest of the back office?",
  a: "Both platforms cover night audit, OTA reconciliation, A/P automation, BI dashboards, Bill Pay, payroll, and rate shopping. The differences worth comparing are commercial terms (contracts, fees, trial), the integrated Face-ID TimeClock with a Housekeeping productivity matrix, and how the platforms are shaped — Innrly on a single codebase, Otelier as a unified brand over previously separate products."
}];
const $$splitComponentImporter$a = () => import("./compare.innrly-vs-otelier-DHdODS4f.js");
const Route$b = createFileRoute("/compare/innrly-vs-otelier")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component"),
  head: () => ({
    meta: [{
      title: "Innrly: alternative to Otelier: How They Compare (2026) | Innrly"
    }, {
      name: "description",
      content: "How Innrly and Otelier compare for multi-property hotel operators — commercial terms, deployment, TimeClock with built-in housekeeping productivity matrix, and integrations."
    }, {
      property: "og:title",
      content: "Innrly: alternative to Otelier — How They Compare"
    }, {
      property: "og:description",
      content: "An informative comparison of Innrly and Otelier for multi-property hotel operators."
    }, {
      property: "og:url",
      content: "/compare/innrly-vs-otelier"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/compare/innrly-vs-otelier"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$4.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Compare",
      url: "/compare"
    }, {
      name: "Innrly: alternative to Otelier",
      url: "/compare/innrly-vs-otelier"
    }])]
  })
});
const faqs$3 = [{
  q: "Is Nimble Property a direct competitor to Innrly?",
  a: "Yes. Both target multi-property hotel back-office automation — A/P, night audit, BI dashboards, and labor. The differences are commercial terms, deployment speed, and how each platform handles labor + housekeeping productivity."
}, {
  q: "How do the platforms compare on pricing?",
  a: "Innrly publishes pricing at $199/property/month with a 90-day free trial. Nimble Property is quote-based with no published per-property pricing and no public free trial."
}, {
  q: "Which is faster to deploy?",
  a: "Innrly typically takes 2–4 weeks for a multi-property portfolio. Nimble Property deployments are commonly 45–90 days depending on the number of modules and integrations."
}, {
  q: "Do both platforms cover labor and housekeeping?",
  a: "Both cover labor scheduling. Innrly ships a native Face-ID TimeClock plus a Housekeeping productivity matrix (MPOR, rooms-per-shift, variance vs standard) built into the same product as scheduling and payroll. Nimble Property partners for time-clock hardware and does not publish an equivalent built-in housekeeping productivity matrix."
}, {
  q: "What about A/P automation?",
  a: "Both ingest invoices via OCR and route for approval. Innrly's exception ledger surfaces only the transactions that need attention, and supports auto-pull from vendor portals as well as email and paper. Both push approved invoices to common GLs (QuickBooks, M3, Sage Intacct)."
}];
const $$splitComponentImporter$9 = () => import("./compare.innrly-vs-nimble-zjp_M1UG.js");
const Route$a = createFileRoute("/compare/innrly-vs-nimble")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component"),
  head: () => ({
    meta: [{
      title: "Innrly: alternative to Nimble Property: How They Compare (2026) | Innrly"
    }, {
      name: "description",
      content: "Side-by-side comparison of Innrly and Nimble Property for multi-property hotel operators — pricing, deployment, TimeClock, housekeeping productivity, and A/P automation."
    }, {
      property: "og:title",
      content: "Innrly: alternative to Nimble Property — How They Compare"
    }, {
      property: "og:description",
      content: "Pricing, deployment speed, labor + housekeeping, and A/P automation compared."
    }, {
      property: "og:url",
      content: "/compare/innrly-vs-nimble"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/compare/innrly-vs-nimble"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$3.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Compare",
      url: "/compare"
    }, {
      name: "Innrly: alternative to Nimble",
      url: "/compare/innrly-vs-nimble"
    }])]
  })
});
const Route$9 = createFileRoute("/compare/innrly-vs-m3")({
  beforeLoad: () => {
    throw redirect({ to: "/integrations/m3", statusCode: 301 });
  },
  server: {
    handlers: {
      GET: async () => new Response(null, {
        status: 301,
        headers: { Location: "/integrations/m3" }
      })
    }
  }
});
const faqs$2 = [{
  q: "Is Innrly a competitor to Inn-flow?",
  a: "No. Inn-flow is a full hotel accounting system (General Ledger, AP, AR, payroll, bank reconciliation, financials). Innrly is a back-office automation and data-capture layer that sits in front of the accounting system. The best setup is 'Innrly + Inn-flow' — not 'Innrly instead of Inn-flow'. Innrly auto-codes invoices, reconciles OTAs, runs night audit, and pushes clean entries into Inn-flow."
}, {
  q: "How do they compare on pricing?",
  a: "Innrly publishes pricing at $199/property/month with a 90-day full-access free trial. Inn-flow is quote-based with no published free trial and typically requires annual contracts."
}, {
  q: "What is different about Innrly's labor and TimeClock?",
  a: "Innrly includes a native Face-ID TimeClock with a Housekeeping productivity matrix (MPOR, rooms cleaned per shift, and variance vs standard) in the same product. Inn-flow has labor scheduling but does not publish an equivalent native Face-ID TimeClock with deep housekeeping metrics."
}, {
  q: "What does an Inn-flow customer gain from adding Innrly?",
  a: "Time and accuracy. Innrly eliminates manual AP keying, spreadsheet-based OTA reconciliation, and daily night-audit chases. Your GMs get a 5-minute labor snapshot, and your accounting team gets pre-coded, reconciled data pushed directly into Inn-flow."
}, {
  q: "Can Innrly replace Inn-flow completely?",
  a: "No. If you need a hotel General Ledger and financial statements, you keep Inn-flow (or QuickBooks/M3) as your system of record. Innrly is the automation layer in front that does the heavy lifting, saving your team hours of manual entry."
}];
const $$splitComponentImporter$8 = () => import("./compare.innrly-vs-inn-flow-C38rKW9Q.js");
const Route$8 = createFileRoute("/compare/innrly-vs-inn-flow")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component"),
  head: () => ({
    meta: [{
      title: "Innrly: alternative to Inn-flow: How They Compare (2026) | Innrly"
    }, {
      name: "description",
      content: "How Innrly and Inn-flow compare for hotel operators — pricing transparency, deployment speed, native Face-ID TimeClock, and GL integration."
    }, {
      property: "og:title",
      content: "Innrly: alternative to Inn-flow — How They Compare"
    }, {
      property: "og:description",
      content: "An informative comparison of Innrly and Inn-flow for multi-property hotel operators."
    }, {
      property: "og:url",
      content: "/compare/innrly-vs-inn-flow"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/compare/innrly-vs-inn-flow"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$2.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Compare",
      url: "/compare"
    }, {
      name: "Innrly: alternative to Inn-flow",
      url: "/compare/innrly-vs-inn-flow"
    }])]
  })
});
const faqs$1 = [{
  q: "How do Innrly and Aptech (Profitvue / Execuvue / Targetvue) compare?",
  a: "Aptech sells a multi-product suite — Profitvue for accounting, Execuvue for BI, Targetvue for budgeting/forecasting — that are licensed and onboarded separately. Innrly is one platform with one login covering BI, A/P, night audit, OTA reconciliation, labor, TimeClock, and payroll on a single data model."
}, {
  q: "Is Aptech's pricing public?",
  a: "No. Aptech is quote-based per module. Innrly publishes pricing at $199/property/month with a 90-day full-access free trial."
}, {
  q: "What about USALI reporting?",
  a: "Both platforms produce USALI-aligned reports. Innrly's USALI 11 owner package is auto-generated from a single chart of accounts mapped per property. Aptech's Profitvue is a dedicated hospitality GL that handles USALI natively but is licensed separately from Execuvue and Targetvue."
}, {
  q: "Which is faster to deploy?",
  a: "Innrly typically takes 2–4 weeks for a multi-property portfolio. Aptech multi-module deployments (Profitvue + Execuvue + Targetvue) commonly run 60–120+ days because each product onboards independently."
}, {
  q: "Does Innrly replace a GL like Profitvue?",
  a: "Innrly is not a hospitality GL. We push approved invoices into QuickBooks, M3, Sage Intacct, or Profitvue and handle the upstream workflow — capture, code, approve, reconcile. Operators who want to keep Profitvue can keep it; we feed it cleaner data."
}];
const $$splitComponentImporter$7 = () => import("./compare.innrly-vs-aptech-BeDoOYxa.js");
const Route$7 = createFileRoute("/compare/innrly-vs-aptech")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component"),
  head: () => ({
    meta: [{
      title: "Innrly: alternative to Aptech (Profitvue, Execuvue, Targetvue): 2026 Comparison | Innrly"
    }, {
      name: "description",
      content: "How Innrly and Aptech's Profitvue / Execuvue / Targetvue suite compare for multi-property hotel operators — single platform vs multi-module, pricing, deployment, and USALI reporting."
    }, {
      property: "og:title",
      content: "Innrly: alternative to Aptech — How They Compare"
    }, {
      property: "og:description",
      content: "One platform vs a multi-module suite. Pricing, deployment, and USALI reporting compared."
    }, {
      property: "og:url",
      content: "/compare/innrly-vs-aptech"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/compare/innrly-vs-aptech"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs$1.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Compare",
      url: "/compare"
    }, {
      name: "Innrly: alternative to Aptech",
      url: "/compare/innrly-vs-aptech"
    }])]
  })
});
const faqs = [{
  q: "Do we have to replace our current TimeClock to use Innrly Shift?",
  a: "No. Innrly Shift works with your existing time-and-attendance hardware — PIN pads, badge readers, or whatever your hotel uses today. Face-ID is an option, not a requirement. You still get scheduling, the housekeeping productivity matrix, OT guardrails, and payroll export with the clock you already own. Actabl's PerfectTime and PerfectLabor are typically deployed together as their own stack."
}, {
  q: "How does Innrly's pricing compare to Actabl / Hotel Effectiveness?",
  a: "Innrly Shift is published at $149 per property per month — all-in for scheduling, TimeClock (works with your existing clock or Innrly's Face-ID), housekeeping productivity matrix, OT guardrails, and payroll export. Actabl's labor suite (PerfectLabor, PerfectTime, CoverageFinder, PerfectEngage, PerfectWage) is quote-based, sold in Base / Advanced / Premier tiers, and typically priced per module per property. Most operators we talk to pay multiples of $149 for Actabl labor alone."
}, {
  q: "Is Face-ID TimeClock really different from a PIN pad?",
  a: "Yes. Face-ID verifies the person at the punch — no buddy punching, no shared PINs, no badge swaps. It's biometric, runs on a tablet or kiosk, and is built into the same product as scheduling, housekeeping productivity, and payroll. Actabl's PerfectTime is a strong time-and-attendance product, but it is not biometric face-recognition by default."
}, {
  q: "What about labor inside an integrated back office?",
  a: "Innrly Shift lives inside the same product as A/P automation, OTA reconciliation, night audit, BI, and Bill Pay — one login, one data model. Actabl is a labor-led suite; A/P, accounting, and BI typically come from other vendors in your stack. If your goal is fewer vendors and one source of truth, that's the structural difference."
}, {
  q: "Does Innrly handle multi-property shift coverage?",
  a: "Innrly today is built around the GM-per-property workflow with an owner roll-up via Innrly Business Intelligence. If cross-property shift filling for large clusters is a hard requirement, Actabl's CoverageFinder is purpose-built for that. We're happy to walk through whether your operation actually needs it before you pay for it."
}];
const $$splitComponentImporter$6 = () => import("./compare.innrly-vs-actabl-pZgcSmeZ.js");
const Route$6 = createFileRoute("/compare/innrly-vs-actabl")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component"),
  head: () => ({
    meta: [{
      title: "Innrly: alternative to Actabl / Hotel Effectiveness: How They Compare (2026) | Innrly"
    }, {
      name: "description",
      content: "How Innrly Shift compares to Actabl's labor suite (PerfectLabor, PerfectTime, Hotel Effectiveness) — pricing, Face-ID TimeClock, keep-your-existing-clock, and integrated back office."
    }, {
      property: "og:title",
      content: "Innrly: alternative to Actabl — How They Compare"
    }, {
      property: "og:description",
      content: "Innrly Shift at a published $149/mo per property — all-in labor — vs Actabl's per-module quote-based labor suite."
    }, {
      property: "og:url",
      content: "/compare/innrly-vs-actabl"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/compare/innrly-vs-actabl"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.q,
          acceptedAnswer: {
            "@type": "Answer",
            text: f.a
          }
        }))
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Compare",
      url: "/compare"
    }, {
      name: "Innrly: alternative to Actabl",
      url: "/compare/innrly-vs-actabl"
    }])]
  })
});
const $$splitComponentImporter$5 = () => import("./case-studies.urban-full-service-DtGbFqMF.js");
const Route$5 = createFileRoute("/case-studies/urban-full-service")({
  head: () => ({
    meta: [{
      title: "Case Study: Urban Full-Service Recovers OTA Commission Every Quarter | Innrly"
    }, {
      name: "description",
      content: "How a 4-property urban full-service operator uses Innrly to reconcile OTA commissions, F&B, and banquets — recovering $7K–15K per quarter and closing books in about a week."
    }, {
      property: "og:title",
      content: "Case Study: Urban Full-Service Operator — Innrly"
    }, {
      property: "og:description",
      content: "OTA reconciliation, F&B GL coding, and USALI owner reporting — $7K–15K recovered per quarter, close in about a week."
    }, {
      property: "og:url",
      content: "/case-studies/urban-full-service"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/case-studies/urban-full-service"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Urban Full-Service Operator Case Study",
        description: "Four-property urban full-service operator recovers $7K–15K per quarter in OTA reconciliation with Innrly.",
        author: {
          "@type": "Organization",
          name: "Innrly"
        },
        publisher: {
          "@type": "Organization",
          name: "Innrly"
        },
        mainEntityOfPage: "/case-studies/urban-full-service"
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Case Studies",
      url: "/case-studies"
    }, {
      name: "Urban Full-Service",
      url: "/case-studies/urban-full-service"
    }])]
  }),
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./case-studies.midwest-portfolio-DVeqryfW.js");
const Route$4 = createFileRoute("/case-studies/midwest-portfolio")({
  head: () => ({
    meta: [{
      title: "Case Study: Midwest Portfolio Saves Hours & Revenue | Innrly"
    }, {
      name: "description",
      content: "How a select-service portfolio uses Innrly Pulse to review night-audit packs, catch anomalies, and save 5–15 hours and $200–500 per hotel per week."
    }, {
      property: "og:title",
      content: "Case Study: Hours saved, revenue protected — Innrly"
    }, {
      property: "og:description",
      content: "Select-service operator catches night-audit anomalies daily and saves hours per hotel each week with Innrly."
    }, {
      property: "og:url",
      content: "/case-studies/midwest-portfolio"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/case-studies/midwest-portfolio"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Midwest Select-Service Portfolio Case Study",
        description: "How a select-service portfolio saves 5–15 hours and $200–500 per hotel per week with Innrly.",
        author: {
          "@type": "Organization",
          name: "Innrly"
        },
        publisher: {
          "@type": "Organization",
          name: "Innrly"
        },
        mainEntityOfPage: "/case-studies/midwest-portfolio"
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Case Studies",
      url: "/case-studies"
    }, {
      name: "Midwest Portfolio",
      url: "/case-studies/midwest-portfolio"
    }])]
  }),
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./case-studies.hilton-management-company-BcrOYHqF.js");
const Route$3 = createFileRoute("/case-studies/hilton-management-company")({
  head: () => ({
    meta: [{
      title: "Case Study: Hilton Management Company Cuts Month-End from 14 to ~6 Days | Innrly"
    }, {
      name: "description",
      content: "How a 28-property Hilton-focused management company uses Innrly to consolidate OnQ and OPERA data, automate AP, and shrink month-end close from roughly two weeks to under one."
    }, {
      property: "og:title",
      content: "Case Study: 28-Property Hilton Management Company — Innrly"
    }, {
      property: "og:description",
      content: "Multi-brand Hilton operator consolidates 28 hotels into one nightly close and shrinks month-end from 14 days to about 6."
    }, {
      property: "og:url",
      content: "/case-studies/hilton-management-company"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/case-studies/hilton-management-company"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Hilton Management Company Case Study",
        description: "28-property Hilton management company closes books in ~6 days using Innrly.",
        author: {
          "@type": "Organization",
          name: "Innrly"
        },
        publisher: {
          "@type": "Organization",
          name: "Innrly"
        },
        mainEntityOfPage: "/case-studies/hilton-management-company"
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Case Studies",
      url: "/case-studies"
    }, {
      name: "Hilton Management Company",
      url: "/case-studies/hilton-management-company"
    }])]
  }),
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./case-studies.extended-stay-portfolio-DKyKVifE.js");
const Route$2 = createFileRoute("/case-studies/extended-stay-portfolio")({
  head: () => ({
    meta: [{
      title: "Case Study: 18-Hotel Extended-Stay Portfolio Tightens MPOR & Close | Innrly"
    }, {
      name: "description",
      content: "How an 18-property extended-stay operator (Marriott + Hilton flags) uses Innrly to manage long-folio revenue, model weekly-clean MPOR correctly, and shorten month-end close."
    }, {
      property: "og:title",
      content: "Case Study: Extended-Stay Portfolio — Innrly"
    }, {
      property: "og:description",
      content: "Long-folio revenue, weekly-clean MPOR, and USALI reporting across 18 Marriott and Hilton extended-stay hotels."
    }, {
      property: "og:url",
      content: "/case-studies/extended-stay-portfolio"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/case-studies/extended-stay-portfolio"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Extended-Stay Portfolio Case Study",
        description: "18-property Marriott + Hilton extended-stay operator tightens MPOR and shortens month-end close with Innrly.",
        author: {
          "@type": "Organization",
          name: "Innrly"
        },
        publisher: {
          "@type": "Organization",
          name: "Innrly"
        },
        mainEntityOfPage: "/case-studies/extended-stay-portfolio"
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Case Studies",
      url: "/case-studies"
    }, {
      name: "Extended-Stay Portfolio",
      url: "/case-studies/extended-stay-portfolio"
    }])]
  }),
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./case-studies.boutique-group-S3TioakA.js");
const Route$1 = createFileRoute("/case-studies/boutique-group")({
  head: () => ({
    meta: [{
      title: "Case Study: Independent Boutique Group Consolidates 7 PMSes | Innrly"
    }, {
      name: "description",
      content: "How a 6-property independent boutique group uses Innrly to consolidate 7 different PMSes, run unified P&L reporting, and replace a fractional CFO's manual workbook."
    }, {
      property: "og:title",
      content: "Case Study: Independent Boutique Group — Innrly"
    }, {
      property: "og:description",
      content: "Seven PMSes, one consolidated P&L. How a boutique group runs lifestyle hotels with a 2-person back office."
    }, {
      property: "og:url",
      content: "/case-studies/boutique-group"
    }],
    links: [{
      rel: "canonical",
      href: "https://www.innrly.com/case-studies/boutique-group"
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        headline: "Independent Boutique Group Case Study",
        description: "6-property independent boutique group consolidates 7 PMSes into one Innrly view.",
        author: {
          "@type": "Organization",
          name: "Innrly"
        },
        publisher: {
          "@type": "Organization",
          name: "Innrly"
        },
        mainEntityOfPage: "/case-studies/boutique-group"
      })
    }, breadcrumbLd([{
      name: "Home",
      url: "/"
    }, {
      name: "Case Studies",
      url: "/case-studies"
    }, {
      name: "Boutique Group",
      url: "/case-studies/boutique-group"
    }])]
  }),
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const $$splitComponentImporter = () => import("./blog._slug--77GkEbc.js");
const Route = createFileRoute("/blog/$slug")({
  loader: async ({
    params
  }) => {
    const res = await fetch(`http://127.0.0.1:8000/blog/${params.slug}`);
    if (!res.ok) throw notFound();
    const post = await res.json();
    return {
      post,
      slug: params.slug
    };
  },
  component: lazyRouteComponent($$splitComponentImporter, "component"),
  head: ({
    loaderData
  }) => ({
    meta: loaderData ? [{
      title: (() => {
        const t = loaderData.post.title;
        return t.length > 46 ? t : `${t} — Innrly Blog`;
      })()
    }, {
      name: "description",
      content: (loaderData.post.summary || "").slice(0, 155)
    }, {
      property: "og:title",
      content: loaderData.post.title
    }, {
      property: "og:description",
      content: (loaderData.post.summary || "").slice(0, 155)
    }, {
      property: "og:type",
      content: "article"
    }, {
      property: "og:url",
      content: `/blog/${loaderData.slug}`
    }] : [],
    links: loaderData ? [{
      rel: "canonical",
      href: `/blog/${loaderData.slug}`
    }] : [],
    scripts: loaderData ? [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        headline: loaderData.post.title,
        datePublished: loaderData.post.created_at,
        author: {
          "@type": "Organization",
          name: loaderData.post.author || "Innrly"
        }
      })
    }] : []
  })
});
const SitemapDotxmlRoute = Route$12.update({
  id: "/sitemap.xml",
  path: "/sitemap.xml",
  getParentRoute: () => Route$13
});
const SecurityRoute = Route$11.update({
  id: "/security",
  path: "/security",
  getParentRoute: () => Route$13
});
const RoiCalculatorRoute = Route$10.update({
  id: "/roi-calculator",
  path: "/roi-calculator",
  getParentRoute: () => Route$13
});
const PricingRoute = Route$$.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$13
});
const OrbPreviewRoute = Route$_.update({
  id: "/orb-preview",
  path: "/orb-preview",
  getParentRoute: () => Route$13
});
const OnboardingRoute = Route$Z.update({
  id: "/onboarding",
  path: "/onboarding",
  getParentRoute: () => Route$13
});
const HotelBackOfficeAutomationRoute = Route$Y.update({
  id: "/hotel-back-office-automation",
  path: "/hotel-back-office-automation",
  getParentRoute: () => Route$13
});
const GlossaryRoute = Route$X.update({
  id: "/glossary",
  path: "/glossary",
  getParentRoute: () => Route$13
});
const FeaturesRoute = Route$W.update({
  id: "/features",
  path: "/features",
  getParentRoute: () => Route$13
});
const DevelopersRoute = Route$V.update({
  id: "/developers",
  path: "/developers",
  getParentRoute: () => Route$13
});
const ControlHubRoute = Route$U.update({
  id: "/control-hub",
  path: "/control-hub",
  getParentRoute: () => Route$13
});
const ContactRoute = Route$T.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$13
});
const AboutRoute = Route$S.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$13
});
const IndexRoute = Route$R.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$13
});
const IntegrationsIndexRoute = Route$Q.update({
  id: "/integrations/",
  path: "/integrations/",
  getParentRoute: () => Route$13
});
const ControlHubIndexRoute = Route$P.update({
  id: "/",
  path: "/",
  getParentRoute: () => ControlHubRoute
});
const CompareIndexRoute = Route$O.update({
  id: "/compare/",
  path: "/compare/",
  getParentRoute: () => Route$13
});
const CaseStudiesIndexRoute = Route$N.update({
  id: "/case-studies/",
  path: "/case-studies/",
  getParentRoute: () => Route$13
});
const BlogIndexRoute = Route$M.update({
  id: "/blog/",
  path: "/blog/",
  getParentRoute: () => Route$13
});
const SolutionsReconciliationRoute = Route$L.update({
  id: "/solutions/reconciliation",
  path: "/solutions/reconciliation",
  getParentRoute: () => Route$13
});
const SolutionsOperationsAutomationRoute = Route$K.update({
  id: "/solutions/operations-automation",
  path: "/solutions/operations-automation",
  getParentRoute: () => Route$13
});
const SolutionsLaborWorkforceRoute = Route$J.update({
  id: "/solutions/labor-workforce",
  path: "/solutions/labor-workforce",
  getParentRoute: () => Route$13
});
const SolutionsInnrlyShiftRoute = Route$I.update({
  id: "/solutions/innrly-shift",
  path: "/solutions/innrly-shift",
  getParentRoute: () => Route$13
});
const SolutionsInnrlyPayRoute = Route$H.update({
  id: "/solutions/innrly-pay",
  path: "/solutions/innrly-pay",
  getParentRoute: () => Route$13
});
const SolutionsFinancialControlRoute = Route$G.update({
  id: "/solutions/financial-control",
  path: "/solutions/financial-control",
  getParentRoute: () => Route$13
});
const SolutionsExpenseEntriesRoute = Route$F.update({
  id: "/solutions/expense-entries",
  path: "/solutions/expense-entries",
  getParentRoute: () => Route$13
});
const SolutionsDocumentVaultRoute = Route$E.update({
  id: "/solutions/document-vault",
  path: "/solutions/document-vault",
  getParentRoute: () => Route$13
});
const SolutionsBusinessIntelligenceRoute = Route$D.update({
  id: "/solutions/business-intelligence",
  path: "/solutions/business-intelligence",
  getParentRoute: () => Route$13
});
const ServicesAccountabilityPackRoute = Route$C.update({
  id: "/services/accountability-pack",
  path: "/services/accountability-pack",
  getParentRoute: () => Route$13
});
const LegalTermsRoute = Route$B.update({
  id: "/legal/terms",
  path: "/legal/terms",
  getParentRoute: () => Route$13
});
const LegalSubscriptionRoute = Route$A.update({
  id: "/legal/subscription",
  path: "/legal/subscription",
  getParentRoute: () => Route$13
});
const LegalSecurityRoute = Route$z.update({
  id: "/legal/security",
  path: "/legal/security",
  getParentRoute: () => Route$13
});
const LegalPrivacyRoute = Route$y.update({
  id: "/legal/privacy",
  path: "/legal/privacy",
  getParentRoute: () => Route$13
});
const LegalCookiesRoute = Route$x.update({
  id: "/legal/cookies",
  path: "/legal/cookies",
  getParentRoute: () => Route$13
});
const LegalAccessibilityRoute = Route$w.update({
  id: "/legal/accessibility",
  path: "/legal/accessibility",
  getParentRoute: () => Route$13
});
const IntegrationsSageIntacctRoute = Route$v.update({
  id: "/integrations/sage-intacct",
  path: "/integrations/sage-intacct",
  getParentRoute: () => Route$13
});
const IntegrationsQuickbooksRoute = Route$u.update({
  id: "/integrations/quickbooks",
  path: "/integrations/quickbooks",
  getParentRoute: () => Route$13
});
const IntegrationsOperaRoute = Route$t.update({
  id: "/integrations/opera",
  path: "/integrations/opera",
  getParentRoute: () => Route$13
});
const IntegrationsMewsRoute = Route$s.update({
  id: "/integrations/mews",
  path: "/integrations/mews",
  getParentRoute: () => Route$13
});
const IntegrationsM3Route = Route$r.update({
  id: "/integrations/m3",
  path: "/integrations/m3",
  getParentRoute: () => Route$13
});
const IntegrationsInnFlowRoute = Route$q.update({
  id: "/integrations/inn-flow",
  path: "/integrations/inn-flow",
  getParentRoute: () => Route$13
});
const IntegrationsCloudbedsRoute = Route$p.update({
  id: "/integrations/cloudbeds",
  path: "/integrations/cloudbeds",
  getParentRoute: () => Route$13
});
const IndustriesSelectServiceRoute = Route$o.update({
  id: "/industries/select-service",
  path: "/industries/select-service",
  getParentRoute: () => Route$13
});
const IndustriesFullServiceRoute = Route$n.update({
  id: "/industries/full-service",
  path: "/industries/full-service",
  getParentRoute: () => Route$13
});
const IndustriesExtendedStayRoute = Route$m.update({
  id: "/industries/extended-stay",
  path: "/industries/extended-stay",
  getParentRoute: () => Route$13
});
const ControlHubTrialsRoute = Route$l.update({
  id: "/trials",
  path: "/trials",
  getParentRoute: () => ControlHubRoute
});
const ControlHubSettingsRoute = Route$k.update({
  id: "/settings",
  path: "/settings",
  getParentRoute: () => ControlHubRoute
});
const ControlHubSeoRoute = Route$j.update({
  id: "/seo",
  path: "/seo",
  getParentRoute: () => ControlHubRoute
});
const ControlHubOnboardingRoute = Route$i.update({
  id: "/onboarding",
  path: "/onboarding",
  getParentRoute: () => ControlHubRoute
});
const ControlHubNewslettersRoute = Route$h.update({
  id: "/newsletters",
  path: "/newsletters",
  getParentRoute: () => ControlHubRoute
});
const ControlHubMenusRoute = Route$g.update({
  id: "/menus",
  path: "/menus",
  getParentRoute: () => ControlHubRoute
});
const ControlHubLoginRoute = Route$f.update({
  id: "/login",
  path: "/login",
  getParentRoute: () => ControlHubRoute
});
const ControlHubIntegrationsRoute = Route$e.update({
  id: "/integrations",
  path: "/integrations",
  getParentRoute: () => ControlHubRoute
});
const ControlHubBlogsRoute = Route$d.update({
  id: "/blogs",
  path: "/blogs",
  getParentRoute: () => ControlHubRoute
});
const CompareInnrlyVsProfitsageRoute = Route$c.update({
  id: "/compare/innrly-vs-profitsage",
  path: "/compare/innrly-vs-profitsage",
  getParentRoute: () => Route$13
});
const CompareInnrlyVsOtelierRoute = Route$b.update({
  id: "/compare/innrly-vs-otelier",
  path: "/compare/innrly-vs-otelier",
  getParentRoute: () => Route$13
});
const CompareInnrlyVsNimbleRoute = Route$a.update({
  id: "/compare/innrly-vs-nimble",
  path: "/compare/innrly-vs-nimble",
  getParentRoute: () => Route$13
});
const CompareInnrlyVsM3Route = Route$9.update({
  id: "/compare/innrly-vs-m3",
  path: "/compare/innrly-vs-m3",
  getParentRoute: () => Route$13
});
const CompareInnrlyVsInnFlowRoute = Route$8.update({
  id: "/compare/innrly-vs-inn-flow",
  path: "/compare/innrly-vs-inn-flow",
  getParentRoute: () => Route$13
});
const CompareInnrlyVsAptechRoute = Route$7.update({
  id: "/compare/innrly-vs-aptech",
  path: "/compare/innrly-vs-aptech",
  getParentRoute: () => Route$13
});
const CompareInnrlyVsActablRoute = Route$6.update({
  id: "/compare/innrly-vs-actabl",
  path: "/compare/innrly-vs-actabl",
  getParentRoute: () => Route$13
});
const CaseStudiesUrbanFullServiceRoute = Route$5.update({
  id: "/case-studies/urban-full-service",
  path: "/case-studies/urban-full-service",
  getParentRoute: () => Route$13
});
const CaseStudiesMidwestPortfolioRoute = Route$4.update({
  id: "/case-studies/midwest-portfolio",
  path: "/case-studies/midwest-portfolio",
  getParentRoute: () => Route$13
});
const CaseStudiesHiltonManagementCompanyRoute = Route$3.update({
  id: "/case-studies/hilton-management-company",
  path: "/case-studies/hilton-management-company",
  getParentRoute: () => Route$13
});
const CaseStudiesExtendedStayPortfolioRoute = Route$2.update({
  id: "/case-studies/extended-stay-portfolio",
  path: "/case-studies/extended-stay-portfolio",
  getParentRoute: () => Route$13
});
const CaseStudiesBoutiqueGroupRoute = Route$1.update({
  id: "/case-studies/boutique-group",
  path: "/case-studies/boutique-group",
  getParentRoute: () => Route$13
});
const BlogSlugRoute = Route.update({
  id: "/blog/$slug",
  path: "/blog/$slug",
  getParentRoute: () => Route$13
});
const ControlHubRouteChildren = {
  ControlHubBlogsRoute,
  ControlHubIntegrationsRoute,
  ControlHubLoginRoute,
  ControlHubMenusRoute,
  ControlHubNewslettersRoute,
  ControlHubOnboardingRoute,
  ControlHubSeoRoute,
  ControlHubSettingsRoute,
  ControlHubTrialsRoute,
  ControlHubIndexRoute
};
const ControlHubRouteWithChildren = ControlHubRoute._addFileChildren(
  ControlHubRouteChildren
);
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  ContactRoute,
  ControlHubRoute: ControlHubRouteWithChildren,
  DevelopersRoute,
  FeaturesRoute,
  GlossaryRoute,
  HotelBackOfficeAutomationRoute,
  OnboardingRoute,
  OrbPreviewRoute,
  PricingRoute,
  RoiCalculatorRoute,
  SecurityRoute,
  SitemapDotxmlRoute,
  BlogSlugRoute,
  CaseStudiesBoutiqueGroupRoute,
  CaseStudiesExtendedStayPortfolioRoute,
  CaseStudiesHiltonManagementCompanyRoute,
  CaseStudiesMidwestPortfolioRoute,
  CaseStudiesUrbanFullServiceRoute,
  CompareInnrlyVsActablRoute,
  CompareInnrlyVsAptechRoute,
  CompareInnrlyVsInnFlowRoute,
  CompareInnrlyVsM3Route,
  CompareInnrlyVsNimbleRoute,
  CompareInnrlyVsOtelierRoute,
  CompareInnrlyVsProfitsageRoute,
  IndustriesExtendedStayRoute,
  IndustriesFullServiceRoute,
  IndustriesSelectServiceRoute,
  IntegrationsCloudbedsRoute,
  IntegrationsInnFlowRoute,
  IntegrationsM3Route,
  IntegrationsMewsRoute,
  IntegrationsOperaRoute,
  IntegrationsQuickbooksRoute,
  IntegrationsSageIntacctRoute,
  LegalAccessibilityRoute,
  LegalCookiesRoute,
  LegalPrivacyRoute,
  LegalSecurityRoute,
  LegalSubscriptionRoute,
  LegalTermsRoute,
  ServicesAccountabilityPackRoute,
  SolutionsBusinessIntelligenceRoute,
  SolutionsDocumentVaultRoute,
  SolutionsExpenseEntriesRoute,
  SolutionsFinancialControlRoute,
  SolutionsInnrlyPayRoute,
  SolutionsInnrlyShiftRoute,
  SolutionsLaborWorkforceRoute,
  SolutionsOperationsAutomationRoute,
  SolutionsReconciliationRoute,
  BlogIndexRoute,
  CaseStudiesIndexRoute,
  CompareIndexRoute,
  IntegrationsIndexRoute
};
const routeTree = Route$13._addFileChildren(rootRouteChildren)._addFileTypes();
const getRouter = () => {
  const queryClient = new QueryClient();
  const router2 = createRouter({
    routeTree,
    context: { queryClient },
    scrollRestoration: true,
    defaultPreloadStaleTime: 0
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  faqs$1 as A,
  Button as B,
  faqs as C,
  Route as D,
  router as E,
  Input as I,
  Label as L,
  Route$M as R,
  Wordmark as W,
  faqs$g as a,
  faqs$f as b,
  cn as c,
  terms as d,
  comparisons as e,
  faqs$h as f,
  studies as g,
  faqs$e as h,
  faqs$d as i,
  faqs$c as j,
  faqs$b as k,
  faqs$a as l,
  faqs$9 as m,
  faqs$8 as n,
  openTrialModal as o,
  faqs$7 as p,
  faqs$6 as q,
  LeadsDashboardContainer as r,
  submitLead as s,
  track as t,
  defaultSeoData as u,
  fetchSeoData as v,
  faqs$5 as w,
  faqs$4 as x,
  faqs$3 as y,
  faqs$2 as z
};
