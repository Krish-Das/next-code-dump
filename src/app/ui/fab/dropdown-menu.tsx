"use client"

import { ReactNode, useState } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Popover } from "radix-ui"

import { cn } from "@/lib/utils"
import { IonAddSharp, IonRemoveSharp } from "@/components/icons/ion"

const exitDuration = undefined // as const

export default function Menu() {
  const [open, setOpen] = useState(false)

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal>
      <Popover.Trigger asChild>
        <motion.button
          animate={open ? "close" : "open"}
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm",
            open && "hidden"
          )}
        >
          <motion.span
            variants={{
              open: {
                rotate: 0,
                filter: "blur(0px)",
              },
              close: {
                rotate: 45,
                filter: "blur(5px)",
                transition: { duration: 0.2 },
              },
            }}
            className="svg_container"
          >
            <IonAddSharp />
          </motion.span>
        </motion.button>
      </Popover.Trigger>
      <Popover.Anchor />

      <AnimatePresence>
        {open && (
          <Popover.Portal forceMount>
            <div>
              <motion.div
                variants={{
                  open: { opacity: 1 },
                  close: { opacity: 0 },
                }}
                initial="close"
                exit="close"
                animate="open"
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              <Popover.Content side="top" className="space-y-2">
                {/* Income button */}
                <Wrapper animate>
                  <motion.p
                    variants={{
                      open: {
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { delay: 0.15 },
                        scale: 1,
                      },
                      close: {
                        opacity: 0,
                        filter: "blur(5px)",
                        scale: 0.5,
                        transition: { duration: 0.1 },
                      },
                    }}
                    className="absolute top-1/2 right-16 origin-right -translate-y-1/2 text-right"
                  >
                    Income
                  </motion.p>
                  <motion.button
                    variants={{
                      open: {
                        opacity: 1,
                        scale: 1,
                      },
                      close: {
                        opacity: 0,
                        scale: 0.6,
                        transition: { duration: 0.15 },
                      },
                    }}
                    id="transaction__add-income"
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm"
                  >
                    <motion.span
                      variants={{
                        open: {
                          filter: "blur(0px)",
                          scale: 1,
                        },
                        close: {
                          scale: 0,
                          filter: "blur(5px)",
                          transition: { duration: 0.15 },
                        },
                      }}
                      className="svg_container"
                    >
                      <IonAddSharp />
                    </motion.span>
                  </motion.button>
                </Wrapper>

                {/* Expense button */}
                <Wrapper>
                  <motion.p
                    variants={{
                      open: {
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { delay: 0.1 },
                        scale: 1,
                      },
                      close: {
                        opacity: 0,
                        filter: "blur(5px)",
                        scale: 0.5,
                        transition: { duration: 0.1 },
                      },
                    }}
                    className="absolute top-1/2 right-16 origin-right -translate-y-1/2 text-right"
                  >
                    Expense
                  </motion.p>
                  <motion.button
                    variants={{
                      open: {
                        opacity: 1,
                        transition: { duration: 0.2 },
                      },
                      close: {
                        opacity: 0,
                      },
                    }}
                    id="transaction__add-expense"
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm"
                  >
                    <motion.span
                      variants={{
                        open: {
                          filter: "blur(0px)",
                          rotate: 0,
                          transition: { duration: 0.2 },
                        },
                        close: {
                          filter: "blur(5px)",
                          rotate: 45,
                        },
                      }}
                      className="svg_container"
                    >
                      <IonRemoveSharp />
                    </motion.span>
                  </motion.button>
                </Wrapper>
              </Popover.Content>
            </div>
          </Popover.Portal>
        )}
      </AnimatePresence>
    </Popover.Root>
  )
}

const Wrapper = ({
  children,
  className,
  animate,
}: {
  children: ReactNode
  className?: string
  animate?: boolean
}) => {
  return (
    <motion.div
      variants={
        animate
          ? {
              open: { y: "0%" },
              close: {
                y: "50%",
                transition: { duration: 0.15 },
              },
            }
          : undefined
      }
      initial="close"
      exit="close"
      animate="open"
      className={cn("relative flex gap-2", className)}
    >
      {children}
    </motion.div>
  )
}
