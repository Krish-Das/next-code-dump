import { Dispatch, SetStateAction } from "react"
import { Button, cn, Divider } from "@heroui/react"

import { ToolbarState } from "@/lib/types"
import { formatTime } from "@/lib/utils"
import {
  MaterialSymbolsRefresh,
  MaterialSymbolsSettingsOutline,
  MaterialSymbolsSportsEsportsOutline,
} from "@/components/icons/material-icons"
import { useGame } from "@/components/provider/game"

export default function ToolbarClosed({
  setToolbarState,
}: {
  setToolbarState: Dispatch<SetStateAction<ToolbarState>>
}) {
  const { watch } = useGame()
  const { isRunning } = watch
  const minutes = formatTime(watch.minutes)
  const seconds = formatTime(watch.seconds)

  return (
    <div className="flex h-fit w-fit flex-col gap-3 p-2">
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
        <Button
          variant="flat"
          radius="full"
          size="lg"
          isIconOnly
          onPress={() => setToolbarState("open:game")}
        >
          <MaterialSymbolsSportsEsportsOutline />
        </Button>

        <Button variant="flat" radius="full" size="lg" isIconOnly>
          <MaterialSymbolsSettingsOutline />
        </Button>
      </div>
    </div>
  )
}
