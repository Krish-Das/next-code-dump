"use client"

import { useEffect, useRef } from "react"
import { cancelFrame, frame } from "framer-motion"
import { LenisRef, ReactLenis } from "lenis/react"

export default function Lenis({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<LenisRef>(null)

  useEffect(() => {
    function update(time: any) {
      lenisRef.current?.lenis?.raf(time)
    }

    frame.update(update, true)

    return () => cancelFrame(update)
  }, [])

  return (
    <>
      <ReactLenis root>{children}</ReactLenis>
    </>
  )
}
