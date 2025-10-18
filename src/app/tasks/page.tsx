"use client"

import { api } from "#/convex/_generated/api"
import { useQuery } from "convex/react"

import { Spacer } from "@/components/ui/Spacer"

import { TaskProvider } from "../providers/task"
import AddTask from "./AddTask"
import TaskList from "./TaskList"

const Page = () => {
  const tasks = useQuery(api.tasks.get)

  // TODO: render a spinner
  if (!tasks) return <p>Loading...</p>

  return (
    <main className="mx-auto max-w-xl p-5 px-6">
      {/* TODO: Delete this provider*/}
      <TaskProvider>
        <TaskList tasks={tasks} />
        <Spacer />
        <AddTask />
      </TaskProvider>
    </main>
  )
}

export default Page
