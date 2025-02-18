"use client"

import { useState } from "react"
import { Divider, Button as NextButton } from "@heroui/react"
import { Button } from "react-aria-components"
import { useStopwatch } from "react-timer-hook"

import { cn } from "@/lib/utils"
import {
  MaterialSymbolsCognition2Outline,
  MaterialSymbolsRefresh,
  MaterialSymbolsSettingsOutline,
} from "@/components/icons/material-icons"

// needs: focus
const Content = () => {
  const [focus, setFocus] = useState(false)
  const [someState, setSomeState] = useState(false)

  return (
    <div
      className={cn(
        "mt-3 rounded-xl border-2 border-dashed border-blue-500 p-3",
        "grid grid-cols-4 gap-3",
        focus && "ring ring-blue-400 ring-offset-2"
      )}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      tabIndex={0}
    >
      {Array.from({ length: 4 }, (_, idx) => (
        <Button
          key={idx}
          className={cn(
            "size-16 cursor-default rounded-lg border-none bg-blue-500 outline-none rac-focus-visible:ring-4 rac-focus-visible:ring-blue-400",
            someState && "bg-green-400"
          )}
          onPress={() => setSomeState(v => !v)}
        />
      ))}
    </div>
  )
}

// needs: time
const Toolbar = ({
  minutes,
  seconds,
}: {
  minutes: number
  seconds: number
}) => {
  // if (clickCount <= 0 && !isRunning) start()

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

        <label className="text-center text-sm font-bold">
          {minutes}:{seconds}
        </label>
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

// needs: clicks
const Clicks = ({ clicks }: { clicks: number }) => {
  return (
    <div className="fixed left-4 top-3 inline-grid size-8 touch-none select-none place-content-center rounded-lg bg-content2 text-xs font-semibold">
      <span>{clicks}</span>
    </div>
  )
}

export default function Page() {
  // WARN: Don't push this to production!
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { minutes, seconds, isRunning, start, pause, reset } = useStopwatch({
    autoStart: false,
  })

  return (
    <div className="grid h-dvh place-content-center">
      <Toolbar minutes={minutes} seconds={seconds} />
      <Content />
      <Clicks clicks={0} />
    </div>
  )
}
