import Button from '@components/Button'
import React from 'react'

const Contact = () => {
  return (
    <section className='my-48' id='contact'>
      <article className='flex flex-col text-center items-center max-w-2xl mx-auto'>
        <h5 className='font-mono font-medium text-primary-400'>04. What's Next?</h5>
        <h4 className='text-4xl font-bold pt-4 text-secondary-300'>Get In Touch</h4>
        <p className='leading-7 pt-4 pb-16'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem fugit rem totam libero provident voluptates distinctio doloremque animi aspernatur vitae aspernatur vitae.</p>
        <Button>
          Say hello
        </Button>
      </article>
    </section>
  )
}

export default Contact