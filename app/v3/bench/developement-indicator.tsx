"use client"

import { useState } from "react"
import { motion } from "motion/react"

import { MaterialSymbolsConstructionRounded } from "@/components/icons/material-symbols"

export default function DevelopementIndicator() {
  return (
    <div className="fixed left-0 top-0 p-2">
      <Dot2 />
    </div>
  )
}

// TODO: Rename later
function Dot2() {
  const [isHovering, setHovering] = useState(false)

  return (
    <div
      className="
      inline-flex h-8 w-fit min-w-8 select-none items-center rounded-full bg-yellow-700/30
      px-2 text-[0.65rem] text-yellow-200 backdrop-blur-sm [&>svg]:text-sm
        "
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={() => setHovering(false)}
    >
      <MaterialSymbolsConstructionRounded />
      <motion.div
        className="flex w-auto flex-nowrap overflow-hidden"
        variants={{
          hidden: { width: 0 },
          visible: { width: "auto" },
        }}
        initial="hidden"
        animate={isHovering ? "visible" : "hidden"}
        // animate="visible"
        // transition={{ type: "spring", stiffness: 100, damping: 10, mass: 1 }}
      >
        <motion.p
          className="text-nowrap pl-1.5 font-mona font-medium tracking-wide font-stretch-110 font-feature-ss01"
          variants={{
            hidden: { filter: "blur(2px)", opacity: 0, y: "100%" },
            visible: { filter: "blur(0px)", opacity: 1, y: "0%" },
          }}
          initial="hidden"
          animate={isHovering ? "visible" : "hidden"}
          transition={{ duration: 0.1, bounce: 0 }}
        >
          Development preview
        </motion.p>
      </motion.div>
    </div>
  )
}
