import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What makes Shell Consultancy different from other recruitment agencies?",
    answer: "We don't just place talent — we prepare it. Our unique combination of recruitment and training ensures candidates are job-ready and aligned with industry needs. We invest in building skills, not just filling positions.",
  },
  {
    question: "How long does the training program take?",
    answer: "Our training programs range from 4-12 weeks depending on the specialization, with flexible scheduling options including weekend and evening batches. Each program is designed for intensive, practical learning.",
  },
  {
    question: "Do you provide job placement after training?",
    answer: "Yes! We have a strong network of 50+ partner companies and provide placement assistance to all our training graduates with a 95% success rate. Your training investment comes with real career outcomes.",
  },
  {
    question: "What industries do you serve?",
    answer: "We serve diverse industries including Technology, Healthcare, Finance, E-commerce, Manufacturing, Education, and more. Our specialized recruitment strategies are tailored for each sector's unique needs.",
  },
  {
    question: "How quickly can you fill positions?",
    answer: "Our average time-to-fill for standard roles is 2-3 weeks, thanks to our pre-vetted talent pool and efficient screening process. For executive positions, we typically complete searches within 4-6 weeks.",
  },
  {
    question: "What support do you provide to candidates?",
    answer: "Beyond placement, we offer resume building, interview coaching, salary negotiation guidance, and ongoing career counseling. We're invested in your long-term success, not just your first job.",
  },
];

export const FAQ = () => {
  return (
    <section id="faq" className="section-padding bg-card/30 relative">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Header */}
          <div className="lg:sticky lg:top-32">
            <span className="text-primary font-semibold text-sm uppercase tracking-wider mb-4 block">
              FAQ
            </span>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-6">
              Got <span className="gradient-text">Questions?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Everything you need to know about working with Shell Consultancy. Can't find what you're looking for? Reach out to our team.
            </p>
            <div className="glass-card p-6">
              <p className="text-sm text-muted-foreground mb-4">Still have questions?</p>
              <a
                href="#contact"
                className="text-primary font-semibold hover:underline inline-flex items-center gap-2"
              >
                Contact our team →
              </a>
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div>
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="glass-card px-6 border-0 rounded-2xl overflow-hidden"
                >
                  <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:text-primary hover:no-underline py-6">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
};
