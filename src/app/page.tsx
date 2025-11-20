import { PortfolioNavbar } from "@/components/PortfolioNavbar"
import { ProductTeaserCard } from "@/components/ProductTeaserCard"
import { BankingScaleHero } from "@/components/BankingScaleHero"
import { CaseStudiesCarousel } from "@/components/CaseStudiesCarousel"
import { IntegrationCarousel } from "@/components/IntegrationCarousel"
import { PricingSection } from "@/components/PricingSection"
import { FAQSection } from "@/components/FAQSection"
import { Footer } from "@/components/Footer"

export default function Page() {
  // Main landing page
  return (
    <>
      <PortfolioNavbar />
      <ProductTeaserCard />
      <IntegrationCarousel />
      <BankingScaleHero />
      <CaseStudiesCarousel />
      <PricingSection />
      <FAQSection />
      <Footer />
    </>
  )
}
