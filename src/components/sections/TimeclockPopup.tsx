import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Clock, Scan, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const TimeclockPopup = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout> | null = null;
    const handler = () => {
      timerId = setTimeout(() => setVisible(true), 3000);
    };

    window.addEventListener("innrlypay-closed", handler);
    return () => {
      window.removeEventListener("innrlypay-closed", handler);
      if (timerId) clearTimeout(timerId);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 22, stiffness: 260, delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl rounded-3xl overflow-hidden"
            style={{
              boxShadow: "0 30px 80px -20px hsl(var(--accent) / 0.4), 0 0 60px -10px hsl(var(--primary) / 0.25)",
            }}
          >
            {/* Gradient header */}
            <div
              className="relative px-10 pt-10 pb-8"
              style={{
                background: "linear-gradient(145deg, hsl(var(--accent)) 0%, hsl(220 85% 45%) 50%, hsl(var(--primary)) 100%)",
              }}
            >
              {/* Animated shine */}
              <motion.div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(105deg, transparent 35%, hsl(0 0% 100% / 0.15) 42%, hsl(0 0% 100% / 0.06) 48%, transparent 55%)",
                }}
                animate={{ x: ["-100%", "250%"] }}
                transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
              />

              {/* Decorative orb */}
              <div className="absolute -top-20 -left-20 w-56 h-56 rounded-full bg-white/5 blur-2xl pointer-events-none" />

              <button
                onClick={() => setVisible(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-white/10 hover:bg-white/25 transition-colors"
              >
                <X className="w-5 h-5 text-primary-foreground" />
              </button>

              <motion.span
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="inline-block text-base font-extrabold tracking-widest text-[hsl(48,100%,80%)] uppercase mb-3 drop-shadow-sm"
              >
                ✦ New Feature
              </motion.span>

              <motion.h2
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-4xl font-black text-primary-foreground mb-2 tracking-tight"
              >
                TimeClock
              </motion.h2>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-base text-primary-foreground/85 max-w-sm leading-relaxed"
              >
                Face recognition time tracking with seamless payroll sync — built right in.
              </motion.p>
            </div>

            {/* Body */}
            <div className="bg-card px-10 py-8 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
                className="grid grid-cols-3 gap-5"
              >
                {[
                  { icon: Scan, label: "Face Recognition" },
                  { icon: Clock, label: "Real-Time Tracking" },
                  { icon: BarChart3, label: "Payroll Sync" },
                ].map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.1 }}
                    className="flex flex-col items-center text-center gap-3 p-4 rounded-xl bg-secondary/40 hover:bg-secondary/70 transition-colors"
                  >
                    <div className="w-13 h-13 rounded-xl bg-accent/15 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-accent" />
                    </div>
                    <span className="text-sm font-semibold text-foreground leading-tight">{item.label}</span>
                  </motion.div>
                ))}
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                className="text-base text-muted-foreground leading-relaxed text-center"
              >
                Eliminate buddy punching with facial recognition, track hours in real time, and sync directly to payroll — all from one platform.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex justify-center"
              >
                <Button size="lg" asChild className="text-base px-8">
                  <Link to="/solutions/timeclock" onClick={() => setVisible(false)}>
                    Learn More <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
