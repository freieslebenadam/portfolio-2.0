import Button from '@components/Button'
import { useLocale } from '@hooks'
import React from 'react'

const Contact = () => {
  const {t} = useLocale()

  return (
    <section className='my-64' id='contact'>
      <article className='flex flex-col text-center items-center max-w-2xl mx-auto'>
        <h5 className='font-mono font-medium text-primary-400'>04. {t.sections.contact.subtitle}</h5>
        <h4 className='text-4xl font-bold pt-4 text-secondary-300'>{t.sections.contact.title}</h4>
        <p className='leading-7 pt-4 pb-16 font-medium text-secondary-500'>{t.sections.contact.description}</p>
        <Button>
          {t.sections.contact.button}
        </Button>
      </article>
    </section>
  )
}

export default Contact