"use client"

import { ReactNode, useState } from "react"
import { AnimatePresence, motion, Variants } from "motion/react"
import { Popover } from "radix-ui"

import { cn } from "@/lib/utils"
import { IonAddSharp, IonRemoveSharp } from "@/components/icons/ion"

export default function Menu() {
  const [open, setOpen] = useState(false)
  const buttonAnimationVariants: Variants = {
    open: { opacity: 1, filter: "blur(0px)", rotate: 0 },
    close: { opacity: 0, filter: "blur(8px)", rotate: 45 },
  }
  const newAnimation = {
    open: { ...buttonAnimationVariants.open, y: "0%" },
    close: { ...buttonAnimationVariants.close, y: "50%" },
  }

  return (
    <Popover.Root open={open} onOpenChange={setOpen} modal>
      <Popover.Trigger asChild>
        <motion.button
          variants={buttonAnimationVariants}
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
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              />

              <Popover.Content side="top">
                <Wrapper>
                  <Label>Income</Label>
                  <TransactionAddButton
                    variants={newAnimation}
                    type="income"
                    action={() => alert("Action: income")}
                  />
                </Wrapper>

                <Wrapper>
                  <Label>Expense</Label>
                  <TransactionAddButton
                    variants={buttonAnimationVariants}
                    type="expense"
                    action={() => alert("Action: expense")}
                  />
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
}: {
  children: ReactNode
  className?: string
}) => {
  return <div className={cn("relative flex gap-2", className)}>{children}</div>
}

const Label = ({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) => {
  return (
    <p
      className={cn(
        "absolute top-1/2 right-16 -translate-y-1/2 text-right",
        className
      )}
    >
      {children}
    </p>
  )
}

const TransactionAddButton = ({
  type,
  action,
  className,
  variants,
}: {
  type: "expense" | "income"
  action: () => void
  className?: string
  variants: Variants
}) => {
  const isExpense = type === "expense"

  const icon = isExpense ? <IonRemoveSharp /> : <IonAddSharp />
  const buttonId = isExpense
    ? "transaction__add-expense"
    : "transaction__add-income"

  return (
    <motion.button
      variants={variants}
      initial="close"
      exit="close"
      animate="open"
      id={buttonId}
      className={cn(
        "relative inline-flex h-12 w-12 items-center justify-center rounded-full bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm",
        className
      )}
      onClick={action}
    >
      {icon}
    </motion.button>
  )
}
