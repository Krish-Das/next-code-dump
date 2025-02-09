"use client"

import Link from "next/link"

export default function Toolbar() {
  // TODO: Standardize this type
  const difficulties = ["easy", "medium", "hard"] as const

  return (
    <nav className="fixed left-5 top-5 flex flex-col gap-2 rounded-full bg-content2/50 p-2.5">
      {difficulties.map(difficulty => (
        <Link
          href={{
            pathname: "/game",
            query: { d: difficulty },
          }}
          className="text-xs font-semibold uppercase text-primary"
          key={difficulty}
        >
          {difficulty.slice(0, 1)}
        </Link>
      ))}
    </nav>
  )
}
