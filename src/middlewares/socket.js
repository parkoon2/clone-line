import io from 'socket.io-client'

import { OPEN_WEBSOCKET, updateWebSocket } from '../reducers/socket'

const endpoint = 'https://knowledgetalk.co.kr:9000/SignalServer'
const options = {
  secure: true,
  reconnect: true,
  rejectUnauthorized: false,
  transports: ['websocket']
}

const socketMiddleware = store => next => action => {
  console.log('this is socket middle ware', action)
  if (action.type === OPEN_WEBSOCKET) {
    const socket = io('https://knowledgetalk.co.kr:5501/SignalServer', {
      secure: true,
      reconnect: true,
      rejectUnauthorized: false,
      transports: ['websocket']
    })
    socket.on('connect', () => {
      store.dispatch(updateWebSocket(socket))
      console.log(`${socket.id} is connected`)
    })

    socket.on('connect_error', err => {
      console.error(err)
    })

    socket.on('disconnected', () => {
      console.log('socket disconnected')
    })
  }

  next(action)
}

export default socketMiddleware
