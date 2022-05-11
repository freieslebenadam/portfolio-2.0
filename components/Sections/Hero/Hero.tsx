import React from 'react'

const Hero = () => {
  return (
    <section className="h-[80vh] flex flex-col justify-center">
      <article className='prose prose-2xl prose-p:text-secondary-500 prose-h1:text-secondary-200 prose-h2:text-secondary-400 prose-h2:mt-0 prose-h1:mb-2 prose-h1:text-4xl md:prose-h1:text-7xl prose-h2:text-4xl md:prose-h2:text-6xl prose-p:text-base md:prose-p:text-lg prose-h2:mb-8 prose-p:mb-14 prose-p:font-medium'>
        <h3 className='font-mono font-medium text-primary-400 tracking-wide text-lg mb-8 ml-1'>Welcome, my name is</h3>
        <h1>Adam Freiesleben.</h1>
        <h2>I build modern web applications.</h2>

        <p className='max-w-[38rem]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde, laboriosam voluptates porro eum nesciunt consequuntur, tenetur odit voluptatem dolorum facere omnis! Dolores, dicta unde <span className='pb-1 cursor-pointer border-b border-transparent transition-all hover:border-primary-400 font-semibold text-primary-400'>Lorem</span>.
        </p>

        <button className='text-primary-400 border-primary-400 font-mono py-4 px-6 border-2 rounded-md text-lg font-medium bg-primary-400 bg-opacity-0 transition-all hover:bg-opacity-10'>
          Get in touch with me!
        </button>
      </article>
    </section>
  )
}

export default Hero