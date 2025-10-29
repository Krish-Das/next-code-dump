import type { SVGProps } from "react"
import type { Doc } from "#/convex/_generated/dataModel"
import { Checkbox as RacCheckbox } from "react-aria-components"

import { Spacer } from "@/components/ui/Spacer"

import GrabHandle from "./GrabHandle"

const TaskItem = ({ task, index }: { task: Doc<"tasks">; index: number }) => {
  return (
    <li className="text-label-primary/80 relative flex h-10 items-center">
      <GrabHandle />
      <div className="flex h-full w-full items-center gap-1.5 rounded-md p-2">
        <Checkbox defaultSelected={task.isCompleted} />
        <Spacer className="h-full w-px" />
        <Content text={task.text} />

        <Spacer className="h-full flex-1" />
        <div className="[&_pre]:bg-fill-tertiary [&_pre]:text-label-secondary pointer-events-none flex items-center gap-2 text-sm [&_pre]:rounded [&_pre]:px-1">
          <pre>o({task.order})</pre>
          <pre>i({index})</pre>
        </div>
      </div>
    </li>
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
