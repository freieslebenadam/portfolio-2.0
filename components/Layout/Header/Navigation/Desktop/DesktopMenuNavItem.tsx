import { INavItem } from '@interfaces'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  item?: INavItem,
  cv?: boolean
}

const DesktopMenuNavItem = ({ item, cv = false }: Props) => {
  if (cv) return (
    <motion.li className='cursor-pointer group select-none' whileHover={{scale:1.02}}>
      <Link href="/cv.pdf">
        <a className="border-2 border-primary-400 rounded px-6 py-2 text-primary-400 font-mono font-medium transition-all hover:bg-primary-400 hover:bg-opacity-20">
          Resume
        </a>
      </Link>
    </motion.li>
  )

  if (item)
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

  return null
}

export default DesktopMenuNavItem