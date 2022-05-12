import { INavItem } from '@interfaces'
import React from 'react'
import DesktopNavMenuItem from './DesktopMenuNavItem'

type Props = {
  items: INavItem[]
}

const DesktopNavMenu = ({ items }: Props) => {
  return (
    <ul className='flex gap-8'>
      {items.map(item => (
        <DesktopNavMenuItem key={item.id} item={item} />
      ))}
      <DesktopNavMenuItem cv />
    </ul>
  )
}

export default DesktopNavMenu