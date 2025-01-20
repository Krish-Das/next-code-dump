import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(req: NextRequest) {
  const res = NextResponse.next()
  const sessionId = req.cookies.get("sessionId")

  if (!sessionId) {
    res.cookies.set("sessionId", crypto.randomUUID())
  }

  return res
}

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
}
