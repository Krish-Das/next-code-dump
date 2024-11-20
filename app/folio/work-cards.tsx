"use client"

import { motion, useScroll, useTransform } from "motion/react"

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

export default function WorkCards({
  triggerRef,
}: {
  triggerRef: React.RefObject<HTMLDivElement>
}) {
  console.log(triggerRef)
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start start", "0.7 end"],
  })
  const translateLeft = useTransform(
    scrollYProgress,
    [0, 1],
    ["calc((100% + 1.25rem) * 0)", "calc((100% + 1.25rem) * -1)"]
  )
  const translateRight = useTransform(
    scrollYProgress,
    [0, 1],
    ["calc((100% + 1.25rem) * 0)", "calc((100% + 1.25rem) * 1)"]
  )
  const rotateLeft = useTransform(scrollYProgress, [0, 1], [-5, 0])
  const rotateRight = useTransform(scrollYProgress, [0, 1], [5, 0])

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

// <motion.div
//   className="left-card absolute hidden h-72 w-52 origin-bottom rounded-md border border-[#242422] bg-[#131312]"
//   style={nameVariant.fromLeft}
//   animate={nameVariant.toLeft}
//   initial={nameVariant.fromLeft}
// />
// <motion.div
//   className="left-card absolute hidden h-72 w-52 origin-bottom rounded-md border border-[#242422] bg-[#131312]"
//   style={nameVariant.fromRight}
//   animate={nameVariant.toRight}
//   initial={nameVariant.fromRight}
// />
