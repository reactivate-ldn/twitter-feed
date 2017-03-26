import Tweet from './tweet'
import styled from 'styled-components'
import Animate from 'rc-animate';

const TweetsContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
`

const Tweets = ({ tweets }) => (
  <TweetsContainer>
    <Animate transitionName="tweet">
      {
        tweets.map(tweet => (
          <Tweet key={tweet.id} {...tweet} />
        ))
      }
    </Animate>
  </TweetsContainer>
)

export default Tweets
