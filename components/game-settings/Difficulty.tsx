import Link from "next/link"
import { cn } from "@heroui/react"

import { difficulties } from "@/lib/constants"
import { GameDifficulties } from "@/lib/types"
import { buttonStyles } from "@/components/ui/custom-button"
import { DifficultyIcon } from "@/components/icons/game"
import { useGame } from "@/components/provider/game"

import SettingsTitle from "./SettingsTitle"

// TODO: Deal with these classNames
export const activeCn =
  "bg-primary-500 text-white/90 dark:bg-primary-400 dark:text-primary-900"
export const inactiveCn = "bg-default-300/10 text-content4-foreground/90"

export default function DifficultySettings() {
  return (
    <section className="flex flex-col gap-1.5">
      <SettingsTitle>Difficulty</SettingsTitle>

      <div className="flex gap-1.5">
        {difficulties.map(difficulty => (
          <DifficultyButton key={difficulty} difficulty={difficulty} />
        ))}
      </div>
    </section>
  )
}

const DifficultyButton = ({ difficulty }: { difficulty: GameDifficulties }) => {
  const { difficulty: gameDifficulty } = useGame()

  return (
    <Link
      href={{ pathname: "/game", query: { d: difficulty } }}
      className={cn(
        buttonStyles,
        "capitalize",
        gameDifficulty === difficulty ? activeCn : inactiveCn
      )}
    >
      <DifficultyIcon difficulty={difficulty} />
      {difficulty}
    </Link>
  )
}
