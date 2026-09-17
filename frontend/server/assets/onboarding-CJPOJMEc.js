import { jsxs, jsx } from "react/jsx-runtime";
import { Link } from "@tanstack/react-router";
import * as React from "react";
import { useState, useRef, useEffect, useMemo } from "react";
import { ChevronDown, Check, ChevronUp, Circle, Building2, Users, Hotel, CheckCircle2, Sparkles, ChevronLeft, ChevronRight, ShieldCheck, Trash2, Plus } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { c as cn, t as track, B as Button, I as Input, s as submitLead, L as Label } from "./router-DU7xSoX0.js";
import * as SelectPrimitive from "@radix-ui/react-select";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { u as useFormGuard, h as honeypotFieldProps, C as Checkbox } from "./form-guard-VkIIy8NJ.js";
import "@tanstack/react-query";
import "@radix-ui/react-slot";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-label";
import "@radix-ui/react-checkbox";
const Select = SelectPrimitive.Root;
const SelectValue = SelectPrimitive.Value;
const SelectTrigger = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Trigger,
  {
    ref,
    className: cn(
      "flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(SelectPrimitive.Icon, { asChild: true, children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
));
SelectTrigger.displayName = SelectPrimitive.Trigger.displayName;
const SelectScrollUpButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollUpButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronUp, { className: "h-4 w-4" })
  }
));
SelectScrollUpButton.displayName = SelectPrimitive.ScrollUpButton.displayName;
const SelectScrollDownButton = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.ScrollDownButton,
  {
    ref,
    className: cn("flex cursor-default items-center justify-center py-1", className),
    ...props,
    children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4" })
  }
));
SelectScrollDownButton.displayName = SelectPrimitive.ScrollDownButton.displayName;
const SelectContent = React.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ jsx(SelectPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
  SelectPrimitive.Content,
  {
    ref,
    className: cn(
      "relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)",
      position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
      className
    ),
    position,
    ...props,
    children: [
      /* @__PURE__ */ jsx(SelectScrollUpButton, {}),
      /* @__PURE__ */ jsx(
        SelectPrimitive.Viewport,
        {
          className: cn(
            "p-1",
            position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          ),
          children
        }
      ),
      /* @__PURE__ */ jsx(SelectScrollDownButton, {})
    ]
  }
) }));
SelectContent.displayName = SelectPrimitive.Content.displayName;
const SelectLabel = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Label,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", className),
    ...props
  }
));
SelectLabel.displayName = SelectPrimitive.Label.displayName;
const SelectItem = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  SelectPrimitive.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(SelectPrimitive.ItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }) }),
      /* @__PURE__ */ jsx(SelectPrimitive.ItemText, { children })
    ]
  }
));
SelectItem.displayName = SelectPrimitive.Item.displayName;
const SelectSeparator = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  SelectPrimitive.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
SelectSeparator.displayName = SelectPrimitive.Separator.displayName;
const RadioGroup = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(RadioGroupPrimitive.Root, { className: cn("grid gap-2", className), ...props, ref });
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;
const RadioGroupItem = React.forwardRef(({ className, ...props }, ref) => {
  return /* @__PURE__ */ jsx(
    RadioGroupPrimitive.Item,
    {
      ref,
      className: cn(
        "aspect-square h-4 w-4 rounded-full border border-primary text-primary shadow cursor-pointer focus:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(RadioGroupPrimitive.Indicator, { className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(Circle, { className: "h-3.5 w-3.5 fill-primary" }) })
    }
  );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;
const phoneRe = /^[\d\s()+\-.]{7,20}$/;
const zipRe = /^[A-Za-z0-9\s-]{3,10}$/;
const companySchema = z.object({
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
const userSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(150),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().regex(phoneRe, "Valid phone required")
});
const PMS_OPTIONS = ["Opera", "SYNXIS", "Choice Advantage", "Other"];
const BRAND_OPTIONS = ["IHG", "Best Western", "Radisson", "Hampton", "Marriott", "Staybridge", "Wyndham", "La Quinta", "Motel 6", "Hilton", "Hyatt", "Choice", "Others"];
const propertySchema = z.object({
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
const emptyCompany = {
  decisionMaker: "yes",
  companyName: "",
  authorizedPerson: "",
  email: "",
  address: "",
  state: "",
  city: "",
  zip: "",
  mobile: "",
  work: ""
};
const emptyUser = {
  name: "",
  email: "",
  phone: ""
};
const emptyProperty = {
  propertyName: "",
  propertyCode: "",
  address: "",
  rooms: 0,
  managerName: "",
  managerEmail: "",
  managerMobile: "",
  pms: "Opera",
  pmsOther: "",
  brand: "",
  contactPerson: ""
};
const STEPS = [{
  id: 0,
  title: "Company",
  icon: Building2,
  desc: "Tell us about your business"
}, {
  id: 1,
  title: "Users",
  icon: Users,
  desc: "Who needs access"
}, {
  id: 2,
  title: "Properties",
  icon: Hotel,
  desc: "Your hotel portfolio"
}, {
  id: 3,
  title: "Review",
  icon: CheckCircle2,
  desc: "Confirm and submit"
}];
function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [agree, setAgree] = useState(false);
  const [company, setCompany] = useState(emptyCompany);
  const [users, setUsers] = useState([{
    ...emptyUser
  }]);
  const [properties, setProperties] = useState([{
    ...emptyProperty
  }]);
  const [errors, setErrors] = useState({});
  const {
    honeypotRef,
    check
  } = useFormGuard();
  const STORAGE_KEY = "innrly.onboarding.draft.v1";
  const [hasDraft, setHasDraft] = useState(false);
  const [draftDismissed, setDraftDismissed] = useState(false);
  const hydrated = useRef(false);
  const [savedAt, setSavedAt] = useState(null);
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setHasDraft(true);
    } catch {
    }
    hydrated.current = true;
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || !hydrated.current) return;
    const t = window.setTimeout(() => {
      try {
        const payload = JSON.stringify({
          step,
          company,
          users,
          properties,
          savedAt: Date.now()
        });
        window.localStorage.setItem(STORAGE_KEY, payload);
        setSavedAt(Date.now());
      } catch {
      }
    }, 600);
    return () => window.clearTimeout(t);
  }, [step, company, users, properties]);
  const restoreDraft = () => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw);
      if (parsed.company) setCompany(parsed.company);
      if (parsed.users && parsed.users.length) setUsers(parsed.users);
      if (parsed.properties && parsed.properties.length) setProperties(parsed.properties);
      if (typeof parsed.step === "number") setStep(Math.min(parsed.step, STEPS.length - 1));
      setHasDraft(false);
      toast.success("Draft restored");
    } catch {
      toast.error("Could not restore draft");
    }
  };
  const discardDraft = () => {
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
    }
    setHasDraft(false);
    setDraftDismissed(true);
  };
  const progress = useMemo(() => (step + 1) / STEPS.length * 100, [step]);
  const validateStep = (s) => {
    const errs = {};
    if (s === 0) {
      const r = companySchema.safeParse(company);
      if (!r.success) r.error.issues.forEach((i) => errs[`company.${i.path.join(".")}`] = i.message);
    }
    if (s === 1) {
      users.forEach((u, idx) => {
        const r = userSchema.safeParse(u);
        if (!r.success) r.error.issues.forEach((i) => errs[`users.${idx}.${i.path.join(".")}`] = i.message);
      });
    }
    if (s === 2) {
      properties.forEach((p, idx) => {
        const r = propertySchema.safeParse(p);
        if (!r.success) r.error.issues.forEach((i) => errs[`properties.${idx}.${i.path.join(".")}`] = i.message);
      });
    }
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("Please fix the highlighted fields");
      if (typeof window !== "undefined") {
        window.setTimeout(() => {
          const container = document.querySelector('[data-invalid="true"]');
          if (container) {
            container.scrollIntoView({
              behavior: "smooth",
              block: "center"
            });
            const focusable = container.querySelector('input, select, textarea, button, [role="combobox"], [role="radiogroup"] [role="radio"]');
            focusable?.focus({
              preventScroll: true
            });
          }
        }, 50);
      }
      return false;
    }
    return true;
  };
  const next = () => {
    if (validateStep(step)) {
      const target = Math.min(step + 1, STEPS.length - 1);
      track("onboarding_step_completed", {
        step,
        step_name: STEPS[step].title
      });
      setStep(target);
    }
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));
  useEffect(() => {
    track("onboarding_started");
  }, []);
  const submit = async () => {
    if (!agree) {
      toast.error("Please accept the terms to continue");
      return;
    }
    const guard = check();
    if (!guard.ok) {
      track("onboarding_blocked", {
        reason: guard.reason
      });
      setSubmitted(true);
      return;
    }
    if (!validateStep(0) || !validateStep(1) || !validateStep(2)) {
      toast.error("Some fields need attention");
      return;
    }
    setSubmitting(true);
    track("onboarding_submitted", {
      users_count: users.length,
      properties_count: properties.length
    });
    const res = await submitLead({
      source: "onboarding",
      companyDetails: company,
      users,
      propertiesList: properties
    });
    setSubmitting(false);
    if (!res.ok) {
      toast.error(res.error ?? "Submission failed. Please try again.");
      return;
    }
    setSubmitted(true);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
    }
    toast.success("Application received — we'll be in touch shortly");
  };
  if (submitted) return /* @__PURE__ */ jsx(SuccessScreen, {});
  return /* @__PURE__ */ jsxs("div", { className: "bg-background", children: [
    /* @__PURE__ */ jsxs("section", { className: "relative overflow-hidden border-b border-border/60", children: [
      /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-hero opacity-90", "aria-hidden": true }),
      /* @__PURE__ */ jsxs("div", { className: "relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent", children: [
          /* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }),
          " 90-day free trial"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "mt-4 text-4xl font-bold text-foreground sm:text-5xl", children: [
          "Let's get your portfolio ",
          /* @__PURE__ */ jsx("span", { className: "text-gradient", children: "onboarded." })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mx-auto mt-3 max-w-xl text-base text-muted-foreground", children: "Takes about 5 minutes. You'll be live on Innrly within one business day." })
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "border-b border-border/60 bg-card/40 backdrop-blur", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx("div", { className: "flex items-center justify-between gap-2", children: STEPS.map((s, idx) => {
        const Icon = s.icon;
        const active = idx === step;
        const done = idx < step;
        return /* @__PURE__ */ jsxs("button", { type: "button", onClick: () => idx < step && setStep(idx), disabled: idx > step, className: cn("flex flex-1 items-center gap-3 rounded-lg p-2 text-left transition-colors", idx <= step ? "cursor-pointer" : "cursor-not-allowed opacity-50"), children: [
          /* @__PURE__ */ jsx("div", { className: cn("flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors", active && "border-accent bg-accent/15 text-accent", done && "border-accent bg-accent text-accent-foreground", !active && !done && "border-border text-muted-foreground"), children: done ? /* @__PURE__ */ jsx(CheckCircle2, { className: "h-5 w-5" }) : /* @__PURE__ */ jsx(Icon, { className: "h-4 w-4" }) }),
          /* @__PURE__ */ jsxs("div", { className: "hidden min-w-0 sm:block", children: [
            /* @__PURE__ */ jsx("div", { className: cn("truncate text-sm font-semibold", active ? "text-foreground" : "text-muted-foreground"), children: s.title }),
            /* @__PURE__ */ jsx("div", { className: "truncate text-xs text-muted-foreground", children: s.desc })
          ] })
        ] }, s.id);
      }) }),
      /* @__PURE__ */ jsx("div", { className: "mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-cta transition-all duration-500 ease-out", style: {
        width: `${progress}%`
      } }) })
    ] }) }),
    /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8", children: [
      hasDraft && !draftDismissed && /* @__PURE__ */ jsxs("div", { className: "mb-4 flex flex-col gap-3 rounded-2xl border border-accent/40 bg-accent/10 p-4 sm:flex-row sm:items-center sm:justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "text-sm text-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "font-semibold", children: "You have a saved draft." }),
          " ",
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Pick up where you left off?" })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", variant: "ghost", onClick: discardDraft, children: "Start fresh" }),
          /* @__PURE__ */ jsx(Button, { type: "button", size: "sm", onClick: restoreDraft, className: "bg-cta hover:opacity-90", children: "Restore draft" })
        ] })
      ] }),
      /* @__PURE__ */ jsx("input", { ref: honeypotRef, ...honeypotFieldProps }),
      /* @__PURE__ */ jsxs("div", { className: "rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10", children: [
        step === 0 && /* @__PURE__ */ jsx(CompanyStep, { value: company, setValue: setCompany, errors }),
        step === 1 && /* @__PURE__ */ jsx(UsersStep, { users, setUsers, errors }),
        step === 2 && /* @__PURE__ */ jsx(PropertiesStep, { properties, setProperties, errors }),
        step === 3 && /* @__PURE__ */ jsx(ReviewStep, { company, users, properties, agree, setAgree }),
        /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between", children: [
          /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", onClick: back, disabled: step === 0, className: "gap-1", children: [
            /* @__PURE__ */ jsx(ChevronLeft, { className: "h-4 w-4" }),
            " Back"
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground sm:text-sm", children: [
            "Step ",
            step + 1,
            " of ",
            STEPS.length,
            savedAt && /* @__PURE__ */ jsx("span", { className: "ml-2 hidden text-[11px] text-accent sm:inline", children: "· Draft saved" })
          ] }),
          step < STEPS.length - 1 ? /* @__PURE__ */ jsxs(Button, { type: "button", onClick: next, size: "lg", className: "gap-1 bg-cta hover:opacity-90", children: [
            "Continue ",
            /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
          ] }) : /* @__PURE__ */ jsx(Button, { type: "button", onClick: submit, size: "lg", disabled: submitting || !agree, className: "gap-2 bg-cta hover:opacity-90", children: submitting ? "Submitting..." : "Submit application" })
        ] })
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "mt-6 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground", children: [
        /* @__PURE__ */ jsx(ShieldCheck, { className: "h-3.5 w-3.5 text-accent" }),
        "Your data is encrypted in transit and never shared with third parties."
      ] })
    ] })
  ] });
}
function FieldShell({
  label,
  required,
  error,
  children,
  className,
  hint
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-1.5", className), "data-invalid": error ? "true" : void 0, children: [
    /* @__PURE__ */ jsxs(Label, { className: "text-sm font-medium text-foreground", children: [
      label,
      " ",
      required && /* @__PURE__ */ jsx("span", { className: "text-accent", children: "*" })
    ] }),
    children,
    hint && !error && /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: hint }),
    error && /* @__PURE__ */ jsx("p", { className: "text-xs font-medium text-destructive", children: error })
  ] });
}
function CompanyStep({
  value,
  setValue,
  errors
}) {
  const set = (k, v) => setValue({
    ...value,
    [k]: v
  });
  const e = (k) => errors[`company.${k}`];
  return /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Company details" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Tell us about the entity that will sign the agreement." })
    ] }),
    /* @__PURE__ */ jsx(FieldShell, { label: "Are you the decision maker?", required: true, error: e("decisionMaker"), children: /* @__PURE__ */ jsx(RadioGroup, { value: value.decisionMaker, onValueChange: (v) => set("decisionMaker", v), className: "flex gap-3", children: ["yes", "no"].map((opt) => /* @__PURE__ */ jsxs("label", { className: cn("flex flex-1 cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-colors", value.decisionMaker === opt ? "border-accent bg-accent/10" : "border-border hover:border-muted-foreground"), children: [
      /* @__PURE__ */ jsx(RadioGroupItem, { value: opt, id: `dm-${opt}` }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-medium capitalize text-foreground", children: opt })
    ] }, opt)) }) }),
    /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-2", children: [
      /* @__PURE__ */ jsx(FieldShell, { label: "Company name", required: true, error: e("companyName"), children: /* @__PURE__ */ jsx(Input, { value: value.companyName, onChange: (ev) => set("companyName", ev.target.value), placeholder: "Acme Hospitality Group", maxLength: 150 }) }),
      /* @__PURE__ */ jsx(FieldShell, { label: "Authorized person", required: true, error: e("authorizedPerson"), children: /* @__PURE__ */ jsx(Input, { value: value.authorizedPerson, onChange: (ev) => set("authorizedPerson", ev.target.value), placeholder: "Full name", maxLength: 150 }) }),
      /* @__PURE__ */ jsx(FieldShell, { label: "Email", required: true, error: e("email"), children: /* @__PURE__ */ jsx(Input, { type: "email", value: value.email, onChange: (ev) => set("email", ev.target.value), placeholder: "you@company.com", maxLength: 255 }) }),
      /* @__PURE__ */ jsx(FieldShell, { label: "Mobile", required: true, error: e("mobile"), children: /* @__PURE__ */ jsx(Input, { type: "tel", value: value.mobile, onChange: (ev) => set("mobile", ev.target.value), placeholder: "+1 (555) 000-0000", maxLength: 20 }) }),
      /* @__PURE__ */ jsx(FieldShell, { label: "Work phone", required: true, error: e("work"), children: /* @__PURE__ */ jsx(Input, { type: "tel", value: value.work, onChange: (ev) => set("work", ev.target.value), placeholder: "+1 (555) 000-0000", maxLength: 20 }) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-5", children: [
      /* @__PURE__ */ jsx("h3", { className: "text-sm font-semibold uppercase tracking-wide text-muted-foreground", children: "Corporate address" }),
      /* @__PURE__ */ jsx(FieldShell, { label: "Street address", required: true, error: e("address"), children: /* @__PURE__ */ jsx(Input, { value: value.address, onChange: (ev) => set("address", ev.target.value), placeholder: "123 Main St", maxLength: 255 }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-5 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsx(FieldShell, { label: "City", required: true, error: e("city"), children: /* @__PURE__ */ jsx(Input, { value: value.city, onChange: (ev) => set("city", ev.target.value), maxLength: 80 }) }),
        /* @__PURE__ */ jsx(FieldShell, { label: "State", required: true, error: e("state"), children: /* @__PURE__ */ jsx(Input, { value: value.state, onChange: (ev) => set("state", ev.target.value), maxLength: 80 }) }),
        /* @__PURE__ */ jsx(FieldShell, { label: "ZIP", required: true, error: e("zip"), children: /* @__PURE__ */ jsx(Input, { value: value.zip, onChange: (ev) => set("zip", ev.target.value), maxLength: 10 }) })
      ] })
    ] })
  ] });
}
function UsersStep({
  users,
  setUsers,
  errors
}) {
  const update = (idx, k, v) => {
    const next = users.slice();
    next[idx] = {
      ...next[idx],
      [k]: v
    };
    setUsers(next);
  };
  const add = () => setUsers([...users, {
    ...emptyUser
  }]);
  const remove = (idx) => setUsers(users.filter((_, i) => i !== idx));
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Users" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Add the team members who will sign in to Innrly. You can add more later." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-4", children: users.map((u, idx) => /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-foreground", children: [
          /* @__PURE__ */ jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-xs text-accent", children: idx + 1 }),
          "User ",
          idx + 1
        ] }),
        users.length > 1 && /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => remove(idx), className: "text-destructive hover:text-destructive", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
        /* @__PURE__ */ jsx(FieldShell, { label: "Name", required: true, error: errors[`users.${idx}.name`], children: /* @__PURE__ */ jsx(Input, { value: u.name, onChange: (e) => update(idx, "name", e.target.value), maxLength: 150 }) }),
        /* @__PURE__ */ jsx(FieldShell, { label: "Email", required: true, error: errors[`users.${idx}.email`], children: /* @__PURE__ */ jsx(Input, { type: "email", value: u.email, onChange: (e) => update(idx, "email", e.target.value), maxLength: 255 }) }),
        /* @__PURE__ */ jsx(FieldShell, { label: "Phone", required: true, error: errors[`users.${idx}.phone`], children: /* @__PURE__ */ jsx(Input, { type: "tel", value: u.phone, onChange: (e) => update(idx, "phone", e.target.value), maxLength: 20 }) })
      ] })
    ] }, idx)) }),
    /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", onClick: add, className: "gap-2", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
      " Add another user"
    ] })
  ] });
}
function PropertiesStep({
  properties,
  setProperties,
  errors
}) {
  const update = (idx, k, v) => {
    const next = properties.slice();
    next[idx] = {
      ...next[idx],
      [k]: v
    };
    setProperties(next);
  };
  const add = () => setProperties([...properties, {
    ...emptyProperty
  }]);
  const remove = (idx) => setProperties(properties.filter((_, i) => i !== idx));
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Properties" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Each property gets its own dashboard. Add one card per hotel." })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "space-y-5", children: properties.map((p, idx) => {
      const e = (k) => errors[`properties.${idx}.${k}`];
      return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40 sm:p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "mb-5 flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm font-semibold text-foreground", children: [
            /* @__PURE__ */ jsx("span", { className: "flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-xs text-accent", children: idx + 1 }),
            "Property ",
            idx + 1
          ] }),
          properties.length > 1 && /* @__PURE__ */ jsx(Button, { type: "button", variant: "ghost", size: "sm", onClick: () => remove(idx), className: "text-destructive hover:text-destructive", children: /* @__PURE__ */ jsx(Trash2, { className: "h-4 w-4" }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
          /* @__PURE__ */ jsx(FieldShell, { label: "Property name", required: true, error: e("propertyName"), children: /* @__PURE__ */ jsx(Input, { value: p.propertyName, onChange: (ev) => update(idx, "propertyName", ev.target.value), maxLength: 150 }) }),
          /* @__PURE__ */ jsx(FieldShell, { label: "Property code", required: true, error: e("propertyCode"), children: /* @__PURE__ */ jsx(Input, { value: p.propertyCode, onChange: (ev) => update(idx, "propertyCode", ev.target.value), maxLength: 50 }) }),
          /* @__PURE__ */ jsx(FieldShell, { label: "Address", required: true, error: e("address"), className: "sm:col-span-2", children: /* @__PURE__ */ jsx(Input, { value: p.address, onChange: (ev) => update(idx, "address", ev.target.value), maxLength: 255 }) }),
          /* @__PURE__ */ jsx(FieldShell, { label: "Number of rooms", required: true, error: e("rooms"), children: /* @__PURE__ */ jsx(Input, { type: "number", min: 1, value: p.rooms || "", onChange: (ev) => update(idx, "rooms", Number(ev.target.value)) }) }),
          /* @__PURE__ */ jsx(FieldShell, { label: "Brand", required: true, error: e("brand"), children: /* @__PURE__ */ jsxs(Select, { value: p.brand, onValueChange: (v) => update(idx, "brand", v), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, { placeholder: "Select brand" }) }),
            /* @__PURE__ */ jsx(SelectContent, { children: BRAND_OPTIONS.map((b) => /* @__PURE__ */ jsx(SelectItem, { value: b, children: b }, b)) })
          ] }) }),
          /* @__PURE__ */ jsx(FieldShell, { label: "PMS", required: true, error: e("pms"), children: /* @__PURE__ */ jsxs(Select, { value: p.pms, onValueChange: (v) => update(idx, "pms", v), children: [
            /* @__PURE__ */ jsx(SelectTrigger, { children: /* @__PURE__ */ jsx(SelectValue, {}) }),
            /* @__PURE__ */ jsx(SelectContent, { children: PMS_OPTIONS.map((o) => /* @__PURE__ */ jsx(SelectItem, { value: o, children: o }, o)) })
          ] }) }),
          p.pms === "Other" && /* @__PURE__ */ jsx(FieldShell, { label: "Specify PMS", required: true, error: e("pmsOther"), children: /* @__PURE__ */ jsx(Input, { value: p.pmsOther || "", onChange: (ev) => update(idx, "pmsOther", ev.target.value), maxLength: 80 }) }),
          /* @__PURE__ */ jsx(FieldShell, { label: "Point of contact", required: true, error: e("contactPerson"), className: p.pms === "Other" ? "" : "sm:col-span-2", children: /* @__PURE__ */ jsx(Input, { value: p.contactPerson, onChange: (ev) => update(idx, "contactPerson", ev.target.value), maxLength: 150 }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "mt-5 border-t border-border pt-5", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground", children: "Property manager" }),
          /* @__PURE__ */ jsxs("div", { className: "grid gap-4 sm:grid-cols-3", children: [
            /* @__PURE__ */ jsx(FieldShell, { label: "Name", required: true, error: e("managerName"), children: /* @__PURE__ */ jsx(Input, { value: p.managerName, onChange: (ev) => update(idx, "managerName", ev.target.value), maxLength: 150 }) }),
            /* @__PURE__ */ jsx(FieldShell, { label: "Email", required: true, error: e("managerEmail"), children: /* @__PURE__ */ jsx(Input, { type: "email", value: p.managerEmail, onChange: (ev) => update(idx, "managerEmail", ev.target.value), maxLength: 255 }) }),
            /* @__PURE__ */ jsx(FieldShell, { label: "Mobile", required: true, error: e("managerMobile"), children: /* @__PURE__ */ jsx(Input, { type: "tel", value: p.managerMobile, onChange: (ev) => update(idx, "managerMobile", ev.target.value), maxLength: 20 }) })
          ] })
        ] })
      ] }, idx);
    }) }),
    /* @__PURE__ */ jsxs(Button, { type: "button", variant: "outline", onClick: add, className: "gap-2", children: [
      /* @__PURE__ */ jsx(Plus, { className: "h-4 w-4" }),
      " Add another property"
    ] })
  ] });
}
function ReviewStep({
  company,
  users,
  properties,
  agree,
  setAgree
}) {
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("header", { children: [
      /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold text-foreground", children: "Review & submit" }),
      /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: "Confirm the details below. You can go back to any step to make changes." })
    ] }),
    /* @__PURE__ */ jsxs(ReviewCard, { title: "Company", children: [
      /* @__PURE__ */ jsx(ReviewRow, { k: "Company", v: company.companyName }),
      /* @__PURE__ */ jsx(ReviewRow, { k: "Authorized person", v: company.authorizedPerson }),
      /* @__PURE__ */ jsx(ReviewRow, { k: "Email", v: company.email }),
      /* @__PURE__ */ jsx(ReviewRow, { k: "Phone", v: [company.mobile, company.work].filter(Boolean).join(" / ") }),
      /* @__PURE__ */ jsx(ReviewRow, { k: "Address", v: [company.address, company.city, company.state, company.zip].filter(Boolean).join(", ") })
    ] }),
    /* @__PURE__ */ jsx(ReviewCard, { title: `Users (${users.length})`, children: users.map((u, i) => /* @__PURE__ */ jsx(ReviewRow, { k: `#${i + 1}`, v: `${u.name} · ${u.email} · ${u.phone}` }, i)) }),
    /* @__PURE__ */ jsx(ReviewCard, { title: `Properties (${properties.length})`, children: properties.map((p, i) => /* @__PURE__ */ jsx(ReviewRow, { k: `#${i + 1}`, v: `${p.propertyName} (${p.propertyCode}) — ${p.rooms} rooms · ${p.brand || "—"} · PMS: ${p.pms === "Other" ? p.pmsOther : p.pms}` }, i)) }),
    /* @__PURE__ */ jsxs("label", { className: "flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-background/40 p-4", children: [
      /* @__PURE__ */ jsx(Checkbox, { checked: agree, onCheckedChange: (c) => setAgree(c === true), className: "mt-0.5" }),
      /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
        "I agree to Innrly's",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/legal/terms", className: "text-accent underline", children: "Terms" }),
        " ",
        "and",
        " ",
        /* @__PURE__ */ jsx(Link, { to: "/legal/privacy", className: "text-accent underline", children: "Privacy Policy" }),
        ", and authorize Innrly to contact me about my application."
      ] })
    ] })
  ] });
}
function ReviewCard({
  title,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "rounded-2xl border border-border bg-background/40 p-5", children: [
    /* @__PURE__ */ jsx("h3", { className: "mb-3 text-sm font-semibold text-foreground", children: title }),
    /* @__PURE__ */ jsx("dl", { className: "space-y-2", children })
  ] });
}
function ReviewRow({
  k,
  v
}) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-0.5 text-sm sm:flex-row sm:gap-4", children: [
    /* @__PURE__ */ jsx("dt", { className: "w-40 shrink-0 text-muted-foreground", children: k }),
    /* @__PURE__ */ jsx("dd", { className: "text-foreground", children: v || /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "—" }) })
  ] });
}
function SuccessScreen() {
  return /* @__PURE__ */ jsx("div", { className: "bg-background", children: /* @__PURE__ */ jsxs("div", { className: "mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center", children: [
    /* @__PURE__ */ jsx("div", { className: "flex h-20 w-20 items-center justify-center rounded-full bg-accent/15 text-accent", children: /* @__PURE__ */ jsx(CheckCircle2, { className: "h-10 w-10" }) }),
    /* @__PURE__ */ jsx("h2", { className: "mt-6 text-3xl font-bold text-foreground sm:text-4xl", children: "Application received." }),
    /* @__PURE__ */ jsx("p", { className: "mt-3 max-w-md text-base text-muted-foreground", children: "Thanks — our onboarding team will reach out within one business day to schedule kickoff and confirm your PMS integration." }),
    /* @__PURE__ */ jsxs("div", { className: "mt-8 flex flex-col gap-3 sm:flex-row", children: [
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", className: "bg-cta hover:opacity-90", children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Back to home" }) }),
      /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/pricing", children: "View pricing" }) })
    ] })
  ] }) });
}
export {
  OnboardingPage as component
};
