import {
  MaterialSymbolsArrowForward,
  MaterialSymbolsBook4Spark,
  MaterialSymbolsUpcomingOutline,
} from "@/components/icons/material-symbols"
import { Grid } from "@/app/test/skills-cards/Cards"

import {
  DualFontHeading,
  PrimaryHeading,
  Subheading,
  TertiaryHeading,
} from "./components/heading"
import Navbar from "./components/navbar"
import { Spacing } from "./components/spacing"
import { Paragraph } from "./components/text"

export default function Page() {
  return (
    <>
      <Navbar />

      <div className="bg-black">
        {/* <div className="h-24 w-96 rounded-md bg-grey-2" /> */}

        <Spacing size="section" />

        <section className="flex flex-col items-center">
          <TertiaryHeading className="text-[#CDFCBC]" textSmall>
            Moebius-Style post-processing
          </TertiaryHeading>

          <Spacing size="sm" />

          <Paragraph center>
            Over the course of my career, I&apos;ve
            <br /> strived to develop a diverse set of core skills.
            <br /> Ever since I started working with WebGL and Shaders.
          </Paragraph>
        </section>

        <Spacing size="lg" />

        <section className="flex flex-col items-center">
          <Subheading>
            <MaterialSymbolsBook4Spark />
            Skills at disposal
          </Subheading>

          <Spacing />

          <PrimaryHeading>
            What we&apos;re
            <br />
            <span className="ml-[3ch]">Good at</span>
          </PrimaryHeading>

          <Spacing size="md" />

          <TertiaryHeading className="text-[#CDFCBC]" textSmall>
            Moebius-Style post-processing
          </TertiaryHeading>

          <Spacing />

          <div className="flex items-center justify-center gap-1">
            <div className="h-80 w-72 rounded-md bg-grey-1" />
            <div className="h-80 w-72 rounded-md bg-grey-1" />
          </div>
        </section>

        <Spacing size="section" />

        <section className="flex flex-col items-center">
          <Subheading className="text-[#CDFCBC]">
            <MaterialSymbolsBook4Spark />
            Skills at disposal
          </Subheading>

          <DualFontHeading>
            Known <em>technologies.</em>
          </DualFontHeading>

          <Spacing />

          <div className="mb-1 flex h-48 w-[50vw] items-center justify-center gap-1">
            <div className="h-full w-1/2 rounded-md border-2 border-grey-3 bg-grey-2" />
            <div className="h-full w-1/2 rounded-md border-2 border-grey-2 bg-grey-1" />
          </div>
          <div className="h-56 w-[50vw] rounded-md border-2 border-grey-2 bg-grey-1" />
        </section>

        <Spacing size="section" />

        <section className="flex flex-col items-center">
          <Subheading className="text-[#CDFCBC]">
            <MaterialSymbolsBook4Spark />
            Skills at disposal
          </Subheading>

          <DualFontHeading>
            Upcoming <em>interviews.</em>
          </DualFontHeading>

          <Spacing />

          {/* <div className="h-80 w-[50vw] rounded-md bg-grey-2" /> */}
          <Grid className="container w-full p-0">
            <div className="col-span-4 col-start-3 space-y-3 rounded-md border-2 border-grey-2 bg-grey-1 p-2">
              <div
                className="
              pointer-events-none flex h-40 touch-none select-none items-center justify-center gap-2
              font-mona text-xs font-semibold uppercase leading-none text-[#666661] font-feature-ss01 font-stretch-[115%]
              [&>svg]:mb-[0.3ch] [&>svg]:text-lg
              "
              >
                <MaterialSymbolsUpcomingOutline />
                <p>No interview yet</p>
              </div>

              <button
                className="
                inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-md
                bg-gradient-to-t from-[#B5B5B5] to-[#D2D2D2] font-medium text-[#0A0A0A] [&>svg]:text-lg
                "
              >
                <MaterialSymbolsArrowForward />
                Scedule an Interview
              </button>
            </div>
          </Grid>
        </section>

        <Spacing size="lg" />
      </div>
    </>
  )
}
