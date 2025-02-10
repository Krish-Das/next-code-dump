import { type GameDifficulty } from "@/lib/types"
import Game from "@/components/game/Game"
import { Main } from "@/components/layout/mainwraper"
import Toolbar from "@/components/toolbar/Toolbar"

export default async function Page(props: {
  searchParams?: Promise<{
    d: GameDifficulty
  }>
}) {
  // TODO: Standardize this type
  const _sizes = [undefined, "square", "tall", "small"] as const

  const searchParams = await props.searchParams
  const difficulty = searchParams?.d || "easy" // TODO: use ZOD to validate

  return (
    <Main className="grid h-dvh place-content-center">
      <Game difficulty={difficulty} />

      <Toolbar difficulty={difficulty} />
    </Main>
  )
}
