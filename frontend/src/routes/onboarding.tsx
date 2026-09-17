import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState } from "react";
import {
  Building2,
  Users,
  Hotel,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Plus,
  Trash2,
  Sparkles,
  ShieldCheck,
} from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { useFormGuard, honeypotFieldProps } from "@/lib/form-guard";
import { track } from "@/lib/analytics";
import { submitLead } from "@/lib/lead-submit";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/onboarding")({
  component: OnboardingPage,
  loader: async () => {
    const seo = await fetchSeoData("/onboarding");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(
        loaderData?.seo || null,
        defaultSeoData["/onboarding"],
        "/onboarding"
      ),
    ],
    links: [{ rel: "canonical", href: "https://www.innrly.com/onboarding" }],
  }),
});

// ---------- Schemas ----------
const phoneRe = /^[\d\s()+\-.]{7,20}$/;
const zipRe = /^[A-Za-z0-9\s-]{3,10}$/;

const companySchema = z.object({
  decisionMaker: z.enum(["yes", "no"], { required_error: "Required" }),
  companyName: z.string().trim().min(1, "Company name required").max(150),
  authorizedPerson: z.string().trim().min(1, "Authorized person required").max(150),
  email: z.string().trim().email("Valid email required").max(255),
  address: z.string().trim().min(1, "Address required").max(255),
  state: z.string().trim().min(1, "State required").max(80),
  city: z.string().trim().min(1, "City required").max(80),
  zip: z.string().trim().regex(zipRe, "Valid ZIP required"),
  mobile: z.string().trim().regex(phoneRe, "Valid mobile required"),
  work: z.string().trim().regex(phoneRe, "Valid work phone required"),
});

const userSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(150),
  email: z.string().trim().email("Valid email required").max(255),
  phone: z.string().trim().regex(phoneRe, "Valid phone required"),
});

const PMS_OPTIONS = ["Opera", "SYNXIS", "Choice Advantage", "Other"] as const;
const BRAND_OPTIONS = [
  "IHG",
  "Best Western",
  "Radisson",
  "Hampton",
  "Marriott",
  "Staybridge",
  "Wyndham",
  "La Quinta",
  "Motel 6",
  "Hilton",
  "Hyatt",
  "Choice",
  "Others",
] as const;

const propertySchema = z
  .object({
    propertyName: z.string().trim().min(1, "Property name required").max(150),
    propertyCode: z.string().trim().min(1, "Property code required").max(50),
    address: z.string().trim().min(1, "Address required").max(255),
    rooms: z.coerce.number().int().min(1, "Required").max(10000),
    managerName: z.string().trim().min(1, "Required").max(150),
    managerEmail: z.string().trim().email("Valid email required").max(255),
    managerMobile: z.string().trim().regex(phoneRe, "Valid mobile required"),
    pms: z.enum(PMS_OPTIONS, { required_error: "Select a PMS" }),
    pmsOther: z.string().trim().max(80).optional(),
    brand: z.string().min(1, "Select a brand"),
    contactPerson: z.string().trim().min(1, "Required").max(150),
  })
  .refine((v) => v.pms !== "Other" || (v.pmsOther && v.pmsOther.length > 0), {
    message: "Specify PMS",
    path: ["pmsOther"],
  });

type Company = z.infer<typeof companySchema>;
type User = z.infer<typeof userSchema>;
type Property = z.infer<typeof propertySchema>;

const emptyCompany: Company = {
  decisionMaker: "yes",
  companyName: "",
  authorizedPerson: "",
  email: "",
  address: "",
  state: "",
  city: "",
  zip: "",
  mobile: "",
  work: "",
};
const emptyUser: User = { name: "", email: "", phone: "" };
const emptyProperty: Property = {
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
  contactPerson: "",
};

