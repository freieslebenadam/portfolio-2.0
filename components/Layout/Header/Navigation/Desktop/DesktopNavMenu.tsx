import { NavItems } from '@lib'
import React from 'react'
import DesktopNavMenuItem from './DesktopMenuNavItem'

const DesktopNavMenu = () => {
  return (
    <ul className='flex gap-8'>
      {NavItems.map(item => (
        <DesktopNavMenuItem key={item.id} item={item} />
      ))}
    </ul>
  )
}

export default DesktopNavMenu