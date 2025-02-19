"use client"

import { createContext, ReactNode, useContext, useState } from "react"
import { StopwatchResult, useStopwatch } from "react-timer-hook"

import { GameDifficulties, TGameCard } from "@/lib/types"

type TGameContext = {
  difficulty: GameDifficulties
  cards: TGameCard[]
  watch: StopwatchResult
  turns: number
  incrementTurns: () => void
  resetTurns: () => void
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
  /*
   * --- WATCH ---
   */
  const watch = useStopwatch({
    autoStart: false,
  })

  /*
   * --- TURNS ---
   */
  const [turns, setTurns] = useState(0)
  const incrementTurns = () => setTurns(v => v + 1)
  const resetTurns = () => setTurns(0)

  return (
    <GameContext.Provider
      value={{
        difficulty,
        cards,
        watch,
        turns,
        incrementTurns,
        resetTurns,
      }}
    >
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
