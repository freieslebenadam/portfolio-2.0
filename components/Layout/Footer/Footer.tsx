import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-transparent to-dim-200 text-center py-10 font-mono font-medium text-bland-500 text-sm'>
      &copy; {(new Date()).getFullYear()} Adam Freiesleben
    </footer>
  )
}

export default Footer