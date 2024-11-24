import { MaterialSymbolsBroadcastOnPersonalRounded } from "@/components/icons/material-symbols"

import Nav from "../folio/nav"
// import Cover from "./cover"
// import Skills from "./skills-scroll"
// import Test from "./skills-scroll/horizontal-test"
import Test2 from "./skills-scroll/horizontal-test-2"

export default function Page() {
  return (
    <>
      <Nav />

      <PlaceHolder>
        <MaterialSymbolsBroadcastOnPersonalRounded />
      </PlaceHolder>

      {/* <Cover /> */}

      {/* <Skills /> */}
      {/* <Test /> */}
      <Test2 />
    </>
  )
}

export function PlaceHolder({ children }: { children?: React.ReactNode }) {
  return (
    <section className="h-[50dvh]s grid h-screen place-items-center">
      {children}
    </section>
  )
}
