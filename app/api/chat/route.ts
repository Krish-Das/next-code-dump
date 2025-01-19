import { ragChat } from "@/lib/ragchat"
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs"
import { Message } from "ai"
import { NextRequest } from "next/server"

type ReqType = {
  messages: Message[]
  sessionId: string
}

export async function POST(req: NextRequest) {
  const { messages, sessionId } = (await req.json()) as ReqType
  const lastMessege = messages[messages.length - 1].content

  const res = await ragChat.chat(lastMessege, { streaming: true, sessionId })

  return aiUseChatAdapter(res)
}
