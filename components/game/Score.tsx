import { calculateScore } from "@/lib/game"
import { cn, formatTime } from "@/lib/utils"
import DifficultyIcon from "@/components/icons/game/DifficultyIcon"
import {
  MaterialSymbolsAutoTimerOutline,
  MaterialSymbolsTouchAppOutline,
} from "@/components/icons/material-icons"
import { useGame } from "@/components/provider/game"

// TODO: Export from somewhere else
const ChipCn = cn(
  "flex w-fit select-none items-center gap-1 rounded-lg px-1.5 py-1 text-xs font-bold leading-none tracking-tight [&>svg]:text-lg"
)

export default function Score() {
  const { watch, turns, difficulty } = useGame()
  const minutes = formatTime(watch.minutes)
  const seconds = formatTime(watch.seconds)

  const scoreResult = calculateScore(watch.totalSeconds, turns, difficulty)
  const gameScore = scoreResult.success ? scoreResult.score : "Nill"

  return (
    <div className="flex w-64 flex-col items-center gap-2 rounded-2xl bg-default-100 py-10">
      <div
        className={cn(
          ChipCn,
          "capitalize",
          difficulty === "easy"
            ? "text-primary-500"
            : difficulty === "medium"
              ? "text-warning-500"
              : "text-danger-500"
        )}
      >
        <DifficultyIcon difficulty={difficulty} />
        <label>{difficulty}</label>
      </div>
      <p
        className={cn(
          "mb-2 text-5xl font-extrabold tracking-tight",
          difficulty === "easy"
            ? "text-primary-900"
            : difficulty === "medium"
              ? "text-warning-900"
              : "text-danger-900"
        )}
      >
        {gameScore}
      </p>
      <div className="mx-auto flex gap-1 text-default-800/70">
        <div className={ChipCn}>
          <MaterialSymbolsAutoTimerOutline />
          <label>
            {minutes}:{seconds}
          </label>
        </div>

        <div className={ChipCn}>
          <MaterialSymbolsTouchAppOutline />
          <label>{turns} Turns</label>
        </div>
      </div>
    </div>
  )
}
