import Button from '@components/Button'
import { useLocale } from '@hooks'
import React from 'react'

const Hero = () => {
  const {t} = useLocale()

  return (
    <section className="h-[80vh] flex flex-col justify-center">
      <article className='prose prose-2xl prose-p:text-secondary-500 prose-h1:text-secondary-200 prose-h2:text-secondary-400 prose-h2:mt-0 prose-h1:mb-2 prose-h1:text-4xl md:prose-h1:text-7xl prose-h2:text-4xl md:prose-h2:text-6xl prose-p:text-base md:prose-p:text-lg prose-h2:mb-8 prose-p:mb-14 prose-p:font-medium'>
        <h3 className='font-mono font-medium text-primary-400 tracking-wide text-lg mb-8 ml-1'>{t.sections.hero.welcome}</h3>
        <h1>{t.sections.hero.title}</h1>
        <h2>{t.sections.hero.subtitle}</h2>

        <p className='max-w-[38rem]'>
          {t.sections.hero.description}  
        </p>

        <Button href='#contact'>
          {t.sections.hero.button}
        </Button>
      </article>
    </section>
  )
}

export default Hero