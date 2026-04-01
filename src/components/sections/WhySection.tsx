import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronLeft, ChevronRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

import whyAutomatesBackoffice from "@/assets/why-automates-backoffice.jpg";
import whyBrandNeutral from "@/assets/why-brand-neutral.jpg";
import whyWorkflowChaos from "@/assets/why-workflow-chaos.jpg";
import whyRealtime from "@/assets/why-realtime.jpg";
import whySecure from "@/assets/why-secure.jpg";
import whyPreventLoss from "@/assets/why-prevent-loss.jpg";

const reasons = [
  {
    image: whyAutomatesBackoffice,
    title: "Automates the Most Time-Consuming Back-Office Work",
    description: "From OTA commissions to bank and credit card reconciliation, Innrly eliminates hours of manual spreadsheets—saving hotels 40–180 hours every month.",
    stat: "180+ hrs",
    statLabel: "saved monthly",
    scale: 1.10,
  },
  {
    image: whyBrandNeutral,
    title: "Captures Every Dollar With Error-Free Financials",
    description: "Hotels lose money through mismatched bookings, missed VCCs, chargebacks, franchise discrepancies, and manual data entry errors. Innrly's automated checks ensure every payment is matched, verified, and accounted for.",
    stat: "99.9%",
    statLabel: "accuracy",
    scale: 1.10,
  },
  {
    image: whyWorkflowChaos,
    title: "Eliminates Workflow Chaos and Inconsistent Processes",
    description: "Task management, exception flags, DMS, and night audit automation ensure every property follows the same standardized workflow, reducing risk and improving compliance.",
    stat: "100%",
    statLabel: "compliance",
    scale: 1.045,
  },
  {
    image: whyRealtime,
    title: "Optimizes Labor Costs Without Compromising Service",
    description: "AI scheduling, labor forecasting, and workforce analytics help hotels schedule smarter, prevent overtime, and match staffing to demand—leading to 5–15% labor savings.",
    stat: "15%",
    statLabel: "labor savings",
    scale: 1.035,
  },
  {
    image: whySecure,
    title: "Provides Real-Time Visibility Across the Entire Business",
    description: "With Pulse Dashboards and unified reporting, GMs, owners, and management companies get instant clarity on revenue, labor, and operations—no waiting for daily night audit summaries.",
    stat: "Real-time",
    statLabel: "insights",
    scale: 1.05,
  },
  {
    image: whyPreventLoss,
    title: "Supports Multi-Property Growth Without Adding Headcount",
    description: "Whether it's two properties or forty, Innrly centralizes financials, operations, labor, and documentation—allowing hotel groups to scale without increasing accounting or ops staff.",
    stat: "40+",
    statLabel: "properties",
    scale: 1.05,
  },
];

export const WhySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % reasons.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + reasons.length) % reasons.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="why" className="py-16 bg-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Why Your Hotel Needs{" "}
            <span className="text-primary">INNRLY</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Designed for hospitality professionals, from individual hotel owners 
            to executives managing extensive property portfolios.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              {/* Image with effects */}
              <div className="relative group">
                <div className="relative overflow-hidden rounded-2xl aspect-video bg-card">
                  <motion.img
                    src={reasons[currentIndex].image}
                    alt={reasons[currentIndex].title}
                    className="w-full h-full object-contain"
                    style={{ scale: reasons[currentIndex].scale || 1 }}
                    whileHover={{ scale: (reasons[currentIndex].scale || 1) * 1.05 }}
                    transition={{ duration: 0.5 }}
                  />
                </div>

                {/* Floating stat badge - outside overflow-hidden container */}
                <motion.div
                  className="absolute bottom-4 right-0 translate-x-[80%] rounded-xl px-4 py-2.5 z-10 border border-accent bg-card/90 backdrop-blur-md shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="text-xl font-bold text-primary">{reasons[currentIndex].stat}</div>
                  <div className="text-[10px] font-medium text-muted-foreground tracking-wide">{reasons[currentIndex].statLabel}</div>
                </motion.div>
              </div>

              {/* Content */}
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <motion.div
                    className="w-2 h-2 rounded-full bg-primary"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  Feature {currentIndex + 1} of {reasons.length}
                </motion.div>

                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-foreground"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                >
                  {reasons[currentIndex].title}
                </motion.h3>

                <motion.p 
                  className="text-muted-foreground text-lg leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {reasons[currentIndex].description}
                </motion.p>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation controls */}
          <div className="flex items-center justify-center gap-6 mt-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-border hover:bg-primary/10 hover:border-primary/30"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <div className="flex items-center gap-2">
              {reasons.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "bg-primary w-8"
                      : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-border hover:bg-primary/10 hover:border-primary/30"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
