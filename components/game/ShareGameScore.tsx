import { Button } from "@heroui/react"

import { MaterialSymbolsShare } from "../icons/material-icons"

export default function ShareGameScore() {
  return (
    <Button size="md" variant="light" radius="full" isIconOnly>
      <MaterialSymbolsShare />
    </Button>
  )
}
