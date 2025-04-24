"use client"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function HeroSection() {
  const videoRef = useRef(null)
  const containerRef = useRef(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 1200, height: 800 })
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, 300])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  useEffect(() => {
    // Set window size after component mounts
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    })

    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }

    const handleMouseMove = (e) => {
      const { clientX, clientY } = e
      const { width, height, left, top } = containerRef.current.getBoundingClientRect()
      const x = (clientX - left) / width - 0.5
      const y = (clientY - top) / height - 0.5
      setMousePosition({ x, y })
    }

    const container = containerRef.current
    container.addEventListener("mousemove", handleMouseMove)

    return () => {
      container.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const titleFirstPart = "Amplifying Creative"
  const titleSecondPart = "Potential"
  const firstPartLetters = titleFirstPart.split("")
  const secondPartLetters = titleSecondPart.split("")

  return (
    <section ref={containerRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <motion.div
        style={{
          x: mousePosition.x * 20,
          y: mousePosition.y * 20,
        }}
        className="absolute inset-0 z-0 scale-110"
      >
        <video ref={videoRef} autoPlay loop muted playsInline className="w-full h-full object-cover">
          <source
            src="https://assets.mixkit.co/videos/preview/mixkit-fashion-model-with-a-cold-and-serious-look-39877-large.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </motion.div>

      {/* Animated particles */}
      <div className="absolute inset-0 z-10">
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
                y: [
                  Math.random() * windowSize.height * 0.8,
                  Math.random() * windowSize.height * 0.8,
                  Math.random() * windowSize.height * 0.8,
                ],
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

      {/* Content */}
      <motion.div style={{ y, opacity }} className="container px-4 mx-auto relative z-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          <motion.h1
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight overflow-hidden py-2"
          >
            <div className="mb-2">
              {firstPartLetters.map((letter, index) => (
                <motion.span
                  key={`first-${index}`}
                  variants={letterVariants}
                  className="inline-block"
                  style={{
                    textShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>

            {/* Second part of the title with gradient */}
            <div className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              {secondPartLetters.map((letter, index) => (
                <motion.span
                  key={`second-${index}`}
                  variants={letterVariants}
                  className="inline-block"
                  style={{
                    textShadow: "0 0 20px rgba(147, 51, 234, 0.5)",
                  }}
                >
                  {letter === " " ? "\u00A0" : letter}
                </motion.span>
              ))}
            </div>
          </motion.h1>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ delay: 1.2, duration: 1 }}
            className="h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent mb-8 mx-auto"
          />

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto"
          >
            Premier talent management and creative services agency representing exceptional artists, performers, and
            creatives.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-white text-black hover:bg-gray-200 hover:text-black group overflow-hidden relative"
            >
              <span className="relative z-10 group-hover:translate-x-1 transition-transform">
                <Link href="/talent" className="flex items-center">
                  Discover Talent <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-black relative overflow-hidden group"
            >
              <span className="relative z-10">
                <Link href="/services">Our Services</Link>
              </span>
              <span className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ repeat: Number.POSITIVE_INFINITY, duration: 1.5 }}
            className="w-1 h-3 bg-white rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  )
}
