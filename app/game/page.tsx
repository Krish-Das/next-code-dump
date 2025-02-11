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

  // TODO: Do error-handling
  const images = await fetch("http://localhost:3000/api/images?c=3")
    .then(response => response.json())
    .catch(error => console.error("Error:", error))

  return (
    <Main className="grid h-dvh place-content-center">
      {/*<Game difficulty={difficulty} />*/}

      <div className="flex h-screen w-screen items-center justify-center gap-3">
        {images.map(image => {
          return (
            <div
              className="size-32 overflow-hidden rounded-lg bg-red-300 bg-cover bg-center"
              key={image.id}
              style={{
                backgroundImage: `url(${image.urls.small})`,
              }}
            />
          )
        })}
      </div>

      <Toolbar difficulty={difficulty} />
    </Main>
  )
}

