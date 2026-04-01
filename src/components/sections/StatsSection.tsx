import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { TrendingUp, Clock, DollarSign, Zap } from "lucide-react";

const stats = [
  { value: 50, suffix: "%", label: "Less time on admin work", icon: Clock },
  { value: 30, suffix: "%", label: "Faster budgeting & forecasting", icon: TrendingUp },
  { value: 40, prefix: "$", suffix: "K+", label: "Saved per property annually", icon: DollarSign },
  { value: 100, suffix: "+", label: "Hours reclaimed monthly", icon: Zap },
];

const CountUp = ({ end, prefix = "", suffix = "", duration = 4, pauseDuration = 3 }: { end: number; prefix?: string; suffix?: string; duration?: number; pauseDuration?: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let animationId: number;
    let timeoutId: ReturnType<typeof setTimeout>;

    const runCycle = () => {
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / (duration * 1000);

        if (progress < 1) {
          setCount(Math.floor(end * progress));
          animationId = requestAnimationFrame(animate);
        } else {
          setCount(end);
          // Pause at full value, then restart
          timeoutId = setTimeout(() => {
            setCount(0);
            runCycle();
          }, pauseDuration * 1000);
        }
      };
      animationId = requestAnimationFrame(animate);
    };

    runCycle();

    return () => {
      cancelAnimationFrame(animationId);
      clearTimeout(timeoutId);
    };
  }, [isInView, end, duration, pauseDuration]);

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  );
};

const ProgressBar = ({ targetWidth, delay }: { targetWidth: number; delay: number }) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (!isInView) return;

    let timeoutId: ReturnType<typeof setTimeout>;
    let animFrameId: number;

    const runCycle = () => {
      setWidth(0);
      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = (currentTime - startTime) / 4000; // 4s fill duration
        if (progress < 1) {
          setWidth(targetWidth * progress);
          animFrameId = requestAnimationFrame(animate);
        } else {
          setWidth(targetWidth);
          timeoutId = setTimeout(runCycle, 3000); // pause 3s then restart
        }
      };
      animFrameId = requestAnimationFrame(animate);
    };

    timeoutId = setTimeout(runCycle, delay * 1000);

    return () => {
      clearTimeout(timeoutId);
      cancelAnimationFrame(animFrameId);
    };
  }, [isInView, targetWidth, delay]);

  return (
    <div
      ref={ref}
      className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
      style={{ width: `${width}%`, transition: width === 0 ? 'none' : undefined }}
    />
  );
};

export const StatsSection = () => {
  return (
    <section className="py-16 bg-white relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      {/* Floating data particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-primary/20"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + Math.sin(i) * 30}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.6, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3,
            }}
          />
        ))}
      </div>

      {/* Scanning line */}
      <motion.div
        className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent"
        animate={{ top: ["0%", "100%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
      />

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Real Results.{" "}
            <span className="text-gradient">Proven Impact.</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Learn how operators are using INNRLY's hotel management software to create real value.
          </p>
        </motion.div>

        {/* Stats grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="interactive-card bg-muted/50 border border-border rounded-2xl p-8 hover:shadow-lg transition-all duration-300 relative overflow-hidden">
                {/* Animated corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-16 h-16"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <div className="absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-primary/30 rounded-tr-lg" />
                </motion.div>

                {/* Icon with pulse */}
                <motion.div
                  className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <stat.icon className="w-6 h-6 text-primary" />
                </motion.div>

                {/* Value with glow effect */}
                <div className="relative">
                  <motion.div
                    className="text-4xl md:text-5xl font-bold text-primary mb-3"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CountUp end={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                  </motion.div>
                  
                  {/* Progress bar animation */}
                  <motion.div
                    className="h-1 bg-muted rounded-full overflow-hidden mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                  >
                     <ProgressBar targetWidth={60 + index * 10} delay={index * 0.2} />
                  </motion.div>
                </div>

                <p className="text-muted-foreground text-sm leading-relaxed">
                  {stat.label}
                </p>

                {/* Live indicator */}
                <motion.div
                  className="absolute bottom-3 right-3 flex items-center gap-1.5"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <span className="text-xs text-muted-foreground">Live</span>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
