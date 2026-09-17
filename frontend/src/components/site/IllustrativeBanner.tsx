/**
 * IllustrativeBanner — sits at the top of every case study page (and the
 * case-studies index) to clearly label the figures as directional composites
 * drawn from typical Innrly engagements, not audited results from a single
 * named customer. Prevents the "numbers look too good to be true" reaction.
 */
import { Info } from "lucide-react";

export function IllustrativeBanner({ compact = false }: { compact?: boolean }) {
  return (
    <div
      role="note"
      aria-label="Illustrative scenario disclosure"
      className="border-b border-border/60 bg-surface/40"
    >
      <div className="mx-auto flex max-w-7xl items-start gap-3 px-4 py-3 sm:px-6 lg:px-8">
        <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-accent" aria-hidden />
        <p className="text-xs leading-relaxed text-muted-foreground sm:text-sm">
          <span className="font-semibold text-foreground">Illustrative scenario.</span>{" "}
          {compact ? (
            <>
              Figures are directional ranges composited from typical Innrly engagements — not
              audited results from a single named customer. Actual outcomes vary by portfolio size,
              brand mix, PMS / accounting stack, and starting baseline.
            </>
          ) : (
            <>
              The figures below are directional ranges composited from typical Innrly engagements
              with multi-property operators — they are{" "}
              <span className="text-foreground">
                not audited results from a single named customer
              </span>{" "}
              and are intended to show the shape of impact, not a guarantee. Actual outcomes vary by
              portfolio size, brand mix, PMS / accounting stack, AP volume, and the operator's
              starting baseline. Reach out for a walkthrough using a sample of your actual data —
              we'll size the opportunity for your portfolio before you commit to anything.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
