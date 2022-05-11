import { ChildrenProps } from '@types'
import React from 'react'

const Aside = ({ children }: ChildrenProps) => {
  return (
    <aside className='fixed h-screen w-24 flex-none'>
      {children}
    </aside>
  )
}

export default Aside