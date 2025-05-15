"use client"

import { useState } from "react"

import { MatFile, MatFolder, MatFolderOpen } from "@/components/icons/mat"

type Node = {
  name: string
  children: Node[]
}
const folders: Node = {
  name: "Home",
  children: [
    {
      name: "Pictures",
      children: [
        {
          name: "Wallpapers",
          children: [
            {
              name: "Riverside",
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "Downloads",
      children: [
        {
          name: "Images",
          children: [],
        },
      ],
    },
  ],
}

const FoldersUI = () => {
  const Folder = ({ node }: { node: Node }) => {
    const [isOpen, setOpen] = useState(false)
    const childNode = node.children
    const isDirectory = childNode.length > 0

    return (
      <ul className="space-y-1 text-sm">
        <button
          className="inline-flex items-center gap-1 [&_svg]:text-[1.3em]"
          onClick={() => setOpen(v => !v)}
        >
          {isDirectory ? (
            isOpen ? (
              <MatFolderOpen className="text-blue-400" />
            ) : (
              <MatFolder className="text-blue-400" />
            )
          ) : (
            <MatFile />
          )}

          {node.name}
        </button>

        <ul className="pl-4">
          {isOpen &&
            isDirectory &&
            childNode.map((node, idx) => (
              <li key={idx}>
                <Folder node={node} key={idx} />
              </li>
            ))}
        </ul>
      </ul>
    )
  }

  return (
    <>
      <Folder node={folders} />
    </>
  )
}

export { FoldersUI }
