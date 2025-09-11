import { db } from "@/app/_lib/prisma"
import { PrismaClient, Prisma } from "@/app/generated/prisma"
import { DefaultArgs } from "@/app/generated/prisma/runtime/library"
import NextAuth from "next-auth"
import { Adapter } from "next-auth/adapters"
import GoogleProvider from "next-auth/providers/google"

const handler = NextAuth({
    adapter: PrismaAdapter(db) as Adapter,
  providers: [GoogleProvider({
    clientId: process.env.GOOGLE_CLIENT_ID as string,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
  })],
})

export { handler as GET, handler as POST }
function PrismaAdapter(db: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>): import("next-auth/adapters").Adapter | undefined {
    throw new Error("Function not implemented.")
}

