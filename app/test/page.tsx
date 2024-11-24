import Nav from "../folio/nav"
// import Cover from "./cover"
// import Skills from "./skills-scroll"
import Test from "./skills-scroll/horizontal-test"

export default function Page() {
  return (
    <>
      <Nav />

      {/* <PlaceHolder /> */}

      {/* <Cover /> */}

      {/* <Skills /> */}
      <Test />
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
