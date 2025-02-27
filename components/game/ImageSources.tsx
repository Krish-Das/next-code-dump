import { cn } from "@heroui/react"

import { Unsplash } from "../icons/company-logos/Unsplash"

// TODO: Export from somewhere else
const ChipCn = cn(
  "flex w-fit select-none items-center gap-1 rounded-lg px-1.5 py-1 text-xs font-bold leading-none tracking-tight [&>svg]:text-lg"
)

export default function ImageSources() {
  return (
    <div className="flex gap-1">
      <div className={cn(ChipCn, "bg-default-300/20 text-default-500")}>
        <Unsplash />
        <label>Images</label>
      </div>
    </div>
  )
}
