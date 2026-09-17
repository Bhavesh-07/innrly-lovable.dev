import { Star } from "lucide-react";
import type { Testimonial } from "@/lib/testimonials";

export function Testimonials({ testimonials = [] }: { testimonials?: Testimonial[] }) {
  if (!testimonials || testimonials.length === 0) {
    return null; // Do not render if no testimonials are available
  }

  return (
    <section
      aria-labelledby="testimonials-heading"
      className="border-b border-border/60 bg-surface/30"
    >
      <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="testimonials-heading"
            className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          >
            Operators who trust Innrly with the back office
          </h2>
          <p className="mt-3 text-base text-muted-foreground">
            Finance leaders, owners, and GMs using Innrly across 200+ properties.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <figure
              key={t.id || idx}
              className="flex h-full flex-col justify-between rounded-2xl border border-border/60 bg-background p-6 shadow-sm"
            >
              <div>
                <div className="flex gap-0.5 text-accent" aria-label="5 out of 5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 text-base leading-relaxed text-foreground">
                  “{t.quote}”
                </blockquote>
              </div>
              <figcaption className="mt-6 border-t border-border/60 pt-4">
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">
                  {t.title}{t.company ? (t.title ? ` · ${t.company}` : t.company) : ""}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
