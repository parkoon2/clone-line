import React, { Component } from 'react'
import { View, Text, ImageBackground, StyleSheet, Image } from 'react-native'

import backgroundImg from '../../assets/images/profile_background.jpg'

import avatar from '../../assets/images/avatar.png'
import { theme } from '../../constants'
import { width } from '../../constants/screen'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Ionicons from 'react-native-vector-icons/Ionicons'
// import console = require('console');

export default class FriendDetail extends Component {
  static navigationOptions = {
    // header: null
  }

  userId = this.props.navigation.getParam('id')
  userName = this.props.navigation.getParam('name')
  componentDidMount() {
    console.log(this.userId, this.userName)
  }

  handleStartingChat = () => {
    alert(`chat with ${this.userName} `)
  }

  handleStartingVideo = () => {
    alert(`video with ${this.userName}`)
  }

  render() {
    return (
      <ImageBackground source={backgroundImg} style={styles.container}>
        <View style={styles.avatarContainer}>
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.avatarTitle}>{this.userName}</Text>
        </View>
        <View style={styles.footer}>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={this.handleStartingChat}
          >
            <Ionicons name="ios-chatboxes" size={40} />
            <Text>Message</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.footerButton}
            onPress={this.handleStartingVideo}
          >
            <Ionicons name="ios-call" size={40} />
            <Text>Call</Text>
          </TouchableOpacity>
        </View>
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
  header: {
    position: 'absolute',
    top: 0,
    backgroundColor: 'red'
  },
  avatarContainer: {
    alignItems: 'center',
    marginTop: 200
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
    position: 'absolute',
    bottom: 0,
    backgroundColor: theme.colors.white,
    height: 80,
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  footerButton: {
    width: width / 3,
    height: 80,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
