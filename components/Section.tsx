import { ChildrenProps } from '@types'
import React from 'react'

type Props = {
  id: string,
  path: string,
  title: string,
} & ChildrenProps

const Section = ({ id, path, title, children }: Props) => {
  return (
    <section id={path} className="w-full my-48">
      <article className='w-full'>
        <h4 className='capitalize flex items-center font-bold gap-2'>
          <span className='flex-none font-mono text-primary-400 font-medium text-lg'>{id}.</span>
          <span className='flex-none text-2xl font-semibold text-secondary-300'>{title}</span>
          <span className='ml-2 h-[2px] flex-auto bg-secondary-800' />
        </h4>
        <div className='py-5 w-full'>
          {children}
        </div>
      </article>
    </section>
  )
}

export default Section