import React from 'react'
import { ChildrenProps } from '@types'
import { Header } from './Header'
import { Main } from './Main'
import { Footer } from './Footer'
import { motion } from 'framer-motion'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <motion.div 
      className='min-h-screen bg-secondary-900 text-secondary-400 selection:bg-dim-300 overflow-x-hidden'
      initial={{opacity: 0}} animate={{opacity:1}} transition={{delay:.1,duration:.2}}
    >
      <Header />

      <Main>
        {children}
      </Main>

      <Footer />
    </motion.div>
  )
}

export default Layout