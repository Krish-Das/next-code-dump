"use client"

import { Main } from "@/components/layout/mainwraper"
import { Button } from "react-aria-components"

export default function Home() {
  return (
    <Main>
      <Button className="rounded-lg bg-muted px-3 py-2 font-medium text-muted-foreground rac-hover:bg-muted/80">
        Click
      </Button>
    </Main>
  )
}
