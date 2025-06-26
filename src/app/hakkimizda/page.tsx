import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/AboutHero";
import AboutStatement from "@/components/AboutStatement";
import AboutValues from "@/components/AboutValues";
import AboutStudio from "@/components/AboutStudio";
import AboutTestimonials from "@/components/AboutTestimonials";
import AboutAwards from "@/components/AboutAwards";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <AboutStatement />
      <AboutValues />
      <AboutStudio />
      <AboutTestimonials />
      <AboutAwards />
      <Footer />
    </main>
  );
}
