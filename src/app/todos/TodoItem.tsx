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
  const [isDragging, setDragging] = useState(false)
  const [isAboutToDrop, setAboutToDrop] = useState(false)
  const [closestEdge, setClosestEdge] = useState<Edge | null>(null)
  const { todos, reorder } = useTodo()

  useEffect(() => {
    if (!ref?.current) return
    const element = ref.current

    return combine(
      draggable({
        element,
        getInitialData: () => todo,
        onDragStart: () => setDragging(true),
        onDrop: () => setDragging(false),
      }),
      dropTargetForElements({
        element,
        canDrop: ({ source }) => element !== source.element, // disable dropping on itself
        getData: ({ input }) => {
          const data = { todo }
          return attachClosestEdge(data, {
            element,
            input,
            allowedEdges: ["top", "bottom"],
          })
        },
        onDragEnter: ({ self }) => {
          setAboutToDrop(true)
          const edge = extractClosestEdge(self.data)
          setClosestEdge(edge)
        },
        onDrag: ({ self }) => {
          const edge = extractClosestEdge(self.data)
          setClosestEdge(edge)
        },
        onDragLeave: () => {
          setClosestEdge(null)
          setAboutToDrop(false)
        },
        onDrop: ({ self, source }) => {
          const edge = extractClosestEdge(self.data)
          const sourceTodo = source.data as Todo
          const targetTodo = self.data.todo as Todo

          const targetIndex = todos.findIndex(t => t.id === targetTodo.id)

          let beforeId = null
          let afterId = null

          if (edge === "top") {
            afterId = targetTodo.id
            beforeId = targetIndex > 0 ? todos[targetIndex - 1].id : null
          } else {
            // Inserting after target
            beforeId = targetTodo.id
            afterId =
              targetIndex < todos.length - 1 ? todos[targetIndex + 1].id : null
          }

          reorder(sourceTodo.id, { beforeId, afterId })

          setAboutToDrop(false)
        },
      })
    )
  }, [ref, todo, reorder, todos])

  return (
    <>
      <li
        className={cn(
          "text-label-primary/80 bg-fill-tertiary border-separator-opaque relative flex h-11 items-center gap-1.5 border-b p-2 text-sm",
          isDragging && "opacity-65"
          // isAboutToDrop && "bg-ios-green/20"
        )}
        ref={ref}
      >
        <GrabHandle />
        <Content text={todo.text} />
        {closestEdge && isAboutToDrop && <DropIndicator edge={closestEdge} />}
      </li>
    </>
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
