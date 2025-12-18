import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { RevealOnScroll } from "@/components/effects/ScrollAnimations";
import { UserCheck, Clock, Crown, Users, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: UserCheck,
    title: "Permanent Recruitment",
    description: "Find the perfect long-term talent with our comprehensive screening process.",
    color: "lime",
    number: "01",
  },
  {
    icon: Clock,
    title: "Contract Staffing",
    description: "Flexible staffing solutions for project-based needs and temporary requirements.",
    color: "violet",
    number: "02",
  },
  {
    icon: Crown,
    title: "Executive Search",
    description: "Premium recruitment for C-level and senior management positions.",
    color: "pink",
    number: "03",
  },
  {
    icon: Users,
    title: "Volume Hiring",
    description: "Efficient bulk recruitment solutions for rapid scaling and expansion needs.",
    color: "blue",
    number: "04",
  },
];

export const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);

  return (
    <section id="services" className="py-32 relative overflow-hidden" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-20">
          <div>
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-primary" />
                Our Services
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-display font-black text-foreground leading-[1.1]">
                End-to-End
                <br />
                <span className="gradient-text">Recruitment</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.2}>
            <p className="text-muted-foreground max-w-md text-lg">
              From individual hires to enterprise-scale recruitment, we deliver talent solutions tailored to your needs.
            </p>
          </RevealOnScroll>
        </div>

        {/* Horizontal scroll cards */}
        <motion.div className="flex gap-6 pb-8" style={{ x }}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className="flex-shrink-0 w-[400px] glass rounded-3xl p-8 group cursor-pointer relative overflow-hidden"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02, y: -10 }}
            >
              {/* Background gradient on hover */}
              <div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                  service.color === "lime"
                    ? "from-lime/10"
                    : service.color === "violet"
                    ? "from-violet/10"
                    : service.color === "pink"
                    ? "from-pink/10"
                    : "from-blue/10"
                } to-transparent`}
              />

              <div className="relative z-10">
                {/* Number */}
                <span className="text-6xl font-display font-black text-muted/30 mb-4 block">
                  {service.number}
                </span>

                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${
                    service.color === "lime"
                      ? "bg-lime/10 text-lime"
                      : service.color === "violet"
                      ? "bg-violet/10 text-violet"
                      : service.color === "pink"
                      ? "bg-pink/10 text-pink"
                      : "bg-blue/10 text-blue"
                  }`}
                >
                  <service.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-display font-bold text-foreground mb-3 flex items-center gap-2">
                  {service.title}
                  <ArrowUpRight className="w-5 h-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
