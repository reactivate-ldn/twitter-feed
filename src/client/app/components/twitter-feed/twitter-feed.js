const tweetStream = require('../../socket/tweets.io');
const React = require('react');
const Tweets = require('./components/tweets');
const MovingTrain = require('../moving-train');

const TwitterFeed = React.createClass({
    getInitialState: function () {
        return {
            tweets: []
        };
    },
    addTweet: function (tweet) {
        setTimeout(() => {
            const tweets = [ tweet ];
            this.setState({ tweets: tweets });
        }, 100);
    },
    componentWillMount: function () {
        tweetStream(function (tweet) {
            this.addTweet(tweet);
        }.bind(this));
    },
    render: function () {
        return (
            <div>
                <Tweets tweets={this.state.tweets}/>
                <MovingTrain />
            </div>
        )
    }
});

module.exports = TwitterFeed;
