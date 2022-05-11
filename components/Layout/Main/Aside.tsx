import { ChildrenProps } from '@types'
import { classNames } from '@utils'
import React from 'react'

type Position = "left" | "right"
type Props = {
  position: Position
} & ChildrenProps

const Aside = ({ children, position }: Props) => {
  const positionStyle = position === "left" ? ({ left: 10 }) : ({ right: 10 })

  return (
    <aside className='hidden fixed w-14 md:flex flex-col items-center bottom-0 gap-2 xl:px-20' style={positionStyle}>
      {children}
      <div className='w-[2px] bg-secondary-600 h-28 flex-none' />
    </aside>
  )
}

export default Aside