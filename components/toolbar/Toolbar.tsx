"use client"

import { useState } from "react"
import { Button, cn, Divider } from "@heroui/react"

import { type GameDifficulty } from "@/lib/types"
import {
  SolarMenuDotsBold,
  SolarPauseBold,
  SolarSettingsBold,
} from "@/components/icons/solar"

import GameSettings from "./GameSettings"

export default function Toolbar({
  difficulty,
}: {
  difficulty: GameDifficulty
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav
      className="fixed bottom-7 left-1/2 -translate-x-1/2 overflow-hidden border border-content1/80 bg-content2/30 backdrop-blur-md"
      style={{
        borderRadius: isOpen ? "1rem" : "9999px",
      }}
    >
      {/* TODO: Remove the extra "hidden" when done. */}
      <div className={cn("h-32 w-full p-1", !isOpen && "hidden", "hidden")}>
        <div className="flex h-full w-full flex-col rounded-xl bg-content3/40 p-2">
          <h6 className="text-sm font-semibold leading-loose">Difficulty</h6>
          <div className="flex gap-2">
            <Button color="primary" variant="solid" radius="full" isIconOnly>
              <SolarPauseBold />
            </Button>

            <Button variant="flat" radius="full" isIconOnly>
              <SolarPauseBold />
            </Button>

            <Button variant="flat" radius="full" isIconOnly>
              <SolarPauseBold />
            </Button>
          </div>
        </div>
      </div>

      {/* TODO: Remove the extra "hidden" when done. */}
      <div
        className={cn("flex items-center justify-center gap-4 p-2", "hidden")}
      >
        <div className="flex items-center gap-2">
          <Button color="primary" variant="solid" radius="full" isIconOnly>
            <SolarPauseBold />
          </Button>
          <p className="mt-[0.3ch] text-lg font-semibold leading-none">
            02:35
            <span className="text-bases ml-[0.2ch] font-normal text-content4">
              s
            </span>
          </p>
        </div>

        <Divider orientation="vertical" className="h-4 w-0.5 rounded-full" />

        <div className="flex items-center gap-2">
          <Button
            color="default"
            variant="flat"
            radius="full"
            isIconOnly
            onPress={() => setIsOpen(!isOpen)}
          >
            <SolarSettingsBold className="size-4" />
          </Button>

          <Button
            color="default"
            variant="flat"
            radius="full"
            isIconOnly
            onPress={() => setIsOpen(!isOpen)}
          >
            <SolarMenuDotsBold className="size-5" />
          </Button>
        </div>
      </div>

      <GameSettings selectedDifficulty={difficulty} />
    </nav>
  )
}
