/**
 * CursorGlow — soft cyan/indigo radial gradient that follows the cursor
 * across designated dark zones. Adds "alive" feel without animation noise.
 *
 * Usage:
 *   <CursorGlow /> mounted once in __root.
 *   Mark dark sections with className="cursor-glow-zone" (or any element)
 *   and the glow will appear inside them when the cursor enters.
 */
import { useEffect, useRef } from "react";

export function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Respect user preferences and touch devices.
    if (typeof window === "undefined") return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const touch = window.matchMedia("(hover: none)").matches;
    if (reduce || touch) return;

    const el = ref.current;
    if (!el) return;

    let rafId: number | null = null;
    let pendingX = 0;
    let pendingY = 0;
    let inZone = false;

    const apply = () => {
      rafId = null;
      el.style.setProperty("--cx", `${pendingX}px`);
      el.style.setProperty("--cy", `${pendingY}px`);
    };

    const onMove = (e: MouseEvent) => {
      pendingX = e.clientX;
      pendingY = e.clientY;
      // Detect zone via element under cursor
      const target = document.elementFromPoint(e.clientX, e.clientY);
      const insideZone = !!target?.closest('[data-glow="dark"], .cursor-glow-zone');
      if (insideZone !== inZone) {
        inZone = insideZone;
        el.style.opacity = inZone ? "1" : "0";
      }
      if (rafId == null) rafId = requestAnimationFrame(apply);
    };

    const onLeave = () => {
      inZone = false;
      el.style.opacity = "0";
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      if (rafId != null) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed z-[5] transition-opacity duration-300"
      style={{
        // Position via CSS variables updated by the rAF loop.
        left: 0,
        top: 0,
        width: 620,
        height: 620,
        opacity: 0,
        transform: "translate3d(calc(var(--cx, -9999px) - 50%), calc(var(--cy, -9999px) - 50%), 0)",
        background:
          "radial-gradient(circle, oklch(0.78 0.16 195 / 0.32) 0%, oklch(0.62 0.22 260 / 0.18) 38%, transparent 72%)",
        filter: "blur(28px)",
        mixBlendMode: "screen",
      }}
    />
  );
}
