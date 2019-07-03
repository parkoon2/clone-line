import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const BaseLayout = ({ children, style }) => {
  return <View style={[styles.container, { ...style }]}>{children}</View>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 17
  }
})

export default BaseLayout
