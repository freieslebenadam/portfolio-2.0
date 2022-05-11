import React from 'react'
import MobileNav from './Navigation/Mobile/MobileNav'
import DesktopNav from './Navigation/Desktop/DesktopNav'

const Navigation = () => {
  return (
    <nav className='px-6'>
      <DesktopNav />
      <MobileNav />
    </nav>
  )
}

export default Navigation