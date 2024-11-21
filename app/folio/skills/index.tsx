import {
  CarbonLogoMedium,
  CibTypescript,
  DeviconPlainAstroWordmark,
  DeviconPlainOpengl,
  LineiconsNodejsAlt,
  LogosTypescript,
  MdiLanguageLua,
  MdiNpm,
  TablerBrandReactNative,
  TablerBrandThreejs,
} from "@/components/icons/logos"
import { MaterialSymbolsBroadcastOnPersonalRounded } from "@/components/icons/material-symbols"

export default function Skills() {
  return (
    <section className="mx-auto mt-[100vh] flex h-dvh flex-col items-center justify-center gap-12">
      <div className="space-y-3">
        <p className="flex items-center justify-center gap-1 font-mona text-xs font-semibold uppercase text-foreground/70 font-feature-ss01 font-stretch-[115%]">
          <span className="text-sm">
            <MaterialSymbolsBroadcastOnPersonalRounded />
          </span>
          <span className="_">Knowledge and Skills</span>
        </p>
        <h2 className="font-mona text-5xl font-bold uppercase font-stretch-80 font-slant-5 font-feature-ss01">
          Knowledges and Skills
        </h2>
      </div>

      <div className="flex w-full items-center justify-center gap-5 text-5xl text-foreground/80">
        <LineiconsNodejsAlt className="text-7xl" />
        <TablerBrandThreejs className="" />
        <TablerBrandReactNative className="" />
        <MdiLanguageLua className="" />
        <DeviconPlainAstroWordmark className="text-[5.5rem]" />
        <DeviconPlainOpengl className="text-[5.5rem]" />
        <CarbonLogoMedium className="text-6xl" />
        <MdiNpm className="text-[5.5rem]" />
        <CibTypescript className="text-3xl" />
      </div>
    </section>
  )
}
