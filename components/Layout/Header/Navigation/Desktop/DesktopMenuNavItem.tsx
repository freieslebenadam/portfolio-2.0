import { INavItem } from '@interfaces'
import Link from 'next/link'
import React from 'react'

type Props = {
  item: INavItem
}

const DesktopMenuNavItem = ({ item }: Props) => {
  return (
    <Link href={item.path} passHref>
      <li className='flex gap-1 cursor-pointer transition-all hover:-translate-y-1 group'>
          <span className='font-medium font-mono text-primary-400'>
            {item.id}.
          </span>
          <span className='transition-all group-hover:text-primary-400'>
            {item.title}
          </span>
      </li>
    </Link>
  )
}

export default DesktopMenuNavItem