import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Button, ButtonProps } from "@/components/ui/button";
import { forwardRef, useRef } from "react";

interface InteractiveButtonProps extends ButtonProps {
  glowColor?: string;
}

export const InteractiveButton = forwardRef<HTMLButtonElement, InteractiveButtonProps>(
  ({ children, className, glowColor = "hsl(220 85% 50%)", ...props }, ref) => {
    const buttonRef = useRef<HTMLDivElement>(null);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 500, damping: 50 });
    const mouseYSpring = useSpring(y, { stiffness: 500, damping: 50 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
      if (!buttonRef.current) return;
      
      const rect = buttonRef.current.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;
      
      const xPct = mouseX / width - 0.5;
      const yPct = mouseY / height - 0.5;
      
      x.set(xPct);
      y.set(yPct);
    };

    const handleMouseLeave = () => {
      x.set(0);
      y.set(0);
    };

    return (
      <motion.div
        ref={buttonRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="relative"
      >
        {/* Glow effect */}
        <motion.div
          className="absolute -inset-1 rounded-lg opacity-0 blur-lg transition-opacity duration-300"
          style={{ background: glowColor }}
          whileHover={{ opacity: 0.4 }}
        />
        
        {/* Border shimmer */}
        <motion.div
          className="absolute inset-0 rounded-lg overflow-hidden"
          style={{ transform: "translateZ(0)" }}
        >
          <motion.div
            className="absolute inset-0 rounded-lg"
            style={{
              background: `linear-gradient(90deg, transparent 0%, ${glowColor} 50%, transparent 100%)`,
              opacity: 0.3,
            }}
            animate={{
              x: ["-100%", "200%"],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatDelay: 3,
              ease: "linear",
            }}
          />
        </motion.div>

        <Button
          ref={ref}
          className={`relative z-10 ${className}`}
          style={{ transform: "translateZ(50px)" }}
          {...props}
        >
          {children}
        </Button>
      </motion.div>
    );
  }
);

InteractiveButton.displayName = "InteractiveButton";
