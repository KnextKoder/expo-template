import { query } from "./_generated/server";

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const post = query({
    args: {},
    handler: async (ctx) => {
      return await ctx.db.query("tasks").collect();
    }
});