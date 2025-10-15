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
import { Checkbox as RacCheckbox } from "react-aria-components"

import { Todo } from "@/lib/todos/types"
import { Spacer } from "@/components/ui/Spacer"

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
        onDragEnter: ({ source, self }) => {
          // Don't show indicator on the source element
          if (source.element === element) {
            setClosestEdge(null)
            return
          }

          const edge = extractClosestEdge(self.data)
          const sourceIndex = source.data.index

          if (typeof sourceIndex !== "number") {
            setClosestEdge(edge)
            return
          }

          // Hide indicator at the dragged item's natural position
          const isItemBeforeSource = index === sourceIndex - 1
          const isItemAfterSource = index === sourceIndex + 1

          const isDropIndicatorHidden =
            (isItemBeforeSource && edge === "bottom") ||
            (isItemAfterSource && edge === "top")

          if (isDropIndicatorHidden) {
            setClosestEdge(null)
            return
          }

          setClosestEdge(edge)
        },
        onDrag: ({ source, self }) => {
          // Don't show indicator on the source element
          if (source.element === element) {
            setClosestEdge(null)
            return
          }

          const edge = extractClosestEdge(self.data)
          const sourceIndex = source.data.index

          if (typeof sourceIndex !== "number") {
            setClosestEdge(edge)
            return
          }

          // Hide indicator at the dragged item's natural position
          const isItemBeforeSource = index === sourceIndex - 1
          const isItemAfterSource = index === sourceIndex + 1

          const isDropIndicatorHidden =
            (isItemBeforeSource && edge === "bottom") ||
            (isItemAfterSource && edge === "top")

          if (isDropIndicatorHidden) {
            setClosestEdge(null)
            return
          }

          setClosestEdge(edge)
        },
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
    <li
      style={{ opacity: isDragging ? 0.65 : 1 }}
      className="text-label-primary/80 bg-fill-tertiary relative flex h-11 items-center gap-1.5 rounded-lg p-2 text-sm"
      ref={ref}
    >
      <GrabHandle />
      <Checkbox defaultSelected={todo.completed} />
      <Spacer className="h-full w-px" />
      <Content text={todo.text} />
      {closestEdge && <DropIndicator edge={closestEdge} gap="4px" />}
    </li>
  )
}

const Checkbox = ({ defaultSelected }: { defaultSelected: boolean }) => {
  return (
    <RacCheckbox className="group/checkbox" defaultSelected={defaultSelected}>
      <div className="border-separator-non-opaque group-data-selected/checkbox:bg-ios-blue group-data-selected/checkbox:border-ios-blue inline-grid size-4 place-content-center rounded border">
        <span className="text-[0.65rem] text-white opacity-0 mix-blend-plus-lighter group-data-selected/checkbox:opacity-100">
          􀆅
        </span>
      </div>
      <span className="sr-only">Unsubscribe</span>
    </RacCheckbox>
  )
}
const Content = ({ text }: { text: string }) => {
  return (
    <div className="flex h-full flex-1 items-center truncate text-sm leading-none font-medium select-none">
      <span>{text}</span>
    </div>
  )
}

export default TodoItem
