import { devTodos } from "@/lib/todos/repo.dev"

export async function GET(request: Request) {
  const todos = await devTodos.list()

  return new Response(JSON.stringify(todos), {
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

  const createNew = devTodos.create

  const newTodo = await createNew(text)

  return new Response(JSON.stringify(newTodo), {
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

  const updated = await devTodos.reorder(id, { beforeId, afterId })
  if (!updated)
    return new Response(JSON.stringify({ error: "todo not found" }), {
      status: 404,
    })
  return new Response(JSON.stringify(updated), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
