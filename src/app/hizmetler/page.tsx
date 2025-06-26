import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ServicesHero from "../../components/ServicesHero";
import ServiceBlocks from "../../components/ServiceBlocks";
import ServiceIndicator from "../../components/ServiceIndicator";

export default function Services() {
  return (
    <div className="min-h-screen bg-[#181716] relative overflow-hidden">
      <Header />
      <main>
        <ServicesHero />
        <ServiceBlocks />
      </main>
      <ServiceIndicator />
      <Footer />
    </div>
  );
}
