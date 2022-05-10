import React from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MobileNavMenuItem'
import { NavItems } from '@lib'

const variants = {
  open: {
    transition: { taggerChildren: .07, delayChildren: .2 },
  },
  closed: {
    transition: { staggerChildren: .05, staggerDirection: -1 },
  }
}

const MobileNavMenu = () => {
  return (
    <motion.ul variants={variants} className="aboslute top-0 left-0 h-full right-0 px-12 flex flex-col justify-center gap-6">
      {NavItems.map(item => (
        <MenuItem item={item} key={item.id} />
      ))}
    </motion.ul>
  )
}

export default MobileNavMenu