import { SpringOptions, useScroll, useSpring, useTransform } from "motion/react"

const springOptions: SpringOptions = {
  stiffness: 200,
  damping: 30,
  restDelta: 0.001,
}

// TODO: Rename works
export function useWorkCardAnimation(target: React.RefObject<HTMLDivElement>) {
  const { scrollYProgress: progressForCardHeading } = useScroll({
    target,
    offset: ["start 0.25", "center end"],
  })
  const { scrollYProgress: progressForCards } = useScroll({
    target,
    offset: ["start start", "0.57 end"],
  })

  const springProgressForCardHeading = useSpring(
    progressForCardHeading,
    springOptions
  )
  const springProgressForCards = useSpring(progressForCards, springOptions)

  const translateTop = useTransform(
    springProgressForCardHeading,
    [0, 1],
    ["4.2rem", "0rem"]
  )

  const translateLeft = useTransform(
    springProgressForCards,
    [0, 1],
    ["calc((100% + 1.25rem) * 0)", "calc((100% + 1.25rem) * -1)"]
  )
  const translateRight = useTransform(
    springProgressForCards,
    [0, 1],
    ["calc((100% + 1.25rem) * 0)", "calc((100% + 1.25rem) * 1)"]
  )
  const rotateLeft = useTransform(springProgressForCards, [0, 1], [-5, 0])
  const rotateRight = useTransform(springProgressForCards, [0, 1], [5, 0])

  const cardHeading = {
    translateTop,
  }
  const cards = {
    translateLeft,
    rotateLeft,
    translateRight,
    rotateRight,
  }

  return { cardHeading, cards }
}
