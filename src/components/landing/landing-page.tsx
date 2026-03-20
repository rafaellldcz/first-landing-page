import type { SiteConfig } from "@/data/site-config";
import { BenefitsSection } from "@/components/landing/benefits-section";
import { FaqSection } from "@/components/landing/faq-section";
import { FinalCtaSection } from "@/components/landing/final-cta-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { LeadFormSection } from "@/components/landing/lead-form-section";
import { OfferSection } from "@/components/landing/offer-section";
import { SocialProofSection } from "@/components/landing/social-proof-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";

type LandingPageProps = {
  config: SiteConfig;
};

export function LandingPage({ config }: LandingPageProps) {
  return (
    <>
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[70] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
      >
        Ir para o conteúdo principal
      </a>
      <Header config={config} />
      <main className="relative overflow-hidden" id="conteudo-principal" tabIndex={-1}>
        <HeroSection config={config} />
        <SocialProofSection config={config} />
        <BenefitsSection config={config} />
        <HowItWorksSection config={config} />
        <OfferSection config={config} />
        <TestimonialsSection config={config} />
        <FaqSection config={config} />
        <LeadFormSection config={config} />
        <FinalCtaSection config={config} />
      </main>
      <Footer config={config} />
    </>
  );
}

