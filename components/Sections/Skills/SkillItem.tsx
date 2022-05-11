import { classNames } from '@utils'
import React from 'react'
import { motion } from 'framer-motion'

type Props = {
  icon: JSX.Element,
  title: string,
  span: number,
  index: number
}

const SkillItem = ({ icon, title, span, index }: Props) => {

  const tabItemVariants = {
    active: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * .05,
        duration: .15,
      },
    },
    inactive: {
      opacity: 0,
      y: 10,
      transition: {
        delay: index * .01,
        duration: .15
      }
    }
  }

  return (
    <motion.div className={classNames(
      'gap-3 py-3 pl-4 bg-secondary-850 shadow rounded inline-flex items-center group cursor-default',
      span === 1 ? "col-span-1" : "col-span-2"
    )}
      whileHover={{scale: 1.015}} transition={{type:"spring", stiffness: 400}}
      variants={tabItemVariants} initial="inactive" animate="active" exit="inactive"
    >
      <p className='text-primary-400'>{icon}</p>
      <p className='font-mono text-sm group-hover:text-primary-400 transition-all'>{title}</p>
    </motion.div>
  )
}

export default SkillItem