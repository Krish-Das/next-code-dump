import { HTMLAttributes } from "react"
import { cn } from "@heroui/react"

export default function SettingsTitle({
  className,
  ...rest
}: HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h4
      className={cn(
        "text-sm font-bold tracking-tight text-default-900/80",
        className
      )}
      {...rest}
    />
  )
}
