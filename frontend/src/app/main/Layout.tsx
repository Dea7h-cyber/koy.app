import { NextComponentType } from 'next'
import styled from 'styled-components'

export const Layout: NextComponentType = ({ children }) => {
  return (
    <Wrapper>
      <Skyline>
        <Logo>{`KOY.APP CRYPTO`}</Logo>
        <div>right</div>
      </Skyline>
      <Body>
        <Nav>
          <div>nav..</div>
          <div>menu etc..</div>
        </Nav>
        <Content>{children}</Content>
      </Body>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background-color: #ffffff;
  color: #3a3e41;
`

const Skyline = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 54px;
  border-bottom: 1px solid rgba(171, 214, 226, 0.671);
`

const Body = styled.div`
  height: calc(100vh - 54px);
  width: 100vw;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 80px;
  height: calc(100vh - 54px);
  border-right: 1px solid rgba(171, 214, 226, 0.671);
`

const Content = styled.main`
  width: calc(100vw - 80px);
  height: calc(100vh - 54px);
`

const Logo = styled.div`
  background: url('/images/koy.png') no-repeat left center/35px 35px;
  padding-left: 45px;
  margin-left: 15px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`
