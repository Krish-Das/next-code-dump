import { MaterialSymbolsCircle } from "@/components/icons/material-symbols"
import Nav from "@/app/folio/nav"
import { BgLines } from "@/app/test/int/Component"

import { Heading, Para, Subheading } from "./components"

export default function Page() {
  return (
    <>
      <Nav />

      <Child />

      <BgLines />
    </>
  )
}

function Child() {
  return (
    <>
      <section className="space-y-8 bg-grn-2/40">
        <Subheading>
          <MaterialSymbolsCircle />
          Shaders Light effects
        </Subheading>
        <Para>
          Over the course of my career, <br />
          Ive strived to develop a diverse set of core skills.
          <br />
          Ever since I started working with <em>WebGL and Shaders</em>.
        </Para>
        <Heading>Known Technologies</Heading>
        <div className="h-32 w-full rounded-md bg-grey-1" />
      </section>
    </>
  )
}
