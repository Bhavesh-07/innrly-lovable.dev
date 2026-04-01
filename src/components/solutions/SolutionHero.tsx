import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { TechGridBackground } from "@/components/effects/TechGridBackground";
import { DataFlowParticles } from "@/components/effects/DataFlowParticles";
interface SolutionHeroProps {
  title: string;
  subtitle: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}
export const SolutionHero = ({
  title,
  subtitle,
  description,
  icon,
  image,
  imageAlt
}: SolutionHeroProps) => {
  return <section className="relative min-h-[60vh] flex items-center bg-hero overflow-hidden">
      {/* Animated backgrounds */}
      <div className="absolute inset-0 opacity-30">
        <TechGridBackground />
      </div>
      <div className="absolute inset-0 opacity-40">
        <DataFlowParticles />
      </div>
      
      {/* Background effects */}
      <div className="absolute inset-0">
        <motion.div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" animate={{
        scale: [1, 1.2, 1],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }} />
        <motion.div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl" animate={{
        scale: [1.2, 1, 1.2],
        opacity: [0.3, 0.5, 0.3]
      }} transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
        delay: 2
      }} />
      </div>

      {/* Animated grid lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => <motion.div key={i} className="absolute h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent w-full" style={{
        top: `${20 + i * 15}%`
      }} initial={{
        x: "-100%"
      }} animate={{
        x: "100%"
      }} transition={{
        duration: 8,
        repeat: Infinity,
        delay: i * 0.8,
        ease: "linear"
      }} />)}
      </div>

      <div className="container mx-auto px-6 pt-32 pb-16 relative z-10">
        <div className={image ? "grid md:grid-cols-2 gap-12 items-center" : "max-w-4xl"}>
          <div>
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5
          }} className="inline-flex items-center gap-3 mb-6 px-4 py-2 rounded-full bg-white/10 border border-white/30 backdrop-blur-sm">
              {icon && <motion.div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center text-white" animate={{
              boxShadow: ["0 0 0px rgba(255,255,255,0)", "0 0 20px rgba(255,255,255,0.3)", "0 0 0px rgba(255,255,255,0)"]
            }} transition={{
              duration: 2,
              repeat: Infinity
            }}>
                  {icon}
                </motion.div>}
              <span className="text-white font-semibold tracking-wide uppercase text-sm">{subtitle}</span>
            </motion.div>

            <motion.h1 initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.1
          }} className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              {title}
            </motion.h1>

            <motion.p initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.2
          }} className="text-xl text-primary-foreground/80 mb-8 leading-relaxed max-w-3xl">
              {description}
            </motion.p>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            duration: 0.5,
            delay: 0.3
          }} className="flex flex-wrap gap-4">
              <Button variant="hero" size="lg" className="group relative overflow-hidden" asChild>
                <Link to="/contact">
                  <motion.span className="absolute inset-0 bg-white/20" initial={{
                  x: "-100%"
                }} whileHover={{
                  x: "100%"
                }} transition={{
                  duration: 0.5
                }} />
                  <span className="relative z-10 flex items-center">
                    Schedule a Demo
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </Button>
            </motion.div>
          </div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-white/5 backdrop-blur-sm max-w-md ml-auto"
            >
              <img src={image} alt={imageAlt || title} className="w-full h-auto" />
            </motion.div>
          )}
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>;
};