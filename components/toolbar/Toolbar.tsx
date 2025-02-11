"use client"

import { useState } from "react"
import { Button, cn, Divider } from "@heroui/react"

import { type GameDifficulties } from "@/lib/types"
import {
  SolarMenuDotsBold,
  SolarPauseBold,
  SolarSettingsBold,
} from "@/components/icons/solar"

import GameSettings from "./GameSettings"

export default function Toolbar({
  difficulty,
}: {
  difficulty: GameDifficulties
}) {
  const [isOpen, setOpen] = useState(false)

  return (
    <nav
      className="fixed bottom-7 left-1/2 -translate-x-1/2 overflow-hidden border border-default-100/35 bg-default-50/80 backdrop-blur-md"
      style={{
        borderRadius: isOpen ? "1rem" : "9999px",
      }}
    >
      {!isOpen ? (
        <div className={cn("flex items-center justify-center gap-4 p-2")}>
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
              onPress={() => setOpen(!isOpen)}
            >
              <SolarSettingsBold className="size-4" />
            </Button>

            <Button
              color="default"
              variant="flat"
              radius="full"
              isIconOnly
              onPress={() => setOpen(!isOpen)}
            >
              <SolarMenuDotsBold className="size-5" />
            </Button>
          </div>
        </div>
      ) : (
        <GameSettings selectedDifficulty={difficulty} setOpen={setOpen} />
      )}
    </nav>
  )
}