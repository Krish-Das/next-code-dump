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
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter"

import { Todo } from "@/lib/todos/types"
import { cn } from "@/lib/utils"

import { useTodo } from "../providers/todo"
import GrabHandle from "./GrabHandle"

const TodoItem = ({ todo, index }: { todo: Todo; index: number }) => {
  const ref = useRef<HTMLLIElement>(null)
  const [closestEdge, setClosestEdge] = useState<Edge | null>(null)
  const [isDragging, setDragging] = useState(false)
  const [isAboutToDrop, setAboutToDrop] = useState(false)

  const { reorder } = useTodo()

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
          // disable dropping on itself
          // element !== source.element

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
      className={cn(
        "text-label-primary/80 bg-fill-tertiary border-separator-opaque relative flex h-11 items-center gap-1.5 border-b p-2 text-sm",
        isDragging && "opacity-65",
        isAboutToDrop && "bg-ios-green/20"
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
