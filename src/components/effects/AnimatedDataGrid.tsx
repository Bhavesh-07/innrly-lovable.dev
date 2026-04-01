import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface DataPoint {
  id: number;
  value: number;
  x: number;
  y: number;
  active: boolean;
}

export const AnimatedDataGrid = () => {
  const [dataPoints, setDataPoints] = useState<DataPoint[]>([]);
  const gridSize = 8;
  const totalPoints = gridSize * gridSize;

  useEffect(() => {
    // Initialize grid
    const points: DataPoint[] = [];
    for (let i = 0; i < totalPoints; i++) {
      points.push({
        id: i,
        value: Math.random() * 100,
        x: (i % gridSize) / gridSize,
        y: Math.floor(i / gridSize) / gridSize,
        active: Math.random() > 0.7,
      });
    }
    setDataPoints(points);

    // Animate random points
    const interval = setInterval(() => {
      setDataPoints(prev => 
        prev.map(point => ({
          ...point,
          active: Math.random() > 0.6,
          value: Math.random() * 100,
        }))
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Flowing lines */}
      <svg className="absolute inset-0 w-full h-full opacity-20">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(220 85% 50%)" stopOpacity="0" />
            <stop offset="50%" stopColor="hsl(220 85% 50%)" stopOpacity="0.8" />
            <stop offset="100%" stopColor="hsl(190 100% 45%)" stopOpacity="0" />
          </linearGradient>
        </defs>
        
        {/* Animated flowing lines */}
        {[...Array(5)].map((_, i) => (
          <motion.line
            key={i}
            x1="0%"
            y1={`${20 + i * 15}%`}
            x2="100%"
            y2={`${30 + i * 12}%`}
            stroke="url(#lineGradient)"
            strokeWidth="1"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: [0, 1],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "linear",
            }}
          />
        ))}
      </svg>

      {/* Data grid points */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div 
          className="grid gap-3 opacity-30"
          style={{ 
            gridTemplateColumns: `repeat(${gridSize}, 1fr)`,
            width: '60%',
            aspectRatio: '1',
          }}
        >
          {dataPoints.map((point) => (
            <motion.div
              key={point.id}
              className="relative flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ 
                scale: point.active ? 1 : 0.5,
                opacity: point.active ? 1 : 0.3,
              }}
              transition={{ duration: 0.5 }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-primary"
                animate={{
                  boxShadow: point.active 
                    ? "0 0 20px hsl(220 85% 50% / 0.8)" 
                    : "0 0 5px hsl(220 85% 50% / 0.3)",
                }}
                transition={{ duration: 0.5 }}
              />
              {point.active && (
                <motion.div
                  className="absolute w-4 h-4 rounded-full border border-primary/50"
                  initial={{ scale: 0.5, opacity: 1 }}
                  animate={{ scale: 2, opacity: 0 }}
                  transition={{ 
                    duration: 1.5, 
                    repeat: Infinity,
                    ease: "easeOut",
                  }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Flowing data streams */}
      {[...Array(3)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          style={{
            top: `${30 + i * 20}%`,
            left: '-10%',
            width: '120%',
          }}
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.8,
          }}
        />
      ))}
    </div>
  );
};
