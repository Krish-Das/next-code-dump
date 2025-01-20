import { type Message } from "ai/react"
import MessageBubble from "./MessageBubble"

export default function MessageComponent({
  messages,
}: {
  messages: Message[]
}) {
  return (
    <>
      <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
        {messages.length ? (
          messages.map((message, idx) => (
            <MessageBubble key={idx} message={message} />
          ))
        ) : (
          <NoMessages />
        )}
      </div>
    </>
  )
}

const NoMessages = () => {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2">
      {/* <MessageSquare className="size-8 text-blue-500" /> */}
      <h3 className="text-xl font-semibold text-white">You&apos;re all set!</h3>
      <p className="text-sm text-zinc-500">
        Ask your first question to get started.
      </p>
    </div>
  )
}
