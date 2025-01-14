type Pageparams = {
  url: string | string[] | undefined
}

export default async function Page({ params }: { params: unknown }) {
  const { url } = await (params as Promise<Pageparams>)

  return <div>{url}</div>
}
