"use client"

import { useStopwatch } from "react-timer-hook"

import { GameDifficulties, TGameCard } from "@/lib/types"
import Game from "@/components/game/Game"
// import Toolbar from "@/components/toolbar/Toolbar"
import Toolbar from "@/components/toolbar/ToolbarV2"

export default function GameWrapper({
  difficulty,
  cards,
}: {
  difficulty: GameDifficulties
  cards: TGameCard[]
}) {
  const time = useStopwatch({
    autoStart: false,
  })

  return (
    <main className="grid h-dvh place-content-center">
      <Game difficulty={difficulty} cards={cards} time={time} />

      <Toolbar difficulty={difficulty} time={time} />
    </main>
  )
}
