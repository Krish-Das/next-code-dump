import { useEffect, useRef, useState } from "react"
import {
  attachClosestEdge,
  extractClosestEdge,
  type Edge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine"
import {
  draggable,
  dropTargetForElements,
  ElementDropTargetEventBasePayload,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter"

import { Todo } from "@/lib/todos/types"
import { cn } from "@/lib/utils"

import { useTodo } from "../providers/todo"
import GrabHandle from "./GrabHandle"

type DraggableState =
  | { type: "idle" }
  | { type: "preview"; container: HTMLElement }
  | { type: "dragging" }

const idleState: DraggableState = { type: "idle" }
const draggingState: DraggableState = { type: "dragging" }

const TodoItem = ({ todo, index }: { todo: Todo; index: number }) => {
  const { todos } = useTodo()

  const ref = useRef<HTMLLIElement>(null)

  const [draggableState, setDraggableState] =
    useState<DraggableState>(idleState)
  const [closestEdge, setClosestEdge] = useState<Edge | null>(null)

  useEffect(() => {
    if (!ref?.current) return
    const element = ref.current

    const data = { todo, index }

    function onChange({ source, self }: ElementDropTargetEventBasePayload) {
      const isSource = source.element === element

      // Don't show indicator on the item being dragged
      if (isSource) {
        setClosestEdge(null)
        return
      }

      // Extract the closest edge
      const closestEdge = extractClosestEdge(self.data)

      const sourceIndex = source.data.index
      if (typeof sourceIndex !== "number") {
        throw new Error("Item index must be a number!")
      }

      // Determine if this is the last item in the list
      // Assuming you have access to the list length, e.g., via a context or prop
      // Replace `listLength` with the actual length of your todo list
      const isLastItem = index === todos.length

      const isDraggingDown = sourceIndex < index
      const isDraggingUp = sourceIndex > index

      const isItemBeforeSource = index === sourceIndex - 1
      const isItemAfterSource = index === sourceIndex + 1

      // Hide indicator when the drop would result in no movement
      const isDropIndicatorHidden =
        (isItemBeforeSource && closestEdge === "bottom") ||
        (isItemAfterSource && closestEdge === "top") ||
        (isDraggingDown && closestEdge === "bottom" && !isLastItem) ||
        (isDraggingUp && closestEdge === "bottom")

      setClosestEdge(isDropIndicatorHidden ? null : closestEdge)
    }

    return combine(
      draggable({
        element,
        getInitialData: () => data,
        onDragStart: () => {
          setDraggableState(draggingState)
        },
        onDrop: () => {
          setDraggableState(idleState)
        },
      }),
      dropTargetForElements({
        element,
        getIsSticky: () => true,
        canDrop: ({ source }) => {
          // Can't drop on itself
          return element !== source.element
        },
        getData: ({ input }) => {
          return attachClosestEdge(data, {
            element,
            input,
            allowedEdges: ["top", "bottom"],
          })
        },
        onDragEnter: onChange,
        onDrag: onChange,
        onDragLeave: () => {
          setClosestEdge(null)
        },
        onDrop: () => {
          setClosestEdge(null)
        },
      })
    )
  }, [todo, index, todos])

  return (
    <li
      style={{
        opacity: draggableState.type === "dragging" ? 0.65 : 1,
      }}
      className={cn(
        "text-label-primary/80 bg-fill-tertiary border-separator-opaque relative flex h-11 items-center gap-1.5 border-b p-2 text-sm"
      )}
      ref={ref}
    >
      <GrabHandle />
      <Content text={todo.text} />
      {closestEdge && <DropIndicator edge={closestEdge} />}
    </li>
  )
}

const Content = ({ text }: { text: string }) => {
  return (
    <div className="flex-1 truncate select-none">
      <span>{text}</span>
    </div>
  )
}
const DropIndicator = ({ edge }: { edge: Edge }) => {
  const isTop = edge === "top"
  return (
    <div
      className={cn(
        "bg-ios-blue absolute inset-x-0 h-0.5",
        isTop ? "top-0" : "bottom-0"
      )}
    />
  )
}
export default TodoItem
