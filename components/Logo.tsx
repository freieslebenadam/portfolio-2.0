import * as React from "react"

type Props = {
  foregroundFill?: string,
  backgroundFill?: string
}

const SvgComponent = ({ foregroundFill = "#ef233c", backgroundFill = "#891826" }: Props) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 97.79 94"
    className="transition-all"
  >
    <defs>
      <style>{`.cls-2{fill:${foregroundFill}}`}</style>
    </defs>
    <path
      style={{
        fill: backgroundFill,
      }}
      d="M29.38 94H0L27.73 0H57.1L29.38 94z"
    />
    <path className="cls-2" d="M68.43 94h29.36L70.08 0H40.72l27.71 94z" />
    <path
      className="cls-2"
      d="M78.07 27.7H19.74L27.71 0H70.1l7.97 27.7zM92.72 76.8H5.08l8.16-27.7h71.32l8.16 27.7z"
    />
  </svg>
)

export default SvgComponent