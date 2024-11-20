"use client"

import { useRef } from "react"
import { motion } from "motion/react"

import { useWorkCardAnimation } from "@/hooks/animations"
import { MaterialSymbolsBroadcastOnPersonalRounded } from "@/components/icons/material-symbols"

export default function Works() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const { cardHeading, cards } = useWorkCardAnimation(sectionRef)

  return (
    <section className="scroll_trigger h-[250vh]" ref={sectionRef}>
      <div className="sticky top-0 mx-auto flex h-dvh flex-col items-center justify-center gap-12">
        <motion.div
          className="relative top-[4.2rem] space-y-3"
          style={{ top: cardHeading.translateTop }}
        >
          <p className="flex items-center justify-center gap-1 font-mona text-xs font-semibold uppercase text-foreground/70 font-feature-ss01 font-stretch-[115%]">
            <span className="text-sm">
              <MaterialSymbolsBroadcastOnPersonalRounded />
            </span>
            <span className="_">Knowledge and Skills</span>
          </p>
          <h2
            className="font-mona text-5xl font-bold uppercase font-stretch-80 font-slant-5 font-feature-ss01"
            style={{
              maskImage:
                "linear-gradient(black, rgb(0 0 0 / 80%), rgb(0 0 0 / 50%))",
            }}
          >
            Work Compilation
          </h2>
        </motion.div>

        <div className="relative mx-auto flex w-fit items-center justify-center gap-5">
          <motion.div
            className="left-card absolute h-72 w-52 origin-bottom rounded-md border border-[#242422] bg-[#131312]"
            style={{
              top: 0,
              x: cards.translateRight,
              rotate: cards.rotateRight,
            }}
          />

          <motion.div
            className="left-card absolute h-72 w-52 origin-bottom rounded-md border border-[#242422] bg-[#131312]"
            style={{
              top: 0,
              x: cards.translateLeft,
              rotate: cards.rotateLeft,
            }}
          />

          <div className="relative h-72 w-52 rounded-md border border-[#242422] bg-[#131312]" />
        </div>
      </div>
    </section>
  )
}
