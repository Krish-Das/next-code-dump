"use client"

import { SystemUiconsSearch } from "@/components/icons/system-ui"
import { TextField, Label, Input as RacInput } from "react-aria-components"

export default function Input() {
  return (
    <div className="">
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
    </div>
  )
}

// RING:
// ring-1 ring-inset ring-foreground/[0.08]
