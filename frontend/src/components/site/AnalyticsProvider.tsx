import { useEffect, useRef } from "react";
import { useLocation } from "@tanstack/react-router";
import { track, trackPageView } from "@/lib/analytics";

/**
 * Mounts site-wide analytics listeners:
 *   • route-change page_view
 *   • 50% / 90% scroll_depth (once per page)
 *   • outbound link clicks (delegated)
 *
 * See src/lib/analytics.ts and docs/DEVELOPER_HANDOFF_ANALYTICS.md
 */
export function AnalyticsProvider() {
  const { pathname, search } = useLocation();
  const lastPath = useRef<string>("");

  // Page view on every route change
  useEffect(() => {
    const full =
      pathname +
      (search ? `?${new URLSearchParams(search as Record<string, string>).toString()}` : "");
    if (lastPath.current === full) return;
    lastPath.current = full;
    trackPageView(pathname);
  }, [pathname, search]);

  // Scroll depth — reset on route change
  useEffect(() => {
    if (typeof window === "undefined") return;
    const hit = { 50: false, 90: false };
    const onScroll = () => {
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      if (max <= 0) return;
      const pct = (window.scrollY / max) * 100;
      if (!hit[50] && pct >= 50) {
        hit[50] = true;
        track("scroll_depth", { depth: 50 });
      }
      if (!hit[90] && pct >= 90) {
        hit[90] = true;
        track("scroll_depth", { depth: 90 });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [pathname]);

  // Outbound link delegation — one global listener
  useEffect(() => {
    if (typeof window === "undefined") return;
    const onClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement | null)?.closest?.("a");
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href.startsWith("#") || href.startsWith("/")) return;
      try {
        const u = new URL(href, window.location.origin);
        if (u.origin !== window.location.origin) {
          track("outbound_click", { href: u.href, host: u.host });
        }
      } catch {
        /* invalid URL — ignore */
      }
    };
    document.addEventListener("click", onClick, { capture: true });
    return () => document.removeEventListener("click", onClick, { capture: true });
  }, []);

  return null;
}
