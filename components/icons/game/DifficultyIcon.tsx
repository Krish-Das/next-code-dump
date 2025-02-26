import { GameDifficulties } from "@/lib/types"

import { MaterialSymbolsShieldOutline } from "../material-icons/MaterialSymbolsShield"
import {
  MaterialSymbolsShieldSpark,
  MaterialSymbolsShieldSparkOutline,
} from "../material-icons/MaterialSymbolsShieldSpark"

export default function DifficultyIcon({
  difficulty,
}: {
  difficulty: GameDifficulties
}) {
  return (
    <>
      {difficulty === "easy" ? (
        <MaterialSymbolsShieldOutline />
      ) : difficulty === "medium" ? (
        <MaterialSymbolsShieldSparkOutline />
      ) : (
        <MaterialSymbolsShieldSpark />
      )}
    </>
  )
}
