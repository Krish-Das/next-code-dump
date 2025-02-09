"use client"

import { Card, CardProps, cn } from "@heroui/react"
import { cva, type VariantProps } from "class-variance-authority"

const gameCardVariant = cva("", {
  variants: {
    size: {
      square: "h-24 w-24",
      tall: "h-32 w-24",
      small: "h-24 w-20",
    },
  },
  defaultVariants: {
    size: "square",
  },
})

type GameCardProps = VariantProps<typeof gameCardVariant> & CardProps & {}

function GameCard({ size, className, ...props }: GameCardProps) {
  return (
    <Card className={cn(gameCardVariant({ size, className }))} {...props} />
  )
}

export { GameCard, gameCardVariant, type GameCardProps }
