"use client"

import { Button, Form, Input, Label } from "react-aria-components"
import { SendIcon } from "lucide-react"
import { useChat } from "ai/react"
import MessageComponent from "./MessageComponent"

export const ChatComponent = ({ sessionId }: { sessionId: string }) => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: "/api/chat",
    body: { sessionId },
  })

  return (
    <div className="flex h-dvh flex-col gap-1">
      <MessageComponent messages={messages} />

      <Form className="flex items-center gap-1 p-3" onSubmit={handleSubmit}>
        <Label htmlFor="chat-input" className="sr-only">
          Chat with the site
        </Label>
        <Input
          name="chat-input"
          id="chat-input"
          className="flex-1 rounded-md bg-secondary px-3 py-2 text-secondary-foreground"
          value={input}
          onChange={handleInputChange}
        />
        <Button
          className="inline-grid size-10 place-content-center rounded-lg bg-secondary text-secondary-foreground"
          type="submit"
        >
          <SendIcon size={16} />
        </Button>
      </Form>
    </div>
  )
}
