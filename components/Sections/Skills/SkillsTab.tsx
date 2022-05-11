import { ITab } from '@interfaces'
import { classNames } from '@utils'
import React, { SetStateAction } from 'react'

type Props = {
  tab: ITab,
  changeTab: SetStateAction<any>,
  active: boolean
}

const SkillsTab = ({ tab, changeTab, active }: Props) => {
  return (
    <button 
      className={classNames(
        'flex-auto flex items-center justify-center py-2 transition-all rounded-t',
        active ? "border-b-4 text-primary-400 border-primary-400 font-medium" : "border-b-2 border-secondary-700 text-secondary-400 hover:text-primary-400"
      )}
      onClick={() => changeTab(tab.name)}
    >
      <h5 className='font-mono'>{tab.title}</h5>
    </button>
  )
}

export default SkillsTab