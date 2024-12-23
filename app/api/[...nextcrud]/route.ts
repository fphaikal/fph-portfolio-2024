import { User, Post, Prisma } from '@prisma/client'
import NextCrud, { PrismaAdapter } from '@premieroctet/next-crud'
import { prisma } from '@/config/database'
 
const handler = async (req: Request) => {
  const nextCrudHandler = await NextCrud({
    adapter: new PrismaAdapter({
      prismaClient: prisma,
    }),
  })
 
  return nextCrudHandler(req)
}
 
export { handler as POST, handler as GET, handler as PUT, handler as DELETE }