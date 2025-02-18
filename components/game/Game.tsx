import { cn } from "@heroui/react"

import { type GameDifficulties, type TGameCard } from "@/lib/types"

import { GameCard } from "./GameCard"

export default function Game({
  difficulty,
  cards,
}: {
  difficulty: GameDifficulties
  cards: TGameCard[]
}) {
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
    >
      {cards.map(card => (
        <GameCard
          key={card.id}
          size={cardSize}
          shadow="sm"
          style={{
            backgroundImage: `url(${card.url})`,
          }}
        />
      ))}
    </div>
  )
}
