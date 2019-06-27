import React from 'react'
import {
  createAppContainer,
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'
import Ionicons from 'react-native-vector-icons/Ionicons'

import { Button } from 'react-native'

// Components
import Badge from '../components/Badge'

// Screens
import Settings from '../screens/Settings'
import HomeConatiner from '../containers/HomeConainer'
import Welcome from '../screens/Welcome'

const tabs = createBottomTabNavigator(
  {
    HomeConatiner,
    Settings
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state
        let IconComponent = Ionicons
        let iconName
        if (routeName === 'Home') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`
          // Sometimes we want to add badges to some icons.
          // You can check the implementation below.
        } else if (routeName === 'Settings') {
          iconName = `ios-options`
          IconComponent = Badge
        }

        // You can return any component that you like here!
        return <IconComponent name={iconName} size={25} color={tintColor} />
      }
    })
  }
)

const screens = createStackNavigator(
  {
    Welcome,
    Detail: tabs
  },
  {
    // 각 스크린에서 navigationOptions를 설정하면 overrride 된다.
    defaultNavigationOptions: {
      headerRight: (
        <Button onPress={() => alert('Before override')} title="Click Me" />
      )
    }
  }
)

export default createAppContainer(screens)
