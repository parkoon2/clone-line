import React, { Component } from 'react'

import Navigation from './src/navigation'

import store from './src/store'
import { Provider } from 'react-redux'

import { openWebSocket } from './src/reducers/socket'

export default class App extends Component {
  componentDidMount() {
    console.log('component did mount', openWebSocket())
    store.dispatch(openWebSocket())
  }

  render() {
    return (
      <Provider store={store}>
        <Navigation />
      </Provider>
    )
  }
}
