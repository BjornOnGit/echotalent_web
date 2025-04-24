import ServicesHero from "@/components/services/services-hero"
import ServicesList from "@/components/services/services-list"
import ServiceProcess from "@/components/services/service-process"
import ClientsSection from "@/components/services/clients-section"
import CTASection from "@/components/cta-section"

export const metadata = {
  title: "Services | EchoTalent",
  description: "Explore our comprehensive range of talent management and creative services.",
}

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden">
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
      <ClientsSection />
      <CTASection
        title="Ready to elevate your creative vision?"
        description="Let's collaborate to bring your ideas to life with our expert services."
        primaryButtonText="Get Started"
        primaryButtonLink="/contact"
        secondaryButtonText="Learn More"
        secondaryButtonLink="/about"
      />
    </main>
  )
}
