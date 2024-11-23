import Nav from "../folio/nav"
import Cover from "./cover"

export default function Page() {
  return (
    <>
      <Nav />

      <PlaceHolder />

      <Cover />
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
