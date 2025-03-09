import { useEffect } from "react"
import { cn } from "@heroui/react"
import { useFocusWithin } from "@react-aria/interactions"

import { useGame } from "@/components/provider/game"

import { GameCard } from "./GameCard"

export default function Game() {
  const { difficulty, cards, watch, incrementTurns, flipLogic, isGameOver } =
    useGame()
  const { isRunning, start, pause } = watch
  const cardSize = difficulty === "hard" ? "small" : "tall"

  const { focusWithinProps } = useFocusWithin({
    onFocusWithin: () => !isRunning && !isGameOver && start(),
    onBlurWithin: pause,
  })

  useEffect(() => {
    if (isGameOver) pause()
  }, [isGameOver, pause])

  if (isGameOver) {
    return <p>Congratulations</p>
  }

  return (
    // NOTE: Adjust height to account for toolbar (3.5rem height + 0.75rem bottom spacing) on Toolbar v4
    <div className="flex h-[calc(100%-3rem-0.75rem)] w-full items-center justify-center overflow-hidden p-5">
      <div
        className={cn(
          "grid h-full w-full gap-2 rounded-xl border-2 border-dashed border-content2 p-2.5",
          difficulty === "easy" &&
            "max-h-[33rem] grid-cols-3 grid-rows-4 sm:max-h-[23rem] sm:max-w-[40rem] sm:grid-cols-4 sm:grid-rows-3",
          difficulty === "medium" &&
            "max-h-[30rem] grid-cols-4 grid-rows-4 sm:max-h-[25rem] sm:max-w-[35rem]",
          difficulty === "hard" &&
            "max-w-[45rem] grid-cols-4 grid-rows-6 sm:max-h-[23rem] sm:grid-cols-8 sm:grid-rows-3"
        )}
        {...focusWithinProps}
        tabIndex={0}
      >
        {cards.map(card => (
          <GameCard
            className="h-full w-full"
            key={card.id}
            size={cardSize}
            card={card}
            onPress={() => {
              if (card.isFlipped || card.isMatched) return

              incrementTurns()
              flipLogic(card)
            }}
          />
        ))}
      </div>
    </div>
  )
}
