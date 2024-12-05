import Lenis from "./Lenis"

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Lenis>{children}</Lenis>
    </>
  )
}
