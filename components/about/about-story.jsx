"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"

export default function AboutStory() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])

  return (
    <section ref={ref} className="py-20 overflow-hidden relative">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            <p className="text-lg mb-6 text-muted-foreground">
              Founded in 2015, EchoTalent has established itself as a premier talent management and creative services
              agency, representing exceptional artists, performers, and creatives across the globe.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Our journey began with a simple vision: to create a space where creative talent could thrive with
              personalized representation and innovative opportunities. Today, we've grown into a global network of
              industry professionals dedicated to amplifying creative potential.
            </p>
            <p className="text-lg mb-6 text-muted-foreground">
              Our mission is to bridge the gap between exceptional talent and groundbreaking opportunities, fostering
              meaningful connections that lead to extraordinary creative collaborations.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">200+</h3>
                <p className="text-muted-foreground">Represented Talents</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">15+</h3>
                <p className="text-muted-foreground">Years Experience</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold text-primary mb-2">30+</h3>
                <p className="text-muted-foreground">Global Partners</p>
              </div>
            </div>
          </motion.div>

          <div className="relative h-[600px]">
            <motion.div style={{ y: y1, opacity }} className="absolute inset-0 grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-lg overflow-hidden h-64">
                  <Image
                    src="/placeholder.svg?height=400&width=300"
                    alt="Creative team at work"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-lg overflow-hidden h-72">
                  <Image
                    src="/placeholder.svg?height=450&width=300"
                    alt="Fashion photoshoot"
                    width={300}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <motion.div style={{ y: y2 }} className="space-y-4 pt-10">
                <div className="rounded-lg overflow-hidden h-72">
                  <Image
                    src="/placeholder.svg?height=450&width=300"
                    alt="Model portfolio"
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
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
