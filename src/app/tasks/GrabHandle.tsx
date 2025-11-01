import { RefObject, SVGProps } from "react"
import { Button } from "react-aria-components"

const GrabHandle = ({ ref }: { ref: RefObject<HTMLButtonElement | null> }) => {
  return (
    <Button
      className="data-pressed:bg-fill-secondary data-hovered:bg-fill-tertiary text-label-secondary data-hovered:text-label-secondary data-pressed:text-label-primary inline-grid size-6 place-content-center rounded-sm text-lg outline-none data-focus-visible:ring-2"
      ref={ref}
    >
      <GrabIcon />
    </Button>
  )
}

export function GrabIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 15 15"
      {...props}
    >
      {/* Icon from Radix Icons by WorkOS - https://github.com/radix-ui/icons/blob/master/LICENSE */}
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M5.5 4.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m4 0a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25M10.625 7.5a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0M5.5 8.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25m5.125 2.875a1.125 1.125 0 1 1-2.25 0a1.125 1.125 0 0 1 2.25 0M5.5 12.625a1.125 1.125 0 1 0 0-2.25a1.125 1.125 0 0 0 0 2.25"
        clipRule="evenodd"
      />
    </svg>
  )
}

export default GrabHandle
