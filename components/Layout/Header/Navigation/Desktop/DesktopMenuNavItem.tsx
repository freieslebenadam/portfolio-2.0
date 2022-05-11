import { INavItem } from '@interfaces'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  item: INavItem
}

const DesktopMenuNavItem = ({ item }: Props) => {
  return (
    <Link href={item.path} passHref>
      <motion.li className='flex gap-1 cursor-pointer group' whileHover={{ y: -3 }}>
          <span className='font-medium font-mono text-primary-400'>
            {item.id}.
          </span>
          <span className='transition-all group-hover:text-primary-400'>
            {item.title}
          </span>
      </motion.li>
    </Link>
  )
}

export default DesktopMenuNavItem