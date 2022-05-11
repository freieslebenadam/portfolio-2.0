import { ChildrenProps } from '@types'
import React from 'react'
import Aside from './Aside'

const Main = ({ children }: ChildrenProps) => {
  return (
    <main className='relative flex justify-center'>
      <Aside position='left'>
        Left aside
      </Aside>
      <Aside position='right'>
        Right aside
      </Aside>
      <div className='h-screen max-w-5xl w-full mx-24'>
        {children}
      </div>
    </main>
  )
}

export default Main