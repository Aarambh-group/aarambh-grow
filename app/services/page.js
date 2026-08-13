import Navbar from "../components/layout/Navbar";
import ServicesHero from "../components/services/ServicesHero";
import ServicesExplorer from "../components/services/ServicesExplorer";
import FAQ from "../components/services/FAQ";
import CTASection from "../components/layout/CTA";
import Footer from "../components/layout/Footer";

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen">
        <ServicesHero />
        <ServicesExplorer />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}