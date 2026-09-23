import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Check, CalendarCheck, MonitorPlay, FileText } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Section } from "@/components/site/Section";
import { LogosStrip } from "@/components/site/LogosStrip";
import { useFormGuard, honeypotFieldProps } from "@/lib/form-guard";
import { track } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import { submitLead } from "@/lib/lead-submit";
import { defaultSeoData, fetchSeoData, getMetaTags } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  loader: async () => {
    const seo = await fetchSeoData("/contact");
    return { seo };
  },
  head: ({ loaderData }) => ({
    meta: [
      ...getMetaTags(loaderData?.seo || null, defaultSeoData["/contact"], "/contact"),
      {
        property: "og:image:alt",
        content: "Talk to an operator, not an SDR. 30-minute demo on your portfolio.",
      },
    ],
    links: [{ rel: "canonical", href: "https://innrly.com/contact" }],
    scripts: [
      {
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
              areaServed: "US",
            },
          },
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: "/" },
            { "@type": "ListItem", position: 2, name: "Contact", item: "/contact" },
          ],
        }),
      },
    ],
  }),
});

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  company: z.string().trim().min(1, "Company required").max(150),
  phone: z.string().trim().min(7, "Valid phone required").max(20),
  properties: z.string().trim().max(20).optional(),
  message: z.string().trim().max(1000).optional(),
});

