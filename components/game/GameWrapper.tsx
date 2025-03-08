"use client"

// TODO: Remove this client boundary if possible!
import Game from "@/components/game/Game"

import { Toolbar } from "./Toolbar"

export default function GameWrapper() {
  return (
    <main className="h-dvh w-full">
      <Game />

      <Toolbar />
    </main>
  )
}
