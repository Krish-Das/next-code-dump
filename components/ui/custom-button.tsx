"use client"

import { RefObject } from "react"
import { cn } from "@heroui/react"
import {
  Button as RacButton,
  ButtonProps as RacButtonProps,
} from "react-aria-components"

type ButtonProps = RacButtonProps & {
  ref?: RefObject<HTMLButtonElement>
}

const Button = ({ className, ref, ...rest }: ButtonProps) => {
  return (
    <RacButton
      className={cn(
        "inline-flex w-fit select-none items-center gap-1 whitespace-nowrap rounded-lg px-2 py-1.5 text-xs font-semibold leading-none tracking-[0.01em] [&_svg]:text-lg",
        "antialiased",
        "focus:outline-none focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-50", // Disabled
        "cursor-default touch-none select-none", // cursor and select
        "transition-transform ease-soft-spring rac-focus-visible:ring rac-pressed:scale-[0.97]", // Event states
        className
      )}
      ref={ref}
      {...rest}
    />
  )
}

export { Button, type ButtonProps }
