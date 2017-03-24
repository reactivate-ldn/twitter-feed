
const { consumer_key, consumer_secret, access_token_key, access_token_secret, buzzword } = process.env;

if (!consumer_key || !consumer_secret || !access_token_key || !access_token_secret) {
    throw new Error('Environement variable missing, please set all env variable correctly');
}

module.exports = {
    config: {
        consumer_key,
        consumer_secret,
        access_token_key,
        access_token_secret,
        buzzword: buzzword || 'javascript'
    }
};
