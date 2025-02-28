import { cn } from "@heroui/react"

import { Button } from "@/components/ui/custom-button"
import { ColorSchemeIcon, DifficultyIcon } from "@/components/icons/game"

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
const DifficultySettings = () => {
  return (
    <section className="flex flex-col gap-1.5">
      <SettingsTitle>Difficulty</SettingsTitle>

      <div className="flex gap-1.5">
        <Button className="bg-primary-500 text-white/90 dark:bg-primary-400 dark:text-primary-900">
          <DifficultyIcon difficulty="easy" />
          Easy
        </Button>

        <Button className="bg-default-300/10 text-content4-foreground/90">
          <DifficultyIcon difficulty="medium" />
          Medium
        </Button>

        <Button className="bg-default-300/10 text-content4-foreground/90">
          <DifficultyIcon difficulty="hard" />
          Hard
        </Button>
      </div>
    </section>
  )
}

const ColorSchemeSettings = () => {
  return (
    <section className="flex flex-col gap-1.5">
      <SettingsTitle>Color Scheme</SettingsTitle>

      <div className="flex gap-1.5">
        <Button className="bg-primary-500 text-white/90 dark:bg-primary-400 dark:text-primary-900">
          <ColorSchemeIcon scheme="system" />
          System
        </Button>

        <Button className="bg-default-300/10 text-content4-foreground/90">
          <ColorSchemeIcon scheme="light" />
          Light
        </Button>

        <Button className="bg-default-300/10 text-content4-foreground/90">
          <ColorSchemeIcon scheme="dark" />
          Dark
        </Button>
      </div>
    </section>
  )
}

export { DifficultySettings, ColorSchemeSettings, SettingsTitle }
