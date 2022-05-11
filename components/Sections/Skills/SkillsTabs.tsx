import { ITab } from '@interfaces'
import React, { SetStateAction } from 'react'
import SkillsTab from './SkillsTab'

type Props = {
  tabs: ITab[]
  changeTab: SetStateAction<any>,
  activeTab: string
}

const SkillsTabs = ({ tabs, changeTab, activeTab }: Props) => {
  return (
    <div className='flex-none w-full flex gap-5'>
      {tabs.map(tab => <SkillsTab key={tab.id} tab={tab} changeTab={changeTab} active={activeTab === tab.name} />)}
    </div>
  )
}

export default SkillsTabs