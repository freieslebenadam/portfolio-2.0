import React from 'react'
import Navigation from './Navigation'
import { Logo } from '@components'
import { theme } from '@tailwind-config'
import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () =>{
  return (
    <header className='px-6 h-24 flex items-center bg-dim-100'>
      <div className="flex items-center justify-between flex-auto h-12">
        <div className='flex-none h-full w-12 flex justify-center items-center'>
          <Link href={`/`}>
            <motion.a 
              className='block p-2 w-full h-full transition-all hover:brightness-110 hover:contrast-125 cursor-pointer'
              whileHover={{scale: 1.1}}
              whileTap={{scale: .95}}
            >
              <Logo
                foregroundFill={theme.extend.colors.primary["400"]}
                backgroundFill={theme.extend.colors.primary["800"]}
              />
            </motion.a>
          </Link>
        </div>

        <div>
          {/* items */}
        </div>

        <Navigation />
      </div>
    </header>
  )
}

export default Header