"use client"

import { useState } from "react"

import { MatFile, MatFolder, MatFolderOpen } from "@/components/icons/mat"

type Folder = {
  name: string
  folders: Folder[]
}
const folders: Folder = {
  name: "Home",
  folders: [
    {
      name: "Pictures",
      folders: [
        {
          name: "Wallpapers",
          folders: [
            {
              name: "Riverside",
              folders: [],
            },
          ],
        },
      ],
    },
    {
      name: "Downloads",
      folders: [
        {
          name: "Images",
          folders: [],
        },
      ],
    },
  ],
}

const FoldersUI = () => {
  const Folder = ({ folder }: { folder: Folder }) => {
    const [isOpen, setOpen] = useState(false)
    const isDirectory = folder.folders.length > 0

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

          {folder.name}
        </button>

        <ul className="pl-4">
          {isOpen &&
            folder.folders.length > 0 &&
            folder.folders.map((folder, idx) => (
              <li key={idx}>
                <Folder folder={folder} key={idx} />
              </li>
            ))}
        </ul>
      </ul>
    )
  }

  return (
    <>
      <Folder folder={folders} />
    </>
  )
}

export { FoldersUI }
