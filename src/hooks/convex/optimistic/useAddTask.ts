import { useCallback } from "react"
import { api } from "#/convex/_generated/api"
import { Doc, Id } from "#/convex/_generated/dataModel"
import { useMutation } from "convex/react"
import { v4 as uuidv4 } from "uuid"

export default function useAddTask() {
  const addTaskMutation = useMutation(api.tasks.add).withOptimisticUpdate(
    (localStore, args) => {
      const { text } = args
      const existingTasks = localStore.getQuery(api.tasks.get)
      if (existingTasks) {
        const newTask: Doc<"tasks"> = {
          _id: uuidv4() as Id<"tasks">,
          _creationTime: Date.now(),
          text,
          isCompleted: false,
        }
        localStore.setQuery(api.tasks.get, {}, [...existingTasks, newTask])
      }
    }
  )

  const add = useCallback(
    (text: string) => {
      return addTaskMutation({ text })
    },
    [addTaskMutation]
  )

  return { add, rawMutation: addTaskMutation }
}
