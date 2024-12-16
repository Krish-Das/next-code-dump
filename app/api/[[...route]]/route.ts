import { searchResultsType } from "@/app/(root)/input"
import { Hono } from "hono"
import { handle } from "hono/vercel"

export const runtime = "edge"

const app = new Hono().basePath("/api")

app.get("/countries", c => {
  return c.json<searchResultsType>({
    countries: ["From", "Hono"],
    time: 250,
  })
})

export const GET = handle(app)
export default app as never
