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
      <ul className="border-separator-opaque flex flex-col border [&_li:last-of-type]:border-none">
        {todos.map((todo, idx) => (
          <TodoItem todo={todo} key={todo.id} index={idx} />
        ))}
      </ul>
    </>
  )
}

export default TodoList
