"use client"

import { createContext, ReactNode, useContext, useState } from "react"
import { StopwatchResult, useStopwatch } from "react-timer-hook"

import { GameDifficulties, TGameCard } from "@/lib/types"

type TGameContext = {
  difficulty: GameDifficulties
  cards: TGameCard[]
  flippedCards: TGameCard[]
  flipCard: (card: TGameCard, override?: boolean) => void
  matchCards: (firstCard: TGameCard, secondCard: TGameCard) => boolean
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
  const [stateCards, setCards] = useState<TGameCard[]>(cards)
  const flippedCards = stateCards.filter(
    _card => _card.isFlipped === true && _card.isMatched === false
  )

  const flipCard = (card: TGameCard, override?: boolean) => {
    setCards(prev =>
      prev.map(c =>
        c.id === card.id ? { ...c, isFlipped: override ?? !c.isFlipped } : c
      )
    )
  }
  const matchCards = (firstCard: TGameCard, secondCard: TGameCard): boolean => {
    const firstCardId = firstCard.id
    const secondCardId = secondCard.id
    const matched = firstCard.url === secondCard.url

    if (matched) {
      setCards(prev =>
        prev.map(_card =>
          _card.id === firstCardId || _card.id === secondCardId
            ? { ..._card, isMatched: true }
            : _card
        )
      )
    }

    return matched
  }

  return (
    <GameContext.Provider
      value={{
        difficulty,
        cards: stateCards,
        flippedCards,
        flipCard,
        matchCards,
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
