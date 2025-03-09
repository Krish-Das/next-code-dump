import { GhostButton } from "@/components/ui/ghost-button"
import {
  MaterialSymbolsPause,
  MaterialSymbolsPlayArrow,
  MaterialSymbolsStop,
} from "@/components/icons/material-icons"

export default function Page() {
  return (
    <>
      <section className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
        <GhostButton position="left">
          <MaterialSymbolsPlayArrow />
        </GhostButton>

        <GhostButton position="center">
          <MaterialSymbolsPause />
        </GhostButton>

        <GhostButton position="right">
          <MaterialSymbolsStop />
        </GhostButton>
      </section>
    </>
  )
}
