import { cva, VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const spacingVariants = cva("spacing w-full", {
  variants: {
    size: {
      base: "h-4",
    },
  },
  defaultVariants: {
    size: "base",
  },
})

export type SpacingProps = React.HtmlHTMLAttributes<HTMLDivElement> &
  VariantProps<typeof spacingVariants> & {}

export function Spacing({ className, size, ...props }: SpacingProps) {
  return <div className={cn(spacingVariants({ size, className }))} {...props} />
}
