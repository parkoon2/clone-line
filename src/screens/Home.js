import React from 'react'
import { View, Text, Button } from 'react-native'
import { connect } from 'react-redux'

class Home extends React.Component {
  render() {
    console.log('home props', this.props)

    return (
      <View>
        <Text>Home Page</Text>
        <Text>{this.props.count.number}</Text>
        <Button
          title="+"
          onPress={() => {
            this.props.onIncrement()
          }}
        />
        <Button
          title="-"
          onPress={() => {
            this.props.onDecrement()
          }}
        />
      </View>
    )
  }
}

export default Home
