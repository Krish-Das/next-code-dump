import { getTodos } from "../actions/todos"
import TodoList from "./TodoList"

const Page = async () => {
  const todos = await getTodos()
  return (
    <main className="mx-auto max-w-xl p-4">
      <TodoList todos={todos} />
    </main>
  )
}

export default Page
