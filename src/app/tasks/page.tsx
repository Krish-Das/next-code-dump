"use client"

import { api } from "#/convex/_generated/api"
import { useQuery } from "convex/react"

import { Spacer } from "@/components/ui/Spacer"

import AddTask from "./AddTask"
import TaskList from "./TaskList"

const Page = () => {
  const tasks = useQuery(api.tasks.get)

  // TODO: render a spinner
  if (!tasks) return <p>Loading...</p>

  return (
    <main className="mx-auto max-w-xl p-5 px-6">
      <TaskList tasks={tasks} />
      <Spacer />
      <AddTask />
    </main>
  )
}

export default Page
