import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  MaterialSymbolsArrowForward,
  MaterialSymbolsBook4Spark,
  MaterialSymbolsCircle,
  MaterialSymbolsCircleOutline,
  MaterialSymbolsInterpreterMode,
  MaterialSymbolsRectangleRounded,
  MaterialSymbolsUpcomingOutline,
} from "@/components/icons/material-symbols"
import { BgLines } from "@/app/test/int/Component"

import { Grid, Heading, Para, Space, Subheading } from "./components"

export default function Page() {
  return (
    <>
      {/* <Nav /> */}

      <Space className="h-[90vh]" />
      <About />

      <Space className="h-[80vh]" />
      <Education />

      <Space />
      <Skills />

      <Space />
      <Interviews />

      <Space className="h-[50vh]" />

      <BgLines />
    </>
  )
}

function __Extra__() {
  return (
    <>
      <Space />

      <Grid className="h-screen place-items-end gap-y-8 bg-grn-1 text-brand-green">
        <h2 className="col-span-full w-full font-mona text-[10vw] font-semibold uppercase leading-none font-stretch-80 font-slant-5">
          What do I do
        </h2>
      </Grid>
    </>
  )
}

function About() {
  return (
    <Grid className="container gap-y-16 p-0">
      <Para className="col-span-3 col-start-4">
        Over the course of <em>my career</em>, <br />
        I&apos;ve strived to develop a <em>diverse</em> set of core skills.
        <br />
        Ever since I started working with <em>WebGL and Shaders</em>.
      </Para>

      <Para className="col-span-3 col-start-4">
        Hi! I&apos;m Maxime, a frontend engineer based in New York. Welcome to
        my corner of the Internet, where I showcase my work, craft,{" "}
        <em>unfinished or imperfect projects</em>, and the many other things
        I&apos;m exploring.
      </Para>

      <Para className="col-span-3 col-start-4">
        Ever since I started working with <em>WebGL and Shaders</em>.
      </Para>
    </Grid>
  )
}

function Education() {
  return (
    <Grid className="container gap-y-5 p-0 [&>*:last-child]:mt-3">
      <Subheading className="col-span-2 col-start-4">
        <MaterialSymbolsBook4Spark />
        University Performance
      </Subheading>

      <Heading className="col-span-3 col-start-4">Academics</Heading>

      <Para className="col-span-3 col-start-4 text-foreground/80">
        Ive strived to develop a diverse set of core skills.
        <br />
        Ever since I started working with <em>WebGL and Shaders</em>.
      </Para>

      <Grid className="col-start-2 -col-end-2 grid-cols-6 gap-1.5">
        {Array.from({ length: 2 }, (_, idx) => (
          <div
            className={cn(
              "col-span-2 h-96 rounded-md border-2 border-grey-2 bg-grey-1 p-1",
              idx === 0 && "col-start-2"
            )}
            key={idx}
          >
            <div className="grid h-full w-full place-items-center rounded-md bg-grey-3">
              <p className="font-mona text-xs font-semibold uppercase leading-none text-[#666661] font-feature-ss01 font-stretch-[115%]">
                CGPA goes here
              </p>
            </div>
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

function Skills() {
  return (
    <Grid className="container gap-y-5 p-0 [&>*:last-child]:mt-3">
      <Subheading className="col-span-2 col-start-4 hidden">
        <MaterialSymbolsCircle />
        Space and Rocket
      </Subheading>

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

      <Grid className="col-start-2 -col-end-2 grid-cols-6 gap-1.5 rounded-md border-2 border-grey-2 bg-grey-1 p-2">
        <div className="col-span-4 grid h-56 w-full place-items-center rounded-md border-2 border-grey-3 bg-grey-2 p-1 text-lg">
          <MaterialSymbolsRectangleRounded />
        </div>
        <div className="col-span-2 grid h-56 w-full place-items-center rounded-md border-2 border-grey-3 bg-grey-2 p-1 text-lg">
          <MaterialSymbolsCircleOutline />
        </div>

        <Grid className="col-span-full grid-cols-3 gap-0 rounded-md border border-grey-2 bg-grey-1 text-foreground/70">
          {Array.from({ length: 6 }, (_, idx) => (
            <div
              key={idx}
              className={cn(
                "inline-flex h-32 w-full items-center justify-center",
                idx % 3 !== 0 && "border-l border-l-grey-2",
                idx < 3 && "border-b border-b-grey-2"
              )}
            >
              {idx % 2 === 0 ? (
                <MaterialSymbolsRectangleRounded />
              ) : (
                <MaterialSymbolsCircle />
              )}
            </div>
          ))}
        </Grid>
      </Grid>
    </Grid>
  )
}

function Interviews() {
  return (
    <Grid className="container gap-y-5 p-0 [&>*:last-child]:mt-3">
      <Subheading className="col-span-2 col-start-4">
        <MaterialSymbolsInterpreterMode />
        Interview Updates
      </Subheading>

      <Heading className="col-span-3 col-start-4">Interviews</Heading>

      <div className="col-span-4 col-start-3 space-y-3 rounded-md border-2 border-grey-2 bg-grey-1 p-2">
        <div
          className="
          pointer-events-none flex h-40 touch-none select-none items-center justify-center gap-2 rounded-md border-2 border-grey-3
          bg-grey-2 font-mona text-xs font-semibold uppercase leading-none text-[#666661] font-feature-ss01 font-stretch-[115%]
          [&>svg]:mb-[0.3ch] [&>svg]:text-lg
          "
        >
          <MaterialSymbolsUpcomingOutline />
          <p>No interview yet</p>
        </div>

        <button className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-md bg-[#F3FEEF] text-[#051401] [&>svg]:text-lg">
          <MaterialSymbolsArrowForward />
          Scedule an Interview
        </button>
      </div>
    </Grid>
  )
}
