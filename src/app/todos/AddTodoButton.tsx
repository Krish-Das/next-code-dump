"use client"

import { Button } from "react-aria-components"

import { cn } from "@/lib/utils"

const AddTodoButton = () => {
  return (
    <Button
      className={cn(
        "text-label-primary/80 flex h-10 w-full items-center px-3 text-sm",
        "data-pressed:bg-fill-tertiary data-hovered:bg-fill-quaternary data-pressed:text-label-primary ring-ios-blue rounded-sm outline-none data-focus-visible:ring-2"
      )}
    >
      + Add todo
    </Button>
  )
}

export default AddTodoButton
