import { MaterialSymbolsCircle } from "@/components/icons/material-symbols"
import { Grid } from "@/app/test/skills-cards/Cards"

import { GambarinoEm } from "../about/child"

export default function Child() {
  return (
    <section className="container flex min-h-screen flex-col items-center justify-center gap-6 p-0">
      <div className="h-[30vh]" />

      <Grid className="">
        <div className="col-span-full col-start-4 space-y-8">
          <Subheading />
          <p className="max-w-[41ch] text-sm text-foreground/90">
            Over the course of <GambarinoEm>my career</GambarinoEm>,<br />
            I&apos;ve strived to develop a <GambarinoEm>
              diverse
            </GambarinoEm>{" "}
            set of core skills.
            <br />
            Ever since I started working with{" "}
            <GambarinoEm>WebGL and Shaders</GambarinoEm>.
          </p>
          <h2 className="font-gambarino text-5xl leading-[1.8]">Education</h2>
        </div>
      </Grid>

      <Grid className="">
        <div className="col-span-4 col-start-3 grid grid-cols-2 gap-3">
          {Array.from({ length: 2 }, (_, idx) => (
            <div
              className="h-96 w-full rounded-md border-2 border-grey-2 bg-grey-1 p-1"
              key={idx}
            >
              <div className="h-full w-full rounded-md bg-grey-3" />
            </div>
          ))}
        </div>
      </Grid>

      <div className="h-[30vh]" />
    </section>
  )
}

function Subheading() {
  return (
    <div className="flex gap-1">
      <MaterialSymbolsCircle className="text-brand-green" />
      <p className="font-mona text-xs font-semibold uppercase tracking-wider font-feature-ss01 font-stretch-[115%]">
        Shaders Light effects
      </p>
    </div>
  )
}
