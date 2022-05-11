import { ChildrenProps } from '@types'
import React from 'react'

type Props = {
  href?: string
} & ChildrenProps

const Button = ({ children, href }: Props) => {
  return (
    <a className='text-primary-400 border-primary-400 font-mono py-4 px-6 border-2 rounded-md text-lg font-medium bg-primary-400 bg-opacity-0 transition-all hover:bg-opacity-10 inline-block no-underline' href={href ? href : ""}>
      {children}
    </a>
  )
}

export default Button