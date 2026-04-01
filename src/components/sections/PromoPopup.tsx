import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, ArrowLeft, FileInput, CheckSquare, RefreshCcw, Zap, Hotel, CalendarClock, ScanFace } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import mobileAppImg from "@/assets/solutions/timeclock-mobile-app-white.png";

const stepColors = [
  {
    bg: "bg-[hsl(220,80%,95%)]",
    iconBg: "bg-[hsl(220,75%,55%)]",
    iconText: "text-white",
    stepBg: "bg-[hsl(220,75%,55%)]",
    border: "border-[hsl(220,70%,88%)]",
    hoverBg: "hover:bg-[hsl(220,80%,92%)]",
  },
  {
    bg: "bg-[hsl(160,60%,95%)]",
    iconBg: "bg-[hsl(160,65%,40%)]",
    iconText: "text-white",
    stepBg: "bg-[hsl(160,65%,40%)]",
    border: "border-[hsl(160,50%,85%)]",
    hoverBg: "hover:bg-[hsl(160,60%,91%)]",
  },
  {
    bg: "bg-[hsl(270,60%,95%)]",
    iconBg: "bg-[hsl(270,60%,55%)]",
    iconText: "text-white",
    stepBg: "bg-[hsl(270,60%,55%)]",
    border: "border-[hsl(270,50%,88%)]",
    hoverBg: "hover:bg-[hsl(270,60%,91%)]",
  },
];

const innrlyPayFeatures = [
  {
    icon: FileInput,
    step: "1",
    title: "Auto-import invoices",
    description: "No repetitive data-entry.",
    badge: "AUTO GL-CODING",
  },
  {
    icon: CheckSquare,
    step: "2",
    title: "Review · Approve · Pay",
    description: "Streamlined and controlled.",
    badge: null,
  },
  {
    icon: RefreshCcw,
    step: "3",
    title: "Seamlessly syncs with",
    titleHighlight: "Accounting Systems",
    description: "Always up-to-date and reconciled.",
    badge: null,
  },
];

const slides = [
  {
    tag: "✦ Included Free",
    title: "Innrly Pay",
    subtitle: "AP payments simplified with a few clicks!",
    gradient: "linear-gradient(145deg, hsl(220 75% 45%) 0%, hsl(200 80% 45%) 50%, hsl(180 70% 40%) 100%)",
    featureColor: "bg-primary/15 text-primary",
    body: "",
    link: "/solutions/innrly-pay",
    shadow: "0 30px 80px -20px hsl(220 75% 45% / 0.45), 0 0 60px -10px hsl(190 80% 45% / 0.3)",
    customFeatures: true,
  },
  {
    tag: "✦ New Product",
    title: "Innrly Shift",
    subtitle: "Precision payroll, powered by real labor data.",
    gradient: "linear-gradient(145deg, hsl(340 75% 45%) 0%, hsl(280 70% 45%) 50%, hsl(250 80% 50%) 100%)",
    features: [
      { icon: Zap, label: "5-Min Labor Snapshot", color: "bg-[hsl(45,90%,50%)]", textColor: "text-[hsl(45,90%,20%)]" },
      { icon: Hotel, label: "Built on Hospitality Metrics", color: "bg-[hsl(160,65%,40%)]", textColor: "text-white" },
      { icon: CalendarClock, label: "Labor Scheduler + Performance Tracking", color: "bg-[hsl(270,60%,55%)]", textColor: "text-white" },
    ],
    featureColor: "bg-[hsl(340,75%,45%)]/15 text-[hsl(340,75%,45%)]",
    body: "From schedule gaps to unauthorized overtime, Innrly Shift surfaces the hidden labor costs that silently erode your margins.",
    link: "/solutions/timeclock",
    shadow: "0 30px 80px -20px hsl(340 75% 45% / 0.4), 0 0 60px -10px hsl(280 70% 45% / 0.25)",
    customFeatures: false,
  },
];

