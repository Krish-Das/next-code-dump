import { Divider } from "@heroui/react"

import { Toolbar } from "@/components/toolbar/ToolbarV3"

import { ColorSchemeSettings, DifficultySettings } from "./GameSettings"
import GameStatus from "./GameStatus"
import ImageSources from "./ImageSources"
import Score from "./Score"
import ShareGameScore from "./ShareGameScore"

const ToolbarWrapper = () => {
  return (
    <Toolbar.Root>
      <Toolbar.Idle>
        <GameStatus />
        <Divider />
        <div className="flex flex-col gap-1">
          <Toolbar.Trigger tab="game" />
          <Toolbar.Trigger tab="settings" />
        </div>
      </Toolbar.Idle>

      <Toolbar.Tab tab="game">
        <Toolbar.Title title="Score">
          <ShareGameScore />
        </Toolbar.Title>
        <Score />
        <Toolbar.Separator />
        <ImageSources />
      </Toolbar.Tab>

      <Toolbar.Tab tab="settings">
        <Toolbar.Title title="Settings" />
        <Toolbar.Separator />
        <DifficultySettings />
        <Toolbar.Separator />
        <ColorSchemeSettings />
      </Toolbar.Tab>
    </Toolbar.Root>
  )
}

export { ToolbarWrapper as Toolbar }
