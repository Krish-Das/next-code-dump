import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  MaterialSymbolsArrowForward,
  MaterialSymbolsCircle,
} from "@/components/icons/material-symbols"
import { BgLines } from "@/app/test/int/Component"

import { Grid, Heading, Para, Subheading } from "./components"

export default function Page() {
  return (
    <>
      {/* <Nav /> */}

      <Child />

      <BgLines />
    </>
  )
}

function Child() {
  return (
    <>
      <Grid className="gap-y-8 bg-grn-2/20">
        <Subheading className="col-span-2 col-start-4">
          <MaterialSymbolsCircle />
          Shaders Light effects
        </Subheading>

        <Para className="col-span-3 col-start-4">
          Over the course of my career, <br />
          Ive strived to develop a diverse set of core skills.
          <br />
          Ever since I started working with <em>WebGL and Shaders</em>.
        </Para>

        <Heading className="col-span-3 col-start-4">Education</Heading>

        <Grid className="col-start-2 -col-end-2 grid-cols-6 gap-1.5">
          {Array.from({ length: 2 }, (_, idx) => (
            <div
              className={cn(
                "col-span-2 h-96 rounded-md border-2 border-grey-2 bg-grey-1 p-1",
                idx === 0 && "col-start-2"
              )}
              key={idx}
            >
              <div className="h-full w-full rounded-md bg-grey-3" />
            </div>
          ))}
        </Grid>
      </Grid>

      <Grid className="gap-y-8 bg-grn-2/20">
        <Subheading className="col-span-2 col-start-4">
          <MaterialSymbolsCircle />
          Space and Rocket
        </Subheading>

        <Para className="col-span-3 col-start-4">
          Over the course of my career, <br />
          Ive strived to develop a diverse set of core skills.
          <br />
          Ever since I started working with <em>WebGL and Shaders</em>.
        </Para>

        <Heading className="col-span-3 col-start-3">Known Technologies</Heading>

        <div className="inline-flex items-center justify-end">
          <Link
            href="#"
            className="inline-flex h-fit items-center gap-2 rounded-md bg-grn-1 px-2.5 py-1 pr-2 font-gambarino text-sm text-[#E2FCDB] [&>svg]:text-base [&>svg]:text-brand-green"
          >
            Do something
            <MaterialSymbolsArrowForward />
          </Link>
        </div>

        <Grid className="col-start-2 -col-end-2 grid-cols-6 gap-1.5">
          <div className="col-span-4 h-56 w-full rounded-md border-2 border-grey-2 bg-grey-1 p-1" />
          <div className="col-span-2 h-56 w-full rounded-md border-2 border-grey-2 bg-grey-1 p-1" />
          <div className="col-span-full h-80 w-full rounded-md border-2 border-grey-2 bg-grey-1 p-1" />
        </Grid>
      </Grid>
    </>
  )
}
