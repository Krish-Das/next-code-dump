import { useEffect, useRef } from "react"
import { draggable } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"

import { Todo } from "@/lib/todos/types"

import GrabHandle from "./GrabHandle"

const TodoItem = ({ todo }: { todo: Todo }) => {
  const ref = useRef<HTMLLIElement>(null)

  useEffect(() => {
    if (!ref?.current) return
    const element = ref.current

    return draggable({
      element,
    })
  }, [ref])

  return (
    <li
      className="text-label-primary/80 bg-fill-tertiary border-separator-opaque flex h-11 items-center gap-1.5 border-b p-2 text-sm"
      ref={ref}
    >
      <GrabHandle />
      <Content text={todo.text} />
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
export default TodoItem
