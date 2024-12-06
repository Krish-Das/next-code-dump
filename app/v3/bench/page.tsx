import { MaterialSymbolsGroupOutline } from "@/components/icons/material-symbols"

import { Subheading, TertiaryHeading } from "../typography/components/heading"
import Navbar from "../typography/components/navbar"
import { Spacing } from "../typography/components/spacing"
import { Paragraph } from "../typography/components/text"

export default function Page() {
  return (
    <>
      <div className="bg-black">
        {/* <Hero /> */}

        {/* <Spacing size="md" /> */}

        {/* <About /> */}
        {/* <Spacing size="nav" /> */}

        <Spacing size="section" />
        <EdDisplay />
        <Spacing size="nav" />
      </div>

      <Navbar />
    </>
  )
}

function Hero() {
  return (
    <section className="grid h-screen place-items-center">
      <Subheading className="text-foreground/30">Hero not done yet!</Subheading>
    </section>
  )
}

function About() {
  return (
    <section className="flex flex-col items-center text-center">
      <Subheading className="font-semibold text-[#c1c4ea]/80 [&>svg]:text-base">
        <MaterialSymbolsGroupOutline />
        Something about
      </Subheading>

      <Spacing className="h-6" />
      <h2 className="font-redI text-xl">
        Multi-disciplinary interactive developer & apprentice designer <br />
        based in Ecuador. With 4 years of experience in multidisciplinary <br />
        development. Currently working for companies worldwide. <br />
      </h2>

      <Spacing className="h-28" />
      <Paragraph
        center
        className="font-medium leading-snug text-foreground/60
        [&>em]:font-redI [&>em]:text-base [&>em]:not-italic [&>em]:leading-none [&>em]:text-foreground
        "
      >
        Over the course of <em>my career</em>, I&apos;ve
        <br /> strived to develop a <em>diverse</em> set of core skills.
        <br /> Ever since I started working with <em>WebGL and Shaders</em>.
      </Paragraph>

      <Spacing className="h-8" />
      <div className="relative w-fit rounded-md border border-white/5 bg-grey-1 p-1">
        <div
          className="h-80 w-[40.5rem] rounded-md bg-[#a0a3ef] bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://i.pinimg.com/1200x/38/b4/73/38b473e8f7ec4ae7bcce29b122e38904.jpg')",
          }}
        />

        <span className="pointer-events-none absolute bottom-3.5 left-3.5 touch-none select-none rounded bg-grey-1/40 px-2 py-1 text-xs font-medium uppercase leading-none backdrop-blur-md">
          On 2005
        </span>
      </div>
    </section>
  )
}

function EdDisplay() {
  return (
    <>
      <section className="">
        {/* // TODO: fix the screen-reader */}
        <h3 className="relative isolate flex flex-col text-center text-[9vw] leading-[0.84] tracking-tight text-[#e1e3fc]/50">
          <span className="font-red">Education like</span>{" "}
          <span className="font-mona font-semibold font-slant-[8]">
            never seen before
          </span>
          <span className="absolute bottom-[-13%] right-[35%] h-fit font-red10I text-[25vw] font-normal not-italic leading-[0] text-brand-green mix-blend-lighten">
            *
          </span>
        </h3>
      </section>

      <Spacing size="section" />

      <section>
        <TertiaryHeading className="text-center text-[#CDFCBC]" textSmall>
          Moebius-Style post-processing
        </TertiaryHeading>

        <Spacing size="sm" />

        <div className="flex items-center justify-center gap-3">
          <div className="inline-grid h-[21rem] w-72 place-items-center rounded-md bg-grey-1">
            <Subheading className="text-foreground/20">
              CGPA goes here
            </Subheading>
          </div>

          <div className="inline-grid h-[21rem] w-72 place-items-center rounded-md bg-grey-1">
            <Subheading className="text-foreground/20">
              CGPA goes here
            </Subheading>
          </div>
        </div>
      </section>
    </>
  )
}
