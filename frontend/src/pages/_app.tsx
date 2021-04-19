import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Providers } from '@/providers'
import { Layout } from '@/app/main'

const App = ({ Component, pageProps }: AppProps) => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <Providers>
      <Head>
        <title>koy.app</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      {isMounted && (
        <Layout>
          <Component {...pageProps} />
        </Layout>
      )}
    </Providers>
  )
}

export default App
