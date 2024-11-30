import { cn } from "@/lib/utils"

export function Heading({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h2 className={cn("font-gambarino text-5xl", className)}>{children}</h2>
  )
}
export function Subheading({
  className,
  children,
}: {
  className?: string
  children: React.ReactNode
}) {
  return (
    <h3
      className={cn(
        "flex items-center gap-1",
        "text-[0.7rem] font-semibold uppercase leading-4 tracking-wider text-[#CDFCBC]",
        "[&>svg]:text-base [&>svg]:text-brand-green",
        className
      )}
      style={{
        fontFeatureSettings: "'ss01' on",
        fontStretch: "115%",
        fontFamily: "var(--font-mona), sans-serif",
      }}
    >
      {children}
    </h3>
  )
}

export function Para({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <p
      className={cn(
        "max-w-[41ch] text-sm text-foreground/90",
        "[&>em]:font-gambarino [&>em]:text-base [&>em]:font-normal [&>em]:not-italic [&>em]:text-foreground",
        className
      )}
    >
      {children}
    </p>
  )
}

export function Grid({
  children,
  className,
}: {
  children?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("grid w-full grid-cols-8 gap-3", className)}>
      {children}
    </div>
  )
}

export function Space({
  className,
  size = "default",
}: {
  className?: string
  size?: "default"
}) {
  // TODO: use CVA here
  return (
    <div
      className={cn("spacer", size === "default" && "h-[20vh]", className)}
    />
  )
}
