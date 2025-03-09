import { GameContext } from "@/components/provider/game"

type CalculationResult =
  | { success: true; score: number }
  | { success: false; error: string }

export const DIFFICULTY_VALUES = {
  easy: {
    pairs: 6,
    multiplier: 1,
    baseScale: 100_000, // 6 * 1000 * 100 → 600,000
    turnWeight: 2,
  },
  medium: {
    pairs: 8,
    multiplier: 1.5,
    baseScale: 800_000, // 8 * 1000 * 100 → 800,000
    turnWeight: 2.1,
  },
  hard: {
    pairs: 12,
    multiplier: 2,
    baseScale: 1_200_000, // 12 * 1000 * 100 → 1,200,000
    turnWeight: 2.2,
  },
} as const

export const calculateScore = (
  timeInSeconds: GameContext["watch"]["totalSeconds"],
  turns: GameContext["turns"],
  difficulty: GameContext["difficulty"]
): CalculationResult => {
  // Validate inputs
  if (timeInSeconds <= 0) return { success: false, error: "Illegal time" }

  if (turns <= 0) return { success: false, error: "Illegal turn count" }

  const { baseScale, multiplier, turnWeight } = DIFFICULTY_VALUES[difficulty]

  // Calculate penalty-adjusted score
  const timeTurnPenalty = timeInSeconds + turnWeight * turns
  const rawScore = (baseScale / timeTurnPenalty) * multiplier

  return {
    success: true,
    score: Math.round(rawScore),
  }
}
