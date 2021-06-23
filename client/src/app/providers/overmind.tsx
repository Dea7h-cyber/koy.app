import { Provider } from 'overmind-react'
import { createOvermind } from 'overmind'
import { config } from 'engine'

export const OvermindProvider: React.FC = ({ children }) => {
  const overmind = createOvermind(config)
  return <Provider value={overmind}>{children}</Provider>
}
