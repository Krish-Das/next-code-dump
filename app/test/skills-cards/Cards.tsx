import { cn } from "@/lib/utils"

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
        "col-span-2 h-[30rem] w-full rounded-md border border-grey-1 bg-grey-1/20",
        className
      )}
    />
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
