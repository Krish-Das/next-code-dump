"use client"

import { useState } from "react"
import { Divider, Button as NextButton } from "@heroui/react"
import { Button } from "react-aria-components"
import { useStopwatch } from "react-timer-hook"

import {
  MaterialSymbolsCognition2Outline,
  MaterialSymbolsRefresh,
  MaterialSymbolsSettingsOutline,
} from "@/components/icons/material-icons"

export default function Page() {
  const [clickCount, setClickCount] = useState(0)
  const { minutes, seconds, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  })

  const handleCardClick = () => {
    if (clickCount <= 0 && !isRunning) start()

    setClickCount(v => v + 1)
    return null
  }

  const Content = () => {
    return (
      <section className="grid h-fit w-fit grid-cols-4 grid-rows-3 gap-3 rounded-xl border-2 border-dashed border-red-500 p-3">
        {Array.from({ length: 12 }, (_, idx) => (
          <Button
            key={idx}
            className="size-16 cursor-default rounded-lg border-none bg-red-500 outline-none rac-focus-visible:ring-4 rac-focus-visible:ring-red-400"
            onPressEnd={handleCardClick}
          />
        ))}
      </section>
    )
  }
  const _Clicks = () => {
    return (
      <div className="fixed left-1/2 top-3 inline-grid -translate-x-1/2 place-content-center rounded-full bg-content4 px-3 py-2 text-medium">
        <span>{clickCount}</span>
      </div>
    )
  }

  return (
    <div className="grid h-dvh place-content-center">
      <Content />
      <_Display label={`${minutes}:${seconds}`} />
      <_Clicks />
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
