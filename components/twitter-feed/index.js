import { Component } from 'react'
import Tweets from './tweets'
import MovingTrain from '../moving-train'
import { listen, unlisten } from './feed'

export default class TwitterFeed extends Component {
  state = {
    tweets: []
  }

  addTweet = ({ id, user: { screen_name, profile_image_url_https }, text }) => {
    const tweet = {
      id,
      handle: `@${screen_name}`,
      avatar: profile_image_url_https,
      text
    }

    this.setState({ tweets: [tweet] })

    if (this.timeout) {
      window.clearTimeout(this.timeout)
    }

    this.timeout = window.setTimeout(() => {
      this.setState({ tweets: [{
        ...tweet,
        expired: true
      }] })
    }, 4000)
  }

  componentDidMount() {
    listen(this.addTweet)
  }

  componentWillUnmount() {
    unlisten(this.addTweet)
  }

  render() {
    const { tweets } = this.state

    return (
      <div>
        <Tweets tweets={tweets} />
        <MovingTrain />
      </div>
    )
  }
}
