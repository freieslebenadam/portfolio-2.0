import { ChildrenProps } from '@types'
import Link from 'next/link'
import React from 'react'

type Props = {
  href?: string
} & ChildrenProps

const Button = ({ children, href = "#" }: Props) => {
  return (
    <Link href={href} passHref>
      <a className='text-primary-400 border-primary-400 font-mono py-4 px-6 border-2 rounded-md text-lg font-medium bg-primary-400 bg-opacity-0 transition-all hover:bg-opacity-10 inline-block no-underline'>
        {children}
      </a>
    </Link>
  )
}

export default Button