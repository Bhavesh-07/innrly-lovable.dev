import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import { TechGridBackground } from "@/components/effects/TechGridBackground";
interface SolutionCTAProps {
  title?: string;
  description?: string;
}
export const SolutionCTA = ({
  title = "Ready to Transform Your Hotel Operations?",
  description = "Join hundreds of hotels already using INNRLY to streamline their operations and boost profitability."
}: SolutionCTAProps) => {
  return <section className="py-12 bg-hero relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-20">
        <TechGridBackground />
      </div>
      
      {/* Animated orbs */}
      <motion.div className="absolute top-1/2 left-1/4 w-64 h-64 bg-primary/20 rounded-full blur-3xl" animate={{
      scale: [1, 1.3, 1],
      x: [0, 50, 0]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut"
    }} />
      <motion.div className="absolute top-1/2 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl" animate={{
      scale: [1.3, 1, 1.3],
      x: [0, -50, 0]
    }} transition={{
      duration: 10,
      repeat: Infinity,
      ease: "easeInOut",
      delay: 2
    }} />

      {/* Floating data points */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => <motion.div key={i} className="absolute w-1 h-1 bg-white/40 rounded-full" style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`
      }} animate={{
        y: [0, -30, 0],
        opacity: [0.2, 0.8, 0.2]
      }} transition={{
        duration: 3 + Math.random() * 2,
        repeat: Infinity,
        delay: Math.random() * 2
      }} />)}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} className="text-center max-w-3xl mx-auto">
          <motion.h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }}>
            {title}
          </motion.h2>
          <motion.p className="text-xl text-primary-foreground/80 mb-8" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.1
        }}>
            {description}
          </motion.p>
          <motion.div className="flex flex-wrap justify-center gap-4" initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          delay: 0.2
        }}>
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
                  <Calendar className="mr-2 w-5 h-5" />
                  Schedule a Demo
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>
            </Button>
            
          </motion.div>
        </motion.div>
      </div>
    </section>;
};