"use server"

import { devTodos } from "@/lib/todos/repo.dev"

export async function getTodos() {
  const todos = await devTodos.list()
  return todos
}
