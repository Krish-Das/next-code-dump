"use client"

import {ReactNode, useState} from "react"
import {AnimatePresence, motion, Variants} from "motion/react"
import {Popover} from "radix-ui"

import {cn} from "@/lib/utils"
import {IonAddSharp, IonRemoveSharp} from "@/components/icons/ion"

export default function Menu() {
  const [open, setOpen] = useState(false)

  const iconRotation = {open: 0, close: 45} as const
  const iconBlur = {open: "blur(0px)", close: "blur(5px)"} as const
  const expenseButtonIconAnimationVariants = {
    open: {
      rotate: iconRotation.open,
      opacity: 1,
      scale: 1,
      display: "inline",
      filter: iconBlur.open,
    },
    close: {
      rotate: iconRotation.close,
      opacity: 0,
      scale: 0.5,
      display: "hidden",
      filter: iconBlur.close,
    },
  } as Variants
  const incomeButtonIconAnimationVariants = {
    open: {
      filter: iconBlur.open,
      scale: 1,
      transition: {delay: 0.1},
    },
    close: {
      scale: 0,
      filter: iconBlur.close,
      transition: {duration: 0.15},
    },
  } as Variants

  const backdropAnimationVariants = {
    open: {opacity: 1},
    close: {opacity: 0},
  } as Variants
  const incomeLabelAnimationVariants = {
    open: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {delay: 0.135},
      scale: 1,
    },
    close: {
      opacity: 0,
      filter: "blur(5px)",
      scale: 0.5,
      transition: {duration: 0.1},
    },
  } as Variants
  const expenseLabelAnimationVariants = {
    open: {
      opacity: 1,
      filter: "blur(0px)",
      transition: {delay: 0.1},
      scale: 1,
    },
    close: {
      opacity: 0,
      filter: "blur(5px)",
      scale: 0.5,
      transition: {duration: 0.1},
    },
  } as Variants
  const incomeButtonAnimationVariants = {
    open: {
      opacity: 1,
      scale: 1,
    },
    close: {
      opacity: 0,
      scale: 0.6,
      transition: {duration: 0.15},
    },
  } as Variants

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal>
      <Popover.Trigger asChild>
        {/* NOTE: */}
        {/* We don't animate the trigger at all... We just hide it when the
        popover is open. Instead we animate the button that will be placed on
        top of the trigger */}
        <button
          className={cn(
            "inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm",
            open && "hidden"
          )}>
          <IonAddSharp />
        </button>
      </Popover.Trigger>

      <Popover.Anchor />

      <AnimatePresence>
        {open && (
          <Popover.Portal forceMount>
            <div>
              <motion.div
                variants={backdropAnimationVariants}
                initial="close"
                exit="close"
                animate="open"
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              <Popover.Content side="top" className="space-y-2">
                {/* Income button */}
                <Wrapper animate>
                  <motion.p
                    variants={incomeLabelAnimationVariants}
                    className="absolute top-1/2 right-16 origin-right -translate-y-1/2 text-right">
                    Income
                  </motion.p>
                  <motion.button
                    variants={incomeButtonAnimationVariants}
                    id="transaction__add-income"
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm">
                    <motion.span
                      variants={incomeButtonIconAnimationVariants}
                      className="svg_container">
                      <IonAddSharp />
                    </motion.span>
                  </motion.button>
                </Wrapper>

                {/* Expense button */}
                <Wrapper>
                  <motion.p
                    variants={expenseLabelAnimationVariants}
                    className="absolute top-1/2 right-16 origin-right -translate-y-1/2 text-right">
                    Expense
                  </motion.p>

                  {/* NOTE: */}
                  {/* Instead of animating the whole button, we'll place the
                  button on top of the trigger as soon as the popover opens.
                  And then we'll animate the icons instead. This way it'll
                  give the illusion that the trigger itself morphed into this
                  button */}
                  <button
                    id="transaction__add-expense"
                    className="relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm">
                    <motion.span
                      className="absolute top-1/2 left-1/2 -translate-1/2"
                      variants={expenseButtonIconAnimationVariants}>
                      <IonRemoveSharp />
                    </motion.span>

                    <motion.span
                      className="absolute top-1/2 left-1/2 -translate-1/2"
                      variants={{
                        open: expenseButtonIconAnimationVariants.close,
                        close: expenseButtonIconAnimationVariants.open,
                      }}>
                      <IonAddSharp />
                    </motion.span>
                  </button>
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
              open: {y: "0%", transition: {delay: 0.05}},
              close: {
                y: "50%",
                transition: {duration: 0.15},
              },
            }
          : undefined
      }
      initial="close"
      exit="close"
      animate="open"
      className={cn("relative flex gap-2", className)}>
      {children}
    </motion.div>
  )
}
