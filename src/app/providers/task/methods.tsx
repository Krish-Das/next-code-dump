import { use, useCallback } from "react"
import { v4 as uuid } from "uuid"

import { EPS } from "@/lib/constants"
import { Task } from "@/lib/tasks/types"

import { TaskContext } from "."

export const useTask = () => {
  const context = use(TaskContext)
  if (!context) throw new Error("useTask must be used within the Provider.")
  const { tasks, setTasks } = context

  const createTask = useCallback(
    (text: string): Task => {
      const order = tasks.length ? Math.max(...tasks.map(x => x.order)) + 1 : 1

      const newTask: Task = {
        id: uuid(),
        text,
        completed: false,
        order,
        createdAt: new Date().toISOString(),
      }

      setTasks(prev => [...prev, newTask])
      return newTask
    },
    [tasks, setTasks]
  )

  const updateTask = useCallback(
    (
      id: string,
      patch: Partial<Omit<Task, "id" | "createdAt" | "order">>
    ): Task | null => {
      let updatedTask: Task | null = null

      setTasks(prev => {
        const idx = prev.findIndex(t => t.id === id)
        if (idx === -1) return prev

        const updated = { ...prev[idx], ...patch }
        updatedTask = updated

        const newTasks = [...prev]
        newTasks[idx] = updated
        return newTasks
      })

      return updatedTask
    },
    [setTasks]
  )

  const deleteTask = useCallback(
    (id: string): boolean => {
      let found = false

      setTasks(prev => {
        const idx = prev.findIndex(t => t.id === id)
        if (idx === -1) return prev

        found = true
        const newTasks = [...prev]
        newTasks.splice(idx, 1)
        return newTasks
      })

      return found
    },
    [setTasks]
  )

  const compactTasks = useCallback((): Task[] => {
    let compacted: Task[] = []
    setTasks(prev => {
      const sorted = [...prev].sort((a, b) => a.order - b.order)
      compacted = compactPositions(sorted)
      return compacted
    })
    return compacted
  }, [setTasks])

  // Reorder a task
  const reorderTask = useCallback(
    (
      id: string,
      opts: { beforeId?: string | null; afterId?: string | null }
    ): Task | null => {
      let reorderedTask: Task | null = null

      setTasks(prev => {
        const item = prev.find(t => t.id === id)
        if (!item) return prev

        const list = [...prev].sort((a, b) => a.order - b.order)

        const idxOf = (tid?: string | null) =>
          tid ? list.findIndex(x => x.id === tid) : -1

        const beforeIdx = idxOf(opts.beforeId ?? null)
        const afterIdx = idxOf(opts.afterId ?? null)

        let newOrder: number

        if (beforeIdx !== -1 && afterIdx !== -1) {
          const a = list[beforeIdx]
          const b = list[afterIdx]
          const left = Math.min(a.order, b.order)
          const right = Math.max(a.order, b.order)
          newOrder = (left + right) / 2
        } else if (beforeIdx !== -1) {
          const right = list[beforeIdx].order
          const left = beforeIdx > 0 ? list[beforeIdx - 1].order : right - 1
          newOrder = (left + right) / 2
        } else if (afterIdx !== -1) {
          const left = list[afterIdx].order
          const right =
            afterIdx < list.length - 1 ? list[afterIdx + 1].order : left + 1
          newOrder = (left + right) / 2
        } else {
          newOrder = list.length ? Math.max(...list.map(x => x.order)) + 1 : 1
        }

        // If gap is too small, compact and recompute
        if (
          !isFinite(newOrder) ||
          Math.abs(newOrder) < EPS ||
          isGapTooSmall(list)
        ) {
          const compacted = compactPositions(list)
          const list2 = compacted.sort((a, b) => a.order - b.order)

          const beforeIdx2 = idxOf(opts.beforeId ?? null)
          const afterIdx2 = idxOf(opts.afterId ?? null)

          if (beforeIdx2 !== -1 && afterIdx2 !== -1) {
            const a = list2[beforeIdx2]
            const b = list2[afterIdx2]
            const left = Math.min(a.order, b.order)
            const right = Math.max(a.order, b.order)
            newOrder = (left + right) / 2
          } else if (beforeIdx2 !== -1) {
            const right = list2[beforeIdx2].order
            const left =
              beforeIdx2 > 0 ? list2[beforeIdx2 - 1].order : right - 1
            newOrder = (left + right) / 2
          } else if (afterIdx2 !== -1) {
            const left = list2[afterIdx2].order
            const right =
              afterIdx2 < list2.length - 1
                ? list2[afterIdx2 + 1].order
                : left + 1
            newOrder = (left + right) / 2
          } else {
            newOrder = list2.length
              ? Math.max(...list2.map(x => x.order)) + 1
              : 1
          }

          // Return the compacted list with new position
          const idx = compacted.findIndex(t => t.id === id)
          if (idx !== -1) {
            compacted[idx] = { ...compacted[idx], order: newOrder }
            reorderedTask = compacted[idx]
          }
          return compacted
        }

        // Update the item with new position
        const idx = prev.findIndex(t => t.id === id)
        if (idx === -1) return prev

        const newTasks = [...prev]
        newTasks[idx] = { ...newTasks[idx], order: newOrder }
        reorderedTask = newTasks[idx]

        return newTasks.sort((a, b) => a.order - b.order)
      })

      return reorderedTask
    },
    [setTasks]
  )

  // Clear all tasks
  const clearTasks = useCallback(() => {
    setTasks([])
  }, [setTasks])

  // Toggle task completion
  const toggleComplete = useCallback(
    (id: string): Task | null => {
      return updateTask(id, {
        completed: !tasks.find(t => t.id === id)?.completed,
      })
    },
    [tasks, updateTask]
  )

  return {
    tasks,
    setTasks,
    create: createTask,
    update: updateTask,
    remove: deleteTask,
    removeAll: clearTasks,
    toggleComplete,
    compact: compactTasks,
    reorder: reorderTask,
  }
}

// Helpers
function compactPositions(list: Task[]): Task[] {
  return list
    .sort((a, b) => a.order - b.order)
    .map((task, i) => ({ ...task, order: i + 1 }))
}

function isGapTooSmall(list: Task[]): boolean {
  for (let i = 0; i < list.length - 1; i++) {
    if (Math.abs(list[i + 1].order - list[i].order) < EPS) return true
  }
  return false
}
