import Image from 'next/image'
import React from 'react'
import { FiExternalLink, FiGithub } from 'react-icons/fi'

type Props = {
  imgSrc: string,
  title: string,
  description: string,
  tech: string[],
  links: {
    github: string,
    web: string
  }
}

const ProjectPanel = ({ imgSrc, title, description, tech, links }: Props) => {
  return (
    <div className='relative grid grid-cols-12 gap-2 mb-24 w-full items-centerh-64'>
      <div className='relative col-start-1 sm:col-start-5 lg:col-start-7 col-end-13 text-right z-20'>
        <h6 className='text-sm font-mono font-medium text-primary-400 mb-1'>Project</h6>
        <h5 className='text-secondary-300 font-semibold text-2xl'>{title}</h5>
        <div className='py-5'>
          <p className='px-5 py-10 bg-secondary-850 rounded-md shadow-md font-medium'>{description}</p>
        </div>
        <ul className='flex justify-end gap-5'>
          {tech.map(t => <li className='font-mono text-sm'>{t}</li>)}
        </ul>
        <div className='flex justify-end pt-5 gap-5'>
          <a href={links.github} target="_blank" className='transition-all hover:text-primary-400'>
            <FiGithub size={22} />
          </a>
          <a href={links.web} target="_blank" className='transition-all hover:text-primary-400'>
            <FiExternalLink size={22} />
          </a>
        </div>
      </div>
      <div className='col-start-1 absolute top-[50%] -translate-y-[50%] h-[75%] bottom-0 left-0 w-full rounded-md shadow-md col-end-8 z-10 transition-all '>
        <Image
          className='rounded-md shadow-md'
          src={imgSrc}
          layout="fill"
          objectFit='cover'
          objectPosition="center"
        />
      </div>
    </div>
  )
}

export default ProjectPanel