import { createUserSchema } from 'schemas/user.schema';
import { createRouter } from 'server/createRouter';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime';
import * as trpc from '@trpc/server';

export const userRouter = createRouter().mutation('create-user', {
  input: createUserSchema,
  resolve: async ({ ctx, input }) => {
    const { name, email } = input;

    try {
      const user = await ctx.prisma.user.create({
        data: {
          name,
          email,
        },
      });
      return user;
    } catch (error) {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === 'P2002') {
          throw new trpc.TRPCError({ code: 'CONFLICT', message: 'User already exists!' });
        }
      }

      throw new trpc.TRPCError({
        code: 'INTERNAL_SERVER_ERROR',
        message: 'Something went wrong :(',
      });
    }
  },
});
