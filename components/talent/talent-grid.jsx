"use client"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { Instagram, Twitter, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"

const talents = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Fashion Model",
    image: "/placeholder.svg?height=600&width=400",
    category: "models",
  },
  {
    id: 2,
    name: "Jordan Lee",
    role: "Actor & Performer",
    image: "/placeholder.svg?height=600&width=400",
    category: "actors",
  },
  {
    id: 3,
    name: "Taylor Quinn",
    role: "Creative Director",
    image: "/placeholder.svg?height=600&width=400",
    category: "directors",
  },
  {
    id: 4,
    name: "Riley Zhang",
    role: "Photographer",
    image: "/placeholder.svg?height=600&width=400",
    category: "photographers",
  },
  {
    id: 5,
    name: "Cameron Davis",
    role: "Makeup Artist",
    image: "/placeholder.svg?height=600&width=400",
    category: "stylists",
  },
  {
    id: 6,
    name: "Morgan Smith",
    role: "Fashion Model",
    image: "/placeholder.svg?height=600&width=400",
    category: "models",
  },
  {
    id: 7,
    name: "Jamie Wilson",
    role: "Actor",
    image: "/placeholder.svg?height=600&width=400",
    category: "actors",
  },
  {
    id: 8,
    name: "Casey Johnson",
    role: "Photographer",
    image: "/placeholder.svg?height=600&width=400",
    category: "photographers",
  },
]

export default function TalentGrid() {
  const [hoveredId, setHoveredId] = useState(null)
  const containerRef = useRef(null)

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
        <motion.div
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {talents.map((talent) => (
            <motion.div
              key={talent.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(talent.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="group relative overflow-hidden rounded-lg"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="aspect-[3/4] overflow-hidden">
                <Image
                  src={talent.image || "/placeholder.svg"}
                  alt={talent.name}
                  width={400}
                  height={600}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-xl font-bold text-white mb-1">{talent.name}</h3>
                <p className="text-purple-300 mb-4">{talent.role}</p>

                <div className="flex space-x-3 mb-4">
                  <a href="#" className="text-white hover:text-purple-300 transition-colors">
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-white hover:text-purple-300 transition-colors">
                    <Twitter className="h-5 w-5" />
                  </a>
                  <a href="#" className="text-white hover:text-purple-300 transition-colors">
                    <Globe className="h-5 w-5" />
                  </a>
                </div>

                <Button size="sm" className="bg-white text-black hover:bg-purple-100 w-full">
                  View Portfolio
                </Button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-12 text-center">
          <Button size="lg" variant="outline">
            Load More Talent
          </Button>
        </div>
      </div>
    </section>
  )
}
