// import { ragChat } from "@/lib/ragchat"
import { reconstructURL } from "@/lib/utils"

type Pageparams = {
  url: string[]
}

export default async function Page({ params }: { params: unknown }) {
  const { url } = await (params as Promise<Pageparams>)

  const reconURL = reconstructURL(url)
  console.log(reconURL)

  // await ragChat.context.add({
  //   type: "html",
  //   source: reconURL,
  //   config: { chunkOverlap: 50, chunkSize: 200 },
  // })

  return <div>{reconURL}</div>
}
