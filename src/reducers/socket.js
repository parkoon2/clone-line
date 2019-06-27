export const OPEN_WEBSOCKET = 'my-app/socket/OPEN_WEBSOCKET'
export const UPDATE_WEBSOCKET = 'my-app/socket/OPEN_UPDATE'

const initialState = {
  instance: ''
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_WEBSOCKET:
      return {
        ...state
      }
    case UPDATE_WEBSOCKET:
      return {
        ...state,
        instance: action.payload.socket
      }

    default:
      return state
  }
}

export const openWebSocket = () => {
  return {
    type: OPEN_WEBSOCKET
  }
}
export const updateWebSocket = socket => {
  return {
    type: UPDATE_WEBSOCKET,
    payload: {
      socket
    }
  }
}
