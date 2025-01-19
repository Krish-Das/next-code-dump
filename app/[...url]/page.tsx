import { ragChat } from "@/lib/ragchat"
import { redis } from "@/lib/reddis"
import { reconstructURL } from "@/lib/utils"

type Pageparams = {
  url: string[]
}

export default async function Page({ params }: { params: unknown }) {
  const { url } = await (params as Promise<Pageparams>)

  const reconURL = reconstructURL(url)
  const isAlreadyIndexed = await redis.sismember("indexed-urls", reconURL)

  console.log("URL:", reconURL)
  console.log("Indexed:", isAlreadyIndexed)

  if (!isAlreadyIndexed) {
    console.log("Adding new entry")
    await ragChat.context.add({
      type: "html",
      source: reconURL,
      config: { chunkOverlap: 50, chunkSize: 200 },
    })

    redis.sadd("indexed-urls", reconURL)
  }

  return <div>{reconURL}</div>
}
