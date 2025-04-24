import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import TalentShowcase from "@/components/talent-showcase"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import CustomCursor from "@/components/custom-cursor"

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      <CustomCursor />
      <HeroSection />
      <ServicesSection />
      <TalentShowcase />
      <AboutSection />
      <ContactSection />

      <section className="relative py-20 overflow-hidden bg-black text-white">
        <div className="container px-4 mx-auto relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Ready to amplify your creative potential?
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-300">
              Join the EchoTalent family and let's create something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-black hover:bg-gray-200 hover:text-black">
                <Link href="/contact">Get Started</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                <Link href="/portfolio">View Our Work</Link>
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0"></div>
      </section>
    </main>
  )
}
