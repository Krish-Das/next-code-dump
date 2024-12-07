import { SprinkleSvg } from "@/components/icons/custom"
import {
  MaterialSymbolsArrowForward,
  MaterialSymbolsGroupOutline,
  MaterialSymbolsUpcomingOutline,
} from "@/components/icons/material-symbols"
import { Grid } from "@/app/test/skills-cards/Cards"

import { Subheading, TertiaryHeading } from "../typography/components/heading"
import Navbar from "../typography/components/navbar"
import { Spacing } from "../typography/components/spacing"
import { Paragraph } from "../typography/components/text"

export default function Page() {
  return (
    <>
      <div className="bg-black">
        <Hero />

        <Spacing size="md" />
        <About />

        <Spacing className="h-56" />
        <Education />

        <Spacing size="lg" />
        <OtherProps />

        <Spacing size="lg" />
        <Interviews />

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

function Education() {
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

function OtherProps() {
  return (
    <Grid className="grid-cols-12 gap-0 px-4">
      {/* FIRST ROW */}
      <div className="col-span-full col-start-1 mb-28 text-center">
        <h2 className="font-mona text-[9vw] font-bold leading-snug tracking-tight text-[#e1e3fc]/50">
          Other props
          <span className="ml-2 font-red20I text-brand-green">:</span>
        </h2>
      </div>

      {/* SECOND ROW */}
      <div className="col-span-3 col-start-3 flex flex-col gap-3">
        <Subheading className="font-semibold text-[#e1e3fc]/50">
          (01) Currently focused
        </Subheading>
        <ul className="text-sm leading-loose">
          <li>Progressive web apps (PWA)</li>
          <li>Native apps</li>
          <li>Web standardization</li>
        </ul>
      </div>

      <div className="col-span-3 flex flex-col gap-3">
        <Subheading className="font-semibold text-[#e1e3fc]/50">
          (02) Technologies
        </Subheading>

        <ul className="text-xs leading-relaxed text-[#e1e3fc]">
          <li>→ Visual Identity</li>
          <li>→ Branding</li>
          <li>→ Art Direction</li>
          <li>→ UI & UX</li>
          <li>→ Digital experience</li>
          <li>→ Motion & INTERACTION</li>
          <li>→ ExperientIal</li>
        </ul>
      </div>

      <div className="col-span-3 flex flex-col gap-3">
        <Subheading className="font-semibold text-[#e1e3fc]/50">
          The Colophone
        </Subheading>

        <p className="max-w-[25ch] text-sm text-[#e1e3fc]/60">
          Ever since I started working with WebGL and Shaders.
        </p>

        <p className="max-w-[31ch] text-xs tracking-wide text-[#e1e3fc]">
          Typography FAKT / DRUK / PLAID MONO Powered by Semplice HACKED by me +
          GOOGLE SEARCH Magic Script by Marco L. Perego
        </p>
      </div>

      {/* THIRD ROW */}
      <div className="col-start-2 -col-end-2 mt-24 flex gap-1 rounded-md border border-white/5 bg-grey-1 p-1">
        {Array.from({ length: 3 }, (_, idx) => (
          <div className="h-80 w-full rounded-md bg-grey-2/80" key={idx} />
        ))}
      </div>
    </Grid>
  )
}

function Interviews() {
  return (
    <>
      <Grid className="grid-cols-12 gap-0 px-8">
        {/* FIRST ROW */}
        <div className="col-span-full col-start-4 mb-28">
          <h2 className="relative w-fit font-mona text-6xl font-bold leading-none tracking-tight text-[#e1e3fc]/50">
            <span className="font-red font-normal">Upcoming</span> Inte
            <span className="tracking-wide">r</span>views
            <span className="absolute right-[0%] top-[20%] size-12 origin-bottom-left -translate-y-1/2 translate-x-2/3 text-brand-green">
              <SprinkleSvg />
            </span>
          </h2>
        </div>

        {/* SECOND ROW */}
        <div className="col-span-3 col-start-4 flex flex-col gap-3">
          <Subheading className="font-semibold text-[#e1e3fc]/50">
            The Colophone
          </Subheading>

          <p className="max-w-[29ch] font-mona text-xs text-[#e1e3fc] font-feature-ss01 font-stretch-[105%]">
            The random, the beautiful, the weird, the temporary, the evergreen.
          </p>
        </div>

        <div className="col-span-3 flex flex-col gap-3 font-mona text-xs text-[#e1e3fc] font-feature-ss01 font-stretch-[105%]">
          <Spacing className="h-4" />

          <p className="max-w-[29ch]">
            Ever since I started working with WebGL and Shaders.
          </p>

          <p className="max-w-[44ch]">
            Over the course of my career, I&apos;ve strived to develop a diverse
            set of core skills. Ever since I started working with WebGL and
            Shaders.
          </p>
        </div>

        {/* THIRD ROW */}
        <div className="col-start-4 -col-end-4 mt-24 gap-1 space-y-1 rounded-md border border-white/5 bg-grey-1 p-1">
          <div
            className="
          pointer-events-none flex h-[15.5rem] touch-none select-none items-center justify-center gap-2
          font-mona text-xs font-semibold uppercase leading-none text-[#666661] font-feature-ss01 font-stretch-[115%]
          [&>svg]:mb-[0.3ch] [&>svg]:text-lg
          "
          >
            <MaterialSymbolsUpcomingOutline />
            <p>No interview yet</p>
          </div>

          <button
            className="inline-flex h-10 w-full items-center justify-center gap-1 rounded bg-grey-2/70 font-mona text-sm
          font-medium text-foreground/80 font-feature-ss01 font-stretch-[105%]
          [&>svg]:text-base [&>svg]:text-foreground/60
          "
          >
            <MaterialSymbolsArrowForward />
            Scedule an Interview
          </button>
        </div>
      </Grid>
    </>
  )
}
