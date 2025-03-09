import React, {
  createContext,
  Dispatch,
  forwardRef,
  HTMLAttributes,
  SetStateAction,
  useContext,
  useState,
} from "react"
import { cn, Button as HeroButton } from "@heroui/react"

import { GhostButton, GhostButtonProps } from "@/components/ui/ghost-button"
import {
  MaterialSymbolsArrowBack,
  MaterialSymbolsSettingsOutline,
  MaterialSymbolsSportsEsportsOutline,
} from "@/components/icons/material-icons"

/* -------------------------------------------------------------------------------------------------
 * Context and types
 * -----------------------------------------------------------------------------------------------*/
export type ToolbarState = "close" | "open:game" | "open:settings"
export type ToolbarTabs = "game" | "settings"
type ToolbarContextValue = {
  state: ToolbarState
  changeState: Dispatch<SetStateAction<ToolbarState>>
}

const ToolbarContext = createContext<ToolbarContextValue | null>(null)

const useToolbar = () => {
  const context = useContext(ToolbarContext)
  if (!context) {
    throw new Error("useToolbar must be used within a ToolbarProvider")
  }
  return context
}

/* -------------------------------------------------------------------------------------------------
 * Root
 * -----------------------------------------------------------------------------------------------*/
type ToolbarRootProps = HTMLAttributes<HTMLDivElement>

const ToolbarRoot = forwardRef<HTMLDivElement, ToolbarRootProps>(
  ({ children, className, ...rest }, ref) => {
    const [toolbarState, setToolbarState] = useState<ToolbarState>("close")

    return (
      <ToolbarContext.Provider
        value={{
          state: toolbarState,
          changeState: setToolbarState,
        }}
      >
        <nav
          ref={ref}
          className={cn(
            "toolbar-root fixed bottom-3 left-1/2 isolate z-10 h-fit w-fit -translate-x-1/2 overflow-hidden rounded-full bg-content2/70 shadow shadow-black/5 backdrop-blur-lg",
            toolbarState === "close" ? "rounded-full" : "rounded-3xl",
            className
          )}
          {...rest}
        >
          {React.Children.map(children, child => {
            if (!React.isValidElement(child)) return null

            // Show Toolbar.Idle when toolbarState is "close"
            if (toolbarState === "close" && child.type === Toolbar.Idle) {
              return child
            }

            // Show Toolbar.Tab when toolbarState matches the tab's `tab` prop
            if (
              child.type === Toolbar.Tab &&
              toolbarState === `open:${child.props.tab}`
            ) {
              return child
            }

            return null
          })}
        </nav>
      </ToolbarContext.Provider>
    )
  }
)
ToolbarRoot.displayName = "Toolbar"

/* -------------------------------------------------------------------------------------------------
 * Separator
 * -----------------------------------------------------------------------------------------------*/
type SeparatorProps = Omit<HTMLAttributes<HTMLDivElement>, "children">
const Separator = forwardRef<HTMLDivElement, SeparatorProps>(
  ({ className, ...rest }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("toolbar-separator h-1.5 w-full", className)}
        {...rest}
      />
    )
  }
)
Separator.displayName = "Separator"

/* -------------------------------------------------------------------------------------------------
 * ToolbarIdle
 * -----------------------------------------------------------------------------------------------*/
type ToolbarIdleProps = HTMLAttributes<HTMLDivElement>
const ToolbarIdle = forwardRef<HTMLDivElement, ToolbarIdleProps>(
  ({ className, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "flex h-12 items-center gap-0.5 p-1 leading-none",
          className
        )}
        {...rest}
      />
    )
  }
)
ToolbarIdle.displayName = "ToolbarIdle"

/* -------------------------------------------------------------------------------------------------
 * ToolbarTab
 * -----------------------------------------------------------------------------------------------*/
type ToolbarTabProps = HTMLAttributes<HTMLDivElement> & {
  tab: ToolbarTabs
}
const ToolbarTab = forwardRef<HTMLDivElement, ToolbarTabProps>(
  ({ className, ...rest }, ref) => {
    return (
      <section
        ref={ref}
        className={cn(
          "toolbar-tab flex h-fit w-fit flex-col gap-1.5 p-3",
          className
        )}
        {...rest}
      />
    )
  }
)
ToolbarTab.displayName = "ToolbarTab"

/* -------------------------------------------------------------------------------------------------
 * ToolbarTitle
 * -----------------------------------------------------------------------------------------------*/
type ToolbarTitleProps = HTMLAttributes<HTMLDivElement> & { title: string }
const ToolbarTitle = forwardRef<HTMLDivElement, ToolbarTitleProps>(
  ({ title, children, className, ...rest }, ref) => {
    const { changeState } = useToolbar()

    return (
      <div
        ref={ref}
        className={cn("inline-flex items-center justify-between", className)}
        {...rest}
      >
        <div className="flex flex-1 items-center gap-0.5">
          <HeroButton
            size="md"
            variant="light"
            radius="full"
            isIconOnly
            className="[&_button>svg]:text-lg [&_button>svg]:text-default-600"
            onPress={() => changeState("close")}
          >
            <MaterialSymbolsArrowBack />
          </HeroButton>

          <label className="select-none text-sm font-semibold text-primary-900/80">
            {title}
          </label>
        </div>

        {children}
      </div>
    )
  }
)
ToolbarTitle.displayName = "ToolbarTitle"

/* -------------------------------------------------------------------------------------------------
 * ToolbarTrigger
 * -----------------------------------------------------------------------------------------------*/
type ToolbarTriggerProps = Omit<GhostButtonProps, "children"> & {
  tab: ToolbarTabs
}
const ToolbarTrigger = forwardRef<HTMLButtonElement, ToolbarTriggerProps>(
  ({ className, tab, ...rest }, ref) => {
    const { changeState } = useToolbar()

    return (
      <GhostButton
        {...rest}
        ref={ref}
        bgClassName="w-10 h-10"
        className={cn(
          "toolbar-trigger",
          tab === "game"
            ? "[&_svg]:text-[1.4rem] [&_svg]:text-content4-foreground"
            : "[&_svg]:text-content4-foreground",
          className
        )}
        onPress={() => changeState(`open:${tab}`)}
      >
        {tab === "game" ? (
          <MaterialSymbolsSportsEsportsOutline />
        ) : (
          <MaterialSymbolsSettingsOutline />
        )}
      </GhostButton>
    )
  }
)
ToolbarTrigger.displayName = "ToolbarTrigger"

const Toolbar = {
  Root: ToolbarRoot,
  Idle: ToolbarIdle,
  Separator,
  Trigger: ToolbarTrigger,
  Tab: ToolbarTab,
  Title: ToolbarTitle,
}
export { Toolbar, useToolbar, type ToolbarRootProps, type ToolbarContextValue }

/* -------------------------------------------------------------------------------------------------
 * Rename
 * -----------------------------------------------------------------------------------------------*/
// type RenameProps = HTMLAttributes<HTMLDivElement>
// const Rename = forwardRef<HTMLDivElement, RenameProps>(
//   ({ className, ...rest }, ref) => {
//     return <div ref={ref} className={cn("toolbar-rename", className)} {...rest} />
//   }
// )
// Rename.displayName = "Rename"
