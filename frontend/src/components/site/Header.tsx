import { Link } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { openTrialModal } from "@/components/site/TrialModal";
import { Wordmark } from "@/components/site/Wordmark";

const primaryNav = [
  { to: "/features", label: "Features" },
  { to: "/solutions/business-intelligence", label: "Solutions" },
  { to: "/pricing", label: "Pricing" },
  { to: "/contact", label: "Contact" },
] as const;

const resources: { to: string; label: string; desc: string }[] = [
  {
    to: "/integrations",
    label: "Integrations",
    desc: "50+ PMS, accounting, payroll & banking systems.",
  },
  { to: "/case-studies", label: "Case studies", desc: "Real portfolios, real hours saved." },
  { to: "/blog", label: "Blog", desc: "Operator playbooks and product updates." },
  { to: "/glossary", label: "Glossary", desc: "Hotel back-office terms, plainly defined." },
  { to: "/roi-calculator", label: "ROI calculator", desc: "See your savings in 30 seconds." },
  { to: "/security", label: "Security & trust", desc: "Encryption, access control, compliance." },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const resourcesRef = useRef<HTMLDivElement | null>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [loginLink, setLoginLink] = useState("https://app.innrly.com");

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetch("/api/settings")
        .then(res => res.json())
        .then(data => {
          if (data && data.innrly_login_link) {
            setLoginLink(data.innrly_login_link);
          }
        })
        .catch(err => console.error("Failed to load settings in Header", err));
    }
  }, []);

  // Close resources dropdown on outside click / Escape
  useEffect(() => {
    if (!resourcesOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!resourcesRef.current?.contains(e.target as Node)) setResourcesOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
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

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center" aria-label="Innrly home">
          <Wordmark size="md" />
        </Link>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {primaryNav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {item.label}
            </Link>
          ))}

          {/* Resources dropdown */}
          <div
            ref={resourcesRef}
            className="relative"
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
          >
            <button
              type="button"
              onClick={() => setResourcesOpen((v) => !v)}
              aria-haspopup="menu"
              aria-expanded={resourcesOpen}
              className="inline-flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Resources
              <ChevronDown
                className={`h-3.5 w-3.5 transition-transform ${resourcesOpen ? "rotate-180" : ""}`}
                aria-hidden
              />
            </button>

            {resourcesOpen && (
              <div
                role="menu"
                className="absolute right-0 top-full z-50 mt-2 w-80 overflow-hidden rounded-2xl border-2 border-accent/30 bg-card/95 p-2 shadow-[0_20px_60px_-20px_color-mix(in_oklab,var(--accent)_45%,transparent)] backdrop-blur-xl"
              >
                {resources.map((r) => (
                  <Link
                    key={r.to}
                    to={r.to}
                    role="menuitem"
                    onClick={() => setResourcesOpen(false)}
                    className="group flex flex-col gap-0.5 rounded-xl px-3 py-2.5 transition-colors hover:bg-accent/10"
                  >
                    <span className="text-sm font-semibold text-foreground group-hover:text-accent">
                      {r.label}
                    </span>
                    <span className="text-xs text-muted-foreground">{r.desc}</span>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost" size="sm">
            <a href={loginLink} rel="noreferrer">
              Login
            </a>
          </Button>
          <Button size="sm" onClick={openTrialModal} className="bg-cta hover:opacity-90">
            Start free trial
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link to="/contact">See it live</Link>
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-11 w-11 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-border/60 bg-background md:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-3" aria-label="Mobile">
            {primaryNav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}

            <div className="mt-2 border-t border-border/60 pt-2">
              <p className="px-3 pb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                Resources
              </p>
              {resources.map((r) => (
                <Link
                  key={r.to}
                  to={r.to}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
                >
                  {r.label}
                </Link>
              ))}
            </div>

            <div className="mt-2 flex flex-col gap-2 border-t border-border/60 pt-3">
              <Button asChild variant="ghost">
                <a href={loginLink} rel="noreferrer">
                  Login
                </a>
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setOpen(false);
                  openTrialModal();
                }}
              >
                Start 90-day free trial
              </Button>
              <Button asChild className="bg-cta">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  See it live
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
