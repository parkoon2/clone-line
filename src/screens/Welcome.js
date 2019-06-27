import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

// Constants
import { screen, theme } from '../constants'

export default class Welcome extends Component {
  static navigationOptions = {
    // header: null
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome Page</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.props.navigation.navigate('Detail')
          }}
        >
          <Text style={styles.buttonText}>Go to Detail Page</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    padding: 20,
    width: screen.width - 15,
    marginTop: theme.sizes.base,
    backgroundColor: theme.colors.primary,
    borderRadius: theme.sizes.radius
  },
  buttonText: {
    textAlign: 'center',
    color: theme.colors.white,
    fontSize: theme.fonts.body.fontSize
  }
})
