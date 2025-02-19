"use client"

// TODO: Remove this client boundary if possible!
import { useStopwatch } from "react-timer-hook"

import Game from "@/components/game/Game"
import Toolbar from "@/components/toolbar/ToolbarV2"

export default function GameWrapper() {
  const time = useStopwatch({
    autoStart: false,
  })

  return (
    <main className="grid h-dvh place-content-center">
      <Game time={time} />

      <Toolbar time={time} />
    </main>
  )
}
