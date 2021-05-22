import styled from 'styled-components'

import { useActions, useAppState } from 'engine'

export const Layout: React.FC = ({ children }) => {
  const { toggleDarkMode } = useActions().app
  const { darkMode } = useAppState()

  return (
    <AppWrapper>
      {children}

      <div>
        <button onClick={() => toggleDarkMode()}>switch</button>{' '}
        <input type='checkbox' checked={darkMode} />
      </div>
    </AppWrapper>
  )
}

/** ----------------------------------------------- */

const AppWrapper = styled.main`
  width: 100%;
  max-width: 1260px;
  margin: 0 auto;
  padding: 0 30px;
`
