import { motion, useSpring, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

interface LiveMetricCardProps {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  trend?: "up" | "down" | "neutral";
  delay?: number;
}

export const LiveMetricCard = ({ 
  label, 
  value, 
  suffix = "", 
  prefix = "",
  trend = "up",
  delay = 0 
}: LiveMetricCardProps) => {
  const [displayValue, setDisplayValue] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  
  // Animate the number counting up
  const springValue = useSpring(0, { 
    stiffness: 50, 
    damping: 20,
    restDelta: 0.01,
  });

  useEffect(() => {
    const timeout = setTimeout(() => {
      springValue.set(value);
    }, delay);
    
    return () => clearTimeout(timeout);
  }, [value, delay, springValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });
    return unsubscribe;
  }, [springValue]);

  const TrendIcon = trend === "up" ? TrendingUp : trend === "down" ? TrendingDown : Activity;
  const trendColor = trend === "up" ? "text-green-400" : trend === "down" ? "text-red-400" : "text-amber-400";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay / 1000 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative group"
    >
      <div className="glass-dark rounded-lg p-2 backdrop-blur-xl border border-primary-foreground/10 overflow-hidden">
        {/* Animated background glow */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0"
          animate={{ opacity: isHovered ? 0.5 : 0 }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Pulse ring effect */}
        <motion.div
          className="absolute -inset-1 rounded-xl border border-primary/30"
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ 
            scale: isHovered ? 1.02 : 1,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        />

        <div className="relative z-10">
          {/* Label with activity indicator */}
          <div className="flex items-center justify-between mb-1">
            <span className="text-primary-foreground/60 text-[10px] uppercase tracking-wider font-medium">
              {label}
            </span>
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <div className="w-2 h-2 rounded-full bg-green-400" />
            </motion.div>
          </div>

          {/* Value with animated counter */}
          <div className="flex items-end gap-2">
            <motion.span 
              className="text-sm md:text-base font-bold text-primary-foreground tabular-nums"
              animate={{ scale: isHovered ? 1.05 : 1 }}
              transition={{ duration: 0.2 }}
            >
              {prefix}{displayValue}{suffix}
            </motion.span>
            
            {/* Trend indicator */}
            <motion.div 
              className={`flex items-center gap-1 ${trendColor}`}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: delay / 1000 + 0.5 }}
            >
              <TrendIcon className="w-4 h-4" />
            </motion.div>
          </div>

          {/* Data bar animation */}
          <div className="mt-2 h-0.5 bg-primary-foreground/10 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
              initial={{ width: "0%" }}
              animate={{ width: `${Math.min((displayValue / value) * 100, 100)}%` }}
              transition={{ duration: 1, delay: delay / 1000 + 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
