import { useEffect, useState } from "react";
import { useLocation, Link } from "@tanstack/react-router";
import { ArrowRight, X } from "lucide-react";
import { track } from "@/lib/analytics";

/**
 * Desktop-only scroll-triggered CTA card. Appears bottom-right after the user
 * scrolls past 50% of a long page (blog post / compare). Dismissible per route.
 */
const ALLOW_PREFIXES = ["/blog/", "/compare/innrly-vs-"];
const STORAGE_PREFIX = "innrly_desktop_cta_dismissed:";

export function DesktopScrollCta() {
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

  return (
    <div className="fixed bottom-6 right-6 z-40 hidden w-80 animate-in fade-in slide-in-from-bottom-4 duration-500 sm:block">
      <div className="rounded-2xl border border-accent/30 bg-card/95 p-5 shadow-glow backdrop-blur">
        <button
          type="button"
          onClick={dismiss}
          aria-label="Dismiss"
          className="absolute right-3 top-3 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          See it on your portfolio
        </p>
        <p className="mt-2 text-sm font-semibold text-foreground">Book a 20-minute walkthrough</p>
        <p className="mt-1 text-xs text-muted-foreground">
          We'll show Innrly running against a portfolio your size — PMS, accounting, and labor wired
          up.
        </p>
        <Link
          to="/contact"
          onClick={() => track("cta_click", { cta: "book_demo", location: "desktop_scroll_cta" })}
          className="mt-4 inline-flex w-full items-center justify-center gap-1.5 rounded-md bg-cta px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95"
        >
          Book a demo <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
