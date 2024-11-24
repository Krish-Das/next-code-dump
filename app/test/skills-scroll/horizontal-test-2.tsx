"use client"

import { useRef } from "react"
import { useWindowDimensions } from "@/hooks"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"
import useMeasure from "react-use-measure"

import { cn } from "@/lib/utils"

export default function Test2() {
  const srollContainerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: srollContainerRef,
    offset: ["start", "end"],
  })

  return (
    <>
      <FloatingText>
        <motion.div>{scrollYProgress}</motion.div>
      </FloatingText>

      <section className="bg-[#da1334]s" ref={srollContainerRef}>
        <Sticky scrollYProgress={scrollYProgress} />
      </section>
    </>
  )
}

function Sticky({ scrollYProgress }: { scrollYProgress: MotionValue<number> }) {
  const [containerRef, { width: scrW }] = useMeasure()
  const { width: viewportW } = useWindowDimensions()

  const dir: 1 | -1 = -1
  const val = scrW - viewportW

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [val * dir * 0, val * dir * 1]
  )

  return (
    <>
      <div className="container sticky top-0 flex h-[100vh] w-full items-center overflow-x-hidden p-0">
        <motion.div
          className="content-wraper flex w-max gap-4 px-[calc((100%-42.5rem)/2)]"
          style={{ x }}
          ref={containerRef}
        >
          {Array.from({ length: 3 }, (_, idx) => (
            <SkillCard key={idx} id={idx} />
          ))}
        </motion.div>
      </div>

      <Ghost height={scrW} />
    </>
  )
}

// eslint-disable-next-line no-unused-vars
function SkillCard({ id }: { id: number }) {
  return <div className="h-48 w-[42.5rem] flex-shrink-0 rounded-xl bg-grey-2" />
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
