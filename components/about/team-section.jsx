"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"

const team = [
  {
    name: "Emma Richards",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
    bio: "With over 20 years of industry experience, Emma founded EchoTalent with a vision to revolutionize talent management.",
  },
  {
    name: "Michael Chen",
    role: "Creative Director",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Award-winning creative director with a background in fashion photography and brand development.",
  },
  {
    name: "Sophia Martinez",
    role: "Head of Talent",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Former model turned talent scout with an eye for discovering and nurturing exceptional creative talent.",
  },
  {
    name: "James Wilson",
    role: "Production Manager",
    image: "/placeholder.svg?height=400&width=400",
    bio: "Experienced production manager who has overseen projects for major brands and publications worldwide.",
  },
]

export default function TeamSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

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
    <section className="py-20">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Meet Our Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The passionate professionals behind EchoTalent's success
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {team.map((member, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="group"
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <a href="#" className="text-white hover:text-purple-300 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-white hover:text-purple-300 transition-colors">
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-white hover:text-purple-300 transition-colors">
                      <Mail className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-1">{member.name}</h3>
              <p className="text-purple-500 mb-3">{member.role}</p>
              <p className="text-muted-foreground text-sm">{member.bio}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}