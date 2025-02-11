import { z } from "zod"

// --- SCHEMAS ---
export const gameDifficultiesSchema = z.enum(["easy", "medium", "hard"])

// --- TYPES ---
export type GameDifficulties = z.infer<typeof gameDifficultiesSchema>