import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { track } from "@/lib/analytics";

const STORAGE_KEY = "innrly_cookie_consent_v1";

type Choice = "accepted" | "rejected";

/**
 * Lightweight EU/UK-friendly cookie consent banner.
 *
 * Stores a single choice in localStorage. Until the user makes a choice,
 * downstream analytics scripts should check `window.__cookieConsent === "accepted"`
 * before firing. The banner re-appears only if the stored value is missing.
 */
export function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY) as Choice | null;
      if (stored) {
        (window as unknown as { __cookieConsent?: Choice }).__cookieConsent = stored;
      } else {
        setVisible(true);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  function decide(choice: Choice) {
    try {
      localStorage.setItem(STORAGE_KEY, choice);
      (window as unknown as { __cookieConsent?: Choice }).__cookieConsent = choice;
    } catch {
      /* ignore */
    }
    track("cookie_consent", { choice });
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Cookie consent"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 backdrop-blur sm:bottom-4 sm:left-4 sm:right-4 sm:rounded-2xl sm:border"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p className="text-sm text-muted-foreground">
          We use cookies to improve your experience and measure site performance. See our{" "}
          <Link to="/legal/cookies" className="text-accent underline">
            cookie policy
          </Link>
          .
        </p>
        <div className="flex shrink-0 gap-2">
          <Button
            variant="outline"
            size="sm"
            className="border-border bg-background/40"
            onClick={() => decide("rejected")}
          >
            Reject
          </Button>
          <Button size="sm" className="bg-cta hover:opacity-90" onClick={() => decide("accepted")}>
            Accept
          </Button>
        </div>
      </div>
    </div>
  );
}
