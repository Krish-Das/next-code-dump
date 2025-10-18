import { SVGProps, useEffect, useRef, useState } from "react"
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
import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview"
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview"
import { useAnimate } from "motion/react-mini"
import { Checkbox as RacCheckbox } from "react-aria-components"
import { createPortal } from "react-dom"

import { Todo } from "@/lib/todos/types"
import { Spacer } from "@/components/ui/Spacer"

import GrabHandle from "./GrabHandle"

export type ElementData = {
  todo: Todo
  index: number
}

const TodoItem = ({ todo, index }: { todo: Todo; index: number }) => {
  const ref = useRef<HTMLLIElement>(null)
  const [scope, animate] = useAnimate<HTMLDivElement>()
  const [closestEdge, setClosestEdge] = useState<Edge | null>(null)
  const [isDragging, setDragging] = useState(false)
  const [previewContainer, setPreviewContainer] = useState<HTMLElement | null>(
    null
  )

  useEffect(() => {
    if (!ref?.current) return
    const element = ref.current

    const data: ElementData = { todo, index }

    return combine(
      draggable({
        element,
        getInitialData: () => data,
        onGenerateDragPreview: ({ nativeSetDragImage }) => {
          setCustomNativeDragPreview({
            nativeSetDragImage,
            getOffset: pointerOutsideOfPreview({
              x: "16px",
              y: "8px",
            }),
            render({ container }) {
              setPreviewContainer(container)
            },
          })
        },
        onDragStart: () => setDragging(true),
        onDrop: () => {
          setDragging(false)
          animate(
            scope.current,
            {
              backgroundColor: ["var(--fill-secondary)", "var(--fill-opaque)"],
            },
            { duration: 0.8, ease: [0.42, 0.0, 0.58, 1.0] }
          )
        },
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
        onDragLeave: () => setClosestEdge(null),
        onDrop: () => setClosestEdge(null),
      })
    )
  }, [todo, index, scope, animate])

  return (
    <>
      <li
        style={{ opacity: isDragging ? 0.45 : 1 }}
        className="text-label-primary/80 relative flex h-10 items-center"
        ref={ref}
      >
        <GrabHandle />
        <div
          className="flex h-full w-full items-center gap-1.5 rounded-md p-2"
          ref={scope}
        >
          <Checkbox defaultSelected={todo.completed} />
          <Spacer className="h-full w-px" />
          <Content text={todo.text} />

          <Spacer className="h-full flex-1" />
          <div className="[&_pre]:bg-fill-tertiary [&_pre]:text-label-secondary pointer-events-none flex items-center gap-2 text-sm [&_pre]:rounded [&_pre]:px-1">
            <pre>o({todo.order})</pre>
            <pre>i({index})</pre>
          </div>
        </div>
        {closestEdge && <DropIndicator edge={closestEdge} />}
      </li>
      {previewContainer &&
        createPortal(<DragPreview todo={todo} />, previewContainer)}
    </>
  )
}

const Checkbox = ({ defaultSelected }: { defaultSelected: boolean }) => {
  return (
    <RacCheckbox
      className="group/checkbox relative inline-grid place-content-center select-none"
      defaultSelected={defaultSelected}
    >
      <div className="border-label-tertiary group-data-selected/checkbox:bg-ios-blue group-data-selected/checkbox:border-ios-blue inline-grid size-4 place-content-center rounded border">
        <CheckIcon
          fontSize={16}
          className="text-white opacity-0 mix-blend-plus-lighter group-data-selected/checkbox:opacity-100"
        />
      </div>
      <span className="sr-only">Unsubscribe</span>
      <span className="absolute -inset-2" />
    </RacCheckbox>
  )
}
const Content = ({ text }: { text: string }) => {
  return (
    <div className="flex h-full flex-1 items-center truncate text-[0.9rem] leading-none font-medium select-none">
      <span>{text}</span>
    </div>
  )
}
function DragPreview({ todo }: { todo: Todo }) {
  return (
    <div
      className="bg-gray-6 border-separator-opaque/40 w-48 truncate rounded-lg border p-2 px-3 shadow-lg"
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        color: todo.completed ? "var(--color-label-tertiary)" : "current",
      }}
    >
      {todo.text}
    </div>
  )
}

export default TodoItem

export function CheckIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
    >
      {/* Icon from Radix Icons by WorkOS - https://github.com/radix-ui/icons/blob/master/LICENSE */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M11.467 3.727c.289.189.37.576.181.865l-4.25 6.5a.625.625 0 0 1-.944.12l-2.75-2.5a.625.625 0 0 1 .841-.925l2.208 2.007l3.849-5.886a.625.625 0 0 1 .865-.181"
        clipRule="evenodd"
      />
    </svg>
  )
}
