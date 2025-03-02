import { cn } from "@heroui/react"

import { colorSchemes } from "@/lib/constants"
import { ColorSchemes } from "@/lib/types"
import { Button } from "@/components/ui/custom-button"
import { ColorSchemeIcon } from "@/components/icons/game"

import { activeCn, inactiveCn } from "./Difficulty"
import SettingsTitle from "./SettingsTitle"

export default function ColorSchemeSettings() {
  return (
    <section className="flex flex-col gap-1.5">
      <SettingsTitle>Color Scheme</SettingsTitle>

      <div className="flex gap-1.5">
        {colorSchemes.map(scheme => (
          <ColorschemeButton scheme={scheme} key={scheme} />
        ))}
      </div>
    </section>
  )
}

const ColorschemeButton = ({ scheme }: { scheme: ColorSchemes }) => {
  // TODO: Will use next-themes later
  const currentScheme: ColorSchemes = "system"

  return (
    <Button
      className={cn(
        "capitalize",
        currentScheme === scheme ? activeCn : inactiveCn
      )}
    >
      <ColorSchemeIcon scheme={scheme} />
      {scheme}
    </Button>
  )
}
