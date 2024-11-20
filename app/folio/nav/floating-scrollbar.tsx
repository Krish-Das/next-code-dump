"use client"

import { motion, useScroll, useTransform } from "motion/react"

export default function FloatingScrollbar() {
  const { scrollYProgress } = useScroll()

  const height = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="overflow-y-hiddens fixed right-8 top-1/2 h-32 -translate-y-1/2 rounded-full bg-[#21211f]">
      <motion.div
        className="h-[25%]s relative w-0.5 origin-top rounded-full bg-white/80"
        style={{
          height,
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 0.7), white)",
        }}
      >
        <span className="absolute bottom-0 left-1/2 size-1 -translate-x-1/2 rounded-full bg-white/90 blur-sm" />
      </motion.div>
    </div>
  )
}
