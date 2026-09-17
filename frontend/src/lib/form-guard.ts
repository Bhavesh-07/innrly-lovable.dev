import { useRef } from "react";

/**
 * Anti-bot guards for forms.
 * - Honeypot: a hidden field bots tend to fill in.
 * - Timing trap: humans take more than ~1.5s to fill a form.
 */
export function useFormGuard(minMs = 1500) {
  const mountedAt = useRef<number>(Date.now());
  const honeypotRef = useRef<HTMLInputElement>(null);

  const check = (): { ok: true } | { ok: false; reason: "honeypot" | "timing" } => {
    if (honeypotRef.current && honeypotRef.current.value.trim().length > 0) {
      return { ok: false, reason: "honeypot" };
    }
    if (Date.now() - mountedAt.current < minMs) {
      return { ok: false, reason: "timing" };
    }
    return { ok: true };
  };

  return { honeypotRef, check };
}

/** Hidden honeypot field. Visually hidden + aria-hidden + autocomplete off. */
export const honeypotFieldProps = {
  type: "text" as const,
  name: "company_website", // generic plausible name bots target
  tabIndex: -1,
  autoComplete: "off",
  "aria-hidden": true,
  style: {
    position: "absolute" as const,
    left: "-9999px",
    width: "1px",
    height: "1px",
    opacity: 0,
    pointerEvents: "none" as const,
  },
};
