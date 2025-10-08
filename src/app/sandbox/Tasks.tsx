"use client"

import { api } from "#/convex/_generated/api"
import { useMutation, useQuery } from "convex/react"
import { Button } from "react-aria-components"

import { cn } from "@/lib/utils"

const Tasks = () => {
  const tasks = useQuery(api.taks.get)
  const removeTask = useMutation(api.taks.remove)
  const toggleComplete = useMutation(api.taks.toggleComplete)
  if (!tasks) return <p>Loading tasks...</p>

  return (
    <div className="px-1">
      <ul className="flex flex-col gap-4">
        {tasks.map(task => (
          <li key={task._id} className="flex items-center gap-2">
            <Check
              isChecked={task.isCompleted}
              onCheckChange={() => {
                toggleComplete({ id: task._id })
              }}
            />
            <span className="flex-1">{task.text}</span>
            <Button
              className="text-label-secondary data-pressed:bg-fill-primary inline-grid size-5 place-content-center rounded-full leading-none"
              onPress={() => {
                removeTask({ id: task._id })
              }}
            >
              ⛌
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const Check = ({
  isChecked,
  onCheckChange,
}: {
  isChecked: boolean
  onCheckChange?: () => void
}) => {
  return (
    <Button
      className={cn(
        "inline-block size-4 rounded-full",
        isChecked ? "bg-ios-blue" : "bg-fill-secondary"
      )}
      onPress={onCheckChange}
    />
  )
}

export default Tasks
