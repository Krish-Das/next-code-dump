import { useEffect, useRef, useState, type SVGProps } from "react"
import {
  attachClosestEdge,
  extractClosestEdge,
  type Edge,
} from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine"
import {
  draggable,
  dropTargetForElements,
  type ElementDropTargetEventBasePayload,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter"
import { pointerOutsideOfPreview } from "@atlaskit/pragmatic-drag-and-drop/element/pointer-outside-of-preview"
import { setCustomNativeDragPreview } from "@atlaskit/pragmatic-drag-and-drop/element/set-custom-native-drag-preview"
import { api } from "#/convex/_generated/api"
import type { Doc } from "#/convex/_generated/dataModel"
import { useMutation } from "convex/react"
import { Checkbox as RacCheckbox } from "react-aria-components"
import { createPortal } from "react-dom"

import { cn } from "@/lib/utils"
import { Spacer } from "@/components/ui/Spacer"

import DeleteTask from "./DeleteTask"
import { Line } from "./drop-indicator"
import GrabHandle from "./GrabHandle"

export type ElementDataType = {
  id: Doc<"tasks">["_id"]
  index: number
}

const TaskItem = ({ task, index }: { task: Doc<"tasks">; index: number }) => {
  const toggleComplete = useMutation(
    api.tasks.toggleComplete
  ).withOptimisticUpdate((localStore, { id }) => {
    const existing = localStore.getQuery(api.tasks.get)
    if (!!existing) {
      const modified = existing.map(t => {
        if (t._id !== id) return t
        return { ...t, isCompleted: !t.isCompleted }
      })
      localStore.setQuery(api.tasks.get, {}, modified)
    }
  })
  const elementId = task._id
  const ref = useRef<HTMLLIElement>(null)
  const dragHandleRef = useRef<HTMLButtonElement>(null)
  const [closestEdge, setClosestEdge] = useState<Edge | null>(null)
  const [isDragging, setDragging] = useState(false)
  const [previewContainer, setPreviewContainer] = useState<HTMLElement | null>(
    null
  )

  useEffect(() => {
    if (!ref.current || !dragHandleRef.current) return
    const element = ref.current
    const dragHandle = dragHandleRef.current
    const data: ElementDataType = { id: elementId, index }

    function onChange({ self, source }: ElementDropTargetEventBasePayload) {
      const isSource = source.element === dragHandle
      if (isSource) {
        setClosestEdge(null)
        return
      }

      const edge = extractClosestEdge(self.data)

      const sourceIndex = source.data.index
      if (typeof sourceIndex !== "number") return
      const isItemBeforeSource = index === sourceIndex - 1
      const isItemAfterSource = index === sourceIndex + 1

      const isDropIndicatorHidden =
        (isItemBeforeSource && edge === "bottom") ||
        (isItemAfterSource && edge === "top")

      if (isDropIndicatorHidden) {
        setClosestEdge(null)
      } else {
        setClosestEdge(edge)
      }
    }
    function removeClosestEdge() {
      setClosestEdge(null)
    }

    return combine(
      draggable({
        element: dragHandle,
        getInitialData: () => data,
        onDragStart: () => setDragging(true),
        onDrop: () => setDragging(false),
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
      }),
      dropTargetForElements({
        element,
        getIsSticky: () => true,
        getData({ input }) {
          return attachClosestEdge(data, {
            element,
            input,
            allowedEdges: ["top", "bottom"],
          })
        },
        canDrop({ source }) {
          const { id } = source.data as ElementDataType
          return id !== elementId
        },
        onDragEnter: onChange,
        onDrag: onChange,
        onDragLeave: removeClosestEdge,
        onDrop: removeClosestEdge,
      })
    )
  }, [elementId, index])

  return (
    <>
      <li
        className={cn(
          "text-label-primary/80 relative flex h-10 items-center",
          isDragging && "opacity-45"
        )}
        ref={ref}
      >
        <GrabHandle ref={dragHandleRef} />
        <div className="flex h-full w-full items-center gap-1.5 rounded-md pl-2">
          <Checkbox
            isSelected={task.isCompleted}
            onChange={() => toggleComplete({ id: elementId })}
          />
          <Spacer className="h-full w-px" />
          <Content text={task.text} />

          <Spacer className="h-full flex-1" />
          <div className="[&_pre]:bg-fill-tertiary [&_pre]:text-label-secondary flex items-center gap-2 text-sm [&_pre]:rounded [&_pre]:px-1">
            <pre className="pointer-events-none">o({task.order})</pre>
            <DeleteTask taskId={task._id} />
          </div>
        </div>

        {closestEdge && <Line edge={closestEdge} />}
      </li>

      {previewContainer &&
        createPortal(<DragPreview task={task} />, previewContainer)}
    </>
  )
}

const Checkbox = ({
  isSelected,
  onChange,
}: {
  isSelected: boolean
  onChange?: (isSelected: boolean) => void
}) => {
  return (
    <RacCheckbox
      className="group/checkbox relative inline-grid place-content-center select-none"
      isSelected={isSelected}
      onChange={onChange}
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
function DragPreview({ task }: { task: Doc<"tasks"> }) {
  return (
    <div
      className="bg-gray-6 border-separator-opaque/40 w-48 truncate rounded-lg border p-2 px-3 shadow-lg"
      style={{
        textDecoration: task.isCompleted ? "line-through" : "none",
        color: task.isCompleted ? "var(--color-label-tertiary)" : "current",
      }}
    >
      {task.text}
    </div>
  )
}

export default TaskItem

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
