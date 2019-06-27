import { combineReducers } from 'redux'

// Reducers
import count from './count'
import socket from './socket'

const rootReducer = combineReducers({
  count,
  socket
})

export default rootReducer
