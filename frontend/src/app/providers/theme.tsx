import { ThemeProvider as Provider } from 'styled-components'
import { darkTheme, lightTheme } from 'styling'
import { useAppState } from 'engine'

export const ThemeProvider: React.FC = ({ children }) => {
  const darkMode = useAppState().darkMode
  return <Provider theme={darkMode ? darkTheme : lightTheme}>{children}</Provider>
}
