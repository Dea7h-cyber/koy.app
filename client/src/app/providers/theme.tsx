import { useMemo } from 'react'
import { useAppState } from 'engine'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import { createMuiTheme, ThemeProvider as MaterialProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'

export const ThemeProvider: React.FC = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)')
  const darkMode = useAppState().darkMode

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: darkMode === null && prefersDarkMode ? 'dark' : darkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode, darkMode],
  )

  return (
    <MaterialProvider theme={theme}>
      <CssBaseline />
      {children}
    </MaterialProvider>
  )
}
