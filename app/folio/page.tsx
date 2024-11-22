import { Main } from "@/components/layout/mainwrapper"

import Interviews from "./interviews"
import Nav from "./nav"
// import Skills from "./skills/v1"
import Skills from "./skills/v2"
import Works from "./works"

export default function Page() {
  return (
    <>
      <Nav />

      <Main className="space-y-5 p-0">
        <PlaceHolder>Hero</PlaceHolder>

        <Skills />

        {/* <Works /> */}
        {/* <SectionSpacer /> */}
        {/**/}
        {/* <Interviews /> */}
        {/* <SectionSpacer /> */}
        {/**/}
        {/* <Skills /> */}

        <PlaceHolder>Footer</PlaceHolder>
      </Main>
    </>
  )
}

function PlaceHolder({ children }: { children?: React.ReactNode }) {
  return (
    <section className="h-[50dvh]s grid h-screen place-items-center">
      {children}
    </section>
  )
}
function SectionSpacer() {
  return <div className="h-[40vh]" />
}
