"use client"

import { useState, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const talents = [
  {
    id: 1,
    name: "Alex Morgan",
    role: "Fashion Model",
    image: "/placeholder.svg?height=600&width=400",
    bio: "International runway model with experience in Paris, Milan, and New York Fashion Weeks.",
  },
  {
    id: 2,
    name: "Jordan Lee",
    role: "Actor & Performer",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Award-winning actor with credits in film, television, and theater productions worldwide.",
  },
  {
    id: 3,
    name: "Taylor Quinn",
    role: "Creative Director",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Visionary creative director specializing in fashion editorials and brand campaigns.",
  },
  {
    id: 4,
    name: "Riley Zhang",
    role: "Photographer",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Renowned photographer whose work has been featured in Vogue, Elle, and Harper's Bazaar.",
  },
  {
    id: 5,
    name: "Cameron Davis",
    role: "Makeup Artist",
    image: "/placeholder.svg?height=600&width=400",
    bio: "Celebrity makeup artist known for creating iconic looks for red carpet events and editorial shoots.",
  },
]

export default function TalentShowcase() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const constraintsRef = useRef(null)

  const nextSlide = () => {
    setDirection(1)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % talents.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + talents.length) % talents.length)
  }

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  }

  return (
    <section className="py-20 overflow-hidden bg-black text-white">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Talent</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Discover our exceptional roster of creative professionals
          </p>
        </motion.div>

        <div className="relative" ref={constraintsRef}>
          <div className="overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ type: "tween", duration: 0.5 }}
                className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
              >
                <div className="w-full md:w-1/2 mb-8 md:mb-0">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg">
                    <motion.img
                      src={talents[currentIndex].image}
                      alt={talents[currentIndex].name}
                      className="w-full h-full object-cover"
                      initial={{ scale: 1.2 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.7 }}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                  >
                    <h3 className="text-4xl md:text-5xl font-bold mb-2">{talents[currentIndex].name}</h3>
                    <p className="text-xl text-purple-400 mb-6">{talents[currentIndex].role}</p>
                    <p className="text-lg text-gray-300 mb-8">{talents[currentIndex].bio}</p>
                    <Button className="bg-white text-black hover:bg-gray-200 hover:text-black">View Portfolio</Button>
                  </motion.div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-white text-white hover:bg-white hover:text-black"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-white text-white hover:bg-white hover:text-black"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          <div className="flex justify-center mt-6">
            {talents.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1)
                  setCurrentIndex(index)
                }}
                className={`w-3 h-3 mx-1 rounded-full ${index === currentIndex ? "bg-white" : "bg-gray-600"}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
