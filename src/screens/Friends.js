import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, FlatList, Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { theme, mocks } from '../constants'

import me from '../assets/images/avatar.png'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class Friends extends Component {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: theme.colors.header
    },
    headerLeft: (
      <Text style={{ fontSize: 20, padding: 10, color: theme.colors.white }}>
        Friends (83)
      </Text>
    ),
    headerRight: (
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          padding: 10
        }}
      >
        <Text style={{ marginRight: 20 }}>
          <Ionicons
            size={27}
            color={theme.colors.white}
            onPress={() => {}}
            name="ios-person-add"
          />
          ,
        </Text>
        <Text>
          <Ionicons
            size={27}
            color={theme.colors.white}
            coloronPress={() => {}}
            name="ios-search"
          />
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.myInfoContainer}>
          <Image source={me} style={styles.myAvatar} />
          <Text style={styles.myName}> parkoon </Text>
        </View>
        <View style={styles.division} />
        <View>
          <View style={styles.friendsHeaderContainer}>
            <Text style={styles.frinedsHeaderTitle}>Friends 83</Text>
          </View>
          <FlatList
            data={mocks.friends}
            renderItem={({ item }) => (
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate('FriendDetailModal', {
                    id: 'test',
                    name: 'test2'
                  })
                }}
              >
                <View style={styles.friendsContainer}>
                  <Image source={me} style={styles.friendAvatar} />
                  <Text style={styles.friendName}>{item.name}</Text>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17
  },
  myInfoContainer: {
    marginBottom: 17,
    flexDirection: 'row',
    alignItems: 'center'
  },
  myAvatar: {
    width: 80,
    height: 80
  },
  myName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 17
  },
  division: {
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
    marginBottom: 17
  },
  headerLeftText: {
    fontSize: 100
  },
  friendsHeaderContainer: {
    marginBottom: 17
  },
  frinedsHeaderTitle: {
    fontSize: 15,
    fontWeight: 'bold'
  },
  friendsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17
  },
  friendAvatar: {
    width: 60,
    height: 60
  },
  friendName: {
    fontSize: 17,
    marginLeft: 17
  }
})
