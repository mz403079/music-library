// src/server/router/index.ts
import superjson from "superjson";
import { createRouter } from "./context";

import { authRouter } from "./auth";
import { exampleRouter } from "./example";
import { postRouter } from "./posts";
import { protectedExampleRouter } from "./protected-example-router";

export const appRouter = createRouter()
  .transformer(superjson)
  .merge("auth.",authRouter)
  .merge("example.", exampleRouter)
  .merge("posts.",postRouter)
  .merge("question.", protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
