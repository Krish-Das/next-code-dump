import { Todo } from "@/lib/todos/types"
import { Spacer } from "@/components/ui/Spacer"

import EmptyState from "./EmptyState"
import GrabHandle from "./GrabHandle"
import TodoListHeader from "./TodoListHeader"

const TodoList = ({ todos }: { todos: Todo[] }) => {
  if (!todos.length) return <EmptyState />

  return (
    <>
      <TodoListHeader />
      <Spacer className="h-4" />
      <ul className="border-separator-opaque flex flex-col border [&_li:last-of-type]:border-none">
        {todos.map(todo => (
          <li
            className="text-label-primary/80 bg-fill-tertiary border-separator-opaque flex h-11 items-center gap-1.5 border-b p-2 text-sm"
            key={todo.id}
          >
            <GrabHandle />
            <Content text={todo.text} />
          </li>
        ))}
      </ul>
    </>
  )
}

const Content = ({ text }: { text: string }) => {
  return (
    <div className="flex-1 truncate select-none">
      <span>{text}</span>
    </div>
  )
}

export default TodoList
