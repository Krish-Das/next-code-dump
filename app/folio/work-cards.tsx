"use client"

import { motion } from "motion/react"

export default function WorkCards() {
  const nameVariant = {
    fromLeft: {
      top: 0,
      left: "calc((100% + 1.25rem) * -0)",
      rotate: -5,
    },
    toLeft: {
      top: 0,
      left: "calc((100% + 1.25rem) * -1)",
      rotate: 0,
    },
    fromRight: {
      top: 0,
      left: "calc((100% + 1.25rem) * -0)",
      rotate: 5,
    },
    toRight: {
      top: 0,
      left: "calc((100% + 1.25rem) * 1)",
      rotate: 0,
    },
  }

  return (
    <div className="relative mx-auto flex w-fit items-center justify-center gap-5">
      <motion.div
        className="left-card absolute h-72 w-52 origin-bottom rounded-md border border-[#242422] bg-[#131312]"
        style={nameVariant.fromLeft}
        animate={nameVariant.toLeft}
        initial={nameVariant.fromLeft}
      />
      <motion.div
        className="left-card absolute h-72 w-52 origin-bottom rounded-md border border-[#242422] bg-[#131312]"
        style={nameVariant.fromRight}
        animate={nameVariant.toRight}
        initial={nameVariant.fromRight}
      />

      <div className="relative h-72 w-52 rounded-md border border-[#242422] bg-[#131312]" />
    </div>
  )
}
