import { v } from "convex/values"

import { internalMutation, mutation, query } from "./_generated/server"

export const get = query({
  args: {},
  handler: async ctx => {
    return await ctx.db
      .query("tasks")
      .withIndex("by_order")
      .order("asc")
      .collect()
  },
})

export const getById = query({
  args: { id: v.id("tasks") },
  handler: async (ctx, { id }) => {
    return await ctx.db.get(id)
  },
})

export const getByStringId = query({
  args: { id: v.string() },
  handler: async (ctx, args) => {
    const normalizedId = ctx.db.normalizeId("tasks", args.id)
    if (!normalizedId) throw new Error("Invalid ID for the task")
    return await ctx.db.get(normalizedId)
  },
})

export const getByOrder = query({
  args: { order: v.number() },
  handler: async (ctx, { order }) => {
    return await ctx.db
      .query("tasks")
      .withIndex("by_order", q => q.eq("order", order))
      .unique()
  },
})

export const add = mutation({
  args: { text: v.string() },
  handler: async (ctx, { text }) => {
    // Find the current maximum order value
    const lastTask = await ctx.db
      .query("tasks")
      .withIndex("by_order")
      .order("desc")
      .first()
    const nextOrder = lastTask ? lastTask.order + 1 : 1

    // Insert the new task with the next order value
    return await ctx.db.insert("tasks", {
      text,
      isCompleted: false,
      order: nextOrder,
    })
  },
})

export const toggleComplete = mutation({
  args: { id: v.id("tasks") },
  handler: async (ctx, { id }) => {
    const existing = await ctx.db.get(id)
    if (!existing) throw new Error("No task found with the given ID!")

    return await ctx.db.patch(id, { isCompleted: !existing.isCompleted })
  },
})

export const remove = mutation({
  args: { id: v.id("tasks") },
  handler: async (ctx, { id }) => {
    return await ctx.db.delete(id)
  },
})

// TODO: Safen this function by checking if there already exists a task with the
// given order.
export const reorder = mutation({
  args: { taskId: v.id("tasks"), newOrder: v.number() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.taskId, { order: args.newOrder })
  },
})

export const normalizeTaskOrder = internalMutation({
  args: {},
  handler: async ctx => {
    const tasks = await ctx.db
      .query("tasks")
      .withIndex("by_order")
      .order("asc")
      .collect()

    let currentOrder = 1
    for (const task of tasks) {
      if (task.order !== currentOrder) {
        await ctx.db.patch(task._id, { order: currentOrder })
      }
      currentOrder++
    }
  },
})
