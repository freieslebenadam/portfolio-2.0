import React from 'react'
import { ChildrenProps } from '@types'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className='min-h-screen bg-secondary-900 text-secondary-400 selection:bg-dim-300'>
      <Header />

      <Main>
        {children}
      </Main>

      <Footer />
    </div>
  )
}

export default Layout