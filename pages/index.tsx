import { Layout } from '@components'
import { Hero } from '@components/Sections'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
    </Layout>
  )
}

export default Home
