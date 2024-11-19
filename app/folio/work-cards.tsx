import { cn } from "@/lib/utils"

export default function WorkCards() {
  const isCard = false

  return (
    <div className="relative flex items-center justify-center gap-5">
      <div
        className={cn(
          "absolute top-0 h-72 w-52 rounded-md border border-[#242422] bg-[#131312]",
          isCard
            ? "left-[calc(50%+1.25rem)] translate-x-1/2"
            : "origin-bottom rotate-[5deg]"
        )}
      />
      <div
        className={cn(
          "absolute top-0 h-72 w-52 rounded-md border border-[#242422] bg-[#131312]",
          isCard
            ? "right-[calc(50%+1.25rem)] -translate-x-1/2"
            : "origin-bottom -rotate-[5deg]"
        )}
      />
      <div className="relative h-72 w-52 rounded-md border border-[#242422] bg-[#131312]" />
    </div>
  )
}
