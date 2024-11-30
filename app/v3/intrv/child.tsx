import {
  MaterialSymbolsArrowForward,
  MaterialSymbolsUpcomingOutline,
} from "@/components/icons/material-symbols"

import { Grid, Heading, Space, Subheading } from "../combined/components"

export default function Child() {
  return (
    <>
      <Space />

      <Grid className="gap-y-8">
        <Subheading className="col-span-2 col-start-4 text-brand-green">
          <MaterialSymbolsArrowForward />
          Shaders Light effects
        </Subheading>

        <Heading className="col-span-3 col-start-4">Interviews</Heading>

        <div className="col-span-4 col-start-3 space-y-3 rounded-md border-2 border-grey-2 bg-grey-1 p-3">
          <div
            className="flex h-40 items-center justify-center gap-2 font-mona text-xs font-semibold uppercase leading-none text-[#666661]
            font-feature-ss01 font-stretch-[115%] [&>svg]:mb-[0.3ch] [&>svg]:text-lg"
            // "bg-grey-2 border-2 border-grey-3 rounded-md"
          >
            <MaterialSymbolsUpcomingOutline />
            <p>No interviews yet</p>
          </div>

          <button className="inline-flex h-12 w-full items-center justify-center gap-1.5 rounded-md bg-[#F3FEEF] text-[#051401] [&>svg]:text-lg">
            <MaterialSymbolsArrowForward />
            Scedule an Interview
          </button>
        </div>
      </Grid>

      <Space />
    </>
  )
}
