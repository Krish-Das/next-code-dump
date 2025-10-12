import { useEffect, useRef, useState } from "react"
import { combine } from "@atlaskit/pragmatic-drag-and-drop/combine"
import {
  draggable,
  dropTargetForElements,
} from "@atlaskit/pragmatic-drag-and-drop/element/adapter"

import { Todo } from "@/lib/todos/types"
import { cn } from "@/lib/utils"

import { useTodo } from "../providers/todo"
import GrabHandle from "./GrabHandle"

const TodoItem = ({ todo }: { todo: Todo }) => {
  const ref = useRef<HTMLLIElement>(null)
  const [isDragging, setDragging] = useState(false)
  const [isAboutToDrop, setAboutToDrop] = useState(false)
  const { reorder } = useTodo()

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
        getData: () => todo,
        canDrop: ({ source }) => element !== source.element, // disable dropping on itself
        onDragEnter: () => {
          setAboutToDrop(true)
        },
        onDragLeave: () => {
          setAboutToDrop(false)
        },
        onDrop: e => {
          const source = e.source.data as Todo
          const target = e.self.data as Todo

          reorder(source.id, { afterId: null, beforeId: target.id })

          // onDragLeave only triggers while still dragging
          // when we drop the source element on the target the `onDragLeave` dosen't trigger
          // so we need to toggle `isAboutToDrop` when we finally drop the source on the target
          setAboutToDrop(false)
        },
      })
    )
  }, [ref, todo, reorder])

  return (
    <li
      className={cn(
        "text-label-primary/80 bg-fill-tertiary border-separator-opaque flex h-11 items-center gap-1.5 border-b p-2 text-sm",
        isDragging && "opacity-65",
        isAboutToDrop && "bg-ios-green/20"
      )}
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
