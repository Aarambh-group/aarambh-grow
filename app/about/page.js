import Navbar from "../components/layout/Navbar";
import Hero from "../components/about/Hero";
import About from "../components/about/About";
import ValueOutcomes from "../components/about/ValueOutcomes";
import CorePillars from "../components/about/CorePillars";
import WhyTrustUs from "../components/about/WhyTrustUs"; 
import CTASection from "../components/layout/CTA";
import Footer from "../components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <Hero />
        <About />
        <ValueOutcomes />
        <CorePillars />
        <WhyTrustUs />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}