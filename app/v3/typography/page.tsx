import { MaterialSymbolsBook4Spark } from "@/components/icons/material-symbols"

import {
  DualFontHeading,
  PrimaryHeading,
  Subheading,
  TertiaryHeading,
} from "./components/heading"
import { Spacing } from "./components/spacing"
import { Paragraph } from "./components/text"

export default function Page() {
  return (
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

        <div className="h-80 w-[50vw] rounded-md bg-grey-2" />
      </section>

      <Spacing size="lg" />
    </div>
  )
}
