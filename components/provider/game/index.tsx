"use client"

import { createContext, ReactNode, useContext } from "react"
import { StopwatchResult, useStopwatch } from "react-timer-hook"

import { GameDifficulties, TGameCard } from "@/lib/types"

type TGameContext = {
  difficulty: GameDifficulties
  cards: TGameCard[]
  watch: StopwatchResult
}

const GameContext = createContext<TGameContext | null>(null)
function GameProvider({
  children,
  difficulty,
  cards,
}: {
  children: ReactNode
  difficulty: GameDifficulties
  cards: TGameCard[]
}) {
  const watch = useStopwatch({
    autoStart: false,
  })

  return (
    <GameContext.Provider value={{ difficulty, cards, watch }}>
      {children}
    </GameContext.Provider>
  )
}

const useGame = () => {
  const context = useContext(GameContext)
  if (!context) {
    throw new Error("useGame must be used within a GameContext.Provider")
  }
  return context
}

export { GameProvider, useGame, type TGameContext as GameContext }
