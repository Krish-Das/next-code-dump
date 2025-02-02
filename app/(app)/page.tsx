import { Main } from "@/components/layout/mainwraper"

import ChildWrapper from "./ChildWrapper"

export default function Home() {
  return (
    <Main className="relative grid h-dvh place-content-center p-5">
      <ChildWrapper />
    </Main>
  )
}