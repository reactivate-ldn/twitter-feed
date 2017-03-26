import Tweet from './tweet'
import styled from 'styled-components'

const TweetsContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  z-index: 2;
`

const Tweets = ({ tweets }) => (
  <TweetsContainer>
    {tweets.map(tweet => (
      <Tweet key={tweet.id} {...tweet} />
    ))}
  </TweetsContainer>
)

export default Tweets
