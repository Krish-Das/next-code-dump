import { api } from "#/convex/_generated/api"
import { Doc } from "#/convex/_generated/dataModel"
import { useMutation } from "convex/react"
import { Button } from "react-aria-components"

export default function DeleteTask({
  taskId,
}: {
  taskId: Doc<"tasks">["_id"]
}) {
  const remove = useMutation(api.tasks.remove).withOptimisticUpdate(
    (localStore, { id }) => {
      const existing = localStore.getQuery(api.tasks.get)
      if (!existing) return
      const remaining = existing.filter(t => t._id !== id)
      localStore.setQuery(api.tasks.get, {}, [...remaining])
    }
  )

  return (
    <Button
      className="bg-fill-quaternary text-label-tertiary border-separator inline-grid size-4 place-content-center rounded text-xs"
      onPress={() => remove({ id: taskId })}
    >
      x
    </Button>
  )
}
