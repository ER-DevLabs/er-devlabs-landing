import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MetricsSection from "@/components/MetricsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TechStackSection from "@/components/TechStackSection";
import PricingSection from "@/components/PricingSection";
import ProcessSection from "@/components/ProcessSection";
import MissionVisionSection from "@/components/MissionVisionSection";
import AboutSection from "@/components/AboutSection";
import FAQSection from "@/components/FAQSection";
import FooterSection from "@/components/FooterSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MetricsSection />
        <ServicesSection />
        <ProjectsSection />
        <TechStackSection />
        <PricingSection />
        <ProcessSection />
        <MissionVisionSection />
        <AboutSection />
        <FAQSection />
        <FooterSection />
      </main>
    </>
  );
}
