"use client"

import { useCallback, useLayoutEffect, useRef, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import useMeasure from "react-use-measure"
import ResizeObserver from "resize-observer-polyfill"

export default function Test() {
  const scrollRef = useRef<HTMLDivElement>(null)
  const ghostRef = useRef<HTMLDivElement>(null)
  const [ref, bounds] = useMeasure()

  // how much we can scroll
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    scrollRef.current && setScrollRange(scrollRef.current.scrollWidth)
  }, [scrollRef, ref, bounds])

  const onResize = useCallback((entries: ResizeObserverEntry[]) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries))
    ghostRef.current && resizeObserver.observe(ghostRef.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useScroll()
  const transform = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -scrollRange + viewportW]
  )

  return (
    <>
      <div className="fixed left-0 right-0 will-change-transform">
        <motion.section
          className="relative w-max bg-black"
          ref={scrollRef}
          style={{ x: transform }}
        >
          <div className="relative flex space-x-4 outline outline-1">
            {Array.from({ length: 5 }, (_, idx) => (
              <div className="h-48 w-[42.5rem] rounded-xl bg-grey-2" key={idx}>
                {scrollRange}
              </div>
            ))}
          </div>
        </motion.section>
      </div>
      <div
        ref={ghostRef}
        style={{ height: scrollRange }}
        className="w-screen"
      />
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
