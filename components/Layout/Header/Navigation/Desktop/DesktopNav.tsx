import { INavItem } from '@interfaces'
import React from 'react'
import DesktopNavMenu from './DesktopNavMenu'

type Props = {
  navItems: INavItem[]
}

const DesktopNav = ({ navItems }: Props) => {
  return (
    <div className='hidden h-full md:block mx-4'>
      <DesktopNavMenu items={navItems} />
    </div>
  )
}

export default DesktopNav