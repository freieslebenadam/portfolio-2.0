import Section from '@components/Section'
import Image from 'next/image'
import React from 'react'

const aha = [
  "Hello! My name is Adam and I enjoy making modern website applications. My interest in web development started back when I was a child and I have enjoyed pursuing it ever since.",
  "I have learned the basics of front-end development even before I went to study at my high school back in 2014. There, I learned the basic technologies of front-end and back-end (HTML, CSS, JavaScript, PHP, SQL) in greater detail.",
  "After I finished studying, due to some unfortunate family events, I had to stay home without job for a while (regular working hours weren't a possibility). On the other hand, this gave a lot of time to learn new technologies on my own.",
  "Since then, I learned a few widely popular practices that I love to use during development of my projects:"
]

const About = () => {
  return (
    <div className='max-w-[56rem] mx-auto'>
      <Section id='01' title='About me' path='about' >
        <div className='flex md:flex-row flex-col items-center my-8'>
          <div className='text-secondary-400 pr-0 md:pr-16 w-full flex flex-col gap-6 text-center md:text-left'>
            {aha.map((a,index) => <p key={index}>{a}</p>)}
          </div>
          <div className='relative rounded shadow-md my-16 md:m-0 min-w-[285px] min-h-[285px] md:min-w-[185px] md:min-h-[185px] lg:min-w-[305px] lg:min-h-[305px] group'>
            <div className='absolute top-0 right-0 left-0 bottom-0 rounded bg-primary-400 opacity-40 group-hover:opacity-0 z-20 transition-all duration-300' />
            <div className='absolute top-0 right-0 left-0 bottom-0 rounded border-2 border-primary-400 translate-x-5 translate-y-5 group-hover:translate-x-3 group-hover:translate-y-3 transition-all duration-300' />
            <div className='absolute top-0 right-0 left-0 bottom-0 grayscale rounded group-hover:grayscale-0 transition-all duration-300'>
              <Image
                className='rounded shadow-md'
                src={`https://picsum.photos/320/320`}
                layout="fill"
                objectFit='cover'
                objectPosition="center"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default About