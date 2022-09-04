import { useState, useEffect } from 'react'

interface Props {
  show: boolean
  delay?: number
}

const LazySpinner = (props: Props) => {
  const { show = false, delay = 0 } = props
  const [showSpinner, setShowSpinner] = useState(false)

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    if (!show) {
      setShowSpinner(false)
      return
    }

    if (delay === 0) {
      setShowSpinner(true)
    } else {
      timeout = setTimeout(() => setShowSpinner(true), delay)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [show, delay])

  return showSpinner ? (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: 'auto',
        background: 'transparent',
        display: 'block',
        shapeRendering: 'auto',
      }}
      width="100px"
      height="100px"
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
  ) : null
}

export default LazySpinner
