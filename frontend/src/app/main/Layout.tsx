import { NextComponentType } from 'next'
import { useAppState } from '@/overmind'
import { AppWrapper, LoginPage } from '@/app/main'

export const Layout: NextComponentType = ({ children }) => {
  const { user } = useAppState()

  return user.isAuth ? <AppWrapper>{children}</AppWrapper> : <LoginPage />
}
