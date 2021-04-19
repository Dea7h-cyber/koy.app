import { useActions, useEffects } from '@/overmind'
import styled from 'styled-components'

export const Feed: React.FC = () => {
  const { getPosts } = useActions().user

  return (
    <Wrapper>
      feed
      <div>yo</div>
      <div>
        <button onClick={() => getPosts()}>click me</button>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: 1700px;
`
