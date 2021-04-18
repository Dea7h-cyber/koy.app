import styled from 'styled-components'

export const AppWrapper: React.FC = ({ children }) => {
  return (
    <Wrapper>
      <Skyline>
        <Header>
          <Logo>logo</Logo>
          <Search>
            <input type='text' placeholder='Search' />
          </Search>
          <Icons>icons here...</Icons>
        </Header>
      </Skyline>
      <Centered>
        <MiddleWrapper>
          <Content>{children}</Content>
          <SideFooter>
            <div>stuff here</div>
            <div>stuff here</div>
            <div>stuff here</div>
            <div>stuff here</div>
            <div>stuff here</div>
            <div>stuff here</div>
            <div>stuff here</div>
          </SideFooter>
        </MiddleWrapper>
      </Centered>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  overflow-x: hidden;
`

const Skyline = styled.nav`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 54px;
  background-color: #fafafa;
  color: #262626;
  border-bottom: 1px solid #dbdbdb;
`

const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  max-width: 935px;
  width: 100%;
  height: 100%;
`

const Centered = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
`

const MiddleWrapper = styled.div`
  max-width: 935px;
  width: 100%;
`

const Content = styled.div`
  margin-right: 28px;
  max-width: 614px;
  width: 100%;
  float: left;
`

const SideFooter = styled.footer`
  position: fixed;
  top: 79px;
  right: calc((100vw - 935px) / 2);
  width: 293px;
  background-color: rgba(124, 124, 124, 0.103);
`

const Logo = styled.div`
  flex: 1 9999 0%;
  min-width: 40px;
`

const Search = styled.div`
  flex: 0 1 auto;
  min-width: 125px;
  width: 215px;
  display: flex;
  justify-content: center;
`

const Icons = styled.div`
  flex: 1 0 0%;
  display: flex;
  justify-content: flex-end;
`
