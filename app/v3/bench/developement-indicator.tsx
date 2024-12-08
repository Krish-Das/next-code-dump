import { MaterialSymbolsConstructionRounded } from "@/components/icons/material-symbols"

export default function DevelopementIndicator() {
  return (
    <div className="fixed left-0 top-0 p-2">
      <Dot2 />
    </div>
  )
}

// TODO: Rename later
function Dot2() {
  return (
    <div
      className="
      gap-1.5s inline-flex h-8 w-fit min-w-8 select-none items-center justify-center rounded-full bg-yellow-700/30
      px-2 text-[0.65rem] text-xs leading-none text-yellow-200 backdrop-blur-sm [&>svg]:text-sm
        "
    >
      <MaterialSymbolsConstructionRounded />
      <div className="w-0s flex w-auto flex-nowrap overflow-hidden">
        <p className="text-nowrap pl-1.5 font-mona font-medium tracking-wide font-stretch-110 font-feature-ss01">
          Development preview
        </p>
      </div>
    </div>
  )
}
