import { SVGProps } from "react"

export function Unsplash(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fill="currentColor" d="M15 4.5H9v4h6zm-11 6h5v4h6v-4h5v9H4z"></path>
    </svg>
  )
}

export function UnsplashStroke(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.5"
        d="M9.5 7.5v-3h5v3zM16 16v-5h3.5v8.5h-15V11H8v5z"
        color="currentColor"
      ></path>
    </svg>
  )
}
