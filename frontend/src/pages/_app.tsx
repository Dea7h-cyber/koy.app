import { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import useDarkMode from 'use-dark-mode'

import { darkTheme, GlobalStyle, lightTheme } from '@/styles'
import { Layout } from '@/app/main'

import { Provider as OvermindProvider } from 'overmind-react'
import { createOvermind } from 'overmind'
import { config } from '@/overmind'

const App = ({ Component, pageProps }: AppProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const darkMode = useDarkMode(true)
  const overmind = createOvermind(config)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <OvermindProvider value={overmind}>
      <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
        <GlobalStyle />
        <Head>
          <title>koy.app</title>
          <link rel='icon' href='/favicon.ico' />
        </Head>
        {isMounted && (
          <Layout>
            <Component {...pageProps} />
          </Layout>
        )}
      </ThemeProvider>
    </OvermindProvider>
  )
}

export default App
