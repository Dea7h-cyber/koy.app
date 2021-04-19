import { ThemeProvider as Provider } from 'styled-components'
import useDarkMode from 'use-dark-mode'
import { darkTheme, GlobalStyle, lightTheme } from '@/styles'

export const ThemeProvider: React.FC = ({ children }) => {
  const darkMode = useDarkMode(true)

  return (
    <Provider theme={darkMode.value ? darkTheme : lightTheme}>
      <GlobalStyle />
      {children}
    </Provider>
  )
}
