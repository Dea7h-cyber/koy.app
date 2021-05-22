import { BrowserRouter } from 'react-router-dom'
import { OvermindProvider } from './overmind'
import { ThemeProvider } from './theme'

import { GlobalStyles } from 'styling'

export const Providers: React.FunctionComponent = ({ children }) => {
  return (
    <OvermindProvider>
      <ThemeProvider>
        <BrowserRouter>
          <GlobalStyles />
          {children}
        </BrowserRouter>
      </ThemeProvider>
    </OvermindProvider>
  )
}
