import { ChildrenProps } from '@types'
import React from 'react'
import Aside from './Aside'

const Main = ({ children }: ChildrenProps) => {
  return (
    <main className='relative'>
      <Aside>
        Hola
      </Aside>
      <div className='h-screen bg-lighter-50 mx-24'>
        {children}
      </div>
      <Aside>
        Hola
      </Aside>
    </main>
  )
}

export default Main