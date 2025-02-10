import { Dispatch, SetStateAction } from "react"
import Link from "next/link"
import { Button, ButtonGroup, Divider } from "@heroui/react"

import { difficulties } from "@/lib/constants"
import { type GameDifficulty } from "@/lib/types"
import { SystemUiconsCross } from "@/components/icons/system-icons"

export default function GameSettings({
  selectedDifficulty,
  setOpen,
}: {
  selectedDifficulty: GameDifficulty
  setOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <div className="flex flex-col gap-6 px-6 py-8">
      <div className="flex items-center justify-between">
        <h5 className="touch-none select-none text-base font-bold">Settings</h5>

        <Button
          radius="full"
          variant="light"
          size="sm"
          isIconOnly
          onPress={() => setOpen(false)}
        >
          <SystemUiconsCross
            className="size-3.5 text-content4-foreground"
            strokeWidth={1.75}
          />
        </Button>
      </div>

      <Divider />

      <div className="flex flex-col gap-1.5">
        <h6 className="touch-none select-none text-sm font-semibold">
          Difficulty
        </h6>
        {/* TODO: Use tabs instead */}
        <ButtonGroup>
          {difficulties.map(difficulty => (
            <Button
              key={difficulty}
              radius="md"
              className="capitalize"
              color={difficulty === selectedDifficulty ? "primary" : "default"}
              variant={difficulty === selectedDifficulty ? "solid" : "flat"}
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
    </div>
  )
}
