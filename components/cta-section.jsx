"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion"

export default function CTASection({
  title,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
}) {
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })

  useEffect(() => {
    // Set window size after component mounts
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })
  }, [])

  return (
    <section className="relative py-20 overflow-hidden bg-black text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 to-pink-900/20" />
        <div className="absolute w-full h-full">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 md:w-2 md:h-2 rounded-full bg-purple-500 opacity-70"
              animate={{
                x: [
                  Math.random() * windowSize.width * 0.8,
                  Math.random() * windowSize.width * 0.8,
                  Math.random() * windowSize.width * 0.8,
                ],
                y: [Math.random() * 400, Math.random() * 400, Math.random() * 400],
                scale: [0.5, 1, 0.5],
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">{title}</h2>
          <p className="text-lg md:text-xl mb-8 text-gray-300">{description}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 hover:text-black group overflow-hidden relative"
            >
              <span className="relative z-10">
                <Link href={primaryButtonLink}>{primaryButtonText}</Link>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black relative overflow-hidden group"
            >
              <span className="relative z-10">
                <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
              </span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
