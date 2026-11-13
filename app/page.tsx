import { SiteLocaleProvider } from "@/components/site/locale-provider";
import { SiteHeader } from "@/components/site/header";
import { HeroSection } from "@/components/site/hero-section";
import { StatsSection } from "@/components/site/stats-section";
import { BenefitsSection } from "@/components/site/benefits-section";
import { ProductsSection } from "@/components/site/products-section";
import { ProcessSection } from "@/components/site/process-section";
import { ReachSection } from "@/components/site/reach-section";
import { TestimonialsSection } from "@/components/site/testimonials-section";
import { ContactSection } from "@/components/site/contact-section";
import { SiteFooter } from "@/components/site/footer";
import { Reveal } from "@/components/site/reveal";

export default function Home() {
  return (
    <SiteLocaleProvider>
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <Reveal>
          <StatsSection />
        </Reveal>
        <Reveal>
          <BenefitsSection />
        </Reveal>
        <Reveal>
          <ProductsSection />
        </Reveal>
        <Reveal>
          <ProcessSection />
        </Reveal>
        <Reveal>
          <ReachSection />
        </Reveal>
        <Reveal>
          <TestimonialsSection />
        </Reveal>
        <Reveal>
          <ContactSection />
        </Reveal>
      </main>
      <SiteFooter />
    </SiteLocaleProvider>
  );
}
