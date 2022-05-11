import { Layout } from '@components'
import { About, Hero } from '@components/Sections'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
    </Layout>
  )
}

export default Home
