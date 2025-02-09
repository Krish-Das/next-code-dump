import Game, { GameDifficulty } from "@/components/game/Game"
import { Main } from "@/components/layout/mainwraper"
import Toolbar from "@/components/navigation/Toolbar"

export default async function Page(props: {
  searchParams?: Promise<{
    d: string
  }>
}) {
  // TODO: Standardize this type
  const _sizes = [undefined, "square", "tall", "small"] as const
  const _difficulties = ["easy", "medium", "hard"] as const

  const searchParams = await props.searchParams
  const difficulty = (searchParams?.d || "easy") as GameDifficulty // TODO: use ZOD to validate

  return (
    <Main className="grid h-dvh place-content-center">
      <Game difficulty={difficulty} />

      <Toolbar />
    </Main>
  )
}
