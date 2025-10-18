import { defineSchema, defineTable } from "convex/server"
import { v } from "convex/values"

export default defineSchema({
  tasks: defineTable({
    text: v.string(),
    isCompleted: v.boolean(),
    order: v.number(),
    // dueDate: v.optional(v.string()),
    // priority: v.optional(v.string()),
    // tags: v.optional(v.array(v.string())),
  }).index("by_order", ["order"]),
})
