import React, { Component } from 'react'
import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import { theme } from '../constants'
import BaseLayout from '../components/layout/BaseLayout'
import Elipsis from '../components/Elipsis'

import { mocks } from '../constants'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Chats extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: theme.colors.header
    },
    headerLeft: (
      <Text style={{ fontSize: 20, padding: 10, color: theme.colors.white }}>
        Chats
      </Text>
    )
  }

  enterChatRoom = data => {
    console.log('!', data)
    const { id, name } = data.users[0]
    this.props.navigation.navigate('ChatModal', {
      id,
      name
    })
  }

  render() {
    return (
      <BaseLayout>
        <FlatList
          data={mocks.chats}
          renderItem={({ item, index }) => {
            console.log(item)
            return (
              <TouchableOpacity
                style={styles.chatContainer}
                onPress={this.enterChatRoom.bind(this, item)}
              >
                <View style={styles.chatLeftColumn}>
                  <Image
                    style={styles.chatAvatart}
                    source={require('../assets/images/avatar.png')}
                  />
                </View>
                <View style={styles.chatCenterColumn}>
                  <Text style={styles.chatTitle}>{item.users[0].name}</Text>

                  <Elipsis
                    text={item.lastMessage}
                    style={styles.chatMessage}
                    maxLength={45}
                  />
                </View>
                <View style={styles.chatRightColumn}>
                  <Text style={styles.timeText}>{item.lastMessageAt}</Text>
                </View>
              </TouchableOpacity>
            )
          }}
        />
      </BaseLayout>
    )
  }
}

const styles = StyleSheet.create({
  chatContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 54,
    marginBottom: 25
  },
  chatTitle: {
    fontSize: 17,
    marginBottom: 2
  },
  chatMessage: {
    fontSize: 14,
    color: theme.colors.gray
  },
  chatLeftColumn: {
    flex: 2
  },
  chatCenterColumn: {
    flex: 8,
    paddingLeft: 10
  },
  chatRightColumn: {
    flex: 1.5,
    alignItems: 'flex-end'
  },
  timeText: {
    color: theme.colors.gray,
    fontSize: 12
  },
  chatAvatart: {
    width: 54,
    height: 54
  }
})
