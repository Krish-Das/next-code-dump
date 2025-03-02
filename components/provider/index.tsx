"use client"

import { HeroUIProvider } from "@heroui/react"
import { ThemeProvider } from "next-themes"

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <HeroUIProvider>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </HeroUIProvider>
    </>
  )
}
