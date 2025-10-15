import { useEffect, useRef, useState } from "react"
import {
  attachClosestEdge,
  extractClosestEdge,
  type Edge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { DropIndicator } from "@atlaskit/pragmatic-drag-and-drop-react-indicator/box"
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine"
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter"

import { Todo } from "@/lib/todos/types"
import { cn } from "@/lib/utils"

import GrabHandle from "./GrabHandle"

const TodoItem = ({ todo, index }: { todo: Todo; index: number }) => {
  const ref = useRef<HTMLLIElement>(null)
  const [closestEdge, setClosestEdge] = useState<Edge | null>(null)
  const [isDragging, setDragging] = useState(false)

  useEffect(() => {
    if (!ref?.current) return
    const element = ref.current

    const data = { todo, index }

    return combine(
      draggable({
        element,
        getInitialData: () => data,
        onDragStart: () => setDragging(true),
        onDrop: () => setDragging(false),
      }),
      dropTargetForElements({
        element,
        getData: ({ input }) => {
          return attachClosestEdge(data, {
            element,
            input,
            allowedEdges: ["top", "bottom"],
          })
        },
        getIsSticky: () => true,
        canDrop: ({ source }) => {
          const srcTodo = source.data.todo as Todo
          return srcTodo.id !== todo.id
        },
        onDrag: ({ source, self, location }) => {
          if (element === source.element) {
            setClosestEdge(null)
            return
          }
          const [currentDropTarget] = location.current.dropTargets
          if (!currentDropTarget) return

          const selfIndex = self.data.index
          const sourceIndex = source.data.index
          if (typeof sourceIndex !== "number") return

          const isItemBeforeSource = selfIndex === sourceIndex - 1
          const isItemAfterSource = selfIndex === sourceIndex + 1
          const closestEdge = extractClosestEdge(currentDropTarget.data)

          const isDropIndicatorHidden =
            (isItemBeforeSource && closestEdge === "bottom") ||
            (isItemAfterSource && closestEdge === "top")

          if (isDropIndicatorHidden) {
            setClosestEdge(null)
            return
          }

          const currentDropTargetData = currentDropTarget.data.todo as Todo

          if (currentDropTargetData.id === todo.id) {
            setClosestEdge(closestEdge)
          }
        },
        onDragLeave: () => {
          setClosestEdge(null)
        },
        onDrop: () => {
          setClosestEdge(null)
        },
      })
    )
  }, [todo, index, ref])

  return (
    <li
      style={{ opacity: isDragging ? 0.65 : 1 }}
      className="text-label-primary/80 bg-fill-tertiary border-separator-opaque relative flex h-11 items-center gap-1.5 border-b p-2 text-sm"
      ref={ref}
    >
      <GrabHandle />
      <Content text={todo.text} />
      {closestEdge && <DropIndicator edge={closestEdge} gap="1px" />}
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
const CustomDropIndicator = ({ edge }: { edge: Edge }) => {
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
