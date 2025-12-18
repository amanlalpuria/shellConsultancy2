import { motion } from "framer-motion";

export const AnimatedBlobs = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Main lime blob */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-lime/20 animate-blob blur-3xl"
        initial={{ x: "-20%", y: "-20%" }}
        animate={{
          x: ["-20%", "0%", "-10%", "-20%"],
          y: ["-20%", "-10%", "0%", "-20%"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Violet blob */}
      <motion.div
        className="absolute right-0 top-1/4 w-[500px] h-[500px] bg-violet/15 animate-blob-delay blur-3xl"
        initial={{ x: "20%", y: "0%" }}
        animate={{
          x: ["20%", "10%", "30%", "20%"],
          y: ["0%", "10%", "-5%", "0%"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Pink blob */}
      <motion.div
        className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-pink/10 animate-blob-delay-2 blur-3xl"
        initial={{ x: "0%", y: "20%" }}
        animate={{
          x: ["0%", "15%", "-10%", "0%"],
          y: ["20%", "10%", "25%", "20%"],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(hsl(var(--foreground) / 0.5) 1px, transparent 1px),
            linear-gradient(90deg, hsl(var(--foreground) / 0.5) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
        }}
      />

      {/* Noise texture */}
      <div className="absolute inset-0 noise-overlay" />
    </div>
  );
};
