import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import { NetworkLines, ParticleField } from "@/components/effects/FloatingElements";

const wordVariants = {
  hidden: { opacity: 0, y: 100, rotateX: -90 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.8,
      delay: i * 0.15,
      ease: [0.21, 0.47, 0.32, 0.98],
    },
  }),
};

const taglineWords = ["Talent", "That", "Transforms"];

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background elements */}
      <NetworkLines />
      <ParticleField />

      {/* Rotating circle decoration */}
      <div className="absolute right-[10%] top-1/4 w-96 h-96 pointer-events-none hidden lg:block">
        <motion.div
          className="w-full h-full rounded-full border border-primary/20 animate-spin-slow"
          style={{ animationDuration: "30s" }}
        />
        <motion.div
          className="absolute inset-8 rounded-full border border-violet/20 animate-spin-slow"
          style={{ animationDuration: "25s", animationDirection: "reverse" }}
        />
        <motion.div
          className="absolute inset-16 rounded-full border border-pink/20 animate-spin-slow"
          style={{ animationDuration: "20s" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <motion.div
            className="flex items-center gap-3 mb-8"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-12 h-px bg-primary" />
            <span className="text-primary font-medium text-sm uppercase tracking-widest">
              Recruitment & Training
            </span>
          </motion.div>

          {/* Main headline with word animation */}
          <div className="overflow-hidden mb-4">
            <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-display font-black leading-[0.9] tracking-tighter">
              {taglineWords.map((word, i) => (
                <motion.span
                  key={word}
                  className={`inline-block mr-6 ${
                    i === 2 ? "gradient-text-lime" : "text-foreground"
                  }`}
                  custom={i}
                  initial="hidden"
                  animate="visible"
                  variants={wordVariants}
                >
                  {word}
                </motion.span>
              ))}
            </h1>
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl text-muted-foreground max-w-2xl mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            We don't just fill positions — we build futures. Industry-aligned training meets precision recruitment.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-start gap-4 mt-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            <Button variant="hero" size="lg" asChild>
              <a href="#contact" className="group">
                Start Your Journey
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#about" className="group flex items-center gap-2">
                <Play className="w-4 h-4" />
                Watch Our Story
              </a>
            </Button>
          </motion.div>

          {/* Stats ticker */}
          <motion.div
            className="flex flex-wrap gap-12 mt-20 pt-12 border-t border-border/30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            {[
              { value: "500+", label: "Placements" },
              { value: "95%", label: "Success Rate" },
              { value: "50+", label: "Partners" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                className="group cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-4xl md:text-5xl font-display font-black text-foreground group-hover:text-primary transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <motion.div
          className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <div className="w-1 h-2 bg-primary rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
