"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

import { cn } from "@/lib/utils"

export default function Skills() {
  const ref = useRef<any>(null)
  const isInView = useInView(ref, { amount: "all", once: false })

  return (
    <section className="h-[300vh] bg-red-300">
      <div className="sticky top-0 flex h-dvh w-full flex-col justify-end bg-brand-green p-5 text-black">
        <h2
          ref={ref}
          className="
          text-[9vw]s relative w-fit font-mona text-[16vw] font-bold uppercase leading-[0.9] text-[#1D2F17]
          font-stretch-80 font-slant-5 font-feature-ss01
          "
        >
          <TheThing isInView={isInView}>Known </TheThing>
          <TheThing isInView={isInView}>technologies</TheThing>
        </h2>
      </div>
    </section>
  )
}

function TheThing({
  children,
  className,
  isInView,
}: {
  children: React.ReactNode
  className?: string
  isInView: boolean
}) {
  // Just a joke!
  const text = children?.toLocaleString().toLowerCase()
  const isLastChild = text === "technologies"

  return (
    <span
      className={cn(
        "outline-3 outlines flex overflow-hidden outline-orange-400",
        className
      )}
    >
      <motion.span
        className="origin-right stroke-white"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          visible: { y: "0%", skewY: 0, opacity: 1 },
          hidden: { y: "100%", skewY: -3, opacity: 1 },
        }}
        transition={{
          delay: isLastChild ? 0.1 : 0,
          type: "spring",
          stiffness: 200,
          damping: 30,
          restDelta: 0.001,
        }}
      >
        {children}
      </motion.span>
    </span>
  )
}

// <p className="text-center font-mona text-xs font-semibold uppercase tracking-wider text-black/70 font-feature-ss01 font-stretch-[115%]">
//   Other Technologies
// </p>
