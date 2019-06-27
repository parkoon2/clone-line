import React from 'react'
import { Image } from 'react-native'
import logo from '../../assets/images/logo.png'

class Logo extends React.Component {
  render() {
    return <Image source={logo} />
  }
}

export default Logo
