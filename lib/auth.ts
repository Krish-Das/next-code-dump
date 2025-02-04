import { db } from "@/db"
import { betterAuth } from "better-auth"
import { drizzleAdapter } from "better-auth/adapters/drizzle"
import { nextCookies } from "better-auth/next-js"

import { storageAdapter } from "@/lib/storageadapter"

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: "pg",
  }),
  secondaryStorage: storageAdapter,

  emailAndPassword: { enabled: true },

  trustedOrigins: ["http://192.168.1.8:3000"],
  plugins: [nextCookies()],
})
