import { cn } from "@heroui/react"

import { GameCard } from "./GameCard"

export type GameDifficulty = "easy" | "medium" | "hard"

export default function Game({
  difficulty = "easy",
}: {
  difficulty?: GameDifficulty
}) {
  return (
    <div
      className={cn(
        "grid h-fit w-fit gap-2.5 p-2.5",
        difficulty === "easy" && "grid-cols-3 grid-rows-4",
        difficulty === "medium" && "grid-cols-4 grid-rows-4",
        difficulty === "hard" && "grid-cols-6 grid-rows-5"
      )}
    >
      {difficulty === "easy" ? (
        <>
          {Array.from({ length: 12 }, (_, idx) => (
            <GameCard key={idx} size="tall" shadow="sm" />
          ))}
        </>
      ) : difficulty === "medium" ? (
        <>
          {Array.from({ length: 16 }, (_, idx) => (
            <GameCard key={idx} size="tall" shadow="sm" />
          ))}
        </>
      ) : (
        <>
          {Array.from({ length: 30 }, (_, idx) => (
            <GameCard key={idx} size="small" shadow="sm" />
          ))}
        </>
      )}
    </div>
  )
}
