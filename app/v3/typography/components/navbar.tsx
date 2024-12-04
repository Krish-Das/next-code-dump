import { Fragment } from "react"

import { cn } from "@/lib/utils"
import { IonLogoGithub, RiTwitterXFill } from "@/components/icons/logos"
import {
  SolarHomeAngle2BoldDuotone,
  SolarNotebookMinimalisticBoldDuotone,
  SolarPlain2BoldDuotone,
  SolarProgrammingBoldDuotone,
  SolarUserBoldDuotone,
} from "@/components/icons/solar"
import FloatingScrollbar from "@/app/folio/nav/floating-scrollbar"

const navIcons = [
  <SolarHomeAngle2BoldDuotone key="nv1" />,
  <SolarUserBoldDuotone key="nv2" />,
  <SolarNotebookMinimalisticBoldDuotone key="nv3" />,
  <SolarProgrammingBoldDuotone key="nv4" />,
]
const socialIcons = [<IonLogoGithub key="sc2" />, <RiTwitterXFill key="sc1" />]

export default function Navbar() {
  return (
    <>
      <nav className="container fixed inset-x-0 bottom-5 isolate z-20 grid place-items-center p-0">
        <div
          className="
          flex items-center gap-1.5 rounded-full border border-grey-2 bg-[#161616] p-1.5
        "
        >
          {navIcons.map((icon, idx) => (
            <Navbuttons key={idx}>{icon}</Navbuttons>
          ))}
          <Separator />

          {socialIcons.map((icon, idx) => (
            <Navbuttons key={idx}>{icon}</Navbuttons>
          ))}
          <Separator />

          <Navbuttons>
            <SolarPlain2BoldDuotone />
          </Navbuttons>
        </div>
      </nav>

      <FloatingScrollbar />
    </>
  )
}

function Navbuttons({ children }: { children: React.ReactNode }) {
  return (
    <div className="size-12 rounded-full bg-[linear-gradient(45deg,var(--tw-gradient-stops))] from-[#202020] to-[#262626] p-0.5 md:size-11">
      <div className="inline-flex size-full items-center justify-center rounded-full bg-[#202020] text-lg text-[#A3A3A3]">
        {children}
      </div>
    </div>
  )
}

function Separator() {
  return (
    <hr className="h-8 w-px border-0 border-none bg-gradient-to-b from-black/0 via-white/10 to-black/0" />
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
