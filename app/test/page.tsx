import Nav from "../folio/nav"
import Cards from "./skills-cards/Cards"

export default function Page() {
  return (
    <>
      <Nav />

      <PlaceHolder />
      <Cards />
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
