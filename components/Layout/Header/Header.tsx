import React from 'react'
import Navigation from './Navigation'

const Header = () =>{
  return (
    <header className='bg-secondary-900 px-6 h-24 flex items-center'>
      <div className="flex items-center justify-between flex-auto h-12">
        <div className='flex-none h-full w-12 flex justify-center items-center'>
          Logo
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