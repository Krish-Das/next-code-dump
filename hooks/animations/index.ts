import { SpringOptions, useScroll, useSpring, useTransform } from "motion/react"

const springOptions: SpringOptions = {
  stiffness: 200,
  damping: 30,
  restDelta: 0.001,
}

export function useCardTransformAnimation(
  targetRef: React.RefObject<HTMLDivElement>
) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "0.57 end"],
  })
  const springScrollYProgress = useSpring(scrollYProgress, springOptions)

  const translateLeft = useTransform(
    springScrollYProgress,
    [0, 1],
    ["calc((100% + 1.25rem) * 0)", "calc((100% + 1.25rem) * -1)"]
  )
  const translateRight = useTransform(
    springScrollYProgress,
    [0, 1],
    ["calc((100% + 1.25rem) * 0)", "calc((100% + 1.25rem) * 1)"]
  )
  const rotateLeft = useTransform(springScrollYProgress, [0, 1], [-5, 0])
  const rotateRight = useTransform(springScrollYProgress, [0, 1], [5, 0])

  return { translateLeft, rotateLeft, translateRight, rotateRight }
}

// TODO: Rename work
export function useWorkCardHeadingAnimation(
  targetRef: React.RefObject<HTMLDivElement>
) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 0.25", "center end"],
  })

  const springScrollYProgress = useSpring(scrollYProgress, springOptions)

  const translateTop = useTransform(
    springScrollYProgress,
    [0, 1],
    ["4.2rem", "0rem"]
  )

  return { translateTop }
}
