import Link from "next/link"

import { cn } from "@/lib/utils"
import {
  MaterialSymbolsArrowForward,
  MaterialSymbolsCircle,
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

      <Space className="h-[50vh]" />

      <BgLines />
    </>
  )
}

function About() {
  return (
    <Grid className="gap-y-16">
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
    <Grid className="gap-y-8">
      <Subheading className="col-span-2 col-start-4">
        <MaterialSymbolsCircle />
        Shaders Light effects
      </Subheading>

      <Heading className="col-span-3 col-start-4">Education</Heading>

      <Para className="col-span-3 col-start-4">
        Over the course of my career, <br />
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
            <div className="h-full w-full rounded-md bg-grey-3" />
          </div>
        ))}
      </Grid>
    </Grid>
  )
}

function Skills() {
  return (
    <Grid className="gap-y-8">
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

      <Grid className="col-start-2 -col-end-2 grid-cols-6 gap-1.5">
        <div className="col-span-4 h-56 w-full rounded-md border-2 border-grey-2 bg-grey-1 p-1" />
        <div className="col-span-2 h-56 w-full rounded-md border-2 border-grey-2 bg-grey-1 p-1" />
        <div className="col-span-full h-80 w-full rounded-md border-2 border-grey-2 bg-grey-1 p-1" />
      </Grid>
    </Grid>
  )
}
