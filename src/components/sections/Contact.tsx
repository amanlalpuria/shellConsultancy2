import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RevealOnScroll } from "@/components/effects/ScrollAnimations";
import { Mail, Phone, MapPin, Send, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <RevealOnScroll>
            <span className="inline-flex items-center gap-2 text-primary font-medium text-sm uppercase tracking-widest mb-6 justify-center">
              <span className="w-8 h-px bg-primary" />
              Get In Touch
              <span className="w-8 h-px bg-primary" />
            </span>
          </RevealOnScroll>
          <RevealOnScroll delay={0.1}>
            <h2 className="text-5xl md:text-7xl font-display font-black text-foreground leading-[1.1] mb-6">
              Let's Build
              <br />
              <span className="gradient-text">Something Great</span>
            </h2>
          </RevealOnScroll>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact Info */}
          <RevealOnScroll className="lg:col-span-2 space-y-6" delay={0.2}>
            {[
              {
                icon: Mail,
                label: "Email",
                value: "admin@shellconsultancy.com",
                href: "mailto:admin@shellconsultancy.com",
              },
              {
                icon: Phone,
                label: "Phone",
                value: "+91 6367 194 878",
                href: "tel:+916367194878",
              },
              {
                icon: MapPin,
                label: "Office",
                value: "Syam Vihar, Murlipura, Jaipur",
                href: "#",
              },
            ].map((item) => (
              <motion.a
                key={item.label}
                href={item.href}
                className="glass rounded-2xl p-6 flex items-start gap-4 group block"
                whileHover={{ scale: 1.02, x: 10 }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                  <p className="text-foreground font-medium flex items-center gap-2">
                    {item.value}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-primary" />
                  </p>
                </div>
              </motion.a>
            ))}
          </RevealOnScroll>

          {/* Contact Form */}
          <RevealOnScroll className="lg:col-span-3" delay={0.3}>
            <form onSubmit={handleSubmit} className="glass rounded-3xl p-8">
              <div className="grid sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    placeholder="John"
                    required
                    className="bg-muted/50 border-border/30 focus:border-primary rounded-xl h-12"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    placeholder="Doe"
                    required
                    className="bg-muted/50 border-border/30 focus:border-primary rounded-xl h-12"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <Input
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  required
                  className="bg-muted/50 border-border/30 focus:border-primary rounded-xl h-12"
                />
              </div>

              <div className="mb-4">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <Input
                  name="subject"
                  placeholder="How can we help?"
                  required
                  className="bg-muted/50 border-border/30 focus:border-primary rounded-xl h-12"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your needs..."
                  rows={5}
                  required
                  className="bg-muted/50 border-border/30 focus:border-primary rounded-xl resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </Button>
            </form>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
};
