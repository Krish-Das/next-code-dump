import { cn } from "@heroui/react"

import { useGame } from "@/components/provider/game"

import { GameCard } from "./GameCard"

export default function Game() {
  const { difficulty, cards, watch } = useGame()
  const { isRunning, start, pause } = watch
  const cardSize = difficulty === "hard" ? "small" : "tall"

  return (
    <div
      className={cn(
        "grid h-fit w-fit gap-2.5 p-2.5",
        "rounded-xl border-2 border-dashed border-content2",
        difficulty === "easy" && "grid-cols-3 grid-rows-4",
        difficulty === "medium" && "grid-cols-4 grid-rows-4",
        difficulty === "hard" && "grid-cols-6 grid-rows-5"
      )}
      onFocusCapture={() => !isRunning && start()}
      onBlurCapture={pause}
      tabIndex={0}
    >
      {cards.map(card => (
        <GameCard
          key={card.id}
          size={cardSize}
          shadow="sm"
          style={{
            backgroundImage: `url(${card.url})`,
          }}
          onClickCapture={() => !isRunning && start()}
        />
      ))}
    </div>
  )
}
