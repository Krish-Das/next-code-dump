"use client"

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react"
import { useRouter } from "next/navigation"
import { StopwatchResult, useStopwatch } from "react-timer-hook"

import { GameDifficulties, TGameCard } from "@/lib/types"

type TGameContext = {
  difficulty: GameDifficulties
  cards: TGameCard[]
  matchedCards: TGameCard[]
  flipLogic(card: TGameCard): void
  flipCard: (card: TGameCard, override?: boolean) => void
  watch: StopwatchResult
  isGameDirty: boolean
  turns: number
  incrementTurns: () => void
  resetTurns: () => void
  restartGame: () => void
  isGameOver: boolean
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
  const matchedCards = stateCards.filter(c => c.isMatched)
  const isGameOver = matchedCards.length === cards.length

  useEffect(() => setCards(cards), [cards])

  const flipCard = (card: TGameCard, override?: boolean) => {
    setCards(prev =>
      prev.map(c =>
        c.id === card.id ? { ...c, isFlipped: override ?? !c.isFlipped } : c
      )
    )
  }
  const matchCards = (firstCard: TGameCard, secondCard: TGameCard): boolean => {
    const firstCardIdx = firstCard.idx
    const secondCardIdx = secondCard.idx
    const matched = firstCard.url === secondCard.url

    setCards(prev => {
      const newCards = [...prev]

      if (matched) {
        newCards[firstCardIdx].isMatched = true
        newCards[secondCardIdx].isMatched = true
      } else {
        newCards[firstCardIdx].isFlipped = false // TODO: remove this setter
        newCards[secondCardIdx].isFlipped = false
      }

      return newCards
    })

    return matched
  }
  const flipLogic = (targetCard: TGameCard): void => {
    const { idx: targetIdx } = targetCard

    setCards(prevCards => {
      const newCards = [...prevCards]
      newCards[targetIdx].isFlipped = true

      const flippedCards = newCards.filter(c => c.isFlipped && !c.isMatched)
      if (flippedCards.length === 2)
        setTimeout(() => matchCards(flippedCards[0], flippedCards[1]), 300) // TODO: add spam protection

      return newCards
    })
  }

  const isGameDirty = watch.totalSeconds > 0 || turns > 0

  /*
   * --- RESTART GAME ---
   */
  const router = useRouter()
  const restartGame = (): void => {
    if (!isGameDirty) return

    router.refresh()
    resetTurns()
    watch.reset()
  }

  return (
    <GameContext.Provider
      value={{
        difficulty,
        cards: stateCards,
        matchedCards,
        flipLogic,
        flipCard,
        watch,
        isGameDirty,
        turns,
        incrementTurns,
        resetTurns,
        isGameOver,
        restartGame,
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
