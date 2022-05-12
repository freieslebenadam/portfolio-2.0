import React from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MobileNavMenuItem'
import { INavItem } from '@interfaces'

const variants = {
  open: {
    transition: { taggerChildren: .07, delayChildren: .2 },
  },
  closed: {
    transition: { staggerChildren: .05, staggerDirection: -1 },
  }
}

type Props = {
  items: INavItem[],
  toggle: () => any
}

const MobileNavMenu = ({ items, toggle }: Props) => {
  return (
    <motion.ul variants={variants} className="aboslute top-0 left-0 h-full right-0 px-10 flex flex-col justify-center gap-5">
      {items.map(item => (
        <MenuItem item={item} key={item.id} toggle={toggle} />
      ))}
      <MenuItem cv />
    </motion.ul>
  )
}

export default MobileNavMenu