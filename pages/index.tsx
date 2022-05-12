import { Layout } from '@components'
import { About, Contact, Hero, Projects, Skills } from '@components/Sections'
import { useLocale } from '@hooks'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const Home: NextPage = () => {
  const { locale } = useRouter()
  const {t, setLocaleTo} = useLocale()

  useEffect(() => {
    if (locale === "en" || locale === "cs") {
      setLocaleTo(locale)
    }
  }, [])

  return (
    <>
      <Head>
        <title>{t.meta.title}</title>
        <meta name="description" content={t.meta.description} />
      </Head>

      <Layout>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </Layout>
    </>
  )
}

export default Home
