import * as React from "react"

const SprinkleSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    id="Sprinkle"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 60 60"
    xmlSpace="preserve"
    fill="currentColor"
    // width="1em"
    // height="1em"
    {...props}
  >
    <path id="Right" className="st0" d="M36.6 52.9H60V60H36.6z" />
    <path
      id="Center"
      transform="rotate(-45.001 35.436 24.565)"
      className="st0"
      d="M23.8 21h23.3v7H23.8z"
    />
    <path id="Left" className="st0" d="M0 0h7.1v23.4H0z" />
  </svg>
)

export default SprinkleSvg
