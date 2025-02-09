"use client"

import Link from "next/link"
import { Button, Divider } from "@heroui/react"

import {
  SolarMenuDotsBold,
  SolarPauseBold,
  SolarSettingsBold,
} from "@/components/icons/solar"

export default function Toolbar() {
  // TODO: Standardize this type
  const difficulties = ["easy", "medium", "hard"] as const

  return (
    <nav className="fixed left-5 top-5 flex h-fit items-center gap-4 rounded-full bg-content2/30 p-2">
      <div className="flex items-center gap-1">
        <Button color="primary" variant="flat" radius="full" isIconOnly>
          <SolarPauseBold />
        </Button>
        <p className="text-lg font-semibold leading-none">
          02:35
          <span className="text-bases ml-[0.2ch] font-normal text-content4">
            s
          </span>
        </p>
      </div>

      <Divider orientation="vertical" className="h-4 w-0.5 rounded-full" />

      <div className="flex items-center">
        <Button color="default" variant="light" radius="full" isIconOnly>
          <SolarSettingsBold className="size-4" />
        </Button>

        <Button color="default" variant="light" radius="full" isIconOnly>
          <SolarMenuDotsBold className="size-5" />
        </Button>
      </div>
    </nav>
  )

  return (
    <nav className="fixed left-5 top-5 flex flex-col gap-2 rounded-full bg-content2/50 p-2.5">
      {difficulties.map(difficulty => (
        <Link
          href={{
            pathname: "/game",
            query: { d: difficulty },
          }}
          className="text-xs font-semibold uppercase text-primary"
          key={difficulty}
        >
          {difficulty.slice(0, 1)}
        </Link>
      ))}
    </nav>
  )
}
