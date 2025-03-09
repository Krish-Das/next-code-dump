"use client"

import { forwardRef } from "react"
import { cn } from "@heroui/react"
import {
  Button as RacButton,
  ButtonProps as RacButtonProps,
} from "react-aria-components"

type ButtonProps = RacButtonProps & {
  position: "left" | "center" | "right"
  wraperClassName?: string
  bgClassName?: string
}

const buttonStyles = cn(
  "btn-ghost-icon-only group relative inline-flex h-10 items-center outline-none whitespace-nowrap antialiased cursor-default touch-none select-none",
  "[&_svg]:text-xl",
  "[&_.buttonBG]:rac-hover:bg-content3/40 [&_.buttonBG]:rac-focus-visible:ring [&_.buttonBG]:rac-pressed:bg-content4/50",
  "disabled:pointer-events-none disabled:opacity-40 rac-pressed:scale-[0.97] rac-focus:z-10"
)

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { position, className, wraperClassName, bgClassName, children, ...rest },
    ref
  ) => {
    return (
      <RacButton className={cn(buttonStyles, className)} ref={ref} {...rest}>
        {renderProps => (
          <span
            className={cn(
              "child-wraper relative inline-flex h-full w-full items-center justify-center px-1.5",
              position === "left"
                ? "ml-1.5"
                : position === "right"
                  ? "mr-1.5"
                  : "m-0",
              wraperClassName
            )}
          >
            {typeof children === "function" ? children(renderProps) : children}
            <span
              className={cn(
                "buttonBG pointer-events-none absolute left-1/2 top-1/2 -z-[1] inline-block h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-default touch-none select-none rounded-full",
                bgClassName
              )}
            />
          </span>
        )}
      </RacButton>
    )
  }
)
Button.displayName = "GhostButton"

export {
  Button as GhostButton,
  buttonStyles as ghostButtonStyles,
  type ButtonProps as GhostButtonProps,
}
