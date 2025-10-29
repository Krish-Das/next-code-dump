import type { CSSProperties } from "react"

import { cn } from "@/lib/utils"

// TODO import Edge from "@atlaskit/pragmatic-drag-and-drop-hitbox/closest-edge"
type Edge = "top" | "bottom" | "left" | "right"
type LineType = "terminal" | "no-terminal" | "terminal-no-bleed"

export interface LineProps {
  edge: Edge
  indent?: string
  gap?: string
  strokeColor?: string
  strokeWidth?: string
  type?: LineType
  className?: string
}

export function Line({
  edge,
  gap = "0px",
  indent = "0px",
  strokeColor = "#1d7afc",
  strokeWidth = "2px",
  type = "terminal",
  className,
}: LineProps) {
  const isHorizontal = edge === "top" || edge === "bottom"
  const hasTerminal = type !== "no-terminal"

  // Calculate line start position based on type
  const getLineStart = () => {
    if (type === "terminal") return `calc(var(--terminal-radius) + ${indent})`
    if (type === "terminal-no-bleed")
      return `calc(var(--terminal-diameter) + ${indent})`
    return indent
  }

  const cssVars = {
    "--stroke-color": strokeColor,
    "--stroke-width": strokeWidth,
    "--main-axis-offset": `calc(-0.5 * (${gap} + var(--stroke-width)))`,
    "--line-start": getLineStart(),
    "--terminal-diameter": "calc(var(--stroke-width) * 4)",
    "--terminal-radius": "calc(var(--terminal-diameter) / 2)",
    "--terminal-offset":
      "calc((var(--stroke-width) - var(--terminal-diameter)) / 2)",
  } as CSSProperties

  return (
    <div
      style={cssVars}
      className={cn(
        // Base styles
        "pointer-events-none absolute z-1 bg-[var(--stroke-color)]",
        // Terminal (pseudo-element)
        "before:absolute before:content-['']",
        "before:h-[var(--terminal-diameter)] before:w-[var(--terminal-diameter)]",
        "before:rounded-full before:border-(length:--stroke-width) before:border-[var(--stroke-color)]",
        hasTerminal ? "before:block" : "before:hidden",
        // Orientation-specific styles
        isHorizontal
          ? [
              "right-0 h-[var(--stroke-width)]",
              "left-[var(--line-start)]",
              "before:left-[calc(-1*var(--terminal-diameter))]",
            ]
          : [
              "bottom-0 w-[var(--stroke-width)]",
              "top-[var(--line-start)]",
              "before:top-[calc(-1*var(--terminal-diameter))]",
            ],
        // Edge-specific positioning
        edge === "top" && [
          "top-[var(--main-axis-offset)]",
          "before:top-[var(--terminal-offset)]",
        ],
        edge === "bottom" && [
          "bottom-[var(--main-axis-offset)]",
          "before:bottom-[var(--terminal-offset)]",
        ],
        edge === "left" && [
          "left-[var(--main-axis-offset)]",
          "before:left-[var(--terminal-offset)]",
        ],
        edge === "right" && [
          "right-[var(--main-axis-offset)]",
          "before:right-[var(--terminal-offset)]",
        ],
        className
      )}
    />
  )
}

export default Line
