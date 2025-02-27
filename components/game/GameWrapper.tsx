"use client"

// TODO: Remove this client boundary if possible!
import Game from "@/components/game/Game"

import { Toolbar } from "./Toolbar"

export default function GameWrapper() {
  return (
    <main className="grid h-dvh place-content-center">
      <Game />
      <Toolbar />
    </main>
  )
}
