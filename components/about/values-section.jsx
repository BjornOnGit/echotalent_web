"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Heart, Lightbulb, Users, Sparkles, Globe, Shield } from "lucide-react"

const values = [
  {
    icon: <Heart className="h-8 w-8" />,
    title: "Passion",
    description: "We're driven by a deep passion for creativity and artistic expression in all its forms.",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: <Lightbulb className="h-8 w-8" />,
    title: "Innovation",
    description: "We constantly push boundaries and explore new possibilities in the creative landscape.",
    color: "from-yellow-500 to-amber-500",
  },
  {
    icon: <Users className="h-8 w-8" />,
    title: "Collaboration",
    description: "We believe in the power of collaboration to create something greater than the sum of its parts.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Sparkles className="h-8 w-8" />,
    title: "Excellence",
    description: "We strive for excellence in everything we do, from representation to production.",
    color: "from-purple-500 to-violet-500",
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Diversity",
    description: "We celebrate diversity and champion unique voices and perspectives in the creative industry.",
    color: "from-green-500 to-emerald-500",
  },
  {
    icon: <Shield className="h-8 w-8" />,
    title: "Integrity",
    description: "We operate with transparency, honesty, and ethical practices in all our relationships.",
    color: "from-indigo-500 to-blue-500",
  },
]

export default function ValuesSection() {
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
    <section className="py-20 bg-muted">
      <div className="container px-4 mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            The principles that guide everything we do at EchoTalent
          </motion.p>
        </div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="bg-background rounded-lg p-8 shadow-sm hover:shadow-md transition-all duration-300"
            >
              <div className={`p-4 rounded-full bg-gradient-to-br ${value.color} inline-block mb-6 text-white`}>
                {value.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}