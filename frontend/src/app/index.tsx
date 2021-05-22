import { Providers } from './providers'
import { Router } from './router'
import { Layout } from './layout'

export const App = () => {
  return (
    <Providers>
      <Layout>
        <Router />
      </Layout>
    </Providers>
  )
}
