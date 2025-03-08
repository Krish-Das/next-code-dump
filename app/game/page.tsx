import { notFound } from "next/navigation"

import { gameDifficultiesSchema, TImage } from "@/lib/types"
import gamifyImages from "@/lib/utils"
import GameWrapper from "@/components/game/GameWrapper"
import { GameProvider } from "@/components/provider/game"

export default async function Page(props: {
  searchParams?: Promise<{
    d: string
  }>
}) {
  const searchParams = await props.searchParams
  const parsedDifficulty = gameDifficultiesSchema.safeParse(
    searchParams?.d || "easy"
  )
  if (!parsedDifficulty.success) notFound()
  const difficulty = parsedDifficulty.data

  const count = difficulty === "easy" ? 6 : difficulty === "medium" ? 8 : 12

  // TODO: Do error-handling
  const res = await fetch(`http://localhost:3000/api/images?c=${count}`)
  if (!res.ok) {
    const errorData = await res.json()
    console.log(errorData)
  }
  const images: TImage[] = await res.json()
  const cards = gamifyImages(images)

  return (
    <GameProvider difficulty={difficulty} cards={cards}>
      <GameWrapper />
    </GameProvider>
  )
}
