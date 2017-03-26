import styled from 'styled-components'
import replace from 'react-string-replace'

const TweetContainer = styled.div`
  font-size: 2rem;
  font-weight: bold;
  color: #017564;
  text-align: left;
  line-height: 1.3;

  width: 50rem;
  max-width: 95%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;

  transition: opacity 0.4s ease-in-out, transform 0.8s ease-in-out;
  will-change: transform, opacity;

  opacity: 1;
  transform: translateY(0);

  &.tweet-enter, &.tweet-leave {
    opacity: 0;
    transform: translateY(2rem);
  }
`

const Avatar = styled.img`
  height: 5rem;
  width: 5rem;
  border-radius: 6px;

  margin-right: 1rem;
  margin-top: 0.5rem;
  border: 2px solid #fff;
  flex-shrink: 0;
`

const Link = styled.a`
  display: inline;
  color: white;
  text-decoration: none;
`

const Handle = styled.a`
  font-size: 1.9rem;
  font-weight: normal;
  color: #fff;
  text-decoration: none;
  line-height: 1.6;
`

const chainReplace = (...args) => text => args.reduce((acc, [ regex, transform]) => (
  replace(acc, regex, transform)
), text)

const styliseTweet = chainReplace(
  [ /(https?:\/\/\S+)/g, (match, i) => (
    <Link
      target="_blank"
      rel="noopener"
      key={`url-${i}`}
      href={match}
    >
      {match}
    </Link>
  )],

  [ /@(\w+)/g, (match, i) => (
    <Link
      target="_blank"
      rel="noopener"
      key={`handle-${i}`}
      href={`https://twitter.com/${match}`}
    >
      @{match}
    </Link>
  )],

  [ /#(\w+)/g, (match, i) => (
    <Link
      target="_blank"
      rel="noopener"
      key={`hashtag-${i}`}
      href={`https://twitter.com/hashtag/${match}`}
    >
      #{match}
    </Link>
  )]
)

const Tweet = ({ handle, text, avatar }) => (
  <TweetContainer>
    <Avatar src={avatar} />

    <div>
      <Handle
        target="_blank"
        rel="noopener"
        href={`https://twitter.com/${handle}`}
      >
        {handle}
      </Handle>

      <div>
        {styliseTweet(text)}
      </div>
    </div>
  </TweetContainer>
)

export default Tweet
