"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Users, Camera, Megaphone, Award, Briefcase, Palette } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: <Users className="h-10 w-10" />,
    title: "Talent Management",
    description: "Comprehensive representation for Djs, Hype men, and performers with personalized career guidance.",
  },
  {
    icon: <Camera className="h-10 w-10" />,
    title: "Event Booking & Coordination",
    description: "",
  },
  {
    icon: <Megaphone className="h-10 w-10" />,
    title: "PR Startegy & Content Creation",
    description: "Strategic public relations and marketing campaigns to elevate your brand and reach.",
  },
  {
    icon: <Award className="h-10 w-10" />,
    title: "Merchandise Management",
    description: "",
  },
  {
    icon: <Briefcase className="h-10 w-10" />,
    title: "Career Development",
    description: "Personalized coaching and development programs to enhance skills and marketability.",
  },
  {
    icon: <Palette className="h-10 w-10" />,
    title: "Brand Partnerships & Sponsorships",
    description: "Innovative creative direction to bring your vision to life with a distinctive edge.",
  },
]

export default function ServicesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section className="py-20 bg-muted" id="services">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Comprehensive creative solutions to elevate your brand and career
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="mb-4 text-primary">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
