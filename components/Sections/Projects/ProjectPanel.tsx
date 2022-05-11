import { classNames } from '@utils'
import Image from 'next/image'
import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'
import { motion } from 'framer-motion'
import Link from 'next/link'

type Props = {
  imgSrc: string,
  title: string,
  description: string,
  tech: string[],
  links: {
    github: string,
    web: string
  },
  reverse?: boolean
}

const ProjectPanel = ({ imgSrc, title, description, tech, links, reverse = false }: Props) => {
  return (
    <div className='relative grid grid-cols-12 gap-2 mb-24 w-full items-center h-[32rem]'>
      <div className={classNames(
        'relative col-start-1 col-end-13 z-20 flex flex-col',
        reverse ? "items-start text-left sm:col-end-9 lg:col-end-7" : "items-end text-right sm:col-start-5 lg:col-start-7"
      )}>
        <h6 className='text-sm font-mono font-medium text-primary-400 mb-1'>Personal Project</h6>
        <h5 className='text-secondary-300 font-semibold text-2xl'>{title}</h5>
        <div className='py-5'>
          <p className='px-5 py-10 bg-secondary-850 rounded-md shadow-md font-medium'>{description}</p>
        </div>
        <ul className='flex gap-5 w-max'>
          {tech.map((t,index) => <li key={index} className='font-mono text-sm'>{t}</li>)}
        </ul>
        <div className='flex pt-5 gap-5 w-max'>
          <a href={links.github} target="_blank" className='transition-all hover:text-primary-400'>
            <FiGithub size={22} />
          </a>
          <a href={links.web} target="_blank" className='transition-all hover:text-primary-400'>
            <FiExternalLink size={22} />
          </a>
        </div>
      </div>
      <Link href={links.web} passHref target="_blank">
        <a target="_blank"
          className={classNames(
            'absolute top-[50%] -translate-y-[50%] h-[75%] bottom-0 left-0 w-full rounded shadow-md z-10 cursor-pointer col-start-1 col-end-auto group',
            reverse ? "sm:col-start-6 sm:col-end-13" : "sm:col-start-1 sm:col-end-8"
        )}>
          <div className='absolute top-0 bottom-0 right-0 left-0 bg-primary-500 opacity-30 transition-all duration-200 group-hover:opacity-0 z-10 rounded' />
          <div className='absolute top-0 bottom-0 right-0 left-0 transition-all duration-200 grayscale group-hover:grayscale-0'>
            <Image
              className='rounded shadow-md'
              src={imgSrc}
              layout="fill"
              objectFit='cover'
              objectPosition="center"
            />
          </div>
        </a>
      </Link>
    </div>
  )
}

export default ProjectPanel