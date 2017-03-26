const Twitter = require('twitter')
const {
  CONSUMER_KEY,
  CONSUMER_SECRET,
  ACCESS_TOKEN_KEY,
  ACCESS_TOKEN_SECRET
} = process.env

if (
  !CONSUMER_KEY ||
  !CONSUMER_SECRET ||
  !ACCESS_TOKEN_KEY ||
  !ACCESS_TOKEN_SECRET
) {
  throw new Error('All environment variables need to be set to establish a connection to twitter!')
}

const tweets = new Twitter({
  consumer_key: CONSUMER_KEY,
  consumer_secret: CONSUMER_SECRET,
  access_token_key: ACCESS_TOKEN_KEY,
  access_token_secret: ACCESS_TOKEN_SECRET
})

const listeners = []

module.exports = function listen(listener) {
  if (!listeners.length) {
    tweets.stream('statuses/filter', {
      // track: 'reactivate,@reactivate_ldn'
      track: 'javascript'
    }, stream => {
      stream.on('data', data => {
        listeners.forEach(listener => listener(data))
      })
    })
  }

  listeners.push(listener)
}
