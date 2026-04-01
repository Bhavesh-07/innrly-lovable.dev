import { motion } from "framer-motion";

// Animated arrows overlaying the integration diagram
// Positions are percentage-based relative to the image container

interface FlowArrow {
  id: string;
  // SVG path points as percentages of container
  x1: string;
  y1: string;
  x2: string;
  y2: string;
  color: string;
  delay: number;
  bidirectional?: boolean;
}

const arrows: FlowArrow[] = [
  // PMS Systems → INNRLY (top center, pointing down)
  { id: "pms", x1: "50%", y1: "18%", x2: "50%", y2: "38%", color: "hsl(var(--primary))", delay: 0 },
  // OTA + Bank Feed → INNRLY (top-left diagonal)
  { id: "ota", x1: "28%", y1: "30%", x2: "42%", y2: "45%", color: "hsl(210, 60%, 65%)", delay: 0.5 },
  // 3rd party systems → INNRLY (bottom-left diagonal)
  { id: "3rd-party", x1: "30%", y1: "72%", x2: "44%", y2: "55%", color: "hsl(var(--primary))", delay: 1 },
  // Third Party Integrations ↔ INNRLY (bottom center, bidirectional)
  { id: "integrations", x1: "52%", y1: "78%", x2: "52%", y2: "58%", color: "hsl(210, 60%, 55%)", delay: 1.5, bidirectional: true },
  // INNRLY → Accounting System (right, bidirectional)
  { id: "accounting", x1: "62%", y1: "48%", x2: "78%", y2: "48%", color: "hsl(210, 60%, 65%)", delay: 2, bidirectional: true },
];

const DataParticle = ({ x1, y1, x2, y2, color, delay, reverse = false }: {
  x1: string; y1: string; x2: string; y2: string;
  color: string; delay: number; reverse?: boolean;
}) => {
  const startX = reverse ? x2 : x1;
  const startY = reverse ? y2 : y1;
  const endX = reverse ? x1 : x2;
  const endY = reverse ? y1 : y2;

  return (
    <motion.div
      className="absolute w-2 h-2 rounded-full"
      style={{
        background: color,
        boxShadow: `0 0 8px ${color}, 0 0 16px ${color}`,
        left: startX,
        top: startY,
      }}
      animate={{
        left: [startX, endX],
        top: [startY, endY],
        opacity: [0, 1, 1, 0],
        scale: [0.5, 1, 1, 0.5],
      }}
      transition={{
        duration: 2,
        delay,
        repeat: Infinity,
        repeatDelay: 1.5,
        ease: "easeInOut",
      }}
    />
  );
};

export const AnimatedArrows = () => {
  return (
    <div className="absolute inset-0 z-20 pointer-events-none">
      {arrows.map((arrow) => (
        <div key={arrow.id}>
          {/* Forward particle */}
          <DataParticle {...arrow} />
          {/* Second particle staggered */}
          <DataParticle {...arrow} delay={arrow.delay + 0.8} />
          {/* Reverse particle for bidirectional */}
          {arrow.bidirectional && (
            <>
              <DataParticle {...arrow} reverse delay={arrow.delay + 1.2} />
              <DataParticle {...arrow} reverse delay={arrow.delay + 2} />
            </>
          )}
        </div>
      ))}
    </div>
  );
};
