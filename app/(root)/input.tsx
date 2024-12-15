"use client"

import { SystemUiconsSearch } from "@/components/icons/system-ui"
import { TextField, Label, Input as RacInput } from "react-aria-components"

export default function Input() {
  return (
    <div className="space-y-1">
      <TextField className="flex h-11 w-[35ch] items-center rounded-lg bg-[#767680]/25 outline-none">
        <Label className="inline-flex h-full items-center pl-3 pr-1.5">
          <span className="sr-only">Search country</span>
          <span className="lg text-xl text-foreground/50">
            <SystemUiconsSearch strokeWidth={1.5} />
          </span>
        </Label>

        <RacInput
          type="text"
          placeholder="Search country"
          className="h-full w-full bg-transparent pr-3 font-medium outline-none"
          style={{ caretColor: "#0a84ff" }}
        />
      </TextField>

      <CountryDisplay />
    </div>
  )
}

function CountryDisplay() {
  const countries: string[] = ["india", "us", "something else"]
  const time = 200

  return (
    <div className="">
      <ul className="max-h-64 min-h-0 w-full overflow-y-scroll rounded-lg bg-[#1c1c1e] font-medium capitalize">
        {countries.map((country, idx) => (
          <li
            key={idx}
            className="flex h-11 w-full items-center border-b-[#545458]/60 px-4 [&:not(:last-child)]:border-b"
          >
            {country}
          </li>
        ))}
      </ul>

      <div className="flex h-9 items-center justify-end pr-1 text-right text-xs font-medium text-foreground/40">
        <p>Results in {time}ms</p>
      </div>
    </div>
  )
}

// RING:
// ring-1 ring-inset ring-foreground/[0.08]
