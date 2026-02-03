import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import ClientsSection from "@/components/ClientsSection";
import CareersSection from "@/components/CareersSection";
import InvestorsSection from "@/components/InvestorsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[hsl(200,15%,15%)]">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ClientsSection />
        <CareersSection />
        <InvestorsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
