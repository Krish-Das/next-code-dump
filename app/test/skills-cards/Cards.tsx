import { cn } from "@/lib/utils"
import { MaterialSymbolsRectangleRounded } from "@/components/icons/material-symbols"

export default function Cards() {
  return (
    <section className="flex h-lvh flex-col justify-center gap-9">
      <p className="text-center font-mona text-xs font-semibold uppercase tracking-wider font-feature-ss01 font-stretch-[115%]">
        Known Technologies
      </p>

      <Grid className="container">
        <SkillCards className="col-start-2" />
        <SkillCards />
        <SkillCards />
      </Grid>
    </section>
  )
}
function SkillCards({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        // TODO: rename this group
        "group relative col-span-2 flex h-[30rem] w-full flex-col gap-1.5 rounded-md border border-grey-1 bg-grey-1/20 p-1.5",
        className
      )}
    >
      <div className="grid flex-1 place-items-center rounded text-foreground/80">
        <MaterialSymbolsRectangleRounded />
      </div>
      <div
        className="grid h-0 grid-cols-2 gap-3 overflow-hidden rounded-md bg-grey-1/70 font-mona text-[0.6rem] font-semibold
        uppercase tracking-wider text-foreground/80 transition-all font-feature-ss01 font-stretch-[115%] group-hover:h-16 
        "
      >
        <p className="self-center text-center opacity-0 blur-sm transition-all group-hover:opacity-100 group-hover:blur-0">
          2020
        </p>
        <p className="self-center opacity-0 blur-sm transition-all group-hover:opacity-100 group-hover:blur-0">
          This is some
        </p>
      </div>
    </div>
  )
}

export function Grid({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("grid w-full grid-cols-8 gap-3", className)}>
      {children}
    </div>
  )
}
