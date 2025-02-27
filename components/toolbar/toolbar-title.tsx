import { ReactNode } from "react"
import { Button } from "@heroui/react"

import { MaterialSymbolsArrowBack } from "../icons/material-icons/MaterialSymbolsArrowBack"

export default function ToolbarTitle({
  title,
  children,
}: {
  title: string
  children?: ReactNode
}) {
  return (
    <section className="inline-flex items-center justify-between gap-1">
      <div className="flex items-center gap-0.5">
        <Button
          size="md"
          variant="light"
          radius="full"
          isIconOnly
          className="[&_button>svg]:text-lg [&_button>svg]:text-default-600"
        >
          <MaterialSymbolsArrowBack />
        </Button>

        <label className="select-none text-sm font-semibold text-primary-900/80">
          {title}
        </label>
      </div>

      <div className="inline-flex flex-1 items-center justify-end gap-1">
        {children}
      </div>
    </section>
  )
}
