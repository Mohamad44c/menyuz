import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { FeaturesSection } from "@/components/features-section";
import { IndustriesSection } from "@/components/industries-section";
import { PricingSection } from "@/components/pricing-section";
import { Footer } from "@/components/footer";
import { WhatsAppButton } from "@/components/whatsapp-button";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Menyuz",
  applicationCategory: "BusinessApplication",
  description:
    "Create beautiful, scannable QR menus and digital catalogs for restaurants, cafes, retail stores, and any business worldwide. Starter plan free — upgrade as you grow.",
  url: "https://menyuz.vercel.app",
  offers: [
    { "@type": "Offer", name: "Starter", price: "0",  priceCurrency: "USD", description: "1 branch, 30 products, 10 categories" },
    { "@type": "Offer", name: "Pro",     price: "19", priceCurrency: "USD", description: "3 branches, unlimited products, deals & branch overrides" },
    { "@type": "Offer", name: "Business",price: "49", priceCurrency: "USD", description: "Unlimited branches, products, categories, deals, overrides & branch selector" },
  ],
  operatingSystem: "Web",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <main className="min-h-screen bg-[#080810]">
        <HeroSection />
        <HowItWorksSection />
        <FeaturesSection />
        <IndustriesSection />
        <PricingSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
}
