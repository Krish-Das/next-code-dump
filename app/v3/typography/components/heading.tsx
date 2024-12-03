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
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <h3
      className={cn(
        "font-mona text-[2.85rem] font-medium leading-none",
        "[&>em]:font-redI [&>em]:font-normal [&>em]:not-italic",
        className
      )}
    >
      {children}
    </h3>
  )
}
