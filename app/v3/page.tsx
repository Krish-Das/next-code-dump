import Link from "next/link"

import { Main } from "@/components/layout/mainwrapper"

export default function Page() {
  return (
    <Main className="grid place-items-center">
      <Link href="/v3/lander">Lander</Link>
      <Link href="/v3/about">About</Link>
      <Link href="/v3/ed">Education</Link>
      <Link href="/v3/skill">Skills</Link>
      <Link href="/v3/intrv">Interviews</Link>

      <div className="h-2" />

      <Link href="/v3/combined">Combined</Link>

      <div className="h-2" />

      <Link href="/v3/typography">Typography</Link>

      <div className="h-2" />

      <Link href="/v3/bench">Bench</Link>
    </Main>
  )
}
