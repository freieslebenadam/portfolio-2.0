import React from 'react'
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-b from-transparent to-dim-200 text-center py-10 font-mono font-medium text-bland-500 text-sm'>
      <p>
        &copy; {(new Date()).getFullYear()} Adam Freiesleben
      </p>
      <ul className='flex gap-6 mx-auto w-max'>
        <li>
          <a href="https://github.com/freieslebenadam" target="_blank" className='transition-all hover:text-primary-400 hover:-translate-y-1 p-2'>
            <FiGithub size={22} />
          </a>
        </li>
        <li>
          <a href="https://linkedin.com/in/adam-freiesleben-2584b6142" target="_blank" className='transition-all hover:text-primary-400 hover:-translate-y-1 p-2'>
            <FiLinkedin size={22} />
          </a>
        </li>
        <li>
          <a href="mailto:adam.fre@seznam.cz" target="_blank" className='transition-all hover:text-primary-400 hover:-translate-y-1 p-2'>
            <FiMail size={22} />
          </a>
        </li>
      </ul>
    </footer>
  )
}

export default Footer