const STEPS = [
  { id: 0, title: "Company", icon: Building2, desc: "Tell us about your business" },
  { id: 1, title: "Users", icon: Users, desc: "Who needs access" },
  { id: 2, title: "Properties", icon: Hotel, desc: "Your hotel portfolio" },
  { id: 3, title: "Review", icon: CheckCircle2, desc: "Confirm and submit" },
] as const;

function OnboardingPage() {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [agree, setAgree] = useState(false);

  const [company, setCompany] = useState<Company>(emptyCompany);
  const [users, setUsers] = useState<User[]>([{ ...emptyUser }]);
  const [properties, setProperties] = useState<Property[]>([{ ...emptyProperty }]);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const { honeypotRef, check } = useFormGuard();

  // --- Draft autosave (localStorage) ---
  const STORAGE_KEY = "innrly.onboarding.draft.v1";
  const [hasDraft, setHasDraft] = useState(false);
  const [draftDismissed, setDraftDismissed] = useState(false);
  const hydrated = useRef(false);
  const [savedAt, setSavedAt] = useState<number | null>(null);

  // Detect existing draft on mount (don't auto-apply — ask the user).
  useEffect(() => {
    if (typeof window === "undefined") return;
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) setHasDraft(true);
    } catch {
      /* ignore */
    }
    hydrated.current = true;
  }, []);

  // Save on changes (debounced).
  useEffect(() => {
    if (typeof window === "undefined" || !hydrated.current) return;
    const t = window.setTimeout(() => {
      try {
        const payload = JSON.stringify({ step, company, users, properties, savedAt: Date.now() });
        window.localStorage.setItem(STORAGE_KEY, payload);
        setSavedAt(Date.now());
      } catch {
        /* quota or disabled — ignore */
      }
    }, 600);
    return () => window.clearTimeout(t);
  }, [step, company, users, properties]);

  const restoreDraft = () => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      const parsed = JSON.parse(raw) as {
        step?: number;
        company?: Company;
        users?: User[];
        properties?: Property[];
      };
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
      /* ignore */
    }
    setHasDraft(false);
    setDraftDismissed(true);
  };

  const progress = useMemo(() => ((step + 1) / STEPS.length) * 100, [step]);

  const validateStep = (s: number): boolean => {
    const errs: Record<string, string> = {};
    if (s === 0) {
      const r = companySchema.safeParse(company);
      if (!r.success)
        r.error.issues.forEach((i) => (errs[`company.${i.path.join(".")}`] = i.message));
    }
    if (s === 1) {
      users.forEach((u, idx) => {
        const r = userSchema.safeParse(u);
        if (!r.success)
          r.error.issues.forEach((i) => (errs[`users.${idx}.${i.path.join(".")}`] = i.message));
      });
    }
    if (s === 2) {
      properties.forEach((p, idx) => {
        const r = propertySchema.safeParse(p);
        if (!r.success)
          r.error.issues.forEach(
            (i) => (errs[`properties.${idx}.${i.path.join(".")}`] = i.message),
          );
      });
    }
    setErrors(errs);
    if (Object.keys(errs).length > 0) {
      toast.error("Please fix the highlighted fields");
      // Focus and scroll to the first invalid field on next tick.
      if (typeof window !== "undefined") {
        window.setTimeout(() => {
          const container = document.querySelector<HTMLElement>('[data-invalid="true"]');
          if (container) {
            container.scrollIntoView({ behavior: "smooth", block: "center" });
            const focusable = container.querySelector<HTMLElement>(
              'input, select, textarea, button, [role="combobox"], [role="radiogroup"] [role="radio"]',
            );
            focusable?.focus({ preventScroll: true });
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
        step_name: STEPS[step].title,
      });
      setStep(target);
    }
  };
  const back = () => setStep((s) => Math.max(s - 1, 0));

  // Fire once on mount
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
      track("onboarding_blocked", { reason: guard.reason });
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
      properties_count: properties.length,
    });
    const res = await submitLead({
      source: "onboarding",
      companyDetails: company,
      users: users,
      propertiesList: properties,
    } as never);

    setSubmitting(false);
    if (!res.ok) {
      toast.error(res.error ?? "Submission failed. Please try again.");
      return;
    }
    setSubmitted(true);
    try {
      window.localStorage.removeItem(STORAGE_KEY);
    } catch {
      /* ignore */
    }
    toast.success("Application received — we'll be in touch shortly");
  };

  if (submitted) return <SuccessScreen />;

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border/60">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-14 text-center sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-medium text-accent">
            <Sparkles className="h-3.5 w-3.5" /> 90-day free trial
          </div>
          <h1 className="mt-4 text-4xl font-bold text-foreground sm:text-5xl">
            Let's get your portfolio <span className="text-gradient">onboarded.</span>
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Takes about 5 minutes. You'll be live on Innrly within one business day.
          </p>
        </div>
      </section>

      {/* Stepper */}
      <div className="border-b border-border/60 bg-card/40 backdrop-blur">
        <div className="mx-auto max-w-5xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2">
            {STEPS.map((s, idx) => {
              const Icon = s.icon;
              const active = idx === step;
              const done = idx < step;
              return (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => idx < step && setStep(idx)}
                  disabled={idx > step}
                  className={cn(
                    "flex flex-1 items-center gap-3 rounded-lg p-2 text-left transition-colors",
                    idx <= step ? "cursor-pointer" : "cursor-not-allowed opacity-50",
                  )}
                >
                  <div
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-colors",
                      active && "border-accent bg-accent/15 text-accent",
                      done && "border-accent bg-accent text-accent-foreground",
                      !active && !done && "border-border text-muted-foreground",
                    )}
                  >
                    {done ? <CheckCircle2 className="h-5 w-5" /> : <Icon className="h-4 w-4" />}
                  </div>
                  <div className="hidden min-w-0 sm:block">
                    <div
                      className={cn(
                        "truncate text-sm font-semibold",
                        active ? "text-foreground" : "text-muted-foreground",
                      )}
                    >
                      {s.title}
                    </div>
                    <div className="truncate text-xs text-muted-foreground">{s.desc}</div>
                  </div>
                </button>
              );
            })}
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-cta transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 lg:px-8">
        {hasDraft && !draftDismissed && (
          <div className="mb-4 flex flex-col gap-3 rounded-2xl border border-accent/40 bg-accent/10 p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="text-sm text-foreground">
              <span className="font-semibold">You have a saved draft.</span>{" "}
              <span className="text-muted-foreground">Pick up where you left off?</span>
            </div>
            <div className="flex gap-2">
              <Button type="button" size="sm" variant="ghost" onClick={discardDraft}>
                Start fresh
              </Button>
              <Button
                type="button"
                size="sm"
                onClick={restoreDraft}
                className="bg-cta hover:opacity-90"
              >
                Restore draft
              </Button>
            </div>
          </div>
        )}
        {/* Honeypot — invisible to humans, bots fill it */}
        <input ref={honeypotRef} {...honeypotFieldProps} />
        <div className="rounded-3xl border border-border bg-card p-6 shadow-xl sm:p-10">
          {step === 0 && <CompanyStep value={company} setValue={setCompany} errors={errors} />}
          {step === 1 && <UsersStep users={users} setUsers={setUsers} errors={errors} />}
          {step === 2 && (
            <PropertiesStep properties={properties} setProperties={setProperties} errors={errors} />
          )}
          {step === 3 && (
            <ReviewStep
              company={company}
              users={users}
              properties={properties}
              agree={agree}
              setAgree={setAgree}
            />
          )}

          {/* Footer nav */}
          <div className="mt-10 flex flex-col-reverse gap-3 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between">
            <Button
              type="button"
              variant="ghost"
              onClick={back}
              disabled={step === 0}
              className="gap-1"
            >
              <ChevronLeft className="h-4 w-4" /> Back
            </Button>
            <div className="text-xs text-muted-foreground sm:text-sm">
              Step {step + 1} of {STEPS.length}
              {savedAt && (
                <span className="ml-2 hidden text-[11px] text-accent sm:inline">· Draft saved</span>
              )}
            </div>
            {step < STEPS.length - 1 ? (
              <Button
                type="button"
                onClick={next}
                size="lg"
                className="gap-1 bg-cta hover:opacity-90"
              >
                Continue <ChevronRight className="h-4 w-4" />
              </Button>
            ) : (
              <Button
                type="button"
                onClick={submit}
                size="lg"
                disabled={submitting || !agree}
                className="gap-2 bg-cta hover:opacity-90"
              >
                {submitting ? "Submitting..." : "Submit application"}
              </Button>
            )}
          </div>
        </div>

        <p className="mt-6 flex items-center justify-center gap-2 text-center text-xs text-muted-foreground">
          <ShieldCheck className="h-3.5 w-3.5 text-accent" />
          Your data is encrypted in transit and never shared with third parties.
        </p>
      </div>
    </div>
  );
}

