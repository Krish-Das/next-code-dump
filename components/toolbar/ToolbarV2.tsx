import { Button, cn, Divider } from "@heroui/react"

import { formatTime } from "@/lib/utils"
import {
  MaterialSymbolsCognition2Outline,
  MaterialSymbolsRefresh,
  MaterialSymbolsSettingsOutline,
} from "@/components/icons/material-icons"
import { useGame } from "@/components/provider/game"

export default function Toolbar() {
  const { watch } = useGame()
  const { isRunning } = watch
  const minutes = formatTime(watch.minutes)
  const seconds = formatTime(watch.seconds)

  return (
    <nav className="fixed left-4 top-1/2 flex h-fit w-fit -translate-y-1/2 flex-col gap-3 overflow-hidden rounded-full bg-default-50/50 p-2 shadow shadow-black/5 backdrop-blur-md dark:bg-default-50/80 [&_button>svg]:text-lg">
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

      <Divider />

      <div className="toolbar__mod-group flex flex-col gap-1">
        <Button variant="flat" radius="full" size="lg" isIconOnly>
          <MaterialSymbolsCognition2Outline />
        </Button>

        <Button variant="flat" radius="full" size="lg" isIconOnly>
          <MaterialSymbolsSettingsOutline />
        </Button>
      </div>
    </nav>
  )
}
