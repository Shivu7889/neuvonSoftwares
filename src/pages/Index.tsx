import { Hero } from "@/components/Hero";
import { HorizontalProjects } from "@/components/HorizontalProjects";
import { ClientLogos } from "@/components/ClientLogos";
import { Services } from "@/components/Services";
import { ScrollTransition } from "@/components/ScrollTransition";
import { LetsTalk } from "@/components/LetsTalk";
import { ScrollServices } from "@/components/ScrollServices";
import { Process } from "@/components/Process";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <HorizontalProjects />
      <ClientLogos />
      <Services />
      <ScrollTransition />
      <LetsTalk />
      <ScrollServices />
      <Process />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
