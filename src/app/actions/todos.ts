"use server"

import { devTodos } from "@/lib/todos/repo.dev"

export async function getTodos() {
  const todos = await devTodos.list()
  return todos
}

export async function createTodo(text: string) {
  const todo = await devTodos.create(text)
  return todo
}

export async function reorderTodo(
  id: string,
  beforeId: string,
  afterId: string
) {
  const todo = await devTodos.reorder(id, { afterId, beforeId })
  return todo
}
