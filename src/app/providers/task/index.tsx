import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useState,
} from "react"

import { MOCK_TASKS } from "@/lib/tasks/fixtures"
import { Task } from "@/lib/tasks/types"

import { useTask } from "./methods"

export type TaskContextType = {
  tasks: Task[]
  setTasks: Dispatch<SetStateAction<Task[]>>
}

export const TaskContext = createContext<TaskContextType | null>(null)

export const TaskProvider = ({ children }: { children?: ReactNode }) => {
  const [tasks, setTasks] = useState(MOCK_TASKS)
  return <TaskContext value={{ tasks, setTasks }}>{children}</TaskContext>
}

export { useTask }
