import { NextComponentType } from 'next'
import styled from 'styled-components'
import useDarkMode from 'use-dark-mode'

const Home: NextComponentType = () => {
  const darkMode = useDarkMode()

  return (
    <Test>
      yo!
      <div>
        <button onClick={darkMode.toggle}>Toggle DarkMode</button>
      </div>
    </Test>
  )
}

export default Home

const Test = styled.div`
  background-color: red;
`
