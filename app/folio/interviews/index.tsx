import { cn } from "@/lib/utils"
import {
  MaterialSymbolsBroadcastOnPersonalRounded,
  MaterialSymbolsPlayArrowRounded,
} from "@/components/icons/material-symbols"

export default function Interviews() {
  return (
    <section className="mx-auto mt-[100vh] flex h-dvh flex-col items-center justify-center gap-12">
      <div className="space-y-3">
        <p className="flex items-center justify-center gap-1 font-mona text-xs font-semibold uppercase text-foreground/70 font-feature-ss01 font-stretch-[115%]">
          <span className="text-sm">
            <MaterialSymbolsBroadcastOnPersonalRounded />
          </span>
          <span className="_">Knowledge and Skills</span>
        </p>
        <h2 className="font-mona text-5xl font-bold uppercase font-stretch-80 font-slant-5 font-feature-ss01">
          Interviews I&apos;ve given
        </h2>
      </div>

      <div className="flex w-full items-center justify-center gap-5">
        <InterviewVideo size="narrow" />
        <InterviewVideo size="wide" />
      </div>
    </section>
  )
}

function InterviewVideo({ size }: { size: "narrow" | "wide" }) {
  return (
    <div
      className={cn(
        "grid place-items-center rounded-md bg-grey-1",
        size === "narrow" && "h-full w-80",
        size === "wide" && "aspect-[3/2] w-[41.5rem]"
      )}
    >
      <span className="grid size-14 place-items-center rounded-full bg-grey-2 text-3xl text-muted-foreground">
        <MaterialSymbolsPlayArrowRounded />
      </span>
    </div>
  )
}
