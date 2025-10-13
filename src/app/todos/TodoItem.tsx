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

type DraggableState =
  | { type: "idle" }
  | { type: "preview"; container: HTMLElement }
  | { type: "dragging" }

const idleState: DraggableState = { type: "idle" }
const draggingState: DraggableState = { type: "dragging" }

const TodoItem = ({ todo, index }: { todo: Todo; index: number }) => {
  const { reorder } = useTodo()

  const ref = useRef<HTMLLIElement>(null)

  const [draggableState, setDraggableState] =
    useState<DraggableState>(idleState)
  const [closestEdge, setClosestEdge] = useState<Edge | null>(null)

  const [isDragging, setDragging] = useState(false)
  const [isAboutToDrop, setAboutToDrop] = useState(false)

  useEffect(() => {
    if (!ref?.current) return
    const element = ref.current

    const data = { todo, index }

    function onChange() {}

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
        canDrop: ({ source }) => element !== source.element, // disable dropping on itself
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
  }, [todo, index])

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