// ---------- Step components ----------

function FieldShell({
  label,
  required,
  error,
  children,
  className,
  hint,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
  className?: string;
  hint?: string;
}) {
  return (
    <div className={cn("space-y-1.5", className)} data-invalid={error ? "true" : undefined}>
      <Label className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </Label>
      {children}
      {hint && !error && <p className="text-xs text-muted-foreground">{hint}</p>}
      {error && <p className="text-xs font-medium text-destructive">{error}</p>}
    </div>
  );
}

function CompanyStep({
  value,
  setValue,
  errors,
}: {
  value: Company;
  setValue: (v: Company) => void;
  errors: Record<string, string>;
}) {
  const set = <K extends keyof Company>(k: K, v: Company[K]) => setValue({ ...value, [k]: v });
  const e = (k: string) => errors[`company.${k}`];

  return (
    <div className="space-y-8">
      <header>
        <h2 className="text-2xl font-bold text-foreground">Company details</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Tell us about the entity that will sign the agreement.
        </p>
      </header>

      <FieldShell label="Are you the decision maker?" required error={e("decisionMaker")}>
        <RadioGroup
          value={value.decisionMaker}
          onValueChange={(v) => set("decisionMaker", v as "yes" | "no")}
          className="flex gap-3"
        >
          {(["yes", "no"] as const).map((opt) => (
            <label
              key={opt}
              className={cn(
                "flex flex-1 cursor-pointer items-center gap-3 rounded-xl border-2 p-4 transition-colors",
                value.decisionMaker === opt
                  ? "border-accent bg-accent/10"
                  : "border-border hover:border-muted-foreground",
              )}
            >
              <RadioGroupItem value={opt} id={`dm-${opt}`} />
              <span className="text-sm font-medium capitalize text-foreground">{opt}</span>
            </label>
          ))}
        </RadioGroup>
      </FieldShell>

      <div className="grid gap-5 sm:grid-cols-2">
        <FieldShell label="Company name" required error={e("companyName")}>
          <Input
            value={value.companyName}
            onChange={(ev) => set("companyName", ev.target.value)}
            placeholder="Acme Hospitality Group"
            maxLength={150}
          />
        </FieldShell>
        <FieldShell label="Authorized person" required error={e("authorizedPerson")}>
          <Input
            value={value.authorizedPerson}
            onChange={(ev) => set("authorizedPerson", ev.target.value)}
            placeholder="Full name"
            maxLength={150}
          />
        </FieldShell>
        <FieldShell label="Email" required error={e("email")}>
          <Input
            type="email"
            value={value.email}
            onChange={(ev) => set("email", ev.target.value)}
            placeholder="you@company.com"
            maxLength={255}
          />
        </FieldShell>
        <FieldShell label="Mobile" required error={e("mobile")}>
          <Input
            type="tel"
            value={value.mobile}
            onChange={(ev) => set("mobile", ev.target.value)}
            placeholder="+1 (555) 000-0000"
            maxLength={20}
          />
        </FieldShell>
        <FieldShell label="Work phone" required error={e("work")}>
          <Input
            type="tel"
            value={value.work}
            onChange={(ev) => set("work", ev.target.value)}
            placeholder="+1 (555) 000-0000"
            maxLength={20}
          />
        </FieldShell>
      </div>

      <div className="space-y-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground">
          Corporate address
        </h3>
        <FieldShell label="Street address" required error={e("address")}>
          <Input
            value={value.address}
            onChange={(ev) => set("address", ev.target.value)}
            placeholder="123 Main St"
            maxLength={255}
          />
        </FieldShell>
        <div className="grid gap-5 sm:grid-cols-3">
          <FieldShell label="City" required error={e("city")}>
            <Input
              value={value.city}
              onChange={(ev) => set("city", ev.target.value)}
              maxLength={80}
            />
          </FieldShell>
          <FieldShell label="State" required error={e("state")}>
            <Input
              value={value.state}
              onChange={(ev) => set("state", ev.target.value)}
              maxLength={80}
            />
          </FieldShell>
          <FieldShell label="ZIP" required error={e("zip")}>
            <Input
              value={value.zip}
              onChange={(ev) => set("zip", ev.target.value)}
              maxLength={10}
            />
          </FieldShell>
        </div>
      </div>
    </div>
  );
}

