import { notFound } from "next/navigation"

import { gameDifficultiesSchema } from "@/lib/types"
import Game from "@/components/game/Game"
import { Main } from "@/components/layout/mainwraper"
import Toolbar from "@/components/toolbar/Toolbar"

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

  return (
    <Main className="grid h-dvh place-content-center">
      <Game difficulty={difficulty} />

      <Toolbar difficulty={difficulty} />
    </Main>
  )
}