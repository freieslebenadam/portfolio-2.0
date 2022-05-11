import { ChildrenProps } from '@types'
import { classNames } from '@utils'
import React from 'react'

type Position = "left" | "right"
type Props = {
  position: Position
} & ChildrenProps

const Aside = ({ children, position }: Props) => {
  const positionStyle = position === "left" ? ({ left: 0 }) : ({ right: 0 })

  return (
    <aside className='fixed w-24 flex flex-col items-center bottom-0 bg-dim-500' style={positionStyle}>
      {children}
    </aside>
  )
}

export default Aside