function UsersStep({
  users,
  setUsers,
  errors,
}: {
  users: User[];
  setUsers: (v: User[]) => void;
  errors: Record<string, string>;
}) {
  const update = (idx: number, k: keyof User, v: string) => {
    const next = users.slice();
    next[idx] = { ...next[idx], [k]: v };
    setUsers(next);
  };
  const add = () => setUsers([...users, { ...emptyUser }]);
  const remove = (idx: number) => setUsers(users.filter((_, i) => i !== idx));

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-foreground">Users</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Add the team members who will sign in to Innrly. You can add more later.
        </p>
      </header>

      <div className="space-y-4">
        {users.map((u, idx) => (
          <div
            key={idx}
            className="rounded-2xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40"
          >
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-xs text-accent">
                  {idx + 1}
                </span>
                User {idx + 1}
              </div>
              {users.length > 1 && (
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  onClick={() => remove(idx)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              )}
            </div>
            <div className="grid gap-4 sm:grid-cols-3">
              <FieldShell label="Name" required error={errors[`users.${idx}.name`]}>
                <Input
                  value={u.name}
                  onChange={(e) => update(idx, "name", e.target.value)}
                  maxLength={150}
                />
              </FieldShell>
              <FieldShell label="Email" required error={errors[`users.${idx}.email`]}>
                <Input
                  type="email"
                  value={u.email}
                  onChange={(e) => update(idx, "email", e.target.value)}
                  maxLength={255}
                />
              </FieldShell>
              <FieldShell label="Phone" required error={errors[`users.${idx}.phone`]}>
                <Input
                  type="tel"
                  value={u.phone}
                  onChange={(e) => update(idx, "phone", e.target.value)}
                  maxLength={20}
                />
              </FieldShell>
            </div>
          </div>
        ))}
      </div>

      <Button type="button" variant="outline" onClick={add} className="gap-2">
        <Plus className="h-4 w-4" /> Add another user
      </Button>
    </div>
  );
}

