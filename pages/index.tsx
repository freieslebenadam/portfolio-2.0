import { Layout } from '@components'
import { About, Contact, Hero, Projects, Skills } from '@components/Sections'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </Layout>
  )
}

export default Home
