import { SVGProps } from "react"
import { Button } from "react-aria-components"

import { cn } from "@/lib/utils"

import { useTask } from "../providers/task"

const AddTaskButton = () => {
  const { create } = useTask()

  const handleCreateTask = () => {
    create(`task-${Math.floor(performance.now())}`)
  }

  return (
    <Button
      className={cn(
        "text-label-secondary flex h-10 w-full items-center gap-1 px-3 font-light",
        "data-pressed:bg-fill-tertiary data-hovered:bg-fill-quaternary data-pressed:text-label-primary ring-ios-blue rounded-sm outline-none data-focus-visible:ring-2"
      )}
      onPress={handleCreateTask}
    >
      <PlusIcon fontSize={20} />
      <span className="mt-0.5 font-medium">Add task</span>
    </Button>
  )
}

export default AddTaskButton

export function PlusIcon(props: SVGProps<SVGSVGElement>) {
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
        d="M8 2.75a.5.5 0 0 0-1 0V7H2.75a.5.5 0 0 0 0 1H7v4.25a.5.5 0 0 0 1 0V8h4.25a.5.5 0 0 0 0-1H8z"
        clipRule="evenodd"
      />
    </svg>
  )
}
