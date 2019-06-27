import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'
import { composeWithDevTools } from 'remote-redux-devtools'

// Custom middlewares
import { socketMiddleware } from '../middlewares'

const middlewares = [thunk, socketMiddleware]

const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middlewares))
)

export default store
