import { Button } from "react-aria-components"

import { formatTime } from "@/lib/utils"
import { MaterialSymbolsRefresh } from "@/components/icons/material-icons/MaterialSymbolsRefresh"
import { useGame } from "@/components/provider/game"

export default function GameStatus() {
  const { watch, restartGame, isGameDirty } = useGame()
  const minutes = formatTime(watch.minutes)
  const seconds = formatTime(watch.seconds)

  return (
    <section className="inline-flex items-center pl-0.5">
      <Button
        className="inline-grid h-10 w-10 cursor-default select-none place-content-center rounded-full text-content4-foreground text-content4-foreground/80 outline-none disabled:opacity-25 rac-hover:bg-content3/40 rac-focus-visible:ring rac-pressed:scale-[0.97] rac-pressed:bg-content4/50 [&_svg]:text-xl"
        onPress={restartGame}
        isDisabled={!isGameDirty}
      >
        <MaterialSymbolsRefresh />
      </Button>

      <time className="pointer-events-none -ml-0.5 max-w-[4.5ch] touch-none select-none truncate text-clip text-lg font-bold leading-none">
        {minutes}:{seconds}
      </time>
    </section>
  )
}
