import Section from '@components/Section'
import { useLocale } from '@hooks'
import Image from 'next/image'
import React from 'react'

const About = () => {
  const {t} = useLocale()

  return (
    <div className='max-w-[56rem] mx-auto'>
      <Section id='01' title={t.sections.about.title} path='about' >
        <div className='flex md:flex-row flex-col items-center my-8'>
          <div className='text-secondary-500 pr-0 md:pr-16 w-full flex flex-col gap-6 text-center md:text-left font-medium'>
            {t.sections.about.content.map((p,index) => <p key={index}>{p}</p>)}
          </div>
          <div className='relative rounded shadow-md my-16 md:m-0 min-w-[285px] min-h-[285px] md:min-w-[185px] md:min-h-[185px] lg:min-w-[305px] lg:min-h-[305px] group transition-all duration-300 hover:translate-x-1 hover:translate-y-1'>
            <div className='absolute top-0 right-0 left-0 bottom-0 rounded bg-primary-400 opacity-40 group-hover:opacity-0 z-20 transition-all duration-300' />
            <div className='absolute top-0 right-0 left-0 bottom-0 rounded border-2 border-primary-400 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300' />
            <div className='absolute top-0 right-0 left-0 bottom-0 grayscale rounded group-hover:grayscale-0 transition-all duration-300'>
              <Image
                className='rounded shadow-md'
                src={`/images/profilepic.jpeg`}
                layout="fill"
                objectFit='cover'
                objectPosition="center"
                priority
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default About