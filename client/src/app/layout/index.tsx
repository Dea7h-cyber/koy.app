import Button from '@material-ui/core/Button'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

import { useActions, useAppState } from 'engine'
import styled from 'styled-components'

export const Layout: React.FC = ({ children }) => {
  const { toggleDarkMode } = useActions().app
  const { darkMode } = useAppState()

  return (
    <AppWrapper>
      <Skyline>sky</Skyline>
      <Navbar>nav</Navbar>
      <Content>
        <div>
          <Button onClick={() => toggleDarkMode()}>
            {darkMode ? <Brightness4Icon /> : <Brightness7Icon />}
          </Button>
          <input type='checkbox' checked={!!darkMode} readOnly />
        </div>
        <div>{children}</div>
      </Content>
    </AppWrapper>
  )
}

const AppWrapper = styled.main`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: grid;
  grid-template-areas:
    'skyline  skyline'
    'navbar   content';
  grid-template-rows: 80px 1fr;
  grid-template-columns: 200px 1fr;
`

const Skyline = styled.div`
  grid-area: skyline;
`

const Navbar = styled.nav`
  grid-area: navbar;
`

const Content = styled.div`
  grid-area: content;
`
