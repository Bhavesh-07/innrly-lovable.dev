import { Link } from "@tanstack/react-router";
import { Mail } from "lucide-react";
import { Wordmark } from "@/components/site/Wordmark";
import { useState, useEffect } from "react";

const columns = [
  {
    title: "Product",
    links: [
      { to: "/features", label: "Features" },
      { to: "/pricing", label: "Pricing" },
      { to: "/integrations", label: "Integrations" },
      { to: "/onboarding", label: "Get started" },
      { to: "/solutions/innrly-pay", label: "Innrly Pay" },
      { to: "/solutions/innrly-shift", label: "Innrly Shift" },
    ],
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
      { to: "/services/accountability-pack", label: "Accountability Pack" },
    ],
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
      { to: "/industries/select-service", label: "Select-Service Hotels" },
    ],
  },
  {
    title: "Company",
    links: [
      { to: "/about", label: "About" },
      { to: "/contact", label: "Contact" },
      { to: "/security", label: "Security & trust" },
      { to: "/developers", label: "Developers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { to: "/legal/privacy", label: "Privacy" },
      { to: "/legal/terms", label: "Terms" },
      { to: "/legal/subscription", label: "Subscription Agreement" },
      { to: "/legal/security", label: "Security" },
      { to: "/legal/cookies", label: "Cookies" },
      { to: "/legal/accessibility", label: "Accessibility" },
    ],
  },
] as const;

export function Footer() {
  const [socials, setSocials] = useState({
    facebook: "https://www.facebook.com/Innrlyy/",
    instagram: "https://www.instagram.com/innrly/",
    linkedin: "https://www.linkedin.com/company/innrly/",
    twitter: "https://x.com/innrly",
    youtube: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("/api/settings")
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setSocials({
              facebook: data.social_facebook !== undefined ? data.social_facebook : "https://www.facebook.com/Innrlyy/",
              instagram: data.social_instagram !== undefined ? data.social_instagram : "https://www.instagram.com/innrly/",
              linkedin: data.social_linkedin !== undefined ? data.social_linkedin : "https://www.linkedin.com/company/innrly/",
              twitter: data.social_twitter !== undefined ? data.social_twitter : "https://x.com/innrly",
              youtube: data.social_youtube || "",
            });
          }
        })
        .catch(() => {});
    }
  }, []);

  return (
    <footer className="border-t border-border/60 bg-surface/40">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-3 xl:grid-cols-[minmax(13rem,1.25fr)_repeat(5,minmax(0,1fr))] xl:gap-x-12">
          <div className="col-span-2 min-w-0 md:col-span-1">
            <Link to="/" className="flex items-center" aria-label="Innrly home">
              <Wordmark size="md" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              One platform for hotel back-office automation, business intelligence, and labor
              management.
            </p>
            <a
              href="mailto:contact@innrly.com"
              className="mt-4 inline-flex max-w-full items-start gap-2 text-sm font-medium text-accent hover:underline"
            >
              <Mail className="h-4 w-4 shrink-0" aria-hidden />
              <span className="min-w-0 break-all">contact@innrly.com</span>
            </a>

            {/* Social Media Links */}
            <div className="mt-6 flex items-center gap-3">
              {socials.facebook && (
                <a
                  href={socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Facebook"
                  aria-label="Innrly on Facebook"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-foreground/10 hover:text-foreground"
                >
                  <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </a>
              )}
              {socials.instagram && (
                <a
                  href={socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Instagram"
                  aria-label="Innrly on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-foreground/10 hover:text-foreground"
                >
                  <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <rect height="20" rx="5" ry="5" width="20" x="2" y="2" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </a>
              )}
              {socials.linkedin && (
                <a
                  href={socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="LinkedIn"
                  aria-label="Innrly on LinkedIn"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-foreground/10 hover:text-foreground"
                >
                  <svg className="h-4 w-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect height="12" width="4" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
              )}
              {socials.twitter && (
                <a
                  href={socials.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="X (Twitter)"
                  aria-label="Innrly on X"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-foreground/10 hover:text-foreground"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </a>
              )}
              {socials.youtube && (
                <a
                  href={socials.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="YouTube"
                  aria-label="Innrly on YouTube"
                  className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/40 bg-foreground/5 text-muted-foreground transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:bg-foreground/10 hover:text-foreground"
                >
                  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
              )}
            </div>
          </div>
          {columns.map((col) => (
            <div key={col.title} className="min-w-0">
              <h3 className="text-sm font-semibold text-foreground">{col.title}</h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link
                      to={l.to}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Mobile apps row */}
        <div className="mt-12 border-t border-border/60 pt-8">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            Innrly mobile apps
          </p>
          <div className="mt-3 flex flex-wrap items-center gap-3">
            <a
              href="https://apps.apple.com/app/innrly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download Innrly on the App Store"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/60"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.05 12.5a4.27 4.27 0 0 1 2.04-3.59 4.38 4.38 0 0 0-3.45-1.87c-1.45-.15-2.85.86-3.6.86-.76 0-1.9-.84-3.13-.82a4.6 4.6 0 0 0-3.87 2.36c-1.66 2.88-.42 7.13 1.19 9.46.79 1.14 1.72 2.42 2.94 2.38 1.18-.05 1.63-.76 3.06-.76 1.42 0 1.83.76 3.08.74 1.27-.02 2.08-1.16 2.86-2.31a10.2 10.2 0 0 0 1.3-2.66 4.13 4.13 0 0 1-2.42-3.79zM14.78 5.6a4.2 4.2 0 0 0 .96-3.02 4.27 4.27 0 0 0-2.77 1.43 3.99 3.99 0 0 0-.99 2.91 3.53 3.53 0 0 0 2.8-1.32z" />
              </svg>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-normal text-muted-foreground">
                  Download on the
                </span>
                <span>App Store</span>
              </span>
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.innrly"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get Innrly on Google Play"
              className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-4 py-2.5 text-sm font-semibold text-foreground transition hover:border-accent/60"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M3.6 2.1c-.3.3-.5.7-.5 1.2v17.4c0 .5.2.9.5 1.2l9.3-9.9L3.6 2.1zm10.4 11l2.8 2.9-9.5 5.4 6.7-8.3zm0-2.2L7.3 2.6l9.5 5.4-2.8 2.9zm6.8 1.1c0 .5-.3 1-.8 1.3l-2.5 1.4-3-3.2 3-3.2 2.5 1.4c.5.3.8.8.8 1.3z" />
              </svg>
              <span className="flex flex-col leading-tight">
                <span className="text-[10px] font-normal text-muted-foreground">Get it on</span>
                <span>Google Play</span>
              </span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-start justify-between gap-4 border-t border-border/60 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Innrly. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">Built for hotel owners and operators.</p>
        </div>
      </div>
    </footer>
  );
}
