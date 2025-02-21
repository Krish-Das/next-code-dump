"use client"

import { createContext, ReactNode, useContext, useState } from "react"
import { StopwatchResult, useStopwatch } from "react-timer-hook"

import { GameDifficulties, TGameCard } from "@/lib/types"

type TGameContext = {
  difficulty: GameDifficulties
  cards: TGameCard[]
  flipCard: (cardId: TGameCard["id"], override?: boolean) => void
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

  /*
   * --- GAME LOGIC ---
   */
  const [_cards, setCards] = useState<TGameCard[]>(cards)
  const flipCard = (cardId: TGameCard["id"], override?: boolean) => {
    setCards(prev =>
      prev.map(c =>
        c.id === cardId ? { ...c, isFlipped: override ?? !c.isFlipped } : c
      )
    )
  }

  return (
    <GameContext.Provider
      value={{
        difficulty,
        cards: _cards,
        flipCard,
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
