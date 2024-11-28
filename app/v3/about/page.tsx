import Nav from "@/app/folio/nav"
import { BgLines } from "@/app/test/int/Component"

import Child from "./child"

export default function Page() {
  return (
    <>
      <Nav />

      <Child />

      <BgLines />
    </>
  )
}
