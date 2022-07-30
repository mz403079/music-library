import * as trpc from "@trpc/server";
import { hash } from "argon2";
import { signupSchema } from "../../utils/trpc";
import { createRouter } from "./context";


export const authRouter = createRouter().mutation("signup", {
  input: signupSchema,
  async resolve({ input, ctx }) {
    
    const { username, email, password } = input;

    const exists = await ctx.prisma.user.findFirst({
      where: { email },
    });

    if (exists) {
      throw new trpc.TRPCError({
        code: "CONFLICT",
        message: "User with given email already exists",
      });
    }

    const hashedPassword = await hash(password);

    const result = await ctx.prisma.user.create({
      data: { name: username, email, password: hashedPassword },
    });

    return {
      status: 201,
      message: "Account created",
      result: result.email,
    };
  },
});
