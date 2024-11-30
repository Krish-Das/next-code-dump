import { cn } from "@/lib/utils"
import { MaterialSymbolsArrowForward } from "@/components/icons/material-symbols"

import { Grid } from "../skills-cards/Cards"

export default function Component() {
  return (
    <>
      <section className="bg-[#040507]s flex min-h-lvh flex-col justify-center gap-14">
        <Grid className="">
          <h3
            className="
            col-span-2 col-start-4 font-mona text-4xl font-bold uppercase
            leading-[0.9] text-foreground/80 font-stretch-80 font-slant-5 font-feature-ss01
            "
          >
            Given <br />
            Interviews
          </h3>
        </Grid>

        <InterviewsList />

        <BgLines />
      </section>
    </>
  )
}
const InterviewsList = () => {
  const interviwes = [
    "Moebius-Style post-procossing",
    "Everything about Framer Motion animations",
    "Refactor Dispersion light effects",
    // "The study of shaders with React Three Fiber",
  ]

  return (
    <div className="flex w-full flex-col items-center justify-center gap-2.5">
      {interviwes.map((text, idx) => (
        <div
          className="flex w-[26rem] items-center gap-3 rounded-sm border-2 border-[#3a3a39]/20 bg-[#262625]/70 p-3 backdrop-blur-sm"
          key={idx}
        >
          <div className="grid size-5 place-items-center rounded-full bg-[#3562F3]">
            <MaterialSymbolsArrowForward />
          </div>
          <p className="flex-1 font-inter text-sm text-foreground/90">{text}</p>
          <p className="font-mona text-xs font-semibold text-foreground/40 font-stretch-110">
            2032
          </p>
        </div>
      ))}
      <div className="flex w-[26rem] items-center gap-3 rounded-sm bg-[#3562F3] p-3 py-4">
        <div className="ml-0.5 grid size-5 place-items-center rounded-full">
          <MaterialSymbolsArrowForward />
        </div>
        <p className="flex-1 font-inter text-sm text-foreground">
          Here goes a CTA
        </p>
      </div>
    </div>
  )
}

export const BgLines = ({ className }: { className?: string }) => {
  const Lines = ({
    isFirst,
    offset,
  }: {
    isFirst?: boolean
    offset: number
  }) => {
    const startOffset = ((offset + 3) % 2) * 15
    const endOffset = 100 - Math.min((offset % 3) * 5, 100)

    return (
      <div
        className={cn(
          "h-full w-full border-grn-2",
          isFirst ? "col-start-5 border-l" : "border-r"
        )}
        style={{
          maskImage: `linear-gradient(in oklab, transparent ${startOffset}%, white, transparent ${endOffset}%)`,
        }}
      />
    )
  }

  return (
    <Grid className={cn("fixed inset-0 -z-[1] bg-black", className)}>
      {Array.from({ length: 3 }, (_, idx) => (
        <Lines key={idx} isFirst={idx === 0} offset={idx} />
      ))}
    </Grid>
  )
}
