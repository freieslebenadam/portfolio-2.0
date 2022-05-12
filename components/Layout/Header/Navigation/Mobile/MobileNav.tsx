import React, { useRef } from 'react'
import MenuToggle from './MenuToggle'
import MobileNavMenu from './MobileNavMenu'
import { motion, useCycle } from "framer-motion"
import { useDimensions } from '@hooks'
import { classNames } from '@utils'
import { INavItem } from '@interfaces'

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(0px at 100% 0)",
    transition: {
      delay: .1,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

type Props = {
  navItems: INavItem[]
}

const MobileNav = ({ navItems }: Props) => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.div 
      className='flex-none h-full w-12 md:hidden'
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      <motion.div 
        className={classNames(
          "absolute shadow-xl right-0 top-0 bottom-0 left-0 z-10 transition-backdrop duration-300",
          isOpen ? "backdrop-blur-sm backdrop-brightness-90" : ""
        )}
        variants={sidebar}
      >
        <div className='absolute right-0 top-0 bottom-0 min-w-[320px] bg-secondary-850'>
          <MobileNavMenu items={navItems} />
        </div>
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.div>
  )
}

export default MobileNav