import React from 'react'
import { motion } from 'framer-motion'

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

type Props = {
  item: any
}
const MenuItem = ({ item }: Props) => {
  return (
    <motion.li
      className='flex items-center cursor-pointer'
      variants={variants}
      whileHover={{ x: 5 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="w-16 h-16 rounded-md mr-[10px] font-bold flex items-center justify-center text-lg font-mono text-primary-400 select-none">
        {item.id}
      </div>
      <div className="rounded-md h-16 flex-1 flex items-center text-lg transition-all hover:text-primary-400 font-light hover:font-medium text-secondary-200 select-none">
        {item.title}
      </div>
    </motion.li>
  )
}

export default MenuItem