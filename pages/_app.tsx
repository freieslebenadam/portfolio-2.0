import { Layout } from '@components'
import '@styles/globals.css'
import '@styles/tailwind.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Head>
        <title>Adam Freiesleben</title>
      </Head>

      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