export const PromoPopup = () => {
  const [visible, setVisible] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    let cleanup: (() => void) | null = null;
    const handler = () => {
      const timer = setTimeout(() => setVisible(true), 3000);
      cleanup = () => clearTimeout(timer);
    };
    window.addEventListener("hero-video-ended", handler);
    return () => {
      window.removeEventListener("hero-video-ended", handler);
      cleanup?.();
    };
  }, []);

  const slide = slides[activeSlide];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-3"
          onClick={() => setVisible(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.85, y: 30 }}
            transition={{ type: "spring", damping: 22, stiffness: 260, delay: 0.1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl h-[min(92vh,680px)] rounded-3xl overflow-hidden flex flex-col"
            style={{ boxShadow: slide.shadow }}
          >
            {/* Close / Next button - always visible above content */}
            <button
              onClick={() => {
                if (activeSlide < slides.length - 1) {
                  setActiveSlide(activeSlide + 1);
                } else {
                  setVisible(false);
                }
              }}
              className="absolute top-5 right-5 z-10 p-2 rounded-full bg-white/10 hover:bg-white/25 transition-colors"
            >
              <X className="w-5 h-5 text-primary-foreground" />
            </button>

            <div className="flex-1 min-h-0 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSlide}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -40 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative px-8 pt-8 pb-6" style={{ background: slide.gradient }}>
                    <motion.div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background:
                          "linear-gradient(105deg, transparent 35%, hsl(0 0% 100% / 0.15) 42%, hsl(0 0% 100% / 0.06) 48%, transparent 55%)",
                      }}
                      animate={{ x: ["-100%", "250%"] }}
                      transition={{ duration: 3.5, repeat: Infinity, repeatDelay: 4, ease: "easeInOut" }}
                    />

                    <div className="absolute -top-20 -right-20 w-56 h-56 rounded-full bg-white/5 blur-2xl pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5 blur-2xl pointer-events-none" />

                    <span className="inline-block text-base font-extrabold tracking-widest text-[hsl(48,100%,80%)] uppercase mb-2 drop-shadow-sm">
                      {slide.tag}
                    </span>

                    <h2 className="text-3xl font-black text-primary-foreground mb-2 tracking-tight">
                      {slide.title}
                    </h2>

                    <p className="text-lg text-primary-foreground/85 max-w-sm leading-relaxed pr-10">
                      {slide.subtitle}
                    </p>
                  </div>

                  <div className="bg-card px-8 py-5 space-y-4">
                    {slide.customFeatures ? (
                      <div className="space-y-2.5">
                        {innrlyPayFeatures.map((item, i) => {
                          const colors = stepColors[i];
                          return (
                            <motion.div
                              key={item.step}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.15 + i * 0.1 }}
                              className={`flex items-center gap-3 p-3 rounded-2xl ${colors.bg} ${colors.hoverBg} border ${colors.border} transition-all duration-200 group cursor-default`}
                            >
                              <div className={`flex-shrink-0 w-10 h-10 rounded-xl ${colors.iconBg} flex items-center justify-center shadow-lg`}>
                                <item.icon className={`w-5 h-5 ${colors.iconText}`} />
                              </div>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2 flex-wrap">
                                  <h3 className="text-sm font-bold text-foreground leading-tight">
                                    {item.title}
                                    {item.titleHighlight && (
                                      <span className="text-[hsl(270,60%,55%)]"> {item.titleHighlight}</span>
                                    )}
                                  </h3>
                                  {item.badge && (
                                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-[hsl(48,90%,52%)] text-[hsl(48,100%,10%)] text-[9px] font-extrabold tracking-wider uppercase shadow-sm">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                                  {item.description}
                                </p>
                              </div>
                            </motion.div>
                          );
                        })}

                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.6 }}
                          className="text-center text-xs font-medium text-muted-foreground italic pt-0.5"
                        >
                          A streamlined, efficient and visible{" "}
                          <span className="font-semibold text-foreground not-italic">AP workflow</span>
                        </motion.p>
                      </div>
                    ) : (
                      <>
                        <div className="flex gap-3">
                          <div className="flex-1 space-y-2">
                            {slide.features?.map((item, i) => (
                              <motion.div
                                key={item.label}
                                initial={{ opacity: 0, x: -15 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 + i * 0.08 }}
                                className="flex items-center gap-2.5 p-2 rounded-xl bg-secondary/50 hover:bg-secondary/80 transition-colors group cursor-default"
                              >
                                <div className={`flex-shrink-0 w-8 h-8 rounded-lg ${(item as any).color} flex items-center justify-center shadow-md`}>
                                  <item.icon className={`w-4 h-4 ${(item as any).textColor}`} />
                                </div>
                                <span className="text-[11px] font-semibold text-foreground leading-tight">{item.label}</span>
                              </motion.div>
                            ))}
                          </div>

                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.3 }}
                            className="flex-shrink-0 w-32 flex flex-col items-center gap-1.5"
                          >
                            <div className="relative w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[hsl(340,75%,45%)] to-[hsl(280,70%,45%)] p-1.5 shadow-lg">
                              <img
                                src={mobileAppImg}
                                alt="TimeClock with Face-ID"
                                className="w-full h-auto rounded-xl"
                              />
                            </div>
                            <div className="flex items-center gap-1">
                              <ScanFace className="w-3.5 h-3.5 text-[hsl(340,75%,45%)]" />
                              <span className="text-[10px] font-bold text-foreground">TimeClock + Face-ID</span>
                            </div>
                          </motion.div>
                        </div>

                        <p className="text-xs text-muted-foreground leading-relaxed text-center">{slide.body}</p>
                      </>
                    )}

                    <div className="flex justify-center pt-1">
                      <Button asChild className="text-sm px-7">
                        <Link to={slide.link} onClick={() => setVisible(false)}>
                          Learn More <ArrowRight className="w-4 h-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="bg-card px-8 py-3 flex items-center justify-between border-t border-border/30 flex-shrink-0">
              <button
                onClick={() => setActiveSlide(0)}
                disabled={activeSlide === 0}
                className="p-2 rounded-full hover:bg-secondary/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </button>

              <div className="flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeSlide ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveSlide(1)}
                disabled={activeSlide === 1}
                className="p-2 rounded-full hover:bg-secondary/60 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <ArrowRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
