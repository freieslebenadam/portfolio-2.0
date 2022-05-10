import React from 'react'
import { ChildrenProps } from '@types'
import { Header } from './Header'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className='min-h-screen bg-secondary-900 text-secondary-400'>
      <Header />
      {children}
    </div>
  )
}

export default Layout