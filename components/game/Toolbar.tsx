import { Divider } from "@heroui/react"

import Colorscheme from "@/components/game-settings/Colorscheme"
import Difficulty from "@/components/game-settings/Difficulty"
import { Toolbar } from "@/components/toolbar/ToolbarV3"

import GameStatus from "./GameStatus"
import ImageSources from "./ImageSources"
import Score from "./Score"
import ShareGameScore from "./ShareGameScore"

const ToolbarWrapper = () => {
  return (
    <Toolbar.Root>
      <Toolbar.Idle>
        <GameStatus />

        <Divider
          orientation="vertical"
          className="ml-3 h-4 w-0.5 rounded-full"
        />

        <section className="inline-flex rounded-full">
          <Toolbar.Trigger tab="game" position="left" />
          <Toolbar.Trigger tab="settings" position="right" />
        </section>
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
        <Difficulty />
        <Toolbar.Separator />
        <Colorscheme />
      </Toolbar.Tab>
    </Toolbar.Root>
  )
}

export { ToolbarWrapper as Toolbar }
