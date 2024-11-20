import { useScroll, useSpring, useTransform } from "motion/react"

export function useCardTransformAnimation(
  triggerRef: React.RefObject<HTMLDivElement>
) {
  const { scrollYProgress } = useScroll({
    target: triggerRef,
    offset: ["start start", "0.57 end"],
  })
  const springScrollYProgress = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    // restDelta: 0.01,
    restDelta: 0.001,
  })

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
