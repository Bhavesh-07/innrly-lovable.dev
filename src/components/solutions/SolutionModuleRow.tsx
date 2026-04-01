import { motion, useInView, Variants } from "framer-motion";
import { LucideIcon, ArrowRight } from "lucide-react";
import { useRef } from "react";
import { Link } from "react-router-dom";

interface SolutionModuleRowProps {
  title: string;
  description: string;
  includes: string[];
  purpose: string;
  icon: LucideIcon;
  image: string;
  index: number;
  reversed?: boolean;
  imagePosition?: string;
  objectFit?: "cover" | "contain";
  imageScale?: number;
  flipAnimation?: boolean;
  learnMoreLink?: string;
  showNewBadge?: boolean;
}

export const SolutionModuleRow = ({
  title,
  description,
  includes,
  purpose,
  icon: Icon,
  image,
  index,
  reversed = false,
  imagePosition = "center 85%",
  objectFit = "cover",
  imageScale,
  flipAnimation = false,
  learnMoreLink,
  showNewBadge = false,
}: SolutionModuleRowProps) => {
  const defaultScale = objectFit === "contain" ? 1.15 : 1;
  const scale = imageScale ?? defaultScale;
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Text animation variants
  const textContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const textItemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: reversed ? 50 : -50,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
      },
    },
  };

  // Image animation variants
  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: reversed ? -80 : 80,
      scale: 0.95,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94] as const,
        delay: 0.3,
      },
    },
  };

  // Image reveal mask animation
  const maskVariants: Variants = {
    hidden: { 
      clipPath: reversed 
        ? "inset(0 0 0 100%)" 
        : "inset(0 100% 0 0)",
    },
    visible: { 
      clipPath: "inset(0 0% 0 0%)",
      transition: {
        duration: 1,
        ease: [0.77, 0, 0.175, 1] as const,
        delay: 0.2,
      },
    },
  };

  // List item variants with stagger
  const listVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.5,
      },
    },
  };

  const listItemVariants: Variants = {
    hidden: { 
      opacity: 0, 
      x: -20,
    },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <div
      ref={ref}
      className={`flex flex-col ${reversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center`}
    >
      {/* Content Side */}
      <motion.div 
        className="flex-1 w-full"
        variants={textContainerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className="flex items-center gap-4 mb-4"
          variants={textItemVariants}
        >
          <motion.div 
            className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Icon className="w-6 h-6 text-primary" />
          </motion.div>
          <h3 className="text-2xl font-bold text-foreground relative">
            {title}
            {showNewBadge && (
              <span className="absolute -top-2 -right-11 bg-primary text-primary-foreground text-[10px] font-bold uppercase px-2 py-0.5 rounded-md shadow-sm tracking-wider">
                New
              </span>
            )}
          </h3>
          {learnMoreLink && (
            <Link 
              to={learnMoreLink} 
              className="ml-auto text-xl font-extrabold text-destructive hover:text-destructive/80 transition-colors flex items-center gap-1 group"
            >
              Learn More
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          )}
        </motion.div>
        
        <motion.p 
          className="text-muted-foreground mb-6 text-lg"
          variants={textItemVariants}
        >
          {description}
        </motion.p>

        <motion.div 
          className="space-y-3 mb-6"
          variants={listVariants}
        >
          <motion.p 
            className="text-sm font-semibold text-foreground uppercase tracking-wider"
            variants={textItemVariants}
          >
            Includes:
          </motion.p>
          <ul className="space-y-2">
            {includes.map((item, i) => (
              <motion.li 
                key={i} 
                className="flex items-start gap-3 text-muted-foreground"
                variants={listItemVariants}
              >
                <motion.div 
                  className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : { scale: 0 }}
                  transition={{ delay: 0.6 + i * 0.08, duration: 0.3 }}
                />
                <span>{item}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div 
          className="bg-primary/5 border border-primary/20 rounded-xl p-4"
          variants={textItemVariants}
          whileHover={{ 
            borderColor: "hsl(var(--primary) / 0.4)",
            backgroundColor: "hsl(var(--primary) / 0.08)",
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-sm font-semibold text-primary mb-1">Purpose</p>
          <p className="text-muted-foreground">{purpose}</p>
        </motion.div>

        </motion.div>

      {/* Image Side with Reveal Effect */}
      <motion.div 
        className="flex-1 w-full"
        variants={imageVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div 
          className={`relative rounded-2xl overflow-hidden shadow-2xl ${objectFit === "contain" ? "bg-white" : "bg-gradient-to-br from-primary/10 to-accent/10 aspect-[4/3]"}`}
          variants={maskVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={image}
            alt={title}
            className={`w-full ${objectFit === "contain" ? "h-auto max-h-[400px] object-contain mx-auto" : "h-full object-cover"}`}
            style={{ objectPosition: imagePosition, transform: objectFit === "contain" ? `scale(${scale})` : undefined, perspective: flipAnimation ? 1000 : undefined }}
            initial={{ 
              scale: objectFit === "contain" ? scale : 1.2,
              rotateY: flipAnimation ? 0 : 0,
            }}
            animate={isInView ? { 
              scale: objectFit === "contain" ? scale : 1, 
              rotateY: flipAnimation ? 360 : 0,
            } : { 
              scale: objectFit === "contain" ? scale : 1.2,
              rotateY: 0,
            }}
            transition={flipAnimation ? { 
              scale: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
              rotateY: { duration: 3, ease: "easeInOut", repeat: Infinity, repeatDelay: 2 },
            } : { 
              duration: 1.2, 
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
          />
          {objectFit !== "contain" && (
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            />
          )}
          {/* Shine effect on hover */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full"
            whileHover={{ translateX: "200%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          />
        </motion.div>
        <p className="text-[10px] text-muted-foreground/50 text-right mt-1.5 italic tracking-wide">
          *For illustration purposes only
        </p>
      </motion.div>
    </div>
  );
};
