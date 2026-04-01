import { motion } from "framer-motion";
import { useEffect, useState, useCallback, useRef } from "react";
import { LiveMetricCard } from "./LiveMetricCard";

const metrics = [
  { label: "Occupancy", value: 87, suffix: "%", trend: "up" as const },
  { label: "RevPAR Index", value: 112, suffix: "%", trend: "up" as const },
  { label: "RevPAR", value: 142, prefix: "$", trend: "up" as const },
  { label: "RevPAR Rank", value: 3, trend: "up" as const },
  { label: "Labor %", value: 31, suffix: "%", trend: "down" as const },
  { label: "ADR", value: 139, prefix: "$", trend: "up" as const },
  { label: "MPOR", value: 28, prefix: "$", trend: "down" as const },
  { label: "Revenue", value: 1850, prefix: "$", trend: "up" as const },
];

const cardW = 112;
const cardH = 70;

function getPositionAtFraction(frac: number, rect: { x: number; y: number; w: number; h: number }) {
  const perim = 2 * rect.w + 2 * rect.h;
  const dist = frac * perim;
  let x: number, y: number;

  if (dist <= rect.w) {
    x = rect.x + dist;
    y = rect.y;
  } else if (dist <= rect.w + rect.h) {
    x = rect.x + rect.w;
    y = rect.y + (dist - rect.w);
  } else if (dist <= 2 * rect.w + rect.h) {
    x = rect.x + rect.w - (dist - rect.w - rect.h);
    y = rect.y + rect.h;
  } else {
    x = rect.x;
    y = rect.y + rect.h - (dist - 2 * rect.w - rect.h);
  }

  return { left: x - cardW / 2, top: y - cardH / 2 };
}

interface OrbitingMetricCardsProps {
  containerRef: React.RefObject<HTMLDivElement>;
}

export const OrbitingMetricCards = ({ containerRef }: OrbitingMetricCardsProps) => {
  const [highlightedIndex, setHighlightedIndex] = useState<number | null>(null);
  const [imgRect, setImgRect] = useState<{ x: number; y: number; w: number; h: number } | null>(null);

  const pickRandom = useCallback(() => {
    const idx = Math.floor(Math.random() * metrics.length);
    setHighlightedIndex(idx);
    setTimeout(() => setHighlightedIndex(null), 2500);
  }, []);

  useEffect(() => {
    const interval = setInterval(pickRandom, 4500);
    const initial = setTimeout(pickRandom, 2000);
    return () => { clearInterval(interval); clearTimeout(initial); };
  }, [pickRandom]);

  useEffect(() => {
    const measure = () => {
      if (containerRef.current) {
        const el = containerRef.current;
        const parent = el.parentElement;
        if (parent) {
          const elR = el.getBoundingClientRect();
          const pR = parent.getBoundingClientRect();
          if (elR.width > 0 && elR.height > 0) {
            setImgRect({
              x: elR.left - pR.left,
              y: elR.top - pR.top,
              w: elR.width,
              h: elR.height,
            });
          }
        }
      }
    };
    const timer = setTimeout(measure, 300);
    const timer2 = setTimeout(measure, 1000);
    const timer3 = setTimeout(measure, 2000);
    window.addEventListener("resize", measure);

    const imgs = containerRef.current?.querySelectorAll("img");
    imgs?.forEach((img) => {
      if (!img.complete) {
        img.addEventListener("load", measure);
      }
    });

    return () => {
      clearTimeout(timer);
      clearTimeout(timer2);
      clearTimeout(timer3);
      window.removeEventListener("resize", measure);
      imgs?.forEach((img) => img.removeEventListener("load", measure));
    };
  }, [containerRef]);

  if (!imgRect) return null;

  return (
    <>
      {metrics.map((metric, i) => (
        <RotatingCard
          key={metric.label}
          metric={metric}
          index={i}
          startFrac={i / metrics.length}
          imgRect={imgRect}
          isHighlighted={highlightedIndex === i}
        />
      ))}
    </>
  );
};

interface RotatingCardProps {
  metric: typeof metrics[number];
  index: number;
  startFrac: number;
  imgRect: { x: number; y: number; w: number; h: number };
  isHighlighted: boolean;
}

const RotatingCard = ({
  metric, index, startFrac, imgRect, isHighlighted,
}: RotatingCardProps) => {
  const [pos, setPos] = useState(() => getPositionAtFraction(startFrac, imgRect));
  const fracRef = useRef(startFrac);
  const imgRectRef = useRef(imgRect);

  // Keep imgRectRef in sync without restarting animation
  useEffect(() => {
    imgRectRef.current = imgRect;
  }, [imgRect]);

  // Single animation loop that never restarts
  useEffect(() => {
    const speed = 0.0003;
    let raf: number;

    const animate = () => {
      fracRef.current = (fracRef.current + speed) % 1;
      const newPos = getPositionAtFraction(fracRef.current, imgRectRef.current);
      setPos(newPos);
      raf = requestAnimationFrame(animate);
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // intentionally empty - runs once, uses refs for latest values

  return (
    <motion.div
      className="absolute w-28"
      style={{
        left: pos.left,
        top: pos.top,
        zIndex: isHighlighted ? 30 : 20,
      }}
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        scale: isHighlighted ? 1.3 : 1,
      }}
      transition={{
        opacity: { duration: 0.6, delay: 0.3 + index * 0.15 },
        scale: { duration: 0.5, ease: "easeInOut" },
      }}
    >
      <LiveMetricCard
        label={metric.label}
        value={metric.value}
        suffix={metric.suffix}
        prefix={metric.prefix}
        trend={metric.trend}
        delay={600 + index * 200}
      />
    </motion.div>
  );
};
