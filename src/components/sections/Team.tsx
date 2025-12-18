import { motion } from "framer-motion";
import { RevealOnScroll, StaggerChildren, StaggerItem } from "@/components/effects/ScrollAnimations";
import { Linkedin, ArrowUpRight } from "lucide-react";

const team = [
  {
    name: "Manan Sharma",
    role: "CEO & Founder",
    bio: "10+ years in talent acquisition and business strategy",
    image: "https://shellconsultancy.com/team/manan.jpg",
  },
  {
    name: "Naresh Rao",
    role: "Head of Training",
    bio: "Tech lead with expertise in upskilling programs",
    image: "https://shellconsultancy.com/team/nareshrao.jpg",
  },
  {
    name: "Deepanshi Gaur",
    role: "Recruitment Director",
    bio: "Specialist in executive search and volume hiring",
    image: "https://shellconsultancy.com/team/deepanshi.jpg",
  },
  {
    name: "Aman Lalpuria",
    role: "Technology Trainer",
    bio: "Full-stack developer and coding bootcamp instructor",
    image: "https://shellconsultancy.com/team/amanlalpuria.jpg",
  },
];

export const Team = () => {
  return (
    <section id="team" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <RevealOnScroll>
              <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-widest mb-6">
                <span className="w-8 h-px bg-primary" />
                Our Team
              </span>
            </RevealOnScroll>
            <RevealOnScroll delay={0.1}>
              <h2 className="text-5xl md:text-6xl font-display font-black text-foreground leading-[1.1]">
                Meet the
                <br />
                <span className="gradient-text">Humans</span>
              </h2>
            </RevealOnScroll>
          </div>
          <RevealOnScroll delay={0.2}>
            <p className="text-muted-foreground max-w-md text-lg">
              Passionate professionals dedicated to transforming careers and businesses.
            </p>
          </RevealOnScroll>
        </div>

        {/* Team Grid */}
        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.1}>
          {team.map((member, i) => (
            <StaggerItem key={member.name}>
              <motion.div
                className="group cursor-pointer"
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  
                  {/* Hover overlay */}
                  <motion.div
                    className="absolute inset-0 bg-primary/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <a
                      href="#"
                      className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center text-background hover:scale-110 transition-transform"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                  </motion.div>

                  {/* Number badge */}
                  <div className="absolute top-4 left-4 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center">
                    <span className="font-display font-bold text-foreground text-sm">
                      0{i + 1}
                    </span>
                  </div>
                </div>

                {/* Info */}
                <h3 className="font-display font-bold text-foreground text-xl mb-1 flex items-center gap-2">
                  {member.name}
                  <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all text-primary" />
                </h3>
                <p className="text-primary text-sm font-medium mb-2">{member.role}</p>
                <p className="text-muted-foreground text-sm">{member.bio}</p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
};
