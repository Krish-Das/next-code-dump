"use client"

import { useCardTransformAnimation } from "@/hooks"
import { motion } from "motion/react"

export default function WorkCards({
  targetRef,
}: {
  targetRef: React.RefObject<HTMLDivElement>
}) {
  const { translateLeft, rotateLeft, translateRight, rotateRight } =
    useCardTransformAnimation(targetRef)

  return (
    <div className="relative mx-auto flex w-fit items-center justify-center gap-5">
      <motion.div
        className="left-card absolute h-72 w-52 origin-bottom rounded-md border border-[#242422] bg-[#131312]"
        style={{
          top: 0,
          x: translateRight,
          rotate: rotateRight,
        }}
      />

      <motion.div
        className="left-card absolute h-72 w-52 origin-bottom rounded-md border border-[#242422] bg-[#131312]"
        style={{
          top: 0,
          x: translateLeft,
          rotate: rotateLeft,
        }}
      />

      <div className="relative h-72 w-52 rounded-md border border-[#242422] bg-[#131312]" />
    </div>
  )
}
