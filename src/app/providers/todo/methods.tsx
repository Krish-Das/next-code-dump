import { use, useCallback } from "react"
import { v4 as uuid } from "uuid"

import { EPS } from "@/lib/constants"
import { Todo } from "@/lib/todos/types"

import { TodoContext } from "."

export const useTodo = () => {
  const context = use(TodoContext)
  if (!context) throw new Error("useTodo must be used within the Provider.")
  const { todos, setTodos } = context

  const createTodo = useCallback(
    (text: string): Todo => {
      const order = todos.length ? Math.max(...todos.map(x => x.order)) + 1 : 1

      const newTodo: Todo = {
        id: uuid(),
        text,
        completed: false,
        order,
        createdAt: new Date().toISOString(),
      }

      setTodos(prev => [...prev, newTodo])
      return newTodo
    },
    [todos, setTodos]
  )

  const updateTodo = useCallback(
    (
      id: string,
      patch: Partial<Omit<Todo, "id" | "createdAt" | "order">>
    ): Todo | null => {
      let updatedTodo: Todo | null = null

      setTodos(prev => {
        const idx = prev.findIndex(t => t.id === id)
        if (idx === -1) return prev

        const updated = { ...prev[idx], ...patch }
        updatedTodo = updated

        const newTodos = [...prev]
        newTodos[idx] = updated
        return newTodos
      })

      return updatedTodo
    },
    [setTodos]
  )

  const deleteTodo = useCallback(
    (id: string): boolean => {
      let found = false

      setTodos(prev => {
        const idx = prev.findIndex(t => t.id === id)
        if (idx === -1) return prev

        found = true
        const newTodos = [...prev]
        newTodos.splice(idx, 1)
        return newTodos
      })

      return found
    },
    [setTodos]
  )

  const compactTodos = useCallback((): Todo[] => {
    let compacted: Todo[] = []
    setTodos(prev => {
      const sorted = [...prev].sort((a, b) => a.order - b.order)
      compacted = compactPositions(sorted)
      return compacted
    })
    return compacted
  }, [setTodos])

  // Reorder a todo
  const reorderTodo = useCallback(
    (
      id: string,
      opts: { beforeId?: string | null; afterId?: string | null }
    ): Todo | null => {
      let reorderedTodo: Todo | null = null

      setTodos(prev => {
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
            reorderedTodo = compacted[idx]
          }
          return compacted
        }

        // Update the item with new position
        const idx = prev.findIndex(t => t.id === id)
        if (idx === -1) return prev

        const newTodos = [...prev]
        newTodos[idx] = { ...newTodos[idx], order: newOrder }
        reorderedTodo = newTodos[idx]

        return newTodos.sort((a, b) => a.order - b.order)
      })

      return reorderedTodo
    },
    [setTodos]
  )

  // Clear all todos
  const clearTodos = useCallback(() => {
    setTodos([])
  }, [setTodos])

  // Toggle todo completion
  const toggleComplete = useCallback(
    (id: string): Todo | null => {
      return updateTodo(id, {
        completed: !todos.find(t => t.id === id)?.completed,
      })
    },
    [todos, updateTodo]
  )

  return {
    todos,
    create: createTodo,
    update: updateTodo,
    remove: deleteTodo,
    removeAll: clearTodos,
    toggleComplete,
    compact: compactTodos,
    reorder: reorderTodo,
  }
}

// Helpers
function compactPositions(list: Todo[]): Todo[] {
  return list
    .sort((a, b) => a.order - b.order)
    .map((todo, i) => ({ ...todo, order: i + 1 }))
}

function isGapTooSmall(list: Todo[]): boolean {
  for (let i = 0; i < list.length - 1; i++) {
    if (Math.abs(list[i + 1].order - list[i].order) < EPS) return true
  }
  return false
}
