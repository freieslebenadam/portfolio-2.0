import { ChildrenProps } from '@types'
import React from 'react'
import Aside from './Aside'
import { FiGithub, FiLinkedin } from "react-icons/fi"

//TODO: Implement aside links

const Main = ({ children }: ChildrenProps) => {
  return (
    <main className='relative flex justify-center'>
      <Aside position='left'>
        <div className='p-2 flex flex-col gap-3 -translate-y-4'>
          <a href="https://github.com/freieslebenadam" target="_blank" className='transition-all hover:text-primary-400 hover:-translate-y-1 p-2'>
            <FiGithub size={22} />
          </a>
          <a href="https://linkedin.com/in/adam-freiesleben-2584b6142" target="_blank" className='transition-all hover:text-primary-400 hover:-translate-y-1 p-2'>
            <FiLinkedin size={22} />
          </a>
        </div>
      </Aside>
      <Aside position='right'>
        <div className='rotate-90 p-2 text-sm font-mono font-medium flex-auto -translate-y-[6.5rem] transition-all hover:-translate-y-[6rem] hover:text-primary-400 tracking-widest'>
          <a href='mailto:adam.fre@seznam.cz'>
            adam.fre@seznam.cz
          </a>
        </div>
      </Aside>
      <div className='min-h-screen max-w-5xl w-full mx-12 md:mx-24'>
        {children}
      </div>
    </main>
  )
}

export default Main