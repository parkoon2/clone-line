import React from 'react'
import { View, Text, TextInput, StyleSheet } from 'react-native'
import IonIcons from 'react-native-vector-icons/Ionicons'
import BaseLayout from '../../components/layout/BaseLayout'
import { theme } from '../../constants'
import { width } from '../../constants/screen'
import { TouchableOpacity } from 'react-native-gesture-handler'

export default class ChatModal extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: navigation.getParam('name')
    }
  }

  state = {
    text: ''
  }

  friendId = this.props.navigation.getParam('id')
  friendName = this.props.navigation.getParam('name')
  send = () => {
    alert('send')
    console.log(this.state.text)
  }
  render() {
    return (
      <BaseLayout
        style={{
          backgroundColor: theme.colors.lightGray
        }}
      >
        <View style={[styles.chatContainer, styles.mine]}>
          <View style={styles.myMessageBox}>
            <Text style={styles.messageText}>
              my name is park jong hyeok, how about you?{' '}
            </Text>
          </View>
        </View>
        <View style={[styles.chatContainer, styles.yours]}>
          <Text style={styles.friendName}>{this.friendName}</Text>
          <View style={styles.yourMessageBox}>
            <Text>Ya</Text>
          </View>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            multiline={true}
            onChangeText={text => this.setState({ text })}
          />
          <TouchableOpacity onPress={this.send}>
            <IonIcons
              color={theme.colors.blue}
              style={styles.sendIcon}
              name="ios-send"
              size={40}
            />
          </TouchableOpacity>
        </View>
      </BaseLayout>
    )
  }
}

const styles = StyleSheet.create({
  chatContainer: {
    marginVertical: 3
  },
  mine: {
    alignItems: 'flex-end'
  },
  myMessageBox: {
    maxWidth: width / 2,
    backgroundColor: theme.colors.primary,
    padding: 14,
    borderRadius: 10
  },

  yourMessageBox: {
    maxWidth: width / 2,
    backgroundColor: theme.colors.white,
    padding: 14,
    borderRadius: 10
  },
  yours: {
    alignItems: 'flex-start'
  },
  messageText: {
    fontSize: 17
  },
  friendName: {
    paddingVertical: 4,
    fontSize: 14
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
    width: width,
    paddingVertical: 7,
    paddingLeft: 20,
    backgroundColor: theme.colors.white
  },
  input: {
    flex: 1,
    fontSize: 20,
    paddingHorizontal: 15,
    paddingVertical: 14,
    backgroundColor: theme.colors.lightGray,
    borderRadius: 10
  },
  sendIcon: {
    padding: 10
  }
})
