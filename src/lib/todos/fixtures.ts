import { type Todo } from "./types"

export const MOCK_TODOS: Todo[] = [
  {
    id: "ad00e911-5563-411f-8da4-499765872b77",
    text: "Buy milk",
    completed: false,
    order: 1.0,
    createdAt: "2025-10-01T10:00:00.000Z",
  },
  {
    id: "6941c968-93dd-41ed-8310-9534d52dd664",
    text: "Write unit tests",
    completed: false,
    order: 2.0,
    createdAt: "2025-10-02T12:00:00.000Z",
  },
  {
    id: "8163a179-dffa-4957-a509-74e447afe8cd",
    text: "Push to repo",
    completed: true,
    order: 3.0,
    createdAt: "2025-10-03T09:00:00.000Z",
  },
]
