import { MaterialSymbolsBroadcastOnPersonalRounded } from "@/components/icons/material-symbols"
import { Main } from "@/components/layout/mainwrapper"

export default function Page() {
  return (
    <Main className="space-y-5 p-0">
      <section className="flex h-dvh flex-col justify-center space-y-12">
        <div className="space-y-3 text-center">
          <p className="font-feature-ss01 font-stretch-[115%] font-mona flex items-center justify-center gap-1 text-xs font-semibold uppercase text-foreground/70">
            <span className="text-sm">
              <MaterialSymbolsBroadcastOnPersonalRounded />
            </span>
            <span className="_">Knowledge and Skills</span>
          </p>
          <p className="font-feature-ss01 font-slant-5 font-stretch-80 font-mona text-5xl font-bold uppercase">
            Work Compilation
          </p>
        </div>

        <div className="flex items-center justify-center gap-5">
          <div className="h-72 w-52 rounded-md border border-[#242422] bg-[#131312]" />
          <div className="h-72 w-52 rounded-md border border-[#242422] bg-[#131312]" />
          <div className="h-72 w-52 rounded-md border border-[#242422] bg-[#131312]" />
        </div>
      </section>
    </Main>
  )
}
