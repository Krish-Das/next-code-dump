import Game from "@/components/game/Game"
import { Main } from "@/components/layout/mainwraper"

export default function Page() {
  const sizes = [undefined, "square", "tall", "small"] as const
  const difficulty = ["easy", "medium", "hard"] as const

  return (
    <Main className="grid h-dvh place-content-center">
      <Game difficulty="hard" />
    </Main>
  )
}
