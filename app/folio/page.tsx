"use client"

import { useRef } from "react"

import { MaterialSymbolsBroadcastOnPersonalRounded } from "@/components/icons/material-symbols"
import { Main } from "@/components/layout/mainwrapper"

import WorkCards from "./work-cards"

export default function Page() {
  const targetRef = useRef<HTMLDivElement>(null)

  return (
    <Main className="space-y-5 p-0">
      <PlaceHolder>Hero</PlaceHolder>

      <section
        className="scroll_trigger h-[250vh] border-y border-dashed border-border"
        ref={targetRef}
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

          <WorkCards targetRef={targetRef} />
        </div>
      </section>

      <PlaceHolder>Footer</PlaceHolder>
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
