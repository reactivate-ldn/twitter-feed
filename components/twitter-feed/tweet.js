import styled, { keyframes } from 'styled-components'
import replace from 'react-string-replace'

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(25px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`

const TweetContainer = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #017564;
  text-align: left;
  line-height: 45px;

  padding-left: 100px;
  background-image: url('/static/twitter_logo.svg');
  background-repeat: no-repeat;
  background-size: 200px 50px;
  background-position-x: -50px;
  background-position-y: 25px;
  width: 50%;

  display: block;
  transition: display 0.5s ease;
  width: 50%;
  height: 150px;
  margin-top: -20%;

  animation: 1.2s ease 0s ${fadeIn} both;
  will-change: transform, opacity;
`

const Link = styled.a`
  display: inline;
  color: white;
  text-decoration: none;
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

const Tweet = ({ text }) => (
  <TweetContainer>
    {styliseTweet(text)}
  </TweetContainer>
)

export default Tweet
