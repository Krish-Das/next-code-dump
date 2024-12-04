import { cn } from "@/lib/utils"
import {
  MaterialSymbolsArrowForward,
  MaterialSymbolsBook4Spark,
  MaterialSymbolsChevronRight,
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

        <Hero />

        <Spacing size="section" />

        <DisplayText />

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
            <span className="relative ml-[3ch]">
              <span className="absolute left-0 top-0 -translate-x-12 translate-y-1 font-gambarino text-7xl">
                *
              </span>
              Good at
            </span>
          </PrimaryHeading>

          <Spacing size="md" />

          <TertiaryHeading className="text-[#CDFCBC]" textSmall>
            Moebius-Style post-processing
          </TertiaryHeading>

          <Spacing />

          <div className="flex items-center justify-center gap-1">
            {/* <div */}
            {/*   className="inline-grid h-80 w-72 place-items-center rounded-md bg-grey-1 bg-cover bg-center" */}
            {/*   style={{ */}
            {/*     backgroundImage: "url('/images/bg-gradient-light.jpg')", */}
            {/*   }} */}
            {/* > */}
            {/*   <Subheading className="text-black/30">CGPA goes here</Subheading> */}
            {/* </div> */}

            <div className="inline-grid h-80 w-72 place-items-center rounded-md bg-grey-1">
              <Subheading className="text-foreground/20">
                CGPA goes here
              </Subheading>
            </div>

            <div className="inline-grid h-80 w-72 place-items-center rounded-md bg-grey-1">
              <Subheading className="text-foreground/20">
                CGPA goes here
              </Subheading>
            </div>
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
                Schedule an Interview
              </button>
            </div>
          </Grid>
        </section>

        <Spacing className="h-[60vh]" />

        <Works />

        <Spacing size="section" />

        <LastSection />

        <Footer />
      </div>
    </>
  )
}

function DisplayText() {
  return (
    <div
      className="light flex min-h-screen w-full flex-col justify-center bg-[#989bee] bg-cover bg-center pt-32 text-center text-foreground"
      // style={{
      //   backgroundImage: "url('/images/bg-gradient-light.jpg')",
      // }}
    >
      <h2 className="font-mona text-5xl font-medium uppercase font-stretch-[105%] [&>em]:font-redI [&>em]:not-italic">
        Crafting code, <br />
        Building worlds, <br />
        <em>Chasing knowledge. </em>
        <br />
        The developer journey <br />
        is <em>just beginning. </em>
        <br />
        About <em>anything other </em>
        <br />
        than something!
      </h2>

      <Spacing size="section" />

      <Paragraph center className="font-medium text-foreground/80">
        Over the course of my career, I&apos;ve
        <br /> strived to develop a diverse set of core skills.
        <br /> Ever since I started working with WebGL and Shaders.
      </Paragraph>
    </div>
  )
}

