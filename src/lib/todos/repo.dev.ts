import { v4 as uuid } from "uuid"

import { EPS } from "../constants"
import { MOCK_TODOS } from "./fixtures"
import { Todo } from "./types"

const todos: Todo[] = [...MOCK_TODOS]

function sorted() {
  return todos.slice().sort((a, b) => a.order - b.order)
}

export const devTodos = {
  list: async (): Promise<Todo[]> => sorted(),

  create: async (text: string): Promise<Todo> => {
    const order = todos.length ? Math.max(...todos.map(x => x.order)) + 1 : 1
    const t: Todo = {
      id: uuid(),
      text,
      completed: false,
      order,
      createdAt: new Date().toISOString(),
    }
    todos.push(t)
    return t
  },

  update: async (
    id: string,
    patch: Partial<Omit<Todo, "id" | "createdAt">>
  ): Promise<Todo | null> => {
    const idx = todos.findIndex(t => t.id === id)
    if (idx === -1) return null
    todos[idx] = { ...todos[idx], ...patch }
    return todos[idx]
  },

  delete: async (id: string) => {
    const i = todos.findIndex(t => t.id === id)
    if (i === -1) return false
    todos.splice(i, 1)
    return true
  },

  // reorder by giving neighbor ids. Accepts either:
  // - beforeId and afterId (place between them),
  // - beforeId only (place immediately before that item — uses prev neighbor),
  // - afterId only (place immediately after that item),
  // - neither: move to end.
  reorder: async (
    id: string,
    opts: { beforeId?: string | null; afterId?: string | null }
  ) => {
    const item = todos.find(t => t.id === id)
    if (!item) return null

    const list = sorted()
    // helper to find index
    const idxOf = (tid?: string | null) =>
      tid ? list.findIndex(x => x.id === tid) : -1

    const beforeIdx = idxOf(opts.beforeId ?? null)
    const afterIdx = idxOf(opts.afterId ?? null)

    let newPos: number

    if (beforeIdx !== -1 && afterIdx !== -1) {
      // both provided -> place between them (before should be afterIdx > beforeIdx normally)
      const a = list[beforeIdx]
      const b = list[afterIdx]
      // ensure a.pos < b.pos
      const left = Math.min(a.order, b.order)
      const right = Math.max(a.order, b.order)
      newPos = (left + right) / 2
    } else if (beforeIdx !== -1) {
      // want to place before the item at beforeIdx -> take previous item's pos and average
      const right = list[beforeIdx].order
      const left = beforeIdx > 0 ? list[beforeIdx - 1].order : right - 1
      newPos = (left + right) / 2
    } else if (afterIdx !== -1) {
      // place after this item
      const left = list[afterIdx].order
      const right =
        afterIdx < list.length - 1 ? list[afterIdx + 1].order : left + 1
      newPos = (left + right) / 2
    } else {
      // no neighbors → move to end
      newPos = list.length ? Math.max(...list.map(x => x.order)) + 1 : 1
    }

    // If gap is too small, resequence/compact and recompute
    if (
      !isFinite(newPos) ||
      Math.abs(newPos) < EPS ||
      isGapTooSmall(list, newPos)
    ) {
      compactPositions(list)
      // recompute same logic on compacted list
      const list2 = sorted()
      const beforeIdx2 = idxOf(opts.beforeId ?? null)
      const afterIdx2 = idxOf(opts.afterId ?? null)
      if (beforeIdx2 !== -1 && afterIdx2 !== -1) {
        const a = list2[beforeIdx2]
        const b = list2[afterIdx2]
        const left = Math.min(a.order, b.order)
        const right = Math.max(a.order, b.order)
        newPos = (left + right) / 2
      } else if (beforeIdx2 !== -1) {
        const right = list2[beforeIdx2].order
        const left = beforeIdx2 > 0 ? list2[beforeIdx2 - 1].order : right - 1
        newPos = (left + right) / 2
      } else if (afterIdx2 !== -1) {
        const left = list2[afterIdx2].order
        const right =
          afterIdx2 < list2.length - 1 ? list2[afterIdx2 + 1].order : left + 1
        newPos = (left + right) / 2
      } else {
        newPos = list2.length ? Math.max(...list2.map(x => x.order)) + 1 : 1
      }
    }

    item.order = newPos
    return item
  },

  // force resequence to integers 1..n (keeps current order)
  compact: async () => {
    compactPositions(sorted())
    return sorted()
  },
}

// helpers
function isGapTooSmall(list: Todo[]) {
  // check if there exists a neighbor whose gap to this pos is < EPS (very small)
  for (let i = 0; i < list.length - 1; i++) {
    if (Math.abs(list[i + 1].order - list[i].order) < EPS) return true
  }
  return false
}

function compactPositions(list: Todo[]) {
  // assign integer orders 1..n in current order and mutate the backed array
  list
    .sort((a, b) => a.order - b.order)
    .forEach((t, i) => {
      const backed = todos.find(x => x.id === t.id)
      if (backed) backed.order = i + 1
    })
}
