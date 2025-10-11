import { Button } from "react-aria-components"

import { cn } from "@/lib/utils"

import { useTodo } from "../providers/todo"

const AddTodoButton = () => {
  const { create } = useTodo()

  const handleCreateTodo = () => {
    create("Testing something")
  }

  return (
    <Button
      className={cn(
        "text-label-primary/80 flex h-10 w-full items-center px-3 text-sm",
        "data-pressed:bg-fill-tertiary data-hovered:bg-fill-quaternary data-pressed:text-label-primary ring-ios-blue rounded-sm outline-none data-focus-visible:ring-2"
      )}
      onPress={handleCreateTodo}
    >
      + Add todo
    </Button>
  )
}

export default AddTodoButton
