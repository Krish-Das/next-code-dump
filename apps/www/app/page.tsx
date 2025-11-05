"use client"

import { api } from "@repo/backend/convex/_generated/api"
import { useQuery } from "convex/react"

export default function Page() {
  const tasks = useQuery(api.tasks.get)

  return (
    <main>
      <pre>
        <code lang="json">{JSON.stringify(tasks, null, 2)}</code>
      </pre>
    </main>
  )
}
