import { v4 as uuid } from "uuid"

import { type Todo } from "./types"

export const MOCK_TODOS: Todo[] = [
  {
    id: uuid(),
    text: "Buy milk",
    completed: false,
    order: 1.0,
    createdAt: "2025-10-01T10:00:00.000Z",
  },
  {
    id: uuid(),
    text: "Write unit tests",
    completed: false,
    order: 2.0,
    createdAt: "2025-10-02T12:00:00.000Z",
  },
  {
    id: uuid(),
    text: "Push to repo",
    completed: true,
    order: 3.0,
    createdAt: "2025-10-03T09:00:00.000Z",
  },
]
