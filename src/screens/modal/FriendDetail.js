import React, { Component } from 'react'
import { View, Text, ImageBackground } from 'react-native'

import backgroundImg from '../../assets/images/profile_background.jpg'

export default class FriendDetail extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ImageBackground
        source={backgroundImg}
        style={{ width: '100%', height: '100%' }}
      >
        <Text>Inside</Text>
      </ImageBackground>
    )
  }
}
