"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

export default function AboutSection() {
  const sectionRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], [100, -100])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={sectionRef} className="py-20 overflow-hidden relative">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">About EchoTalent</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Founded in 2025, EchoTalent has established itself as a premier talent management and creative services
              agency, representing exceptional Djs, hype men, performers, and creatives across the globe.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Our mission is to amplify creative potential by providing comprehensive representation, strategic
              guidance, and innovative opportunities for our talent while delivering exceptional creative solutions for
              our clients.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                <p className="text-muted-foreground">Represented Talents</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">1+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">10+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">3+</h3>
                <p className="text-muted-foreground">Global Partners</p>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[600px]">
            <motion.div style={{ y, opacity }} className="absolute inset-0 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Sunday at Ilashe"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-72">
                  <Image
                    src="/placeholder.svg?height=450&width=300"
                    alt="Dope Caesar"
                    width={300}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-10">
                <div className="rounded-lg overflow-hidden h-72">
                  <Image
                    src="/placeholder.svg?height=450&width=300"
                    alt="M.I.A"
                    width={300}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Creative direction session"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
