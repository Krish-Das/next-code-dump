import { PrimaryHeading } from "./components/heading"

export default function Page() {
  return (
    <div className="grid h-screen place-items-center bg-black">
      <PrimaryHeading>
        What we&apos;re
        <br />
        <span className="inline-block pl-[3ch]"> good at</span>
      </PrimaryHeading>
    </div>
  )
}
