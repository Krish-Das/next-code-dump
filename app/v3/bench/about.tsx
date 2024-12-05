"use client"

import { useRef } from "react"
import { motion, useInView, useScroll, useTransform } from "motion/react"

import { Subheading } from "../typography/components/heading"

export default function About() {
  const targetRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)

  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end end"],
  })
  const isHeadingInView = useInView(headingRef, {
    amount: "all",
    margin: "0px 0px -80px 0px",
  })

  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 1],
    ["#000", "#989bee"]
  )

  const width = useTransform(scrollYProgress, [0, 1], ["95vw", "100vw"])
  const borderRadius = useTransform(scrollYProgress, [0, 1], [20, 0])

  return (
    <>
      <motion.section
        className="light container grid h-screen place-items-center bg-[#989bee] text-foreground"
        style={{
          width,
          borderRadius,
        }}
        ref={targetRef}
      >
        <span
          className="inline-block h-fit w-fit overflow-hidden"
          ref={headingRef}
        >
          <motion.h3
            className="flex items-center gap-1 text-3xl font-bold uppercase leading-snug"
            style={{
              fontStretch: "115%",
              fontFamily: "var(--font-mona), sans-serif",
            }}
            variants={{
              visible: { opacity: 1, y: "0%", skewY: 0, filter: "blur(0px)" },
              hidden: { opacity: 0, y: "100%", skewY: -3, filter: "blur(8px)" },
            }}
            initial="hidden"
            animate={isHeadingInView ? "visible" : "hidden"}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 30,
              restDelta: 0.001,
            }}
          >
            Hero not done yet!
          </motion.h3>
        </span>
      </motion.section>
    </>
  )
}
