"use client"

import { Spacer } from "@/components/ui/Spacer"

import { TaskProvider } from "../providers/task"
import AddTask from "./AddTask"
import TaskList from "./TaskList"

const Page = () => {
  return (
    <main className="mx-auto max-w-xl p-5 px-6">
      <TaskProvider>
        <TaskList />
        <Spacer />
        <AddTask />
      </TaskProvider>
    </main>
  )
}

export default Page
