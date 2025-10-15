import { Spacer } from "@/components/ui/Spacer"

import { useTodo } from "../providers/todo"
import EmptyState from "./EmptyState"
import TodoItem from "./TodoItem"
import TodoListHeader from "./TodoListHeader"

const TodoList = () => {
  const { todos } = useTodo()

  if (!todos.length) return <EmptyState />

  return (
    <>
      <TodoListHeader />
      <Spacer className="h-4" />
      <ul className="flex flex-col gap-1">
        {todos.map((todo, idx) => (
          <TodoItem todo={todo} index={idx} key={todo.id} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
