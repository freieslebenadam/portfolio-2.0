import { Button, Layout } from '@components'
import { About, Contact, Hero, Projects, Skills } from '@components/Sections'
import type { NextPage } from 'next'

const NotFoundPage: NextPage = () => {
  return (
    <div className='h-screen w-full flex flex-col justify-center items-center text-neutral-300'>
      <h1 className='font-mono font-black text-primary-400 text-9xl'>404</h1>
      <h2 className='text-4xl font-semibold py-10'>Page not found!</h2>
      <Button href='/'>
        Back to home
      </Button>
    </div>
  )
}

export default NotFoundPage