function Works() {
  const WorkImage = ({
    className,
    url,
    noButton,
  }: {
    className?: string
    url: string
    noButton?: boolean
  }) => {
    return (
      <div
        className={cn(
          // "h-full w-full rounded-md bg-grey-1 bg-cover bg-center ring ring-inset ring-foreground/[0.08]",
          "group flex h-full w-full flex-col gap-1",
          noButton ? "p-0" : "rounded-md border border-white/5 bg-grey-1 p-1",
          className
        )}
      >
        <div
          className={cn(
            "h-full w-full flex-1 bg-black bg-cover bg-center",
            noButton
              ? "rounded-md ring ring-inset ring-foreground/[0.08]"
              : "rounded"
          )}
          style={{ backgroundImage: `url(${url})` }}
        />
        {!noButton && (
          <button
            className="inline-flex h-10 w-full items-center justify-center gap-1 rounded bg-grey-2/70 font-mona text-sm
          font-medium text-foreground/80 transition-all ease-in-out font-feature-ss01 font-stretch-[105%] hover:bg-grey-2
          [&>svg]:text-base [&>svg]:text-foreground/60 [&>svg]:hover:translate-x-1 [&>svg]:hover:text-foreground/100
          "
          >
            View production <MaterialSymbolsArrowForward />
          </button>
        )}
      </div>
    )
  }

  return (
    <>
      <div className="p-3">
        <DualFontHeading
          className="text-center text-[10vw] leading-none tracking-tight"
          noMask
        >
          Some <em>selected works.</em>
        </DualFontHeading>
      </div>

      <Grid className="h-screen gap-2 p-3">
        <WorkImage
          className="col-span-2 row-span-2"
          url="https://d2w9rnfcy7mm78.cloudfront.net/26440348/original_dbb3390e4225410854c036cd80c12e8d.gif?1708347273"
          noButton
        />

        <WorkImage
          className="col-span-4"
          url="https://d2w9rnfcy7mm78.cloudfront.net/31524027/original_681ae5bf6a0242376ef58bfc0fef84d0.gif?1729249292"
        />

        <WorkImage
          className="col-span-2"
          url="https://i.pinimg.com/736x/4f/64/3b/4f643b7e375326b5fb0c756e7f0ad28f.jpg"
        />

        <WorkImage
          className="col-span-full col-start-3"
          url="https://i.pinimg.com/originals/9b/ff/65/9bff65fd363983c023476244acf811f5.gif"
          noButton
        />
      </Grid>
    </>
  )
}

function LastSection() {
  return (
    <section
      className="flex h-[30rem] w-full flex-col justify-center gap-16 bg-cover bg-center text-black"
      style={{
        backgroundImage: "url('/images/bg-gradient-light.jpg')",
      }}
    >
      <Grid className="px-8">
        <PrimaryHeading className="col-span-3 col-start-2">
          Let&apos;s just <br />
          work together.
        </PrimaryHeading>

        <Paragraph className="col-span-full col-start-6 font-medium text-black/70">
          Over the course of my career, I&apos;ve
          <br /> strived to develop a diverse set of core skills.
          <br /> Ever since I started working with WebGL and Shaders.
        </Paragraph>
      </Grid>

      <Grid className="px-8">
        <div className="col-start-2 -col-end-2 space-x-5">
          <button
            className="
                inline-flex h-12 items-center justify-center gap-1.5 rounded-md
                bg-black px-6 font-medium text-white [&>svg]:text-lg
                "
          >
            <MaterialSymbolsArrowForward />
            Schedule an Interview
          </button>

          <button
            className="
                inline-flex items-center gap-1.5 rounded-md
                font-medium
                "
          >
            Do something else
            <MaterialSymbolsChevronRight />
          </button>
        </div>
      </Grid>
    </section>
  )
}

function Hero() {
  return (
    <section className="grid h-screen place-items-center">
      <Subheading className="text-foreground/30">Hero not done yet!</Subheading>

      {/* <button */}
      {/*   className="rounded-full bg-cover bg-center px-4 py-3 text-black" */}
      {/*   style={{ */}
      {/*     backgroundImage: "url('/images/bg-gradient-light.jpg')", */}
      {/*   }} */}
      {/* > */}
      {/*   <TertiaryHeading textSmall className="font-medium"> */}
      {/*     Scroll down */}
      {/*   </TertiaryHeading> */}
      {/* </button> */}
    </section>
  )
}

function Footer() {
  return (
    <>
      <Grid className="container w-full gap-0 p-0 text-foreground/60">
        <footer className="container col-start-1 -col-end-1 inline-grid h-48 w-full place-items-center bg-grey-2 p-0">
          <Subheading>Footer goes here</Subheading>
        </footer>
        <Spacing className="col-span-full col-start-1 h-[5.05rem] bg-gradient-to-b from-grey-2 to-grey-2/50" />
      </Grid>
    </>
  )
}
