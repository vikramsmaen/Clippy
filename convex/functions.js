import { mutation, query } from "./_generated/server";
import { v } from "convex/values";

export const createColumn = mutation({
  args: { title: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.insert("columns", {
      title: args.title,
    });
  },
});

export const getColumns = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("columns").collect();
  },
});

export const deleteColumn = mutation({
  args: { id: v.id("columns") },
  handler: async (ctx, args) => {
    await ctx.db.delete(args.id);
  },
});

export const updateColumn = mutation({
  args: { id: v.id("columns"), title: v.string() },
  handler: async (ctx, args) => {
    await ctx.db.patch(args.id, { title: args.title });
  },
});
