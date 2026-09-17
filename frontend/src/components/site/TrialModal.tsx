import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { X, Check, Sparkles, Loader2, Clock, CreditCard, ArrowUpRight } from "lucide-react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { submitLead } from "@/lib/lead-submit";

const SESSION_KEY = "innrly_trial_modal_seen";

const schema = z.object({
  name: z.string().trim().min(1, "Required").max(100),
  email: z.string().trim().email("Enter a valid work email").max(255),
  company: z.string().trim().min(1, "Required").max(150),
  role: z.string().trim().max(100).optional(),
  phone: z.string().trim().min(7, "Enter a valid phone").max(30),
  properties: z.string().trim().min(1, "Required").max(20),
  pms: z.string().trim().max(100).optional(),
});

const benefits = [
  "Full platform access — BI, A/P automation, night audit, labor",
  "Connect your PMS, accounting, and payroll in days",
  "Dedicated onboarding specialist for your portfolio",
  "No credit card. No contract. Cancel anytime.",
];

export function TrialModal() {
  const [open, setOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [showMore, setShowMore] = useState(false);

  // Auto-open once per session
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem(SESSION_KEY)) return;
    
    // Fetch from backend
    fetch("http://127.0.0.1:8000/settings")
      .then(res => res.json())
      .then(data => {
        if (data && data.innrly_trial_modal_disabled === "true") return;
        
        const t = setTimeout(() => {
          setOpen(true);
          sessionStorage.setItem(SESSION_KEY, "1");
        }, 600);
      })
      .catch(err => {
        // Fallback: show if error
        const t = setTimeout(() => {
          setOpen(true);
          sessionStorage.setItem(SESSION_KEY, "1");
        }, 600);
      });
  }, []);

  // Listen for global "open trial" events from CTA buttons
  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("innrly:open-trial", handler);
    return () => window.removeEventListener("innrly:open-trial", handler);
  }, []);

  // Lock scroll while open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
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

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background/85 p-3 backdrop-blur-md animate-in fade-in duration-200 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="trial-modal-title"
      onClick={() => setOpen(false)}
    >
      <div
        className="relative grid w-full max-w-5xl max-h-[92dvh] grid-cols-1 overflow-y-auto overscroll-contain rounded-2xl border border-border bg-card shadow-elevated animate-in zoom-in-95 fade-in slide-in-from-bottom-4 duration-300 md:grid-cols-2 md:max-h-[90dvh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => setOpen(false)}
          aria-label="Close"
          className="absolute right-3 top-3 z-10 inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/60 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>

        {/* LEFT: Value props */}
        <div className="relative hidden overflow-hidden bg-hero p-8 md:flex md:flex-col md:justify-between md:p-10">
          <div className="absolute inset-0 opacity-60" aria-hidden>
            <div className="absolute left-10 top-10 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
            <div className="absolute right-0 bottom-0 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
          </div>
          <div className="relative">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
              <Sparkles className="h-3.5 w-3.5" /> Limited launch offer
            </span>
            <h2
              id="trial-modal-title"
              className="mt-5 text-3xl font-bold leading-tight text-foreground"
            >
              Try Innrly free for <span className="text-gradient">90 days.</span>
            </h2>
            <p className="mt-3 text-sm text-muted-foreground">
              Full platform. Every property. Zero risk. See what your back office looks like when
              the spreadsheets are gone.
            </p>
            <ul className="mt-6 space-y-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5 text-sm text-foreground/90">
                  <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center rounded-full bg-cta">
                    <Check className="h-3 w-3 text-primary-foreground" />
                  </span>
                  {b}
                </li>
              ))}
            </ul>

            {/* New module strip */}
            <div className="mt-6">
              <p className="text-[10px] font-bold uppercase tracking-widest text-accent">
                New in Innrly
              </p>
              <div className="mt-2 grid gap-2">
                <Link
                  to="/solutions/innrly-shift"
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center gap-3 rounded-lg border border-border/40 bg-surface/40 p-3 transition-colors hover:border-accent/40 hover:bg-surface/60"
                >
                  <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-accent/15 text-accent">
                    <Clock className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-foreground">Innrly Shift</span>
                      <span className="rounded-full bg-accent/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent">
                        Add-on
                      </span>
                    </span>
                    <span className="block truncate text-[11px] text-muted-foreground">
                      Face-ID labor in 5 minutes
                    </span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" />
                </Link>
                <Link
                  to="/solutions/innrly-pay"
                  target="_blank"
                  rel="noopener"
                  className="group flex items-center gap-3 rounded-lg border border-border/40 bg-surface/40 p-3 transition-colors hover:border-accent/40 hover:bg-surface/60"
                >
                  <span className="inline-flex h-8 w-8 flex-none items-center justify-center rounded-md bg-accent/15 text-accent">
                    <CreditCard className="h-4 w-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex items-center gap-1.5">
                      <span className="text-sm font-semibold text-foreground">Innrly Pay</span>
                      <span className="rounded-full bg-success/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-success">
                        Included
                      </span>
                    </span>
                    <span className="block truncate text-[11px] text-muted-foreground">
                      Virtual Cards + ACH, no bank logins
                    </span>
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-accent" />
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mt-6 rounded-xl border border-border/40 bg-surface/40 p-4">
            <p className="text-xs uppercase tracking-wider text-muted-foreground">Trusted across</p>
            <p className="mt-1 text-lg font-bold text-foreground">
              200+ hotels · 17,000+ rooms · 3,000+ employees
            </p>
          </div>
        </div>

        {/* RIGHT: Form */}
        <div className="flex flex-col bg-card p-6 sm:p-10">
          {done ? (
            <div className="flex flex-1 flex-col items-center justify-center text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cta">
                <Check className="h-7 w-7 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-foreground">
                You're in. Welcome to Innrly.
              </h3>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Our team will reach out within one business day to schedule your onboarding and
                activate your 90-day trial.
              </p>
              <Button className="mt-6 bg-cta hover:opacity-90" onClick={() => setOpen(false)}>
                Close
              </Button>
            </div>
          ) : (
            <>
              <div className="md:hidden">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-accent">
                  <Sparkles className="h-3.5 w-3.5" /> 90-day free trial
                </span>
                <h2 className="mt-3 text-2xl font-bold text-foreground">
                  Try Innrly free for <span className="text-gradient">90 days.</span>
                </h2>

                {/* Mobile-only module strip */}
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link
                    to="/solutions/innrly-shift"
                    target="_blank"
                    rel="noopener"
                    onClick={() => setOpen(false)}
                    className="flex items-start gap-2 rounded-lg border border-border/60 bg-surface/50 p-2.5"
                  >
                    <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-accent/15 text-accent">
                      <Clock className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold text-foreground">
                        Innrly Shift
                      </span>
                      <span className="mt-0.5 inline-block rounded-full bg-accent/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-accent">
                        Add-on
                      </span>
                    </span>
                  </Link>
                  <Link
                    to="/solutions/innrly-pay"
                    target="_blank"
                    rel="noopener"
                    onClick={() => setOpen(false)}
                    className="flex items-start gap-2 rounded-lg border border-border/60 bg-surface/50 p-2.5"
                  >
                    <span className="inline-flex h-7 w-7 flex-none items-center justify-center rounded-md bg-accent/15 text-accent">
                      <CreditCard className="h-3.5 w-3.5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block text-[12px] font-semibold text-foreground">
                        Innrly Pay
                      </span>
                      <span className="mt-0.5 inline-block rounded-full bg-success/15 px-1.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-success">
                        Included
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
              <h3 className="hidden text-xl font-semibold text-foreground md:block">
                Start your 90-day trial
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">
                Tell us about your portfolio — we'll set you up with full access.
              </p>

              <form onSubmit={onSubmit} className="mt-5 grid gap-3.5 sm:grid-cols-2">
                <Field label="Full name" name="name" placeholder="Jane Patel" />
                <Field
                  label="Work email"
                  name="email"
                  type="email"
                  placeholder="jane@hotelco.com"
                />
                <Field label="Company" name="company" placeholder="Hotel Co." />
                <Field label="Phone" name="phone" type="tel" placeholder="(555) 123-4567" />
                <div className="sm:col-span-2">
                  <Field
                    label="# of properties"
                    name="properties"
                    type="number"
                    placeholder="12"
                    min="1"
                  />
                </div>

                {/* Collapsible secondary fields */}
                {showMore ? (
                  <>
                    <Field label="Your role" name="role" placeholder="VP of Operations" />
                    <Field
                      label="Current PMS (optional)"
                      name="pms"
                      placeholder="Opera, Choice Advantage, etc."
                    />
                  </>
                ) : (
                  <button
                    type="button"
                    onClick={() => setShowMore(true)}
                    className="text-left text-xs font-semibold text-accent hover:underline sm:col-span-2"
                  >
                    + Add role & current PMS (optional)
                  </button>
                )}

                <Button
                  type="submit"
                  size="lg"
                  disabled={submitting}
                  className="mt-2 bg-cta hover:opacity-90 sm:col-span-2"
                >
                  {submitting ? (
                    <>
                      <Loader2 className="mr-1.5 h-4 w-4 animate-spin" /> Submitting…
                    </>
                  ) : (
                    "Start my 90-day free trial"
                  )}
                </Button>
                <div className="flex flex-col items-center gap-2 sm:col-span-2">
                  <p className="text-xs text-muted-foreground">
                    No credit card required. We'll never share your information.
                  </p>
                  <Link
                    to="/features"
                    onClick={() => setOpen(false)}
                    className="text-xs font-semibold text-accent hover:underline"
                  >
                    Not ready? Watch the 2-min product tour →
                  </Link>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  min,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  min?: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <Label htmlFor={name} className="text-xs font-medium text-muted-foreground">
        {label}
      </Label>
      <Input id={name} name={name} type={type} placeholder={placeholder} min={min} />
    </div>
  );
}

/** Helper for any CTA button to open the trial modal. */
export function openTrialModal() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new CustomEvent("innrly:open-trial"));
  }
}
