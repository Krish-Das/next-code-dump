import { cn } from "@/lib/utils"

export function Paragraph({
  children,
  className,
  center,
}: {
  children: React.ReactNode
  className?: string
  center?: boolean
}) {
  return (
    <p
      className={cn("font-mona text-sm", center && "text-center", className)}
      style={{
        fontFeatureSettings: "'ss01' on",
      }}
    >
      {children}
    </p>
  )
}
