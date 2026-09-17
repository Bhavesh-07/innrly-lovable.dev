import { jsxs, jsx } from "react/jsx-runtime";
import { useState } from "react";
import { z } from "zod";
import { CheckCircle2, Loader2, Mail } from "lucide-react";
import { I as Input, B as Button, s as submitLead } from "./router-uiSeds_Z.js";
import { toast } from "sonner";
const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255)
});
function NewsletterSignup({ variant = "card", source = "blog" }) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    const parsed = schema.safeParse({ email });
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Invalid email");
      return;
    }
    setSubmitting(true);
    const res = await submitLead({
      source: "trial",
      subSource: source,
      email: parsed.data.email,
      kind: "newsletter"
    });
    setSubmitting(false);
    if (res.ok) {
      setDone(true);
      setEmail("");
      toast.success("You're on the list.");
    } else {
      toast.error("Something went wrong. Try again.");
    }
  }
  if (done) {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        className: `flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/5 px-5 py-4 text-sm text-foreground ${variant === "card" ? "" : ""}`,
        children: [
          /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5 shrink-0 text-accent", "aria-hidden": true }),
          /* @__PURE__ */ jsx("span", { children: "Thanks — we'll send the next operator brief to your inbox." })
        ]
      }
    );
  }
  if (variant === "inline") {
    return /* @__PURE__ */ jsxs("form", { onSubmit, className: "flex flex-col gap-2 sm:flex-row", children: [
      /* @__PURE__ */ jsx(
        Input,
        {
          type: "email",
          required: true,
          placeholder: "you@hotelgroup.com",
          value: email,
          onChange: (e) => setEmail(e.target.value),
          className: "sm:flex-1",
          "aria-label": "Email address"
        }
      ),
      /* @__PURE__ */ jsx(
        Button,
        {
          type: "submit",
          disabled: submitting,
          className: "bg-cta hover:bg-cta/90 text-primary-foreground",
          children: submitting ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : "Subscribe"
        }
      )
    ] });
  }
  return /* @__PURE__ */ jsx("aside", { className: "rounded-2xl border border-border bg-surface/40 p-6 sm:p-8", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-3", children: [
    /* @__PURE__ */ jsx("div", { className: "rounded-lg bg-accent/10 p-2", children: /* @__PURE__ */ jsx(Mail, { className: "h-5 w-5 text-accent", "aria-hidden": true }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      /* @__PURE__ */ jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-accent", children: "Operator brief" }),
      /* @__PURE__ */ jsx("h2", { className: "mt-1 text-xl font-semibold text-foreground", children: "One email a month. No fluff." }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "Benchmarks, automation playbooks, and the occasional rant about spreadsheets — written for multi-property finance and ops leaders." }),
      /* @__PURE__ */ jsxs("form", { onSubmit, className: "mt-5 flex flex-col gap-2 sm:flex-row", children: [
        /* @__PURE__ */ jsx(
          Input,
          {
            type: "email",
            required: true,
            placeholder: "you@hotelgroup.com",
            value: email,
            onChange: (e) => setEmail(e.target.value),
            className: "sm:flex-1",
            "aria-label": "Email address"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "submit",
            disabled: submitting,
            className: "bg-cta hover:bg-cta/90 text-primary-foreground",
            children: submitting ? /* @__PURE__ */ jsx(Loader2, { className: "h-4 w-4 animate-spin" }) : "Subscribe"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("p", { className: "mt-2 text-[11px] text-muted-foreground", children: "Unsubscribe any time. We never sell or share emails." })
    ] })
  ] }) });
}
export {
  NewsletterSignup as N
};
