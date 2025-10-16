import { useEffect, useRef } from "react"
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { reorderWithEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/reorder-with-edge"
import { monitorForElements } from "@atlaskit/pragmatic-drag-and-drop/element/adapter"

import { Spacer } from "@/components/ui/Spacer"

import { useTodo } from "../providers/todo"
import EmptyState from "./EmptyState"
import TodoItem, { ElementData } from "./TodoItem"
import TodoListHeader from "./TodoListHeader"

const TodoList = () => {
  const ref = useRef<HTMLUListElement>(null)
  const { todos, setTodos } = useTodo()

  useEffect(() => {
    if (!ref?.current) return
    const element = ref.current

    return monitorForElements({
      onDrop: ({ source, location }) => {
        const [dropTarget] = location.current.dropTargets
        if (!dropTarget) return

        const {
          todo: { id: sourceId },
        } = source.data as ElementData
        if (typeof sourceId !== "string") return
        const {
          todo: { id: targetId },
        } = dropTarget.data as ElementData
        if (typeof targetId !== "string") return

        setTodos(tasks => {
          const startIndex = tasks.findIndex(task => task.id === sourceId)
          const indexOfTarget = tasks.findIndex(task => task.id === targetId)
          return reorderWithEdge({
            list: tasks,
            startIndex,
            indexOfTarget,
            closestEdgeOfTarget: extractClosestEdge(dropTarget.data),
            axis: "vertical",
          })
        })
      },
    })
  }, [ref, setTodos])

  if (!todos.length) return <EmptyState />

  return (
    <>
      <TodoListHeader />
      <Spacer className="h-6" />
      <ul className="flex flex-col" ref={ref}>
        {todos.map((todo, idx) => (
          <TodoItem todo={todo} index={idx} key={todo.id} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
