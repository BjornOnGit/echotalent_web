"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export default function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [cursorVariant, setCursorVariant] = useState("default")
  const [isVisible, setIsVisible] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)

    const mouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      })
      if (!isVisible) setIsVisible(true)
    }

    const mouseLeave = () => setIsVisible(false)
    const mouseEnter = () => setIsVisible(true)
    const mouseDown = () => setCursorVariant("click")
    const mouseUp = () => setCursorVariant("default")
    const mouseEnterLink = () => setCursorVariant("hover")
    const mouseLeaveLink = () => setCursorVariant("default")

    window.addEventListener("mousemove", mouseMove)
    document.addEventListener("mouseleave", mouseLeave)
    document.addEventListener("mouseenter", mouseEnter)
    window.addEventListener("mousedown", mouseDown)
    window.addEventListener("mouseup", mouseUp)

    const links = document.querySelectorAll("a, button, input, textarea, select, [role='button']")
    links.forEach((link) => {
      link.addEventListener("mouseenter", mouseEnterLink)
      link.addEventListener("mouseleave", mouseLeaveLink)
    })

    return () => {
      window.removeEventListener("mousemove", mouseMove)
      document.removeEventListener("mouseleave", mouseLeave)
      document.removeEventListener("mouseenter", mouseEnter)
      window.removeEventListener("mousedown", mouseDown)
      window.removeEventListener("mouseup", mouseUp)

      links.forEach((link) => {
        link.removeEventListener("mouseenter", mouseEnterLink)
        link.removeEventListener("mouseleave", mouseLeaveLink)
      })
    }
  }, [isVisible])

  // Don't render anything during SSR
  if (!isMounted) return null

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(147, 51, 234, 0.3)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    hover: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      height: 48,
      width: 48,
      backgroundColor: "rgba(147, 51, 234, 0.5)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
    click: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      height: 32,
      width: 32,
      backgroundColor: "rgba(147, 51, 234, 0.8)",
      mixBlendMode: "difference",
      transition: {
        type: "spring",
        mass: 0.6,
      },
    },
  }

  const cursorDotVariants = {
    default: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "rgba(255, 255, 255, 0.8)",
      transition: {
        type: "spring",
        mass: 0.3,
      },
    },
    hover: {
      x: mousePosition.x - 4,
      y: mousePosition.y - 4,
      height: 8,
      width: 8,
      backgroundColor: "rgba(255, 255, 255, 1)",
      transition: {
        type: "spring",
        mass: 0.3,
      },
    },
    click: {
      x: mousePosition.x - 6,
      y: mousePosition.y - 6,
      height: 12,
      width: 12,
      backgroundColor: "rgba(255, 255, 255, 1)",
      transition: {
        type: "spring",
        mass: 0.3,
      },
    },
  }

  return (
    <>
      <style jsx global>{`
        * {
          cursor: none;
        }
      `}</style>
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        variants={variants}
        animate={cursorVariant}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
      <motion.div
        className="fixed top-0 left-0 rounded-full pointer-events-none z-50 hidden md:block"
        variants={cursorDotVariants}
        animate={cursorVariant}
        style={{ opacity: isVisible ? 1 : 0 }}
      />
    </>
  )
}