function PropertiesStep({
  properties,
  setProperties,
  errors,
}: {
  properties: Property[];
  setProperties: (v: Property[]) => void;
  errors: Record<string, string>;
}) {
  const update = <K extends keyof Property>(idx: number, k: K, v: Property[K]) => {
    const next = properties.slice();
    next[idx] = { ...next[idx], [k]: v };
    setProperties(next);
  };
  const add = () => setProperties([...properties, { ...emptyProperty }]);
  const remove = (idx: number) => setProperties(properties.filter((_, i) => i !== idx));

  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-foreground">Properties</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Each property gets its own dashboard. Add one card per hotel.
        </p>
      </header>

      <div className="space-y-5">
        {properties.map((p, idx) => {
          const e = (k: string) => errors[`properties.${idx}.${k}`];
          return (
            <div
              key={idx}
              className="rounded-2xl border border-border bg-background/40 p-5 transition-colors hover:border-accent/40 sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-accent/15 text-xs text-accent">
                    {idx + 1}
                  </span>
                  Property {idx + 1}
                </div>
                {properties.length > 1 && (
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    onClick={() => remove(idx)}
                    className="text-destructive hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <FieldShell label="Property name" required error={e("propertyName")}>
                  <Input
                    value={p.propertyName}
                    onChange={(ev) => update(idx, "propertyName", ev.target.value)}
                    maxLength={150}
                  />
                </FieldShell>
                <FieldShell label="Property code" required error={e("propertyCode")}>
                  <Input
                    value={p.propertyCode}
                    onChange={(ev) => update(idx, "propertyCode", ev.target.value)}
                    maxLength={50}
                  />
                </FieldShell>
                <FieldShell label="Address" required error={e("address")} className="sm:col-span-2">
                  <Input
                    value={p.address}
                    onChange={(ev) => update(idx, "address", ev.target.value)}
                    maxLength={255}
                  />
                </FieldShell>
                <FieldShell label="Number of rooms" required error={e("rooms")}>
                  <Input
                    type="number"
                    min={1}
                    value={p.rooms || ""}
                    onChange={(ev) => update(idx, "rooms", Number(ev.target.value))}
                  />
                </FieldShell>
                <FieldShell label="Brand" required error={e("brand")}>
                  <Select value={p.brand} onValueChange={(v) => update(idx, "brand", v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {BRAND_OPTIONS.map((b) => (
                        <SelectItem key={b} value={b}>
                          {b}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FieldShell>
                <FieldShell label="PMS" required error={e("pms")}>
                  <Select
                    value={p.pms}
                    onValueChange={(v) => update(idx, "pms", v as Property["pms"])}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      {PMS_OPTIONS.map((o) => (
                        <SelectItem key={o} value={o}>
                          {o}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FieldShell>
                {p.pms === "Other" && (
                  <FieldShell label="Specify PMS" required error={e("pmsOther")}>
                    <Input
                      value={p.pmsOther || ""}
                      onChange={(ev) => update(idx, "pmsOther", ev.target.value)}
                      maxLength={80}
                    />
                  </FieldShell>
                )}
                <FieldShell
                  label="Point of contact"
                  required
                  error={e("contactPerson")}
                  className={p.pms === "Other" ? "" : "sm:col-span-2"}
                >
                  <Input
                    value={p.contactPerson}
                    onChange={(ev) => update(idx, "contactPerson", ev.target.value)}
                    maxLength={150}
                  />
                </FieldShell>
              </div>

              <div className="mt-5 border-t border-border pt-5">
                <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Property manager
                </div>
                <div className="grid gap-4 sm:grid-cols-3">
                  <FieldShell label="Name" required error={e("managerName")}>
                    <Input
                      value={p.managerName}
                      onChange={(ev) => update(idx, "managerName", ev.target.value)}
                      maxLength={150}
                    />
                  </FieldShell>
                  <FieldShell label="Email" required error={e("managerEmail")}>
                    <Input
                      type="email"
                      value={p.managerEmail}
                      onChange={(ev) => update(idx, "managerEmail", ev.target.value)}
                      maxLength={255}
                    />
                  </FieldShell>
                  <FieldShell label="Mobile" required error={e("managerMobile")}>
                    <Input
                      type="tel"
                      value={p.managerMobile}
                      onChange={(ev) => update(idx, "managerMobile", ev.target.value)}
                      maxLength={20}
                    />
                  </FieldShell>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <Button type="button" variant="outline" onClick={add} className="gap-2">
        <Plus className="h-4 w-4" /> Add another property
      </Button>
    </div>
  );
}

function ReviewStep({
  company,
  users,
  properties,
  agree,
  setAgree,
}: {
  company: Company;
  users: User[];
  properties: Property[];
  agree: boolean;
  setAgree: (v: boolean) => void;
}) {
  return (
    <div className="space-y-6">
      <header>
        <h2 className="text-2xl font-bold text-foreground">Review &amp; submit</h2>
        <p className="mt-1 text-sm text-muted-foreground">
          Confirm the details below. You can go back to any step to make changes.
        </p>
      </header>

      <ReviewCard title="Company">
        <ReviewRow k="Company" v={company.companyName} />
        <ReviewRow k="Authorized person" v={company.authorizedPerson} />
        <ReviewRow k="Email" v={company.email} />
        <ReviewRow k="Phone" v={[company.mobile, company.work].filter(Boolean).join(" / ")} />
        <ReviewRow
          k="Address"
          v={[company.address, company.city, company.state, company.zip].filter(Boolean).join(", ")}
        />
      </ReviewCard>

      <ReviewCard title={`Users (${users.length})`}>
        {users.map((u, i) => (
          <ReviewRow key={i} k={`#${i + 1}`} v={`${u.name} · ${u.email} · ${u.phone}`} />
        ))}
      </ReviewCard>

      <ReviewCard title={`Properties (${properties.length})`}>
        {properties.map((p, i) => (
          <ReviewRow
            key={i}
            k={`#${i + 1}`}
            v={`${p.propertyName} (${p.propertyCode}) — ${p.rooms} rooms · ${p.brand || "—"} · PMS: ${p.pms === "Other" ? p.pmsOther : p.pms}`}
          />
        ))}
      </ReviewCard>

      <label className="flex cursor-pointer items-start gap-3 rounded-xl border border-border bg-background/40 p-4">
        <Checkbox
          checked={agree}
          onCheckedChange={(c) => setAgree(c === true)}
          className="mt-0.5"
        />
        <span className="text-sm text-muted-foreground">
          I agree to Innrly's{" "}
          <Link to="/legal/terms" className="text-accent underline">
            Terms
          </Link>{" "}
          and{" "}
          <Link to="/legal/privacy" className="text-accent underline">
            Privacy Policy
          </Link>
          , and authorize Innrly to contact me about my application.
        </span>
      </label>
    </div>
  );
}

function ReviewCard({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-2xl border border-border bg-background/40 p-5">
      <h3 className="mb-3 text-sm font-semibold text-foreground">{title}</h3>
      <dl className="space-y-2">{children}</dl>
    </div>
  );
}
function ReviewRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex flex-col gap-0.5 text-sm sm:flex-row sm:gap-4">
      <dt className="w-40 shrink-0 text-muted-foreground">{k}</dt>
      <dd className="text-foreground">{v || <span className="text-muted-foreground">—</span>}</dd>
    </div>
  );
}

function SuccessScreen() {
  return (
    <div className="bg-background">
      <div className="mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-4 py-20 text-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-full bg-accent/15 text-accent">
          <CheckCircle2 className="h-10 w-10" />
        </div>
        <h2 className="mt-6 text-3xl font-bold text-foreground sm:text-4xl">
          Application received.
        </h2>
        <p className="mt-3 max-w-md text-base text-muted-foreground">
          Thanks — our onboarding team will reach out within one business day to schedule kickoff
          and confirm your PMS integration.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button asChild size="lg" className="bg-cta hover:opacity-90">
            <Link to="/">Back to home</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/pricing">View pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
