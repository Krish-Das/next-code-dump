import { useEffect, useState } from "react"
import { cn } from "@heroui/react"
import { useTheme } from "next-themes"

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
  const [mounted, setMounted] = useState(false)
  const { theme: currentScheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <Button
      className={cn(
        "capitalize",
        currentScheme === scheme ? activeCn : inactiveCn
      )}
      onPress={() => setTheme(scheme)}
    >
      <ColorSchemeIcon scheme={scheme} />
      {scheme}
    </Button>
  )
}
