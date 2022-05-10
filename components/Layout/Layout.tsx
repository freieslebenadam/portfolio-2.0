import { ChildrenProps } from '@types'
import React from 'react'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className='min-h-screen bg-secondary-900 text-secondary-400'>
      {children}
    </div>
  )
}

export default Layout