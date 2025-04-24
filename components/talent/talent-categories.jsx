"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

export default function TalentCategories() {
  const [activeCategory, setActiveCategory] = useState("all")

  const categories = [
    { id: "all", name: "All Talent" },
    { id: "models", name: "Models" },
    { id: "actors", name: "Actors" },
    { id: "photographers", name: "Photographers" },
    { id: "directors", name: "Directors" },
    { id: "stylists", name: "Stylists" },
  ]

  return (
    <section className="py-12 bg-muted">
      <div className="container px-4 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="relative overflow-hidden group"
            >
              <span className="relative z-10">{category.name}</span>
              {activeCategory === category.id && (
                <motion.span
                  layoutId="activeCategoryBackground"
                  className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </Button>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
