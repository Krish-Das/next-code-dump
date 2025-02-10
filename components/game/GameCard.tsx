"use client"

import { Card, CardProps, cn } from "@heroui/react"
import { cva, type VariantProps } from "class-variance-authority"

// TODO: Use a pattern
const gameCardVariant = cva("bg-default-300", {
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
    <Card
      className={cn(gameCardVariant({ size, className }))}
      shadow="none"
      {...props}
    />
  )
}

export { GameCard, gameCardVariant, type GameCardProps }
