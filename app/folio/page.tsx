import { MaterialSymbolsBroadcastOnPersonalRounded } from "@/components/icons/material-symbols"
import { Main } from "@/components/layout/mainwrapper"

import WorkCards from "./work-cards"

export default function Page() {
  return (
    <Main className="space-y-5 p-0">
      <section className="flex h-dvh flex-col justify-center space-y-12">
        <div className="space-y-3 text-center">
          <p className="flex items-center justify-center gap-1 font-mona text-xs font-semibold uppercase text-foreground/70 font-feature-ss01 font-stretch-[115%]">
            <span className="text-sm">
              <MaterialSymbolsBroadcastOnPersonalRounded />
            </span>
            <span className="_">Knowledge and Skills</span>
          </p>
          <p className="font-mona text-5xl font-bold uppercase font-stretch-80 font-slant-5 font-feature-ss01">
            Work Compilation
          </p>

          <WorkCards />
        </div>
      </section>
    </Main>
  )
}
