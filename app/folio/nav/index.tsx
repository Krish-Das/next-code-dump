import { Fragment } from "react"
import Link from "next/link"

import { cn } from "@/lib/utils"
import { MaterialSymbolsCircle } from "@/components/icons/material-symbols"

import FloatingScrollbar from "./floating-scrollbar"

export default function Nav() {
  return (
    <>
      <nav className="container fixed inset-x-0 top-3 isolate z-20 grid place-items-center p-0">
        <div
          className="
        flex h-10 w-fit items-center gap-3 rounded-[16px] border border-white/[0.03]
        bg-grey-2/80 px-4 font-mona text-xs font-medium
        tracking-wide shadow-lg backdrop-blur-md font-feature-ss01
        "
        >
          <Link href="/" className="text-lg">
            <MaterialSymbolsCircle />
          </Link>

          <hr className="h-5 border border-white/10" />

          <NavLinks />
        </div>
      </nav>

      <FloatingScrollbar />
    </>
  )
}

function NavLinks() {
  const navLinks = [
    { id: 1, label: "Index" },
    { id: 2, label: "About" },
    { id: 3, label: "Academics" },
    { id: 4, label: "Contact" },
  ]
  const activeLinkId = 3

  return (
    <ul className="flex h-full items-center gap-4">
      {navLinks.map((link, idx) => {
        const isActive = activeLinkId === link.id

        return (
          <li
            key={idx}
            className={cn(
              "",
              isActive
                ? "relative inline-grid h-full place-items-center font-bold font-stretch-110"
                : "text-foreground/80"
            )}
          >
            {link.label}

            {isActive && (
              <Fragment>
                <span
                  className="absolute bottom-0 z-[1] h-px w-full translate-y-1/2 bg-white"
                  style={{
                    maskImage:
                      "linear-gradient(to left, transparent, black, transparent)",
                  }}
                />
                <span className="absolute bottom-1.5 h-px w-full bg-white/80 blur-[8px]" />
              </Fragment>
            )}
          </li>
        )
      })}
    </ul>
  )
}
