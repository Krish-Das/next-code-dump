import { Spacer } from "@/components/ui/Spacer"

import { getTodos } from "../actions/todos"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

const Page = async () => {
  const todos = await getTodos()
  return (
    <main className="mx-auto max-w-xl p-4">
      <TodoList todos={todos} />
      <Spacer />
      <AddTodo />
    </main>
  )
}

export default Page
