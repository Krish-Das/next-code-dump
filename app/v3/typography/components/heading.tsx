import { cn } from "@/lib/utils"

export function PrimaryHeading({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h2
      className={cn(
        "text-[2.85rem] font-black uppercase leading-none",
        className
      )}
      style={{
        fontFamily: "var(--font-mona), sans-serif",
        fontStretch: "125%",
        fontStyle: "oblique 12deg",
      }}
    >
      {children}
    </h2>
  )
}

export function DualFontHeading({
  children,
  className,
  noMask,
}: {
  children: React.ReactNode
  className?: string
  noMask?: boolean
}) {
  return (
    <h3
      className={cn(
        "font-mona text-[2.85rem] font-medium leading-loose",
        "[&>em]:font-redI [&>em]:font-normal [&>em]:not-italic",
        className
      )}
      style={{
        // TODO: animate the angle
        maskImage: noMask
          ? ""
          : "linear-gradient(355deg, black, black, transparent)",
      }}
    >
      {children}
    </h3>
  )
}

export function TertiaryHeading({
  children,
  className,
  textSmall,
}: {
  children: React.ReactNode
  className?: string
  textSmall?: boolean
}) {
  return (
    <h4
      className={cn(
        "font-mona leading-none",
        textSmall ? "text-sm font-semibold" : "text-base font-medium",
        className
      )}
    >
      {children}
    </h4>
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
        "text-[0.7rem]s text-xs font-bold uppercase leading-snug",
        "[&>svg]:text-sm",
        className
      )}
      style={{
        fontStretch: "115%",
        fontFamily: "var(--font-mona), sans-serif",
      }}
    >
      {children}
    </h3>
  )
}
