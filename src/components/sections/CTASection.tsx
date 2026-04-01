import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { DataFlowParticles } from "@/components/effects/DataFlowParticles";
import logo from "@/assets/logos/innrly-logo-dark-text.png";

const benefits = [
"90-day free trial",
"No credit card required",
"Full feature access",
"Dedicated support"];


export const CTASection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden">
          
          {/* Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-teal-dark" />
          
          {/* Animated particles */}
          <DataFlowParticles count={25} />

          {/* Animated tech grid */}
          <div className="absolute inset-0 overflow-hidden">
            <svg className="absolute inset-0 w-full h-full opacity-[0.05]">
              <defs>
                <pattern id="ctaGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#ctaGrid)" />
            </svg>

            {/* Scanning lines */}
            <motion.div
              className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
              animate={{ top: ["0%", "100%"] }}
              transition={{ duration: 6, repeat: Infinity, ease: "linear" }} />
            
            <motion.div
              className="absolute top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-accent/30 to-transparent"
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: 2 }} />
            
          </div>
          
          {/* Pattern overlay */}
          <motion.div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: '32px 32px'
            }}
            animate={{ backgroundPosition: ["0px 0px", "32px 32px"] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }} />
          

          {/* Glowing orbs */}
          <motion.div
            className="absolute top-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
            transition={{ duration: 8, repeat: Infinity }} />
          
          <motion.div
            className="absolute bottom-0 left-0 w-96 h-96 bg-teal-light/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"
            animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 10, repeat: Infinity }} />
          

          {/* Content */}
          <div className="relative px-8 py-16 md:px-16 md:py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left content */}
              <div>
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
                  
                  Ready to Transform Your{" "}
                  <span className="text-gradient">Hotel Operations</span>?
                </motion.h2>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="text-lg text-primary-foreground/70 mb-8 leading-relaxed">
                  
                  Join thousands of hotel operators who are already using INNRLY 
                  to streamline operations, increase revenue, and deliver exceptional guest experiences.
                </motion.p>

                {/* Benefits with animations */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="grid grid-cols-2 gap-3 mb-8">
                  
                  {benefits.map((benefit, index) =>
                  <motion.div
                    key={index}
                    className="flex items-center gap-2 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}>
                    
                      <motion.div
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.3 }}>
                      
                        <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      </motion.div>
                      <span className="text-primary-foreground/80 text-sm">{benefit}</span>
                    </motion.div>
                  )}
                </motion.div>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex flex-col sm:flex-row gap-4">
                  
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button variant="hero" size="xl" className="group" asChild>
                      <Link to="/contact">
                        <Calendar className="w-5 h-5" />
                        Schedule a Demo
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right content - Decorative */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="hidden lg:block">
                
                <div className="relative">
                  {/* Main card */}
                  <motion.div
                    className="glass-dark rounded-2xl p-6 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}>
                    
                    {/* Tech corners */}
                    <div className="absolute top-2 left-2 w-6 h-6 border-l-2 border-t-2 border-primary/30" />
                    <div className="absolute top-2 right-2 w-6 h-6 border-r-2 border-t-2 border-primary/30" />
                    <div className="absolute bottom-2 left-2 w-6 h-6 border-l-2 border-b-2 border-primary/30" />
                    <div className="absolute bottom-2 right-2 w-6 h-6 border-r-2 border-b-2 border-primary/30" />

                    <div className="flex items-center gap-4 mb-6">
                      <motion.img
                        src={logo}
                        alt="Innrly"
                        className="h-[68px] w-auto object-contain rounded-lg"
                        style={{ mixBlendMode: 'screen' }}
                        animate={{ rotate: [0, 2, -2, 0] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      <div>
                        <h4 className="font-semibold text-primary-foreground">INNRLY Dashboard</h4>
                        <div className="flex items-center gap-2">
                          <motion.div
                            className="w-2 h-2 rounded-full bg-green-500"
                            animate={{ scale: [1, 1.3, 1] }}
                            transition={{ duration: 1.5, repeat: Infinity }} />
                          
                          <p className="text-sm text-primary-foreground/60">Real-time portfolio insights</p>
                        </div>
                      </div>
                    </div>

                    {/* Stats preview with animations */}
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[
                      { label: "Properties", value: "24" },
                      { label: "Rooms", value: "3,847" },
                      { label: "Users", value: "156" }].
                      map((stat, i) =>
                      <motion.div
                        key={i}
                        className="text-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        whileHover={{ scale: 1.05 }}>
                        
                          <div className="text-2xl font-bold text-primary">{stat.value}</div>
                          <div className="text-xs text-primary-foreground/60">{stat.label}</div>
                        </motion.div>
                      )}
                    </div>

                    {/* Activity bars */}
                    <div className="space-y-3">
                      {[85, 72, 94].map((width, i) =>
                      <div key={i} className="flex items-center gap-3">
                          <div className="flex-1 h-2 bg-primary-foreground/10 rounded-full overflow-hidden">
                            <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${width}%` }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 + i * 0.1, duration: 0.8 }}
                            className="h-full bg-gradient-to-r from-primary to-teal-light rounded-full" />
                          
                          </div>
                          <span className="text-xs text-primary-foreground/60 w-8">{width}%</span>
                        </div>
                      )}
                    </div>
                  </motion.div>

                  {/* Floating notification */}
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 }}
                    className="absolute -bottom-4 -right-4 glass-dark rounded-xl px-4 py-3 shadow-xl"
                    animate={{ y: [0, -5, 0] }}>
                    
                    <div className="flex items-center gap-3">
                      <motion.div
                        className="w-2 h-2 rounded-full bg-primary"
                        animate={{ scale: [1, 1.3, 1] }}
                        transition={{ duration: 1, repeat: Infinity }} />
                      
                      <span className="text-primary-foreground/90 text-sm">Data sync enabled
                      </span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>);
};