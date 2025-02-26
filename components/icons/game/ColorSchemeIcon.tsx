import { ColorSchemes } from "@/lib/types"

import { MaterialSymbolsDarkModeOutline } from "../material-icons/MaterialSymbolsDarkMode"
import { MaterialSymbolsLightModeOutline } from "../material-icons/MaterialSymbolsLightMode"
import { MaterialSymbolsNestDisplayOutline } from "../material-icons/MaterialSymbolsNestDisplay"

export default function ColorSchemeIcon({ scheme }: { scheme: ColorSchemes }) {
  return (
    <>
      {scheme === "system" ? (
        <MaterialSymbolsNestDisplayOutline />
      ) : scheme === "light" ? (
        <MaterialSymbolsLightModeOutline />
      ) : (
        <MaterialSymbolsDarkModeOutline />
      )}
    </>
  )
}
