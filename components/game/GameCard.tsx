"use client"

import { cn } from "@heroui/react"
import { cva, type VariantProps } from "class-variance-authority"
import { Button, ButtonProps } from "react-aria-components"

import { TGameCard } from "@/lib/types"

// TODO: Use a pattern
const gameCardVariant = cva(
  [
    "bg-default-200 dark:bg-default-100 bg-cover bg-center bg-no-repeat",
    "rounded-md",
    "border border-white/10",
    "outline-none shadow-sm",
    "rac-focus-visible:ring",
    "rac-pressed:scale-[0.98]",
    "cursor-default select-none",
  ],
  {
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
  }
)

type GameCardProps = VariantProps<typeof gameCardVariant> &
  ButtonProps & {
    card: TGameCard
    imageOverride?: "hide" | "show"
  }

function GameCard({
  size,
  className,
  card,
  imageOverride,
  ...props
}: GameCardProps) {
  const backgroundImage =
    imageOverride === "show" || (imageOverride !== "hide" && card.isFlipped)
      ? `url(${card.url})`
      : undefined

  return (
    <Button
      className={cn(
        gameCardVariant({ size, className }),
        card.isMatched && "brightness-[65%] saturate-[15%]"
      )}
      style={{ backgroundImage }}
      {...props}
    />
  )
}

export { GameCard, gameCardVariant, type GameCardProps }
