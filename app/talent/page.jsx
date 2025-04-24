import TalentHero from "@/components/talent/talent-hero"
import TalentGrid from "@/components/talent/talent-grid"
import TalentCategories from "@/components/talent/talent-categories"
import TalentTestimonials from "@/components/talent/talent-testimonials"
import CTASection from "@/components/cta-section"

export const metadata = {
  title: "Talent | EchoTalent",
  description: "Discover our exceptional roster of creative professionals and artists.",
}

export default function TalentPage() {
  return (
    <main className="relative overflow-hidden">
      <TalentHero />
      <TalentCategories />
      <TalentGrid />
      <TalentTestimonials />
      <CTASection
        title="Looking for exceptional talent?"
        description="We represent the industry's most creative and skilled professionals."
        primaryButtonText="Contact Us"
        primaryButtonLink="/contact"
        secondaryButtonText="Our Services"
        secondaryButtonLink="/services"
      />
    </main>
  )
}
