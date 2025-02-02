import { Theme } from "@radix-ui/themes"

export default function Provider({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Theme>{children}</Theme>
    </>
  )
}