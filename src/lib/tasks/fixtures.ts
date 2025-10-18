import { type Task } from "./types"

export const MOCK_TASKS: Task[] = [
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
  {
    id: "b23c5f12-9f67-4fa9-9a0a-bc9a0a2e8a42",
    text: "Finish project report",
    completed: false,
    order: 4.0,
    createdAt: "2025-10-01T11:15:00.000Z",
  },
  {
    id: "e83b12c7-4d09-4c38-a1cf-9b872c7a5b22",
    text: "Call the electrician",
    completed: true,
    order: 5.0,
    createdAt: "2025-10-02T08:30:00.000Z",
  },
  {
    id: "a6f5c0e9-3d1a-47df-8b4b-54f9a2e62a77",
    text: "Schedule dentist appointment",
    completed: false,
    order: 6.0,
    createdAt: "2025-10-03T09:45:00.000Z",
  },
]
