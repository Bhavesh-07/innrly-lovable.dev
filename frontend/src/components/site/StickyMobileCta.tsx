import { useLocation } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { openTrialModal } from "@/components/site/TrialModal";
import { track } from "@/lib/analytics";

/**
 * Mobile-only sticky CTA bar. Hidden on form pages where it would be redundant.
 * Opens the 90-day trial modal directly so it's always one tap away.
 */
export function StickyMobileCta() {
  const { pathname } = useLocation();
  const hidden =
    pathname.startsWith("/contact") ||
    pathname.startsWith("/onboarding") ||
    pathname.startsWith("/legal");
  if (hidden) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 py-3 backdrop-blur-md sm:hidden">
      <div className="flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-foreground">
            Try Innrly free for 90 days
          </div>
          <div className="truncate text-[11px] text-muted-foreground">
            Full platform · No credit card
          </div>
        </div>
        <button
          type="button"
          onClick={() => {
            track("cta_click", { cta: "open_trial", location: "sticky_mobile_cta" });
            openTrialModal();
          }}
          className="inline-flex shrink-0 items-center gap-1 rounded-md bg-cta px-3.5 py-2 text-sm font-semibold text-primary-foreground"
        >
          Start trial <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
