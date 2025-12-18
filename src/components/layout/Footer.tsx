import { motion } from "framer-motion";
import { ArrowUpRight, Linkedin, Twitter, Instagram } from "lucide-react";

const footerLinks = {
  services: [
    { label: "Permanent Recruitment", href: "#services" },
    { label: "Contract Staffing", href: "#services" },
    { label: "Executive Search", href: "#services" },
    { label: "Volume Hiring", href: "#services" },
  ],
  training: [
    { label: "IT Languages", href: "#training" },
    { label: "UI/UX Design", href: "#training" },
    { label: "Digital Marketing", href: "#training" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Team", href: "#team" },
    { label: "Clients", href: "#clients" },
    { label: "Contact", href: "#contact" },
  ],
};

export const Footer = () => {
  return (
    <footer className="border-t border-border/30 pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-2">
            <a href="#" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <span className="font-display font-black text-primary-foreground text-2xl">S</span>
              </div>
              <span className="font-display font-bold text-2xl text-foreground">
                Shell Consultancy
              </span>
            </a>
            <p className="text-muted-foreground mb-6 max-w-sm leading-relaxed">
              Transforming how businesses find talent and how individuals build careers.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Instagram].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Training</h4>
            <ul className="space-y-3">
              {footerLinks.training.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-bold text-foreground mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          className="glass rounded-3xl p-8 md:p-12 mb-12 relative overflow-hidden"
          whileHover={{ scale: 1.01 }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-violet/10 to-pink/10 pointer-events-none" />
          <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-3xl md:text-4xl font-display font-black text-foreground mb-2">
                Ready to get started?
              </h3>
              <p className="text-muted-foreground">
                Let's discuss your recruitment or training needs today.
              </p>
            </div>
            <motion.a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-bold rounded-full hover:shadow-[0_0_40px_hsl(var(--primary)/0.5)] transition-shadow"
              whileHover={{ scale: 1.05 }}
            >
              Get In Touch
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-border/30">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Shell Consultancy. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
