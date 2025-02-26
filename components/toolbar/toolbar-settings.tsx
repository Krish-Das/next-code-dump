import { Dispatch, SetStateAction } from "react"

import { ToolbarState } from "@/lib/types"

export default function ToolbarSettings({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  setToolbarState,
}: {
  setToolbarState: Dispatch<SetStateAction<ToolbarState>>
}) {
  return <div>ToolbarSettings</div>
}
