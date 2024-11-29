import Link from "next/link"

import {
  MaterialSymbolsArrowForward,
  MaterialSymbolsCircle,
} from "@/components/icons/material-symbols"
import { Grid } from "@/app/test/skills-cards/Cards"

import { GambarinoEm } from "../about/child"

export default function Child() {
  return (
    <section className="container flex min-h-screen flex-col items-center justify-center gap-8 p-0">
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
        </div>
      </Grid>

      <Grid>
        <h2 className="col-span-3 col-start-3 font-gambarino text-5xl leading-[1.8]">
          Known Technologies
        </h2>
        <div className="col-start-7 inline-flex items-center justify-end">
          <Link
            href="#"
            className="inline-flex h-fit items-center gap-2 rounded-md bg-grn-1 px-2.5 py-1 pr-2 font-gambarino text-sm text-[#E2FCDB] [&>svg]:text-base [&>svg]:text-brand-green"
          >
            Do something
            <MaterialSymbolsArrowForward />
          </Link>
        </div>
      </Grid>

      <Grid className="gap-1.5">
        <div className="col-span-4 col-start-2 h-56 w-full rounded-md border-2 border-grey-2 bg-grey-1 p-1" />
        <div className="col-span-2 h-56 w-full rounded-md border-2 border-grey-2 bg-grey-1 p-1" />
        <div className="col-start-2 -col-end-2 h-80 w-full rounded-md border-2 border-grey-2 bg-grey-1 p-1" />
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
        Space and Rocket
      </p>
    </div>
  )
}
