import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator,
  createSwitchNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Button } from 'react-native'

// Components
import Badge from '../components/Badge'

// Screens
// import HomeConatiner from '../containers/HomeConainer'
import Welcome from '../screens/Welcome'

// Auth Screen
import Login from '../screens/Login'

// App Screen
import Friends from '../screens/Friends'
import Settings from '../screens/Settings'
import TimeLine from '../screens/TimeLine'
import Phone from '../screens/Phone'
import Chats from '../screens/Chats'
import { theme } from '../constants'

// Modal
import FriendDetailModal from '../screens/modal/FriendDetailModal'
import Chat from '../screens/modal/ChatModal'

const FriendStack = createStackNavigator(
  {
    Friends: {
      screen: Friends
      // navigationOptions: ({ navigation }) => {
      // return {
      //   headerTitle: 'Settings',
      // }
    },
    FriendDetailModal: {
      screen: FriendDetailModal
    }
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      headerBackTitle: null
    }
  }
)

const ChatStack = createStackNavigator(
  {
    Chats: {
      screen: Chats
    },
    ChatModal: {
      screen: Chat
    }
  },
  {
    mode: 'modal',
    defaultNavigationOptions: {
      headerBackTitle: null
    }
  }
)

const AppStack = createBottomTabNavigator(
  {
    Friends: {
      screen: FriendStack
    },
    Chats: {
      screen: ChatStack
    },
    TimeLine,
    Phone,
    Settings
  },
  {
    initialRouteName: 'Chats',
    defaultNavigationOptions: ({ navigation }) => {
      return {
        tabBarVisible: navigation.state.index !== 1,
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
          const { routeName } = navigation.state
          let iconName
          let IconComponent = Ionicons
          switch (routeName) {
            case 'Friends':
              iconName = `ios-person`
              break
            case 'Settings':
              iconName = `ios-settings`
              break
            case 'TimeLine':
              iconName = `ios-time`
              break
            case 'Phone':
              iconName = `ios-call`
              break
            case 'Chats':
              iconName = `ios-chatboxes`
              break
          }

          // You can return any component that you like here!
          return <IconComponent name={iconName} size={25} color={tintColor} />
        }
      }
    }
  }
)

const AuthStack = createStackNavigator({
  Login
})

export default createAppContainer(
  createSwitchNavigator(
    {
      App: AppStack,
      Auth: AuthStack
    },
    {
      initialRouteName: 'App'
    }
  )
)
