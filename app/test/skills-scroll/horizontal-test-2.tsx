"use client"

import { motion } from "motion/react"

import { cn } from "@/lib/utils"

export default function Test2() {
  return (
    <>
      <section className="bg-[#da1334]">
        <Sticky />
        <Ghost showGhost />
      </section>
    </>
  )
}

function Sticky() {
  const scrW = 2040 as const

  const val = scrW - window.innerWidth
  const overRide = 1

  return (
    <>
      <div className="container sticky top-0 flex h-[100vh] w-full items-center overflow-x-hidden bg-grey-2 p-0">
        <motion.div
          className="content-wraper flex h-48 w-full bg-black"
          style={{ x: val * -1 * overRide }}
        >
          {Array.from({ length: 3 }, (_, idx) => (
            <SkillCard key={idx} id={idx} />
          ))}
        </motion.div>
      </div>
    </>
  )
}

function SkillCard({ id }: { id: number }) {
  const colors = ["bg-blue-300", "bg-amber-300", "bg-green-300"]

  return (
    <div
      className={cn(
        "h-48 w-[42.5rem] flex-shrink-0 rounded-xl bg-grey-2",
        colors[id]
      )}
    />
  )
}

function Ghost({
  height,
  showGhost,
}: {
  height?: string | number
  showGhost?: boolean
}) {
  return (
    // NOTE: ghost won't have any child and only will have height
    <div
      className={cn("ghost-scroller", showGhost && "flex justify-center")}
      style={{
        height: height || "100vh",
      }}
    >
      {showGhost && (
        <div className="h-full w-5 bg-white mix-blend-difference" />
      )}
    </div>
  )
}

// FOR DEBUG PERPOSES
function FloatingText({ children }: { children?: React.ReactNode }) {
  return <div className="fixed left-5 top-12 z-[999]">{children}</div>
}
