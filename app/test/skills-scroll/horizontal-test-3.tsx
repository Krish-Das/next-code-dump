"use client"

import { useRef } from "react"
import { useWindowDimensions } from "@/hooks"
import useMeasure from "react-use-measure"

import { cn } from "@/lib/utils"

export default function Test3() {
  return (
    <>
      <MixScrollRoot>anehunaoehunaheunh</MixScrollRoot>
    </>
  )
}

// Implementetion
const MixScrollRoot = ({ children }: { children: React.ReactNode }) => {
  const containerRef = useRef<HTMLDivElement>(null)
  const { width: vWidth } = useWindowDimensions()
  console.log(containerRef.current?.scrollWidth)

  return (
    <div className="container__mix-scroll h-lvh bg-red-500">
      <div ref={containerRef}>{children}</div>
      <p>{vWidth}</p>
      <Ghost showGhost />
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
    <div
      className={cn("ghost__mix-scroll", showGhost && "flex justify-center")}
      style={{ height: height || "auto" }}
    >
      {showGhost && (
        <div className="h-full w-5 bg-white mix-blend-difference" />
      )}
    </div>
  )
}
