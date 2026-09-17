import { useState } from "react";
import { z } from "zod";
import { Mail, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { submitLead } from "@/lib/lead-submit";

const schema = z.object({
  email: z.string().trim().email("Enter a valid email").max(255),
});

interface Props {
  variant?: "card" | "inline";
  source?: string;
}

export function NewsletterSignup({ variant = "card", source = "blog" }: Props) {
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  async function onSubmit(e: React.FormEvent) {
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
      kind: "newsletter",
    } as never);
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
    return (
      <div
        className={`flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/5 px-5 py-4 text-sm text-foreground ${variant === "card" ? "" : ""}`}
      >
        <CheckCircle2 className="h-5 w-5 shrink-0 text-accent" aria-hidden />
        <span>Thanks — we'll send the next operator brief to your inbox.</span>
      </div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
        <Input
          type="email"
          required
          placeholder="you@hotelgroup.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="sm:flex-1"
          aria-label="Email address"
        />
        <Button
          type="submit"
          disabled={submitting}
          className="bg-cta hover:bg-cta/90 text-primary-foreground"
        >
          {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
        </Button>
      </form>
    );
  }

  return (
    <aside className="rounded-2xl border border-border bg-surface/40 p-6 sm:p-8">
      <div className="flex items-start gap-3">
        <div className="rounded-lg bg-accent/10 p-2">
          <Mail className="h-5 w-5 text-accent" aria-hidden />
        </div>
        <div className="flex-1">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Operator brief
          </p>
          <h2 className="mt-1 text-xl font-semibold text-foreground">
            One email a month. No fluff.
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Benchmarks, automation playbooks, and the occasional rant about spreadsheets — written
            for multi-property finance and ops leaders.
          </p>
          <form onSubmit={onSubmit} className="mt-5 flex flex-col gap-2 sm:flex-row">
            <Input
              type="email"
              required
              placeholder="you@hotelgroup.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="sm:flex-1"
              aria-label="Email address"
            />
            <Button
              type="submit"
              disabled={submitting}
              className="bg-cta hover:bg-cta/90 text-primary-foreground"
            >
              {submitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Subscribe"}
            </Button>
          </form>
          <p className="mt-2 text-[11px] text-muted-foreground">
            Unsubscribe any time. We never sell or share emails.
          </p>
        </div>
      </div>
    </aside>
  );
}
