"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"
import { p } from "motion/react-client"

import { cn, splitIntoWords } from "@/lib/utils"
import { MaterialSymbolsRectangleRounded } from "@/components/icons/material-symbols"

export default function Cards() {
  return (
    <section className="flex h-lvh flex-col justify-center gap-9">
      <TextSplitAnimation className="justify-center text-center text-xs font-semibold uppercase leading-none tracking-wider font-stretch-[115%]">
        Known Technologies
      </TextSplitAnimation>

      <Grid className="container">
        <SkillCards className="col-start-2" />
        <SkillCards />
        <SkillCards />
      </Grid>
    </section>
  )
}
function SkillCards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        // TODO: rename this group
        "group relative col-span-2 flex h-[30rem] w-full flex-col gap-1.5 rounded-md border border-grey-1 bg-grey-1/20 p-1.5",
        className
      )}
    >
      <div className="grid flex-1 place-items-center rounded text-foreground/80">
        <MaterialSymbolsRectangleRounded />
      </div>
      <div
        className="grid h-0 grid-cols-2 gap-3 overflow-hidden rounded-md bg-grey-1/70 font-mona text-[0.6rem] font-semibold
        uppercase tracking-wider text-foreground/80 transition-all font-feature-ss01 font-stretch-[115%] group-hover:h-16 
        "
      >
        <p className="self-center text-center opacity-0 blur-sm transition-all group-hover:opacity-100 group-hover:blur-0">
          2020
        </p>
        <p className="self-center opacity-0 blur-sm transition-all group-hover:opacity-100 group-hover:blur-0">
          This is some
        </p>
      </div>
    </div>
  )
}

function TextSplitAnimation({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  const headingRef = useRef<HTMLParagraphElement>(null)
  const isParaInView = useInView(headingRef, { amount: "all" })

  const splitChild = splitIntoWords(children.toString())

  return (
    <p
      className={cn(
        "relative inline-flex gap-[0.5ch] overflow-hidden",
        className
      )}
      style={{
        fontFamily: "var(--font-mona), sans-serif",
        fontFeatureSettings: "'ss01' on",
      }}
      ref={headingRef}
    >
      {splitChild.map((child, idx) => (
        <motion.span
          className="origin-bottom"
          key={idx}
          variants={{
            hidden: { scaleY: 0.5, y: 5, opacity: 0 },
            visible: { scaleY: 1, y: 0, opacity: 1 },
          }}
          initial="hidden"
          animate={isParaInView ? "visible" : "hidden"}
          transition={{
            delay: isParaInView ? (idx + 1) * 0.08 : 0,
            // type: "spring",
            // stiffness: 200,
            // damping: 30,
            // restDelta: 0.001,
          }}
        >
          {child}
        </motion.span>
      ))}
    </p>
  )
}

export function Grid({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("grid w-full grid-cols-8 gap-3", className)}>
      {children}
    </div>
  )
}
