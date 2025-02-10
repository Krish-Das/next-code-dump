"use client"

import Link from "next/link"
import { Button, ButtonGroup } from "@heroui/react"

import { difficulties } from "@/lib/constants"
import { type GameDifficulty } from "@/lib/types"

export default function GameSettings({
  selectedDifficulty,
}: {
  selectedDifficulty: GameDifficulty
}) {
  return (
    <div className="bg-black p-3">
      <ButtonGroup>
        {difficulties.map(difficulty => (
          <Button
            key={difficulty}
            radius="md"
            className="capitalize"
            color={difficulty === selectedDifficulty ? "primary" : "default"}
            // TODO: which variant?
            // variant={difficulty === selectedDifficulty ? "flat" : "flat"}
            variant="flat"
            as={Link}
            href={{
              pathname: "/game",
              query: { d: difficulty },
            }}
          >
            {difficulty}
          </Button>
        ))}
      </ButtonGroup>
    </div>
  )
}
