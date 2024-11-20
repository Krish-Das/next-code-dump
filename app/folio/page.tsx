import { Main } from "@/components/layout/mainwrapper"

import Works from "./works"

export default function Page() {
  return (
    <Main className="space-y-5 p-0">
      <PlaceHolder>Hero</PlaceHolder>

      <Works />

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
