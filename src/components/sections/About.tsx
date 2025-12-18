import { motion } from "framer-motion";
import { RevealOnScroll, StaggerChildren, StaggerItem } from "@/components/effects/ScrollAnimations";
import { Sparkles, Target, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Target,
    title: "Precision Matching",
    description: "AI-powered talent matching that finds the perfect fit for your culture and goals.",
  },
  {
    icon: Zap,
    title: "Rapid Deployment",
    description: "From search to hire in record time without compromising quality.",
  },
  {
    icon: Sparkles,
    title: "Skill Building",
    description: "Industry-aligned training that creates job-ready professionals.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "We invest in long-term success, not just first-day placement.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full">
        <motion.div
          className="text-[20vw] font-display font-black text-outline-thin whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          TALENT • TRAINED • TRANSFORMED •
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left - Content */}
          <div>
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-primary" />
                About Us
              </span>
            </RevealOnScroll>

            <RevealOnScroll delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-display font-black text-foreground leading-[1.1] mb-8">
                Bridging
                <br />
                <span className="gradient-text">Education</span>
                <br />& Employment
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={0.2}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Shell Consultancy transforms potential into performance. We believe that the right training combined with strategic placement creates professionals who don't just fill roles — they excel in them.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={0.3}>
              <div className="glass p-6 rounded-2xl">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  <span className="text-primary font-semibold">Our Mission:</span> To create job-ready professionals and deliver talent that drives results, transforming both careers and businesses.
                </p>
              </div>
            </RevealOnScroll>
          </div>

          {/* Right - Features Grid */}
          <StaggerChildren className="grid sm:grid-cols-2 gap-6" staggerDelay={0.15}>
            {features.map((feature, i) => (
              <StaggerItem key={feature.title}>
                <motion.div
                  className="glass p-6 rounded-2xl h-full group cursor-default"
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { duration: 0.2 } 
                  }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display font-bold text-foreground text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
};
