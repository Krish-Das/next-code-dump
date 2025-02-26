import { useState } from "react"
import { cn } from "@heroui/react"

import { ToolbarState } from "@/lib/types"

import ToolbarClosed from "./toolbar-closed"
import ToolbarGameInfo from "./toolbar-game-info"
import ToolbarSettings from "./toolbar-settings"

export default function Toolbar() {
  const [toolbarState, setToolbarState] = useState<ToolbarState>("close")

  return (
    <nav
      className={cn(
        "fixed left-4 top-1/2 isolate z-10 h-fit w-fit -translate-y-1/2 bg-default-50/50 shadow shadow-black/5 backdrop-blur-md dark:bg-default-50/80",
        toolbarState === "close" ? "rounded-full" : "rounded-3xl"
      )}
    >
      {toolbarState === "open:game" ? (
        <ToolbarGameInfo setToolbarState={setToolbarState} />
      ) : toolbarState === "open:settings" ? (
        <ToolbarSettings setToolbarState={setToolbarState} />
      ) : (
        <ToolbarClosed setToolbarState={setToolbarState} />
      )}
    </nav>
  )
}