const STEPS = [
  {
    icon: CalendarCheck,
    title: "Discovery call",
    body: "30-min Zoom. Tell us about your portfolio and what's slowing the back office down.",
  },
  {
    icon: MonitorPlay,
    title: "Live data walkthrough",
    body: "Bring one property — we'll show the dashboards live, no slides, no pitch deck.",
  },
  {
    icon: FileText,
    title: "Tailored quote",
    body: "Per-property pricing scoped to your stack, with a 90-day free trial to prove it out.",
  },
];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [consent, setConsent] = useState(false);
  const [marketingOptIn, setMarketingOptIn] = useState(false);
  const { honeypotRef, check } = useFormGuard();

  useEffect(() => {
    track("contact_form_viewed");
  }, []);

  const fieldSchemas: Record<string, z.ZodTypeAny> = {
    name: contactSchema.shape.name,
    email: contactSchema.shape.email,
    company: contactSchema.shape.company,
    phone: contactSchema.shape.phone,
    properties: contactSchema.shape.properties,
    message: contactSchema.shape.message,
  };

  const validateField = (name: string, value: string) => {
    const schema = fieldSchemas[name];
    if (!schema) return;
    const r = schema.safeParse(value === "" ? undefined : value);
    setErrors((prev) => {
      const next = { ...prev };
      if (!r.success && value !== "") next[name] = r.error.issues[0]?.message ?? "Invalid";
      else delete next[name];
      return next;
    });
  };

  const onBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    validateField(e.target.name, e.target.value);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const guard = check();
    if (!guard.ok) {
      track("contact_form_blocked", { reason: guard.reason });
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
      message: String(form.get("message") ?? ""),
    };
    const parsed = contactSchema.safeParse(data);
    if (!parsed.success) {
      const errs: Record<string, string> = {};
      parsed.error.issues.forEach((i) => (errs[String(i.path[0])] = i.message));
      setErrors(errs);
      track("contact_form_validation_failed", { fields: Object.keys(errs).join(",") });
      toast.error("Please fix the highlighted fields");
      return;
    }
    setErrors({});
    setSubmitting(true);
    track("demo_requested", {
      properties: data.properties || null,
      has_message: data.message.length > 0,
      sms_consent: consent,
      marketing_opt_in: marketingOptIn,
    });
    const res = await submitLead({ ...parsed.data, source: "contact" });
    setSubmitting(false);
    if (!res.ok) {
      toast.error(res.error ?? "Submission failed. Please try again.");
      return;
    }
    setSubmitted(true);
    toast.success("Thanks — we'll be in touch within one business day");
  };

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-hero opacity-90" aria-hidden />
        <div className="relative mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-accent">
            <Check className="h-3 w-3" aria-hidden />
            Replies within one business day
          </span>
          <h1 className="mt-5 text-4xl font-bold text-foreground sm:text-5xl">
            Let's see Innrly with <span className="text-gradient">your portfolio.</span>
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            30-minute demo, no pitch deck. Bring one property and we'll show the dashboards live.
          </p>
          <p className="mt-3 text-sm text-muted-foreground">
            Trusted by independent operators and management groups across the US.
          </p>
        </div>
      </section>

      {/* Two-column: process + form */}
      <Section className="py-12">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left: What happens next */}
          <div className="lg:col-span-5">
            <h2 className="text-[11px] font-bold uppercase tracking-[0.18em] text-accent">
              What happens next
            </h2>
            <ol className="mt-6 space-y-4">
              {STEPS.map((s, i) => (
                <li
                  key={s.title}
                  className="relative rounded-2xl border border-border bg-card/70 p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-accent/15 text-accent">
                      <s.icon className="h-5 w-5" aria-hidden />
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">
                          Step {i + 1}
                        </span>
                      </div>
                      <h3 className="mt-0.5 text-base font-semibold text-foreground">{s.title}</h3>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-6 rounded-2xl border border-border bg-card/50 p-5">
              <p className="text-sm leading-relaxed text-muted-foreground">
                Prefer email?{" "}
                <a
                  href="mailto:sales@innrly.com"
                  className="font-semibold text-accent hover:underline"
                >
                  sales@innrly.com
                </a>{" "}
                — or{" "}
                <Link to="/onboarding" className="font-semibold text-accent hover:underline">
                  skip the demo and start your 90-day trial →
                </Link>
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="lg:col-span-7">
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-3xl border border-accent bg-card p-12 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent/15 text-accent">
                  <Check className="h-7 w-7" aria-hidden />
                </div>
                <h2 className="mt-6 text-2xl font-bold text-foreground">
                  Got it — we'll be in touch.
                </h2>
                <p className="mt-2 max-w-md text-sm text-muted-foreground">
                  A member of the Innrly team will reach out within one business day to schedule
                  your demo.
                </p>
                <ol className="mt-8 w-full max-w-md space-y-3 text-left">
                  {STEPS.map((s, i) => (
                    <li
                      key={s.title}
                      className="flex items-start gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/15 text-xs font-bold text-accent">
                        {i + 1}
                      </span>
                      <span>
                        <span className="font-semibold text-foreground">{s.title}.</span> {s.body}
                      </span>
                    </li>
                  ))}
                </ol>
              </div>
            ) : (
              <div className="relative">
                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br from-accent/40 via-transparent to-accent/20 opacity-60 blur-sm"
                  aria-hidden
                />
                <form
                  onSubmit={onSubmit}
                  className="relative rounded-3xl border border-border bg-card p-6 sm:p-8"
                  noValidate
                >
                  <input ref={honeypotRef} {...honeypotFieldProps} />

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field
                      label="Your name"
                      name="name"
                      required
                      error={errors.name}
                      onBlur={onBlur}
                    />
                    <Field
                      label="Work email"
                      name="email"
                      type="email"
                      required
                      error={errors.email}
                      onBlur={onBlur}
                    />
                    <Field
                      label="Company"
                      name="company"
                      required
                      error={errors.company}
                      onBlur={onBlur}
                    />
                    <Field
                      label="Phone"
                      name="phone"
                      type="tel"
                      required
                      error={errors.phone}
                      onBlur={onBlur}
                    />
                    <Field
                      label="# of properties"
                      name="properties"
                      type="number"
                      placeholder="e.g. 12"
                      error={errors.properties}
                      onBlur={onBlur}
                      className="sm:col-span-2"
                    />
                  </div>
                  <div className="mt-5">
                    <Label htmlFor="message" className="text-sm font-medium text-foreground">
                      What are you hoping to solve?{" "}
                      <span className="text-muted-foreground">(optional)</span>
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={4}
                      maxLength={1000}
                      onBlur={onBlur}
                      className="mt-2 bg-background"
                    />
                    {errors.message && (
                      <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                    )}
                  </div>

                  {/* Consolidated consent */}
                  <div className="mt-6 space-y-3 rounded-xl border border-border bg-background/40 p-4">
                    <label className="flex cursor-pointer items-start gap-3">
                      <Checkbox
                        checked={consent}
                        onCheckedChange={(c) => setConsent(c === true)}
                        className="mt-0.5"
                        aria-required
                      />
                      <span className="text-xs leading-relaxed text-muted-foreground">
                        By submitting, I authorize Innrly to contact me by email, phone, and text at
                        the number provided in response to my inquiry, possibly using automated
                        means. Message and data rates may apply. Message frequency is limited to no
                        more than 3 messages per week. Reply HELP for help or STOP to opt out at any
                        time. Consent is not a condition of purchase. Innrly does not sell or share
                        your information. See our{" "}
                        <Link
                          to="/legal/privacy"
                          className="font-semibold text-accent hover:underline"
                        >
                          privacy policy
                        </Link>{" "}
                        and{" "}
                        <Link
                          to="/legal/terms"
                          className="font-semibold text-accent hover:underline"
                        >
                          terms of service
                        </Link>
                        . <span className="text-accent">*</span>
                      </span>
                    </label>
                    <label className="flex cursor-pointer items-start gap-3">
                      <Checkbox
                        checked={marketingOptIn}
                        onCheckedChange={(c) => setMarketingOptIn(c === true)}
                        className="mt-0.5"
                      />
                      <span className="text-xs leading-relaxed text-muted-foreground">
                        Optional: I'd also like to receive product updates and occasional marketing
                        messages from Innrly.
                      </span>
                    </label>
                  </div>

                  <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting || !consent}
                      className="bg-cta hover:opacity-90"
                    >
                      {submitting ? "Sending..." : "Book my demo"}
                    </Button>
                    <Link
                      to="/onboarding"
                      className="text-sm font-medium text-accent hover:underline"
                    >
                      Or start the 90-day trial →
                    </Link>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Logos trust band */}
      <LogosStrip compact />
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
  error,
  className,
  onBlur,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  error?: string;
  className?: string;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}) {
  return (
    <div className={className}>
      <Label htmlFor={name} className="text-sm font-medium text-foreground">
        {label} {required && <span className="text-accent">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={255}
        onBlur={onBlur}
        aria-invalid={!!error}
        className={cn(
          "mt-2 bg-background focus-visible:ring-accent",
          error && "border-destructive focus-visible:ring-destructive",
        )}
      />
      {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
    </div>
  );
}
