"use client"

import { useRef } from "react"
import {
  motion,
  MotionValue,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "motion/react"

import { cn } from "@/lib/utils"

export default function Skills() {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start", "end"],
  })
  const x = useTransform(scrollYProgress, [0, 1], ["0", "-100%"])

  return (
    <>
      <section
        className="bg-[#da1334]s relative h-[calc(100vh+42.5rem*3+1rem*2)]s h-[calc(100vh+100vw*3)]s h-[calc(100vh+42.5rem*3)]"
        ref={ref}
      >
        <motion.div className="fixed left-[10%] top-[20%]">
          {scrollYProgress}
        </motion.div>
        <Marks />

        <motion.div className="container sticky top-0 h-dvh p-0">
          <p className="text-center font-mona text-xs font-semibold uppercase tracking-wider font-feature-ss01 font-stretch-[115%]">
            Known Technologies
          </p>

          <div className="w-full overflow-x-hidden bg-grey-2 outline-white outline-1 outline">
            <motion.div
              className="flex w-full items-center gap-0 px-[calc((100%-42.5rem)/2)]"
              style={{
                x,
                // x: "-100%",
              }}
            >
              {Array.from({ length: 3 }, (_, idx) => (
                <SkillCard
                  key={idx}
                  id={idx}
                  scrollYProgress={scrollYProgress}
                />
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>
    </>
  )
}

function SkillCard({
  id,
  scrollYProgress,
}: {
  id: number
  scrollYProgress: MotionValue<number>
}) {
  const colors = ["bg-blue-300", "bg-amber-300", "bg-green-300"]
  const x = useTransform(scrollYProgress, [0, 1], [0, 300])

  return (
    <motion.div
      className={cn(
        "h-48 w-[42.5rem] flex-shrink-0 rounded-xl bg-grey-2",
        colors[id]
      )}
      // style={{
      //   x
      // }}
    />
  )
}

function Marks() {
  return (
    <div className="absolute inset-y-0 left-0 z-[9999999] flex flex-col justify-between py-10 text-[5vh]">
      {Array.from({ length: 3 }, (_, idx) => (
        <p key={idx}>{"0" + (idx + 1)}</p>
      ))}
    </div>
  )
}
