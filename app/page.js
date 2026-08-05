import Preloader from "./components/layout/Preloader";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import AboutSection from "./components/home/About";
import Services from "./components/home/Services";
import BusinessCategories from "./components/home/BusinessCategories";
import WhyChooseUs from "./components/home/WhyChooseUs";
import ProcessSection from "./components/home/Process";
import CTASection from "./components/home/CTA";
import Footer from "./components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans antialiased">
      <Preloader />
      <Navbar />
      <Hero />
      <AboutSection />
      <Services />
      <BusinessCategories />
      <WhyChooseUs />
      <ProcessSection />
      <CTASection />
      <Footer />
    </main>
  );
}