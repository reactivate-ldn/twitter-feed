import Tweet from './tweet'
import styled from 'styled-components'
import Animate from 'rc-animate';

const TweetsContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;

  padding: 10rem 2rem 5rem 2rem;
  width: 50rem;
  max-width: 100%;
  margin: 0 auto;
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
