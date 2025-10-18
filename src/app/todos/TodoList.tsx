import { useEffect, useRef } from "react"
import { extractClosestEdge } from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
import { getReorderDestinationIndex } from "@atlaskit/pragmatic-drag-and-drop-hitbox/util/get-reorder-destination-index"
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
    const element = ref?.current
    if (!element) return

    return monitorForElements({
      onDrop: ({ source, location }) => {
        const [dropTarget] = location.current.dropTargets
        if (!dropTarget) return

        const {
          todo: { id: moveId },
        } = source.data as ElementData
        if (typeof moveId !== "string") return
        const {
          todo: { id: targetId },
        } = dropTarget.data as ElementData
        if (typeof targetId !== "string") return

        setTodos(tasks => {
          const moveIndex = tasks.findIndex(task => task.id === moveId)
          const indexOfTarget = tasks.findIndex(task => task.id === targetId)
          const closestEdgeOfTarget = extractClosestEdge(dropTarget.data)

          const destIndex = getReorderDestinationIndex({
            startIndex: moveIndex,
            indexOfTarget,
            closestEdgeOfTarget,
            axis: "vertical",
          })

          // Early return if reorder didn't happen
          if (destIndex === moveIndex) return tasks

          // Temp list without moved item (tasks already sorted by order)
          const remainingTasks = tasks.filter(t => t.id !== moveId)

          let newOrder: number
          if (destIndex === 0) {
            newOrder = remainingTasks[0]?.order - 1 || 0
          } else if (destIndex === remainingTasks.length) {
            newOrder = remainingTasks[remainingTasks.length - 1]?.order + 1 || 1
          } else {
            const beforeOrder = remainingTasks[destIndex - 1].order
            const afterOrder = remainingTasks[destIndex].order
            newOrder = (beforeOrder + afterOrder) / 2
          }

          // updateTodo(moveId, { order: NewTaskForm })

          return tasks
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
