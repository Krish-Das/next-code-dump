"use client"

import { useState } from "react"
import { Divider, Button as NextButton } from "@heroui/react"
import { Button } from "react-aria-components"

import {
  MaterialSymbolsCognition2Outline,
  MaterialSymbolsRefresh,
  MaterialSymbolsSettingsOutline,
} from "@/components/icons/material-icons"

export default function Page() {
  const [clickCount, setClickCount] = useState(0)

  const Content = () => {
    return (
      <section className="h-fit w-fit rounded-xl border-2 border-dashed border-red-500 p-3">
        <Button
          className="size-96 cursor-default rounded-lg border-none bg-red-500 outline-none rac-focus-visible:ring-4 rac-focus-visible:ring-red-400"
          onPressEnd={() => setClickCount(v => v + 1)}
        />
      </section>
    )
  }

  return (
    <div className="grid h-dvh place-content-center">
      <Content />
      <_Display label={clickCount} />
    </div>
  )
}

const _Display = ({ label = "00:00" }: { label?: string | number }) => {
  return (
    <nav className="fixed left-4 top-1/2 flex h-fit w-fit -translate-y-1/2 flex-col gap-3 overflow-hidden rounded-full bg-default-50/50 p-2 shadow shadow-black/5 backdrop-blur-md dark:bg-default-50/80 [&_button>svg]:text-lg">
      <div className="toolbar__control-group flex h-fit w-fit flex-col items-center gap-2">
        <NextButton
          variant="flat"
          color="primary"
          radius="full"
          size="lg"
          isIconOnly
        >
          <MaterialSymbolsRefresh />
        </NextButton>

        <label className="text-center text-sm font-bold">{label}</label>
      </div>

      <Divider />

      <div className="toolbar__mod-group flex flex-col gap-1">
        <NextButton variant="flat" radius="full" size="lg" isIconOnly>
          <MaterialSymbolsCognition2Outline />
        </NextButton>

        <NextButton variant="flat" radius="full" size="lg" isIconOnly>
          <MaterialSymbolsSettingsOutline />
        </NextButton>
      </div>
    </nav>
  )
}
