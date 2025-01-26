import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
    columns: defineTable({
        title: v.string(),
    }),
    clips: defineTable({
        text: v.string(),
        columnId: v.id("columns"), // Foreign key to columns table
    }),
});
