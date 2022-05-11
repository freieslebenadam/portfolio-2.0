import { INavItem } from '@interfaces'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  item: INavItem
}

const DesktopMenuNavItem = ({ item }: Props) => {
  return (
    <motion.li className='flex gap-1 cursor-pointer group select-none' whileHover={{ y: -3 }}>
      <Link href={item.path}>
        <a>
          <span className='font-medium font-mono text-primary-400'>
            {item.id}.
          </span>
          <span className='transition-all group-hover:text-primary-400'>
            {item.title}
          </span>
        </a>
      </Link>
    </motion.li>
  )
}

export default DesktopMenuNavItem