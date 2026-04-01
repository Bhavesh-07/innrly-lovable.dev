import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { LogoCarousel } from "@/components/sections/LogoCarousel";
import { WhySection } from "@/components/sections/WhySection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProductsSection } from "@/components/sections/ProductsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { Footer } from "@/components/layout/Footer";
import { PromoPopup } from "@/components/sections/PromoPopup";
import { SEO } from "@/components/SEO";

const Index = () => {
  return (
    <div className="min-h-screen">
      <SEO
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@type": "Organization",
          name: "INNRLY",
          url: "https://innrly.com",
          description: "The most comprehensive data platform in the hospitality industry.",
          sameAs: [
            "https://www.linkedin.com/company/innrly",
          ],
        }}
      />
      <Navbar />
      <main>
        <HeroSection />
        <StatsSection />
        <LogoCarousel />
        <WhySection />
        <FeaturesSection />
        <ProductsSection />
        <TestimonialsSection />
        <PricingSection />
        <CTASection />
      </main>
      <Footer />
      <PromoPopup />
    </div>
  );
};

export default Index;
