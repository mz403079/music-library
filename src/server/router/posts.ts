import { z } from "zod";
import { createRouter } from "./context";

// Example router with queries that can only be hit if the user requesting is signed in
export const postRouter = createRouter()
  .query("getPost", {
    input: z
      .object({
        id: z.string(),
      }),
    async resolve({ input, ctx }) {
      return await ctx.prisma.post.findFirst({
        where: {
          id: input.id,
        },
        select: {
          id: true,
          title: true,
          description: true,
          author: true,
        },
      });
    },
  })
  .query("getPosts", {
    input: z
      .object({
        text: z.string().nullish(),
      })
      .nullish(),
    async resolve({ input, ctx }) {
      let posts = []
      for(let i = 0; i < 100; i++) {
        posts.push({})
      }
      prisma?.post.createMany
      return await ctx.prisma.post.findMany({
        where: {
          title: { contains: input?.text ?? undefined },
        },
        select: {
          id: true,
          title: true,
          description: true,
          author: true,
        },
      });
    },
  });
