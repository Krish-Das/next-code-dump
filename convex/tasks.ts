import { v } from "convex/values"

import { mutation, query } from "./_generated/server"

export const get = query({
  args: {},
  handler: async ctx => {
    return await ctx.db.query("tasks").collect()
  },
})

export const add = mutation({
  args: { text: v.string() },
  handler: async (ctx, { text }) => {
    return await ctx.db.insert("tasks", { text, isCompleted: false })
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
