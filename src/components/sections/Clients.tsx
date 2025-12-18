import { motion } from "framer-motion";
import { RevealOnScroll } from "@/components/effects/ScrollAnimations";

const clients = [
  "Tech Mahindra",
  "Transcom",
  "Conneqt",
  "Ebixcash",
  "Altruist",
  "Frankfinn",
  "IBV Tech",
  "Girnar Care",
  "Enser",
  "Gretex",
];

const industries = [
  "Technology",
  "Healthcare",
  "Finance",
  "E-commerce",
  "Manufacturing",
  "Education",
  "Startups",
  "Enterprise",
];

export const Clients = () => {
  return (
    <section id="clients" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-widest mb-6 justify-center">
              <span className="w-8 h-px bg-primary" />
              Trusted By
              <span className="w-8 h-px bg-primary" />
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-display font-black text-foreground leading-[1.1]">
              Companies That
              <br />
              <span className="gradient-text">Trust Us</span>
            </h2>
          </RevealOnScroll>
        </div>

        {/* Industries pills */}
        <RevealOnScroll delay={0.2}>
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {industries.map((industry) => (
              <motion.span
                key={industry}
                className="px-5 py-2 text-sm font-medium bg-muted/50 text-muted-foreground rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                {industry}
              </motion.span>
            ))}
          </div>
        </RevealOnScroll>

        {/* Marquee */}
        <div className="relative py-12">
          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Track 1 */}
          <div className="overflow-hidden mb-6">
            <div className="flex marquee-track">
              {[...clients, ...clients].map((client, i) => (
                <div
                  key={`${client}-${i}`}
                  className="flex-shrink-0 mx-4 px-8 py-4 glass rounded-2xl"
                >
                  <span className="text-lg font-display font-bold text-foreground/60 hover:text-foreground transition-colors whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Track 2 - Reverse */}
          <div className="overflow-hidden">
            <div
              className="flex marquee-track"
              style={{ animationDirection: "reverse", animationDuration: "50s" }}
            >
              {[...clients.reverse(), ...clients].map((client, i) => (
                <div
                  key={`${client}-rev-${i}`}
                  className="flex-shrink-0 mx-4 px-8 py-4 glass rounded-2xl"
                >
                  <span className="text-lg font-display font-bold text-foreground/60 hover:text-foreground transition-colors whitespace-nowrap">
                    {client}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Big Stats */}
        <RevealOnScroll delay={0.3}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: "100+", label: "Happy Clients" },
              { value: "500+", label: "Placements" },
              { value: "95%", label: "Retention" },
              { value: "24/7", label: "Support" },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                className="text-center group cursor-default"
                whileHover={{ scale: 1.05 }}
              >
                <div className="text-5xl md:text-7xl font-display font-black gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
