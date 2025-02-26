import { z } from "zod"

// --- SCHEMAS ---
export const gameDifficultiesSchema = z.enum(["easy", "medium", "hard"])
export const unsplashImagesSchema = z
  .object({
    id: z.string(),
    urls: z
      .object({
        small: z.string(),
      })
      .passthrough(),
  })
  .passthrough()

// --- TYPES ---
export type GameDifficulties = z.infer<typeof gameDifficultiesSchema>
export type UnsplashImages = z.infer<typeof unsplashImagesSchema>

export type TImage = { id: string; url: string }
export type TGameCard = {
  id: string
  idx: number
  url: string
  isFlipped: boolean
  isMatched: boolean
}

export type ToolbarState = "close" | "open:game" | "open:settings"
