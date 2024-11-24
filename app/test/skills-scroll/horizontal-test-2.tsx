"use client"

import { cn } from "@/lib/utils"

export default function Test2() {
  return (
    <>
      <section className="bg-[#da1334]">
        <Sticky />
        <Ghost showGhost />
      </section>
    </>
  )
}

function Sticky() {
  return (
    <div className="container grid h-[90vh] w-full place-items-center bg-grey-2 p-0">
      thing
    </div>
  )
}

function Ghost({
  height,
  showGhost,
}: {
  height?: string | number
  showGhost?: boolean
}) {
  return (
    // NOTE: ghost won't have any child and only will have height
    <div
      className={cn(showGhost && "flex justify-center")}
      style={{
        height: height || "100vh",
      }}
    >
      {showGhost && (
        <div className="h-full w-5 bg-white mix-blend-difference" />
      )}
    </div>
  )
}
