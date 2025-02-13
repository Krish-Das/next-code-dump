"use client"

import { Button } from "react-aria-components"
export default function Page() {
  const Content = () => {
    return (
      <section className="h-fit w-fit rounded-xl border-2 border-dashed border-red-500 p-3">
        <Button
          className="size-96 cursor-default rounded-lg border-none bg-red-500 outline-none rac-focus-visible:ring-4 rac-focus-visible:ring-red-400"
          autoFocus
        />
      </section>
    )
  }

  return (
    <div className="grid h-dvh place-content-center">
      <Content />
    </div>
  )
}
