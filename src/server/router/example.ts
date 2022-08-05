import { PrismaClient } from "@prisma/client";
import { z } from "zod";
import { createRouter } from "./context";
const prisma = new PrismaClient();
export const exampleRouter = createRouter()
  .query("hello", {
    input: z
      .object({
        text: z.string().nullish(),
        text2: z.string(),
      })
      .nullish(),

    resolve({ input }) {
      return {
        greeting: `Hello ${input?.text ?? "world"}`,
      };
    },
  })
;
