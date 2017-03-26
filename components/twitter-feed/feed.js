import io from 'socket.io-client'

let socket
let listeners = []

export function listen(listener) {
  if (!socket) {
    socket = io(window.location.href)

    socket.on('tweet', tweet => {
      listeners.forEach(listener => {
        listener(tweet)
      })
    });
  }

  listeners.push(listener)
}

export function unlisten(listener) {
  listeners = listeners.filter(x => x === listener)
}
