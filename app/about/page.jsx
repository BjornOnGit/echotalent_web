import AboutHero from "@/components/about/about-hero"
import AboutStory from "@/components/about/about-story"
import TeamSection from "@/components/about/team-section"
import ValuesSection from "@/components/about/values-section"
import CTASection from "@/components/cta-section"

export const metadata = {
  title: "About | EchoTalent",
  description: "Learn about EchoTalent's story, mission, and the team behind our creative agency.",
}

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden">
      <AboutHero />
      <AboutStory />
      <ValuesSection />
      <TeamSection />
      <CTASection
        title="Join the EchoTalent family"
        description="Become part of our creative community and let's make something extraordinary together."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"
        secondaryButtonText="View Our Talent"
        secondaryButtonLink="/talent"
      />
    </main>
  )
}
