import { motion } from "framer-motion";

interface FloatingShapeProps {
  className?: string;
  delay?: number;
  duration?: number;
}

export const FloatingShape = ({ className = "", delay = 0, duration = 6 }: FloatingShapeProps) => {
  return (
    <motion.div
      className={className}
      initial={{ y: 0, rotate: 0 }}
      animate={{
        y: [-20, 20, -20],
        rotate: [0, 10, -10, 0],
      }}
      transition={{
        duration,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
};

export const NetworkLines = () => {
  return (
    <svg
      className="absolute inset-0 w-full h-full opacity-20"
      viewBox="0 0 1000 600"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(75 100% 50%)" stopOpacity="0" />
          <stop offset="50%" stopColor="hsl(75 100% 50%)" stopOpacity="1" />
          <stop offset="100%" stopColor="hsl(270 100% 65%)" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* Animated connection lines */}
      {[...Array(8)].map((_, i) => (
        <motion.line
          key={i}
          x1={100 + i * 120}
          y1={100 + (i % 3) * 150}
          x2={200 + i * 100}
          y2={200 + ((i + 1) % 4) * 100}
          stroke="url(#lineGradient)"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{
            pathLength: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 4,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Nodes */}
      {[...Array(12)].map((_, i) => (
        <motion.circle
          key={`node-${i}`}
          cx={150 + (i % 4) * 200 + Math.random() * 100}
          cy={100 + Math.floor(i / 4) * 150 + Math.random() * 50}
          r="4"
          fill="hsl(75 100% 50%)"
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: [0, 1, 1, 0],
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: 3,
            delay: i * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </svg>
  );
};

export const ParticleField = () => {
  const particles = [...Array(30)].map((_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 3 + 4,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/40"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
