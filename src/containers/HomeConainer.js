import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'
import Home from '../screens/Home'

import { increase, decraseAsync } from '../reducers/count'

class HomeContainer extends React.Component {
  render() {
    return <Home {...this.props} />
  }
}

const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  onIncrement: () => dispatch(increase()),
  onDecrement: () => dispatch(decraseAsync())
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)
