"use client"

import { Spacer } from "@/components/ui/Spacer"

import { TodoProvider } from "../providers/todo"
import AddTodo from "./AddTodo"
import TodoList from "./TodoList"

const Page = () => {
  return (
    <main className="mx-auto max-w-xl p-5 px-6">
      <TodoProvider>
        <TodoList />
        <Spacer />
        <AddTodo />
      </TodoProvider>
    </main>
  )
}

export default Page
