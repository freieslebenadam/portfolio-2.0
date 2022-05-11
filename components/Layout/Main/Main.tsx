import { ChildrenProps } from '@types'
import React from 'react'
import Aside from './Aside'

//TODO: Implement aside links

const Main = ({ children }: ChildrenProps) => {
  return (
    <main className='relative flex justify-center'>
      <Aside position='left'>
        Left aside
      </Aside>
      <Aside position='right'>
        Right aside
      </Aside>
      <div className='h-screen max-w-5xl w-full mx-12 md:mx-24'>
        {children}
      </div>
    </main>
  )
}

export default Main