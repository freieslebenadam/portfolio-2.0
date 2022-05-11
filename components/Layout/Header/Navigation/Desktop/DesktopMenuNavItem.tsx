import { INavItem } from '@interfaces'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  item: INavItem
}

const DesktopMenuNavItem = ({ item }: Props) => {
  return (
    <motion.li className='cursor-pointer group select-none' whileHover={{ y: -3 }}>
      <Link href={item.path}>
        <a className='flex gap-1'>
          <span className='font-medium font-mono text-primary-400'>
            {item.id}.
          </span>
          <span className='transition-all font-mono font-medium group-hover:text-primary-400'>
            {item.title}
          </span>
        </a>
      </Link>
    </motion.li>
  )
}

export default DesktopMenuNavItem