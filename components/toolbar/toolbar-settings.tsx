import { Dispatch, SetStateAction } from "react"
import { cn } from "@heroui/react"

import { ToolbarState } from "@/lib/types"
import { Button } from "@/components/ui/custom-button"
import { ColorSchemeIcon, DifficultyIcon } from "@/components/icons/game"

import ToolbarTitle from "./toolbar-title"

export default function ToolbarSettings({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setToolbarState: _,
}: {
  setToolbarState: Dispatch<SetStateAction<ToolbarState>>
}) {
  return (
    <div className="flex h-fit w-fit flex-col gap-1.5 px-3 py-4">
      <ToolbarTitle title="Settings" />

      <div className="spacer h-1.5 w-full" />

      <section className="flex flex-col gap-1.5">
        <SettingsTitle>Difficulty</SettingsTitle>

        <div className="flex gap-1.5">
          <Button className="bg-default-300 text-default-900">
            <DifficultyIcon difficulty="easy" />
            Easy
          </Button>

          <Button className="bg-default-300/20 text-default-900">
            <DifficultyIcon difficulty="medium" />
            Medium
          </Button>

          <Button className="bg-default-300/20 text-default-900">
            <DifficultyIcon difficulty="hard" />
            Hard
          </Button>
        </div>
      </section>

      <div className="spacer h-1.5 w-full" />

      <section className="flex flex-col gap-1.5">
        <SettingsTitle>Color Scheme</SettingsTitle>

        <div className="flex gap-1.5">
          <Button className="bg-default-300 text-default-900">
            <ColorSchemeIcon scheme="system" />
            System
          </Button>

          <Button className="bg-default-300/20 text-default-900">
            <ColorSchemeIcon scheme="light" />
            Light
          </Button>

          <Button className="bg-default-300/20 text-default-900">
            <ColorSchemeIcon scheme="dark" />
            Dark
          </Button>
        </div>
      </section>
    </div>
  )
}

const SettingsTitle = ({
  className,
  ...rest
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h4
      className={cn(
        "text-sm font-bold tracking-tight text-default-900/80",
        className
      )}
      {...rest}
    />
  )
}
