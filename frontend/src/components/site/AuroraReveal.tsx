import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

/**
 * AuroraReveal — one signature scroll moment.
 * On first intersection, sweeps an aurora gradient diagonally across the
 * children once. Used sparingly on hero headlines to give the site a memorable
 * motion beat without turning into a parallax circus.
 */
export function AuroraReveal({
  children,
  className,
  delay = 120,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setRevealed(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            window.setTimeout(() => setRevealed(true), delay);
            io.disconnect();
            break;
          }
        }
      },
      { threshold: 0.2 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  return (
    <span
      ref={ref}
      className={cn("aurora-reveal relative inline-block", revealed && "is-revealed", className)}
    >
      <style>{`
        .aurora-reveal::after {
          content: "";
          position: absolute;
          inset: -8% -6%;
          pointer-events: none;
          background: linear-gradient(
            105deg,
            transparent 0%,
            transparent 38%,
            oklch(0.82 0.16 195 / 0.55) 46%,
            oklch(0.62 0.22 260 / 0.65) 50%,
            oklch(0.70 0.20 310 / 0.55) 54%,
            transparent 62%,
            transparent 100%
          );
          background-size: 260% 100%;
          background-position: 120% 0;
          mix-blend-mode: screen;
          filter: blur(14px);
          opacity: 0;
          transition: opacity 0.4s ease;
        }
        .aurora-reveal.is-revealed::after {
          opacity: 1;
          animation: aurora-reveal-sweep 1.6s cubic-bezier(0.22, 1, 0.36, 1) forwards;
        }
        @keyframes aurora-reveal-sweep {
          0% { background-position: 120% 0; opacity: 0; }
          18% { opacity: 1; }
          82% { opacity: 1; }
          100% { background-position: -40% 0; opacity: 0; }
        }
        @media (prefers-reduced-motion: reduce) {
          .aurora-reveal::after { display: none; }
        }
      `}</style>
      {children}
    </span>
  );
}
