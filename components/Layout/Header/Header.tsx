import React, { useRef } from 'react'
import MenuToggle from './MenuToggle'
import Navigation from './Navigation'
import { motion, useCycle } from "framer-motion"
import { useDimensions } from '@hooks'
import { classNames } from '@utils'

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

const Header = () =>{
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <header className='bg-secondary-900 px-6 h-24 flex items-center'>
      <div className="flex items-center justify-between flex-auto h-12">
        <div className='flex-none h-full w-12 flex justify-center items-center'>
          Logo
        </div>

        <div>
          {/* items */}
        </div>

        <nav>
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
                isOpen ? "backdrop-blur-sm" : ""
              )}
              variants={sidebar}
            >
              <div className='absolute right-0 top-0 bottom-0 w-96 bg-secondary-850'>
                <Navigation />
              </div>
            </motion.div>
            <MenuToggle toggle={() => toggleOpen()} />
          </motion.div>
        </nav>
      </div>
    </header>
  )
}

export default Header