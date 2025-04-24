import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"

export const metadata = {
  title: "Contact | EchoTalent",
  description: "Get in touch with EchoTalent for talent management and creative services.",
}

export default function ContactPage() {
  return (
    <main className="relative overflow-hidden">
      <ContactHero />
      <div className="container px-4 mx-auto py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
      <ContactMap />
    </main>
  )
}
