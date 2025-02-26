import { Dispatch, SetStateAction } from "react"
import { Button, cn } from "@heroui/react"

import { ToolbarState } from "@/lib/types"
import { formatTime } from "@/lib/utils"
import { Unsplash } from "@/components/icons/company-logos"
import {
  MaterialSymbolsArrowBack,
  MaterialSymbolsAutoTimerOutline,
  MaterialSymbolsShare,
  MaterialSymbolsShieldOutline,
  MaterialSymbolsShieldSpark,
  MaterialSymbolsShieldSparkOutline,
  MaterialSymbolsTouchAppOutline,
} from "@/components/icons/material-icons"
import { useGame } from "@/components/provider/game"

// TODO: Export from somewhere else
const ChipCn = cn(
  "flex w-fit select-none items-center gap-1 rounded-lg px-1.5 py-1 text-xs font-bold leading-none tracking-tight [&>svg]:text-lg"
)

export default function ToolbarGameInfo({
  setToolbarState,
}: {
  setToolbarState: Dispatch<SetStateAction<ToolbarState>>
}) {
  return (
    <div className="flex h-fit w-fit flex-col gap-3 px-3 py-4">
      <ToolbarNav setToolbarState={setToolbarState} />
      <Score />
      <ToolbarBottom />
    </div>
  )
}

const Score = () => {
  const { watch, turns, difficulty } = useGame()
  const { isRunning } = watch
  const minutes = formatTime(watch.minutes)
  const seconds = formatTime(watch.seconds)

  // TODO: write a function to calculate score
  const score = 2500 as const

  const DifficultyIcon = () =>
    difficulty === "easy" ? (
      <MaterialSymbolsShieldOutline />
    ) : difficulty === "medium" ? (
      <MaterialSymbolsShieldSparkOutline />
    ) : (
      <MaterialSymbolsShieldSpark />
    )

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
        <DifficultyIcon />
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
        {score}
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

const ToolbarNav = ({
  setToolbarState,
}: {
  setToolbarState: Dispatch<SetStateAction<ToolbarState>>
}) => {
  return (
    <nav className="inline-flex items-center justify-between gap-1 [&_button>svg]:text-lg [&_button>svg]:text-default-600">
      <div className="flex items-center gap-0.5">
        <Button
          size="md"
          variant="light"
          radius="full"
          isIconOnly
          onPress={() => setToolbarState("close")}
        >
          <MaterialSymbolsArrowBack />
        </Button>

        <label className="text-sm font-semibold text-primary-900/80">
          Score
        </label>
      </div>

      <div className="inline-flex gap-1">
        <Button size="sm" variant="flat" radius="full" isIconOnly>
          <MaterialSymbolsShare />
        </Button>
      </div>
    </nav>
  )
}

const ToolbarBottom = () => {
  return (
    <div className="flex gap-1">
      <div className={cn(ChipCn, "bg-default-300/20 text-default-500")}>
        <Unsplash />
        <label>Images</label>
      </div>
    </div>
  )
}
