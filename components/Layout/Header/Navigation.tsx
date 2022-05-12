import React from 'react'
import MobileNav from './Navigation/Mobile/MobileNav'
import DesktopNav from './Navigation/Desktop/DesktopNav'
import { INavItem } from '@interfaces'
import { useLocale } from '@hooks'

const Navigation = () => {
  const {t} = useLocale()

  const NavItems: INavItem[] = [
    { id: "01", title: t.nav.about, path: "#about" },
    { id: "02", title: t.nav.skills, path: "#skills" },
    { id: "03", title: t.nav.projects, path: "#projects" },
    { id: "04", title: t.nav.contact, path: "#contact" },
  ]

  return (
    <nav className='px-6'>
      <DesktopNav navItems={NavItems} />
      <MobileNav navItems={NavItems} />
    </nav>
  )
}

export default Navigation