import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import SystemFlow from "@/components/SystemFlow";
import Services from "@/components/Services";
import ProductVisuals from "@/components/ProductVisuals";
import EngineeringApproach from "@/components/EngineeringApproach";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-[#070a0f]">
      <Navbar />
      <Hero />
      <Marquee />
      <SystemFlow />
      <Services />
      <ProductVisuals />
      <EngineeringApproach />
      <CTA />
      <Footer />
    </main>
  );
}
