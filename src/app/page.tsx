import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import ServicesSection from "../components/ServicesSection";
import AboutUs from "../components/AboutUs";
import BlogSection from "../components/BlogSection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#181716] relative overflow-hidden">
      <Header />
      <HeroSection />
      <ServicesSection />
      <AboutUs />
      <BlogSection />
      <Footer />
    </div>
  );
}
