import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'

import { darkTheme, GlobalStyle, lightTheme } from '../styles'

const App = ({ Component, pageProps }: AppProps) => {
  const [isMounted, setIsMounted] = useState(false)
  const [darkmode, setDarkmode] = useState(false)
  const theme = darkmode ? darkTheme : lightTheme

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />

      <button onClick={() => setDarkmode(!darkmode)}>Switch Mode</button>

      {isMounted && <Component {...pageProps} />}
    </ThemeProvider>
  )
}

export default App
