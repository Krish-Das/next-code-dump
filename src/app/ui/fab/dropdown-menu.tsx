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
          variants={{
            open: {
              opacity: 1,
              filter: "blur(0px)",
              rotate: 0,
              transition: { duration: exitDuration },
            },
            close: {
              opacity: 0,
              filter: "blur(8px)",
              rotate: 45,
            },
          }}
          animate={open ? "close" : "open"}
          className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm"
        >
          ⌘
        </motion.button>
      </Popover.Trigger>
      <Popover.Anchor />

      <AnimatePresence>
        {open && (
          <Popover.Portal forceMount>
            <div className="">
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0, transition: { duration: exitDuration } }}
                animate={{ opacity: 1 }}
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
                        transition: { delay: 0.2 },
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
                      open: { opacity: 1, filter: "blur(0px)", rotate: 0 },
                      close: {
                        opacity: 0,
                        filter: "blur(8px)",
                        rotate: 45,
                        transition: { duration: exitDuration },
                      },
                    }}
                    id="transaction__add-income"
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm"
                  >
                    <IonAddSharp />
                  </motion.button>
                </Wrapper>

                {/* Expense button */}
                <Wrapper>
                  <motion.p
                    variants={{
                      open: {
                        opacity: 1,
                        filter: "blur(0px)",
                        transition: { delay: 0.18 },
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
                      open: { opacity: 1, filter: "blur(0px)", rotate: 0 },
                      close: {
                        opacity: 0,
                        filter: "blur(8px)",
                        rotate: 45,
                        transition: { duration: exitDuration },
                      },
                    }}
                    id="transaction__add-expense"
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm"
                  >
                    <IonRemoveSharp />
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
                transition: { duration: exitDuration },
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
