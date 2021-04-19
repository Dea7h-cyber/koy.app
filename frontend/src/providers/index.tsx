import { OvermindProvider } from './Overmind'
import { ThemeProvider } from './Theme'

export const Providers: React.FC = ({ children }) => {
  return (
    <OvermindProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </OvermindProvider>
  )
}
