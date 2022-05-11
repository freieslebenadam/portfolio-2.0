import { ISkill } from '@interfaces'
import { AnimatePresence } from 'framer-motion'
import React from 'react'
import SkillItem from './SkillItem'

type Props = {
  items?: ISkill[]
}

const SkillsTabContext = ({ items }: Props) => {
  if (!items) return null

  return (
    <div className='flex-auto mt-5 grid grid-cols-2 gap-2 flex-wrap'>
      <AnimatePresence exitBeforeEnter>
        {items.map((item,index) => (
          <SkillItem 
            key={item.id}
            title={item.title}
            span={(index === items.length-1 && items.length % 2 !== 0 ) ? 2 : 1}
            icon={item.icon}
            index={index}
          />
        ))}
      </AnimatePresence>
    </div>
  )
}

export default SkillsTabContext