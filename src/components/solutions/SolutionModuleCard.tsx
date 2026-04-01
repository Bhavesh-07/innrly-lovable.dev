import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface SolutionModuleCardProps {
  title: string;
  description: string;
  includes: string[];
  purpose: string;
  icon: LucideIcon;
  index?: number;
}

export const SolutionModuleCard = ({
  title,
  description,
  includes,
  purpose,
  icon: Icon,
  index = 0,
}: SolutionModuleCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="relative bg-card rounded-2xl p-8 border border-border hover:border-primary/30 transition-all duration-300 group overflow-hidden"
    >
      {/* Animated gradient background on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
      />
      
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100"
        initial={{ x: "-100%" }}
        whileHover={{ x: "200%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="w-1/3 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12" />
      </motion.div>

      <div className="relative z-10 flex items-start gap-4 mb-6">
        <motion.div 
          className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 relative"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-primary/30"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <Icon className="w-7 h-7 text-primary-foreground relative z-10" />
        </motion.div>
        <div>
          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-muted-foreground">{description}</p>
        </div>
      </div>

      <div className="relative z-10 mb-6">
        <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
          Includes
        </h4>
        <ul className="space-y-2">
          {includes.map((item, i) => (
            <motion.li 
              key={i} 
              className="flex items-center gap-2 text-muted-foreground"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              <motion.div 
                className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                animate={{
                  scale: [1, 1.3, 1],
                }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
              />
              {item}
            </motion.li>
          ))}
        </ul>
      </div>

      <div className="relative z-10 pt-6 border-t border-border">
        <h4 className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wider">
          Purpose
        </h4>
        <p className="text-muted-foreground">{purpose}</p>
      </div>

      {/* Corner accent */}
      <motion.div
        className="absolute top-0 right-0 w-20 h-20 opacity-0 group-hover:opacity-100 transition-opacity"
        initial={{ opacity: 0 }}
      >
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-primary/20 to-transparent" />
      </motion.div>
    </motion.div>
  );
};
