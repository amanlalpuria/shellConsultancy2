import { motion } from "framer-motion";
import { RevealOnScroll, StaggerChildren, StaggerItem } from "@/components/effects/ScrollAnimations";
import { Button } from "@/components/ui/button";
import { Code, Palette, TrendingUp, ArrowRight, Clock, Users } from "lucide-react";

const programs = [
  {
    icon: Code,
    title: "IT Languages",
    subtitle: "Master In-Demand Tech",
    description: "Java, Python, SQL, JavaScript, React — hands-on projects with real-world applications.",
    skills: ["Java", "Python", "SQL", "JavaScript", "React"],
    duration: "8-12 weeks",
    students: "200+",
    color: "lime",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    subtitle: "Design for Impact",
    description: "From wireframes to high-fidelity prototypes. Learn design thinking and modern tools.",
    skills: ["Figma", "Adobe XD", "Prototyping", "User Research"],
    duration: "6-8 weeks",
    students: "150+",
    color: "violet",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    subtitle: "Drive Real Results",
    description: "Practical marketing mastery with live campaigns. From SEO to paid advertising.",
    skills: ["SEO", "Social Media", "PPC", "Analytics"],
    duration: "6-8 weeks",
    students: "180+",
    color: "pink",
  },
];

export const Training = () => {
  return (
    <section id="training" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-violet/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-lime/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-widest mb-6 justify-center">
              <span className="w-8 h-px bg-primary" />
              Training Programs
              <span className="w-8 h-px bg-primary" />
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-6xl font-display font-black text-foreground leading-[1.1] mb-6">
              Upskilling for the
              <br />
              <span className="gradient-text">Real World</span>
            </h2>
          </RevealOnScroll>
          <RevealOnScroll delay={0.2}>
            <p className="text-xl text-muted-foreground">
              Industry-aligned programs designed with employers to ensure graduates perform from day one.
            </p>
          </RevealOnScroll>
        </div>

        {/* Programs Grid */}
        <StaggerChildren className="grid md:grid-cols-3 gap-8" staggerDelay={0.15}>
          {programs.map((program) => (
            <StaggerItem key={program.title}>
              <motion.div
                className="glass rounded-3xl p-8 h-full flex flex-col group relative overflow-hidden"
                whileHover={{ scale: 1.02, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {/* Animated border gradient */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br ${
                    program.color === "lime"
                      ? "from-lime/20 via-transparent to-lime/5"
                      : program.color === "violet"
                      ? "from-violet/20 via-transparent to-violet/5"
                      : "from-pink/20 via-transparent to-pink/5"
                  }`}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon & Duration */}
                  <div className="flex items-start justify-between mb-6">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
                        program.color === "lime"
                          ? "bg-lime/10 text-lime"
                          : program.color === "violet"
                          ? "bg-violet/10 text-violet"
                          : "bg-pink/10 text-pink"
                      }`}
                    >
                      <program.icon className="w-7 h-7" />
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {program.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {program.students}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-display font-bold text-foreground mb-1">
                    {program.title}
                  </h3>
                  <p
                    className={`text-sm font-medium mb-4 ${
                      program.color === "lime"
                        ? "text-lime"
                        : program.color === "violet"
                        ? "text-violet"
                        : "text-pink"
                    }`}
                  >
                    {program.subtitle}
                  </p>
                  <p className="text-muted-foreground mb-6 flex-1">
                    {program.description}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {program.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 text-xs font-medium bg-muted text-muted-foreground rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button variant="ghost" className="w-full justify-between mt-auto group/btn">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerChildren>

        {/* Bottom CTA */}
        <RevealOnScroll delay={0.3}>
          <div className="text-center mt-16">
            <p className="text-muted-foreground mb-6">
              All programs include placement assistance with our 50+ partner companies.
            </p>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};
