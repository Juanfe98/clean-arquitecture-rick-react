// import clsx from 'clsx';
import { HTMLAttributes } from 'react'

const sizes = {
  auto: 'h-auto',
  full: 'h-full',
  sm: 'w-5 h-5',
  md: 'w-8 h-8',
  lg: 'w-12 h-12',
} as const

export interface SpinnerProps extends HTMLAttributes<SVGSVGElement> {
  size?: 'auto' | 'full' | 'sm' | 'md' | 'lg' | null
}

export default function Spinner({
  className,
  size = 'full',
  ...props
}: SpinnerProps) {
  /**
   * Two arcs spinning in opposite directions with the inner spinning at twice the speed
   */
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{margin: "auto", background: "rgb(255, 255, 255)", display: "block", shapeRendering: "auto",}}
      width="200px"
      height="200px"
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid"
    >
      <circle
        cx="50"
        cy="50"
        r="32"
        stroke-width="8"
        stroke="#e15b64"
        stroke-dasharray="50.26548245743669 50.26548245743669"
        fill="none"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;360 50 50"
        ></animateTransform>
      </circle>
      <circle
        cx="50"
        cy="50"
        r="23"
        stroke-width="8"
        stroke="#f8b26a"
        stroke-dasharray="36.12831551628262 36.12831551628262"
        stroke-dashoffset="36.12831551628262"
        fill="none"
        stroke-linecap="round"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;1"
          values="0 50 50;-360 50 50"
        ></animateTransform>
      </circle>
    </svg>
  )
}
