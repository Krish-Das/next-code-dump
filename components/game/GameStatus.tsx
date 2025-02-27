import { Button, cn } from "@heroui/react"

import { formatTime } from "@/lib/utils"
import { MaterialSymbolsRefresh } from "@/components/icons/material-icons/MaterialSymbolsRefresh"
import { useGame } from "@/components/provider/game"

export default function GameStatus() {
  const { watch } = useGame()
  const { isRunning } = watch
  const minutes = formatTime(watch.minutes)
  const seconds = formatTime(watch.seconds)

  return (
    <div className="toolbar__control-group flex h-fit w-fit flex-col items-center gap-2">
      <Button
        variant="flat"
        color={isRunning ? "primary" : "warning"}
        radius="full"
        size="lg"
        isIconOnly
      >
        <MaterialSymbolsRefresh />
      </Button>

      <label
        className={cn(
          "text-center text-sm font-bold",
          !isRunning && "text-warning-600"
        )}
      >
        {minutes}:{seconds}
      </label>
    </div>
  )
}
