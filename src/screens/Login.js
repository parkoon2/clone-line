import React, { Component } from 'react'
import {
  View,
  Text,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native'
import Icons from 'react-native-vector-icons/Ionicons'
import { theme } from '../constants'
import { width } from '../constants/screen'

import logo from '../assets/images/logo.png'

export default class Login extends Component {
  static navigationOptions = {
    header: null
  }

  handleLogin = () => {
    // 로그인 성공 시
    this.props.navigation.navigate('App')
  }
  render() {
    return (
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />

        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}> USERNAME </Text>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputTitle}> PASSWORD </Text>
          <TextInput style={styles.input} />
        </View>
        <TouchableOpacity>
          <Text style={styles.forgotTitle}>Forgot Password?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.login, styles.buttonShadow]}
          onPress={this.handleLogin}
        >
          <Text style={styles.loginTitle}>LOGIN</Text>
        </TouchableOpacity>

        <View style={styles.divisionContainer}>
          <View style={styles.division} />
          <Text style={styles.divisionTitle}>OR CONNECTED WITH</Text>
        </View>

        <View style={styles.socialContainer}>
          <TouchableOpacity
            style={[
              styles.socialButton,
              styles.buttonShadow,
              { backgroundColor: theme.colors.facebook }
            ]}
          >
            <Icons style={styles.socialIcon} name="logo-facebook" />
            <Text style={styles.socialTitle}>FACEBOOK</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.socialButton,
              styles.buttonShadow,
              { backgroundColor: theme.colors.google }
            ]}
          >
            <Icons style={styles.socialIcon} name="logo-googleplus" />
            <Text style={styles.socialTitle}>GOOGLE</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: theme.colors.background
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50
  },
  inputContainer: {
    marginTop: 30,
    alignItems: 'flex-start'
  },
  input: {
    width: width - 72,
    height: 42,
    borderBottomWidth: 1.5,
    borderColor: theme.colors.primary,
    color: theme.colors.gray,
    paddingTop: 0
  },
  inputTitle: {
    color: theme.colors.primary,
    fontSize: 12,
    fontWeight: 'bold',
    padding: 0
  },
  forgotTitle: {
    color: theme.colors.gray,
    textAlign: 'right',
    width: width - 72,
    paddingVertical: 13
  },
  login: {
    backgroundColor: '#fff',
    width: width - 72,
    padding: 20,
    borderRadius: 30
  },
  loginTitle: {
    color: theme.colors.primary,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 15
  },
  divisionContainer: {
    alignItems: 'center',
    paddingVertical: 20
  },
  division: {
    position: 'absolute',
    top: 28,
    width: width - 72,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.gray
  },
  divisionTitle: {
    color: theme.colors.gray,
    fontSize: 12,
    backgroundColor: theme.colors.background,
    paddingHorizontal: 10
  },
  socialContainer: {
    width: width - 72,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  socialButton: {
    flex: 1,
    padding: 10,
    borderRadius: 30,
    marginHorizontal: 7,
    flexDirection: 'row',
    alignItems: 'center'
  },
  socialTitle: { color: theme.colors.white, fontSize: 12, fontWeight: 'bold' },
  socialIcon: { color: theme.colors.white, fontSize: 17, marginRight: 20 },
  buttonShadow: {
    shadowColor: theme.colors.gray,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2
  }
})
