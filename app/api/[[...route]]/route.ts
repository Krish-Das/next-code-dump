import { searchResultsType } from "@/app/(root)/input"
import { Redis } from "@upstash/redis"
import { Hono } from "hono"
import { env } from "hono/adapter"
import { handle } from "hono/vercel"

export const runtime = "edge"

type EnvConfig = {
  UPSTASH_REDIS_REST_URL: string
  UPSTASH_REDIS_REST_TOKEN: string
}

const app = new Hono().basePath("/api")

app.get("/countries", async c => {
  try {
    // ------------------------------
    const start = performance.now()

    // GET ENVs and setup redis database
    const { UPSTASH_REDIS_REST_URL, UPSTASH_REDIS_REST_TOKEN } =
      env<EnvConfig>(c)

    const redis = new Redis({
      url: UPSTASH_REDIS_REST_URL,
      token: UPSTASH_REDIS_REST_TOKEN,
    })

    // Get the search querry
    const querry = c.req.query("q")?.toLowerCase()
    if (!querry)
      return c.json({ message: "Invalid search querry" }, { status: 400 })

    // Get the results
    const res = []
    const rank = await redis.zrank("terms", querry)

    if (rank !== null && rank !== undefined) {
      const _temp = await redis.zrange<string[]>("terms", rank, rank + 100) // arbitary 100

      for (const el of _temp) {
        // If doesn't start with querry, break
        if (!el.startsWith(querry)) break

        // push only the element that has a * at the end (but don't push the * itself)
        if (el.endsWith("*")) res.push(el.substring(0, el.length - 1))
      }
    }

    // ------------------------------
    const end = performance.now()

    // Return response
    return c.json<searchResultsType>({
      countries: res,
      time: Math.floor(end - start),
    })
  } catch (err) {
    console.error(err)
    return c.json(
      {
        countries: [],
        message: "Something went wrong",
      },
      { status: 500 }
    )
  }
})

export const GET = handle(app)
