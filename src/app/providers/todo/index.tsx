import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react"

import { MOCK_TODOS } from "@/lib/todos/fixtures"
import { Todo } from "@/lib/todos/types"

import { useTodo } from "./methods"

export type TodoContextType = {
  todos: Todo[]
  setTodos: Dispatch<SetStateAction<Todo[]>>
}

export const TodoContext = createContext<TodoContextType | null>(null)

export const TodoProvider = ({ children }: { children?: ReactNode }) => {
  const [todos, setTodos] = useState(MOCK_TODOS)
  return <TodoContext value={{ todos, setTodos }}>{children}</TodoContext>
}

export { useTodo }
