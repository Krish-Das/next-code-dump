"use client"

import { useRef } from "react"

import { MaterialSymbolsBroadcastOnPersonalRounded } from "@/components/icons/material-symbols"
import { Main } from "@/components/layout/mainwrapper"

import WorkCards from "./work-cards"

export default function Page() {
  const triggerRef = useRef<HTMLDivElement>(null)

  return (
    <Main className="space-y-5 p-0">
      <PlaceHolder />

      <section
        className="scroll_trigger h-[300dvh] border-y border-dashed border-border"
        ref={triggerRef}
      >
        <div className="sticky top-0 mx-auto flex h-dvh flex-col items-center justify-center gap-12">
          <div className="space-y-3">
            <p className="flex items-center justify-center gap-1 font-mona text-xs font-semibold uppercase text-foreground/70 font-feature-ss01 font-stretch-[115%]">
              <span className="text-sm">
                <MaterialSymbolsBroadcastOnPersonalRounded />
              </span>
              <span className="_">Knowledge and Skills</span>
            </p>
            <p className="font-mona text-5xl font-bold uppercase font-stretch-80 font-slant-5 font-feature-ss01">
              Work Compilation
            </p>
          </div>

          <WorkCards triggerRef={triggerRef} />
        </div>
      </section>

      <PlaceHolder />

      {/* <section className="flex h-dvh flex-col justify-center space-y-12"> */}
      {/*   <div className="space-y-3 text-center"> */}
      {/*     <p className="flex items-center justify-center gap-1 font-mona text-xs font-semibold uppercase text-foreground/70 font-feature-ss01 font-stretch-[115%]"> */}
      {/*       <span className="text-sm"> */}
      {/*         <MaterialSymbolsBroadcastOnPersonalRounded /> */}
      {/*       </span> */}
      {/*       <span className="_">Knowledge and Skills</span> */}
      {/*     </p> */}
      {/*     <p className="font-mona text-5xl font-bold uppercase font-stretch-80 font-slant-5 font-feature-ss01"> */}
      {/*       Work Compilation */}
      {/*     </p> */}
      {/*     <WorkCards /> */}
      {/*   </div> */}
      {/* </section> */}
    </Main>
  )
}

function PlaceHolder({ children }: { children?: React.ReactNode }) {
  return (
    <section className="h-[50dvh]s grid h-screen place-items-center">
      {children}
    </section>
  )
}
