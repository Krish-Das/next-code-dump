"use server"

import { devTasks } from "@/lib/tasks/repo.dev"

export async function getTasks() {
  const tasks = await devTasks.list()
  return tasks
}

export async function createTask(text: string) {
  const task = await devTasks.create(text)
  return task
}

export async function reorderTask(
  id: string,
  beforeId: string,
  afterId: string
) {
  const task = await devTasks.reorder(id, { afterId, beforeId })
  return task
}
