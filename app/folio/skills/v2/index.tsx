"use client"

import { useRef } from "react"
import {
  motion,
  useInView,
  useScroll,
  useSpring,
  useTransform,
} from "motion/react"

import { cn } from "@/lib/utils"

export default function Skills() {
  // TODO: Type the ref
  const ref = useRef<any>(null)
  const isInView = useInView(ref, { amount: "all", once: false })

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center"],
  })
  const springScrollY = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.001,
  })
  const clipPath = useTransform(
    springScrollY,
    [0, 1],
    [
      "polygon(0 100%, 100% 100%, 100% 0, 0 100%)",
      "polygon(0 100%, 100% 100%, 100% 100%, 0 100%)",
    ]
  )

  return (
    <section className="h-[300vh]">
      <motion.div
        className="h-[5vh] w-full bg-brand-green"
        style={{ clipPath }}
      />
      <div
        className="
        sticky top-0 flex h-dvh w-full flex-col justify-end bg-brand-green p-5
        text-black
        "
        ref={ref}
      >
        <h2
          className="
          relative w-fit font-mona text-[16vw] font-bold uppercase leading-[0.9] text-[#1D2F17] font-stretch-80
          font-slant-5 font-feature-ss01 md:text-[9vw]
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
    <span className={cn("flex overflow-hidden", className)}>
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
