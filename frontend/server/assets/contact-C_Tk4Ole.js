import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { Check, CalendarCheck, MonitorPlay, FileText } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { t as track, L as Label, B as Button, s as submitLead, I as Input, c as cn } from "./router-dBewJNnO.js";
import { T as Textarea } from "./textarea-BB8DW9I8.js";
import { u as useFormGuard, h as honeypotFieldProps, C as Checkbox } from "./form-guard-CZhETcg_.js";
import { S as Section } from "./Section-DfKao03n.js";
import { L as LogosStrip } from "./LogosStrip-CjFqkZ97.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().min(1, "Company required").max(150),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  properties: z.string().trim().max(20).optional(),
  message: z.string().trim().max(1e3).optional()
});
const STEPS = [{
  icon: CalendarCheck,
  title: "Discovery call",
  body: "30-min Zoom. Tell us about your portfolio and what's slowing the back office down."
}, {
  icon: MonitorPlay,
  title: "Live data walkthrough",
  body: "Bring one property — we'll show the dashboards live, no slides, no pitch deck."
}, {
  icon: FileText,
  title: "Tailored quote",
  body: "Per-property pricing scoped to your stack, with a 90-day free trial to prove it out."
}];
function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const {
    honeypotRef,
    check
  } = useFormGuard();
  useEffect(() => {
    track("contact_form_viewed");
  }, []);
  const fieldSchemas = {
    name: contactSchema.shape.name,
    email: contactSchema.shape.email,
    company: contactSchema.shape.company,
    phone: contactSchema.shape.phone,
    properties: contactSchema.shape.properties,
    message: contactSchema.shape.message
  };
  const validateField = (name, value) => {
    const schema = fieldSchemas[name];
    if (!schema) return;
    const r = schema.safeParse(value === "" ? void 0 : value);
    setErrors((prev) => {
      const next = {
        ...prev
      };
      if (!r.success && value !== "") next[name] = r.error.issues[0]?.message ?? "Invalid";
      else delete next[name];
      return next;
    });
  };
  const onBlur = (e) => {
    validateField(e.target.name, e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const guard = check();
    if (!guard.ok) {
      track("contact_form_blocked", {
        reason: guard.reason
      });
      setSubmitted(true);
      return;
    }
    if (!consent) {
      toast.error("Please review and accept the consent to continue");
      return;
    }
    const form = new FormData(e.currentTarget);
    const data = {
      name: String(form.get("name") ?? ""),
      email: String(form.get("email") ?? ""),
      company: String(form.get("company") ?? ""),
      phone: String(form.get("phone") ?? ""),
      properties: String(form.get("properties") ?? ""),
      message: String(form.get("message") ?? "")
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs = {};
      parsed.error.issues.forEach((i) => errs[String(i.path[0])] = i.message);
      setErrors(errs);
      track("contact_form_validation_failed", {
        fields: Object.keys(errs).join(",")
      });
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setSubmitting(true);
    track("demo_requested", {
      properties: data.properties || null,
      has_message: data.message.length > 0,
      sms_consent: consent,
      marketing_opt_in: marketingOptIn
    });
    const res = await submitLead({
      ...parsed.data,
      source: "contact"
    });
    setSubmitting(false);
    if (!res.ok) {
      toast.error(res.error ?? "Submission failed. Please try again.");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks — we'll be in touch within one business day");
  };
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent", children: [
          /* @__PURE__ */ jsx(Check, { className: "h-3 w-3", "aria-hidden": true }),
          "Replies within one business day"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-5 text-4xl font-bold text-foreground sm:text-5xl", children: [
          "Let's see Innrly with ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "your portfolio." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-4 text-lg text-muted-foreground", children: "30-minute demo, no pitch deck. Bring one property and we'll show the dashboards live." }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: "Trusted by independent operators and management groups across the US." })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Section, { className: "py-12", children: /* @__PURE__ */ jsxs("div", { className: "grid gap-10 lg:grid-cols-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-5", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-[11px] font-bold uppercase tracking-[0.18em] text-accent", children: "What happens next" }),
        /* @__PURE__ */ jsx("ol", { className: "mt-6 space-y-4", children: STEPS.map((s, i) => /* @__PURE__ */ jsx("li", { className: "relative rounded-2xl border border-border bg-card/70 p-5", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(s.icon, { className: "h-5 w-5", "aria-hidden": true }) }),
          /* @__PURE__ */ jsxs("div", { children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxs("span", { className: "text-[10px] font-bold uppercase tracking-wider text-muted-foreground", children: [
              "Step ",
              i + 1
            ] }) }),
            /* @__PURE__ */ jsx("h3", { className: "mt-0.5 text-base font-semibold text-foreground", children: s.title }),
            /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm leading-relaxed text-muted-foreground", children: s.body })
          ] })
        ] }) }, s.title)) }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 rounded-2xl border border-border bg-card/50 p-5", children: /* @__PURE__ */ jsxs("p", { className: "text-sm leading-relaxed text-muted-foreground", children: [
          "Prefer email?",
          " ",
          /* @__PURE__ */ jsx("a", { href: "mailto:sales@innrly.com", className: "font-semibold text-accent hover:underline", children: "sales@innrly.com" }),
          " ",
          "— or",
          " ",
          /* @__PURE__ */ jsx(Link, { to: "/onboarding", className: "font-semibold text-accent hover:underline", children: "skip the demo and start your 90-day trial →" })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "lg:col-span-7", children: submitted ? /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center rounded-3xl border border-accent bg-card p-12 text-center", children: [
        /* @__PURE__ */ jsx("div", { className: "flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(Check, { className: "h-7 w-7", "aria-hidden": true }) }),
        /* @__PURE__ */ jsx("h2", { className: "mt-6 text-2xl font-bold text-foreground", children: "Got it — we'll be in touch." }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-md text-sm text-muted-foreground", children: "A member of the Innrly team will reach out within one business day to schedule your demo." }),
        /* @__PURE__ */ jsx("ol", { className: "mt-8 w-full max-w-md space-y-3 text-left", children: STEPS.map((s, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-3 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent", children: i + 1 }),
          /* @__PURE__ */ jsxs("span", { children: [
            /* @__PURE__ */ jsxs("span", { className: "font-semibold text-foreground", children: [
              s.title,
              "."
            ] }),
            " ",
            s.body
          ] })
        ] }, s.title)) })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-accent/20 opacity-60 blur-sm", "aria-hidden": true }),
        /* @__PURE__ */ jsxs("form", { onSubmit, className: "relative rounded-3xl border border-border bg-card p-6 sm:p-8", noValidate: true, children: [
          /* @__PURE__ */ jsx("input", { ref: honeypotRef, ...honeypotFieldProps }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
            /* @__PURE__ */ jsx(Field, { label: "Your name", name: "name", required: true, error: errors.name, onBlur }),
            /* @__PURE__ */ jsx(Field, { label: "Work email", name: "email", type: "email", required: true, error: errors.email, onBlur }),
            /* @__PURE__ */ jsx(Field, { label: "Company", name: "company", required: true, error: errors.company, onBlur }),
            /* @__PURE__ */ jsx(Field, { label: "Phone", name: "phone", type: "tel", required: true, error: errors.phone, onBlur }),
            /* @__PURE__ */ jsx(Field, { label: "# of properties", name: "properties", type: "number", placeholder: "e.g. 12", error: errors.properties, onBlur, className: "sm:col-span-2" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-5", children: [
            /* @__PURE__ */ jsxs(Label, { htmlFor: "message", className: "text-sm font-medium text-foreground", children: [
              "What are you hoping to solve?",
              " ",
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "(optional)" })
            ] }),
            /* @__PURE__ */ jsx(Textarea, { id: "message", name: "message", rows: 4, maxLength: 1e3, onBlur, className: "mt-2 bg-background" }),
            errors.message && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-destructive", children: errors.message })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 space-y-3 rounded-xl border border-border bg-background/40 p-4", children: [
            /* @__PURE__ */ jsxs("label", { className: "flex cursor-pointer items-start gap-3", children: [
              /* @__PURE__ */ jsx(Checkbox, { checked: consent, onCheckedChange: (c) => setConsent(c === true), className: "mt-0.5", "aria-required": true }),
              /* @__PURE__ */ jsxs("span", { className: "text-xs leading-relaxed text-muted-foreground", children: [
                "By submitting, I authorize Innrly to contact me by email, phone, and text at the number provided in response to my inquiry, possibly using automated means. Message and data rates may apply. Message frequency is limited to no more than 3 messages per week. Reply HELP for help or STOP to opt out at any time. Consent is not a condition of purchase. Innrly does not sell or share your information. See our",
                " ",
                /* @__PURE__ */ jsx(Link, { to: "/legal/privacy", className: "font-semibold text-accent hover:underline", children: "privacy policy" }),
                " ",
                "and",
                " ",
                /* @__PURE__ */ jsx(Link, { to: "/legal/terms", className: "font-semibold text-accent hover:underline", children: "terms of service" }),
                ". ",
                /* @__PURE__ */ jsx("span", { className: "text-accent", children: "*" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("label", { className: "flex cursor-pointer items-start gap-3", children: [
              /* @__PURE__ */ jsx(Checkbox, { checked: marketingOptIn, onCheckedChange: (c) => setMarketingOptIn(c === true), className: "mt-0.5" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs leading-relaxed text-muted-foreground", children: "Optional: I'd also like to receive product updates and occasional marketing messages from Innrly." })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between", children: [
            /* @__PURE__ */ jsx(Button, { type: "submit", size: "lg", disabled: submitting || !consent, className: "bg-cta hover:opacity-90", children: submitting ? "Sending..." : "Book my demo" }),
            /* @__PURE__ */ jsx(Link, { to: "/onboarding", className: "text-sm font-medium text-accent hover:underline", children: "Or start the 90-day trial →" })
          ] })
        ] })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(LogosStrip, { compact: true })
  ] });
}
function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  error,
  className,
  onBlur
}) {
  return /* @__PURE__ */ jsxs("div", { className, children: [
    /* @__PURE__ */ jsxs(Label, { htmlFor: name, className: "text-sm font-medium text-foreground", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx("span", { className: "text-accent", children: "*" })
    ] }),
    /* @__PURE__ */ jsx(Input, { id: name, name, type, required, placeholder, maxLength: 255, onBlur, "aria-invalid": !!error, className: cn("mt-2 bg-background focus-visible:ring-accent", error && "border-destructive focus-visible:ring-destructive") }),
    error && /* @__PURE__ */ jsx("p", { className: "mt-1 text-xs text-destructive", children: error })
  ] });
}
export {
  ContactPage as component
};
