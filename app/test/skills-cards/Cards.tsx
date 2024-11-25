"use client"

import { useRef } from "react"
import { motion, useInView } from "motion/react"

import { cn, splitIntoWords } from "@/lib/utils"
import { MaterialSymbolsRectangleRounded } from "@/components/icons/material-symbols"

export default function Cards() {
  return (
    <section className="flex min-h-lvh flex-col justify-center gap-9">
      <TextSplitAnimation
        className="justify-center text-center text-xs font-semibold uppercase leading-none tracking-wider font-stretch-[115%]"
        animateOnce
      >
        Known Technologies
      </TextSplitAnimation>

      <Grid className="container">
        {Array.from({ length: 3 }, (_, idx) => (
          <SkillCards
            className={cn(idx === 0 && "col-start-2")}
            key={idx}
            idx={idx}
          />
        ))}
      </Grid>

      <div className="h-32" />

      <TextSplitAnimation
        className="justify-center text-center text-xs font-semibold uppercase leading-none tracking-wider font-stretch-[115%]"
        animateOnce
      >
        Other Technologies
      </TextSplitAnimation>

      <MoreSkills />

      <div className="h-32" />
    </section>
  )
}
function SkillCards({ className, idx }: { className?: string; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isParaInView = useInView(cardRef, { amount: 1, once: true })

  return (
    <motion.div
      className={cn(
        // TODO: rename this group
        "group relative col-span-2 flex h-[30rem] w-full flex-col gap-1.5 rounded-md border border-grey-1 bg-grey-1/20 p-1.5",
        className
      )}
      variants={{
        hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0%)" },
        visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
      }}
      animate={isParaInView ? "visible" : "hidden"}
      transition={{
        // delay: isParaInView ? (idx + 1) * 0.08 : 0,

        delay: idx * 0.08,
        type: "spring",
        duration: 0.8,
        bounce: 0,
      }}
      ref={cardRef}
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
    </motion.div>
  )
}
function MoreSkills() {
  const cardRef = useRef<HTMLDivElement>(null)
  const isCardInView = useInView(cardRef, { amount: 1, once: true })

  return (
    <Grid className="container">
      <motion.div
        className="
          h-[30rem]s col-span-6 col-start-2 h-80 w-full
          rounded-md border border-grey-1 bg-grey-1/20
          "
        variants={{
          hidden: { clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0%)" },
          visible: { clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)" },
        }}
        animate={isCardInView ? "visible" : "hidden"}
        transition={{
          type: "spring",
          duration: 0.8,
          bounce: 0,
        }}
        ref={cardRef}
      />
    </Grid>
  )
}

function TextSplitAnimation({
  children,
  className,
  animateOnce,
}: {
  children: string
  className?: string
  animateOnce?: boolean
}) {
  const headingRef = useRef<HTMLParagraphElement>(null)
  const isParaInView = useInView(headingRef, {
    amount: "all",
    once: animateOnce,
  })

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
            visible: { skewY: 0, y: 0, opacity: 1, filter: "blur(0px)" },
            hidden: { skewY: -3, y: 10, opacity: 0, filter: "blur(2px)" },
          }}
          animate={isParaInView ? "visible" : "hidden"}
          transition={{
            // duration: isParaInView ? 3 : 0,

            delay: isParaInView ? (idx + 2) * 0.1 : 0,
            type: "spring",
            stiffness: 300,
            damping: 30,
            mass: 1,
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
