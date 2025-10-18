import { useEffect, useRef } from "react"
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { getReorderDestinationIndex } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index"
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { api } from "#/convex/_generated/api"
import { Doc } from "#/convex/_generated/dataModel"
import { useMutation } from "convex/react"

import { Spacer } from "@/components/ui/Spacer"

import EmptyState from "./EmptyState"
import TaskItem, { ElementData } from "./TaskItem"
import TaskListHeader from "./TaskListHeader"

const TaskList = ({ tasks }: { tasks: Doc<"tasks">[] }) => {
  const ref = useRef<HTMLUListElement>(null)
  const reorder = useMutation(api.tasks.reorder)

  useEffect(() => {
    const element = ref?.current
    if (!element) return

    return monitorForElements({
      onDrop: ({ source, location }) => {
        const [dropTarget] = location.current.dropTargets
        if (!dropTarget) return

        const {
          task: { _id: moveId },
        } = source.data as ElementData
        if (typeof moveId !== "string") return
        const {
          task: { _id: targetId },
        } = dropTarget.data as ElementData
        if (typeof targetId !== "string") return

        const moveIndex = tasks.findIndex(task => task._id === moveId)
        const indexOfTarget = tasks.findIndex(task => task._id === targetId)
        const closestEdgeOfTarget = extractClosestEdge(dropTarget.data)

        const destIndex = getReorderDestinationIndex({
          startIndex: moveIndex,
          indexOfTarget,
          closestEdgeOfTarget,
          axis: "vertical",
        })

        // Early return if reorder didn't happen
        if (destIndex === moveIndex) return tasks

        // Temp list without moved item (tasks already sorted by order)
        const remainingTasks = tasks.filter(t => t._id !== moveId)

        let newOrder: number
        if (destIndex === 0) {
          newOrder = remainingTasks[0]?.order - 1 || 0
        } else if (destIndex === remainingTasks.length) {
          newOrder = remainingTasks[remainingTasks.length - 1]?.order + 1 || 1
        } else {
          const beforeOrder = remainingTasks[destIndex - 1].order
          const afterOrder = remainingTasks[destIndex].order
          newOrder = (beforeOrder + afterOrder) / 2
        }

        reorder({ taskId: moveId, newOrder })
      },
    })
  }, [tasks, ref, reorder])

  if (!tasks.length) return <EmptyState />

  return (
    <>
      <TaskListHeader />
      <Spacer className="h-6" />
      <ul className="flex flex-col" ref={ref}>
        {tasks.map((task, idx) => (
          <TaskItem task={task} index={idx} key={task._id} />
        ))}
      </ul>
    </>
  )
}

export default TaskList
