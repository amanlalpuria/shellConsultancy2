import { Navigation } from "@/components/layout/Navigation";
import { Footer } from "@/components/layout/Footer";
import { AnimatedBlobs } from "@/components/effects/AnimatedBlobs";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Training } from "@/components/sections/Training";
import { Clients } from "@/components/sections/Clients";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

const Index = () => {
  return (
    <main className="min-h-screen bg-background relative">
      {/* Animated background */}
      <AnimatedBlobs />
      
      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Services />
        <Training />
        <Clients />
        <Team />
        <Contact />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
