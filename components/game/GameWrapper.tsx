"use client"

// TODO: Remove this client boundary if possible!
import Game from "@/components/game/Game"
import Toolbar from "@/components/toolbar/ToolbarV2"

export default function GameWrapper() {
  return (
    <main className="grid h-dvh place-content-center">
      <Game />

      <Toolbar />
    </main>
  )
}
