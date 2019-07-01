import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'

import backgroundImg from '../../assets/images/profile_background.jpg'

import avatar from '../../assets/images/avatar.png'
import { theme } from '../../constants'

export default class FriendDetail extends Component {
  static navigationOptions = {
    header: null
  }

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.avatarTitle}>Name</Text>
        </View>
        <View style={styles.footer} />
      </ImageBackground>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  avatarContainer: {
    alignItems: 'center'
  },
  avatar: {
    width: 100,
    height: 100
  },
  avatarTitle: {
    color: theme.colors.white,
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10
  },
  footer: {
    backgroundColor: 'red',
    height: 100
  }
})
