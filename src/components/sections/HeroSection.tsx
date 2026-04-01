import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hotel.jpg";
import { AnimatedDataGrid } from "@/components/effects/AnimatedDataGrid";
import { DataFlowParticles } from "@/components/effects/DataFlowParticles";
import { TechGridBackground } from "@/components/effects/TechGridBackground";
import { OrbitingMetricCards } from "@/components/effects/OrbitingMetricCards";
import { AnimatedArrows } from "@/components/effects/AnimatedArrows";
import { InteractiveButton } from "@/components/effects/InteractiveButton";

export const HeroSection = () => {
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <section className="relative min-h-screen bg-hero overflow-hidden">
      {/* Layered animated backgrounds */}
      <DataFlowParticles count={40} />
      <AnimatedDataGrid />
      <TechGridBackground />

      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-1/4 -left-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], x: [0, 20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3], x: [0, -30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-radial from-primary/10 to-transparent rounded-full"
          animate={{ scale: [1, 1.1, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative container mx-auto px-6 pt-32 pb-20 z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center min-h-[calc(100vh-200px)]">
          {/* Left content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-left"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
              One Platform.{" "}
              <motion.span
                className="text-gradient inline-block"
                animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ backgroundSize: "200% 200%" }}
              >
                Total
              </motion.span>{" "}
              <br className="hidden md:block" />
              Hotel Control.
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/70 mb-8 max-w-xl leading-relaxed">
              Innrly brings every part of your hotel's operation into one intelligent platform,
              enabling owners and operators to automate financials, streamline operations,
              and manage performance across their entire portfolio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <InteractiveButton variant="hero" size="xl" className="group" asChild>
                <Link to="/contact">
                  Schedule a Demo
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </InteractiveButton>
            </div>
          </motion.div>

          {/* Right content - Video first, then image with orbiting cards */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative py-12 px-14">
              {/* Orbiting metric cards - only appear after video ends */}
              {videoEnded && <OrbitingMetricCards containerRef={imageContainerRef} />}

              <div
                ref={imageContainerRef}
                className="relative rounded-2xl overflow-hidden shadow-2xl border border-primary-foreground/10 z-10"
              >
                {/* Animated border glow */}
                <motion.div
                  className="absolute -inset-[2px] rounded-2xl z-0"
                  style={{
                    background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary)))",
                    backgroundSize: "200% 100%",
                  }}
                  animate={{
                    backgroundPosition: ["0% 0%", "200% 0%"],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    backgroundPosition: { duration: 3, repeat: Infinity, ease: "linear" },
                    opacity: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                  }}
                />

                <div className="relative z-10 rounded-2xl overflow-hidden">
                  <AnimatePresence mode="wait">
                    {!videoEnded ? (
                      <motion.video
                        key="hero-video"
                        src="/videos/hero-intro.mp4"
                        autoPlay
                        muted
                        playsInline
                        onEnded={() => { setVideoEnded(true); window.dispatchEvent(new Event("hero-video-ended")); }}
                        className="w-full h-auto object-cover rounded-2xl scale-110"
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.6 }}
                      />
                    ) : (
                      <motion.div
                        key="hero-image"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8 }}
                      >
                        <img
                          src={heroImage}
                          alt="Luxury hotel resort pool area"
                          className="w-full h-auto object-cover rounded-2xl"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent rounded-2xl" />
                        <motion.div
                          className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent"
                          animate={{ top: ["0%", "100%"] }}
                          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          className="relative"
          animate={{ y: [0, 5, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      </motion.div>
    </section>
  );
};
