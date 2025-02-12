import { notFound } from "next/navigation"

import { gameDifficultiesSchema, TImage } from "@/lib/types"
import gamifyImages from "@/lib/utils"
import Game from "@/components/game/Game"
import { Main } from "@/components/layout/mainwraper"
// import Toolbar from "@/components/toolbar/Toolbar"
import Toolbar from "@/components/toolbar/ToolbarV2"

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

  const count = difficulty === "easy" ? 6 : difficulty === "medium" ? 8 : 15

  // TODO: Do error-handling
  const res = await fetch(`http://localhost:3000/api/images?c=${count}`)
  if (!res.ok) {
    const errorData = await res.json()
    console.log(errorData)
  }
  const images: TImage[] = await res.json()
  const cards = gamifyImages(images)

  return (
    // TODO: put <Main/> here
    <div
      className="grid h-dvh place-content-center bg-cover bg-center"
      // TODO: Remove these later
      style={{
        // backgroundImage:
        //   "url('https://i.pinimg.com/1200x/d2/6b/ad/d26bad963059b9d813d1e96622da49d4.jpg')",
        // "url('https://i.pinimg.com/1200x/e0/03/bd/e003bdc08460849393e6b5648da67b4b.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* <Game difficulty={difficulty} cards={cards} /> */}

      <Toolbar difficulty={difficulty} />
    </div>
  )
}
