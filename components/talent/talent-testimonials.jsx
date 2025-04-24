"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    quote:
      "Working with EchoTalent has been transformative for my career. Their guidance and connections have opened doors I never thought possible.",
    author: "Alex Morgan",
    role: "Fashion Model",
  },
  {
    id: 2,
    quote:
      "The team at EchoTalent truly understands the industry and has helped me navigate it with confidence and success.",
    author: "Jordan Lee",
    role: "Actor & Performer",
  },
  {
    id: 3,
    quote:
      "I've been with several agencies throughout my career, but none have provided the personalized attention and opportunities that EchoTalent has.",
    author: "Taylor Quinn",
    role: "Creative Director",
  },
]

export default function TalentTestimonials() {
  const [current, setCurrent] = useState(0)
  const [direction, setDirection] = useState(0)

  const nextSlide = () => {
    setDirection(1)
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setDirection(-1)
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

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
    <section className="py-20 bg-black text-white relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/50" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Talent Testimonials</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Hear what our represented talent has to say about working with EchoTalent
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="text-center"
            >
              <Quote className="h-16 w-16 mx-auto mb-6 text-purple-400 opacity-50" />
              <p className="text-xl md:text-2xl mb-8 italic">{testimonials[current].quote}</p>
              <div>
                <p className="font-bold text-lg">{testimonials[current].author}</p>
                <p className="text-purple-400">{testimonials[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-12 gap-4">
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
        </div>
      </div>
    </section>
  )
}
