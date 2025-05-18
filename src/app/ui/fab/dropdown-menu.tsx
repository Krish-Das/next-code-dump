"use client"

import { ReactNode } from "react"
import { Popover } from "radix-ui"

import { cn } from "@/lib/utils"
import { IonAddSharp, IonRemoveSharp } from "@/components/icons/ion"

export default function Menu() {
  return (
    <Popover.Root modal>
      <Popover.Trigger asChild>
        <button className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl leading-0 font-medium backdrop-blur-sm">
          ⌘
        </button>
      </Popover.Trigger>

      <Popover.Anchor />

      <Popover.Portal>
        <div>
          <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />

          <Popover.Content side="top">
            <Wrapper>
              <Label>Income</Label>
              <TransactionAddButton
                type="income"
                action={() => alert("Action: income")}
              />
            </Wrapper>

            <Wrapper>
              <Label>Expense</Label>
              <TransactionAddButton
                type="expense"
                action={() => alert("Action: expense")}
              />
            </Wrapper>
          </Popover.Content>
        </div>
      </Popover.Portal>
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
}: {
  type: "expense" | "income"
  action: () => void
  className?: string
}) => {
  const isExpense = type === "expense"

  const icon = isExpense ? <IonRemoveSharp /> : <IonAddSharp />
  const buttonId = isExpense
    ? "transaction__add-expense"
    : "transaction__add-income"

  return (
    <button
      id={buttonId}
      className={cn(
        "inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-neutral-800 text-xl leading-0 font-medium backdrop-blur-sm",
        isExpense ? "text-[#FF453A]" : "text-[#45D483]",
        className
      )}
      onClick={action}
    >
      {icon}
    </button>
  )
}
