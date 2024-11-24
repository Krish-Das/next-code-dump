import { useEffect, useState } from "react"

import { debounce } from "@/lib/utils"

const useWindowDimensions = (delay: number = 150) => {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    // Handler to update the dimentions
    function handleResize() {
      setDimensions({ width: window.innerWidth, height: window.innerHeight })
    }

    // Create debounced version for resize event
    const debouncedHandleResize = debounce(handleResize, delay)

    // Set initial width
    handleResize()

    // Add event listener
    window.addEventListener("resize", debouncedHandleResize)

    // Cleanup event listener on component unmount
    return () => {
      debouncedHandleResize.cancel()
      window.removeEventListener("resize", handleResize)
    }
  }, [delay])

  return dimensions
}

export default useWindowDimensions
