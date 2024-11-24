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
        <SkillCards isHovering />
        <SkillCards />
      </Grid>
    </section>
  )
}
function SkillCards({
  className,
  isHovering,
}: {
  className?: string
  isHovering?: boolean
}) {
  return (
    <div
      className={cn(
        "col-span-2 flex h-[30rem] w-full flex-col gap-1.5 rounded-md border border-grey-1 bg-grey-1/20 p-1.5",
        className
      )}
    >
      <div className="grid flex-1 place-items-center rounded text-foreground/80">
        <MaterialSymbolsRectangleRounded />
      </div>
      {isHovering && (
        <div
          className="grid h-16 grid-cols-2 gap-3 rounded-md bg-grey-1
        font-mona text-[0.6rem] font-semibold uppercase tracking-wider text-foreground/80 font-feature-ss01 font-stretch-[115%]
        "
        >
          <p className="self-center text-center">2020</p>
          <p className="self-center">
            This is some
          </p>
        </div>
      )}
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
