require('dotenv').config()

const dev = process.env.NODE_ENV !== 'production'
const moduleAlias = require('module-alias')

if (!dev) {
  moduleAlias.addAlias('react', 'preact-compat')
  moduleAlias.addAlias('react-dom', 'preact-compat')

  if (process.env.NOW_LOGS_KEY) {
    require('now-logs')(process.env.NOW_LOGS_KEY)
  }
}

const { parse } = require('url')
const { Server } = require('http')
const express = require('express')
const socketIO = require('socket.io')
const LRUCache = require('lru-cache')
const next = require('next')
const tweets = require('./lib/tweetStream')

const nextApp = next({ dir: '.', dev })
const handle = nextApp.getRequestHandler()

const ssrCache = new LRUCache({
  max: 100,
  maxAge: 1000 * 60 * 60 * 24 // 24h
})

const cachedRender = (req, res, pagePath, queryParams) => {
  const key = `${req.url}`

  if (!dev && ssrCache.has(key)) {
    res.append('X-Cache', 'HIT')
    res.send(ssrCache.get(key))
    return
  }

  nextApp.renderToHTML(req, res, pagePath, queryParams)
    .then(html => {
      ssrCache.set(key, html)

      res.append('X-Cache', 'MISS')
      res.send(html)
    })
    .catch(err => {
      nextApp.renderError(err, req, res, pagePath, queryParams)
    })
}

const PORT = process.env.PORT || 3000

nextApp.prepare()
  .then(() => {
    const app = express()
    const server = Server(app);

    app.disable('x-powered-by')

    app.get('/', (req, res) => {
      cachedRender(req, res, '/')
    })

    app.get('*', (req, res) => {
      const parsedUrl = parse(req.url, true)
      handle(req, res, parsedUrl)
    })

    const io = socketIO(server)

    io.on('connection', socket => {
      console.log('User connected. Socket id %s', socket.id);

      socket.on('disconnect', () => {
        console.log('User disconnected. %s. Socket id %s', socket.id);
      })
    });

    server.listen(PORT, err => {
      if (err) {
        throw err
      }

      tweets(data => {
        io.sockets.emit('tweet', data)
      })

      console.log(`> Ready on http://localhost:${PORT}`)
    })
  })
