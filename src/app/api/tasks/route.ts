import { devTasks } from "@/lib/tasks/repo.dev"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(request: Request) {
  const tasks = await devTasks.list()

  return new Response(JSON.stringify(tasks), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}

export async function POST(request: Request) {
  const body = await request.json()

  const { text } = body

  if (!text || typeof text !== "string") {
    return new Response(JSON.stringify({ error: "text is required" }), {
      status: 400,
    })
  }

  const createNew = devTasks.create

  const newTask = await createNew(text)

  return new Response(JSON.stringify(newTask), {
    status: 201,
    headers: { "Content-Type": "application/json" },
  })
}

export async function PATCH(req: Request) {
  const body = await req.json().catch(() => null)
  if (!body || typeof body !== "object") {
    return new Response(JSON.stringify({ error: "invalid body" }), {
      status: 400,
    })
  }

  const {
    id,
    beforeId = null,
    afterId = null,
  } = body as { id?: string; beforeId?: string | null; afterId?: string | null }
  if (!id || typeof id !== "string")
    return new Response(JSON.stringify({ error: "id required" }), {
      status: 400,
    })

  const updated = await devTasks.reorder(id, { beforeId, afterId })
  if (!updated)
    return new Response(JSON.stringify({ error: "task not found" }), {
      status: 404,
    })
  return new Response(JSON.stringify(updated), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
