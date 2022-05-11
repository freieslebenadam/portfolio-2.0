import React from 'react'

const Footer = () => {
  return (
    <footer className='mx-auto py-2 font-mono font-medium text-bland-500 text-sm'>
      &copy; {(new Date()).getFullYear()} Adam Freiesleben
    </footer>
  )
}

export default Footer