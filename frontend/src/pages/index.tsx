import { NextComponentType } from 'next'
import Head from 'next/head'

import styled from 'styled-components'

const Home: NextComponentType = () => {
  return (
    <Test>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div>zup biatch</div>
    </Test>
  )
}

export default Home

const Test = styled.div`
  background-color: red;
`
