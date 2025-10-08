"use client"

import { api } from "#/convex/_generated/api"
import { useQuery } from "convex/react"

import { cn } from "@/lib/utils"

const Tasks = () => {
  const tasks = useQuery(api.taks.get)
  if (!tasks) return <p>Loading tasks...</p>

  return (
    <div className="px-1">
      <ul className="flex flex-col gap-4">
        {tasks.map(task => (
          <li key={task._id} className="flex items-center gap-2">
            <Check isChecked={task.isCompleted} />
            <span>{task.text}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Check = ({ isChecked }: { isChecked: boolean }) => {
  return (
    <span
      className={cn(
        "inline-block size-4 rounded-full",
        isChecked ? "bg-ios-blue" : "bg-fill-secondary"
      )}
    />
  )
}

export default Tasks
