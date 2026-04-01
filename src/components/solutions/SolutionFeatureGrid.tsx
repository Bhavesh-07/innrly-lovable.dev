import { motion, useInView, Variants } from "framer-motion";
import { useRef } from "react";
import { TrendingUp, Users, Receipt } from "lucide-react";

interface Feature {
  title: string;
  items: string[];
}

interface SolutionFeatureGridProps {
  title: string;
  description?: string;
  features: Feature[];
}

const featureIcons = [TrendingUp, Users, Receipt];

export const SolutionFeatureGrid = ({
  title,
  description,
  features,
}: SolutionFeatureGridProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 40,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4 },
    },
  };

  return (
    <section ref={ref} className="py-24 bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span 
            className="inline-block text-primary font-medium text-sm uppercase tracking-widest mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.1 }}
          >
            Performance Metrics
          </motion.span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{description}</p>
          )}
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => {
            const Icon = featureIcons[index % featureIcons.length];
            return (
              <motion.div
                key={index}
                variants={cardVariants}
                className="group relative"
              >
                {/* Card glow effect */}
                <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-accent/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500" />
                
                <div className="relative bg-card rounded-2xl p-8 border border-border h-full backdrop-blur-sm group-hover:border-primary/30 transition-colors duration-300">
                  {/* Icon header */}
                  <motion.div 
                    className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 5 }}
                  >
                    <Icon className="w-7 h-7 text-primary" />
                  </motion.div>

                  <h3 className="text-xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>

                  <motion.ul 
                    className="space-y-4"
                    variants={containerVariants}
                  >
                    {feature.items.map((item, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground/80 transition-colors duration-300"
                        variants={itemVariants}
                      >
                        <motion.div 
                          className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent shrink-0 mt-2"
                          initial={{ scale: 0 }}
                          animate={isInView ? { scale: 1 } : { scale: 0 }}
                          transition={{ delay: 0.5 + index * 0.1 + i * 0.05, type: "spring" }}
                        />
                        <span className="leading-relaxed">{item}</span>
                      </motion.li>
                    ))}
                  </motion.ul>

                  {/* Decorative corner accent */}
                  <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent transform translate-x-8 -translate-y-8" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
